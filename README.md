# Wayfarer

A browser-based 2D space exploration game with planetary flight, procedural caves, base building, crafting, creature discovery, survival systems, space stations, and top-down exploration.

## Run locally or on LAN

Install dependencies once, then start the Wayfarer server:

```bash
npm install
npm start
```

Open `http://127.0.0.1:5179/` on the host computer. Other devices on the same network can join at `http://192.168.50.59:5179/` while that remains the host's local IP address.

The Node server is required for LAN co-op. Connected explorers see each other's movement and ships when they are in the same location. Progress, inventories, construction, and world state are still saved locally in each player's browser.

## Controls

- `WASD` or arrow keys: Move and fly
- `E`: Interact
- `Tab`: Discoveries and settings
- `I`: Inventory
- `M`: Planet map
- `X`: Quick actions
- `-` / `+`: Camera zoom
