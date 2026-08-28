import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { randomUUID } from "node:crypto";
import { WebSocket, WebSocketServer } from "ws";

const host = process.env.HOST || "0.0.0.0";
const port = Math.max(1024, Math.min(65535, Number(process.env.PORT) || 5179));
const root = resolve(process.cwd());
const clients = new Map();
const colors = ["#62dced", "#f2c45d", "#83efae", "#ef796f", "#bf9cff", "#ff9f5f"];
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".webm": "video/webm",
  ".svg": "image/svg+xml",
};

function safeName(value) {
  const cleaned = String(value || "WAYFARER").replace(/[^a-z0-9 _-]/gi, "").trim().slice(0, 16);
  return cleaned || "WAYFARER";
}

function finite(value, fallback = 0, limit = 250000) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(-limit, Math.min(limit, number)) : fallback;
}

function sanitizeState(value = {}) {
  const allowedModes = new Set(["planet", "planetFlight", "space", "interior", "baseInterior", "caveInterior", "mineshaft", "stationInterior"]);
  return {
    active: Boolean(value.active),
    mode: allowedModes.has(value.mode) ? value.mode : "planet",
    planet: Math.max(0, Math.min(2, Math.trunc(Number(value.planet) || 0))),
    zone: String(value.zone || "").replace(/[^a-z0-9:_-]/gi, "").slice(0, 64),
    x: finite(value.x),
    y: finite(value.y),
    angle: finite(value.angle, 0, Math.PI * 4),
    facing: Math.max(0, Math.min(3, Math.trunc(Number(value.facing) || 0))),
    moving: Boolean(value.moving),
    pulse: Boolean(value.pulse),
  };
}

function publicPlayer(client) {
  return { id: client.id, name: client.name, color: client.color, ...client.state };
}

function send(socket, payload) {
  if (socket.readyState === WebSocket.OPEN) socket.send(JSON.stringify(payload));
}

function broadcast(payload, except = null) {
  const encoded = JSON.stringify(payload);
  for (const client of clients.values()) if (client.socket !== except && client.socket.readyState === WebSocket.OPEN) client.socket.send(encoded);
}

const server = createServer((request, response) => {
  const requestUrl = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);
  const pathname = decodeURIComponent(requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname);
  const filePath = resolve(root, `.${pathname}`);
  if (!filePath.startsWith(`${root}${sep}`) || !existsSync(filePath) || !statSync(filePath).isFile()) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); response.end("Not found"); return;
  }
  const extension = extname(filePath).toLowerCase();
  const cacheControl = pathname.startsWith("/assets/optimized/") ? "public, max-age=86400" : "no-cache";
  response.writeHead(200, { "Content-Type": mimeTypes[extension] || "application/octet-stream", "Cache-Control": cacheControl, "X-Content-Type-Options": "nosniff" });
  createReadStream(filePath).pipe(response);
});

const wss = new WebSocketServer({ server, path: "/multiplayer", maxPayload: 4096, perMessageDeflate: false });
wss.on("connection", socket => {
  const client = { id: randomUUID().slice(0, 8), name: "WAYFARER", color: colors[clients.size % colors.length], socket, alive: true, state: sanitizeState() };
  clients.set(client.id, client);
  send(socket, { type: "welcome", id: client.id, players: [...clients.values()].filter(other => other !== client).map(publicPlayer) });
  socket.on("pong", () => { client.alive = true; });
  socket.on("message", raw => {
    let message; try { message = JSON.parse(raw.toString()); } catch { return; }
    if (message.type === "hello") {
      client.name = safeName(message.name); broadcast({ type: "player", player: publicPlayer(client) }); return;
    }
    if (message.type === "state") {
      client.state = sanitizeState(message.state); broadcast({ type: "player", player: publicPlayer(client) }, socket);
    }
  });
  socket.on("close", () => { clients.delete(client.id); broadcast({ type: "leave", id: client.id }); });
  socket.on("error", () => {});
});

const heartbeat = setInterval(() => {
  for (const client of clients.values()) {
    if (!client.alive) { client.socket.terminate(); continue; }
    client.alive = false; client.socket.ping();
  }
}, 15000);
wss.on("close", () => clearInterval(heartbeat));

server.listen(port, host, () => console.log(`Wayfarer LAN server listening on http://${host}:${port}`));

