const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");

const ui = {
  ferrite: document.querySelector("#ferrite-count"),
  flora: document.querySelector("#flora-count"),
  crystal: document.querySelector("#crystal-count"),
  tool: document.querySelector("#tool-meter"),
  life: document.querySelector("#life-meter"),
  lifeReadout: document.querySelector("#life-readout"),
  toolReadout: document.querySelector("#tool-readout"),
  hazardReadout: document.querySelector("#hazard-readout"),
  lifeStatus: document.querySelector(".life-status"),
  toolStatus: document.querySelector(".tool-status"),
  hazard: document.querySelector("#hazard-meter"),
  hazardLabel: document.querySelector("#hazard-status-label"),
  hazardStatus: document.querySelector(".hazard-status"),
  toolLabel: document.querySelector("#secondary-status-label"),
  resources: document.querySelector("#resource-bar"),
  targetControl: document.querySelector("#target-control"),
  orbitControl: document.querySelector("#orbit-control"),
  objective: document.querySelector("#objective-meter"),
  objectiveCount: document.querySelector("#objective-count"),
  objectiveTitle: document.querySelector("#objective-title"),
  objectiveCopy: document.querySelector("#objective-copy"),
  stormAlert: document.querySelector("#storm-alert"),
  stormAlertState: document.querySelector("#storm-alert-state"),
  stormAlertName: document.querySelector("#storm-alert-name"),
  stormAlertMeter: document.querySelector("#storm-alert-meter"),
  stormAlertDetail: document.querySelector("#storm-alert-detail"),
  interaction: document.querySelector("#interaction"),
  interactionKey: document.querySelector("#interaction-key"),
  interactionTitle: document.querySelector("#interaction-title"),
  interactionProgress: document.querySelector("#interaction-progress"),
  upgrades: document.querySelector("#upgrade-panel"),
  discoveries: document.querySelector("#discovery-panel"),
  planetMap: document.querySelector("#planet-map-panel"),
  planetMapCanvas: document.querySelector("#planet-map-canvas"),
  planetMapName: document.querySelector("#planet-map-name"),
  planetMapPosition: document.querySelector("#planet-map-position"),
  planetMapRegion: document.querySelector("#planet-map-region"),
  planetMapTime: document.querySelector("#planet-map-time"),
  shipInventory: document.querySelector("#ship-inventory-panel"),
  shipFerrite: document.querySelector("#ship-ferrite-count"),
  shipFlora: document.querySelector("#ship-flora-count"),
  shipCrystal: document.querySelector("#ship-crystal-count"),
  shipCargoTotal: document.querySelector("#ship-cargo-total"),
  shipEngineStatus: document.querySelector("#ship-engine-status"),
  shipEngineMeter: document.querySelector("#ship-engine-meter"),
  shipWingStatus: document.querySelector("#ship-wing-status"),
  shipWingMeter: document.querySelector("#ship-wing-meter"),
  shipHullStatus: document.querySelector("#ship-hull-status"),
  shipHullMeter: document.querySelector("#ship-hull-meter"),
  shipLaunchStatus: document.querySelector("#ship-launch-status"),
  shipLaunchMeter: document.querySelector("#ship-launch-meter"),
  shipScannerStatus: document.querySelector("#ship-scanner-status"),
  exosuitFerrite: document.querySelector("#exosuit-ferrite-count"),
  exosuitFlora: document.querySelector("#exosuit-flora-count"),
  exosuitCrystal: document.querySelector("#exosuit-crystal-count"),
  exosuitSlotCount: document.querySelector("#exosuit-slot-count"),
  inventoryToolCapacity: document.querySelector("#inventory-tool-capacity"),
  inventoryMiningLevel: document.querySelector("#inventory-mining-level"),
  inventoryRangeLevel: document.querySelector("#inventory-range-level"),
  inventoryCombatLevel: document.querySelector("#inventory-combat-level"),
  inventoryArmorLevel: document.querySelector("#inventory-armor-level"),
  inventorySlotGrid: document.querySelector(".inventory-slot-grid"),
  inventoryHotbar: document.querySelector("#inventory-hotbar"),
  inventoryLifeReadout: document.querySelector("#inventory-life-readout"),
  inventoryEnergyReadout: document.querySelector("#inventory-energy-readout"),
  inventoryArmorReadout: document.querySelector("#inventory-armor-readout"),
  armorSlots: document.querySelectorAll("[data-armor-slot]"),
  itemTooltip: document.querySelector("#item-tooltip"),
  inventoryCrafting: document.querySelector("#inventory-crafting-grid"),
  inventoryCraftingAccess: document.querySelector("#inventory-crafting-access"),
  buildCatalog: document.querySelector("#build-catalog-grid"),
  buildCatalogContext: document.querySelector("#build-catalog-context"),
  refineryPanel: document.querySelector("#refinery-panel"),
  refineryCargo: document.querySelector("#refinery-cargo-grid"),
  refineryInput: document.querySelector("#refinery-input-slot"),
  refineryOutput: document.querySelector("#refinery-output-slot"),
  refineryMeter: document.querySelector("#refinery-process-meter"),
  refineryStatus: document.querySelector("#refinery-process-status"),
  refineryPower: document.querySelector("#refinery-power-status"),
  craftingPanel: document.querySelector("#crafting-panel"),
  craftingTitle: document.querySelector("#crafting-panel-title"),
  craftingEyebrow: document.querySelector("#crafting-panel-eyebrow"),
  craftingPower: document.querySelector("#crafting-power-status"),
  craftingRecipes: document.querySelector("#crafting-recipe-list"),
  missionTerminal: document.querySelector("#mission-terminal-panel"),
  missionTerminalStatus: document.querySelector("#mission-terminal-status"),
  missionTerminalStages: document.querySelector("#mission-terminal-stages"),
  missionTerminalAction: document.querySelector("#mission-terminal-action"),
  hotbar: document.querySelector("#hotbar"),
  buildToolbar: document.querySelector("#build-toolbar"),
  buildSelectionName: document.querySelector("#build-selection-name"),
  buildSelectionCost: document.querySelector("#build-selection-cost"),
  quickMenu: document.querySelector("#quick-menu"),
  recallHint: document.querySelector("#recall-hint"),
  buildOverride: document.querySelector("#setting-build-override"),
  clearBuildings: document.querySelector("#clear-all-buildings"),
  baseSystems: document.querySelector("#base-systems-panel"),
  basePower: document.querySelector("#base-power-status"),
  baseVault: document.querySelector("#base-vault-status"),
  baseSynthesis: document.querySelector("#base-synthesis-status"),
  launchOverride: document.querySelector("#setting-launch-override"),
  launch: document.querySelector("#launch-button"),
  location: document.querySelector("#location"),
  cycleStatus: document.querySelector("#cycle-status"),
  cycleSpeed: document.querySelector("#setting-cycle-speed"),
  cycleSpeedValue: document.querySelector("#cycle-speed-value"),
  toast: document.querySelector("#toast"),
  mainMenu: document.querySelector("#main-menu"),
  mainMenuPrimary: document.querySelector("#main-menu-primary"),
  mainMenuContinue: document.querySelector("#main-menu-continue"),
  mainMenuNew: document.querySelector("#main-menu-new"),
  mainMenuSettings: document.querySelector("#main-menu-settings"),
  mainMenuSettingsPanel: document.querySelector("#main-menu-settings-panel"),
  mainMenuSettingsBack: document.querySelector("#main-menu-settings-back"),
  mainMenuSaveSummary: document.querySelector("#main-menu-save-summary"),
  mainMenuCycleSpeed: document.querySelector("#main-menu-cycle-speed"),
  mainMenuCycleValue: document.querySelector("#main-menu-cycle-value"),
  mainMenuLaunchOverride: document.querySelector("#main-menu-launch-override"),
  mainMenuBuildOverride: document.querySelector("#main-menu-build-override"),
  mainMenuPlayerName: document.querySelector("#main-menu-player-name"),
  mainMenuNetworkStatus: document.querySelector("#main-menu-network-status"),
  playerName: document.querySelector("#setting-player-name"),
  multiplayerStatus: document.querySelector("#multiplayer-status"),
  multiplayerCount: document.querySelector("#multiplayer-count"),
  stationServices: document.querySelector("#station-services-panel"),
  stationHullStatus: document.querySelector("#station-hull-status"),
  stationWingStatus: document.querySelector("#station-wing-status"),
  stationSuitStatus: document.querySelector("#station-suit-status"),
  stationRepair: document.querySelector("#station-repair"),
  stationResupply: document.querySelector("#station-resupply"),
  stationExchange: document.querySelector("#station-exchange"),
  stationUndock: document.querySelector("#station-undock"),
  stationDialogue: document.querySelector("#station-dialogue"),
  stationDialogueMeta: document.querySelector("#station-dialogue-meta"),
  stationDialogueName: document.querySelector("#station-dialogue-name"),
  stationDialogueText: document.querySelector("#station-dialogue-text"),
  stationDialogueImage: document.querySelector("#station-dialogue-image"),
  stationDialogueClose: document.querySelector("#station-dialogue-close"),
};

const TAU = Math.PI * 2;
const keys = new Set();
let width = innerWidth;
let height = innerHeight;
let dpr = Math.min(devicePixelRatio || 1, 1.5);
let last = performance.now();
let elapsed = 0;
let toastTimer = 0;
let clearBuildingsTimer = 0;
let frameDt = 1 / 60;
let frameSerial = 0;
let cycleHudText = "";
let activeInventoryView = "exosuit";
let storedSaveAvailable = false;
let gameSessionStarted = false;
let newExpeditionConfirmTimer = 0;
const visibleDrawables = [];
const multiplayer = { socket: null, id: null, players: new Map(), status: "connecting", reconnectTimer: 0, retryDelay: 1000, sendAccumulator: 0, name: "WAYFARER" };

const player = { x: 160, y: 90, vx: 0, vy: 0, angle: 0, facing: 0, walkTime: 0, speed: 150, inventory: { ferrite: 0, flora: 0, crystal: 0 }, items: {}, tool: 100, life: 100, exposure: 0, lastDamage: -99 };
const resourceDefinitions = {
  ferrite: { name: "Ferrite", description: "Iron-rich mineral fragments used for construction and refining.", icon: "assets/optimized/pixel/items/raw/mined-ferrite-v1.webp" },
  flora: { name: "Flora", description: "Harvested organic matter used for fabrication and biological research.", icon: "assets/optimized/pixel/items/raw/harvested-flora-v1.webp" },
  crystal: { name: "Crystal", description: "Charged crystalline material used in scanners and advanced technology.", icon: "assets/optimized/pixel/items/fabricated/crystal-v1.webp" },
};
const itemDefinitions = {
  copper_ore: { name: "Copper Ore", color: "#c9794f", description: "Raw conductive copper-bearing rock. Refine it into copper ingots.", icon: "assets/optimized/pixel/items/raw/mined-copper-ore-v1.webp" },
  copper_ingot: { name: "Copper Ingot", color: "#e19a69", description: "Refined conductive metal used in power systems and fabrication.", icon: "assets/optimized/pixel/items/refined/copper-ingot-v1.webp" },
  silica: { name: "Silica", color: "#d7e2dd", description: "Pale crystalline mineral used in glass, optics, and electronics.", icon: "assets/optimized/pixel/items/raw/mined-silica-v1.webp" },
  iron_ingot: { name: "Iron Ingot", color: "#aebbb9", description: "Refined structural metal produced from ferrite.", icon: "assets/optimized/pixel/items/refined/iron-ingot-v1.webp" },
  copper_wire: { name: "Copper Wire", color: "#e6a068", description: "Insulated conductive wiring used in power cables and electronics.", icon: "assets/optimized/pixel/items/fabricated/copper-wire-v1.webp", hotbar: false },
  pipe_segment: { name: "Sealed Pipe Segment", color: "#67bfe8", description: "Pressure-rated metal conduit used to construct water lines.", icon: "assets/optimized/pixel/items/fabricated/pipe-segment-v1.webp", hotbar: false },
  glass_panel: { name: "Glass Panel", color: "#aee8e5", description: "Reinforced silica glazing for displays, lights, and sealed habitats.", icon: "assets/optimized/pixel/items/fabricated/glass-panel-v1.webp", hotbar: false },
  pressure_seal: { name: "Pressure Seal", color: "#7fd39d", description: "Flexible airtight gasket used between modular structures.", icon: "assets/optimized/pixel/items/fabricated/pressure-seal-v1.webp", hotbar: false },
  circuit_board: { name: "Circuit Board", color: "#65cf8c", description: "Compact control board required by automated base equipment.", icon: "assets/optimized/pixel/items/fabricated/circuit-board-v1.webp", hotbar: false },
  power_regulator: { name: "Power Regulator", color: "#f0ca61", description: "High-current controller for generators, pumps, and energy storage.", icon: "assets/optimized/pixel/items/fabricated/power-regulator-v1.webp", hotbar: false },
  resin_sap: { name: "Resin Sap", color: "#d9b85e", description: "Sticky botanical resin harvested from alien flora and refined into latex.", icon: "assets/optimized/pixel/items/fabricated/resin-sap-v1.webp", hotbar: false },
  carbon_biomass: { name: "Carbon Biomass", color: "#71956c", description: "Carbon-rich plant matter suitable for polymer processing.", icon: "assets/optimized/pixel/items/fabricated/carbon-biomass-v1.webp", hotbar: false },
  latex: { name: "Natural Latex", color: "#e4d9ad", description: "Refined elastic polymer used to manufacture rubber components.", icon: "assets/optimized/pixel/items/fabricated/natural-latex-v1.webp", hotbar: false },
  polymer_resin: { name: "Polymer Resin", color: "#78b7a8", description: "Refined organic polymer feedstock used to manufacture plastic.", icon: "assets/optimized/pixel/items/fabricated/polymer-resin-v1.webp", hotbar: false },
  glass: { name: "Refined Glass", color: "#bfeeed", description: "Purified transparent material refined from underground silica.", icon: "assets/optimized/pixel/items/fabricated/refined-glass-v1.webp", hotbar: false },
  rubber: { name: "Rubber Sheet", color: "#55635e", description: "Flexible insulated material used in seals, pumps, and electrical systems.", icon: "assets/optimized/pixel/items/fabricated/rubber-sheet-v1.webp", hotbar: false },
  plastic: { name: "Plastic Panel", color: "#d7e1dc", description: "Lightweight formed polymer used in electronics and base equipment.", icon: "assets/optimized/pixel/items/fabricated/plastic-panel-v1.webp", hotbar: false },
  reinforced_visor: { name: "Reinforced Visor", color: "#9de4e6", description: "Helmet · 4% armor and 15% toxin resistance.", icon: "assets/optimized/pixel/items/armor/reinforced-visor-v1.webp", armorSlot: "helmet", armor: 4, toxin: .15, hotbar: false },
  ferrite_chestplate: { name: "Ferrite Chestplate", color: "#aebbb9", description: "Chest · 12% armor and 10% heat resistance.", icon: "assets/optimized/pixel/items/armor/ferrite-chestplate-v1.webp", armorSlot: "chest", armor: 12, heat: .1, hotbar: false },
  mining_gauntlets: { name: "Mining Gauntlets", color: "#e6a068", description: "Gauntlets · 4% armor and 15% faster mining.", icon: "assets/optimized/pixel/items/armor/mining-gauntlets-v1.webp", armorSlot: "gauntlets", armor: 4, mining: .15, hotbar: false },
  trail_boots: { name: "Trail Boots", color: "#7fd39d", description: "Boots · 4% armor, 8% movement, and 15% cold resistance.", icon: "assets/optimized/pixel/items/armor/trail-boots-v1.webp", armorSlot: "boots", armor: 4, speed: .08, cold: .15, hotbar: false },
  verdite_biohelmet: { name: "Verdite Bio-Helmet", color: "#83efae", description: "Helmet · 8% armor, 70% toxin resistance, and 25% faster fauna analysis.", icon: "assets/optimized/pixel/items/armor/verdite-biohelmet-v1.webp", armorSlot: "helmet", armor: 8, toxin: .7, scan: .25, hotbar: false },
  ignicite_chestplate: { name: "Ignicite Thermal Plate", color: "#ffad62", description: "Chest · 18% armor and 70% heat resistance.", icon: "assets/optimized/pixel/items/armor/ignicite-chestplate-v1.webp", armorSlot: "chest", armor: 18, heat: .7, hotbar: false },
  ignicite_gauntlets: { name: "Ignicite Combat Gauntlets", color: "#ef7d45", description: "Gauntlets · 8% armor and 20% higher multi-tool combat output.", icon: "assets/optimized/pixel/items/armor/ignicite-gauntlets-v1.webp", armorSlot: "gauntlets", armor: 8, combat: .2, hotbar: false },
  cryocite_boots: { name: "Cryocite Expedition Boots", color: "#b8f4f5", description: "Boots · 8% armor, 14% movement, and 70% cold resistance.", icon: "assets/optimized/pixel/items/armor/cryocite-boots-v1.webp", armorSlot: "boots", armor: 8, speed: .14, cold: .7, hotbar: false },
  verdite_ore: { name: "Verdite Ore", color: "#70db91", description: "Reactive ore native to Thalassa's mineral-rich subsurface.", icon: "assets/optimized/pixel/items/planetary/verdite-ore-v1.webp" },
  verdite_alloy: { name: "Verdite Alloy", color: "#83efae", description: "A lightweight refined alloy with biological conductivity.", icon: "assets/optimized/pixel/items/planetary/verdite-alloy-v1.webp" },
  ignicite_ore: { name: "Ignicite Ore", color: "#ef7d45", description: "Heat-bearing ore formed beneath Vesper's volcanic crust.", icon: "assets/optimized/pixel/items/planetary/ignicite-ore-v1.webp" },
  ignicite_alloy: { name: "Ignicite Alloy", color: "#ffad62", description: "A heat-resistant alloy refined from ignicite ore.", icon: "assets/optimized/pixel/items/planetary/ignicite-alloy-v1.webp" },
  cryocite_ore: { name: "Cryocite Ore", color: "#72dce9", description: "Cold-reactive mineral found beneath Orison's frozen surface.", icon: "assets/optimized/pixel/items/planetary/cryocite-ore-v1.webp" },
  cryocite_alloy: { name: "Cryocite Composite", color: "#b8f4f5", description: "An insulating composite refined from cryocite ore.", icon: "assets/optimized/pixel/items/planetary/cryocite-alloy-v1.webp" },
  bio_syringe: { name: "Bio-Syringe", color: "#f2c45d", description: "A field sampler used to collect biological specimens from creatures.", icon: "assets/optimized/pixel/items/fabricated/bio-syringe-v1.webp", tool: true },
  launch_fuel: { name: "Launch Fuel", color: "#efb65d", description: "A stabilized biomass propellant canister consumed when the Kestrel ascends to orbit.", icon: "assets/optimized/pixel/items/fabricated/launch-fuel-v1.webp", hotbar: false },
  habitat_module: { name: "Underground Entrance Module", color: "#62dced", description: "A deployable pressure-sealed entrance and surface elevator assembly.", icon: "assets/optimized/pixel/base/underground-entrance.webp", hotbar: false },
  room_module: { name: "Modular Room Kit", color: "#dce5e1", description: "A prefabricated underground habitat room ready for deployment.", icon: "assets/optimized/pixel/base/modular-room-opt.webp", hotbar: false },
  hallway_module: { name: "Hallway Kit", color: "#8fa4a5", description: "A sealed corridor segment for connecting underground rooms.", icon: "assets/optimized/pixel/base/modular-hallway-opt.webp", hotbar: false },
  refinery_module: { name: "Ore Refinery Module", color: "#f2c45d", description: "A packaged refinery workstation with processing hardware.", icon: "assets/optimized/pixel/base/refinery-opt.webp", hotbar: false },
  generator_module: { name: "Generator Module", color: "#77d69b", description: "A compact base generator ready for cable connection.", icon: "assets/optimized/pixel/base/generator-opt.webp", hotbar: false },
  storage_module: { name: "Storage Module", color: "#b9c8c5", description: "A deployable secured cargo storage unit.", icon: "assets/optimized/pixel/base/storage-opt.webp", hotbar: false },
  planter_module: { name: "Hydroponics Planter", color: "#77d69b", description: "A powered cultivation bed that produces flora for the base vault.", icon: "assets/optimized/pixel/base/hydroponics-planter-opt.webp", hotbar: false },
  med_station_module: { name: "Medical Station", color: "#ef796f", description: "A powered treatment unit that restores exosuit health.", icon: "assets/optimized/pixel/base/medical-station-opt.webp", hotbar: false },
  greenhouse_module: { name: "Greenhouse Module", color: "#8cebb0", description: "A large sealed cultivation habitat with high flora output.", icon: "assets/optimized/pixel/base/greenhouse-opt.webp", hotbar: false },
  water_pump_module: { name: "Water Pump Module", color: "#59aef2", description: "A surface intake pump for lakes, ice deposits, and subsurface reservoirs.", icon: "assets/optimized/pixel/base/water-pump-v1.webp", hotbar: false },
  water_tank_module: { name: "Water Tank Module", color: "#79c9ed", description: "A sealed irrigation reservoir that supplies underground greenhouses.", icon: "assets/optimized/pixel/base/water-tank-v1.webp", hotbar: false },
  battery_module: { name: "Portable Grid Battery", color: "#62dced", description: "A portable 200 kW reserve. Recovered batteries retain their stored charge.", icon: "assets/optimized/pixel/base/battery-v1.webp" },
  solar_panel_module: { name: "Solar Panel Module", color: "#62dced", description: "A deployable photovoltaic array rated for 14 kW peak output.", icon: "assets/optimized/pixel/base/solar-panel-v1.webp", hotbar: false },
  field_light_module: { name: "Field Light Module", color: "#bff8ff", description: "A deployable one-kilowatt area light.", icon: "assets/optimized/pixel/base/field-light-v1.webp", hotbar: false },
  landing_pad_module: { name: "Landing Pad Module", color: "#f2c45d", description: "A reinforced illuminated landing platform kit.", icon: "assets/optimized/pixel/base/landing-pad-v1.webp", hotbar: false },
  exosuit_station_module: { name: "Exosuit Station Module", color: "#83efae", description: "A powered fitting and fabrication station for advanced planetary armor.", icon: "assets/optimized/pixel/base/exosuit-station-v1.webp", hotbar: false },
  thalassa_sample: { name: "Thalassa Fauna Sample", color: "#75e19c", description: "A preserved biological sample collected from Thalassan fauna.", icon: "assets/optimized/pixel/items/planetary/thalassa-sample-v1.webp", hotbar: false },
  vesper_sample: { name: "Vesper Fauna Sample", color: "#f18a55", description: "A preserved biological sample collected from Vesper fauna.", icon: "assets/optimized/pixel/items/planetary/vesper-sample-v1.webp", hotbar: false },
  orison_sample: { name: "Orison Fauna Sample", color: "#a9edf2", description: "A preserved biological sample collected from Orison fauna.", icon: "assets/optimized/pixel/items/planetary/orison-sample-v1.webp", hotbar: false },
};
const hotbar = { slots: Array(8).fill(null), selected: 0 };
const EXOSUIT_SLOT_COUNT = 32;
const equippedArmor = { helmet: null, chest: null, gauntlets: null, boots: null };
const refineryJobs = new Map();
const refineryUi = { pieceId: null };
const craftingUi = { pieceId: null, station: "craftingTable" };
function selectedHotbarItem() { return hotbar.slots[hotbar.selected]; }
function attributeText(value) { return String(value || "").replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"); }
function addItem(item, amount = 1) {
  player.items[item] = (player.items[item] || 0) + amount;
  if (itemDefinitions[item]?.hotbar !== false && !hotbar.slots.includes(item)) {
    const empty = hotbar.slots.indexOf(null); if (empty >= 0) hotbar.slots[empty] = item;
  }
  updateHotbar();
}
function armorStats() {
  return Object.values(equippedArmor).reduce((stats, item) => {
    const definition = itemDefinitions[item]; if (!definition) return stats;
    for (const stat of ["armor", "mining", "combat", "speed", "scan", "toxin", "heat", "cold"]) stats[stat] += definition[stat] || 0;
    return stats;
  }, { armor: 0, mining: 0, combat: 0, speed: 0, scan: 0, toxin: 0, heat: 0, cold: 0 });
}
function equipArmor(item, slot = itemDefinitions[item]?.armorSlot) {
  const definition = itemDefinitions[item];
  if (!definition?.armorSlot || definition.armorSlot !== slot || materialAmount(item) < 1) { showToast("INCOMPATIBLE EXOSUIT MODULE"); return; }
  const previous = equippedArmor[slot];
  changeMaterial(item, -1); if (previous) addItem(previous);
  equippedArmor[slot] = item; updateUI(); saveGame(); showToast(`${definition.name.toUpperCase()} EQUIPPED`);
}
function unequipArmor(slot) {
  const item = equippedArmor[slot]; if (!item) return;
  equippedArmor[slot] = null; addItem(item); updateUI(); saveGame(); showToast(`${itemDefinitions[item].name.toUpperCase()} STORED`);
}
function renderArmorSlots() {
  const stats = armorStats();
  ui.inventoryArmorReadout.textContent = `${Math.round(stats.armor)}%`;
  ui.inventoryArmorLevel.textContent = `${Math.round(stats.armor)}% ARM · T${Math.round(stats.toxin * 100)} H${Math.round(stats.heat * 100)} C${Math.round(stats.cold * 100)}`;
  ui.armorSlots.forEach(slot => {
    const slotName = slot.dataset.armorSlot; const item = equippedArmor[slotName]; const definition = itemDefinitions[item];
    slot.classList.toggle("equipped", Boolean(definition)); slot.style.setProperty("--item-color", definition?.color || "#71847f");
    slot.innerHTML = `${definition?.icon ? `<img src="${definition.icon}" alt="">` : "<i aria-hidden=\"true\"></i>"}<small>${slotName.toUpperCase()}</small>`;
    slot.dataset.itemName = definition?.name || `Empty ${slotName} slot`; slot.dataset.itemDescription = definition?.description || `Drag ${slotName} armor here.`;
    slot.setAttribute("aria-label", definition ? `${definition.name}. ${definition.description}` : `Empty ${slotName} slot`);
  });
}
function updateHotbar() {
  ui.hotbar.innerHTML = hotbar.slots.map((item, index) => {
    const definition = hotbarItemDefinition(item); const amount = hotbarItemAmount(item);
    if (item && !amount) { hotbar.slots[index] = null; return `<button class="hotbar-slot ${index === hotbar.selected ? "selected" : ""}" data-hotbar-slot="${index}" aria-label="Empty slot ${index + 1}"><kbd>${index + 1}</kbd></button>`; }
    if (!item) return `<button class="hotbar-slot ${index === hotbar.selected ? "selected" : ""}" data-hotbar-slot="${index}" aria-label="Empty slot ${index + 1}"><kbd>${index + 1}</kbd></button>`;
    const name = definition?.name || "Empty"; const description = definition?.description || "No additional analysis available.";
    const icon = definition?.icon ? `<img src="${definition.icon}" alt="">` : `<i></i>`;
    return `<button class="hotbar-slot ${index === hotbar.selected ? "selected" : ""}" data-hotbar-slot="${index}" data-item-name="${attributeText(name)}" data-item-description="${attributeText(description)}" style="--item-color:${definition?.color || "#8ca09b"}" aria-label="${attributeText(`${name}. ${description}`)}"><kbd>${index + 1}</kbd>${item ? `${icon}${definition?.tool ? `<small>${definition.name}</small>` : `<b>${amount}</b>`}` : ""}</button>`;
  }).join("");
  ui.hotbar.querySelectorAll("[data-hotbar-slot]").forEach(button => button.addEventListener("click", () => activateHotbarSlot(Number(button.dataset.hotbarSlot))));
  renderInventoryHotbar();
}

function hotbarItemDefinition(item) { return resourceDefinitions[item] || itemDefinitions[item] || null; }
function hotbarItemAmount(item) { return item && Object.hasOwn(player.inventory, item) ? player.inventory[item] : item ? player.items[item] || 0 : 0; }
function hotbarItemEligible(item) { const definition = hotbarItemDefinition(item); return Boolean(item && hotbarItemAmount(item) > 0 && definition && !definition.armorSlot); }
function renderInventoryHotbar() {
  if (!ui.inventoryHotbar) return;
  ui.inventoryHotbar.innerHTML = hotbar.slots.map((item, index) => {
    const validItem = hotbarItemEligible(item) ? item : null; if (item && !validItem) hotbar.slots[index] = null;
    const definition = hotbarItemDefinition(validItem); const icon = definition?.icon ? `<img src="${definition.icon}" alt="">` : validItem ? "<i></i>" : "";
    return `<button class="inventory-hotbar-slot ${index === hotbar.selected ? "selected" : ""} ${validItem ? "occupied" : ""}" type="button" data-inventory-hotbar-slot="${index}" ${validItem ? `data-hotbar-item="${validItem}" draggable="true" data-item-name="${attributeText(definition.name)}" data-item-description="${attributeText(definition.description)}"` : ""} style="--item-color:${definition?.color || "#8ca09b"}" aria-label="${validItem ? attributeText(`${definition.name}, hotbar slot ${index + 1}`) : `Empty hotbar slot ${index + 1}`}"><kbd>${index + 1}</kbd>${icon}${validItem ? `<b>${hotbarItemAmount(validItem)}</b>` : ""}</button>`;
  }).join("");
}
function assignHotbarItem(item, targetIndex) {
  if (!hotbarItemEligible(item) || targetIndex < 0 || targetIndex >= hotbar.slots.length) return;
  const sourceIndex = hotbar.slots.indexOf(item); if (sourceIndex === targetIndex) return;
  const displaced = hotbar.slots[targetIndex]; hotbar.slots[targetIndex] = item;
  if (sourceIndex >= 0) hotbar.slots[sourceIndex] = displaced || null;
  hotbar.selected = targetIndex; updateHotbar(); saveGame();
}

function groundBuildTypeForItem(item) {
  return Object.entries(constructionModules).find(([, moduleItem]) => moduleItem === item)?.[0] || null;
}
function activateHotbarSlot(index, startPlacement = true) {
  hotbar.selected = Math.max(0, Math.min(hotbar.slots.length - 1, index)); updateHotbar(); saveGame();
  if (!startPlacement) return;
  const item = selectedHotbarItem(); const buildType = groundBuildTypeForItem(item);
  if (!buildType) { if (build.active) toggleBuildMode(); return; }
  if (!["planet", "baseInterior"].includes(state.mode)) { if (build.active) toggleBuildMode(); showToast("MODULE PLACEMENT UNAVAILABLE"); return; }
  if (!buildTypeAllowed(buildType)) { if (build.active) toggleBuildMode(); showToast(state.mode === "baseInterior" ? "THIS MODULE REQUIRES THE SURFACE" : "THIS MODULE REQUIRES AN UNDERGROUND BASE"); return; }
  if (build.active) { build.selected = buildType; build.wireStartId = null; updateBuildToolbar(); return; }
  build.selected = buildType; build.wireStartId = null; toggleBuildMode(); showToast(`${buildTypes[buildType].name.toUpperCase()} PLACEMENT ACTIVE`);
}

function positionItemTooltip(clientX, clientY, target) {
  if (ui.itemTooltip.hidden) return;
  const targetRect = target.getBoundingClientRect(); const tooltipRect = ui.itemTooltip.getBoundingClientRect(); const gap = 12; const edge = 10;
  let x = Number.isFinite(clientX) ? clientX + gap : targetRect.right + gap;
  let y = Number.isFinite(clientY) ? clientY + gap : targetRect.top;
  if (x + tooltipRect.width > innerWidth - edge) x = (Number.isFinite(clientX) ? clientX : targetRect.left) - tooltipRect.width - gap;
  if (y + tooltipRect.height > innerHeight - edge) y = (Number.isFinite(clientY) ? clientY : targetRect.bottom) - tooltipRect.height - gap;
  ui.itemTooltip.style.left = `${Math.max(edge, x)}px`; ui.itemTooltip.style.top = `${Math.max(edge, y)}px`;
}

function showItemTooltip(target, clientX, clientY) {
  ui.itemTooltip.querySelector("strong").textContent = target.dataset.itemName;
  ui.itemTooltip.querySelector("span").textContent = target.dataset.itemDescription;
  ui.itemTooltip.hidden = false; positionItemTooltip(clientX, clientY, target);
}

function hideItemTooltip() { ui.itemTooltip.hidden = true; }
const ship = { x: 90, y: 60, vx: 0, vy: 0, angle: -0.4, repaired: false, engine: 0, scanner: 0, hull: 100, wings: 96 };
const MIN_CAMERA_ZOOM = .65;
const MAX_CAMERA_ZOOM = 1.2;
const camera = { x: player.x, y: player.y, shake: 0, zoom: 1, targetZoom: 1 };
const state = { mode: "planet", mining: null, harvesting: null, scanning: null, mineProgress: 0, toolOverheated: false, enterProgress: 0, panelOpen: true, menuOpen: true, discoveryOpen: false, mapOpen: false, planet: 0, launchTime: 0, worldTime: 0, weatherTime: 0, stars: [], atmosphere: [] };
const interiorPlayer = { x: 0, y: 105, vx: 0, vy: 0, facing: 2, walkTime: 0, exitProgress: 0, exitArmed: false, pilotProgress: 0, pilotArmed: false };
const atmosphericFlight = { landProgress: 0, launchProgress: 0, landingArmed: false, launchArmed: false };
const reentry = { time: 0, planet: 0, surfaceFade: 0 };
const stationDocking = { time: 0 };
const stationPlayer = { x: 0, y: 105, vx: 0, vy: 0, facing: 2, walkTime: 0, undockProgress: 0, undockArmed: false, npcInteractArmed: false };
const stationCamera = { x: 0, y: 0 };
const stationLayout = {
  halfWidth: 1400, halfHeight: 960, terminal: { x: 0, y: -860 }, kestrel: { x: 0, y: 700 }, playerSpawn: { x: 0, y: 520 }, kestrelDock: 2,
  docks: [-1000, -500, 0, 500, 1000].map((x, index) => ({ x, y: 700, number: String(index + 2).padStart(2, "0") })),
};
const stationTraffic = { nextArrival: 8, nextId: 1, slots: Array(5).fill(null) };
const stationRaces = [
  { name: "Auralith", body: "crystal", color: "#91d8dc", accent: "#e4ffff", roles: ["Light Cartographer", "Resonance Envoy", "Prism Trader"], names: ["Sael", "Iri", "Vaun", "Oris"], greeting: "Your signal carries a steady light, Wayfarer." },
  { name: "Nymari", body: "aquatic", color: "#4fae9c", accent: "#9df1cf", roles: ["Tide Archivist", "Spore Merchant", "Current Pilot"], names: ["Moa", "Telu", "Neris", "Amani"], greeting: "May the current between worlds carry you safely." },
  { name: "Vaskari", body: "plated", color: "#a27b57", accent: "#efc36f", roles: ["Ore Broker", "Hull Smith", "Clan Courier"], names: ["Korr", "Dava", "Brek", "Tarn"], greeting: "A sound hull and a fair trade honor both travelers." },
  { name: "Eidolan", body: "synthetic", color: "#79839d", accent: "#bf9cff", roles: ["Memory Curator", "Logic Emissary", "Signal Custodian"], names: ["Node Seven", "Pale Index", "Theta Vale", "Archive Nine"], greeting: "Identity confirmed. This encounter will be remembered." },
];
const stationShipTypes = [
  { id: "cargo-hauler", name: "CARGO HAULER", drawHeight: 190 },
  { id: "interceptor", name: "INTERCEPTOR", drawHeight: 160 },
  { id: "survey-vessel", name: "SURVEY VESSEL", drawHeight: 184 },
  { id: "courier", name: "COURIER", drawHeight: 156 },
];
const basePieces = [[], [], []];
const undergroundPieces = [[], [], []];
const surfaceWires = [[], [], []];
const undergroundWires = [[], [], []];
const surfaceWaterPipes = [[], [], []];
const undergroundWaterPipes = [[], [], []];
const excavatedCells = [new Set(), new Set(), new Set()];
const minedUndergroundDeposits = [new Set(), new Set(), new Set()];
const caveLayoutsGenerated = [false, false, false];
const naturalCaveCache = new Map();
const naturalCaveDepositCache = new Map();
const minedNaturalCaveDeposits = new Set();
const openedMineshaftChests = new Set();
const naturalCave = { active: null, surfaceX: 0, surfaceY: 0, exitProgress: 0, exitArmed: false, doorProgress: 0, doorArmed: false, doorCooldown: 0 };
const mineshaft = { returnX: 0, returnY: 0, exitProgress: 0, exitArmed: false, chestArmed: false };
const baseStorage = [
  { ferrite: 0, flora: 0, crystal: 0 }, { ferrite: 0, flora: 0, crystal: 0 }, { ferrite: 0, flora: 0, crystal: 0 },
];
const baseProduction = [0, 0, 0];
const portableBatteryCharges = [];
const underground = { entranceId: null, surfaceX: 160, surfaceY: 90, exitProgress: 0, exitArmed: false, transferArmed: false, digProgress: 0, digKey: null };
const build = { active: false, selected: "beacon", rotation: 0, worldX: 0, worldY: 0, wireStartId: null };
const structureRecovery = { pieceId: null, progress: 0, armed: true };
const shipRecall = { selecting: false, active: false, targetX: 0, targetY: 0, valid: false, distance: 0 };
const roofOpacity = new Map();
let nextBaseId = 1;
let nextWireId = 1;
const BUILD_SCALE = 2;
const BUILD_GRID = 64;
const BUILD_CLAIM_RADIUS = 720;
const BUILD_RANGE = 600;
const ROOM_SCALE = 2;
const GREENHOUSE_SCALE = ROOM_SCALE * 2;
const buildTypes = {
  beacon: { name: "Base Computer", cost: {}, radius: 15, solid: true },
  floor: { name: "Floor Panel", cost: { ferrite: 1 }, radius: 14, solid: false },
  wall: { name: "Bulkhead Wall", cost: { ferrite: 2 }, radius: 17, solid: true },
  habitat: { name: "Underground Entrance", cost: { ferrite: 4, crystal: 1 }, radius: 36, solid: true },
  storage: { name: "Storage Unit", cost: { ferrite: 2 }, energy: 1, radius: 17, solid: true },
  generator: { name: "Power Generator", cost: { ferrite: 2, crystal: 1 }, energy: 2, output: 22, radius: 19, solid: true },
  solarPanel: { name: "Solar Panel", cost: { ferrite: 3, crystal: 1 }, output: 14, radius: 29, solid: true },
  landingPad: { name: "Landing Pad", cost: { ferrite: 6, crystal: 2 }, radius: 48, solid: false },
  room: { name: "Modular Room", cost: { ferrite: 6, crystal: 1 }, energy: 2, radius: 32 * ROOM_SCALE, solid: false },
  hallway: { name: "Hallway", cost: { ferrite: 2 }, radius: 34, solid: false },
  refinery: { name: "Ore Refinery", cost: { ferrite: 4, crystal: 1 }, energy: 8, radius: 22, solid: true },
  craftingTable: { name: "Crafting Table", cost: { ferrite: 6, crystal: 2 }, radius: 21, solid: true },
  workLight: { name: "Field Light", cost: { ferrite: 2, crystal: 1 }, energy: 1, radius: 12, solid: true },
  planter: { name: "Hydroponics Planter", cost: { ferrite: 3, flora: 2 }, energy: 4, radius: 22, solid: true },
  medStation: { name: "Medical Station", cost: { ferrite: 3, flora: 2, crystal: 1 }, energy: 6, radius: 20, solid: true },
  exosuitStation: { name: "Exosuit Station", cost: { ferrite: 5, crystal: 2 }, energy: 8, radius: 22, solid: true },
  greenhouse: { name: "Greenhouse", cost: { ferrite: 12, flora: 6, crystal: 2 }, energy: 12, radius: 32 * GREENHOUSE_SCALE, solid: false },
  waterPump: { name: "Water Pump", cost: { ferrite: 4, copper_ingot: 1 }, energy: 5, radius: 23, solid: true },
  waterTank: { name: "Water Tank", cost: { ferrite: 5, copper_ingot: 2 }, radius: 27, solid: true },
  battery: { name: "Portable Battery", cost: { ferrite: 4, copper_ingot: 2, crystal: 2 }, output: 18, capacity: 200, radius: 20, solid: true },
  wire: { name: "Power Cable", cost: { copper_wire: 1 }, radius: 0, solid: false },
  waterPipe: { name: "Water Pipe", cost: { pipe_segment: 1 }, radius: 0, solid: false },
};
const constructionModules = {
  habitat: "habitat_module",
  room: "room_module",
  hallway: "hallway_module",
  refinery: "refinery_module",
  generator: "generator_module",
  storage: "storage_module",
  planter: "planter_module",
  medStation: "med_station_module",
  exosuitStation: "exosuit_station_module",
  greenhouse: "greenhouse_module",
  waterPump: "water_pump_module",
  waterTank: "water_tank_module",
  battery: "battery_module",
  solarPanel: "solar_panel_module",
  workLight: "field_light_module",
  landingPad: "landing_pad_module",
};
const buildCatalogImages = {
  beacon: "assets/optimized/pixel/base/base-computer.webp",
  habitat: "assets/optimized/pixel/base/underground-entrance.webp",
  storage: "assets/optimized/pixel/base/storage-opt.webp",
  generator: "assets/optimized/pixel/base/generator-opt.webp",
  solarPanel: "assets/optimized/pixel/base/solar-panel-v1.webp",
  battery: "assets/optimized/pixel/base/battery-v1.webp",
  landingPad: "assets/optimized/pixel/base/landing-pad-v1.webp",
  room: "assets/optimized/pixel/base/modular-room-opt.webp",
  hallway: "assets/optimized/pixel/base/modular-hallway-opt.webp",
  refinery: "assets/optimized/pixel/base/refinery-opt.webp",
  craftingTable: "assets/optimized/pixel/base/crafting-table-opt.webp",
  workLight: "assets/optimized/pixel/base/field-light-v1.webp",
  planter: "assets/optimized/pixel/base/hydroponics-planter-opt.webp",
  medStation: "assets/optimized/pixel/base/medical-station-opt.webp",
  exosuitStation: "assets/optimized/pixel/base/exosuit-station-v1.webp",
  greenhouse: "assets/optimized/pixel/base/greenhouse-opt.webp",
  waterPump: "assets/optimized/pixel/base/water-pump-v1.webp",
  waterTank: "assets/optimized/pixel/base/water-tank-v1.webp",
  waterPipe: "assets/optimized/pixel/base/water-pipe-v1.webp",
};
const buildCatalogGroups = [
  { name: "BASIC CONSTRUCTION", types: ["beacon", "craftingTable", "floor", "wall", "workLight", "wire", "waterPipe"] },
  { name: "SURFACE SYSTEMS", types: ["habitat", "solarPanel", "battery", "waterPump", "waterTank", "landingPad"] },
  { name: "HABITAT MODULES", types: ["room", "hallway", "greenhouse", "storage", "generator", "refinery", "planter", "medStation", "exosuitStation"] },
];

const planets = [
  { name: "THALASSA", type: "VERDANT MOON", ground: "#315e4b", ground2: "#244a3e", accent: "#79ca8a", weather: "LUMINOUS RAIN", particle: "rain", wind: .35, seed: 11 },
  { name: "VESPER", type: "EMBER WORLD", ground: "#754a36", ground2: "#56352f", accent: "#efad62", weather: "ASH WINDS", particle: "ash", wind: 1.15, seed: 29 },
  { name: "ORISON", type: "FROST PLANET", ground: "#688b8c", ground2: "#496e73", accent: "#c3eff0", weather: "CRYSTAL SNOW", particle: "snow", wind: .7, seed: 47 },
];
const stormDefinitions = [
  { name: "ION-SPORE DELUGE", color: "#79ca8a", cycle: 210, firstDelay: 35, warning: 16, duration: 58, ramp: 8, fade: 10, hazardBoost: .42, solarLoss: .48, visibility: .42 },
  { name: "CINDER TEMPEST", color: "#ef8c50", cycle: 180, firstDelay: 30, warning: 14, duration: 50, ramp: 7, fade: 9, hazardBoost: .5, solarLoss: .7, visibility: .56 },
  { name: "WHITEOUT BLIZZARD", color: "#bdeff2", cycle: 240, firstDelay: 40, warning: 18, duration: 68, ramp: 10, fade: 12, hazardBoost: .48, solarLoss: .62, visibility: .62 },
];
const stormRuntime = { notificationKey: "", phase: "calm" };
const planetCycles = [
  { dayLength: 720, phase: .4, nightTint: [5, 17, 31], twilightTint: [216, 111, 70] },
  { dayLength: 540, phase: .53, nightTint: [24, 8, 15], twilightTint: [230, 92, 45] },
  { dayLength: 840, phase: .34, nightTint: [7, 20, 34], twilightTint: [138, 178, 205] },
];
const planetSurfaceCircumferences = [28000, 38000, 34000];

const discoveries = {
  planets: new Set([0]),
  creatures: new Map(),
  flora: new Map(),
  minerals: new Map(),
};
const settings = { launchOverride: false, buildOverride: false, cycleSpeed: 1 };
const campaign = { stage: 0, rewardClaimed: false, blueprintUnlocked: false };
const campaignStages = [
  { title: "Fuel the Kestrel", copy: "Fabricate Launch Fuel at a crafting table and prepare for orbit." },
  { title: "Power a Thalassan Shelter", copy: "Wire an underground entrance to a working power source." },
  { title: "Collect a Fauna Sample", copy: "Analyze a peaceful creature, equip a Bio-Syringe, and collect its sample." },
];
const toolUpgrades = { mining: 0, capacity: 0, range: 0, combat: 0 };
const toolUpgradeDefinitions = {
  mining: { name: "Mining Optics", cost: level => ({ ferrite: 4 + level * 3, crystal: 1 + level }) },
  capacity: { name: "Energy Cell", cost: level => ({ ferrite: 3 + level * 2, flora: 3 + level * 2 }) },
  range: { name: "Beam Focuser", cost: level => ({ ferrite: 4 + level * 2, crystal: 2 + level }) },
  combat: { name: "Combat Emitter", cost: level => ({ ferrite: 5 + level * 3, crystal: 2 + level * 2 }) },
};
try {
  settings.launchOverride = localStorage.getItem("wayfarer.launchOverride") === "true";
  settings.buildOverride = localStorage.getItem("wayfarer.buildOverride") === "true";
  const savedCycleSpeedValue = localStorage.getItem("wayfarer.cycleSpeed");
  if (savedCycleSpeedValue !== null) {
    const savedCycleSpeed = Number(savedCycleSpeedValue);
    if (Number.isFinite(savedCycleSpeed) && savedCycleSpeed >= 0 && savedCycleSpeed <= 4) settings.cycleSpeed = savedCycleSpeed;
  }
} catch {}
const planetImageNames = ["thalassa", "vesper", "orison"];
const specimenNames = {
  flower: "Lumen Starflower", flower2: "Violet Sunbloom", flower3: "Ivory Bellflower",
  leaf: "Broadleaf Crown", leaf2: "Spearleaf Rosette", fungi: "Glowcap Colony",
  emberBloom: "Ember Bloom", glassFern: "Blackglass Fern", sulfurFlower: "Sulfur Flower",
  thorn: "Rust Thorn", lavaFungi: "Lava-cap Colony",
  iceBlossom: "Ice Blossom", frostFern: "Frost Fern", snowflower: "Orison Snowflower",
  frostRosette: "Frost Rosette", frostFungi: "Aurora-cap Colony",
  rock: "Thalassan Ferrite", crystal: "Thalassan Crystal",
  vesperRock: "Vesper Basalt", vesperCrystal: "Ember Crystal",
  orisonRock: "Glacial Ferrite", orisonCrystal: "Orison Ice Crystal",
};

const thalassaEnvironment = new Image();
thalassaEnvironment.src = "assets/optimized/pixel/thalassa-environment-sheet.webp";
const thalassaGrass = new Image();
thalassaGrass.src = "assets/optimized/pixel/thalassa-grass-v2.webp";
const thalassaLakeImage = new Image();
thalassaLakeImage.src = "assets/optimized/terrain/thalassa-lake-v1.webp";
const vesperEnvironment = new Image();
vesperEnvironment.src = "assets/optimized/pixel/vesper/environment-sheet.webp";
const vesperGround = new Image();
vesperGround.src = "assets/optimized/pixel/vesper/basalt-ground.webp";
const orisonEnvironment = new Image();
orisonEnvironment.src = "assets/optimized/pixel/orison/environment-sheet.webp";
const orisonGround = new Image();
orisonGround.src = "assets/optimized/pixel/orison/frozen-ground.webp";
const kestrelImage = new Image();
kestrelImage.src = "assets/optimized/pixel/kestrel.webp";
const playerImage = new Image();
playerImage.src = "assets/optimized/pixel/wayfarer-walk-sheet.webp";
const stationRaceImages = ["auralith", "nymari", "vaskari", "eidolan"].map(race => {
  const image = new Image(); image.src = `assets/optimized/pixel/races/${race}-traveler-v1.png`; return image;
});
const stationShipImages = stationShipTypes.map(type => {
  const image = new Image(); image.src = `assets/optimized/pixel/ships/${type.id}-v1.png`; return image;
});
const creatureImage = new Image();
creatureImage.src = "assets/optimized/pixel/creatures/animation-sheet-v1.webp";
const creatureSpriteSheet = document.createElement("canvas");
let creatureSpriteReady = false;
creatureImage.addEventListener("load", () => {
  creatureSpriteSheet.width = creatureImage.naturalWidth; creatureSpriteSheet.height = creatureImage.naturalHeight;
  const spriteContext = creatureSpriteSheet.getContext("2d", { willReadFrequently: true });
  spriteContext.drawImage(creatureImage, 0, 0);
  const pixels = spriteContext.getImageData(0, 0, creatureSpriteSheet.width, creatureSpriteSheet.height);
  for (let index = 0; index < pixels.data.length; index += 4) {
    const alpha = pixels.data[index + 3];
    if (alpha < 150) { pixels.data[index] = 0; pixels.data[index + 1] = 0; pixels.data[index + 2] = 0; pixels.data[index + 3] = 0; }
    else pixels.data[index + 3] = 255;
  }
  spriteContext.putImageData(pixels, 0, 0);
  creatureSpriteReady = true;
});
const modularRoomImage = new Image();
modularRoomImage.src = "assets/optimized/pixel/base/modular-room-opt.webp";
const modularRoomRoofImage = new Image();
modularRoomRoofImage.src = "assets/optimized/pixel/base/modular-room-roof-opt.webp";
const modularHallwayImage = new Image();
modularHallwayImage.src = "assets/optimized/pixel/base/modular-hallway-opt.webp";
const modularHallwayRoofImage = new Image();
modularHallwayRoofImage.src = "assets/optimized/pixel/base/modular-hallway-roof-opt.webp";
const baseComputerImage = new Image();
baseComputerImage.src = "assets/optimized/pixel/base/base-computer.webp";
const undergroundEntranceImage = new Image();
undergroundEntranceImage.src = "assets/optimized/pixel/base/underground-entrance.webp";
const undergroundExitImage = new Image();
undergroundExitImage.src = "assets/optimized/pixel/base/underground-exit-opt.webp";
const generatorImage = new Image();
generatorImage.src = "assets/optimized/pixel/base/generator-opt.webp";
const refineryImage = new Image();
refineryImage.src = "assets/optimized/pixel/base/refinery-opt.webp";
const solarPanelImage = new Image();
solarPanelImage.src = "assets/optimized/pixel/base/solar-panel-v1.webp";
const batteryImage = new Image();
batteryImage.src = "assets/optimized/pixel/base/battery-v1.webp";
const landingPadImage = new Image();
landingPadImage.src = "assets/optimized/pixel/base/landing-pad-v1.webp";
const craftingTableImage = new Image();
craftingTableImage.src = "assets/optimized/pixel/base/crafting-table-opt.webp";
const fieldLightImage = new Image();
fieldLightImage.src = "assets/optimized/pixel/base/field-light-v1.webp";
const hydroponicsPlanterImage = new Image();
hydroponicsPlanterImage.src = "assets/optimized/pixel/base/hydroponics-planter-opt.webp";
const medicalStationImage = new Image();
medicalStationImage.src = "assets/optimized/pixel/base/medical-station-opt.webp";
const exosuitStationImage = new Image();
exosuitStationImage.src = "assets/optimized/pixel/base/exosuit-station-v1.webp";
const greenhouseImage = new Image();
greenhouseImage.src = "assets/optimized/pixel/base/greenhouse-opt.webp";
const waterPumpImage = new Image();
waterPumpImage.src = "assets/optimized/pixel/base/water-pump-v1.webp";
const waterTankImage = new Image();
waterTankImage.src = "assets/optimized/pixel/base/water-tank-v1.webp";
const waterPipeImage = new Image();
waterPipeImage.src = "assets/optimized/pixel/base/water-pipe-v1.webp";
const greenhouseRenderSprites = { powered: null, unpowered: null };
function cacheGreenhouseRenderSprites() {
  if (!greenhouseImage.complete || !greenhouseImage.naturalWidth || greenhouseRenderSprites.powered) return;
  const size = 70 * GREENHOUSE_SCALE;
  for (const powered of [true, false]) {
    const image = document.createElement("canvas"); image.width = size; image.height = size;
    const imageContext = image.getContext("2d"); imageContext.imageSmoothingEnabled = true; imageContext.imageSmoothingQuality = "high";
    if (!powered) imageContext.filter = "grayscale(.8) brightness(.42)";
    imageContext.drawImage(greenhouseImage, 0, 0, size, size);
    greenhouseRenderSprites[powered ? "powered" : "unpowered"] = image;
  }
}
greenhouseImage.addEventListener("load", cacheGreenhouseRenderSprites);
const undergroundFloorImage = new Image();
undergroundFloorImage.src = "assets/optimized/terrain/underground-floor-opt.webp";
const undergroundRockImage = new Image();
undergroundRockImage.src = "assets/optimized/terrain/underground-rock-opt.webp";
const undergroundOreImages = {};
for (const [kind, filename] of Object.entries({
  ferrite: "ferrite-vein-opt.webp", copper: "copper-ore-opt.webp", silica: "silica-vein-opt.webp",
})) {
  const image = new Image(); image.src = `assets/optimized/pixel/minerals/underground/${filename}`; undergroundOreImages[kind] = image;
}
const caveEntranceImages = ["thalassa", "vesper", "orison"].map(name => {
  const image = new Image(); image.src = `assets/optimized/pixel/caves/${name}-cave-entrance-v1.webp`; return image;
});
const naturalCavernFloorImage = new Image();
naturalCavernFloorImage.src = "assets/optimized/pixel/caves/natural-cavern-floor-v1.webp";
const naturalCavernWallImage = new Image();
naturalCavernWallImage.src = "assets/optimized/pixel/caves/natural-cavern-wall-v1.webp";
const mineshaftRailFloorImage = new Image();
mineshaftRailFloorImage.src = "assets/optimized/pixel/caves/mineshaft-rail-floor-v1.webp";
const mineshaftDoorImage = new Image();
mineshaftDoorImage.src = "assets/optimized/pixel/caves/mineshaft-door-v1.webp";
const mineshaftSupportImage = new Image();
mineshaftSupportImage.src = "assets/optimized/pixel/caves/mineshaft-support-v1.webp";
const salvageChestClosedImage = new Image();
salvageChestClosedImage.src = "assets/optimized/pixel/caves/salvage-chest-closed-v1.webp";
const salvageChestOpenImage = new Image();
salvageChestOpenImage.src = "assets/optimized/pixel/caves/salvage-chest-open-v1.webp";
const storageImage = new Image();
storageImage.src = "assets/optimized/pixel/base/storage-opt.webp";
const interiorBackgroundImage = new Image();
interiorBackgroundImage.src = "assets/optimized/pixel/interior/kestrel-interior-v2.webp";
const planetImages = ["thalassa", "vesper", "orison"].map(name => {
  const image = new Image();
  image.src = `assets/optimized/pixel/planets/${name}.webp`;
  return image;
});
const launchBackgrounds = ["thalassa-ascent-v2", "vesper-ascent", "orison-ascent"].map(name => {
  const image = new Image();
  image.src = `assets/optimized/pixel/cutscenes/${name}.webp`;
  return image;
});
let thalassaGrassPattern = null;
let vesperGroundPattern = null;
let orisonGroundPattern = null;
let undergroundFloorPattern = null;
let undergroundRockPattern = null;
const terrainPatternCache = new WeakMap();
let treePixelSprite = null;
const grassTextureScale = .58;
const vesperTextureScale = .62;
const orisonTextureScale = .58;
const interiorCollisions = [
  [-88, -112, -42, -57],
  [42, -112, 88, -57],
  [-180, -100, -103, 107],
  [95, -98, 180, 107],
  [-61, 97, 61, 145],
];
const floraAtlas = {
  flower: { x: 18, y: 8, w: 303, h: 305, size: 58 },
  flower2: { x: 326, y: 8, w: 310, h: 305, size: 60 },
  flower3: { x: 646, y: 8, w: 300, h: 305, size: 58 },
  leaf: { x: 956, y: 18, w: 286, h: 292, size: 64 },
  leaf2: { x: 1240, y: 18, w: 290, h: 292, size: 64 },
  reed: { x: 18, y: 318, w: 306, h: 320, size: 68 },
  reed2: { x: 326, y: 318, w: 306, h: 320, size: 68 },
  fungi: { x: 632, y: 332, w: 306, h: 306, size: 64 },
  tree: { x: 946, y: 316, w: 584, h: 704, size: 184 },
};
const rockAtlas = [
  { x: 14, y: 638, w: 306, h: 382 },
  { x: 330, y: 638, w: 306, h: 382 },
];
const crystalAtlas = [
  { x: 642, y: 638, w: 306, h: 382 },
];
const vesperAtlas = {
  emberBloom: { x: 0, y: 0, w: 362, h: 362, size: 62 },
  glassFern: { x: 362, y: 0, w: 362, h: 362, size: 66 },
  sulfurFlower: { x: 724, y: 0, w: 362, h: 362, size: 60 },
  thorn: { x: 1086, y: 0, w: 362, h: 362, size: 64 },
  sulfurReed: { x: 0, y: 362, w: 362, h: 362, size: 68 },
  crimsonGrass: { x: 362, y: 362, w: 362, h: 362, size: 68 },
  lavaFungi: { x: 724, y: 362, w: 362, h: 362, size: 64 },
  vent: { x: 1086, y: 362, w: 362, h: 362, size: 76 },
  emberTree: { x: 1086, y: 724, w: 362, h: 362, size: 184 },
};
const vesperRockAtlas = [
  { x: 0, y: 724, w: 362, h: 362 },
  { x: 362, y: 724, w: 362, h: 362 },
];
const vesperCrystalAtlas = [
  { x: 724, y: 724, w: 362, h: 362 },
];
const orisonAtlas = {
  iceBlossom: { x: 0, y: 0, w: 362, h: 362, size: 62 },
  frostFern: { x: 362, y: 0, w: 362, h: 362, size: 66 },
  snowflower: { x: 724, y: 0, w: 362, h: 362, size: 60 },
  frostRosette: { x: 1086, y: 0, w: 362, h: 362, size: 64 },
  iceReed: { x: 0, y: 362, w: 362, h: 362, size: 68 },
  ribbonGrass: { x: 362, y: 362, w: 362, h: 362, size: 68 },
  frostFungi: { x: 724, y: 362, w: 362, h: 362, size: 64 },
  cryovent: { x: 1086, y: 362, w: 362, h: 362, size: 76 },
  frozenTree: { x: 1086, y: 724, w: 362, h: 362, size: 184 },
};
const orisonRockAtlas = [
  { x: 0, y: 724, w: 362, h: 362 },
  { x: 362, y: 724, w: 362, h: 362 },
];
const orisonCrystalAtlas = [
  { x: 724, y: 724, w: 362, h: 362 },
];

const solarBodies = [
  { orbit: 52000, angle: .45, rate: .000024, radius: 7200 },
  { orbit: 97000, angle: 2.55, rate: .000016, radius: 9800 },
  { orbit: 150000, angle: 4.35, rate: .000011, radius: 8600 },
];
const orbitalStation = { name: "MERIDIAN RELAY", orbit: 118000, angle: 1.18, rate: .000008, radius: 3000 };
const systemStarRadius = 18000;
const spaceShip = { x: 0, y: 0, vx: 0, vy: 0, angle: 0, zoom: .105, viewScale: 1, target: 1, pulse: false, landProgress: 0, landingArmed: false };
const SURFACE_OBJECT_SCALE = { flora: .68, scenery: .56, landmark: 1.5, spire: 1.18, rock: .72, crystal: .88 };
let systemAsteroids = [];
let stationVisited = false;

let world = [];
let terrainRegions = [];
let surfaceLakes = [];
let creatures = [];
const creatureSpecies = [
  [{ name: "Mossback Grazer", hostile: false, color: "#7fb878", accent: "#b9df89", animationRow: 0, rarity: "Common", behavior: "Passive grazer", habitat: "Thalassa grasslands", description: "Slow herd animal that feeds on mineral-rich groundcover." }, { name: "Rift Stalker", hostile: true, nocturnal: true, color: "#233f43", accent: "#63e4d5", animationRow: 1, rarity: "Rare", behavior: "Nocturnal predator", habitat: "Thalassa night side", description: "Ambush hunter that emerges after dusk and tracks exosuit energy." }],
  [{ name: "Ash Strider", hostile: false, color: "#9d6447", accent: "#efb15e", animationRow: 2, rarity: "Uncommon", behavior: "Heat-tolerant forager", habitat: "Vesper ash plains", description: "Long-legged scavenger adapted to unstable volcanic ground." }, { name: "Cinder Maw", hostile: true, color: "#402a2a", accent: "#ff7043", animationRow: 3, rarity: "Rare", behavior: "Territorial predator", habitat: "Vesper thermal fields", description: "Armored hunter that vents stored heat before charging intruders." }],
  [{ name: "Drift Wisp", hostile: false, color: "#9fc8c8", accent: "#e2ffff", animationRow: 4, rarity: "Uncommon", behavior: "Passive drifter", habitat: "Orison frost basins", description: "Light-bodied fauna that rides cold atmospheric currents." }, { name: "Frostclaw", hostile: true, color: "#385663", accent: "#8deaf2", animationRow: 5, rarity: "Rare", behavior: "Pack predator", habitat: "Orison glacial shelves", description: "Low-profile hunter whose crystalline limbs grip polished ice." }],
];
const creatureSpeciesByName = new Map(creatureSpecies.flat().map(species => [species.name, species]));

function creatureDiscoveryKey(creature) { return `${state.planet}:${creature.species.name}`; }
function creatureKnown(creature) { return discoveries.creatures.has(creatureDiscoveryKey(creature)); }

function seededRandom(seed) {
  let value = seed % 2147483647;
  return () => (value = value * 16807 % 2147483647) / 2147483647;
}

function bodyPosition(index) {
  const body = solarBodies[index];
  const angle = body.angle + elapsed * body.rate;
  return { x: Math.cos(angle) * body.orbit, y: Math.sin(angle) * body.orbit };
}

function stationPosition() {
  const angle = orbitalStation.angle + elapsed * orbitalStation.rate;
  return { x: Math.cos(angle) * orbitalStation.orbit, y: Math.sin(angle) * orbitalStation.orbit };
}

function currentSpaceTarget() {
  if (spaceShip.target === planets.length) return { type: "station", name: orbitalStation.name, subtitle: "ORBITAL SERVICES · DOCKING LINK ACTIVE", radius: orbitalStation.radius, position: stationPosition() };
  return { type: "planet", index: spaceShip.target, name: planets[spaceShip.target].name, subtitle: planets[spaceShip.target].type, radius: solarBodies[spaceShip.target].radius, position: bodyPosition(spaceShip.target) };
}

function makeSolarSystem() {
  const rand = seededRandom(731);
  systemAsteroids = [];
  for (let i = 0; i < 180; i++) {
    const angle = rand() * TAU;
    const distance = 74500 + (rand() - .5) * 6800;
    systemAsteroids.push({ x: Math.cos(angle) * distance, y: Math.sin(angle) * distance, size: 28 + rand() * 76, angle: rand() * TAU, shade: rand() });
  }
}

function placeSurfaceCaveEntrances(index) {
  world = world.filter(object => object.type !== "caveEntrance");
  const random = seededRandom(planets[index].seed * 97 + 1907); const entrances = [];
  for (let entranceIndex = 0; entranceIndex < 3; entranceIndex++) {
    let x = 0; let y = 0;
    for (let attempt = 0; attempt < 80; attempt++) {
      x = (random() - .5) * 2500; y = (random() - .5) * 2050;
      const valid = Math.hypot(x - 120, y - 75) > 460 && !pointInSurfaceLake(x, y, 105)
        && entrances.every(entrance => Math.hypot(x - entrance.x, y - entrance.y) > 520)
        && basePieces[index].every(piece => Math.hypot(x - piece.x, y - piece.y) > buildTypes[piece.type].radius * BUILD_SCALE + 150)
        && world.every(object => !["flora", "ferrite", "crystal", "spire", "landmark"].includes(object.type) || Math.hypot(x - object.x, y - object.y) > 130)
        && creatures.every(creature => Math.hypot(x - creature.x, y - creature.y) > 150);
      if (valid) break;
    }
    const entrance = { type: "caveEntrance", entranceId: entranceIndex, x, y, size: 42, phase: random() * TAU, alive: true };
    entrances.push(entrance); world.push(entrance);
  }
}

function makeWorld(index) {
  const rand = seededRandom(planets[index].seed);
  world = [];
  terrainRegions = [];
  surfaceLakes = [];
  creatures = [];

  if (index === 0) {
    for (let lakeIndex = 0; lakeIndex < 2; lakeIndex++) {
      let x = 0; let y = 0; let radiusX = 0; let radiusY = 0;
      for (let attempt = 0; attempt < 24; attempt++) {
        const angle = rand() * TAU; const distance = 720 + rand() * 720;
        x = 120 + Math.cos(angle) * distance; y = 75 + Math.sin(angle) * distance * .78;
        radiusX = 420 + rand() * 220; radiusY = 270 + rand() * 150;
        const separated = surfaceLakes.every(lake => Math.hypot(x - lake.x, y - lake.y) > radiusX + lake.rx + 360);
        const clearOfBases = basePieces[index].every(piece => {
          if (piece.type === "waterPump") return true;
          const padding = buildTypes[piece.type].radius * BUILD_SCALE + 10;
          return ((piece.x - x) / (radiusX + padding)) ** 2 + ((piece.y - y) / (radiusY + padding)) ** 2 >= 1;
        });
        if (separated && clearOfBases) break;
      }
      const points = [];
      for (let vertex = 0; vertex < 22; vertex++) {
        const angle = vertex / 22 * TAU; const wobble = .86 + rand() * .22;
        points.push({ x: x + Math.cos(angle) * radiusX * wobble, y: y + Math.sin(angle) * radiusY * wobble });
      }
      surfaceLakes.push({ x, y, rx: radiusX, ry: radiusY, points, phase: rand() * TAU });
    }
  }

  const habitatCenters = Array.from({ length: index === 0 ? 7 : 5 }, () => ({
    x: (rand() - .5) * 2100,
    y: (rand() - .5) * 1700,
  }));

  for (const center of habitatCenters) {
    const points = [];
    const radiusX = 180 + rand() * 260;
    const radiusY = 130 + rand() * 210;
    for (let vertex = 0; vertex < 10; vertex++) {
      const angle = vertex / 10 * TAU;
      const wobble = .72 + rand() * .34;
      points.push({ x: center.x + Math.cos(angle) * radiusX * wobble, y: center.y + Math.sin(angle) * radiusY * wobble });
    }
    terrainRegions.push({
      points,
      shade: rand(),
      phase: rand() * TAU,
      minX: Math.min(...points.map(point => point.x)),
      minY: Math.min(...points.map(point => point.y)),
      maxX: Math.max(...points.map(point => point.x)),
      maxY: Math.max(...points.map(point => point.y)),
    });
  }

  const pointForHabitat = (clusterChance = .62) => {
    if (rand() < clusterChance) {
      const center = habitatCenters[Math.floor(rand() * habitatCenters.length)];
      const angle = rand() * TAU;
      const radius = 55 + Math.sqrt(rand()) * 270;
      return { x: center.x + Math.cos(angle) * radius, y: center.y + Math.sin(angle) * radius * .72 };
    }
    return { x: (rand() - .5) * 2500, y: (rand() - .5) * 2100 };
  };

  const placeSpaced = (clusterChance, minSpacing, avoidLanding = true) => {
    let point = pointForHabitat(clusterChance);
    for (let attempt = 0; attempt < 12; attempt++) {
      const landingClear = Math.hypot(point.x - 120, point.y - 75) > 175;
      const separated = world.every(o => !["flora", "ferrite", "crystal", "ore", "spire"].includes(o.type) || Math.hypot(point.x - o.x, point.y - o.y) > minSpacing);
      const dryGround = !pointInSurfaceLake(point.x, point.y, minSpacing);
      if ((!avoidLanding || landingClear) && separated && dryGround) break;
      point = pointForHabitat(clusterChance);
    }
    return point;
  };

  for (let i = 0; i < 64; i++) {
    const roll = rand();
    const type = roll < .45 ? "flora" : roll < .8 ? "ferrite" : roll < .92 ? "crystal" : "spire";
    const sprite = index === 0 && type === "flora"
      ? ["flower", "flower2", "flower3", "leaf", "leaf2", "fungi"][Math.floor(rand() * 6)]
      : index === 1 && type === "flora"
        ? ["emberBloom", "glassFern", "sulfurFlower", "thorn", "lavaFungi"][Math.floor(rand() * 5)]
        : index === 2 && type === "flora"
          ? ["iceBlossom", "frostFern", "snowflower", "frostRosette", "frostFungi"][Math.floor(rand() * 5)]
          : index === 1 && type === "spire" ? "vent" : index === 2 && type === "spire" ? "cryovent" : null;
    const mineral = type === "ferrite"
      ? (index === 0 ? "rock" : index === 1 ? "vesperRock" : "orisonRock")
      : type === "crystal" ? (index === 0 ? "crystal" : index === 1 ? "vesperCrystal" : "orisonCrystal") : null;
    const { x, y } = placeSpaced(type === "flora" ? .75 : .52, 58);
    const size = 9 + rand() * 13; const phase = rand() * TAU;
    world.push({ type, sprite, mineral, variant: Math.floor(phase / TAU * 6), x, y, size, phase, alive: true });
  }
  const oreMineral = index === 0 ? "rock" : index === 1 ? "vesperRock" : "orisonRock";
  for (let i = 0; i < 5; i++) {
    const item = i < 3 ? "copper_ore" : "silica";
    const { x, y } = placeSpaced(.45, 70);
    world.push({ type: "ore", item, mineral: oreMineral, variant: i % 6, x, y, size: 13 + rand() * 7, phase: rand() * TAU, alive: true });
  }
  const detailTypes = index === 0 ? ["grass", "grass", "blossom", "pebble"] : index === 1 ? ["crack", "crack", "vent", "pebble"] : ["frost", "frost", "ice", "pebble"];
  for (let i = 0; i < 96; i++) {
    const point = pointForHabitat(index === 0 ? .76 : .5);
    if (Math.hypot(point.x - 120, point.y - 75) < 105 || pointInSurfaceLake(point.x, point.y, 16)) continue;
    world.push({ type: detailTypes[Math.floor(rand() * detailTypes.length)], x: point.x, y: point.y, size: 3 + rand() * 8, phase: rand() * TAU, alive: true });
  }
  if (index === 0) {
    for (let i = 0; i < 24; i++) {
      const center = habitatCenters[i % habitatCenters.length];
      const angle = rand() * TAU;
      const radius = 45 + rand() * 235;
      const x = center.x + Math.cos(angle) * radius;
      const y = center.y + Math.sin(angle) * radius * .68;
      if (Math.hypot(x - 120, y - 75) < 210 || pointInSurfaceLake(x, y, 30)) continue;
      world.push({ type: "scenery", sprite: i % 3 === 0 ? "leaf2" : i % 2 === 0 ? "reed2" : "reed", x, y, size: 12 + rand() * 8, phase: rand() * TAU, alive: true });
    }
    habitatCenters.forEach((center, i) => {
      const x = i === 0 ? 465 : center.x + (rand() - .5) * 140;
      const y = i === 0 ? 300 : center.y + (rand() - .5) * 100;
      if (Math.hypot(x - 120, y - 75) > 240 && !pointInSurfaceLake(x, y, 70)) world.push({ type: "landmark", sprite: "tree", x, y, size: 21 + rand() * 8, phase: rand() * TAU, alive: true });
    });
  } else if (index === 1) {
    for (let i = 0; i < 20; i++) {
      const center = habitatCenters[i % habitatCenters.length];
      const angle = rand() * TAU; const radius = 55 + rand() * 250;
      const x = center.x + Math.cos(angle) * radius; const y = center.y + Math.sin(angle) * radius * .7;
      if (Math.hypot(x - 120, y - 75) < 210) continue;
      world.push({ type: "scenery", sprite: i % 2 ? "sulfurReed" : "crimsonGrass", x, y, size: 12 + rand() * 8, phase: rand() * TAU, alive: true });
    }
    habitatCenters.forEach((center, i) => {
      const x = center.x + (rand() - .5) * 150; const y = center.y + (rand() - .5) * 110;
      if (i < 5 && Math.hypot(x - 120, y - 75) > 260) world.push({ type: "landmark", sprite: "emberTree", x, y, size: 21 + rand() * 8, phase: rand() * TAU, alive: true });
    });
  } else if (index === 2) {
    for (let i = 0; i < 20; i++) {
      const center = habitatCenters[i % habitatCenters.length];
      const angle = rand() * TAU; const radius = 55 + rand() * 250;
      const x = center.x + Math.cos(angle) * radius; const y = center.y + Math.sin(angle) * radius * .7;
      if (Math.hypot(x - 120, y - 75) < 210) continue;
      world.push({ type: "scenery", sprite: i % 2 ? "iceReed" : "ribbonGrass", x, y, size: 12 + rand() * 8, phase: rand() * TAU, alive: true });
    }
    habitatCenters.forEach((center, i) => {
      const x = center.x + (rand() - .5) * 150; const y = center.y + (rand() - .5) * 110;
      if (i < 5 && Math.hypot(x - 120, y - 75) > 260) world.push({ type: "landmark", sprite: "frozenTree", x, y, size: 21 + rand() * 8, phase: rand() * TAU, alive: true });
    });
  }
  const starterMineral = index === 0 ? "rock" : index === 1 ? "vesperRock" : "orisonRock";
  world.push({ type: "ferrite", mineral: starterMineral, variant: 1, x: 265, y: 165, size: 17, phase: rand() * TAU, alive: true });
  world.push({ type: "ferrite", mineral: starterMineral, variant: 3, x: 25, y: 210, size: 15, phase: rand() * TAU, alive: true });
  for (let i = 0; i < 10; i++) {
    let x = 0; let y = 0;
    for (let attempt = 0; attempt < 18; attempt++) {
      x = (rand() - .5) * 2600; y = (rand() - .5) * 2100;
      if (Math.hypot(x - 120, y - 75) > 380 && !pointInSurfaceLake(x, y, 35)) break;
    }
    const hostile = i >= 7; const species = creatureSpecies[index][hostile ? 1 : 0];
    const angle = rand() * TAU;
    creatures.push({ x, y, homeX: x, homeY: y, angle, facing: Math.cos(angle) < 0 ? -1 : 1, turnCooldown: 0, phase: rand() * TAU, gait: rand() * TAU, motion: 0, attackAnim: 0, hitAnim: 0, species, hostile, health: hostile ? 100 : 60, maxHealth: hostile ? 100 : 60, attackCooldown: rand(), scanProgress: 0, alive: true, alert: 0 });
  }
  placeSurfaceCaveEntrances(index);
  resetAtmosphere(rand);
  ship.x = 90; ship.y = 60;
  player.x = 160; player.y = 90;
  camera.x = player.x; camera.y = player.y;
}

function pointInSurfaceLake(x, y, padding = 0) {
  if (state.planet !== 0) return false;
  return surfaceLakes.some(lake => {
    const radiusX = Math.max(1, lake.rx + padding); const radiusY = Math.max(1, lake.ry + padding);
    const dx = (x - lake.x) / radiusX; const dy = (y - lake.y) / radiusY;
    return dx * dx + dy * dy < 1;
  });
}

function resetAtmosphere(rand = Math.random) {
  state.atmosphere = [];
  for (let i = 0; i < 40; i++) state.atmosphere.push({ x: rand() * width, y: rand() * height, z: .35 + rand() * 1.2, phase: rand() * TAU });
}

function resize() {
  width = innerWidth; height = innerHeight;
  const subterraneanScale = ["baseInterior", "caveInterior", "mineshaft"].includes(state.mode) ? .72 : 1;
  dpr = Math.min(devicePixelRatio || 1, 1.5) * subterraneanScale;
  canvas.width = width * dpr; canvas.height = height * dpr;
  canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.imageSmoothingEnabled = false;
}

function noise(x, y, seed) {
  return (Math.sin(x * .013 + seed) + Math.cos(y * .017 - seed) + Math.sin((x + y) * .007)) / 3;
}

function smoothstep(start, end, value) {
  const t = Math.max(0, Math.min(1, (value - start) / (end - start)));
  return t * t * (3 - 2 * t);
}

function planetRotationFraction(index = state.planet) {
  const cycle = planetCycles[index];
  return ((state.worldTime / cycle.dayLength + cycle.phase) % 1 + 1) % 1;
}

function planetLighting(index = state.planet, longitudeFraction = 0, latitudeFraction = 0) {
  const cycle = planetCycles[index]; const rotationFraction = planetRotationFraction(index);
  const position = bodyPosition(index); const starAngle = Math.atan2(-position.y, -position.x);
  const surfaceAngle = rotationFraction * TAU + longitudeFraction * TAU;
  const hourAngle = Math.atan2(Math.sin(surfaceAngle - starAngle), Math.cos(surfaceAngle - starAngle));
  const fraction = ((.5 + hourAngle / TAU) % 1 + 1) % 1;
  const latitude = Math.max(-1, Math.min(1, latitudeFraction)) * Math.PI / 2;
  const elevation = Math.cos(hourAngle) * Math.cos(latitude);
  const daylight = smoothstep(-.14, .24, elevation); const night = 1 - daylight;
  const twilight = (1 - smoothstep(.02, .46, Math.abs(elevation))) * smoothstep(-.3, .04, elevation);
  const phase = fraction < .21 || fraction >= .79 ? "NIGHT" : fraction < .3 ? "DAWN" : fraction < .7 ? "DAY" : "DUSK";
  const azimuth = fraction * TAU - Math.PI / 2;
  return { ...cycle, fraction, rotationFraction, elevation, daylight, night, twilight, phase, azimuth, starAngle };
}

function localPlanetLighting(index = state.planet) {
  const observer = surfaceObserverPosition(); const circumference = planetSurfaceCircumferences[index];
  return planetLighting(index, observer.x / circumference, -observer.y / (circumference * .25));
}

function stormSnapshot(index = state.planet) {
  const definition = stormDefinitions[index]; const sinceFirst = state.weatherTime - definition.firstDelay;
  if (sinceFirst < 0) return { ...definition, phase: "calm", intensity: 0, remaining: -sinceFirst, eventIndex: -1 };
  const eventIndex = Math.floor(sinceFirst / definition.cycle); const position = sinceFirst - eventIndex * definition.cycle;
  if (position < definition.warning) return { ...definition, phase: "warning", intensity: 0, remaining: definition.warning - position, eventIndex };
  const stormTime = position - definition.warning;
  if (stormTime < definition.duration) {
    const buildup = smoothstep(0, definition.ramp, stormTime); const fade = 1 - smoothstep(definition.duration - definition.fade, definition.duration, stormTime);
    const intensity = Math.max(0, Math.min(1, buildup * fade));
    const phase = stormTime < definition.ramp ? "building" : stormTime > definition.duration - definition.fade ? "fading" : "peak";
    return { ...definition, phase, intensity, remaining: definition.duration - stormTime, eventIndex };
  }
  return { ...definition, phase: "calm", intensity: 0, remaining: definition.cycle - position, eventIndex };
}

function stormShelterLabel() {
  if (state.mode === "planet") return "SEEK SHELTER";
  if (state.mode === "planetFlight") return "FLIGHT TURBULENCE";
  if (state.mode === "interior") return "KESTREL SHELTERED";
  return "SUBSURFACE SHELTERED";
}

function updatePlanetaryStorm(dt) {
  state.weatherTime += dt;
  const storm = stormSnapshot(); const relevant = ["planet", "planetFlight", "interior", "baseInterior", "caveInterior", "mineshaft"].includes(state.mode);
  const visible = relevant && storm.phase !== "calm"; ui.stormAlert.hidden = !visible; document.body.classList.toggle("storm-visible", visible);
  if (!visible) {
    if (stormRuntime.phase === "storm" && relevant) showToast(`${stormDefinitions[state.planet].name} PASSED`);
    stormRuntime.phase = "calm"; return;
  }
  const warning = storm.phase === "warning"; const coarsePhase = warning ? "warning" : "storm";
  ui.stormAlert.classList.toggle("warning", warning); ui.stormAlert.style.setProperty("--storm-color", storm.color);
  ui.stormAlertState.textContent = warning ? "STORM FRONT INBOUND" : storm.phase === "fading" ? "STORM FRONT WEAKENING" : stormShelterLabel();
  ui.stormAlertName.textContent = storm.name;
  ui.stormAlertMeter.style.width = `${warning ? (1 - storm.remaining / storm.warning) * 100 : storm.intensity * 100}%`;
  ui.stormAlertDetail.textContent = warning ? `LANDFALL IN ${Math.ceil(storm.remaining)}S` : `${Math.ceil(storm.remaining)}S REMAINING · ${Math.round(storm.intensity * 100)}% INTENSITY`;
  const notificationKey = `${state.planet}:${storm.eventIndex}:${coarsePhase}`;
  if (notificationKey !== stormRuntime.notificationKey) {
    stormRuntime.notificationKey = notificationKey;
    showToast(warning ? `${storm.name} DETECTED · ${Math.ceil(storm.remaining)}S` : `${storm.name} LANDFALL · SEEK SHELTER`);
  }
  stormRuntime.phase = coarsePhase;
}

const planetaryHazards = [
  { type: "toxin", name: "TOXIC SPORES", color: "#77d69b" },
  { type: "heat", name: "THERMAL LOAD", color: "#ef7d45" },
  { type: "cold", name: "CRYO EXPOSURE", color: "#72dce9" },
];
let hazardWarningElapsed = -99;
function currentPlanetaryHazard() {
  const definition = planetaryHazards[state.planet];
  if (state.mode !== "planet") return { ...definition, intensity: 0, protected: true };
  const lighting = localPlanetLighting(); const cycle = planetCycles[state.planet];
  const weatherPulse = .5 + Math.sin(state.worldTime / cycle.dayLength * TAU * 3 + state.planet * 1.7) * .5;
  const ambientIntensity = state.planet === 0
    ? .45 + weatherPulse * .35
    : state.planet === 1
      ? .08 + lighting.daylight * .82 + lighting.twilight * .15
      : .12 + lighting.night * .8;
  const storm = stormSnapshot(); const intensity = ambientIntensity + storm.intensity * storm.hazardBoost;
  return { ...definition, intensity: Math.max(0, Math.min(1, intensity)), protected: false };
}
function updateEnvironmentalHazard(dt) {
  const hazard = currentPlanetaryHazard(); const stats = armorStats(); const resistance = Math.max(0, Math.min(.85, stats[hazard.type] || 0));
  const effectiveIntensity = hazard.intensity * (1 - resistance); const exposed = !hazard.protected && effectiveIntensity > .18;
  player.exposure = exposed
    ? Math.min(100, player.exposure + dt * (.55 + effectiveIntensity * 1.15))
    : Math.max(0, player.exposure - dt * (hazard.protected ? 7 : 3.5));
  if (player.exposure >= 100) {
    player.life = Math.max(0, player.life - dt * 5); player.lastDamage = elapsed;
    if (elapsed - hazardWarningElapsed > 3) { hazardWarningElapsed = elapsed; showToast(`${hazard.name} CRITICAL · SEEK SHELTER`); }
  }
  if (player.life <= 0) {
    player.life = 100; player.exposure = 25; player.x = ship.x + 55; player.y = ship.y + 25; player.vx = 0; player.vy = 0; camera.x = player.x; camera.y = player.y; showToast("EXOSUIT EMERGENCY RESTORE · KESTREL");
  }
  ui.hazard.style.width = `${player.exposure}%`; ui.hazardStatus.style.setProperty("--hazard-color", hazard.protected ? "#74d792" : hazard.color);
  ui.hazardLabel.textContent = hazard.protected ? player.exposure > .5 ? `RECOVERING · ${Math.ceil(player.exposure)}%` : "ENVIRONMENT SAFE" : `${hazard.name} · ${Math.round(resistance * 100)}% RES`;
  ui.life.style.width = `${player.life}%`;
}

function updateHudTelemetry() {
  const toolCapacity = toolEnergyCapacity(); const toolFraction = player.tool / toolCapacity;
  let toolValue = `${Math.ceil(player.tool)} EN`;
  if (state.mode === "space") toolValue = `${Math.round(Math.hypot(spaceShip.vx, spaceShip.vy))} U/S`;
  else if (state.mode === "planetFlight") toolValue = `${Math.round(Math.hypot(ship.vx, ship.vy))} U/S`;
  const lifeValue = `${Math.ceil(player.life)}%`; const hazardValue = `${Math.ceil(player.exposure)}%`;
  if (ui.lifeReadout.textContent !== lifeValue) ui.lifeReadout.textContent = lifeValue;
  if (ui.toolReadout.textContent !== toolValue) ui.toolReadout.textContent = toolValue;
  if (ui.hazardReadout.textContent !== hazardValue) ui.hazardReadout.textContent = hazardValue;
  ui.lifeStatus.classList.toggle("caution", player.life < 50 && player.life >= 25); ui.lifeStatus.classList.toggle("critical", player.life < 25);
  const toolTelemetryActive = !["space", "planetFlight"].includes(state.mode);
  ui.toolStatus.classList.toggle("caution", toolTelemetryActive && toolFraction < .3 && toolFraction >= .12); ui.toolStatus.classList.toggle("critical", toolTelemetryActive && toolFraction < .12);
  ui.hazardStatus.classList.toggle("caution", player.exposure >= 35 && player.exposure < 75); ui.hazardStatus.classList.toggle("critical", player.exposure >= 75);
}

function surfaceObserverPosition() {
  if (state.mode === "planet") return { x: player.x, y: player.y };
  if (["planetFlight", "interior", "launching"].includes(state.mode)) return { x: ship.x, y: ship.y };
  if (state.mode === "baseInterior") return { x: underground.surfaceX, y: underground.surfaceY };
  if (["caveInterior", "mineshaft"].includes(state.mode)) return { x: naturalCave.surfaceX, y: naturalCave.surfaceY };
  return { x: 0, y: 0 };
}

const lightPoolCache = new Map();
const darknessLightCache = new Map();
let headlightBeamSprite = null;
let darknessMask = null;
const LIGHTING_BUFFER_SCALE = .4;

function drawLightPool(x, y, radius, color, intensity) {
  if (intensity <= .01) return;
  const s = screenPoint(x, y); const view = surfaceViewBounds(radius + 20);
  if (s.x < view.left || s.x > view.right || s.y < view.top || s.y > view.bottom) return;
  const size = Math.ceil(radius * 2); const key = `${size}:${color}`;
  let light = lightPoolCache.get(key);
  if (!light) {
    light = document.createElement("canvas"); light.width = size; light.height = size;
    const lightContext = light.getContext("2d"); const center = size / 2;
    const glow = lightContext.createRadialGradient(center, center, 1, center, center, center);
    glow.addColorStop(0, `rgba(${color},1)`); glow.addColorStop(.2, `rgba(${color},.54)`); glow.addColorStop(1, `rgba(${color},0)`);
    lightContext.fillStyle = glow; lightContext.fillRect(0, 0, size, size); lightPoolCache.set(key, light);
  }
  ctx.save(); ctx.globalAlpha = intensity; ctx.imageSmoothingEnabled = true; ctx.drawImage(light, s.x - radius, s.y - radius, radius * 2, radius * 2); ctx.restore();
}

function ensureHeadlightBeamSprite() {
  if (!headlightBeamSprite) {
    headlightBeamSprite = document.createElement("canvas"); headlightBeamSprite.width = 300; headlightBeamSprite.height = 200;
    const beamContext = headlightBeamSprite.getContext("2d");
    const outer = beamContext.createLinearGradient(24, 0, 292, 0);
    outer.addColorStop(0, "rgba(213,239,232,.27)"); outer.addColorStop(.48, "rgba(190,225,217,.14)"); outer.addColorStop(1, "rgba(155,205,198,0)");
    beamContext.save(); beamContext.filter = "blur(10px)"; beamContext.fillStyle = outer;
    beamContext.beginPath(); beamContext.moveTo(25, 91); beamContext.quadraticCurveTo(155, 38, 290, 22); beamContext.lineTo(290, 178); beamContext.quadraticCurveTo(155, 162, 25, 109); beamContext.closePath(); beamContext.fill(); beamContext.restore();
    const core = beamContext.createLinearGradient(26, 0, 282, 0);
    core.addColorStop(0, "rgba(239,255,249,.5)"); core.addColorStop(.3, "rgba(222,247,240,.32)"); core.addColorStop(.72, "rgba(190,228,219,.12)"); core.addColorStop(1, "rgba(164,211,203,0)");
    beamContext.save(); beamContext.filter = "blur(6px)"; beamContext.fillStyle = core;
    beamContext.beginPath(); beamContext.moveTo(27, 96); beamContext.quadraticCurveTo(158, 68, 282, 56); beamContext.lineTo(282, 144); beamContext.quadraticCurveTo(158, 132, 27, 104); beamContext.closePath(); beamContext.fill(); beamContext.restore();
  }
  return headlightBeamSprite;
}

function viewportPoint(x, y) {
  return { x: (x - camera.x) * camera.zoom + width / 2, y: (y - camera.y) * camera.zoom + height / 2 };
}

function darknessLightSprite(radius) {
  const size = Math.max(8, Math.ceil(radius * 2));
  if (darknessLightCache.has(size)) return darknessLightCache.get(size);
  const light = document.createElement("canvas"); light.width = size; light.height = size;
  const lightContext = light.getContext("2d"); const center = size / 2;
  const fade = lightContext.createRadialGradient(center, center, 0, center, center, center);
  fade.addColorStop(0, "rgba(255,255,255,1)"); fade.addColorStop(.22, "rgba(255,255,255,.88)"); fade.addColorStop(.62, "rgba(255,255,255,.32)"); fade.addColorStop(1, "rgba(255,255,255,0)");
  lightContext.fillStyle = fade; lightContext.fillRect(0, 0, size, size); darknessLightCache.set(size, light);
  return light;
}

function cutDarknessLight(maskContext, x, y, radius, strength) {
  const s = viewportPoint(x, y); const screenRadius = radius * camera.zoom;
  if (s.x < -screenRadius || s.x > width + screenRadius || s.y < -screenRadius || s.y > height + screenRadius) return;
  const light = darknessLightSprite(radius);
  maskContext.save(); maskContext.globalAlpha = strength;
  maskContext.drawImage(light, s.x - screenRadius, s.y - screenRadius, screenRadius * 2, screenRadius * 2); maskContext.restore();
}

function cutHeadlightBeam(maskContext, lighting) {
  const intensity = lighting.night * lighting.night;
  if (intensity < .01) return;
  const s = viewportPoint(player.x, player.y); const beam = ensureHeadlightBeamSprite();
  const moving = Math.hypot(player.vx, player.vy) > 12; const sway = moving ? Math.sin(player.walkTime * 9) * .012 : 0;
  maskContext.save(); maskContext.translate(s.x + Math.cos(player.angle) * 5 * camera.zoom, s.y + Math.sin(player.angle) * 5 * camera.zoom);
  maskContext.rotate(player.angle + sway); maskContext.scale(camera.zoom, camera.zoom); maskContext.globalAlpha = Math.min(1, intensity * 1.45);
  maskContext.drawImage(beam, -21, -98, 255, 196); maskContext.restore();
  cutDarknessLight(maskContext, player.x, player.y, 30, intensity * .72);
}

function drawPlayerHeadlight(lighting) {
  const intensity = lighting.night * lighting.night;
  if (intensity < .01) return;
  const s = screenPoint(player.x, player.y); const beam = ensureHeadlightBeamSprite();
  const moving = Math.hypot(player.vx, player.vy) > 12;
  const sway = moving ? Math.sin(player.walkTime * 9) * .012 : 0;
  ctx.save(); ctx.translate(s.x + Math.cos(player.angle) * 5, s.y + Math.sin(player.angle) * 5); ctx.rotate(player.angle + sway);
  ctx.globalAlpha = intensity * .16; ctx.imageSmoothingEnabled = true; ctx.drawImage(beam, -21, -98, 255, 196); ctx.restore();
  drawLightPool(player.x, player.y, 28, "213,239,232", intensity * .12);
}

function drawCrystalEmission(o, lighting) {
  if (lighting.night < .04) return;
  const s = screenPoint(o.x, o.y); const view = surfaceViewBounds(100);
  if (s.x < view.left || s.x > view.right || s.y < view.top || s.y > view.bottom) return;
  const glowColors = ["91,218,236", "255,142,72", "181,238,247"];
  const pulse = .72 + Math.sin(elapsed * 1.7 + o.phase) * .06;
  drawLightPool(o.x, o.y, 68 + o.size, glowColors[state.planet], lighting.night * .27);
  ctx.save(); ctx.globalAlpha = lighting.night * pulse;
  drawMineralSprite(o, s);
  ctx.restore();
}

function drawSurfaceLighting(showPlayer = true) {
  const lighting = localPlanetLighting(); const view = surfaceViewBounds(4);
  ctx.save();
  if (lighting.twilight > .01) {
    const [r, g, b] = lighting.twilightTint; const direction = Math.cos(lighting.azimuth);
    const warm = ctx.createLinearGradient(direction > 0 ? view.left : view.right, view.top, direction > 0 ? view.right : view.left, view.bottom);
    warm.addColorStop(0, `rgba(${r},${g},${b},${lighting.twilight * .22})`); warm.addColorStop(1, `rgba(${r},${g},${b},${lighting.twilight * .05})`);
    ctx.fillStyle = warm; ctx.fillRect(view.left, view.top, view.right - view.left, view.bottom - view.top);
  }

  if (lighting.night > .01) {
    if (!darknessMask) darknessMask = document.createElement("canvas");
    const maskWidth = Math.ceil(width * LIGHTING_BUFFER_SCALE); const maskHeight = Math.ceil(height * LIGHTING_BUFFER_SCALE);
    if (darknessMask.width !== maskWidth || darknessMask.height !== maskHeight) { darknessMask.width = maskWidth; darknessMask.height = maskHeight; }
    const maskContext = darknessMask.getContext("2d"); const [r, g, b] = lighting.nightTint;
    maskContext.setTransform(LIGHTING_BUFFER_SCALE, 0, 0, LIGHTING_BUFFER_SCALE, 0, 0);
    maskContext.clearRect(0, 0, width, height);
    maskContext.fillStyle = `rgba(${r},${g},${b},${lighting.night * .94})`; maskContext.fillRect(0, 0, width, height);
    maskContext.fillStyle = `rgba(0,2,5,${lighting.night * lighting.night * .56})`; maskContext.fillRect(0, 0, width, height);
    maskContext.globalCompositeOperation = "destination-out";
    const network = basePowerNetwork();
    if (showPlayer) cutHeadlightBeam(maskContext, lighting);
    cutDarknessLight(maskContext, ship.x, ship.y, 104, lighting.night * (ship.repaired ? .8 : .52));
    for (const piece of basePieces[state.planet]) {
      if (piece.type === "beacon") cutDarknessLight(maskContext, piece.x, piece.y, 88, lighting.night * .78);
      else if (piece.type === "habitat" && network.poweredEntranceIds.has(piece.id)) cutDarknessLight(maskContext, piece.x, piece.y, 112, lighting.night * .88);
      else if (piece.type === "landingPad") cutDarknessLight(maskContext, piece.x, piece.y, 86, lighting.night * .62);
      else if (piece.type === "workLight" && network.poweredSurfaceIds.has(piece.id)) cutDarknessLight(maskContext, piece.x, piece.y, 126, lighting.night * .94);
    }
    for (const o of visibleDrawables) if (!o.species && o.type === "crystal") cutDarknessLight(maskContext, o.x, o.y, 72 + o.size, lighting.night * .58);
    maskContext.globalCompositeOperation = "source-over";
    ctx.drawImage(darknessMask, view.left, view.top, view.right - view.left, view.bottom - view.top);
  }

  const practicalStrength = .12 + lighting.night * .88;
  ctx.globalCompositeOperation = "screen";
  if (showPlayer) drawPlayerHeadlight(lighting);
  drawLightPool(ship.x, ship.y, 96, "156,224,231", practicalStrength * (ship.repaired ? .75 : .42));
  const network = basePowerNetwork();
  for (const piece of basePieces[state.planet]) {
    if (piece.type === "beacon") drawLightPool(piece.x, piece.y, 82, "98,220,237", practicalStrength * .8);
    else if (piece.type === "habitat" && network.poweredEntranceIds.has(piece.id)) drawLightPool(piece.x, piece.y, 106, "170,232,224", practicalStrength * .9);
    else if (piece.type === "landingPad") drawLightPool(piece.x, piece.y, 82, "255,203,87", practicalStrength * .65);
    else if (piece.type === "workLight" && network.poweredSurfaceIds.has(piece.id)) drawLightPool(piece.x, piece.y, 120, "190,248,255", practicalStrength);
  }
  for (const o of visibleDrawables) if (!o.species && o.type === "crystal") drawCrystalEmission(o, lighting);
  ctx.restore();
}

function updateCycleHud() {
  const lighting = localPlanetLighting(); const totalMinutes = Math.floor(lighting.fraction * 24 * 60);
  const hours = String(Math.floor(totalMinutes / 60)).padStart(2, "0"); const minutes = String(totalMinutes % 60).padStart(2, "0");
  const text = `${lighting.phase} · ${hours}:${minutes}`;
  if (text !== cycleHudText) { cycleHudText = text; ui.cycleStatus.textContent = text; }
}

function formatCycleSpeed(value = settings.cycleSpeed) { return value === 0 ? "PAUSED" : `${value.toFixed(value % 1 ? 2 : 0)}x`; }

function screenPoint(x, y) { return { x: x - camera.x + width / 2, y: y - camera.y + height / 2 }; }

function surfaceViewBounds(padding = 0) {
  const halfWidth = width / (2 * camera.zoom); const halfHeight = height / (2 * camera.zoom);
  return { left: width / 2 - halfWidth - padding, right: width / 2 + halfWidth + padding, top: height / 2 - halfHeight - padding, bottom: height / 2 + halfHeight + padding };
}

function worldPointVisible(x, y, padding = 0) {
  return Math.abs(x - camera.x) <= width / (2 * camera.zoom) + padding
    && Math.abs(y - camera.y) <= height / (2 * camera.zoom) + padding;
}

function worldBoundsVisible(minX, minY, maxX, maxY, padding = 0) {
  const halfWidth = width / (2 * camera.zoom) + padding; const halfHeight = height / (2 * camera.zoom) + padding;
  return maxX >= camera.x - halfWidth && minX <= camera.x + halfWidth
    && maxY >= camera.y - halfHeight && minY <= camera.y + halfHeight;
}

function surfaceDrawableRadius(object) {
  if (object.species) return 90;
  if (object.type === "caveEntrance") return 74;
  if (object.sprite) {
    const atlas = state.planet === 1 ? vesperAtlas : state.planet === 2 ? orisonAtlas : floraAtlas;
    const sprite = atlas[object.sprite];
    if (sprite) {
      const objectSize = object.size || (object.type === "landmark" ? 25 : 17);
      const scale = (object.type === "landmark" ? objectSize / 25 : objectSize / 17) * (SURFACE_OBJECT_SCALE[object.type] || SURFACE_OBJECT_SCALE.flora);
      const drawHeight = sprite.size * scale; const drawWidth = drawHeight * sprite.w / sprite.h;
      return Math.hypot(drawWidth, drawHeight) / 2 + 10;
    }
  }
  if (object.mineral) return Math.max(48, (object.size || 12) * 3);
  return Math.max(24, (object.size || 10) * 3);
}

function basePieceRadius(piece) {
  return (buildTypes[piece.type]?.radius || 20) * BUILD_SCALE + 32;
}

function pointerWorldPoint(event) {
  const rect = canvas.getBoundingClientRect(); const canvasX = (event.clientX - rect.left) * width / rect.width; const canvasY = (event.clientY - rect.top) * height / rect.height;
  return { x: camera.x + (canvasX - width / 2) / camera.zoom, y: camera.y + (canvasY - height / 2) / camera.zoom };
}

function adjustSurfaceZoom(direction) {
  if (state.mode === "space") {
    const steps = [.04, .06, .1, .16, .25, .4, .6, .8, 1, 1.3, 1.7, 2.2];
    const current = steps.reduce((best, value, index) => Math.abs(value - spaceShip.viewScale) < Math.abs(steps[best] - spaceShip.viewScale) ? index : best, 0);
    const next = Math.max(0, Math.min(steps.length - 1, current + direction));
    spaceShip.viewScale = steps[next]; showToast(`ORBITAL ZOOM ${Math.round(spaceShip.viewScale * 100)}%`); return;
  }
  if (!["planet", "planetFlight", "baseInterior", "caveInterior", "mineshaft"].includes(state.mode)) { showToast("CAMERA UNAVAILABLE"); return; }
  camera.targetZoom = Math.max(MIN_CAMERA_ZOOM, Math.min(MAX_CAMERA_ZOOM, Math.round((camera.targetZoom + direction * .1) * 10) / 10));
  saveGame(); showToast(`CAMERA ZOOM ${Math.round(camera.targetZoom * 100)}%`);
}

function activeBuildCost(type = build.selected) {
  if (state.mode === "planet" && type === "beacon" && !basePieces[state.planet].some(piece => piece.type === "beacon")) return {};
  if (constructionModules[type]) return { [constructionModules[type]]: 1 };
  return type === "beacon" ? { ferrite: 4 } : buildTypes[type].cost;
}

function formatBuildCost(cost) {
  const entries = Object.entries(cost);
  return entries.length ? entries.map(([resource, amount]) => `${amount} ${(itemDefinitions[resource]?.name || resource).toUpperCase()}`).join(" · ") : "FIRST BASE COMPUTER FREE";
}

function renderBuildCatalog() {
  if (!ui.buildCatalog) return;
  const constructionAvailable = ["planet", "baseInterior"].includes(state.mode);
  ui.buildCatalogContext.textContent = state.mode === "baseInterior" ? "UNDERGROUND MODULES" : state.mode === "planet" ? "SURFACE MODULES" : "CONSTRUCTION UNAVAILABLE";
  const renderItem = type => {
    const definition = buildTypes[type];
    const allowed = constructionAvailable && buildTypeAllowed(type); const cost = activeBuildCost(type); const affordable = canAffordBuild(cost);
    const icon = buildCatalogImages[type] ? `<img src="${buildCatalogImages[type]}" alt="">` : `<i class="build-catalog-symbol ${type}"></i>`;
    const status = settings.buildOverride ? "BUILD OVERRIDE" : formatBuildCost(cost);
    const energy = definition.capacity ? `${definition.capacity} KW STORAGE · ${definition.output} KW OUTPUT` : definition.energy && definition.output ? `${definition.energy} KW START · +${definition.output} KW` : definition.output ? `${definition.output} KW PEAK OUTPUT` : definition.energy ? `${definition.energy} KW LOAD` : "NO GRID POWER";
    return `<button class="build-catalog-item ${type === build.selected ? "active" : ""}" type="button" data-build-catalog="${type}" ${allowed ? "" : "disabled"} aria-label="${attributeText(`${definition.name}. ${status}. ${energy}`)}"><span class="build-catalog-image">${icon}</span><span class="build-catalog-copy"><strong>${attributeText(definition.name)}</strong><small class="${affordable ? "ready" : "missing"}">${attributeText(status)}</small><small class="energy-cost">${energy}</small></span></button>`;
  };
  ui.buildCatalog.innerHTML = buildCatalogGroups.map(group => `<h3>${group.name}</h3>${group.types.map(renderItem).join("")}`).join("");
}

function materialAmount(material) { return Object.hasOwn(player.inventory, material) ? player.inventory[material] : player.items[material] || 0; }
function changeMaterial(material, amount) {
  if (Object.hasOwn(player.inventory, material)) player.inventory[material] = Math.max(0, player.inventory[material] + amount);
  else player.items[material] = Math.max(0, (player.items[material] || 0) + amount);
}
function canAfford(cost) { return Object.entries(cost).every(([resource, amount]) => materialAmount(resource) >= amount); }
function spendResources(cost) { for (const [resource, amount] of Object.entries(cost)) changeMaterial(resource, -amount); }
function launchFuelCount() { return materialAmount("launch_fuel"); }
function launchAvailable() { return settings.launchOverride || launchFuelCount() > 0; }

const surfaceBuildTypes = new Set(["beacon", "floor", "wall", "habitat", "solarPanel", "battery", "waterPump", "waterTank", "landingPad", "craftingTable", "workLight", "wire", "waterPipe"]);
const undergroundBuildTypes = new Set(["floor", "wall", "storage", "generator", "battery", "refinery", "craftingTable", "workLight", "planter", "medStation", "exosuitStation", "greenhouse", "room", "hallway", "wire", "waterPipe"]);
const EXCAVATION_GRID = 96;

function excavationKey(cellX, cellY) { return `${cellX},${cellY}`; }
function excavationCell(value) { return Math.floor((value + EXCAVATION_GRID / 2) / EXCAVATION_GRID); }
function cellExcavated(cellX, cellY, planetIndex = state.planet) { return excavatedCells[planetIndex].has(excavationKey(cellX, cellY)); }

function excavateArea(x, y, radius, planetIndex = state.planet) {
  const minX = excavationCell(x - radius); const maxX = excavationCell(x + radius);
  const minY = excavationCell(y - radius); const maxY = excavationCell(y + radius);
  for (let cellX = minX; cellX <= maxX; cellX++) for (let cellY = minY; cellY <= maxY; cellY++) {
    const closestX = Math.max(cellX * EXCAVATION_GRID - EXCAVATION_GRID / 2, Math.min(x, cellX * EXCAVATION_GRID + EXCAVATION_GRID / 2));
    const closestY = Math.max(cellY * EXCAVATION_GRID - EXCAVATION_GRID / 2, Math.min(y, cellY * EXCAVATION_GRID + EXCAVATION_GRID / 2));
    if (Math.hypot(x - closestX, y - closestY) <= radius) excavatedCells[planetIndex].add(excavationKey(cellX, cellY));
  }
}

function seededCaveRandom(planetIndex) {
  let seed = (planets[planetIndex].seed * 2654435761 + 0x9e3779b9) >>> 0;
  return () => {
    seed |= 0; seed = seed + 0x6d2b79f5 | 0;
    let value = Math.imul(seed ^ seed >>> 15, 1 | seed);
    value = value + Math.imul(value ^ value >>> 7, 61 | value) ^ value;
    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  };
}

function generateCaveLayout(planetIndex = state.planet) {
  if (caveLayoutsGenerated[planetIndex]) return false;
  const random = seededCaveRandom(planetIndex); const cells = excavatedCells[planetIndex]; const carvedPath = [];
  const carve = (cellX, cellY) => {
    if (Math.abs(cellX) > 17 || Math.abs(cellY) > 17) return;
    cells.add(excavationKey(cellX, cellY)); carvedPath.push({ x: cellX, y: cellY });
  };
  const chamber = (centerX, centerY, radius) => {
    for (let x = -radius; x <= radius; x++) for (let y = -radius; y <= radius; y++) {
      const roughEdge = random() * .8;
      if (Math.hypot(x, y) <= radius - roughEdge) carve(centerX + x, centerY + y);
    }
  };
  chamber(0, 0, 2);
  const branchCount = 5 + Math.floor(random() * 3);
  for (let branch = 0; branch < branchCount; branch++) {
    let cellX = 0; let cellY = 0;
    let heading = branch * TAU / branchCount + (random() - .5) * .7;
    const length = 13 + Math.floor(random() * 10);
    for (let step = 0; step < length; step++) {
      if (random() < .34) heading += (random() - .5) * 1.15;
      const horizontal = Math.abs(Math.cos(heading)) > Math.abs(Math.sin(heading));
      cellX += horizontal ? Math.sign(Math.cos(heading)) || 1 : 0;
      cellY += horizontal ? 0 : Math.sign(Math.sin(heading)) || 1;
      if (Math.abs(cellX) > 16 || Math.abs(cellY) > 16) heading += Math.PI * (.7 + random() * .6);
      carve(cellX, cellY);
      if (random() < .52) {
        const sideX = horizontal ? 0 : random() < .5 ? -1 : 1;
        const sideY = horizontal ? random() < .5 ? -1 : 1 : 0;
        carve(cellX + sideX, cellY + sideY);
      }
      if (step > 4 && random() < .13) chamber(cellX, cellY, random() < .25 ? 3 : 2);
    }
  }
  const offshoots = 4 + Math.floor(random() * 4);
  for (let branch = 0; branch < offshoots && carvedPath.length; branch++) {
    const origin = carvedPath[Math.floor(random() * carvedPath.length)]; let cellX = origin.x; let cellY = origin.y;
    let heading = random() * TAU; const length = 5 + Math.floor(random() * 8);
    for (let step = 0; step < length; step++) {
      heading += (random() - .5) * .9;
      if (Math.abs(Math.cos(heading)) > Math.abs(Math.sin(heading))) cellX += Math.sign(Math.cos(heading)) || 1;
      else cellY += Math.sign(Math.sin(heading)) || 1;
      carve(cellX, cellY);
    }
    if (random() < .7) chamber(cellX, cellY, 2);
  }
  caveLayoutsGenerated[planetIndex] = true;
  return true;
}

function naturalCaveKey(planetIndex, entranceId) { return `${planetIndex}:${entranceId}`; }

function generateNaturalCave(planetIndex, entranceId) {
  const key = naturalCaveKey(planetIndex, entranceId); if (naturalCaveCache.has(key)) return naturalCaveCache.get(key);
  const random = seededRandom(planets[planetIndex].seed * 4099 + entranceId * 7919 + 443); const cells = new Set(); const path = [];
  const carve = (cellX, cellY) => {
    if (Math.abs(cellX) > 68 || Math.abs(cellY) > 68) return;
    const cellKey = excavationKey(cellX, cellY); cells.add(cellKey); path.push({ x: cellX, y: cellY });
  };
  const chamber = (centerX, centerY, radius) => {
    for (let x = -radius; x <= radius; x++) for (let y = -radius; y <= radius; y++) {
      if (Math.hypot(x, y) <= radius - random() * .9) carve(centerX + x, centerY + y);
    }
  };
  chamber(0, 0, 3);
  const tunnelCount = 9 + Math.floor(random() * 3);
  for (let tunnel = 0; tunnel < tunnelCount; tunnel++) {
    let cellX = 0; let cellY = 0; let heading = tunnel / tunnelCount * TAU + (random() - .5) * .48;
    const length = 48 + Math.floor(random() * 27);
    for (let step = 0; step < length; step++) {
      if (random() < .31) heading += (random() - .5) * .92;
      let horizontal = Math.abs(Math.cos(heading)) > Math.abs(Math.sin(heading));
      let nextX = cellX + (horizontal ? Math.sign(Math.cos(heading)) || 1 : 0);
      let nextY = cellY + (horizontal ? 0 : Math.sign(Math.sin(heading)) || 1);
      if (Math.abs(nextX) > 67 || Math.abs(nextY) > 67) {
        heading += Math.PI + (random() - .5) * .7; horizontal = Math.abs(Math.cos(heading)) > Math.abs(Math.sin(heading));
        nextX = cellX + (horizontal ? Math.sign(Math.cos(heading)) || 1 : 0); nextY = cellY + (horizontal ? 0 : Math.sign(Math.sin(heading)) || 1);
      }
      cellX = nextX; cellY = nextY; carve(cellX, cellY);
      if (random() < .68) carve(cellX + (horizontal ? 0 : random() < .5 ? -1 : 1), cellY + (horizontal ? random() < .5 ? -1 : 1 : 0));
      if (step > 8 && random() < .085) chamber(cellX, cellY, random() < .22 ? 4 : 3);
    }
  }
  const offshootCount = 16 + Math.floor(random() * 7);
  for (let offshoot = 0; offshoot < offshootCount; offshoot++) {
    const origin = path[Math.floor(random() * path.length)]; let cellX = origin.x; let cellY = origin.y; let heading = random() * TAU;
    const length = 12 + Math.floor(random() * 24);
    for (let step = 0; step < length; step++) {
      heading += (random() - .5) * 1.05; const horizontal = Math.abs(Math.cos(heading)) > Math.abs(Math.sin(heading));
      const nextX = cellX + (horizontal ? Math.sign(Math.cos(heading)) || 1 : 0); const nextY = cellY + (horizontal ? 0 : Math.sign(Math.sin(heading)) || 1);
      if (Math.abs(nextX) > 67 || Math.abs(nextY) > 67) break;
      cellX = nextX; cellY = nextY; carve(cellX, cellY); if (random() < .42) carve(cellX + (horizontal ? 0 : 1), cellY + (horizontal ? 1 : 0));
    }
    if (random() < .72) chamber(cellX, cellY, 2 + Math.floor(random() * 2));
  }
  const doorCell = [...cells].map(cellKey => { const [x, y] = cellKey.split(",").map(Number); return { x, y, distance: Math.hypot(x, y) }; }).sort((a, b) => b.distance - a.distance)[0];
  chamber(doorCell.x, doorCell.y, 3);
  const reachable = new Set([excavationKey(0, 0)]); const pending = [{ x: 0, y: 0 }];
  while (pending.length) {
    const cell = pending.pop();
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const adjacentKey = excavationKey(cell.x + dx, cell.y + dy);
      if (cells.has(adjacentKey) && !reachable.has(adjacentKey)) { reachable.add(adjacentKey); pending.push({ x: cell.x + dx, y: cell.y + dy }); }
    }
  }
  for (const cellKey of cells) if (!reachable.has(cellKey)) cells.delete(cellKey);
  const cave = { key, planet: planetIndex, entranceId, cells, door: { x: doorCell.x * EXCAVATION_GRID, y: doorCell.y * EXCAVATION_GRID, angle: Math.atan2(doorCell.y, doorCell.x) } };
  naturalCaveCache.set(key, cave); return cave;
}

function areaInsideCells(cells, x, y, radius) {
  const minX = excavationCell(x - radius); const maxX = excavationCell(x + radius); const minY = excavationCell(y - radius); const maxY = excavationCell(y + radius);
  for (let cellX = minX; cellX <= maxX; cellX++) for (let cellY = minY; cellY <= maxY; cellY++) {
    const left = cellX * EXCAVATION_GRID - EXCAVATION_GRID / 2; const top = cellY * EXCAVATION_GRID - EXCAVATION_GRID / 2;
    const closestX = Math.max(left, Math.min(x, left + EXCAVATION_GRID)); const closestY = Math.max(top, Math.min(y, top + EXCAVATION_GRID));
    if (Math.hypot(x - closestX, y - closestY) <= radius && !cells.has(excavationKey(cellX, cellY))) return false;
  }
  return true;
}

function ensureInitialExcavation(planetIndex = state.planet) {
  for (let cellX = -1; cellX <= 1; cellX++) for (let cellY = -1; cellY <= 1; cellY++) excavatedCells[planetIndex].add(excavationKey(cellX, cellY));
  for (const piece of undergroundPieces[planetIndex]) excavateArea(piece.x, piece.y, buildTypes[piece.type].radius * BUILD_SCALE + 8, planetIndex);
  return generateCaveLayout(planetIndex);
}

function undergroundAreaExcavated(x, y, radius) {
  const minX = excavationCell(x - radius); const maxX = excavationCell(x + radius);
  const minY = excavationCell(y - radius); const maxY = excavationCell(y + radius);
  for (let cellX = minX; cellX <= maxX; cellX++) for (let cellY = minY; cellY <= maxY; cellY++) {
    const left = cellX * EXCAVATION_GRID - EXCAVATION_GRID / 2; const top = cellY * EXCAVATION_GRID - EXCAVATION_GRID / 2;
    const closestX = Math.max(left, Math.min(x, left + EXCAVATION_GRID)); const closestY = Math.max(top, Math.min(y, top + EXCAVATION_GRID));
    if (Math.hypot(x - closestX, y - closestY) <= radius && !cellExcavated(cellX, cellY)) return false;
  }
  return true;
}

function undergroundDigTarget() {
  const directionX = Math.cos(player.angle); const directionY = Math.sin(player.angle);
  for (let distance = 46; distance <= 150; distance += 18) {
    const cellX = excavationCell(player.x + directionX * distance); const cellY = excavationCell(player.y + directionY * distance);
    if (cellExcavated(cellX, cellY)) continue;
    const adjacent = [[1,0],[-1,0],[0,1],[0,-1]].some(([dx, dy]) => cellExcavated(cellX + dx, cellY + dy));
    if (adjacent) return { cellX, cellY, key: excavationKey(cellX, cellY), x: cellX * EXCAVATION_GRID, y: cellY * EXCAVATION_GRID };
  }
  return null;
}

function toolEnergyCapacity() { return 100 + toolUpgrades.capacity * 25; }
function toolRange() { return 62 + toolUpgrades.range * 24; }
function miningRate() { return (1 + toolUpgrades.mining * .35) * (1 + armorStats().mining); }
function combatRate() { return (1 + toolUpgrades.combat * .4) * (1 + armorStats().combat); }
function playerMoveSpeed() {
  const stormDrag = state.mode === "planet" ? 1 - stormSnapshot().intensity * .12 : 1;
  return player.speed * (1 + armorStats().speed) * stormDrag;
}
function toolReadyForUse() {
  if (state.toolOverheated && player.tool >= Math.min(20, toolEnergyCapacity() * .2)) state.toolOverheated = false;
  return !state.toolOverheated && player.tool > 1;
}
function consumeToolEnergy(amount) {
  player.tool = Math.max(0, player.tool - amount);
  if (player.tool <= 1) state.toolOverheated = true;
}

function undergroundDepositForCell(cellX, cellY, planetIndex = state.planet) {
  if (Math.abs(cellX) <= 1 && Math.abs(cellY) <= 1) return null;
  const key = excavationKey(cellX, cellY); if (minedUndergroundDeposits[planetIndex].has(key)) return null;
  const hash = value => {
    const result = Math.sin(cellX * 127.1 + cellY * 311.7 + planets[planetIndex].seed * 73.3 + value) * 43758.5453;
    return result - Math.floor(result);
  };
  const depth = Math.hypot(cellX, cellY);
  const depositChance = depth < 8 ? .16 : depth < 20 ? .23 : .3;
  const density = hash(3.1); if (density > depositChance) return null;
  const roll = hash(9.7); const exoticChance = depth < 8 ? 0 : depth < 20 ? .12 : .25;
  const exotic = roll < exoticChance; const copper = !exotic && roll < exoticChance + .27; const silica = !exotic && !copper && roll < exoticChance + .44;
  const exoticItems = ["verdite_ore", "ignicite_ore", "cryocite_ore"];
  const item = exotic ? exoticItems[planetIndex] : copper ? "copper_ore" : silica ? "silica" : null;
  const amountBonus = Math.min(3, Math.floor(depth / 14)); const amount = (exotic ? 1 : copper ? 2 : silica ? 2 : 3) + amountBonus;
  return {
    key, cellX, cellY, x: cellX * EXCAVATION_GRID, y: cellY * EXCAVATION_GRID,
    kind: exotic ? "rare" : copper ? "copper" : silica ? "silica" : "ferrite",
    name: item ? itemDefinitions[item].name : `${planets[planetIndex].name} Ferrite Vein`,
    item, resource: item ? null : "ferrite", amount,
    hardness: exotic ? 2.2 : copper ? 1.65 : silica ? 1.4 : 1.15, phase: hash(15.2) * TAU, depth,
  };
}

let visibleDepositCache = { planet: -1, excavated: -1, mined: -1, deposits: [] };
function visibleUndergroundDeposits() {
  const excavated = excavatedCells[state.planet]; const mined = minedUndergroundDeposits[state.planet];
  if (visibleDepositCache.planet === state.planet && visibleDepositCache.excavated === excavated.size && visibleDepositCache.mined === mined.size) return visibleDepositCache.deposits;
  const deposits = [];
  for (const key of excavated) {
    const [cellX, cellY] = key.split(",").map(Number); const deposit = undergroundDepositForCell(cellX, cellY);
    if (deposit) deposits.push(deposit);
  }
  visibleDepositCache = { planet: state.planet, excavated: excavated.size, mined: mined.size, deposits };
  return deposits;
}

function nearestUndergroundDeposit() {
  let nearest = null; let nearestDistance = toolRange() + 18;
  for (const deposit of visibleUndergroundDeposits()) {
    const distance = Math.hypot(player.x - deposit.x, player.y - deposit.y);
    if (distance <= nearestDistance) { nearest = deposit; nearestDistance = distance; }
  }
  return nearest ? { ...nearest, distance: nearestDistance } : null;
}

function naturalCaveDeposits(cave = naturalCave.active) {
  if (!cave) return [];
  if (!naturalCaveDepositCache.has(cave.key)) {
    const deposits = [];
    for (const cellKey of cave.cells) {
      const [cellX, cellY] = cellKey.split(",").map(Number);
      const hash = value => {
        const result = Math.sin(cellX * 127.1 + cellY * 311.7 + planets[cave.planet].seed * 73.3 + cave.entranceId * 41.9 + value) * 43758.5453;
        return result - Math.floor(result);
      };
      const x = cellX * EXCAVATION_GRID + (hash(11.3) - .5) * 24;
      const y = cellY * EXCAVATION_GRID + (hash(17.1) - .5) * 24;
      if (Math.hypot(x, y) < 360 || Math.hypot(x - cave.door.x, y - cave.door.y) < 260 || hash(3.4) > .035) continue;
      const roll = hash(7.2); const kind = roll < .5 ? "ferrite" : roll < .79 ? "copper" : "silica";
      const item = kind === "copper" ? "copper_ore" : kind === "silica" ? "silica" : null;
      deposits.push({
        key: `${cave.key}:${cellKey}`, cellX, cellY, x, y, kind,
        name: item ? itemDefinitions[item].name : `${planets[cave.planet].name} Ferrite Vein`,
        item, resource: item ? null : "ferrite", amount: kind === "ferrite" ? 3 : 2,
        hardness: kind === "copper" ? 1.65 : kind === "silica" ? 1.4 : 1.15,
        phase: hash(23.7) * TAU,
      });
    }
    naturalCaveDepositCache.set(cave.key, deposits);
  }
  return naturalCaveDepositCache.get(cave.key).filter(deposit => !minedNaturalCaveDeposits.has(deposit.key));
}

function nearestNaturalCaveDeposit() {
  const range = toolRange() + 18;
  let nearest = null; let nearestDistance = range;
  for (const deposit of naturalCaveDeposits()) {
    const distance = Math.hypot(player.x - deposit.x, player.y - deposit.y);
    if (distance <= nearestDistance) { nearest = deposit; nearestDistance = distance; }
  }
  return nearest;
}

function buildTypeAllowed(type) {
  return (state.mode === "baseInterior" ? undergroundBuildTypes : surfaceBuildTypes).has(type);
}
function activeStructurePieces() { return state.mode === "baseInterior" ? undergroundPieces[state.planet] : basePieces[state.planet]; }
function activePowerWires() { return state.mode === "baseInterior" ? undergroundWires[state.planet] : surfaceWires[state.planet]; }
function activeWaterPipes() { return state.mode === "baseInterior" ? undergroundWaterPipes[state.planet] : surfaceWaterPipes[state.planet]; }

function updateBuildToolbar() {
  if (!buildTypeAllowed(build.selected)) build.selected = state.mode === "baseInterior" ? "hallway" : "beacon";
  const definition = buildTypes[build.selected]; const cost = activeBuildCost();
  ui.buildSelectionName.textContent = definition.name;
  const buildCostText = settings.buildOverride ? "BUILD OVERRIDE ACTIVE" : formatBuildCost(cost);
  const energyText = definition.capacity ? ` · ${definition.capacity} KW STORAGE · ${definition.output} KW OUTPUT` : definition.energy && definition.output ? ` · ${definition.energy} KW START · +${definition.output} KW` : definition.output ? ` · ${definition.output} KW PEAK` : definition.energy ? ` · ${definition.energy} KW LOAD` : "";
  ui.buildSelectionCost.textContent = ["wire", "waterPipe"].includes(build.selected) && build.wireStartId !== null ? "SELECT SECOND CONNECTOR" : `${buildCostText}${energyText}`;
  renderBuildCatalog();
}

function selectBuildType(type) {
  if (!buildTypes[type] || !buildTypeAllowed(type)) return;
  build.selected = type; build.wireStartId = null; updateBuildToolbar();
}

function toggleBuildMode() {
  if (build.active) {
    build.active = false; build.wireStartId = null; ui.buildToolbar.hidden = true; document.body.classList.remove("build-mode");
    return;
  }
  if (!["planet", "baseInterior"].includes(state.mode) || state.panelOpen) { showToast("CONSTRUCTION UNAVAILABLE"); return; }
  closeQuickMenu(); cancelShipRecallSelection();
  closeShipInventory(); build.active = true; player.vx = 0; player.vy = 0; build.worldX = Math.round((player.x + BUILD_GRID * (state.mode === "baseInterior" ? 3 : 2)) / BUILD_GRID) * BUILD_GRID; build.worldY = Math.round(player.y / BUILD_GRID) * BUILD_GRID;
  ui.buildToolbar.hidden = false; ui.interaction.hidden = true; document.body.classList.add("build-mode"); updateBuildToolbar();
}

function beginBuildPlacement(type) {
  if (!buildTypes[type] || !buildTypeAllowed(type) || !["planet", "baseInterior"].includes(state.mode)) return;
  build.selected = type; build.wireStartId = null; closeShipInventory(); toggleBuildMode();
}

function openBuildCatalog() {
  if (build.active) { toggleBuildMode(); return; }
  if (!["planet", "baseInterior"].includes(state.mode)) { showToast("CONSTRUCTION UNAVAILABLE"); return; }
  toggleShipInventory("build");
}

function closeQuickMenu() { ui.quickMenu.hidden = true; }

function toggleQuickMenu() {
  if (shipRecall.selecting) { cancelShipRecallSelection(); return; }
  if (state.mode !== "planet" || state.panelOpen || build.active) { showToast("QUICK ACTIONS AVAILABLE ON FOOT"); return; }
  const opening = ui.quickMenu.hidden;
  closeShipInventory(); ui.quickMenu.hidden = !opening;
}

function landingSiteFor(x, y) {
  const pad = basePieces[state.planet]
    .filter(piece => piece.type === "landingPad")
    .map(piece => ({ piece, distance: Math.hypot(piece.x - x, piece.y - y) }))
    .sort((a, b) => a.distance - b.distance)[0];
  return pad?.distance <= 105 ? { x: pad.piece.x, y: pad.piece.y, padId: pad.piece.id } : { x, y, padId: null };
}

function recallLandingValid(site) {
  if (Math.hypot(site.x - player.x, site.y - player.y) < 115) return false;
  if (Math.hypot(site.x - ship.x, site.y - ship.y) < 90) return false;
  if (basePieces[state.planet].some(piece => piece.id !== site.padId && Math.hypot(piece.x - site.x, piece.y - site.y) < buildTypes[piece.type].radius * BUILD_SCALE + 58)) return false;
  return !world.some(object => object.alive && ["landmark", "ferrite", "crystal"].includes(object.type) && Math.hypot(object.x - site.x, object.y - site.y) < object.size * 1.6 + 48);
}

function updateRecallTarget(x, y) {
  const site = landingSiteFor(x, y);
  shipRecall.targetX = site.x; shipRecall.targetY = site.y; shipRecall.padId = site.padId; shipRecall.valid = recallLandingValid(site);
}

function beginShipRecallSelection() {
  closeQuickMenu();
  if (shipRecall.active) { showToast("KESTREL ALREADY EN ROUTE"); return; }
  shipRecall.selecting = true; player.vx = 0; player.vy = 0;
  updateRecallTarget(player.x + Math.cos(player.angle || 0) * 220, player.y + Math.sin(player.angle || 0) * 220);
  ui.recallHint.hidden = false; document.body.classList.add("ship-recall-targeting");
}

function cancelShipRecallSelection() {
  shipRecall.selecting = false; ui.recallHint.hidden = true; document.body.classList.remove("ship-recall-targeting");
}

function confirmShipRecall() {
  if (!shipRecall.valid) { showToast("LANDING SITE OBSTRUCTED"); return; }
  cancelShipRecallSelection(); shipRecall.active = true; shipRecall.distance = Math.hypot(shipRecall.targetX - ship.x, shipRecall.targetY - ship.y);
  ship.vx = 0; ship.vy = 0; showToast("KESTREL RECALL CONFIRMED");
}

function updateShipRecall(dt) {
  if (!shipRecall.active) return;
  const dx = shipRecall.targetX - ship.x; const dy = shipRecall.targetY - ship.y; const distance = Math.hypot(dx, dy);
  shipRecall.distance = distance;
  if (distance < 12) {
    ship.x = shipRecall.targetX; ship.y = shipRecall.targetY; ship.vx = 0; ship.vy = 0; shipRecall.active = false;
    saveGame(); showToast("KESTREL LANDED"); return;
  }
  const directionX = distance ? dx / distance : 0; const directionY = distance ? dy / distance : 0;
  const desiredSpeed = Math.min(ship.engine ? 410 : 340, Math.max(35, distance * 2.15));
  ship.vx += (directionX * desiredSpeed - ship.vx) * Math.min(1, dt * 3.8);
  ship.vy += (directionY * desiredSpeed - ship.vy) * Math.min(1, dt * 3.8);
  const targetAngle = Math.atan2(ship.vy, ship.vx); const angleDelta = Math.atan2(Math.sin(targetAngle - ship.angle), Math.cos(targetAngle - ship.angle));
  ship.angle += angleDelta * Math.min(1, dt * 6.5); ship.x += ship.vx * dt; ship.y += ship.vy * dt;
}

function clearAllBuildings() {
  if (!ui.clearBuildings.classList.contains("armed")) {
    ui.clearBuildings.classList.add("armed"); ui.clearBuildings.textContent = "CONFIRM REMOVE";
    clearTimeout(clearBuildingsTimer);
    clearBuildingsTimer = setTimeout(() => { ui.clearBuildings.classList.remove("armed"); ui.clearBuildings.textContent = "REMOVE ALL"; }, 4000);
    return;
  }
  clearTimeout(clearBuildingsTimer);
  const preservedShip = { ...ship };
  if (state.mode === "baseInterior") exitUndergroundBase(true);
  for (const pieceId of [...refineryJobs.keys()]) refundRefineryJob(pieceId);
  basePieces.forEach(pieces => pieces.splice(0)); undergroundPieces.forEach(pieces => pieces.splice(0));
  surfaceWires.forEach(wires => wires.splice(0)); undergroundWires.forEach(wires => wires.splice(0));
  surfaceWaterPipes.forEach(pipes => pipes.splice(0)); undergroundWaterPipes.forEach(pipes => pipes.splice(0));
  build.wireStartId = null; roofOpacity.clear(); nextBaseId = 1; nextWireId = 1;
  Object.assign(ship, preservedShip);
  if (build.active) toggleBuildMode();
  ui.clearBuildings.classList.remove("armed"); ui.clearBuildings.textContent = "REMOVE ALL";
  saveGame({ preserveSurfaceShip: true }); showToast("CONSTRUCTION REMOVED · KESTREL PRESERVED");
}

function claimedAt(x, y) {
  if (state.mode === "baseInterior") return true;
  return basePieces[state.planet].some(piece => piece.type === "beacon" && Math.hypot(piece.x - x, piece.y - y) <= BUILD_CLAIM_RADIUS);
}

function canAffordBuild(cost) {
  return settings.buildOverride || canAfford(cost);
}

function wireEndpointAllowed(piece) {
  return state.mode === "planet"
    ? ["solarPanel", "battery", "habitat", "waterPump", "workLight"].includes(piece.type)
    : ["room", "storage", "generator", "battery", "refinery", "workLight", "planter", "medStation", "exosuitStation", "greenhouse"].includes(piece.type);
}

function wireEndpointAt(x, y) {
  return activeStructurePieces()
    .filter(wireEndpointAllowed)
    .map(piece => ({ piece, distance: Math.hypot(piece.x - x, piece.y - y) }))
    .filter(entry => entry.distance <= buildTypes[entry.piece.type].radius * BUILD_SCALE + 22)
    .sort((a, b) => a.distance - b.distance)[0]?.piece || null;
}

function wireConnectionAllowed(a, b) {
  if (state.mode === "planet") {
    const types = new Set([a.type, b.type]); const hasSource = types.has("solarPanel") || types.has("battery");
    return a.type !== b.type && hasSource && [...types].every(type => ["solarPanel", "battery", "habitat", "waterPump", "workLight"].includes(type));
  }
  return wireEndpointAllowed(a) && wireEndpointAllowed(b);
}

function placePowerWire() {
  const endpoint = wireEndpointAt(build.worldX, build.worldY);
  if (!endpoint) { showToast("SELECT A POWER CONNECTOR"); return; }
  if (build.wireStartId === null) {
    build.wireStartId = endpoint.id; updateBuildToolbar(); showToast("FIRST CONNECTOR SELECTED"); return;
  }
  const pieces = activeStructurePieces(); const start = pieces.find(piece => piece.id === build.wireStartId);
  if (!start) { build.wireStartId = null; updateBuildToolbar(); return; }
  if (start.id === endpoint.id) { showToast("SELECT A DIFFERENT CONNECTOR"); return; }
  if (!wireConnectionAllowed(start, endpoint)) { showToast(state.mode === "planet" ? "CONNECT A POWER SOURCE TO A LOAD" : "INCOMPATIBLE POWER CONNECTOR"); return; }
  if (Math.hypot(start.x - endpoint.x, start.y - endpoint.y) > 900) { showToast("CABLE RUN TOO LONG"); return; }
  const wires = activePowerWires();
  if (wires.some(wire => (wire.a === start.id && wire.b === endpoint.id) || (wire.a === endpoint.id && wire.b === start.id))) { showToast("CONNECTORS ALREADY WIRED"); return; }
  const cost = activeBuildCost("wire");
  if (!canAffordBuild(cost)) { showToast("INSUFFICIENT BUILD MATERIALS"); return; }
  if (!settings.buildOverride) spendResources(cost);
  wires.push({ id: nextWireId++, a: start.id, b: endpoint.id, cost: settings.buildOverride ? {} : { ...cost } });
  build.wireStartId = null; updateUI(); updateBuildToolbar(); if (state.mode === "baseInterior") updateBaseSystemsPanel(); saveGame(); showToast("POWER CABLE CONNECTED");
}

function waterPipeEndpointAllowed(piece) {
  return state.mode === "planet"
    ? ["waterPump", "waterTank", "habitat"].includes(piece.type)
    : Boolean(piece.starter || piece.type === "greenhouse");
}

function waterPipeEndpointAt(x, y) {
  return activeStructurePieces()
    .filter(waterPipeEndpointAllowed)
    .map(piece => ({ piece, distance: Math.hypot(piece.x - x, piece.y - y) }))
    .filter(entry => entry.distance <= buildTypes[entry.piece.type].radius * BUILD_SCALE + 22)
    .sort((a, b) => a.distance - b.distance)[0]?.piece || null;
}

function waterPipeConnectionAllowed(a, b) {
  if (state.mode === "baseInterior") return Boolean((a.starter && b.type === "greenhouse") || (b.starter && a.type === "greenhouse"));
  const pair = new Set([a.type, b.type]);
  return pair.size === 2 && pair.has("waterPump") && (pair.has("waterTank") || pair.has("habitat"));
}

function placeWaterPipe() {
  const endpoint = waterPipeEndpointAt(build.worldX, build.worldY);
  if (!endpoint) { showToast("SELECT A WATER CONNECTOR"); return; }
  if (build.wireStartId === null) { build.wireStartId = endpoint.id; updateBuildToolbar(); showToast("FIRST WATER CONNECTOR SELECTED"); return; }
  const pieces = activeStructurePieces(); const start = pieces.find(piece => piece.id === build.wireStartId);
  if (!start) { build.wireStartId = null; updateBuildToolbar(); return; }
  if (start.id === endpoint.id) { showToast("SELECT A DIFFERENT CONNECTOR"); return; }
  if (!waterPipeConnectionAllowed(start, endpoint)) { showToast(state.mode === "planet" ? "CONNECT PUMP TO TANK AND ENTRANCE" : "CONNECT ENTRANCE TO GREENHOUSE"); return; }
  if (Math.hypot(start.x - endpoint.x, start.y - endpoint.y) > 900) { showToast("PIPE RUN TOO LONG"); return; }
  const pipes = activeWaterPipes();
  if (pipes.some(pipe => pipe.a === start.id && pipe.b === endpoint.id || pipe.a === endpoint.id && pipe.b === start.id)) { showToast("CONNECTORS ALREADY PIPED"); return; }
  const cost = activeBuildCost("waterPipe");
  if (!canAffordBuild(cost)) { showToast("INSUFFICIENT BUILD MATERIALS"); return; }
  if (!settings.buildOverride) spendResources(cost);
  pipes.push({ id: nextWireId++, a: start.id, b: endpoint.id, cost: settings.buildOverride ? {} : { ...cost } });
  build.wireStartId = null; updateUI(); updateBuildToolbar(); if (state.mode === "baseInterior") updateBaseSystemsPanel(); saveGame(); showToast("WATER PIPE CONNECTED");
}

function pointSegmentDistance(px, py, ax, ay, bx, by) {
  const dx = bx - ax; const dy = by - ay; const lengthSquared = dx * dx + dy * dy;
  const t = lengthSquared ? Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lengthSquared)) : 0;
  return Math.hypot(px - (ax + dx * t), py - (ay + dy * t));
}

function dismantlePowerWire() {
  if (build.wireStartId !== null) { build.wireStartId = null; updateBuildToolbar(); showToast("CABLE SELECTION CANCELLED"); return; }
  const pieces = activeStructurePieces(); const wires = activePowerWires(); let nearestIndex = -1; let nearestDistance = 18;
  wires.forEach((wire, index) => {
    const a = pieces.find(piece => piece.id === wire.a); const b = pieces.find(piece => piece.id === wire.b); if (!a || !b) return;
    const distance = pointSegmentDistance(build.worldX, build.worldY, a.x, a.y, b.x, b.y);
    if (distance < nearestDistance) { nearestDistance = distance; nearestIndex = index; }
  });
  if (nearestIndex < 0) { showToast("NO POWER CABLE SELECTED"); return; }
  const [wire] = wires.splice(nearestIndex, 1); const cost = wire.cost || { ferrite: 1 };
  Object.entries(cost).forEach(([resource, amount]) => changeMaterial(resource, Math.ceil(amount * .5)));
  updateUI(); updateBuildToolbar(); if (state.mode === "baseInterior") updateBaseSystemsPanel(); saveGame(); showToast("POWER CABLE REMOVED");
}

function dismantleWaterPipe() {
  if (build.wireStartId !== null) { build.wireStartId = null; updateBuildToolbar(); showToast("PIPE SELECTION CANCELLED"); return; }
  const pieces = activeStructurePieces(); const pipes = activeWaterPipes(); let nearestIndex = -1; let nearestDistance = 18;
  pipes.forEach((pipe, index) => {
    const a = pieces.find(piece => piece.id === pipe.a); const b = pieces.find(piece => piece.id === pipe.b); if (!a || !b) return;
    const distance = pointSegmentDistance(build.worldX, build.worldY, a.x, a.y, b.x, b.y);
    if (distance < nearestDistance) { nearestDistance = distance; nearestIndex = index; }
  });
  if (nearestIndex < 0) { showToast("NO WATER PIPE SELECTED"); return; }
  const [pipe] = pipes.splice(nearestIndex, 1);
  Object.entries(pipe.cost || { ferrite: 1 }).forEach(([resource, amount]) => changeMaterial(resource, Math.ceil(amount * .5)));
  updateUI(); updateBuildToolbar(); if (state.mode === "baseInterior") updateBaseSystemsPanel(); saveGame(); showToast("WATER PIPE REMOVED");
}

function removeWiresForPiece(pieceId, refund = false) {
  for (const wires of [...surfaceWires, ...undergroundWires, ...surfaceWaterPipes, ...undergroundWaterPipes]) {
    for (let index = wires.length - 1; index >= 0; index--) if (wires[index].a === pieceId || wires[index].b === pieceId) {
      const [wire] = wires.splice(index, 1); if (refund) for (const [resource, amount] of Object.entries(wire.cost || { ferrite: 1 })) changeMaterial(resource, amount);
    }
  }
}

function nearestRecoverableStructure() {
  return activeStructurePieces().filter(piece => !piece.starter && buildTypes[piece.type]).map(piece => {
    const distance = Math.hypot(player.x - piece.x, player.y - piece.y); const radius = buildTypes[piece.type].radius * BUILD_SCALE;
    return { piece, distance, score: distance + radius * .15, inRange: distance <= radius + 42 };
  }).filter(entry => entry.inRange).sort((a, b) => a.score - b.score)[0]?.piece || null;
}

function recoverStructure(piece) {
  const pieces = activeStructurePieces(); const index = pieces.findIndex(candidate => candidate.id === piece.id); if (index < 0) return false;
  if (piece.type === "beacon" && pieces.some(other => other.id !== piece.id && Math.hypot(other.x - piece.x, other.y - piece.y) <= BUILD_CLAIM_RADIUS)) { showToast("RECOVER NEARBY BASE PARTS FIRST"); return false; }
  const cost = piece.cost || (piece.type === "beacon" ? { ferrite: 4 } : buildTypes[piece.type].cost);
  const recoveredCost = piece.type === "battery" ? { battery_module: 1 } : cost;
  for (const [resource, amount] of Object.entries(recoveredCost)) changeMaterial(resource, amount);
  if (piece.type === "battery") {
    portableBatteryCharges.push(Math.max(0, Math.min(200, piece.charge || 0)));
    if (!hotbar.slots.includes("battery_module")) { const empty = hotbar.slots.indexOf(null); if (empty >= 0) hotbar.slots[empty] = "battery_module"; }
  }
  if (piece.type === "refinery") refundRefineryJob(piece.id);
  roofOpacity.delete(piece.id); removeWiresForPiece(piece.id, true); pieces.splice(index, 1);
  updateUI(); updateBuildToolbar(); if (state.mode === "baseInterior") updateBaseSystemsPanel(); saveGame(); showToast(`${buildTypes[piece.type].name.toUpperCase()} RECOVERED`); return true;
}

function updateStructureRecovery(dt) {
  if (!keys.has("c")) { structureRecovery.pieceId = null; structureRecovery.progress = 0; structureRecovery.armed = true; return false; }
  if (!structureRecovery.armed) return true;
  const pieces = activeStructurePieces(); let piece = pieces.find(candidate => candidate.id === structureRecovery.pieceId);
  if (!piece || Math.hypot(player.x - piece.x, player.y - piece.y) > buildTypes[piece.type].radius * BUILD_SCALE + 48) {
    piece = nearestRecoverableStructure(); structureRecovery.pieceId = piece?.id ?? null; structureRecovery.progress = 0;
  }
  if (!piece) { ui.interaction.hidden = true; return true; }
  player.vx = 0; player.vy = 0; ui.interaction.hidden = false; ui.interactionKey.textContent = "C"; ui.interactionTitle.textContent = `Recover ${buildTypes[piece.type].name}`;
  structureRecovery.progress += dt; ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, structureRecovery.progress / .8 * 100)}%`);
  if (structureRecovery.progress >= .8) {
    structureRecovery.armed = false; structureRecovery.progress = 0; structureRecovery.pieceId = null; keys.delete("c"); recoverStructure(piece);
  }
  return true;
}

function buildPlacementValid(type, x, y) {
  if (!buildTypeAllowed(type)) return false;
  const definition = buildTypes[type];
  if (Math.hypot(player.x - x, player.y - y) > BUILD_RANGE) return false;
  if (Math.hypot(player.x - x, player.y - y) < definition.radius * BUILD_SCALE + 15) return false;
  if (state.mode === "planet" && Math.hypot(ship.x - x, ship.y - y) < definition.radius * BUILD_SCALE + 52) return false;
  if (state.mode === "planet" && type === "waterPump" && state.planet === 0 && !pointInSurfaceLake(x, y, -definition.radius * BUILD_SCALE * .35)) return false;
  if (state.mode === "planet" && type !== "waterPump" && pointInSurfaceLake(x, y, definition.radius * BUILD_SCALE + 10)) return false;
  if (state.mode === "planet" && world.some(object => object.type === "caveEntrance" && Math.hypot(object.x - x, object.y - y) < definition.radius * BUILD_SCALE + 95)) return false;
  if (state.mode === "planet" && type !== "beacon" && !claimedAt(x, y)) return false;
  if (state.mode === "baseInterior" && !undergroundAreaExcavated(x, y, definition.radius * BUILD_SCALE + 4)) return false;
  const pieces = activeStructurePieces();
  let containingRoom = null;
  if (state.mode === "baseInterior" && ["medStation", "exosuitStation"].includes(type)) {
    containingRoom = pieces.find(piece => {
      if (piece.type !== "room") return false;
      const angle = -(piece.rotation || 0) * Math.PI / 2; const dx = (x - piece.x) / BUILD_SCALE; const dy = (y - piece.y) / BUILD_SCALE;
      const localX = dx * Math.cos(angle) - dy * Math.sin(angle); const localY = dx * Math.sin(angle) + dy * Math.cos(angle);
      const interiorLimit = 32 * ROOM_SCALE - definition.radius - 7;
      return Math.abs(localX) <= interiorLimit && Math.abs(localY) <= interiorLimit;
    }) || null;
    if (!containingRoom) return false;
  }
  return !pieces.some(piece => piece !== containingRoom && Math.hypot(piece.x - x, piece.y - y) < (buildTypes[piece.type].radius + definition.radius) * BUILD_SCALE - 8);
}

function placeBuildPiece() {
  if (build.selected === "wire") { placePowerWire(); return; }
  if (build.selected === "waterPipe") { placeWaterPipe(); return; }
  const x = Math.round(build.worldX / BUILD_GRID) * BUILD_GRID; const y = Math.round(build.worldY / BUILD_GRID) * BUILD_GRID;
  const cost = activeBuildCost(); const moduleItem = constructionModules[build.selected]; const placingSelectedModule = moduleItem && selectedHotbarItem() === moduleItem;
  if (state.mode === "planet" && !claimedAt(x, y) && build.selected !== "beacon") { showToast("CLAIM THIS SITE WITH A BASE COMPUTER"); return; }
  if (state.mode === "baseInterior" && !undergroundAreaExcavated(x, y, buildTypes[build.selected].radius * BUILD_SCALE + 4)) { showToast("EXCAVATE THIS AREA BEFORE BUILDING"); return; }
  if (!buildPlacementValid(build.selected, x, y)) { showToast("INVALID BUILD POSITION"); return; }
  if (!canAffordBuild(cost)) { showToast("INSUFFICIENT BUILD MATERIALS"); return; }
  const consumesCost = placingSelectedModule || !settings.buildOverride;
  if (consumesCost) spendResources(cost);
  const piece = { id: nextBaseId++, type: build.selected, x, y, rotation: build.rotation, cost: consumesCost ? { ...cost } : {} };
  if (piece.type === "battery") piece.charge = consumesCost && Object.hasOwn(cost, "battery_module") ? Math.max(0, Math.min(200, portableBatteryCharges.pop() || 0)) : 0;
  if (piece.type === "waterTank") { piece.water = 0; piece.waterUpdatedAt = state.worldTime; }
  if (piece.type === "greenhouse") { piece.growth = 0; piece.lastSprinklerWorldTime = state.worldTime; piece.waterUpdatedAt = state.worldTime; piece.sprinklerPulse = 0; }
  activeStructurePieces().push(piece);
  updateUI(); updateBuildToolbar(); if (state.mode === "baseInterior") updateBaseSystemsPanel(); saveGame(); showToast(`${buildTypes[build.selected].name.toUpperCase()} CONSTRUCTED`);
  if (placingSelectedModule && materialAmount(moduleItem) <= 0 && build.active) toggleBuildMode();
}

function dismantleBuildPiece() {
  if (build.selected === "wire") { dismantlePowerWire(); return; }
  if (build.selected === "waterPipe") { dismantleWaterPipe(); return; }
  const pieces = activeStructurePieces();
  let nearestIndex = -1; let nearestDistance = Infinity;
  pieces.forEach((piece, index) => {
    const distance = Math.hypot(piece.x - build.worldX, piece.y - build.worldY); const selectionRadius = buildTypes[piece.type].radius * BUILD_SCALE + 16;
    if (distance <= selectionRadius && distance < nearestDistance) { nearestDistance = distance; nearestIndex = index; }
  });
  if (nearestIndex < 0) { showToast("NO STRUCTURE SELECTED"); return; }
  const piece = pieces[nearestIndex];
  if (piece.starter) { showToast("ELEVATOR CHAMBER CANNOT BE REMOVED"); return; }
  if (piece.type === "beacon" && pieces.some(other => other.id !== piece.id && Math.hypot(other.x - piece.x, other.y - piece.y) <= BUILD_CLAIM_RADIUS)) { showToast("DISMANTLE NEARBY MODULES FIRST"); return; }
  const cost = piece.cost || (piece.type === "beacon" ? { ferrite: 4 } : buildTypes[piece.type].cost);
  Object.entries(cost).forEach(([resource, amount]) => changeMaterial(resource, Math.ceil(amount * .5)));
  if (piece.type === "battery" && Object.hasOwn(cost, "battery_module")) portableBatteryCharges.push(Math.max(0, Math.min(200, piece.charge || 0)));
  if (piece.type === "refinery") refundRefineryJob(piece.id);
  roofOpacity.delete(piece.id); removeWiresForPiece(piece.id); pieces.splice(nearestIndex, 1); updateUI(); updateBuildToolbar(); if (state.mode === "baseInterior") updateBaseSystemsPanel(); saveGame(); showToast("STRUCTURE DISMANTLED");
}

function baseCollisionAt(x, y) {
  const playerRadius = 9;
  if (state.mode === "planet" && pointInSurfaceLake(x, y, playerRadius + 3)) return true;
  if (state.mode === "baseInterior" && !undergroundAreaExcavated(x, y, playerRadius)) return true;
  const localPlayerRadius = playerRadius / BUILD_SCALE;
  const circleHitsRect = (px, py, left, top, right, bottom) => {
    const closestX = Math.max(left, Math.min(right, px)); const closestY = Math.max(top, Math.min(bottom, py));
    return Math.hypot(px - closestX, py - closestY) < localPlayerRadius;
  };
  return activeStructurePieces().some(piece => {
    const definition = buildTypes[piece.type];
    if (definition.solid) return Math.hypot(piece.x - x, piece.y - y) < definition.radius * BUILD_SCALE + playerRadius;
    if (!["room", "hallway", "greenhouse"].includes(piece.type)) return false;
    const angle = -(piece.rotation || 0) * Math.PI / 2; const dx = x - piece.x; const dy = y - piece.y;
    const localX = (dx * Math.cos(angle) - dy * Math.sin(angle)) / BUILD_SCALE; const localY = (dx * Math.sin(angle) + dy * Math.cos(angle)) / BUILD_SCALE;
    if (piece.type === "hallway") return circleHitsRect(localX, localY, -34, -20, 34, -14) || circleHitsRect(localX, localY, -34, 14, 34, 20);
    const roomHalf = 32 * (piece.type === "greenhouse" ? GREENHOUSE_SCALE : ROOM_SCALE); const wallInner = roomHalf - 7; const doorwayHalf = piece.type === "greenhouse" ? 28 : 20;
    return [
      [-roomHalf, -roomHalf, -doorwayHalf, -wallInner], [doorwayHalf, -roomHalf, roomHalf, -wallInner], [-roomHalf, wallInner, -doorwayHalf, roomHalf], [doorwayHalf, wallInner, roomHalf, roomHalf],
      [-roomHalf, -wallInner, -wallInner, -doorwayHalf], [-roomHalf, doorwayHalf, -wallInner, wallInner], [wallInner, -wallInner, roomHalf, -doorwayHalf], [wallInner, doorwayHalf, roomHalf, wallInner],
    ].some(rect => circleHitsRect(localX, localY, ...rect));
  });
}

const SAVE_KEY = "wayfarer.save.v1";

function readSaveGame() {
  try { return JSON.parse(localStorage.getItem(SAVE_KEY) || "null"); } catch { return null; }
}

function applySaveGame(data) {
  if (!data || data.version !== 1) return;
  const finite = value => Number.isFinite(value);
  if (data.player?.inventory) {
    for (const resource of ["ferrite", "flora", "crystal"]) if (finite(data.player.inventory[resource])) player.inventory[resource] = Math.max(0, Math.floor(data.player.inventory[resource]));
  }
  if (data.player?.items && typeof data.player.items === "object") {
    player.items = {}; for (const [item, amount] of Object.entries(data.player.items)) if (/^[a-z0-9_-]{1,40}$/i.test(item) && finite(amount) && amount > 0) player.items[item] = Math.floor(amount);
  }
  if (finite(data.player?.exposure)) player.exposure = Math.max(0, Math.min(100, data.player.exposure));
  if (data.player?.armor && typeof data.player.armor === "object") {
    for (const slot of Object.keys(equippedArmor)) {
      const item = data.player.armor[slot]; if (typeof item === "string" && itemDefinitions[item]?.armorSlot === slot) equippedArmor[slot] = item;
    }
  }
  portableBatteryCharges.splice(0);
  if (Array.isArray(data.player?.batteryCharges)) for (const charge of data.player.batteryCharges.slice(0, player.items.battery_module || 0)) if (finite(charge)) portableBatteryCharges.push(Math.max(0, Math.min(200, charge)));
  while (portableBatteryCharges.length < (player.items.battery_module || 0)) portableBatteryCharges.push(0);
  if (Array.isArray(data.player?.hotbar)) data.player.hotbar.slice(0, 8).forEach((item, index) => { if (typeof item === "string" && hotbarItemEligible(item)) hotbar.slots[index] = item; });
  if (finite(data.player?.hotbarSelected)) hotbar.selected = Math.max(0, Math.min(7, Math.floor(data.player.hotbarSelected)));
  if (data.toolUpgrades && typeof data.toolUpgrades === "object") {
    for (const key of Object.keys(toolUpgrades)) if (finite(data.toolUpgrades[key])) toolUpgrades[key] = Math.max(0, Math.min(3, Math.floor(data.toolUpgrades[key])));
  }
  if (finite(data.player?.x) && finite(data.player?.y)) { player.x = data.player.x; player.y = data.player.y; }
  if (finite(data.player?.tool)) player.tool = Math.max(0, Math.min(toolEnergyCapacity(), data.player.tool));
  if (finite(data.player?.life)) player.life = Math.max(1, Math.min(100, data.player.life));
  if (finite(data.worldTime)) state.worldTime = Math.max(0, data.worldTime);
  if (finite(data.weatherTime)) state.weatherTime = Math.max(0, data.weatherTime);
  if (finite(data.cameraZoom)) camera.zoom = camera.targetZoom = Math.max(MIN_CAMERA_ZOOM, Math.min(MAX_CAMERA_ZOOM, data.cameraZoom));
  if (data.ship) {
    for (const key of ["x", "y", "angle", "hull", "wings"]) if (finite(data.ship[key])) ship[key] = data.ship[key];
    ship.repaired = Boolean(data.ship.repaired); ship.engine = data.ship.engine ? 1 : 0; ship.scanner = data.ship.scanner ? 1 : 0;
  }
  if (Array.isArray(data.bases)) {
    data.bases.slice(0, planets.length).forEach((pieces, planetIndex) => {
      if (!Array.isArray(pieces)) return;
      const validPieces = pieces.filter(piece => piece?.type !== "wire" && buildTypes[piece?.type] && finite(piece.x) && finite(piece.y));
      const scaleFactor = BUILD_SCALE / (finite(data.buildScale) ? data.buildScale : 1);
      const beacons = validPieces.filter(piece => piece.type === "beacon");
      basePieces[planetIndex] = validPieces.map(piece => {
        const anchor = piece.type === "beacon" ? piece : [...beacons].sort((a, b) => Math.hypot(piece.x - a.x, piece.y - a.y) - Math.hypot(piece.x - b.x, piece.y - b.y))[0];
        const x = anchor ? anchor.x + (piece.x - anchor.x) * scaleFactor : piece.x;
        const y = anchor ? anchor.y + (piece.y - anchor.y) * scaleFactor : piece.y;
        return {
          id: finite(piece.id) ? piece.id : nextBaseId++, type: piece.type, x, y, rotation: finite(piece.rotation) ? piece.rotation % 4 : 0,
          cost: piece.cost && typeof piece.cost === "object" ? piece.cost : undefined,
          charge: finite(piece.charge) ? Math.max(0, Math.min(200, piece.charge)) : 0,
          water: finite(piece.water) ? Math.max(0, Math.min(100, piece.water)) : 0,
          waterUpdatedAt: finite(piece.waterUpdatedAt) ? piece.waterUpdatedAt : state.worldTime,
        };
      });
    });
  }
  if (Array.isArray(data.undergroundBases)) {
    data.undergroundBases.slice(0, planets.length).forEach((pieces, planetIndex) => {
      if (!Array.isArray(pieces)) return;
      undergroundPieces[planetIndex] = pieces
        .filter(piece => piece?.type !== "wire" && buildTypes[piece?.type] && finite(piece.x) && finite(piece.y))
        .map(piece => ({
          id: finite(piece.id) ? piece.id : nextBaseId++, type: piece.type, x: piece.x, y: piece.y,
          rotation: finite(piece.rotation) ? piece.rotation % 4 : 0,
          cost: piece.cost && typeof piece.cost === "object" ? piece.cost : undefined,
          starter: Boolean(piece.starter),
          charge: finite(piece.charge) ? Math.max(0, Math.min(200, piece.charge)) : 0,
          growth: finite(piece.growth) ? Math.max(0, Math.min(1, piece.growth)) : 0,
          lastSprinklerWorldTime: finite(piece.lastSprinklerWorldTime) ? piece.lastSprinklerWorldTime : state.worldTime,
          waterUpdatedAt: finite(piece.waterUpdatedAt) ? piece.waterUpdatedAt : state.worldTime,
          sprinklerPulse: 0,
        }));
    });
  }
  if (Array.isArray(data.excavatedCells)) {
    data.excavatedCells.slice(0, planets.length).forEach((cells, planetIndex) => {
      if (!Array.isArray(cells)) return;
      excavatedCells[planetIndex] = new Set(cells.filter(key => typeof key === "string" && /^-?\d+,-?\d+$/.test(key)));
    });
  }
  if (Array.isArray(data.caveLayoutsGenerated)) {
    data.caveLayoutsGenerated.slice(0, planets.length).forEach((generated, planetIndex) => { caveLayoutsGenerated[planetIndex] = Boolean(generated); });
  }
  if (Array.isArray(data.minedUndergroundDeposits)) {
    data.minedUndergroundDeposits.slice(0, planets.length).forEach((cells, planetIndex) => {
      if (!Array.isArray(cells)) return;
      minedUndergroundDeposits[planetIndex] = new Set(cells.filter(key => typeof key === "string" && /^-?\d+,-?\d+$/.test(key)));
    });
  }
  minedNaturalCaveDeposits.clear();
  if (Array.isArray(data.minedNaturalCaveDeposits)) {
    for (const key of data.minedNaturalCaveDeposits) if (typeof key === "string" && /^\d+:\d+:-?\d+,-?\d+$/.test(key)) minedNaturalCaveDeposits.add(key);
  }
  openedMineshaftChests.clear();
  if (Array.isArray(data.openedMineshaftChests)) for (const key of data.openedMineshaftChests) if (typeof key === "string" && /^\d+:\d+:\d+$/.test(key)) openedMineshaftChests.add(key);
  const loadWires = (savedWires, targetWires, pieceSets) => {
    if (!Array.isArray(savedWires)) return;
    savedWires.slice(0, planets.length).forEach((wires, planetIndex) => {
      if (!Array.isArray(wires)) return;
      const ids = new Set(pieceSets[planetIndex].map(piece => piece.id));
      targetWires[planetIndex] = wires
        .filter(wire => finite(wire?.a) && finite(wire?.b) && wire.a !== wire.b && ids.has(wire.a) && ids.has(wire.b))
        .map(wire => ({ id: finite(wire.id) ? wire.id : nextWireId++, a: wire.a, b: wire.b, cost: wire.cost && typeof wire.cost === "object" ? wire.cost : undefined }));
    });
  };
  loadWires(data.surfaceWires, surfaceWires, basePieces);
  loadWires(data.undergroundWires, undergroundWires, undergroundPieces);
  loadWires(data.surfaceWaterPipes, surfaceWaterPipes, basePieces);
  loadWires(data.undergroundWaterPipes, undergroundWaterPipes, undergroundPieces);
  if (Array.isArray(data.baseStorage)) {
    data.baseStorage.slice(0, planets.length).forEach((storage, planetIndex) => {
      if (!storage || typeof storage !== "object") return;
      for (const resource of ["ferrite", "flora", "crystal"]) if (finite(storage[resource])) baseStorage[planetIndex][resource] = Math.max(0, Math.floor(storage[resource]));
    });
  }
  if (Array.isArray(data.baseProduction)) data.baseProduction.slice(0, planets.length).forEach((value, index) => { if (finite(value)) baseProduction[index] = Math.max(0, value); });
  refineryJobs.clear();
  if (Array.isArray(data.refineryJobs)) for (const entry of data.refineryJobs) {
    if (!Array.isArray(entry) || !finite(entry[0]) || !entry[1] || typeof entry[1] !== "object") continue;
    const job = entry[1]; const inputValid = job.input === null || typeof job.input === "string" && refineryRecipes[job.input];
    const outputValid = job.output === null || typeof job.output === "string" && itemDefinitions[job.output];
    if (inputValid && outputValid) refineryJobs.set(entry[0], { input: job.input || null, inputAmount: Math.max(0, Math.floor(job.inputAmount || 0)), output: job.output || null, outputAmount: Math.max(0, Math.floor(job.outputAmount || 0)), progress: Math.max(0, Math.min(1.8, Number(job.progress) || 0)) });
  }
  nextBaseId = Math.max(1, ...basePieces.flat().concat(undergroundPieces.flat()).map(piece => piece.id + 1));
  nextWireId = Math.max(1, ...surfaceWires.flat().concat(undergroundWires.flat(), surfaceWaterPipes.flat(), undergroundWaterPipes.flat()).map(wire => wire.id + 1));
  discoveries.planets.clear(); (data.discoveries?.planets || [state.planet]).forEach(index => { if (Number.isInteger(index) && planets[index]) discoveries.planets.add(index); });
  discoveries.planets.add(state.planet);
  for (const category of ["flora", "minerals", "creatures"]) {
    discoveries[category].clear();
    if (Array.isArray(data.discoveries?.[category])) for (const entry of data.discoveries[category]) if (Array.isArray(entry) && entry.length === 2) discoveries[category].set(entry[0], entry[1]);
  }
  if (data.campaign && typeof data.campaign === "object") {
    campaign.stage = finite(data.campaign.stage) ? Math.max(0, Math.min(3, Math.floor(data.campaign.stage))) : 0;
    campaign.rewardClaimed = Boolean(data.campaign.rewardClaimed);
    campaign.blueprintUnlocked = Boolean(data.campaign.blueprintUnlocked || campaign.rewardClaimed);
  } else {
    const ownsVerditeBlueprintGear = materialAmount("verdite_biohelmet") > 0 || equippedArmor.helmet === "verdite_biohelmet";
    const establishedShelter = basePieces[0].some(piece => piece.type === "habitat") && surfaceWires[0].length > 0 && undergroundPieces[0].some(piece => piece.type === "room");
    campaign.stage = ownsVerditeBlueprintGear || materialAmount("thalassa_sample") > 0 ? 3 : establishedShelter ? 2 : ship.repaired ? 1 : 0;
    campaign.rewardClaimed = ownsVerditeBlueprintGear; campaign.blueprintUnlocked = ownsVerditeBlueprintGear;
  }
  if (campaign.stage > 0) ship.repaired = true;
  stationVisited = Boolean(data.stationVisited);
  if (state.planet === 0) {
    surfaceLakes = surfaceLakes.filter(lake => (
      basePieces[0].some(piece => piece.type === "waterPump" && ((piece.x - lake.x) / lake.rx) ** 2 + ((piece.y - lake.y) / lake.ry) ** 2 < 1) ||
      ((player.x - lake.x) / (lake.rx + 40)) ** 2 + ((player.y - lake.y) / (lake.ry + 40)) ** 2 >= 1 &&
      ((ship.x - lake.x) / (lake.rx + 55)) ** 2 + ((ship.y - lake.y) / (lake.ry + 55)) ** 2 >= 1 &&
      basePieces[0].every(piece => {
        if (piece.type === "waterPump") return true;
        const padding = buildTypes[piece.type].radius * BUILD_SCALE + 10;
        return ((piece.x - lake.x) / (lake.rx + padding)) ** 2 + ((piece.y - lake.y) / (lake.ry + padding)) ** 2 >= 1;
      })
    ));
  }
  camera.x = player.x; camera.y = player.y;
}

function saveGame(options = {}) {
  const surfaceMode = ["planet", "planetFlight", "interior"].includes(state.mode);
  const stationMode = ["stationDocking", "stationInterior"].includes(state.mode);
  const inUnderground = state.mode === "baseInterior"; const inNaturalCave = ["caveInterior", "mineshaft"].includes(state.mode);
  const saveSurfaceShip = surfaceMode || stationMode || inUnderground || inNaturalCave || options.preserveSurfaceShip;
  const data = {
    version: 1,
    buildScale: BUILD_SCALE,
    roomScale: ROOM_SCALE,
    worldTime: state.worldTime,
    weatherTime: state.weatherTime,
    cameraZoom: camera.targetZoom,
    planet: state.planet,
    player: { x: inUnderground ? underground.surfaceX : inNaturalCave ? naturalCave.surfaceX : surfaceMode || stationMode ? player.x : 160, y: inUnderground ? underground.surfaceY : inNaturalCave ? naturalCave.surfaceY : surfaceMode || stationMode ? player.y : 90, tool: player.tool, life: player.life, exposure: player.exposure, inventory: { ...player.inventory }, items: { ...player.items }, armor: { ...equippedArmor }, batteryCharges: [...portableBatteryCharges], hotbar: [...hotbar.slots], hotbarSelected: hotbar.selected },
    ship: { x: saveSurfaceShip ? ship.x : 90, y: saveSurfaceShip ? ship.y : 60, angle: ship.angle, repaired: ship.repaired, engine: ship.engine, scanner: ship.scanner, hull: ship.hull, wings: ship.wings },
    bases: basePieces,
    undergroundBases: undergroundPieces,
    excavatedCells: excavatedCells.map(cells => [...cells]),
    caveLayoutsGenerated: [...caveLayoutsGenerated],
    minedUndergroundDeposits: minedUndergroundDeposits.map(cells => [...cells]),
    minedNaturalCaveDeposits: [...minedNaturalCaveDeposits],
    openedMineshaftChests: [...openedMineshaftChests],
    toolUpgrades: { ...toolUpgrades },
    surfaceWires,
    undergroundWires,
    surfaceWaterPipes,
    undergroundWaterPipes,
    baseStorage,
    baseProduction,
    refineryJobs: [...refineryJobs.entries()],
    campaign: { ...campaign },
    stationVisited,
    discoveries: {
      planets: [...discoveries.planets], creatures: [...discoveries.creatures.entries()], flora: [...discoveries.flora.entries()], minerals: [...discoveries.minerals.entries()],
    },
  };
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); } catch {}
}

function drawFloraSprite(o, s) {
  const atlas = state.planet === 1 ? vesperAtlas : state.planet === 2 ? orisonAtlas : floraAtlas;
  const image = state.planet === 1 ? vesperEnvironment : state.planet === 2 ? orisonEnvironment : thalassaEnvironment;
  const sprite = atlas[o.sprite];
  if (!sprite || !image.complete || !image.naturalWidth) return false;
  const scale = (o.type === "landmark" ? o.size / 25 : o.size / 17) * (SURFACE_OBJECT_SCALE[o.type] || SURFACE_OBJECT_SCALE.flora);
  const drawH = sprite.size * scale;
  const drawW = drawH * sprite.w / sprite.h;
  const drift = o.sprite === "reed" ? Math.sin(elapsed * 1.45 + o.phase) * 2.5 : 0;
  ctx.save();
  ctx.translate(s.x + drift, s.y);
  ctx.rotate(o.sprite === "tree" ? o.phase * .12 : Math.sin(o.phase) * .08);
  if (o.type === "landmark") {
    ctx.fillStyle = "rgba(2,15,13,.28)";
    ctx.beginPath(); ctx.ellipse(8, drawH * .31, drawW * .38, drawH * .12, 0, 0, TAU); ctx.fill();
    if (Math.sin(o.phase) < 0) ctx.scale(-1, 1);
  }
  if (o.sprite === "tree") {
    if (!treePixelSprite) {
      treePixelSprite = document.createElement("canvas");
      treePixelSprite.width = 76;
      treePixelSprite.height = Math.round(treePixelSprite.width * sprite.h / sprite.w);
      const treeCtx = treePixelSprite.getContext("2d");
      treeCtx.imageSmoothingEnabled = false;
      treeCtx.drawImage(image, sprite.x, sprite.y, sprite.w, sprite.h, 0, 0, treePixelSprite.width, treePixelSprite.height);
    }
    ctx.drawImage(treePixelSprite, Math.round(-drawW / 2), Math.round(-drawH / 2), Math.round(drawW), Math.round(drawH));
  } else {
    ctx.drawImage(image, sprite.x, sprite.y, sprite.w, sprite.h, -drawW / 2, -drawH / 2, drawW, drawH);
  }
  ctx.restore();
  return true;
}

function drawMineralSprite(o, s) {
  const crystal = o.mineral === "crystal" || o.mineral === "vesperCrystal" || o.mineral === "orisonCrystal";
  const vesper = o.mineral === "vesperRock" || o.mineral === "vesperCrystal";
  const orison = o.mineral === "orisonRock" || o.mineral === "orisonCrystal";
  const image = vesper ? vesperEnvironment : orison ? orisonEnvironment : thalassaEnvironment;
  const atlas = vesper
    ? (crystal ? vesperCrystalAtlas : vesperRockAtlas)
    : orison ? (crystal ? orisonCrystalAtlas : orisonRockAtlas) : (crystal ? crystalAtlas : rockAtlas);
  const sprite = atlas[o.variant % atlas.length];
  if (!sprite || !image.complete || !image.naturalWidth) return false;
  const drawH = o.size * (crystal ? 4.4 * SURFACE_OBJECT_SCALE.crystal : 3.7 * SURFACE_OBJECT_SCALE.rock);
  const drawW = drawH * sprite.w / sprite.h;
  ctx.save();
  ctx.translate(s.x, s.y);
  ctx.rotate((o.variant - 2.5) * .035);
  if (!crystal && o.variant % 2) ctx.scale(-1, 1);
  ctx.fillStyle = "rgba(0,0,0,.24)";
  ctx.beginPath(); ctx.ellipse(5, drawH * .25, drawW * .34, drawH * .17, 0, 0, TAU); ctx.fill();
  if (o.item) ctx.filter = o.item === "copper_ore" ? "sepia(.7) saturate(1.7) hue-rotate(330deg)" : o.item === "silica" ? "grayscale(.7) brightness(1.35)" : state.planet === 0 ? "hue-rotate(55deg) saturate(1.5)" : state.planet === 1 ? "sepia(.5) saturate(1.8)" : "hue-rotate(145deg) saturate(1.5) brightness(1.15)";
  ctx.drawImage(image, sprite.x, sprite.y, sprite.w, sprite.h, -drawW / 2, -drawH / 2, drawW, drawH);
  ctx.restore();
  return true;
}

function drawThalassaTerrainFeatures() {
  ctx.save();
  for (const region of terrainRegions) {
    if (!worldBoundsVisible(region.minX, region.minY, region.maxX, region.maxY)) continue;
    const first = screenPoint(region.points[0].x, region.points[0].y);
    ctx.beginPath(); ctx.moveTo(first.x, first.y);
    for (let i = 1; i < region.points.length; i++) {
      const point = screenPoint(region.points[i].x, region.points[i].y);
      ctx.lineTo(point.x, point.y);
    }
    ctx.closePath();
    ctx.fillStyle = region.shade > .52 ? "rgba(4,30,27,.13)" : "rgba(121,154,78,.075)";
    ctx.fill();
  }

  const clearing = [
    { x: -70, y: 8 }, { x: 5, y: -80 }, { x: 132, y: -95 }, { x: 245, y: -25 },
    { x: 272, y: 105 }, { x: 190, y: 190 }, { x: 42, y: 185 }, { x: -92, y: 105 },
  ];
  if (worldBoundsVisible(-92, -95, 272, 190)) {
    ctx.beginPath();
    clearing.forEach((point, index) => {
      const screen = screenPoint(point.x, point.y);
      if (!index) ctx.moveTo(screen.x, screen.y); else ctx.lineTo(screen.x, screen.y);
    });
    ctx.closePath(); ctx.fillStyle = "rgba(119,139,76,.105)"; ctx.fill();
  }

  if (worldBoundsVisible(124, 75, 486, 321)) {
    const trailStart = screenPoint(145, 96);
    const trailBend = screenPoint(305, 150);
    const trailEnd = screenPoint(465, 300);
    ctx.strokeStyle = "rgba(147,142,80,.105)"; ctx.lineWidth = 42; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(trailStart.x, trailStart.y); ctx.quadraticCurveTo(trailBend.x, trailBend.y, trailEnd.x, trailEnd.y); ctx.stroke();
    ctx.strokeStyle = "rgba(205,190,111,.09)"; ctx.lineWidth = 3; ctx.setLineDash([8, 15]);
    ctx.beginPath(); ctx.moveTo(trailStart.x, trailStart.y); ctx.quadraticCurveTo(trailBend.x, trailBend.y, trailEnd.x, trailEnd.y); ctx.stroke();
  }
  ctx.restore();
}

function traceSurfaceLake(lake, scale = 1) {
  ctx.beginPath();
  lake.points.forEach((point, index) => {
    const s = screenPoint(lake.x + (point.x - lake.x) * scale, lake.y + (point.y - lake.y) * scale);
    if (!index) ctx.moveTo(s.x, s.y); else ctx.lineTo(s.x, s.y);
  });
  ctx.closePath();
}

function drawThalassaLakes() {
  for (const lake of surfaceLakes) {
    if (!worldBoundsVisible(lake.x - lake.rx * 1.08, lake.y - lake.ry * 1.08, lake.x + lake.rx * 1.08, lake.y + lake.ry * 1.08)) continue;
    const center = screenPoint(lake.x, lake.y);

    if (thalassaLakeImage.complete && thalassaLakeImage.naturalWidth) {
      ctx.save();
      ctx.translate(center.x, center.y);
      ctx.rotate(Math.sin(lake.phase) * .035);
      ctx.scale(Math.cos(lake.phase) < 0 ? -1 : 1, 1);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(thalassaLakeImage, -lake.rx * 1.08, -lake.ry * 1.08, lake.rx * 2.16, lake.ry * 2.16);
      ctx.restore();
      continue;
    }

    ctx.save();
    traceSurfaceLake(lake, 1.07); ctx.fillStyle = "rgba(9,35,33,.72)"; ctx.fill();
    traceSurfaceLake(lake);
    const water = ctx.createLinearGradient(center.x, center.y - lake.ry, center.x, center.y + lake.ry);
    water.addColorStop(0, "#163f4a"); water.addColorStop(.48, "#0d3541"); water.addColorStop(1, "#082832");
    ctx.fillStyle = water; ctx.fill(); ctx.clip();
    ctx.globalCompositeOperation = "screen"; ctx.strokeStyle = "rgba(139,222,215,.16)"; ctx.lineWidth = 2;
    for (let wave = -2; wave <= 2; wave++) {
      const y = center.y + wave * lake.ry * .27; const drift = Math.sin(elapsed * .65 + lake.phase + wave) * 13;
      ctx.beginPath(); ctx.moveTo(center.x - lake.rx * .72 + drift, y);
      ctx.bezierCurveTo(center.x - lake.rx * .3, y - 5, center.x + lake.rx * .22, y + 5, center.x + lake.rx * .72 + drift, y); ctx.stroke();
    }
    const reflection = ctx.createLinearGradient(center.x - lake.rx, center.y - lake.ry, center.x + lake.rx, center.y + lake.ry);
    reflection.addColorStop(0, "rgba(181,235,220,.12)"); reflection.addColorStop(.42, "rgba(112,194,190,.03)"); reflection.addColorStop(.65, "rgba(0,0,0,0)");
    ctx.fillStyle = reflection; ctx.fillRect(center.x - lake.rx, center.y - lake.ry, lake.rx * 2, lake.ry * 2);
    ctx.restore();
    ctx.save(); traceSurfaceLake(lake); ctx.strokeStyle = "rgba(109,169,137,.42)"; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
  }
}

function drawGround() {
  const p = planets[state.planet];
  const view = surfaceViewBounds(2); const viewWidth = width / camera.zoom; const viewHeight = height / camera.zoom;
  ctx.fillStyle = p.ground;
  ctx.fillRect(view.left, view.top, view.right - view.left, view.bottom - view.top);
  if (state.planet === 0 && thalassaGrass.complete && thalassaGrass.naturalWidth) {
    if (!thalassaGrassPattern) {
      thalassaGrassPattern = ctx.createPattern(thalassaGrass, "repeat");
      thalassaGrassPattern?.setTransform(new DOMMatrix().scale(grassTextureScale));
    }
    ctx.save();
    ctx.translate(width / 2 - camera.x, height / 2 - camera.y);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.fillStyle = thalassaGrassPattern;
    ctx.globalAlpha = .72;
    ctx.fillRect(camera.x - viewWidth / 2, camera.y - viewHeight / 2, viewWidth, viewHeight);
    ctx.restore();
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = "rgba(20,61,47,.12)"; ctx.fillRect(view.left, view.top, view.right - view.left, view.bottom - view.top);
    drawThalassaTerrainFeatures();
    drawThalassaLakes();
  } else if (state.planet === 1 && vesperGround.complete && vesperGround.naturalWidth) {
    if (!vesperGroundPattern) {
      vesperGroundPattern = ctx.createPattern(vesperGround, "repeat");
      vesperGroundPattern?.setTransform(new DOMMatrix().scale(vesperTextureScale));
    }
    ctx.save();
    ctx.translate(width / 2 - camera.x, height / 2 - camera.y);
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = "high";
    ctx.fillStyle = vesperGroundPattern; ctx.globalAlpha = .76;
    ctx.fillRect(camera.x - viewWidth / 2, camera.y - viewHeight / 2, viewWidth, viewHeight);
    ctx.restore();
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = "rgba(55,27,24,.2)"; ctx.fillRect(view.left, view.top, view.right - view.left, view.bottom - view.top);
  } else if (state.planet === 2 && orisonGround.complete && orisonGround.naturalWidth) {
    if (!orisonGroundPattern) {
      orisonGroundPattern = ctx.createPattern(orisonGround, "repeat");
      orisonGroundPattern?.setTransform(new DOMMatrix().scale(orisonTextureScale));
    }
    ctx.save();
    ctx.translate(width / 2 - camera.x, height / 2 - camera.y);
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = "high";
    ctx.fillStyle = orisonGroundPattern; ctx.globalAlpha = .72;
    ctx.fillRect(camera.x - viewWidth / 2, camera.y - viewHeight / 2, viewWidth, viewHeight);
    ctx.restore();
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = "rgba(44,75,82,.18)"; ctx.fillRect(view.left, view.top, view.right - view.left, view.bottom - view.top);
  }
  if (state.planet === 0 || state.planet === 1 || state.planet === 2) return;
  const grid = 90;
  const startX = Math.floor((camera.x - viewWidth / 2) / grid) * grid;
  const startY = Math.floor((camera.y - viewHeight / 2) / grid) * grid;
  for (let x = startX; x < camera.x + viewWidth / 2 + grid; x += grid) {
    for (let y = startY; y < camera.y + viewHeight / 2 + grid; y += grid) {
      const n = noise(x, y, p.seed);
      ctx.globalAlpha = (state.planet === 0 ? .045 : .13) + Math.abs(n) * (state.planet === 0 ? .04 : .12);
      ctx.fillStyle = n > 0 ? p.accent : p.ground2;
      const s = screenPoint(x, y);
      ctx.beginPath(); ctx.arc(s.x + Math.sin(y) * 20, s.y, 45 + n * 16, 0, TAU); ctx.fill();
      if (Math.abs(n) > .34) { ctx.globalAlpha = .12; ctx.strokeStyle = n > 0 ? "#d8f0d8" : "#081817"; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(s.x + Math.sin(y) * 20, s.y, 32 + n * 12, .2, Math.PI * 1.45); ctx.stroke(); }
    }
  }
  ctx.globalAlpha = 1;
}

function drawObject(o) {
  if (!o.alive) return;
  if (!worldPointVisible(o.x, o.y, surfaceDrawableRadius(o))) return;
  const s = screenPoint(o.x, o.y);
  const p = planets[state.planet];
  if (o.type === "caveEntrance") {
    const entranceImage = caveEntranceImages[state.planet];
    if (entranceImage.complete && entranceImage.naturalWidth) {
      ctx.save(); ctx.translate(s.x, s.y); ctx.fillStyle = "rgba(0,0,0,.28)"; ctx.beginPath(); ctx.ellipse(6, 24, 57, 25, 0, 0, TAU); ctx.fill();
      ctx.drawImage(entranceImage, -70, -70, 140, 140); ctx.restore(); return;
    }
    const pulse = .5 + Math.sin(elapsed * 1.7 + o.phase) * .08;
    ctx.save(); ctx.translate(s.x, s.y); ctx.rotate(Math.sin(o.phase) * .12);
    ctx.fillStyle = "rgba(0,0,0,.3)"; ctx.beginPath(); ctx.ellipse(7, 12, 54, 31, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = p.ground2; ctx.beginPath();
    for (let vertex = 0; vertex < 14; vertex++) { const angle = vertex / 14 * TAU; const radius = 43 + Math.sin(o.phase * 3 + vertex * 2.4) * 7; const x = Math.cos(angle) * radius; const y = Math.sin(angle) * radius * .62; if (!vertex) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
    ctx.closePath(); ctx.fill();
    const depth = ctx.createRadialGradient(0, 3, 3, 0, 3, 38); depth.addColorStop(0, "#000203"); depth.addColorStop(.62, "#03090a"); depth.addColorStop(1, p.ground2);
    ctx.fillStyle = depth; ctx.beginPath(); ctx.ellipse(0, 3, 36, 22, 0, 0, TAU); ctx.fill();
    ctx.strokeStyle = `rgba(98,220,237,${pulse})`; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.ellipse(0, 3, 29, 16, 0, 0, TAU); ctx.stroke();
    ctx.strokeStyle = "rgba(192,207,199,.48)"; ctx.lineWidth = 3;
    for (let rung = -2; rung <= 2; rung++) { ctx.beginPath(); ctx.moveTo(-10, rung * 6 + 1); ctx.lineTo(10, rung * 6 + 1); ctx.stroke(); }
    ctx.beginPath(); ctx.moveTo(-11, -16); ctx.lineTo(-11, 17); ctx.moveTo(11, -16); ctx.lineTo(11, 17); ctx.stroke();
    ctx.restore(); return;
  }
  if (o.sprite && drawFloraSprite(o, s)) return;
  if (o.mineral && drawMineralSprite(o, s)) return;
  if (["grass", "blossom", "pebble", "crack", "vent", "frost", "ice"].includes(o.type)) {
    ctx.save(); ctx.translate(s.x, s.y);
    if (o.type === "grass") {
      ctx.strokeStyle = p.accent; ctx.globalAlpha = .58; ctx.lineWidth = 1.4;
      for (let i = -1; i <= 1; i++) { const sway = Math.sin(elapsed * 1.8 + o.phase + i) * 2; ctx.beginPath(); ctx.moveTo(i * 3, 3); ctx.quadraticCurveTo(i * 3 + sway, -o.size * .5, i * 3 + sway, -o.size); ctx.stroke(); }
    } else if (o.type === "blossom") {
      ctx.fillStyle = "#f4d47a"; ctx.globalAlpha = .8; for (let i = 0; i < 4; i++) { const a = o.phase + i * TAU / 4; ctx.beginPath(); ctx.arc(Math.cos(a) * 3, Math.sin(a) * 3, 2, 0, TAU); ctx.fill(); }
    } else if (o.type === "crack") {
      ctx.strokeStyle = "rgba(42,20,22,.5)"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(-o.size, -2); ctx.lineTo(-2, 1); ctx.lineTo(2, -o.size); ctx.moveTo(-2, 1); ctx.lineTo(o.size, 4); ctx.stroke();
    } else if (o.type === "vent") {
      ctx.fillStyle = "#38292a"; ctx.beginPath(); ctx.ellipse(0, 2, o.size, o.size * .45, 0, 0, TAU); ctx.fill(); ctx.fillStyle = `rgba(255,188,92,${.18 + Math.sin(elapsed * 2 + o.phase) * .08})`; ctx.beginPath(); ctx.arc(0, -7 - Math.sin(elapsed + o.phase) * 3, o.size * .55, 0, TAU); ctx.fill();
    } else if (o.type === "frost") {
      ctx.strokeStyle = "rgba(218,250,250,.4)"; ctx.lineWidth = 1; for (let i = 0; i < 3; i++) { const a = o.phase + i * TAU / 3; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a) * o.size, Math.sin(a) * o.size); ctx.stroke(); }
    } else if (o.type === "ice") {
      ctx.fillStyle = "rgba(196,242,245,.45)"; ctx.beginPath(); ctx.moveTo(-o.size, 3); ctx.lineTo(-2, -o.size); ctx.lineTo(o.size, 1); ctx.lineTo(2, o.size * .6); ctx.closePath(); ctx.fill();
    } else {
      ctx.fillStyle = state.planet === 1 ? "#3e3030" : "rgba(25,54,53,.35)"; ctx.beginPath(); ctx.ellipse(0, 0, o.size, o.size * .55, o.phase, 0, TAU); ctx.fill();
    }
    ctx.restore(); return;
  }
  ctx.save(); ctx.translate(s.x, s.y);
  ctx.fillStyle = "rgba(0,0,0,.22)"; ctx.beginPath(); ctx.ellipse(5, 7, o.size, o.size * .45, 0, 0, TAU); ctx.fill();
  if (o.type === "flora") {
    ctx.strokeStyle = p.accent; ctx.fillStyle = p.accent; ctx.lineWidth = 3;
    for (let i = 0; i < 5; i++) { const a = i * TAU / 5 + o.phase; ctx.beginPath(); ctx.moveTo(0, 2); ctx.quadraticCurveTo(Math.cos(a) * o.size * .5, Math.sin(a) * o.size * .5, Math.cos(a) * o.size, Math.sin(a) * o.size); ctx.stroke(); ctx.beginPath(); ctx.arc(Math.cos(a) * o.size, Math.sin(a) * o.size, 3, 0, TAU); ctx.fill(); }
  } else if (o.type === "ferrite") {
    ctx.fillStyle = "#9aa6a4"; ctx.beginPath(); ctx.moveTo(-o.size, 5); ctx.lineTo(-o.size * .5, -o.size * .7); ctx.lineTo(o.size * .35, -o.size); ctx.lineTo(o.size, 2); ctx.lineTo(o.size * .5, o.size * .7); ctx.lineTo(-o.size * .6, o.size * .6); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#c5cfcd"; ctx.beginPath(); ctx.moveTo(-o.size * .5, -o.size * .7); ctx.lineTo(o.size * .35, -o.size); ctx.lineTo(0, 0); ctx.closePath(); ctx.fill();
  } else if (o.type === "crystal") {
    ctx.shadowColor = "#62dced"; ctx.shadowBlur = 12; ctx.fillStyle = "#76e5ef";
    for (let i = 0; i < 3; i++) { const dx = (i - 1) * 7; const h = o.size * (i === 1 ? 1.45 : .9); ctx.beginPath(); ctx.moveTo(dx - 4, 5); ctx.lineTo(dx, -h); ctx.lineTo(dx + 5, 5); ctx.closePath(); ctx.fill(); }
  } else {
    ctx.fillStyle = p.ground2; ctx.fillRect(-5, -o.size * 2, 10, o.size * 2); ctx.fillStyle = p.accent; ctx.globalAlpha = .65; ctx.beginPath(); ctx.arc(0, -o.size * 2, 5 + Math.sin(elapsed * 2 + o.phase), 0, TAU); ctx.fill();
  }
  ctx.restore();
}

function drawCreature(creature) {
  if (!creature.alive) return;
  const emergence = creature.emergence ?? 1;
  if (emergence <= .01) return;
  if (!worldPointVisible(creature.x, creature.y, surfaceDrawableRadius(creature))) return;
  const s = screenPoint(creature.x, creature.y);
  const motion = creature.motion || 0; const gait = creature.gait || 0; const facing = creature.facing || 1;
  const idleBreath = Math.sin(elapsed * (creature.hostile ? 2.3 : 1.65) + creature.phase);
  const step = Math.sin(gait); const bob = idleBreath * (1 - motion) * .7 + Math.abs(step) * motion * .65;
  const attackLunge = creature.attackAnim > 0 ? Math.sin((1 - creature.attackAnim) * Math.PI) : 0;
  const stretchX = 1 + attackLunge * .08; const stretchY = 1 - attackLunge * .04;
  ctx.save(); ctx.translate(s.x + facing * attackLunge * 9, s.y + bob); ctx.scale(facing * stretchX, stretchY); ctx.globalAlpha = emergence;
  if (creatureSpriteReady) {
    const cellWidth = creatureSpriteSheet.width / 4; const cellHeight = creatureSpriteSheet.height / 6;
    const attackFrame = Math.min(3, Math.floor((1 - (creature.attackAnim || 0)) * 4));
    const frame = creature.attackAnim > 0 ? attackFrame : 0;
    const drawWidth = creature.hostile ? 116 : 104; const drawHeight = creature.hostile ? 82 : 74;
    if (creature.hitAnim > 0) ctx.filter = `brightness(${1 + creature.hitAnim * .75}) saturate(${1 - creature.hitAnim * .28})`;
    ctx.drawImage(creatureSpriteSheet, frame * cellWidth, creature.species.animationRow * cellHeight, cellWidth, cellHeight, -drawWidth / 2, -drawHeight * .62, drawWidth, drawHeight);
    ctx.filter = "none";
    if (creature.hostile && (creature.alert > 0 || creature.health < creature.maxHealth)) {
      ctx.globalAlpha = emergence; ctx.fillStyle = "rgba(2,8,10,.78)"; ctx.fillRect(-22, -31, 44, 4); ctx.fillStyle = "#e75c50"; ctx.fillRect(-22, -31, 44 * creature.health / creature.maxHealth, 4);
    }
    ctx.restore(); return;
  }
  ctx.fillStyle = "rgba(0,0,0,.3)"; ctx.beginPath(); ctx.ellipse(2, 11, creature.hostile ? 22 : 19, 7, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = creature.species.color;
  ctx.beginPath();
  if (creature.hostile) {
    ctx.moveTo(-20, 5); ctx.lineTo(-9, -12); ctx.lineTo(2, -7); ctx.lineTo(15, -14); ctx.lineTo(23, 1); ctx.lineTo(11, 10); ctx.lineTo(-9, 9); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = creature.species.accent; ctx.lineWidth = 2;
    for (let i = -1; i <= 1; i += 2) { ctx.beginPath(); ctx.moveTo(i * 8, 7); ctx.lineTo(i * 13, 17); ctx.stroke(); }
  } else {
    ctx.beginPath(); ctx.ellipse(0, 0, 20, 12, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = creature.species.accent; ctx.beginPath(); ctx.ellipse(15, -5, 10, 8, -.2, 0, TAU); ctx.fill();
    ctx.strokeStyle = creature.species.color; ctx.lineWidth = 3;
    for (let i = -1; i <= 1; i += 2) { ctx.beginPath(); ctx.moveTo(i * 9, 8); ctx.lineTo(i * 11, 17); ctx.stroke(); }
  }
  ctx.fillStyle = creature.species.accent; ctx.beginPath(); ctx.arc(18, -6, creature.hostile ? 3 : 2, 0, TAU); ctx.fill();
  if (creature.hostile && (creature.alert > 0 || creature.health < creature.maxHealth)) {
    ctx.fillStyle = "rgba(2,8,10,.78)"; ctx.fillRect(-22, -25, 44, 4); ctx.fillStyle = "#e75c50"; ctx.fillRect(-22, -25, 44 * creature.health / creature.maxHealth, 4);
  }
  ctx.restore();
}

function updateCreatures(dt) {
  const lighting = localPlanetLighting();
  for (const creature of creatures) {
    if (!creature.alive) continue;
    creature.attackAnim = Math.max(0, (creature.attackAnim || 0) - dt * 3.4);
    creature.hitAnim = Math.max(0, (creature.hitAnim || 0) - dt * 5.5);
    creature.turnCooldown = Math.max(0, (creature.turnCooldown || 0) - dt);
    const active = !creature.species.nocturnal || lighting.night > .62;
    creature.emergence = Math.max(0, Math.min(1, (creature.emergence ?? (active ? 1 : 0)) + dt * (active ? 1.4 : -2)));
    if (!active || creature.emergence < .65) { creature.alert = 0; continue; }
    creature.attackCooldown = Math.max(0, creature.attackCooldown - dt);
    const playerDistance = Math.hypot(player.x - creature.x, player.y - creature.y);
    if (creature.hostile && playerDistance < 280) creature.alert = 3;
    else creature.alert = Math.max(0, creature.alert - dt);
    let targetX = creature.homeX + Math.cos(elapsed * .22 + creature.phase) * 90;
    let targetY = creature.homeY + Math.sin(elapsed * .18 + creature.phase) * 70;
    let speed = creature.hostile ? 38 : 24;
    if (creature.alert > 0) { targetX = player.x; targetY = player.y; speed = 82; }
    const angle = Math.atan2(targetY - creature.y, targetX - creature.x); creature.angle = angle;
    const horizontalIntent = Math.cos(angle);
    const desiredFacing = horizontalIntent > .5 ? 1 : horizontalIntent < -.5 ? -1 : creature.facing;
    if (desiredFacing !== creature.facing && creature.turnCooldown <= 0) { creature.facing = desiredFacing; creature.turnCooldown = .55; }
    let moved = false;
    if (playerDistance > (creature.alert > 0 ? 25 : 12)) {
      const nx = creature.x + Math.cos(angle) * speed * dt; const ny = creature.y + Math.sin(angle) * speed * dt;
      if (!pointInSurfaceLake(nx, ny, 20)) { creature.x = nx; creature.y = ny; moved = true; creature.gait = (creature.gait || 0) + dt * speed * (creature.hostile ? .17 : .13); }
    }
    creature.motion += ((moved ? 1 : 0) - (creature.motion || 0)) * Math.min(1, dt * 7);
    if (creature.hostile && playerDistance < 30 && creature.attackCooldown <= 0) {
      const reduction = Math.min(.65, armorStats().armor / 100); const damage = 12 * (1 - reduction);
      player.life = Math.max(0, player.life - damage); player.lastDamage = elapsed; creature.attackCooldown = .9; creature.attackAnim = 1; camera.shake = 5; showToast(`${creature.species.name.toUpperCase()} ATTACK · ${Math.ceil(damage)} DAMAGE`);
    }
  }
  if (elapsed - player.lastDamage > 6) player.life = Math.min(100, player.life + dt * 3);
  if (player.life <= 0) {
    player.life = 100; player.exposure = 25; player.x = ship.x + 55; player.y = ship.y + 25; player.vx = 0; player.vy = 0; showToast("EXOSUIT RESTORED AT KESTREL");
  }
  ui.life.style.width = `${player.life}%`;
}

function drawAtmosphere(dt) {
  const p = planets[state.planet]; const lighting = localPlanetLighting(); const storm = stormSnapshot(); const stormSpeed = 1 + storm.intensity * 2.8;

  ctx.save();
  ctx.globalAlpha = .018 + lighting.night * .045 + storm.intensity * .08;
  ctx.fillStyle = "#071311";
  for (let i = 0; i < 4; i++) {
    const cx = ((elapsed * (7 + i * 2) + i * width * .31) % (width + 420)) - 210;
    const cy = height * (.2 + i * .19) + Math.sin(elapsed * .1 + i) * 45;
    ctx.beginPath(); ctx.ellipse(cx, cy, 210, 70, -.2, 0, TAU); ctx.fill();
  }
  ctx.restore();

  for (const mote of state.atmosphere) {
    if (p.particle === "rain") {
      mote.x += 95 * mote.z * dt * stormSpeed; mote.y += 220 * mote.z * dt * stormSpeed;
      if (mote.y > height + 16) { mote.y = -16; mote.x = Math.random() * width; }
      if (mote.x > width + 16) mote.x = -16;
      ctx.strokeStyle = `rgba(146,238,228,${.12 + mote.z * .12 + storm.intensity * .2})`; ctx.lineWidth = mote.z; ctx.beginPath(); ctx.moveTo(mote.x, mote.y); ctx.lineTo(mote.x - (5 + storm.intensity * 14) * mote.z, mote.y - (12 + storm.intensity * 20) * mote.z); ctx.stroke();
    } else if (p.particle === "ash") {
      mote.x += (30 + 62 * mote.z) * p.wind * dt * stormSpeed; mote.y += Math.sin(elapsed + mote.phase) * (10 + storm.intensity * 48) * dt;
      if (mote.x > width + 10) { mote.x = -10; mote.y = Math.random() * height; }
      ctx.fillStyle = `rgba(241,170,92,${.15 + mote.z * .12 + storm.intensity * .22})`; ctx.fillRect(mote.x, mote.y, mote.z * (2.4 + storm.intensity * 4), mote.z * 1.2);
    } else {
      mote.x += (12 + 18 * mote.z) * p.wind * dt * stormSpeed; mote.y += (16 + 18 * mote.z) * dt * stormSpeed;
      if (mote.y > height + 8) { mote.y = -8; mote.x = Math.random() * width; }
      if (mote.x > width + 8) mote.x = -8;
      ctx.fillStyle = `rgba(231,255,255,${.2 + mote.z * .18 + storm.intensity * .2})`; ctx.beginPath(); ctx.arc(mote.x + Math.sin(elapsed + mote.phase) * (5 + storm.intensity * 16), mote.y, mote.z * (1.5 + storm.intensity), 0, TAU); ctx.fill();
    }
  }
  drawStormEffects(storm);
}

function drawStormEffects(storm = stormSnapshot()) {
  if (storm.intensity <= .01) return;
  const intensity = storm.intensity; const palette = state.planet === 0 ? "45,91,72" : state.planet === 1 ? "102,54,38" : "197,231,233";
  ctx.save();
  ctx.fillStyle = `rgba(${palette},${intensity * storm.visibility * (state.planet === 2 ? .48 : .36)})`; ctx.fillRect(0, 0, width, height);
  const streakCount = Math.floor(14 + intensity * 38); const direction = state.planet === 1 ? 1 : -1;
  ctx.lineCap = "round";
  for (let index = 0; index < streakCount; index++) {
    const x = (index * 137 + elapsed * (170 + index % 5 * 23)) % (width + 180) - 90;
    const y = (index * 79 + elapsed * (state.planet === 0 ? 310 : 105)) % (height + 120) - 60;
    const length = 18 + intensity * (34 + index % 4 * 9);
    ctx.strokeStyle = state.planet === 0 ? `rgba(167,244,229,${.1 + intensity * .24})` : state.planet === 1 ? `rgba(245,155,85,${.08 + intensity * .2})` : `rgba(238,255,255,${.12 + intensity * .25})`;
    ctx.lineWidth = 1 + index % 3 * .45; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + direction * length, y + (state.planet === 0 ? length * 1.65 : length * .22)); ctx.stroke();
  }
  if (state.planet === 0 && intensity > .42) {
    const lightning = Math.pow(Math.max(0, Math.sin(state.weatherTime * .82 + Math.sin(state.weatherTime * .19) * 2.4)), 34) * intensity;
    if (lightning > .08) {
      ctx.fillStyle = `rgba(205,255,241,${Math.min(.45, lightning * .38)})`; ctx.fillRect(0, 0, width, height);
      const boltX = width * (.28 + .44 * (.5 + Math.sin(storm.eventIndex * 17.3) * .5)); ctx.strokeStyle = `rgba(220,255,246,${Math.min(1, lightning * 1.8)})`; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(boltX, -10); let x = boltX;
      for (let y = 30; y < height * .62; y += 34) { x += Math.sin(y * 2.17 + storm.eventIndex) * 18; ctx.lineTo(x, y); } ctx.stroke();
    }
  }
  ctx.restore();
}

let cultivationProgressCache = { frame: -1, planet: -1, value: 0 };
function cultivationCycleProgress() {
  if (cultivationProgressCache.frame === frameSerial && cultivationProgressCache.planet === state.planet) return cultivationProgressCache.value;
  const rooms = undergroundPieces[state.planet].filter(candidate => candidate.type === "room").length;
  const interval = Math.max(18, 45 - rooms * 4);
  const value = Math.max(0, Math.min(1, baseProduction[state.planet] / interval));
  cultivationProgressCache = { frame: frameSerial, planet: state.planet, value }; return value;
}

function drawCultivationSprout(x, y, size, phase, powered, variant) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(Math.sin(phase) * .35);
  ctx.fillStyle = powered ? (variant % 3 === 1 ? "#38bca8" : "#64c878") : "#596b60";
  for (let leaf = 0; leaf < 5; leaf++) {
    ctx.save(); ctx.rotate(leaf * TAU / 5 + phase * .08); ctx.beginPath(); ctx.ellipse(0, -size * .72, size * .34, size, 0, 0, TAU); ctx.fill(); ctx.restore();
  }
  ctx.fillStyle = powered ? "#9fe18b" : "#718076"; ctx.beginPath(); ctx.arc(0, 0, Math.max(.7, size * .22), 0, TAU); ctx.fill();
  ctx.restore();
}

function drawPlanterGrowth(piece, powered) {
  const cycleProgress = cultivationCycleProgress();
  const positions = [[-12, -8], [0, -8], [12, -8], [-12, 7], [0, 7], [12, 7]];
  ctx.save();
  for (let index = 0; index < positions.length; index++) {
    const stage = Math.max(0, Math.min(1, (cycleProgress - index * .105) / .37));
    if (stage <= 0) continue;
    const [x, y] = positions[index];
    const phase = (piece.id || 0) * .73 + index * 1.91;
    const size = 1.2 + stage * (3.4 + Math.sin(phase) * .35);
    drawCultivationSprout(x, y, size, phase, powered, index);
  }
  ctx.restore();
}

const greenhouseFloraByPlanet = [
  ["flower", "flower2", "leaf", "reed", "fungi"],
  ["emberBloom", "glassFern", "sulfurFlower", "thorn", "lavaFungi"],
  ["iceBlossom", "frostFern", "snowflower", "frostRosette", "frostFungi"],
];
const greenhouseFloraSpriteCache = new Map();

function greenhouseFloraSprite(spriteName) {
  const cacheKey = `${state.planet}:${spriteName}`;
  if (greenhouseFloraSpriteCache.has(cacheKey)) return greenhouseFloraSpriteCache.get(cacheKey);
  const atlas = state.planet === 1 ? vesperAtlas : state.planet === 2 ? orisonAtlas : floraAtlas;
  const image = state.planet === 1 ? vesperEnvironment : state.planet === 2 ? orisonEnvironment : thalassaEnvironment;
  const sprite = atlas[spriteName];
  if (!sprite || !image.complete || !image.naturalWidth) return null;
  const cached = document.createElement("canvas"); cached.width = 64; cached.height = 64;
  const cachedContext = cached.getContext("2d"); const scale = Math.min(56 / sprite.w, 56 / sprite.h);
  const drawWidth = sprite.w * scale; const drawHeight = sprite.h * scale;
  cachedContext.imageSmoothingEnabled = true; cachedContext.imageSmoothingQuality = "high";
  cachedContext.drawImage(image, sprite.x, sprite.y, sprite.w, sprite.h, (64 - drawWidth) / 2, 60 - drawHeight, drawWidth, drawHeight);
  greenhouseFloraSpriteCache.set(cacheKey, cached); return cached;
}

function drawGreenhouseFlora(spriteName, x, y, size, phase, powered) {
  const sprite = greenhouseFloraSprite(spriteName);
  if (!sprite) { drawCultivationSprout(x, y, size * .34, phase, powered, 0); return; }
  const sway = Math.sin(elapsed * 1.15 + phase) * .035;
  ctx.save(); ctx.translate(x, y); ctx.rotate(sway); ctx.globalAlpha *= powered ? .96 : .38;
  ctx.drawImage(sprite, -size / 2, -size * .82, size, size); ctx.restore();
}

function drawGreenhouseGrowth(piece, powered) {
  const cycleProgress = piece.growth || 0;
  const positions = [[-70, -66], [-48, -42], [65, -62], [-64, 64], [64, 64]];
  const flora = greenhouseFloraByPlanet[state.planet];
  for (let index = 0; index < positions.length; index++) {
    const stage = Math.max(0, Math.min(1, (cycleProgress - index * .12) / .38));
    if (stage <= 0) continue;
    const [x, y] = positions[index]; const phase = (piece.id || 0) * .47 + index * 1.37;
    drawGreenhouseFlora(flora[index], x, y, 8 + stage * (18 + Math.sin(phase) * 1.4), phase, powered);
  }
}

function drawGreenhouseSprinklers(piece) {
  if (!(piece.sprinklerPulse > 0)) return;
  const pulse = Math.sin((3 - piece.sprinklerPulse) * Math.PI * 5) * .12 + .42;
  ctx.save(); ctx.strokeStyle = `rgba(94,190,255,${pulse})`; ctx.fillStyle = `rgba(154,224,255,${pulse + .16})`; ctx.lineWidth = 1.2;
  for (const [x, y] of [[-70,-66],[-48,-42],[65,-62],[-64,64],[64,64]]) {
    ctx.beginPath(); ctx.arc(x, y - 9, 12, Math.PI * 1.08, Math.PI * 1.92); ctx.stroke();
    for (let drop = -1; drop <= 1; drop++) {
      const fall = (3 - piece.sprinklerPulse) * 11 + drop * 4;
      ctx.beginPath(); ctx.arc(x + drop * 7, y - 12 + fall % 18, 1.1, 0, TAU); ctx.fill();
    }
  }
  ctx.restore();
}

function drawGreenhouseGrowthMeter(piece) {
  const progress = Math.max(0, Math.min(1, piece.growth || 0));
  ctx.save(); ctx.fillStyle = "rgba(5,16,19,.78)"; ctx.fillRect(-51, 112, 102, 8);
  ctx.fillStyle = progress >= 1 ? "#a8ef8d" : "#62dced"; ctx.fillRect(-49, 114, 98 * progress, 4);
  ctx.strokeStyle = "rgba(220,238,232,.42)"; ctx.lineWidth = 1;
  for (let segment = 1; segment < 4; segment++) { const x = -49 + 98 * segment / 4; ctx.beginPath(); ctx.moveTo(x, 113); ctx.lineTo(x, 119); ctx.stroke(); }
  ctx.restore();
}

function drawBasePiece(piece, alpha = 1) {
  if (!worldPointVisible(piece.x, piece.y, basePieceRadius(piece))) return;
  const s = screenPoint(piece.x, piece.y);
  ctx.save(); ctx.translate(Math.round(s.x), Math.round(s.y)); ctx.rotate((piece.rotation || 0) * Math.PI / 2); ctx.scale(BUILD_SCALE, BUILD_SCALE); ctx.globalAlpha = alpha;
  ctx.fillStyle = "rgba(0,0,0,.28)"; ctx.beginPath(); ctx.ellipse(5, 8, buildTypes[piece.type].radius, Math.max(5, buildTypes[piece.type].radius * .45), 0, 0, TAU); ctx.fill();
  if (piece.type === "floor") {
    ctx.fillStyle = "#465559"; ctx.fillRect(-15, -15, 30, 30); ctx.strokeStyle = "#859597"; ctx.lineWidth = 2; ctx.strokeRect(-15, -15, 30, 30);
    ctx.strokeStyle = "#253439"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(-11, 0); ctx.lineTo(11, 0); ctx.moveTo(0, -11); ctx.lineTo(0, 11); ctx.stroke();
  } else if (piece.type === "wall") {
    ctx.fillStyle = "#172328"; ctx.fillRect(-17, -7, 34, 14); ctx.fillStyle = "#e2e7e2"; ctx.fillRect(-15, -5, 30, 7); ctx.fillStyle = "#b83d45"; ctx.fillRect(-4, -5, 8, 7); ctx.fillStyle = "#62dced"; ctx.fillRect(-13, 4, 6, 2);
  } else if (piece.type === "beacon") {
    if (baseComputerImage.complete && baseComputerImage.naturalWidth) ctx.drawImage(baseComputerImage, -25, -25, 50, 50);
    else {
      ctx.fillStyle = "#18262b"; ctx.beginPath(); ctx.arc(0, 2, 15, 0, TAU); ctx.fill(); ctx.strokeStyle = "#dce5e1"; ctx.lineWidth = 3; ctx.stroke();
      ctx.fillStyle = "#b83d45"; ctx.fillRect(-5, -15, 10, 20); ctx.fillStyle = "#62dced"; ctx.shadowColor = "#62dced"; ctx.shadowBlur = 10; ctx.beginPath(); ctx.arc(0, -15, 5 + Math.sin(elapsed * 4) * .6, 0, TAU); ctx.fill();
    }
  } else if (piece.type === "habitat") {
    if (undergroundEntranceImage.complete && undergroundEntranceImage.naturalWidth) ctx.drawImage(undergroundEntranceImage, -38, -38, 76, 76);
    else {
      ctx.fillStyle = "#19262b"; ctx.beginPath(); ctx.arc(0, 0, 35, 0, TAU); ctx.fill(); ctx.strokeStyle = "#e1e6e1"; ctx.lineWidth = 5; ctx.stroke();
      ctx.fillStyle = "#a93842"; ctx.fillRect(-22, -4, 44, 8); ctx.fillStyle = "#153c47"; ctx.beginPath(); ctx.arc(0, 0, 15, 0, TAU); ctx.fill(); ctx.strokeStyle = "#62dced"; ctx.lineWidth = 2; ctx.stroke();
    }
  } else if (piece.type === "storage") {
    if (storageImage.complete && storageImage.naturalWidth) {
      ctx.save(); if (state.mode === "baseInterior" && piece.id !== undefined && !basePowerNetwork().poweredIds.has(piece.id)) { ctx.filter = "grayscale(.8) brightness(.55)"; ctx.globalAlpha *= .72; } ctx.drawImage(storageImage, -27, -20, 54, 40); ctx.restore();
    }
    else {
      ctx.fillStyle = "#e0e4df"; ctx.fillRect(-15, -12, 30, 24); ctx.fillStyle = "#a83740"; ctx.fillRect(-15, -3, 30, 6); ctx.strokeStyle = "#273439"; ctx.lineWidth = 3; ctx.strokeRect(-15, -12, 30, 24); ctx.fillStyle = "#62dced"; ctx.fillRect(8, 5, 4, 3);
    }
  } else if (piece.type === "battery") {
    const charge = Math.max(0, Math.min(BATTERY_CAPACITY, piece.charge || 0)); const fill = charge / BATTERY_CAPACITY;
    if (batteryImage.complete && batteryImage.naturalWidth) {
      ctx.save(); if (charge <= .05) { ctx.filter = "grayscale(.72) brightness(.7)"; ctx.globalAlpha *= .86; } ctx.drawImage(batteryImage, -32, -22, 64, 44); ctx.restore();
      ctx.fillStyle = "rgba(3,10,13,.9)"; ctx.fillRect(-18, 15, 36, 4); ctx.fillStyle = charge > .05 ? "#62dced" : "#59676b"; ctx.fillRect(-17, 16, 34 * fill, 2);
    } else {
      ctx.fillStyle = "#18272c"; ctx.fillRect(-24, -19, 48, 38); ctx.strokeStyle = "#dce5e1"; ctx.lineWidth = 3; ctx.strokeRect(-24, -19, 48, 38);
      ctx.fillStyle = "#a93842"; ctx.fillRect(-24, -15, 6, 30); ctx.fillRect(18, -15, 6, 30);
      ctx.fillStyle = "#24383e"; ctx.fillRect(-15, -13, 30, 26);
      for (let cell = 0; cell < 3; cell++) { const cellFill = Math.max(0, Math.min(1, fill * 3 - cell)); ctx.fillStyle = "#10252d"; ctx.fillRect(-12 + cell * 9, -9, 7, 18); ctx.fillStyle = cellFill > 0 ? "#55c8ed" : "#3f5155"; ctx.fillRect(-11 + cell * 9, 8 - 16 * cellFill, 5, 16 * cellFill); }
      ctx.fillStyle = charge > .05 ? "#bff8ff" : "#657477"; ctx.fillRect(-6, -17, 12, 3);
    }
  } else if (piece.type === "generator") {
    if (generatorImage.complete && generatorImage.naturalWidth) {
      ctx.save(); if (state.mode === "baseInterior" && piece.id !== undefined && !basePowerNetwork().poweredIds.has(piece.id)) { ctx.filter = "grayscale(.85) brightness(.48)"; ctx.globalAlpha *= .68; } ctx.drawImage(generatorImage, -24, -24, 48, 48); ctx.restore();
    }
    else {
      ctx.fillStyle = "#172429"; ctx.beginPath(); ctx.arc(0, 0, 19, 0, TAU); ctx.fill(); ctx.strokeStyle = "#dce4df"; ctx.lineWidth = 4; ctx.stroke();
      const glow = ctx.createRadialGradient(0, 0, 2, 0, 0, 13); glow.addColorStop(0, "#d9ffff"); glow.addColorStop(.35, "#62dced"); glow.addColorStop(1, "#123943"); ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(0, 0, 12, 0, TAU); ctx.fill();
    }
  } else if (piece.type === "refinery") {
    const powered = state.mode !== "baseInterior" || piece.id === undefined || basePowerNetwork().poweredIds.has(piece.id);
    ctx.save(); if (!powered) { ctx.filter = "grayscale(1) brightness(.45)"; ctx.globalAlpha *= .72; }
    if (refineryImage.complete && refineryImage.naturalWidth) ctx.drawImage(refineryImage, -34, -25, 68, 50);
    else {
      ctx.fillStyle = "#202d31"; ctx.fillRect(-21, -15, 42, 30); ctx.strokeStyle = "#dce4df"; ctx.lineWidth = 3; ctx.strokeRect(-21, -15, 42, 30);
      ctx.fillStyle = "#a93842"; ctx.fillRect(-18, -12, 7, 24); ctx.fillStyle = powered ? "#ffcb57" : "#596264"; ctx.fillRect(-7, -8, 23, 16);
      ctx.fillStyle = powered ? `rgba(255,184,75,${.65 + Math.sin(elapsed * 4) * .18})` : "#293438"; ctx.fillRect(-3, -5, 15, 10);
    }
    ctx.restore();
  } else if (piece.type === "craftingTable") {
    const powered = true;
    ctx.save();
    if (!powered) { ctx.filter = "grayscale(.9) brightness(.48)"; ctx.globalAlpha *= .72; }
    if (craftingTableImage.complete && craftingTableImage.naturalWidth) ctx.drawImage(craftingTableImage, -31, -21, 62, 42);
    else {
      ctx.fillStyle = "#121d21"; ctx.fillRect(-25, -16, 50, 32);
      ctx.fillStyle = "#dce3df"; ctx.fillRect(-23, -14, 46, 6);
      ctx.fillStyle = "#344349"; ctx.fillRect(-22, -7, 44, 20);
      ctx.fillStyle = "#1b292e"; ctx.fillRect(-18, -4, 36, 13);
      ctx.strokeStyle = "#718085"; ctx.lineWidth = 2; ctx.strokeRect(-18, -4, 36, 13);
      ctx.fillStyle = "#a93842"; ctx.fillRect(-24, -10, 7, 19); ctx.fillRect(17, -10, 7, 19);
      ctx.fillStyle = powered ? "#62dced" : "#596264"; ctx.shadowColor = "#62dced"; ctx.shadowBlur = powered ? 8 : 0;
      ctx.fillRect(-10, -2, 20, 8); ctx.shadowBlur = 0;
      ctx.fillStyle = "#ffcb57"; ctx.fillRect(-16, 11, 7, 2); ctx.fillRect(9, 11, 7, 2);
    }
    ctx.restore();
  } else if (piece.type === "exosuitStation") {
    const powered = piece.id === undefined || basePowerNetwork().poweredIds.has(piece.id);
    ctx.save(); if (!powered) { ctx.filter = "grayscale(.9) brightness(.45)"; ctx.globalAlpha *= .7; }
    if (exosuitStationImage.complete && exosuitStationImage.naturalWidth) ctx.drawImage(exosuitStationImage, -34, -31, 68, 62);
    else {
      ctx.fillStyle = "#18272c"; ctx.fillRect(-22, -27, 44, 54); ctx.strokeStyle = "#bccbc8"; ctx.lineWidth = 3; ctx.strokeRect(-22, -27, 44, 54);
      ctx.fillStyle = "#a93842"; ctx.fillRect(-19, 18, 38, 6); ctx.fillStyle = "#263b40"; ctx.fillRect(-16, -21, 32, 34);
      ctx.strokeStyle = powered ? "#83efae" : "#596264"; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, -11, 7, 0, TAU); ctx.stroke(); ctx.strokeRect(-8, -3, 16, 17);
      ctx.fillStyle = powered ? "#62dced" : "#596264"; ctx.shadowColor = "#62dced"; ctx.shadowBlur = powered ? 9 : 0; ctx.fillRect(-13, 16, 26, 3); ctx.shadowBlur = 0;
    }
    ctx.restore();
  } else if (piece.type === "workLight") {
    const powered = piece.id === undefined || (state.mode === "baseInterior" ? basePowerNetwork().poweredIds.has(piece.id) : basePowerNetwork().poweredSurfaceIds.has(piece.id));
    ctx.save(); if (!powered) { ctx.filter = "grayscale(.9) brightness(.42)"; ctx.globalAlpha *= .68; }
    if (fieldLightImage.complete && fieldLightImage.naturalWidth) ctx.drawImage(fieldLightImage, -18, -18, 36, 36);
    else {
      ctx.fillStyle = "#26363b"; ctx.fillRect(-4, -2, 8, 17); ctx.fillStyle = "#a93842"; ctx.fillRect(-10, 13, 20, 5);
      ctx.fillStyle = "#dce5e1"; ctx.fillRect(-9, -10, 18, 10); ctx.fillStyle = powered ? "#bff8ff" : "#596264"; ctx.shadowColor = "#62dced"; ctx.shadowBlur = powered ? 14 : 0; ctx.fillRect(-6, -8, 12, 6); ctx.shadowBlur = 0;
    }
    ctx.restore();
  } else if (piece.type === "planter") {
    const powered = piece.id === undefined || basePowerNetwork().poweredIds.has(piece.id); ctx.save(); if (!powered) { ctx.filter = "grayscale(.8) brightness(.5)"; ctx.globalAlpha *= .72; }
    if (hydroponicsPlanterImage.complete && hydroponicsPlanterImage.naturalWidth) ctx.drawImage(hydroponicsPlanterImage, -27, -27, 54, 54);
    else {
      ctx.fillStyle = "#dce5e1"; ctx.fillRect(-23, -14, 46, 28); ctx.fillStyle = "#26363b"; ctx.fillRect(-20, -11, 40, 22);
      ctx.fillStyle = "#315d48"; ctx.fillRect(-17, -8, 34, 16); ctx.fillStyle = powered ? "#77d69b" : "#52635b";
      for (let x = -13; x <= 13; x += 13) { ctx.beginPath(); ctx.arc(x, -1, 5, 0, TAU); ctx.fill(); ctx.fillRect(x - 1, 2, 2, 7); }
      ctx.fillStyle = powered ? "#62dced" : "#596264"; ctx.fillRect(-18, 10, 36, 2);
    }
    drawPlanterGrowth(piece, powered);
    ctx.restore();
  } else if (piece.type === "medStation") {
    const powered = piece.id === undefined || basePowerNetwork().poweredIds.has(piece.id); ctx.save(); if (!powered) { ctx.filter = "grayscale(.85) brightness(.48)"; ctx.globalAlpha *= .72; }
    if (medicalStationImage.complete && medicalStationImage.naturalWidth) ctx.drawImage(medicalStationImage, -25, -25, 50, 50);
    else {
      ctx.fillStyle = "#dce5e1"; ctx.fillRect(-18, -18, 36, 36); ctx.fillStyle = "#26363b"; ctx.fillRect(-14, -14, 28, 28);
      ctx.fillStyle = "#a93842"; ctx.fillRect(-4, -11, 8, 22); ctx.fillRect(-11, -4, 22, 8);
      ctx.fillStyle = powered ? "#62dced" : "#596264"; ctx.fillRect(-12, 12, 24, 3);
    }
    ctx.restore();
  } else if (piece.type === "waterPump") {
    const powered = piece.id === undefined || basePowerNetwork().poweredSurfaceIds.has(piece.id);
    if (waterPumpImage.complete && waterPumpImage.naturalWidth) { ctx.save(); if (!powered) { ctx.filter = "grayscale(.82) brightness(.52)"; ctx.globalAlpha *= .75; } ctx.drawImage(waterPumpImage, -40, -40, 80, 80); ctx.restore(); }
    else {
      ctx.fillStyle = "rgba(0,0,0,.28)"; ctx.beginPath(); ctx.ellipse(3, 13, 28, 13, 0, 0, TAU); ctx.fill();
      ctx.fillStyle = "#26383e"; ctx.fillRect(-20, -13, 40, 28); ctx.strokeStyle = "#b9cecf"; ctx.lineWidth = 2; ctx.strokeRect(-20, -13, 40, 28);
      ctx.fillStyle = "#357fb0"; ctx.fillRect(-25, 7, 50, 8); ctx.fillStyle = "#9be1ff"; ctx.fillRect(-21, 9, 42, 3);
    }
    ctx.save(); ctx.translate(0, waterPumpImage.complete && waterPumpImage.naturalWidth ? -7 : -1); ctx.rotate(powered ? elapsed * 1.8 : 0);
    ctx.globalCompositeOperation = "screen"; ctx.shadowColor = "#4ac7ff"; ctx.shadowBlur = powered ? 5 : 0; ctx.strokeStyle = powered ? "#65c8f5" : "#59676b"; ctx.lineWidth = 3;
    for (let blade = 0; blade < 4; blade++) { ctx.rotate(Math.PI / 2); ctx.beginPath(); ctx.moveTo(3, 0); ctx.lineTo(11, 0); ctx.stroke(); }
    ctx.shadowBlur = 0; ctx.fillStyle = "#d8eef1"; ctx.beginPath(); ctx.arc(0, 0, 4, 0, TAU); ctx.fill(); ctx.restore();
  } else if (piece.type === "waterTank") {
    const fill = Math.max(0, Math.min(1, (piece.water || 0) / WATER_TANK_CAPACITY));
    if (waterTankImage.complete && waterTankImage.naturalWidth) ctx.drawImage(waterTankImage, -36, -36, 72, 72);
    else {
      ctx.fillStyle = "rgba(0,0,0,.28)"; ctx.beginPath(); ctx.ellipse(4, 15, 30, 12, 0, 0, TAU); ctx.fill();
      ctx.fillStyle = "#25383d"; ctx.fillRect(-25, -19, 50, 37); ctx.beginPath(); ctx.ellipse(0, -19, 25, 8, 0, 0, TAU); ctx.fill();
      ctx.strokeStyle = "#bfd0d1"; ctx.lineWidth = 2; ctx.strokeRect(-25, -19, 50, 37); ctx.beginPath(); ctx.ellipse(0, -19, 25, 8, 0, 0, TAU); ctx.stroke();
    }
    ctx.fillStyle = "rgba(5,16,20,.88)"; ctx.fillRect(-18, 27, 36, 5);
    ctx.fillStyle = fill > .08 ? "#59c7f4" : "#53656b"; ctx.fillRect(-17, 28, 34 * fill, 3);
    ctx.strokeStyle = "rgba(207,239,244,.65)"; ctx.lineWidth = 1; ctx.strokeRect(-18, 27, 36, 5);
  } else if (piece.type === "solarPanel") {
    if (solarPanelImage.complete && solarPanelImage.naturalWidth) ctx.drawImage(solarPanelImage, -36, -36, 72, 72);
    else {
      ctx.fillStyle = "rgba(0,0,0,.3)"; ctx.fillRect(-29, -15, 61, 34);
      ctx.fillStyle = "#dce5e1"; ctx.fillRect(-30, -18, 60, 36); ctx.fillStyle = "#17272d"; ctx.fillRect(-27, -15, 54, 30);
      ctx.strokeStyle = "#4c7f89"; ctx.lineWidth = 1;
      for (let x = -18; x <= 18; x += 9) { ctx.beginPath(); ctx.moveTo(x, -14); ctx.lineTo(x, 14); ctx.stroke(); }
      ctx.fillStyle = "#a93842"; ctx.fillRect(-4, -18, 8, 36); ctx.fillStyle = "#62dced"; ctx.fillRect(-2, -4, 4, 8);
    }
  } else if (piece.type === "landingPad") {
    if (landingPadImage.complete && landingPadImage.naturalWidth) ctx.drawImage(landingPadImage, -52, -50, 104, 100);
    else {
      ctx.fillStyle = "#202d31"; ctx.beginPath(); ctx.arc(0, 0, 47, 0, TAU); ctx.fill(); ctx.strokeStyle = "#dce4df"; ctx.lineWidth = 4; ctx.stroke();
      ctx.strokeStyle = "#ffcb57"; ctx.lineWidth = 3; ctx.setLineDash([10, 7]); ctx.beginPath(); ctx.arc(0, 0, 35, 0, TAU); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = "#153943"; ctx.fillRect(-21, -3, 42, 6); ctx.fillRect(-3, -21, 6, 42);
    }
  } else if (piece.type === "room") {
    const roomPowered = state.mode !== "baseInterior" || piece.id === undefined || basePowerNetwork().poweredIds.has(piece.id);
    ctx.save();
    if (!roomPowered) { ctx.filter = "grayscale(.82) brightness(.3)"; ctx.globalAlpha *= .78; }
    if (modularRoomImage.complete && modularRoomImage.naturalWidth) ctx.drawImage(modularRoomImage, -35 * ROOM_SCALE, -35 * ROOM_SCALE, 70 * ROOM_SCALE, 70 * ROOM_SCALE);
    else {
      ctx.save(); ctx.scale(ROOM_SCALE, ROOM_SCALE);
      ctx.fillStyle = "#39484c"; ctx.fillRect(-31, -31, 62, 62); ctx.strokeStyle = "#202d31"; ctx.lineWidth = 1; ctx.strokeRect(-24, -24, 48, 48);
      ctx.fillStyle = "#dce4df";
      ctx.fillRect(-32, -32, 18, 7); ctx.fillRect(14, -32, 18, 7); ctx.fillRect(-32, 25, 18, 7); ctx.fillRect(14, 25, 18, 7);
      ctx.fillRect(-32, -25, 7, 11); ctx.fillRect(-32, 14, 7, 11); ctx.fillRect(25, -25, 7, 11); ctx.fillRect(25, 14, 7, 11);
      ctx.fillStyle = "#aa3942"; ctx.fillRect(-29, -29, 18, 3); ctx.fillRect(11, 26, 18, 3);
      ctx.fillStyle = "#62dced"; ctx.fillRect(-7, -29, 14, 2); ctx.fillRect(-7, 27, 14, 2); ctx.fillRect(-29, -7, 2, 14); ctx.fillRect(27, -7, 2, 14);
      ctx.restore();
    }
    ctx.restore();
    if (!roomPowered) {
      ctx.fillStyle = "rgba(1,4,6,.42)"; ctx.fillRect(-63, -63, 126, 126);
      const emergency = .62 + Math.sin(elapsed * 2.6 + piece.id) * .1;
      ctx.save(); ctx.globalCompositeOperation = "screen";
      for (const [lightX, lightY] of [[-51, -56], [51, -56], [-51, 56], [51, 56]]) {
        const glow = ctx.createRadialGradient(lightX, lightY, 1, lightX, lightY, 25);
        glow.addColorStop(0, `rgba(255,91,91,${emergency})`); glow.addColorStop(.28, `rgba(190,34,43,${emergency * .48})`); glow.addColorStop(1, "rgba(100,8,16,0)");
        ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(lightX, lightY, 25, 0, TAU); ctx.fill();
      }
      ctx.fillStyle = `rgba(255,102,102,${emergency})`;
      ctx.fillRect(-58, -58, 14, 3); ctx.fillRect(44, -58, 14, 3); ctx.fillRect(-58, 55, 14, 3); ctx.fillRect(44, 55, 14, 3);
      ctx.restore();
    }
  } else if (piece.type === "greenhouse") {
    const powered = piece.id === undefined || basePowerNetwork().poweredIds.has(piece.id); ctx.save();
    if (!powered) ctx.globalAlpha *= .76;
    cacheGreenhouseRenderSprites();
    const greenhouseSprite = greenhouseRenderSprites[powered ? "powered" : "unpowered"];
    if (greenhouseSprite) ctx.drawImage(greenhouseSprite, -35 * GREENHOUSE_SCALE, -35 * GREENHOUSE_SCALE);
    drawGreenhouseGrowth(piece, powered);
    drawGreenhouseSprinklers(piece);
    drawGreenhouseGrowthMeter(piece);
    ctx.restore();
  } else if (piece.type === "hallway") {
    if (modularHallwayImage.complete && modularHallwayImage.naturalWidth) ctx.drawImage(modularHallwayImage, -36, -21, 72, 42);
    else {
      ctx.fillStyle = "#3c4c50"; ctx.fillRect(-34, -17, 68, 34); ctx.strokeStyle = "#243237"; ctx.lineWidth = 1; ctx.strokeRect(-30, -11, 60, 22);
      ctx.fillStyle = "#dce4df"; ctx.fillRect(-34, -20, 68, 6); ctx.fillRect(-34, 14, 68, 6);
      ctx.fillStyle = "#a93942"; ctx.fillRect(-22, -18, 12, 3); ctx.fillRect(10, 15, 12, 3);
      ctx.fillStyle = "#62dced"; ctx.fillRect(-5, -16, 10, 2); ctx.fillRect(-5, 14, 10, 2);
    }
  }
  ctx.restore();
}

function roofLocalPoint(piece, x, y) {
  const angle = -(piece.rotation || 0) * Math.PI / 2; const dx = (x - piece.x) / BUILD_SCALE; const dy = (y - piece.y) / BUILD_SCALE;
  return { x: dx * Math.cos(angle) - dy * Math.sin(angle), y: dx * Math.sin(angle) + dy * Math.cos(angle) };
}

function playerInsideRoof(piece) {
  if (state.mode !== "planet") return false;
  const local = roofLocalPoint(piece, player.x, player.y);
  return piece.type === "room" ? Math.abs(local.x) <= 32 * ROOM_SCALE && Math.abs(local.y) <= 32 * ROOM_SCALE : Math.abs(local.x) <= 34 && Math.abs(local.y) <= 20;
}

function drawBaseRoof(piece, alpha) {
  if (!worldPointVisible(piece.x, piece.y, basePieceRadius(piece))) return;
  const s = screenPoint(piece.x, piece.y);
  ctx.save(); ctx.translate(Math.round(s.x), Math.round(s.y)); ctx.rotate((piece.rotation || 0) * Math.PI / 2); ctx.scale(BUILD_SCALE, BUILD_SCALE); ctx.globalAlpha = alpha;
  if (piece.type === "room") {
    if (modularRoomRoofImage.complete && modularRoomRoofImage.naturalWidth) ctx.drawImage(modularRoomRoofImage, -35 * ROOM_SCALE, -35 * ROOM_SCALE, 70 * ROOM_SCALE, 70 * ROOM_SCALE);
    else {
      ctx.save(); ctx.scale(ROOM_SCALE, ROOM_SCALE);
      ctx.fillStyle = "#1c292e"; ctx.fillRect(-31, -31, 62, 62);
      ctx.strokeStyle = "#e0e6e1"; ctx.lineWidth = 3; ctx.strokeRect(-31, -31, 62, 62);
      ctx.strokeStyle = "#526267"; ctx.lineWidth = 1; ctx.strokeRect(-22, -22, 44, 44);
      ctx.fillStyle = "#26373c"; ctx.fillRect(-18, -18, 36, 36);
      ctx.fillStyle = "#a93942"; ctx.fillRect(-24, -29, 16, 3); ctx.fillRect(8, 26, 16, 3);
      ctx.fillStyle = "#62dced"; ctx.fillRect(-7, -2, 14, 4);
      ctx.restore();
    }
  } else if (piece.type === "hallway") {
    if (modularHallwayRoofImage.complete && modularHallwayRoofImage.naturalWidth) ctx.drawImage(modularHallwayRoofImage, -36, -21, 72, 42);
    else {
      ctx.fillStyle = "#1c292e"; ctx.fillRect(-34, -17, 68, 34);
      ctx.strokeStyle = "#dfe6e1"; ctx.lineWidth = 3; ctx.strokeRect(-34, -17, 68, 34);
      ctx.fillStyle = "#2b3b40"; ctx.fillRect(-27, -11, 54, 22);
      ctx.strokeStyle = "#56666a"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(-12, -11); ctx.lineTo(-12, 11); ctx.moveTo(12, -11); ctx.lineTo(12, 11); ctx.stroke();
      ctx.fillStyle = "#62dced"; ctx.fillRect(-4, -14, 8, 3); ctx.fillRect(-4, 11, 8, 3);
    }
  }
  ctx.restore();
}

function roofHalfExtents(piece) {
  if (piece.type === "room") return { x: 32 * ROOM_SCALE * BUILD_SCALE, y: 32 * ROOM_SCALE * BUILD_SCALE };
  return (piece.rotation || 0) % 2 === 0 ? { x: 34 * BUILD_SCALE, y: 20 * BUILD_SCALE } : { x: 20 * BUILD_SCALE, y: 34 * BUILD_SCALE };
}

function roofPiecesConnected(a, b) {
  const aHalf = roofHalfExtents(a); const bHalf = roofHalfExtents(b);
  const overlapX = aHalf.x + bHalf.x - Math.abs(a.x - b.x); const overlapY = aHalf.y + bHalf.y - Math.abs(a.y - b.y);
  return (overlapX >= -10 && overlapY >= 18) || (overlapY >= -10 && overlapX >= 18);
}

function drawBaseRoofs() {
  const roofPieces = basePieces[state.planet].filter(piece => piece.type === "room" || piece.type === "hallway").sort((a, b) => a.y - b.y);
  const visited = new Set();
  for (const root of roofPieces) {
    if (visited.has(root.id)) continue;
    const group = []; const pending = [root]; visited.add(root.id);
    while (pending.length) {
      const piece = pending.pop(); group.push(piece);
      for (const candidate of roofPieces) {
        if (!visited.has(candidate.id) && roofPiecesConnected(piece, candidate)) { visited.add(candidate.id); pending.push(candidate); }
      }
    }
    const target = group.some(playerInsideRoof) ? .13 : .96;
    for (const piece of group) {
      const current = roofOpacity.get(piece.id) ?? .96;
      const opacity = current + (target - current) * Math.min(1, frameDt * 9);
      roofOpacity.set(piece.id, opacity); drawBaseRoof(piece, opacity);
    }
  }
}

function drawBases() {
  basePieces[state.planet].filter(piece => worldPointVisible(piece.x, piece.y, basePieceRadius(piece))).sort((a, b) => a.y - b.y).forEach(piece => drawBasePiece(piece));
  if (state.mode === "planetFlight") {
    for (const beacon of basePieces[state.planet].filter(piece => piece.type === "beacon")) {
      const s = screenPoint(beacon.x, beacon.y); const distance = Math.round(Math.hypot(ship.x - beacon.x, ship.y - beacon.y));
      const markerX = Math.max(34, Math.min(width - 34, s.x)); const markerY = Math.max(102, Math.min(height - 64, s.y - 52));
      ctx.save(); ctx.strokeStyle = "rgba(98,220,237,.58)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(markerX, markerY + 8); ctx.lineTo(markerX, markerY + 30); ctx.stroke();
      ctx.fillStyle = "#62dced"; ctx.translate(markerX, markerY); ctx.rotate(Math.PI / 4); ctx.fillRect(-4, -4, 8, 8); ctx.rotate(-Math.PI / 4);
      ctx.font = "800 8px Inter, sans-serif"; ctx.textAlign = "center"; ctx.fillText(`BASE · ${distance}U`, 0, -9); ctx.restore();
    }
  }
}

function drawSolarReadouts() {
  const network = basePowerNetwork();
  for (const panel of basePieces[state.planet]) {
    if (panel.type !== "solarPanel" || !worldPointVisible(panel.x, panel.y, 90)) continue;
    const output = network.solarOutputById.get(panel.id) || 0; const connected = network.connectedSolarIds.has(panel.id); const online = connected && output > .05;
    const s = screenPoint(panel.x, panel.y); const x = Math.round(s.x - 31); const y = Math.round(s.y - 67);
    ctx.save(); ctx.fillStyle = "rgba(4,12,16,.9)"; ctx.fillRect(x, y, 62, 23);
    ctx.strokeStyle = online ? "#62dced" : connected ? "#6e8182" : "#f2c45d"; ctx.lineWidth = 1; ctx.strokeRect(x + .5, y + .5, 61, 22);
    ctx.textAlign = "center"; ctx.font = "800 7px Inter, sans-serif"; ctx.fillStyle = online ? "#c9f8ff" : "#9aacaa"; ctx.fillText(`${output.toFixed(1)} KW`, s.x, y + 9);
    ctx.font = "800 6px Inter, sans-serif"; ctx.fillStyle = online ? "#62dced" : connected ? "#82918f" : "#f2c45d"; ctx.fillText(connected ? (online ? "GRID OUTPUT" : "NO SUNLIGHT") : "UNWIRED", s.x, y + 18);
    ctx.restore();
  }
}

function drawBatteryReadouts(undergroundMode = false) {
  const network = basePowerNetwork(); const pieces = undergroundMode ? undergroundPieces[state.planet] : basePieces[state.planet];
  const connectedIds = undergroundMode ? network.connectedUndergroundBatteryIds : network.connectedSurfaceBatteryIds;
  for (const battery of pieces) {
    if (battery.type !== "battery" || !worldPointVisible(battery.x, battery.y, 80)) continue;
    const charge = Math.max(0, Math.min(BATTERY_CAPACITY, battery.charge || 0)); const connected = connectedIds.has(battery.id);
    const solarLinked = network.solarChargeBatteryIds.has(battery.id);
    const charging = solarLinked && charge < BATTERY_CAPACITY - .01 && network.batteryChargePower > .001; const supplying = connected && charge > .001 && network.batteryDischarge > .001;
    const s = screenPoint(battery.x, battery.y); const x = Math.round(s.x - 34); const y = Math.round(s.y - 59);
    ctx.save(); ctx.fillStyle = "rgba(4,12,16,.92)"; ctx.fillRect(x, y, 68, 23); ctx.strokeStyle = charging ? "#77d69b" : supplying ? "#62dced" : connected ? "#71898a" : "#f2c45d"; ctx.strokeRect(x + .5, y + .5, 67, 22);
    ctx.textAlign = "center"; ctx.font = "800 7px Inter, sans-serif"; ctx.fillStyle = "#d7f3f4"; ctx.fillText(`${charge.toFixed(0)} / ${BATTERY_CAPACITY} KW`, s.x, y + 9);
    const status = charging ? "SOLAR CHARGING" : supplying ? "SUPPLYING GRID" : solarLinked ? charge >= BATTERY_CAPACITY - .01 ? "SOLAR CHARGED" : "NO SOLAR SURPLUS" : connected ? charge > .001 ? "STANDBY" : "DEPLETED" : "UNWIRED";
    ctx.font = "800 6px Inter, sans-serif"; ctx.fillStyle = charging ? "#77d69b" : supplying ? "#62dced" : connected ? "#8da09e" : "#f2c45d"; ctx.fillText(status, s.x, y + 18); ctx.restore();
  }
}

function drawPowerCable(a, b, powered, preview = false, view = surfaceViewBounds(36)) {
  const start = screenPoint(a.x, a.y); const end = screenPoint(b.x, b.y);
  if (Math.max(start.x, end.x) < view.left || Math.min(start.x, end.x) > view.right || Math.max(start.y, end.y) < view.top || Math.min(start.y, end.y) > view.bottom) return;
  ctx.save(); ctx.lineCap = "round"; ctx.lineJoin = "round";
  ctx.strokeStyle = preview ? "rgba(7,12,14,.75)" : "rgba(2,5,7,.82)"; ctx.lineWidth = preview ? 7 : 9;
  ctx.beginPath(); ctx.moveTo(start.x, start.y); ctx.lineTo(end.x, end.y); ctx.stroke();
  ctx.strokeStyle = powered ? "#62dced" : preview ? "#ffcb57" : "#5d6768"; ctx.lineWidth = preview ? 2 : 3;
  if (!powered && !preview) ctx.setLineDash([8, 6]);
  ctx.beginPath(); ctx.moveTo(start.x, start.y); ctx.lineTo(end.x, end.y); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = powered ? "#bffaff" : preview ? "#ffcb57" : "#8a9494";
  for (const point of [start, end]) { ctx.beginPath(); ctx.arc(point.x, point.y, 5, 0, TAU); ctx.fill(); ctx.fillStyle = "#162327"; ctx.beginPath(); ctx.arc(point.x, point.y, 2, 0, TAU); ctx.fill(); ctx.fillStyle = powered ? "#bffaff" : preview ? "#ffcb57" : "#8a9494"; }
  ctx.restore();
}

function drawPowerWires() {
  const undergroundMode = state.mode === "baseInterior";
  const wires = undergroundMode ? undergroundWires[state.planet] : surfaceWires[state.planet]; const network = basePowerNetwork();
  const byId = undergroundMode ? network.subsurfaceById : network.surfaceById;
  const view = surfaceViewBounds(36);
  for (const wire of wires) {
    const a = byId.get(wire.a); const b = byId.get(wire.b); if (!a || !b) continue;
    let powered;
    if (undergroundMode) {
      const endpointOnline = piece => piece.type === "battery" ? network.onlineBatteryIds.has(piece.id) : network.poweredIds.has(piece.id);
      powered = endpointOnline(a) && endpointOnline(b);
    }
    else {
      const endpointOnline = piece => piece.type === "solarPanel" ? network.onlineSolarIds.has(piece.id) : piece.type === "battery" ? network.onlineBatteryIds.has(piece.id) : network.poweredSurfaceIds.has(piece.id);
      powered = endpointOnline(a) && endpointOnline(b);
    }
    drawPowerCable(a, b, powered, false, view);
  }
}

function drawWaterPipe(a, b, flowing, preview = false, view = surfaceViewBounds(28)) {
  const start = screenPoint(a.x, a.y); const end = screenPoint(b.x, b.y);
  if (Math.max(start.x, end.x) < view.left || Math.min(start.x, end.x) > view.right || Math.max(start.y, end.y) < view.top || Math.min(start.y, end.y) > view.bottom) return;
  const dx = end.x - start.x; const dy = end.y - start.y; const length = Math.hypot(dx, dy);
  ctx.save(); ctx.lineCap = "round";
  if (waterPipeImage.complete && waterPipeImage.naturalWidth && length > 2) {
    ctx.save(); ctx.translate(start.x, start.y); ctx.rotate(Math.atan2(dy, dx)); ctx.globalAlpha = preview ? .7 : 1;
    const sourceWidth = waterPipeImage.naturalWidth; const sourceHeight = waterPipeImage.naturalHeight;
    const sourceCap = Math.round(sourceWidth * .145); const cap = Math.min(17, length * .3); const pipeHeight = preview ? 16 : 18;
    if (length <= cap * 2 + 2) ctx.drawImage(waterPipeImage, 0, 0, sourceWidth, sourceHeight, 0, -pipeHeight / 2, length, pipeHeight);
    else {
      ctx.drawImage(waterPipeImage, 0, 0, sourceCap, sourceHeight, 0, -pipeHeight / 2, cap, pipeHeight);
      ctx.drawImage(waterPipeImage, sourceCap, 0, sourceWidth - sourceCap * 2, sourceHeight, cap, -pipeHeight / 2, length - cap * 2, pipeHeight);
      ctx.drawImage(waterPipeImage, sourceWidth - sourceCap, 0, sourceCap, sourceHeight, length - cap, -pipeHeight / 2, cap, pipeHeight);
    }
    ctx.restore();
  } else {
    ctx.strokeStyle = preview ? "rgba(9,14,18,.8)" : "#152d3a"; ctx.lineWidth = preview ? 9 : 11;
    ctx.beginPath(); ctx.moveTo(start.x, start.y); ctx.lineTo(end.x, end.y); ctx.stroke();
    ctx.strokeStyle = flowing ? "#4caee8" : preview ? "#79d5ff" : "#3e5964"; ctx.lineWidth = 5;
    if (!flowing && !preview) ctx.setLineDash([10, 6]);
    ctx.beginPath(); ctx.moveTo(start.x, start.y); ctx.lineTo(end.x, end.y); ctx.stroke(); ctx.setLineDash([]);
  }
  if (flowing) {
    const phase = (elapsed * 38) % 24; ctx.strokeStyle = "rgba(205,246,255,.9)"; ctx.lineWidth = 2; ctx.setLineDash([5, 19]); ctx.lineDashOffset = -phase;
    ctx.beginPath(); ctx.moveTo(start.x, start.y); ctx.lineTo(end.x, end.y); ctx.stroke(); ctx.setLineDash([]);
  } else if (waterPipeImage.complete && waterPipeImage.naturalWidth) {
    ctx.strokeStyle = preview ? "rgba(121,213,255,.75)" : "rgba(18,45,58,.72)"; ctx.lineWidth = 2; ctx.setLineDash([8, 7]);
    ctx.beginPath(); ctx.moveTo(start.x, start.y); ctx.lineTo(end.x, end.y); ctx.stroke(); ctx.setLineDash([]);
  }
  ctx.restore();
}

function drawWaterPipes() {
  const undergroundMode = state.mode === "baseInterior"; const pipes = undergroundMode ? undergroundWaterPipes[state.planet] : surfaceWaterPipes[state.planet];
  const network = baseWaterNetwork(); const byId = undergroundMode ? network.subsurfaceById : network.surfaceById; const view = surfaceViewBounds(28);
  for (const pipe of pipes) {
    const a = byId.get(pipe.a); const b = byId.get(pipe.b); if (!a || !b) continue;
    const flowing = undergroundMode
      ? network.irrigatedGreenhouseIds.has(a.id) || network.irrigatedGreenhouseIds.has(b.id)
      : (a.type === "waterTank" && network.wetTankIds.has(a.id) || b.type === "waterTank" && network.wetTankIds.has(b.id)
        || a.type === "habitat" && network.suppliedEntranceIds.has(a.id) || b.type === "habitat" && network.suppliedEntranceIds.has(b.id));
    drawWaterPipe(a, b, flowing, false, view);
  }
}

function drawBuildPreview() {
  if (!build.active) return;
  if (build.selected === "wire") {
    const pieces = activeStructurePieces(); const start = pieces.find(piece => piece.id === build.wireStartId); const endpoint = wireEndpointAt(build.worldX, build.worldY);
    if (start) drawPowerCable(start, endpoint || { x: build.worldX, y: build.worldY }, false, true);
    if (endpoint) {
      const s = screenPoint(endpoint.x, endpoint.y); const valid = !start || (start.id !== endpoint.id && wireConnectionAllowed(start, endpoint));
      ctx.save(); ctx.strokeStyle = valid ? "#ffcb57" : "#ef6a61"; ctx.lineWidth = 2; ctx.setLineDash([5, 4]); ctx.beginPath(); ctx.arc(s.x, s.y, buildTypes[endpoint.type].radius * BUILD_SCALE + 8, 0, TAU); ctx.stroke(); ctx.restore();
    }
    return;
  }
  if (build.selected === "waterPipe") {
    const pieces = activeStructurePieces(); const start = pieces.find(piece => piece.id === build.wireStartId); const endpoint = waterPipeEndpointAt(build.worldX, build.worldY);
    if (start) drawWaterPipe(start, endpoint || { x: build.worldX, y: build.worldY }, false, true);
    if (endpoint) {
      const s = screenPoint(endpoint.x, endpoint.y); const valid = !start || start.id !== endpoint.id && waterPipeConnectionAllowed(start, endpoint);
      ctx.save(); ctx.strokeStyle = valid ? "#79d5ff" : "#ef6a61"; ctx.lineWidth = 2; ctx.setLineDash([5, 4]); ctx.beginPath(); ctx.arc(s.x, s.y, buildTypes[endpoint.type].radius * BUILD_SCALE + 8, 0, TAU); ctx.stroke(); ctx.restore();
    }
    return;
  }
  const x = Math.round(build.worldX / BUILD_GRID) * BUILD_GRID; const y = Math.round(build.worldY / BUILD_GRID) * BUILD_GRID;
  const valid = buildPlacementValid(build.selected, x, y) && canAffordBuild(activeBuildCost());
  const previewPiece = { type: build.selected, x, y, rotation: build.rotation };
  drawBasePiece(previewPiece, .58);
  if (state.mode === "planet" && (build.selected === "room" || build.selected === "hallway")) drawBaseRoof(previewPiece, .42);
  const s = screenPoint(x, y); ctx.save(); ctx.translate(s.x, s.y); ctx.rotate(build.rotation * Math.PI / 2);
  ctx.strokeStyle = valid ? "#62dced" : "#ef6a61"; ctx.lineWidth = 2; ctx.setLineDash([5, 4]); ctx.beginPath(); ctx.arc(0, 0, buildTypes[build.selected].radius * BUILD_SCALE + 6, 0, TAU); ctx.stroke(); ctx.restore();
}

function drawShipRecallTarget() {
  if (!shipRecall.selecting) return;
  const s = screenPoint(shipRecall.targetX, shipRecall.targetY); const color = shipRecall.valid ? "#62dced" : "#ef6a61";
  ctx.save(); ctx.translate(Math.round(s.x), Math.round(s.y));
  ctx.strokeStyle = color; ctx.fillStyle = shipRecall.valid ? "rgba(98,220,237,.09)" : "rgba(239,106,97,.08)"; ctx.lineWidth = 2; ctx.setLineDash([7, 5]);
  ctx.beginPath(); ctx.arc(0, 0, 50 + Math.sin(elapsed * 4) * 2, 0, TAU); ctx.fill(); ctx.stroke(); ctx.setLineDash([]);
  ctx.beginPath(); ctx.moveTo(-64, 0); ctx.lineTo(-42, 0); ctx.moveTo(64, 0); ctx.lineTo(42, 0); ctx.moveTo(0, -64); ctx.lineTo(0, -42); ctx.moveTo(0, 64); ctx.lineTo(0, 42); ctx.stroke();
  ctx.font = "900 8px Inter, sans-serif"; ctx.textAlign = "center"; ctx.fillText(shipRecall.valid ? (shipRecall.padId ? "LANDING PAD LOCKED" : "LANDING SITE CLEAR") : "SITE OBSTRUCTED", 0, -72);
  ctx.restore();
}

function drawShip() {
  if (!worldPointVisible(ship.x, ship.y, 90)) return;
  const s = screenPoint(ship.x, ship.y);
  const recallFlight = state.mode === "planet" && shipRecall.active;
  const atmospheric = state.mode === "planetFlight" || recallFlight;
  const recallLift = recallFlight ? Math.min(18, shipRecall.distance * .045) : 0;
  const hover = atmospheric ? -7 - recallLift + Math.sin(elapsed * 4.2) * 1.5 : 0;
  ctx.save(); ctx.translate(s.x, s.y + hover); ctx.rotate(ship.angle);
  ctx.fillStyle = atmospheric ? "rgba(0,0,0,.2)" : "rgba(0,0,0,.3)"; ctx.beginPath(); ctx.ellipse(8, atmospheric ? 20 : 13, atmospheric ? 47 : 40, atmospheric ? 24 : 21, 0, 0, TAU); ctx.fill();
  if (state.mode === "launching" || atmospheric) {
    const speed = Math.hypot(ship.vx, ship.vy);
    const length = state.mode === "launching" ? 84 + Math.random() * 22 : 17 + Math.min(24, speed * .06) + Math.random() * 5;
    ctx.fillStyle = `rgba(98,220,237,${.4 + Math.random() * .22})`; ctx.beginPath(); ctx.moveTo(-35, -7); ctx.lineTo(-35 - length, 0); ctx.lineTo(-35, 7); ctx.closePath(); ctx.fill();
  }
  if (drawKestrelArt(atmospheric ? 1.08 : 1)) {
    if (!ship.repaired) { ctx.fillStyle = "#ffcb57"; ctx.shadowColor = "#ffcb57"; ctx.shadowBlur = 10; ctx.beginPath(); ctx.arc(-19, 0, 4 + Math.sin(elapsed * 4), 0, TAU); ctx.fill(); }
    ctx.restore(); return;
  }
  ctx.fillStyle = "#e7ede9"; ctx.beginPath(); ctx.moveTo(34, 0); ctx.lineTo(-20, -18); ctx.lineTo(-31, -9); ctx.lineTo(-21, 0); ctx.lineTo(-31, 9); ctx.lineTo(-20, 18); ctx.closePath(); ctx.fill();
  ctx.fillStyle = "#d05252"; ctx.beginPath(); ctx.moveTo(4, -8); ctx.lineTo(-27, -21); ctx.lineTo(-15, -4); ctx.closePath(); ctx.fill(); ctx.beginPath(); ctx.moveTo(4, 8); ctx.lineTo(-27, 21); ctx.lineTo(-15, 4); ctx.closePath(); ctx.fill();
  ctx.fillStyle = "#183d49"; ctx.beginPath(); ctx.ellipse(12, 0, 12, 7, 0, 0, TAU); ctx.fill();
  if (!ship.repaired) { ctx.fillStyle = "#ffcb57"; ctx.beginPath(); ctx.arc(-13, 0, 4 + Math.sin(elapsed * 4), 0, TAU); ctx.fill(); }
  ctx.restore();
}

function drawKestrelArt(scale) {
  if (!kestrelImage.complete || !kestrelImage.naturalWidth) return false;
  const w = 102 * scale; const h = w * kestrelImage.naturalHeight / kestrelImage.naturalWidth;
  ctx.drawImage(kestrelImage, -w / 2, -h / 2, w, h);
  return true;
}

function drawPlayer() {
  const s = screenPoint(player.x, player.y);
  ctx.save(); ctx.translate(Math.round(s.x), Math.round(s.y));
  ctx.fillStyle = "rgba(0,0,0,.25)"; ctx.beginPath(); ctx.ellipse(4, 7, 10, 6, 0, 0, TAU); ctx.fill();
  if (playerImage.complete && playerImage.naturalWidth) {
    const cellW = playerImage.naturalWidth / 4;
    const cellH = playerImage.naturalHeight / 4;
    const moving = Math.hypot(player.vx, player.vy) > 12;
    const harvesting = Boolean(state.harvesting);
    const frame = moving ? Math.floor(player.walkTime * 9) % 4 : 0;
    const drawH = 55;
    const drawW = drawH * cellW / cellH;
    ctx.drawImage(playerImage, frame * cellW, player.facing * cellH, cellW, cellH, Math.round(-drawW / 2), -45, Math.round(drawW), drawH);
    if (harvesting) drawMultiToolHarvest(state.harvesting);
    ctx.restore();
    return;
  }
  ctx.rotate(player.angle + Math.PI / 2);
  ctx.fillStyle = "#e8eee9"; ctx.beginPath(); ctx.arc(0, -6, 6, 0, TAU); ctx.fill(); ctx.fillRect(-6, -4, 12, 14);
  ctx.fillStyle = "#c84d4f"; ctx.fillRect(-7, 0, 4, 10); ctx.fillRect(3, 0, 4, 10);
  ctx.fillStyle = "#163c47"; ctx.fillRect(-5, -10, 10, 5);
  ctx.restore();
}

function drawMultiplayerNameplate(remote, y) {
  ctx.font = "900 7px Inter, sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  const label = remote.name || "WAYFARER"; const labelWidth = Math.max(62, ctx.measureText(label).width + 18);
  ctx.fillStyle = "rgba(2,8,11,.86)"; ctx.fillRect(-labelWidth / 2, y - 8, labelWidth, 16);
  ctx.fillStyle = remote.color || "#62dced"; ctx.fillRect(-labelWidth / 2, y - 8, 3, 16);
  ctx.fillStyle = "#e8f1ee"; ctx.fillText(label, 0, y);
}

function drawRemoteExplorer(remote, x, y, drawHeight = 55) {
  ctx.save(); ctx.translate(Math.round(x), Math.round(y));
  ctx.fillStyle = "rgba(0,0,0,.28)"; ctx.beginPath(); ctx.ellipse(4, 7, 10, 6, 0, 0, TAU); ctx.fill();
  ctx.strokeStyle = remote.color || "#62dced"; ctx.globalAlpha = .68; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.ellipse(0, 8, 14, 7, 0, 0, TAU); ctx.stroke(); ctx.globalAlpha = 1;
  if (playerImage.complete && playerImage.naturalWidth) {
    const cellW = playerImage.naturalWidth / 4; const cellH = playerImage.naturalHeight / 4;
    const frame = remote.moving ? Math.floor(remote.walkTime * 9) % 4 : 0; const drawW = drawHeight * cellW / cellH;
    ctx.drawImage(playerImage, frame * cellW, remote.facing * cellH, cellW, cellH, Math.round(-drawW / 2), Math.round(-drawHeight + 10), Math.round(drawW), drawHeight);
  } else { ctx.fillStyle = "#e8eee9"; ctx.fillRect(-7, -18, 14, 24); ctx.fillStyle = remote.color || "#163c47"; ctx.fillRect(-6, -17, 12, 6); }
  drawMultiplayerNameplate(remote, -drawHeight - 5); ctx.restore();
}

function drawRemoteShip(remote, x, y, scale = 1) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(remote.angle || 0);
  ctx.fillStyle = "rgba(0,0,0,.24)"; ctx.beginPath(); ctx.ellipse(7, 15 * scale, 42 * scale, 21 * scale, 0, 0, TAU); ctx.fill();
  if (remote.moving || remote.pulse) {
    const length = (remote.pulse ? 55 : 20) * scale; ctx.fillStyle = remote.color || "rgba(98,220,237,.72)";
    ctx.beginPath(); ctx.moveTo(-31 * scale, -5 * scale); ctx.lineTo((-31 * scale) - length, 0); ctx.lineTo(-31 * scale, 5 * scale); ctx.closePath(); ctx.fill();
  }
  if (!drawKestrelArt(scale)) { ctx.fillStyle = "#dfe9e5"; ctx.beginPath(); ctx.moveTo(28 * scale, 0); ctx.lineTo(-23 * scale, -15 * scale); ctx.lineTo(-16 * scale, 0); ctx.lineTo(-23 * scale, 15 * scale); ctx.closePath(); ctx.fill(); }
  ctx.restore(); ctx.save(); ctx.translate(x, y); drawMultiplayerNameplate(remote, -46 * scale); ctx.restore();
}

function multiplayerZone() {
  if (state.mode === "caveInterior" || state.mode === "mineshaft") return String(naturalCave.active?.key || "");
  if (state.mode === "baseInterior") return String(underground.entranceId ?? "");
  return "";
}

function remoteInCurrentArea(remote) {
  if (!remote.active || remote.mode !== state.mode || remote.zone !== multiplayerZone()) return false;
  return state.mode === "space" || remote.planet === state.planet;
}

function drawRemoteScreenActors() {
  for (const remote of multiplayer.players.values()) {
    if (!remoteInCurrentArea(remote)) continue;
    const point = screenPoint(remote.x, remote.y);
    if (point.x < -100 || point.x > width + 100 || point.y < -100 || point.y > height + 100) continue;
    if (state.mode === "planetFlight") drawRemoteShip(remote, point.x, point.y, 1.08); else drawRemoteExplorer(remote, point.x, point.y);
  }
}

function drawRemoteDirectActors() {
  for (const remote of multiplayer.players.values()) if (remoteInCurrentArea(remote)) drawRemoteExplorer(remote, remote.x, remote.y, 50);
}

function drawRemoteSpaceShips() {
  for (const remote of multiplayer.players.values()) {
    if (!remoteInCurrentArea(remote)) continue;
    const point = spacePoint(remote.x, remote.y);
    if (point.x < -120 || point.x > width + 120 || point.y < -120 || point.y > height + 120) continue;
    drawRemoteShip(remote, point.x, point.y, .78);
  }
}

function drawMultiToolHarvest(target) {
  const dx = target.x - player.x; const dy = target.y - player.y; const distance = Math.hypot(dx, dy) || 1;
  const directionX = dx / distance; const directionY = dy / distance; const sideX = -directionY; const sideY = directionX;
  const startX = directionX * 12 + sideX * 4; const startY = directionY * 12 + sideY * 4 - 9;
  const endX = dx - directionX * 7; const endY = dy - directionY * 7;
  const pulse = .72 + Math.sin(elapsed * 22) * .2;
  ctx.save(); ctx.translate(startX, startY); ctx.rotate(Math.atan2(directionY, directionX));
  ctx.fillStyle = "#16252a"; ctx.fillRect(-7, -4, 15, 8); ctx.fillStyle = "#dce6e2"; ctx.fillRect(-4, -3, 8, 3);
  ctx.fillStyle = "#62dced"; ctx.shadowColor = "#62dced"; ctx.shadowBlur = 9; ctx.fillRect(5, -2, 5, 4); ctx.restore();
  ctx.save(); ctx.globalCompositeOperation = "screen"; ctx.lineCap = "round";
  ctx.strokeStyle = `rgba(98,220,237,${.2 + pulse * .24})`; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(startX, startY); ctx.lineTo(endX, endY); ctx.stroke();
  ctx.strokeStyle = `rgba(218,255,248,${.58 + pulse * .28})`; ctx.lineWidth = 1.5; ctx.setLineDash([7, 5]); ctx.lineDashOffset = -elapsed * 34;
  ctx.beginPath(); ctx.moveTo(startX, startY); ctx.lineTo(endX, endY); ctx.stroke(); ctx.setLineDash([]);
  for (let i = 0; i < 6; i++) {
    const angle = elapsed * (4 + i * .3) + i * TAU / 6; const radius = 4 + ((elapsed * 18 + i * 3) % 9);
    ctx.fillStyle = i % 2 ? `rgba(242,196,93,${pulse * .8})` : `rgba(98,220,237,${pulse})`;
    ctx.fillRect(endX + Math.cos(angle) * radius - 1, endY + Math.sin(angle) * radius - 1, 2, 2);
  }
  ctx.restore();
}

function spacePoint(x, y) {
  return { x: (x - spaceShip.x) * spaceShip.zoom + width / 2, y: (y - spaceShip.y) * spaceShip.zoom + height / 2 };
}

function drawPlanetTerminator(renderContext, index, position, radius, drawRim = true) {
  const lightAngle = Math.atan2(-position.y, -position.x);
  renderContext.save(); renderContext.beginPath(); renderContext.arc(0, 0, radius, 0, TAU); renderContext.clip(); renderContext.rotate(lightAngle);
  const terminator = renderContext.createLinearGradient(-radius, 0, radius, 0);
  terminator.addColorStop(0, "rgba(0,2,7,.94)");
  terminator.addColorStop(.34, "rgba(0,3,9,.86)");
  terminator.addColorStop(.5, "rgba(1,5,11,.46)");
  terminator.addColorStop(.64, "rgba(2,7,12,.1)");
  terminator.addColorStop(1, "rgba(0,0,0,0)");
  renderContext.fillStyle = terminator; renderContext.fillRect(-radius, -radius, radius * 2, radius * 2);
  const limb = renderContext.createRadialGradient(radius * .18, 0, radius * .12, 0, 0, radius * 1.04);
  limb.addColorStop(0, "rgba(0,0,0,0)"); limb.addColorStop(.72, "rgba(0,0,0,.03)"); limb.addColorStop(1, "rgba(0,2,7,.5)");
  renderContext.fillStyle = limb; renderContext.fillRect(-radius, -radius, radius * 2, radius * 2); renderContext.restore();

  if (!drawRim) return;
  const p = planets[index];
  renderContext.strokeStyle = p.accent; renderContext.globalAlpha = .42; renderContext.lineWidth = Math.max(1, radius * .025);
  renderContext.beginPath(); renderContext.arc(0, 0, radius + renderContext.lineWidth * .5, 0, TAU); renderContext.stroke(); renderContext.globalAlpha = 1;
}

function drawOrbitalStation(position = stationPosition()) {
  const screen = spacePoint(position.x, position.y); const radius = Math.max(18, orbitalStation.radius * spaceShip.zoom);
  if (screen.x < -radius * 2 || screen.x > width + radius * 2 || screen.y < -radius * 2 || screen.y > height + radius * 2) return;
  const targeted = spaceShip.target === planets.length; const rotation = elapsed * .16;
  ctx.save(); ctx.translate(screen.x, screen.y); ctx.rotate(rotation);
  ctx.strokeStyle = "rgba(109,220,232,.42)"; ctx.lineWidth = Math.max(2, radius * .08); ctx.beginPath(); ctx.ellipse(0, 0, radius, radius * .42, 0, 0, TAU); ctx.stroke();
  ctx.strokeStyle = "#8fa5a3"; ctx.lineWidth = Math.max(3, radius * .13); ctx.beginPath(); ctx.arc(0, 0, radius * .58, 0, TAU); ctx.stroke();
  ctx.fillStyle = "#d9e3df"; ctx.fillRect(-radius * .12, -radius * .9, radius * .24, radius * 1.8);
  ctx.fillStyle = "#273b42"; ctx.fillRect(-radius * .72, -radius * .12, radius * 1.44, radius * .24);
  ctx.fillStyle = "#62dced"; ctx.shadowColor = "#62dced"; ctx.shadowBlur = 10;
  for (let index = 0; index < 4; index++) { const angle = index * TAU / 4; ctx.beginPath(); ctx.arc(Math.cos(angle) * radius * .58, Math.sin(angle) * radius * .58, Math.max(2, radius * .055), 0, TAU); ctx.fill(); }
  ctx.shadowBlur = 0; ctx.fillStyle = "#f2c45d"; ctx.fillRect(radius * .62, -radius * .08, radius * .42, radius * .16); ctx.restore();
  ctx.save(); ctx.translate(screen.x, screen.y);
  if (targeted) { ctx.strokeStyle = "#62dced"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(0, 0, radius + 12 + Math.sin(elapsed * 3) * 2, 0, TAU); ctx.stroke(); }
  ctx.fillStyle = "#eaf4f1"; ctx.font = "800 9px Inter, sans-serif"; ctx.textAlign = "center"; ctx.fillText(orbitalStation.name, 0, radius + 25); ctx.restore();
}

function drawSpace() {
  const speed = Math.hypot(spaceShip.vx, spaceShip.vy);
  const directionX = speed ? spaceShip.vx / speed : 0;
  const directionY = speed ? spaceShip.vy / speed : 0;
  const grad = ctx.createRadialGradient(width * .5, height * .5, 10, width * .5, height * .5, Math.max(width, height) * .75);
  grad.addColorStop(0, "#111d27"); grad.addColorStop(1, "#010409"); ctx.fillStyle = grad; ctx.fillRect(0, 0, width, height);

  for (const star of state.stars) {
    const x = ((star.x - spaceShip.x * star.alpha * .045) % (width + 40) + width + 40) % (width + 40) - 20;
    const y = ((star.y - spaceShip.y * star.alpha * .045) % (height + 40) + height + 40) % (height + 40) - 20;
    const streak = spaceShip.pulse ? 8 + speed * .025 * star.alpha : 1;
    ctx.strokeStyle = `rgba(220,242,245,${star.alpha})`; ctx.lineWidth = star.size;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - directionX * streak, y - directionY * streak); ctx.stroke();
  }

  const starPoint = spacePoint(0, 0);
  ctx.save(); ctx.translate(starPoint.x, starPoint.y);
  ctx.strokeStyle = "rgba(255,214,105,.09)"; ctx.lineWidth = 1;
  for (const body of solarBodies) { ctx.beginPath(); ctx.arc(0, 0, body.orbit * spaceShip.zoom, 0, TAU); ctx.stroke(); }
  const starRadius = systemStarRadius * spaceShip.zoom;
  const starGlow = ctx.createRadialGradient(0, 0, starRadius * .15, 0, 0, starRadius * 2.5); starGlow.addColorStop(0, "#fff7c0"); starGlow.addColorStop(.3, "#ffc55b"); starGlow.addColorStop(.45, "rgba(237,113,53,.42)"); starGlow.addColorStop(1, "transparent");
  ctx.fillStyle = starGlow; ctx.beginPath(); ctx.arc(0, 0, starRadius * 2.5, 0, TAU); ctx.fill(); ctx.fillStyle = "#ffe99a"; ctx.beginPath(); ctx.arc(0, 0, starRadius, 0, TAU); ctx.fill();
  ctx.restore();

  for (const asteroid of systemAsteroids) {
    const s = spacePoint(asteroid.x, asteroid.y); const r = asteroid.size * spaceShip.zoom;
    if (s.x < -20 || s.x > width + 20 || s.y < -20 || s.y > height + 20) continue;
    ctx.save(); ctx.translate(s.x, s.y); ctx.rotate(asteroid.angle + elapsed * .04); ctx.fillStyle = asteroid.shade > .5 ? "#53605f" : "#343e43";
    ctx.beginPath(); for (let i = 0; i < 7; i++) { const a = i * TAU / 7; const rr = r * (.72 + ((i * 17) % 5) * .07); if (!i) ctx.moveTo(Math.cos(a) * rr, Math.sin(a) * rr); else ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); } ctx.closePath(); ctx.fill(); ctx.restore();
  }

  const targetPosition = currentSpaceTarget().position;
  const targetScreen = spacePoint(targetPosition.x, targetPosition.y);
  ctx.save(); ctx.setLineDash([5, 9]); ctx.strokeStyle = "rgba(98,220,237,.22)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(width / 2, height / 2); ctx.lineTo(targetScreen.x, targetScreen.y); ctx.stroke(); ctx.restore();

  solarBodies.forEach((body, index) => {
    const p = planets[index]; const position = bodyPosition(index); const s = spacePoint(position.x, position.y); const r = Math.max(9, body.radius * spaceShip.zoom);
    if (s.x < -r - 30 || s.x > width + r + 30 || s.y < -r - 30 || s.y > height + r + 30) return;
    ctx.save(); ctx.translate(s.x, s.y);
    ctx.shadowColor = p.accent; ctx.shadowBlur = index === spaceShip.target ? 22 : 9;
    const planetImage = planetImages[index];
    const surfaceRotation = planetRotationFraction(index) * TAU;
    if (planetImage.complete && planetImage.naturalWidth) {
      ctx.save(); ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.clip(); ctx.rotate(surfaceRotation);
      ctx.drawImage(planetImage, -r, -r, r * 2, r * 2); ctx.restore();
      ctx.shadowBlur = 0;
    } else {
      ctx.fillStyle = p.ground; ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.fill(); ctx.shadowBlur = 0;
      ctx.save(); ctx.beginPath(); ctx.arc(0, 0, r, 0, TAU); ctx.clip(); ctx.rotate(surfaceRotation);
      ctx.fillStyle = p.ground2; ctx.globalAlpha = .42;
      for (let patch = 0; patch < 5; patch++) {
        const angle = index * 1.7 + patch * 2.21;
        const px = Math.cos(angle) * r * .52;
        const py = Math.sin(angle * 1.31) * r * .48;
        ctx.beginPath(); ctx.ellipse(px, py, r * (.18 + patch % 2 * .08), r * (.09 + (patch + 1) % 2 * .07), angle * .23, 0, TAU); ctx.fill();
      }
      ctx.restore();
    }
    drawPlanetTerminator(ctx, index, position, r);
    if (index === spaceShip.target) { ctx.strokeStyle = "#62dced"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(0, 0, r + 10 + Math.sin(elapsed * 3) * 2, 0, TAU); ctx.stroke(); }
    ctx.fillStyle = "#eaf4f1"; ctx.font = "800 9px Inter, sans-serif"; ctx.textAlign = "center"; ctx.fillText(p.name, 0, r + 23); ctx.restore();
  });

  drawOrbitalStation();
  drawRemoteSpaceShips();

  if (targetScreen.x < 20 || targetScreen.x > width - 20 || targetScreen.y < 80 || targetScreen.y > height - 50) {
    const angle = Math.atan2(targetScreen.y - height / 2, targetScreen.x - width / 2); const mx = Math.max(35, Math.min(width - 35, width / 2 + Math.cos(angle) * Math.min(width, height) * .39)); const my = Math.max(90, Math.min(height - 55, height / 2 + Math.sin(angle) * Math.min(width, height) * .39));
    ctx.save(); ctx.translate(mx, my); ctx.rotate(angle); ctx.fillStyle = "#62dced"; ctx.beginPath(); ctx.moveTo(9, 0); ctx.lineTo(-5, -5); ctx.lineTo(-5, 5); ctx.closePath(); ctx.fill(); ctx.restore();
  }

  ctx.save(); ctx.translate(width / 2, height / 2); ctx.rotate(spaceShip.angle);
  const flame = keys.has("w") || keys.has("arrowup");
  if (flame) { const length = spaceShip.pulse ? 64 : 24; ctx.fillStyle = spaceShip.pulse ? "rgba(98,220,237,.72)" : "rgba(255,199,89,.7)"; ctx.beginPath(); ctx.moveTo(-27, -5); ctx.lineTo(-27 - length - Math.random() * 10, 0); ctx.lineTo(-27, 5); ctx.closePath(); ctx.fill(); }
  if (!drawKestrelArt(.78)) { ctx.fillStyle = "#e7ede9"; ctx.beginPath(); ctx.moveTo(25, 0); ctx.lineTo(-21, -14); ctx.lineTo(-15, 0); ctx.lineTo(-21, 14); ctx.closePath(); ctx.fill(); }
  ctx.restore();

  const vignette = ctx.createRadialGradient(width / 2, height / 2, Math.min(width,height) * .25, width / 2, height / 2, Math.max(width,height) * .72); vignette.addColorStop(0, "transparent"); vignette.addColorStop(1, "rgba(0,2,8,.55)"); ctx.fillStyle = vignette; ctx.fillRect(0, 0, width, height);
}

function stationViewScale() { return Math.max(.76, Math.min(1.15, Math.min(width / 920, height / 650))); }

function drawStationPlayer() {
  ctx.save(); ctx.translate(Math.round(stationPlayer.x), Math.round(stationPlayer.y));
  ctx.fillStyle = "rgba(0,0,0,.4)"; ctx.beginPath(); ctx.ellipse(4, 9, 11, 6, 0, 0, TAU); ctx.fill();
  if (playerImage.complete && playerImage.naturalWidth) {
    const cellW = playerImage.naturalWidth / 4; const cellH = playerImage.naturalHeight / 4;
    const moving = Math.hypot(stationPlayer.vx, stationPlayer.vy) > 10; const frame = moving ? Math.floor(stationPlayer.walkTime * 9) % 4 : 0;
    const drawH = 50; const drawW = drawH * cellW / cellH;
    ctx.drawImage(playerImage, frame * cellW, stationPlayer.facing * cellH, cellW, cellH, Math.round(-drawW / 2), -41, Math.round(drawW), drawH);
  } else { ctx.fillStyle = "#e8eee9"; ctx.fillRect(-7, -18, 14, 24); ctx.fillStyle = "#163c47"; ctx.fillRect(-6, -17, 12, 6); }
  ctx.restore();
}

function drawStationTrafficShip(x, y, shipTypeIndex = 0, alpha = 1) {
  const type = stationShipTypes[shipTypeIndex] || stationShipTypes[0]; const image = stationShipImages[shipTypeIndex];
  if (image?.complete && image.naturalWidth) {
    const drawWidth = type.drawHeight * image.naturalWidth / image.naturalHeight;
    ctx.save(); ctx.globalAlpha = alpha; ctx.translate(x, y); ctx.fillStyle = "rgba(0,0,0,.34)"; ctx.beginPath(); ctx.ellipse(5, type.drawHeight * .2, drawWidth * .42, type.drawHeight * .2, 0, 0, TAU); ctx.fill();
    ctx.drawImage(image, Math.round(-drawWidth / 2), Math.round(-type.drawHeight / 2), Math.round(drawWidth), type.drawHeight); ctx.restore(); return;
  }
  const hullColors = ["#8e9a98", "#9b846e", "#718b91", "#91829b"];
  ctx.save(); ctx.globalAlpha = alpha; ctx.translate(x, y); ctx.fillStyle = "rgba(0,0,0,.35)"; ctx.beginPath(); ctx.ellipse(5, 12, 70, 38, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = hullColors[shipTypeIndex % hullColors.length]; ctx.beginPath(); ctx.moveTo(0, -72); ctx.lineTo(48, 48); ctx.lineTo(20, 38); ctx.lineTo(0, 62); ctx.lineTo(-20, 38); ctx.lineTo(-48, 48); ctx.closePath(); ctx.fill();
  ctx.fillStyle = shipTypeIndex % 2 ? "#342e42" : "#263b43"; ctx.beginPath(); ctx.moveTo(0, -48); ctx.lineTo(14, -13); ctx.lineTo(-14, -13); ctx.closePath(); ctx.fill();
  ctx.fillStyle = shipTypeIndex % 2 ? "#7bd8a5" : "#d6ad55"; ctx.fillRect(-31, 28, 12, 5); ctx.fillRect(19, 28, 12, 5);
  ctx.fillStyle = `rgba(98,220,237,${.45 + Math.sin(elapsed * 2.5) * .1})`; ctx.fillRect(-5, 48, 10, 8); ctx.restore();
}

function stationNpcPosition(traffic, dock) { return { x: dock.x + Math.sin(elapsed * .7 + traffic.id) * 18, y: dock.y - 155 - Math.sin(elapsed * 1.3 + traffic.id) * 3 }; }

function drawStationNpc(traffic, dock) {
  const arriving = traffic.phase === "docked"; const alpha = arriving ? smoothstep(0, 1.4, traffic.time) : Math.max(0, 1 - traffic.time / 1.15);
  if (alpha <= 0) return;
  const race = stationRaces[traffic.raceIndex]; const position = stationNpcPosition(traffic, dock); const x = position.x; const y = position.y;
  ctx.save(); ctx.globalAlpha = alpha; ctx.translate(x, y);
  if (alpha < .98) { ctx.fillStyle = race.accent; ctx.globalAlpha = alpha * .3; ctx.fillRect(-34, -84, 68, 98); ctx.globalAlpha = alpha; ctx.fillStyle = race.accent; for (let line = -78; line < 14; line += 8) ctx.fillRect(-29 + (traffic.id + line) % 5, line, 58, 2); }
  ctx.fillStyle = "rgba(0,0,0,.35)"; ctx.beginPath(); ctx.ellipse(3, 8, 10, 5, 0, 0, TAU); ctx.fill();
  const raceImage = stationRaceImages[traffic.raceIndex];
  if (raceImage?.complete && raceImage.naturalWidth) {
    const drawHeight = race.body === "plated" ? 70 : race.body === "aquatic" ? 78 : 86; const drawWidth = drawHeight * raceImage.naturalWidth / raceImage.naturalHeight;
    ctx.drawImage(raceImage, Math.round(-drawWidth / 2), Math.round(10 - drawHeight), Math.round(drawWidth), drawHeight);
  } else if (race.body === "crystal") {
    ctx.fillStyle = race.color;
    ctx.beginPath(); ctx.moveTo(0, -44); ctx.lineTo(11, -29); ctx.lineTo(8, -2); ctx.lineTo(15, 8); ctx.lineTo(5, 8); ctx.lineTo(0, -4); ctx.lineTo(-5, 8); ctx.lineTo(-15, 8); ctx.lineTo(-8, -2); ctx.lineTo(-11, -29); ctx.closePath(); ctx.fill();
    ctx.fillStyle = race.accent; ctx.beginPath(); ctx.moveTo(-8, -43); ctx.lineTo(-2, -55); ctx.lineTo(1, -43); ctx.lineTo(8, -55); ctx.lineTo(7, -39); ctx.closePath(); ctx.fill(); ctx.fillRect(-2, -30, 4, 17);
  } else if (race.body === "aquatic") {
    ctx.fillStyle = race.color;
    ctx.beginPath(); ctx.ellipse(0, -33, 11, 13, 0, 0, TAU); ctx.fill(); ctx.fillRect(-10, -25, 20, 27); ctx.fillRect(-15, -19, 5, 23); ctx.fillRect(10, -19, 5, 23); ctx.fillRect(-9, 0, 6, 10); ctx.fillRect(3, 0, 6, 10);
    ctx.fillStyle = race.accent; ctx.beginPath(); ctx.moveTo(-2, -46); ctx.lineTo(0, -58); ctx.lineTo(6, -43); ctx.closePath(); ctx.fill(); ctx.fillRect(-7, -35, 4, 3); ctx.fillRect(3, -35, 4, 3);
  } else if (race.body === "plated") {
    ctx.fillStyle = race.color;
    ctx.fillRect(-13, -27, 26, 30); ctx.fillRect(-19, -22, 7, 24); ctx.fillRect(12, -22, 7, 24); ctx.fillRect(-11, 1, 8, 10); ctx.fillRect(3, 1, 8, 10);
    ctx.fillStyle = race.accent; ctx.beginPath(); ctx.moveTo(-13, -28); ctx.lineTo(-9, -43); ctx.lineTo(9, -43); ctx.lineTo(13, -28); ctx.closePath(); ctx.fill(); ctx.fillStyle = "#3c3028"; ctx.fillRect(-8, -36, 16, 5); ctx.fillStyle = race.accent; ctx.fillRect(-10, -17, 20, 4);
  } else {
    ctx.fillStyle = race.color;
    ctx.fillRect(-9, -27, 18, 29); ctx.fillRect(-14, -21, 5, 20); ctx.fillRect(9, -21, 5, 20); ctx.fillRect(-8, 1, 5, 10); ctx.fillRect(3, 1, 5, 10);
    ctx.strokeStyle = race.accent; ctx.lineWidth = 3; ctx.strokeRect(-10, -43, 20, 16); ctx.fillStyle = "#171c27"; ctx.fillRect(-7, -40, 14, 10); ctx.fillStyle = race.accent; ctx.fillRect(-5, -37, 10, 3); ctx.fillRect(-6, -16, 12, 3);
  }
  ctx.globalAlpha = alpha * .92; ctx.fillStyle = "rgba(2,8,11,.82)"; ctx.fillRect(-58, -101, 116, 18); ctx.fillStyle = race.accent; ctx.font = "800 6px Inter, sans-serif"; ctx.textAlign = "center"; ctx.fillText(`${traffic.name} · ${race.name.toUpperCase()}`, 0, -90);
  ctx.restore();
}

function drawStationInterior(options = {}) {
  const docking = Boolean(options.docking); const shipY = options.shipY ?? stationLayout.kestrel.y; const scale = stationViewScale();
  const cameraX = docking ? 0 : stationCamera.x; const cameraY = docking ? 610 : stationCamera.y;
  ctx.fillStyle = "#010509"; ctx.fillRect(0, 0, width, height);
  for (const star of state.stars.slice(0, 90)) { ctx.fillStyle = `rgba(215,240,245,${star.alpha * .55})`; ctx.fillRect(star.x % width, star.y % height, Math.max(1, star.size), Math.max(1, star.size)); }
  ctx.save(); ctx.translate(width / 2, height / 2); ctx.scale(scale, scale); ctx.translate(-cameraX, -cameraY);

  ctx.fillStyle = "#091116"; ctx.fillRect(-1430, -990, 2860, 1980);
  ctx.strokeStyle = "#415159"; ctx.lineWidth = 14; ctx.strokeRect(-1420, -980, 2840, 1960);
  ctx.fillStyle = "#132127"; ctx.fillRect(-1380, -940, 2760, 1880);
  ctx.strokeStyle = "rgba(106,214,226,.1)"; ctx.lineWidth = 1;
  for (let x = -1350; x <= 1350; x += 50) { ctx.beginPath(); ctx.moveTo(x, -920); ctx.lineTo(x, 920); ctx.stroke(); }
  for (let y = -900; y <= 900; y += 50) { ctx.beginPath(); ctx.moveTo(-1360, y); ctx.lineTo(1360, y); ctx.stroke(); }

  ctx.fillStyle = "#03090d"; ctx.fillRect(-1320, -965, 520, 92); ctx.fillRect(800, -965, 520, 92);
  ctx.strokeStyle = "#5a7079"; ctx.lineWidth = 5; ctx.strokeRect(-1320, -965, 520, 92); ctx.strokeRect(800, -965, 520, 92);
  for (let i = 0; i < 28; i++) { const x = -1300 + i * 96; ctx.fillStyle = i % 3 ? "rgba(207,235,241,.55)" : "rgba(98,220,237,.8)"; ctx.fillRect(x, -925 - i % 2 * 13, 3, 3); }

  ctx.fillStyle = "#0a171c"; ctx.fillRect(-1320, -820, 480, 230); ctx.fillRect(840, -820, 480, 230);
  ctx.strokeStyle = "#344a52"; ctx.lineWidth = 5; ctx.strokeRect(-1320, -820, 480, 230); ctx.strokeRect(840, -820, 480, 230);
  ctx.fillStyle = "#1d2d32"; ctx.fillRect(-1250, -760, 340, 50); ctx.fillRect(910, -760, 340, 50);
  ctx.fillStyle = "rgba(224,239,238,.5)"; ctx.font = "800 8px Inter, sans-serif"; ctx.textAlign = "center"; ctx.fillText("TRANSIT LOUNGE", -1080, -730); ctx.fillText("TRADE AUTHORITY", 1080, -730);

  const terminalGlow = .45 + Math.sin(elapsed * 3.4) * .12;
  ctx.fillStyle = "#091317"; ctx.fillRect(-90, -940, 180, 106); ctx.strokeStyle = `rgba(98,220,237,${terminalGlow})`; ctx.lineWidth = 3; ctx.strokeRect(-90, -940, 180, 106);
  ctx.fillStyle = `rgba(98,220,237,${terminalGlow})`; ctx.fillRect(-64, -915, 128, 10); ctx.fillRect(-46, -892, 92, 4);
  ctx.fillStyle = "#dce9e7"; ctx.font = "800 8px Inter, sans-serif"; ctx.fillText("CENTRAL OPERATIONS", 0, -847);

  const sideFacilities = [{ x: -1320, label: "CREW QUARTERS" }, { x: -790, label: "CUSTOMS" }, { x: 530, label: "MEDICAL" }, { x: 1060, label: "CARGO CONTROL" }];
  for (const facility of sideFacilities) { ctx.fillStyle = "#0b171c"; ctx.fillRect(facility.x, -390, 260, 210); ctx.strokeStyle = "#3e535a"; ctx.lineWidth = 4; ctx.strokeRect(facility.x, -390, 260, 210); ctx.fillStyle = "rgba(242,196,93,.7)"; ctx.fillRect(facility.x + 60, -345, 140, 6); ctx.fillStyle = "rgba(220,235,234,.45)"; ctx.fillText(facility.label, facility.x + 130, -215); }

  ctx.fillStyle = "rgba(7,14,18,.55)"; ctx.fillRect(-430, -535, 860, 250); ctx.strokeStyle = "rgba(98,220,237,.2)"; ctx.lineWidth = 3; ctx.strokeRect(-430, -535, 860, 250);
  ctx.fillStyle = "rgba(220,235,234,.4)"; ctx.fillText("MERIDIAN CENTRAL CONCOURSE", 0, -490);
  for (const x of [-300, -100, 100, 300]) { ctx.fillStyle = "#24343a"; ctx.fillRect(x - 55, -420, 110, 28); ctx.fillStyle = "rgba(98,220,237,.35)"; ctx.fillRect(x - 42, -412, 84, 3); }

  ctx.fillStyle = "rgba(8,16,20,.62)"; ctx.fillRect(-1370, 280, 2740, 650);
  stationLayout.docks.forEach((dock, index) => {
    const traffic = stationTraffic.slots[index]; const occupied = index === stationLayout.kestrelDock || Boolean(traffic);
    ctx.strokeStyle = index === stationLayout.kestrelDock ? "rgba(98,220,237,.55)" : "rgba(242,196,93,.38)"; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(dock.x, dock.y, 180, 0, TAU); ctx.stroke();
    ctx.strokeStyle = "rgba(242,196,93,.42)"; ctx.setLineDash([18, 12]); ctx.beginPath(); ctx.moveTo(dock.x - 155, 260); ctx.lineTo(dock.x - 155, 910); ctx.stroke(); ctx.beginPath(); ctx.moveTo(dock.x + 155, 260); ctx.lineTo(dock.x + 155, 910); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = "rgba(222,236,234,.48)"; ctx.font = "800 11px Inter, sans-serif"; ctx.fillText(dock.number, dock.x, 420);
    ctx.fillStyle = occupied ? "rgba(242,196,93,.72)" : "rgba(98,220,237,.72)"; ctx.font = "800 7px Inter, sans-serif"; ctx.fillText(traffic?.phase === "landing" ? `INBOUND · ${stationShipTypes[traffic.shipType].name}` : traffic ? stationShipTypes[traffic.shipType].name : occupied ? "KESTREL" : "BERTH CLEAR", dock.x, 441);
    if (traffic) {
      const travel = traffic.phase === "landing" ? 1 - smoothstep(0, 3.2, traffic.time) : traffic.phase === "departing" ? smoothstep(1.1, 4.2, traffic.time) : 0;
      drawStationTrafficShip(dock.x, dock.y + travel * 430, traffic.shipType, 1 - Math.max(0, travel - .8) * 3);
      if (traffic.phase !== "landing") drawStationNpc(traffic, dock);
    }
  });
  ctx.fillStyle = "rgba(220,235,234,.38)"; ctx.font = "800 8px Inter, sans-serif"; ctx.fillText("MERIDIAN FLIGHT DECK · FIVE ACTIVE BERTHS", 0, 245);

  if (docking && shipY > stationLayout.kestrel.y + 15) {
    ctx.fillStyle = `rgba(98,220,237,${.35 + Math.sin(elapsed * 18) * .15})`; ctx.beginPath(); ctx.moveTo(-8, shipY + 58); ctx.lineTo(0, shipY + 122); ctx.lineTo(8, shipY + 58); ctx.closePath(); ctx.fill();
  }
  ctx.save(); ctx.translate(0, shipY); ctx.rotate(-Math.PI / 2); ctx.shadowColor = "rgba(98,220,237,.45)"; ctx.shadowBlur = docking ? 22 : 8;
  if (!drawKestrelArt(1.65)) { ctx.fillStyle = "#dce5e1"; ctx.beginPath(); ctx.moveTo(78, 0); ctx.lineTo(-62, -38); ctx.lineTo(-46, 0); ctx.lineTo(-62, 38); ctx.closePath(); ctx.fill(); }
  ctx.restore();
  if (!docking) {
    ctx.strokeStyle = "#f2c45d"; ctx.lineWidth = 5;
    for (const side of [-1, 1]) { ctx.beginPath(); ctx.moveTo(side * 112, 790); ctx.lineTo(side * 72, 757); ctx.lineTo(side * 50, 733); ctx.stroke(); }
    drawRemoteDirectActors(); drawStationPlayer();
  }
  ctx.restore();
  const vignette = ctx.createRadialGradient(width / 2, height / 2, Math.min(width, height) * .2, width / 2, height / 2, Math.max(width, height) * .74); vignette.addColorStop(0, "transparent"); vignette.addColorStop(1, "rgba(0,2,5,.68)"); ctx.fillStyle = vignette; ctx.fillRect(0, 0, width, height);
}

function drawStationDocking() {
  const progress = smoothstep(.25, 3.05, stationDocking.time); const shipY = 1230 + (stationLayout.kestrel.y - 1230) * progress;
  drawStationInterior({ docking: true, shipY });
  ctx.fillStyle = "#010307"; ctx.fillRect(0, 0, width, 38); ctx.fillRect(0, height - 38, width, 38);
  ctx.fillStyle = "rgba(226,241,240,.8)"; ctx.font = "800 9px Inter, sans-serif"; ctx.textAlign = "left"; ctx.fillText("MERIDIAN RELAY · AUTOMATED DOCKING", 22, 23);
  ctx.textAlign = "right"; ctx.fillStyle = "#62dced"; ctx.fillText(progress < .55 ? "APPROACH" : progress < .94 ? "ALIGNMENT" : "BERTH SECURED", width - 22, 23);
  const fade = smoothstep(3.05, 3.4, stationDocking.time); if (fade) { ctx.fillStyle = `rgba(0,0,0,${fade * .55})`; ctx.fillRect(0, 0, width, height); }
}

function updateSpace(dt) {
  const turn = (keys.has("d") || keys.has("arrowright") ? 1 : 0) - (keys.has("a") || keys.has("arrowleft") ? 1 : 0);
  spaceShip.angle += turn * 2.15 * dt;
  const forwardX = Math.cos(spaceShip.angle); const forwardY = Math.sin(spaceShip.angle);
  const nearest = solarBodies.map((body, index) => { const p = bodyPosition(index); return { index, x: p.x, y: p.y, distance: Math.hypot(spaceShip.x - p.x, spaceShip.y - p.y), radius: body.radius }; }).sort((a, b) => a.distance - b.distance)[0];
  const station = stationPosition(); const stationDistance = Math.hypot(spaceShip.x - station.x, spaceShip.y - station.y);
  const thrusting = keys.has("w") || keys.has("arrowup");
  const radialSpeed = ((spaceShip.x - nearest.x) * spaceShip.vx + (spaceShip.y - nearest.y) * spaceShip.vy) / Math.max(1, nearest.distance);
  const pulseClearance = nearest.radius + (radialSpeed > 0 ? 4200 : 9000);
  spaceShip.pulse = thrusting && keys.has("shift") && nearest.distance > pulseClearance && stationDistance > orbitalStation.radius + 5200;
  const acceleration = spaceShip.pulse ? (ship.engine ? 5600 : 4700) : 480;
  if (thrusting) { spaceShip.vx += forwardX * acceleration * dt; spaceShip.vy += forwardY * acceleration * dt; }
  if (keys.has("s") || keys.has("arrowdown")) { spaceShip.vx -= forwardX * 360 * dt; spaceShip.vy -= forwardY * 360 * dt; }

  const sideX = -forwardY; const sideY = forwardX; const sideSpeed = spaceShip.vx * sideX + spaceShip.vy * sideY;
  spaceShip.vx -= sideX * sideSpeed * Math.min(1, dt * 1.25); spaceShip.vy -= sideY * sideSpeed * Math.min(1, dt * 1.25);
  const drag = Math.pow(spaceShip.pulse ? .9985 : .994, dt * 60); spaceShip.vx *= drag; spaceShip.vy *= drag;
  let speed = Math.hypot(spaceShip.vx, spaceShip.vy); const maxSpeed = spaceShip.pulse ? (ship.engine ? 8200 : 6800) : 720;
  if (speed > maxSpeed) { const scale = maxSpeed / speed; spaceShip.vx *= scale; spaceShip.vy *= scale; speed = maxSpeed; }
  if (!spaceShip.pulse && speed > 720) { const scale = Math.max(720, speed - 2800 * dt) / speed; spaceShip.vx *= scale; spaceShip.vy *= scale; }

  if (nearest.distance < nearest.radius + 3200 || stationDistance < orbitalStation.radius + 2400) {
    const damping = Math.pow(.965, dt * 60); spaceShip.vx *= damping; spaceShip.vy *= damping;
  }
  spaceShip.x += spaceShip.vx * dt; spaceShip.y += spaceShip.vy * dt;
  const approachZoom = nearest.distance < nearest.radius + 7200 || stationDistance < orbitalStation.radius + 6200 ? .105 : .035;
  const desiredZoom = approachZoom * spaceShip.viewScale;
  spaceShip.zoom += (desiredZoom - spaceShip.zoom) * Math.min(1, dt * 2.2);

  const target = currentSpaceTarget(); const targetDistance = Math.hypot(spaceShip.x - target.position.x, spaceShip.y - target.position.y);
  speed = Math.hypot(spaceShip.vx, spaceShip.vy);
  ui.location.textContent = `KEPLER REACH • ${spaceShip.pulse ? "PULSE TRAVEL" : "LOCAL FLIGHT"}`;
  ui.objectiveTitle.textContent = target.name;
  ui.objectiveCopy.textContent = `${target.subtitle} • Navigation lock active`;
  ui.objectiveCount.textContent = `${Math.round(targetDistance)} SU • ${Math.round(speed)} U/S`;
  ui.objective.style.width = `${Math.max(4, 100 - Math.min(100, targetDistance / 520))}%`;
  ui.tool.style.width = `${Math.min(100, speed / 82)}%`;

  if (!keys.has("e")) spaceShip.landingArmed = true;
  const planetApproach = target.type === "planet" && nearest.index === target.index && nearest.distance < nearest.radius + 520 && speed < 220;
  const stationApproach = target.type === "station" && stationDistance < orbitalStation.radius + 440 && speed < 145;
  if (planetApproach || stationApproach) {
    ui.interaction.hidden = false; ui.interactionKey.textContent = "E"; ui.interactionTitle.textContent = stationApproach ? "Dock with Meridian Relay" : `Land on ${planets[nearest.index].name}`;
    if (keys.has("e") && spaceShip.landingArmed) { spaceShip.landProgress += dt; if (spaceShip.landProgress >= .8) { if (stationApproach) dockAtStation(); else beginPlanetReentry(nearest.index); } }
    else spaceShip.landProgress = Math.max(0, spaceShip.landProgress - dt * 2);
    ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, spaceShip.landProgress / .8 * 100)}%`);
  } else { ui.interaction.hidden = true; spaceShip.landProgress = 0; }
}

function cycleSpaceTarget() {
  spaceShip.target = (spaceShip.target + 1) % (planets.length + 1);
  spaceShip.landProgress = 0;
  showToast(`TARGET LOCK • ${currentSpaceTarget().name}`);
}

function renderStationServices() {
  ui.stationHullStatus.textContent = `${Math.round(ship.hull)}%`; ui.stationWingStatus.textContent = `${Math.round(ship.wings)}%`;
  ui.stationSuitStatus.textContent = player.life >= 99 && player.exposure <= .5 ? "NOMINAL" : player.exposure > 50 ? "CONTAMINATED" : "SERVICE ADVISED";
  ui.stationRepair.disabled = player.inventory.ferrite < 4 || ship.hull >= 100 && ship.wings >= 100;
  ui.stationResupply.disabled = player.life >= 100 && player.exposure <= 0 && player.tool >= toolEnergyCapacity();
  ui.stationExchange.disabled = player.inventory.ferrite < 5;
}

function dockAtStation() {
  state.mode = "stationDocking"; state.panelOpen = false; stationVisited = true; stationDocking.time = 0; spaceShip.vx = 0; spaceShip.vy = 0; spaceShip.pulse = false; spaceShip.landProgress = 0; keys.clear();
  ui.stationServices.hidden = true; ui.targetControl.hidden = true; ui.orbitControl.hidden = true; ui.resources.hidden = true; ui.hotbar.hidden = true; ui.interaction.hidden = true;
  document.body.classList.add("station-cinematic"); saveGame({ preserveSurfaceShip: true });
}

function completeStationDocking() {
  state.mode = "stationInterior"; stationPlayer.x = stationLayout.playerSpawn.x; stationPlayer.y = stationLayout.playerSpawn.y; stationPlayer.vx = 0; stationPlayer.vy = 0; stationPlayer.facing = 2; stationPlayer.undockProgress = 0; stationCamera.x = 0; stationCamera.y = 500;
  ui.resources.hidden = false; ui.hotbar.hidden = true; ui.toolLabel.textContent = "MULTI-TOOL"; ui.location.textContent = `${orbitalStation.name} • CONCOURSE`;
  ui.objectiveTitle.textContent = "Meridian Relay"; ui.objectiveCopy.textContent = "Station services are available at the operations terminal."; ui.objectiveCount.textContent = "DOCK 04 · KESTREL SECURE"; ui.objective.style.width = "100%";
  document.body.classList.remove("station-cinematic"); document.body.classList.add("station-mode"); keys.clear(); showToast("MERIDIAN RELAY · DOCKING COMPLETE");
}

function stationCollisionAt(x, y) {
  const radius = 9;
  if (x < -1382 + radius || x > 1382 - radius || y < -942 + radius || y > 942 - radius) return true;
  const rectangles = [
    [-1325, -825, -835, -585], [835, -825, 1325, -585], [-1325, -395, -1055, -175], [-795, -395, -525, -175], [525, -395, 795, -175], [1055, -395, 1325, -175],
    [-96, -945, 96, -829], [-92, 615, 92, 942],
  ];
  if (rectangles.some(([left, top, right, bottom]) => x + radius > left && x - radius < right && y + radius > top && y - radius < bottom)) return true;
  return stationTraffic.slots.some((traffic, index) => traffic && x + radius > stationLayout.docks[index].x - 90 && x - radius < stationLayout.docks[index].x + 90 && y + radius > 615 && y - radius < 942);
}

function beginStationTrafficArrival() {
  const available = stationLayout.docks.map((_, index) => index).filter(index => index !== stationLayout.kestrelDock && !stationTraffic.slots[index] && Math.hypot(stationPlayer.x - stationLayout.docks[index].x, stationPlayer.y - stationLayout.docks[index].y) > 230);
  if (!available.length || stationTraffic.slots.filter(Boolean).length >= 2) { stationTraffic.nextArrival = 8; return; }
  const dockIndex = available[Math.floor(Math.random() * available.length)]; const id = stationTraffic.nextId++; const raceIndex = (id - 1) % stationRaces.length; const race = stationRaces[raceIndex]; const shipType = Math.floor(Math.random() * stationShipTypes.length);
  stationTraffic.slots[dockIndex] = { id, phase: "landing", time: 0, dwell: 24 + Math.random() * 22, shipType, raceIndex, name: race.names[id % race.names.length], role: race.roles[id % race.roles.length] };
  stationTraffic.nextArrival = 20 + Math.random() * 28; showToast(`${stationShipTypes[shipType].name} · INBOUND TO DOCK ${stationLayout.docks[dockIndex].number}`);
}

function updateStationTraffic(dt) {
  stationTraffic.nextArrival -= dt; if (stationTraffic.nextArrival <= 0) beginStationTrafficArrival();
  stationTraffic.slots.forEach((traffic, index) => {
    if (!traffic) return; traffic.time += dt;
    if (traffic.phase === "landing" && traffic.time >= 3.2) { traffic.phase = "docked"; traffic.time = 0; showToast(`DOCK ${stationLayout.docks[index].number} · TRAVELER TRANSFER`); }
    else if (traffic.phase === "docked" && traffic.time >= traffic.dwell) { traffic.phase = "departing"; traffic.time = 0; showToast(`DOCK ${stationLayout.docks[index].number} · DEPARTURE CLEARED`); }
    else if (traffic.phase === "departing" && traffic.time >= 4.2) stationTraffic.slots[index] = null;
  });
}

function updateStationDocking(dt) {
  stationDocking.time += dt; ui.location.textContent = "MERIDIAN RELAY · DOCKING"; ui.objectiveTitle.textContent = "Automated Berthing";
  ui.objectiveCopy.textContent = "Meridian traffic control has assumed Kestrel guidance."; ui.objectiveCount.textContent = stationDocking.time < 1.8 ? "APPROACH" : stationDocking.time < 3.05 ? "ALIGNMENT" : "BERTH SECURED";
  ui.objective.style.width = `${Math.min(100, stationDocking.time / 3.4 * 100)}%`;
  if (stationDocking.time >= 3.4) completeStationDocking();
}

function updateStationInterior(dt) {
  updateStationTraffic(dt);
  let dx = (keys.has("d") || keys.has("arrowright") ? 1 : 0) - (keys.has("a") || keys.has("arrowleft") ? 1 : 0);
  let dy = (keys.has("s") || keys.has("arrowdown") ? 1 : 0) - (keys.has("w") || keys.has("arrowup") ? 1 : 0);
  if (dx || dy) {
    const length = Math.hypot(dx, dy); dx /= length; dy /= length;
    stationPlayer.facing = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 1 : 3) : (dy > 0 ? 0 : 2); stationPlayer.walkTime += dt;
  }
  const speed = keys.has("shift") ? 180 : 125;
  stationPlayer.vx += (dx * speed - stationPlayer.vx) * Math.min(1, dt * 11); stationPlayer.vy += (dy * speed - stationPlayer.vy) * Math.min(1, dt * 11);
  const nextX = stationPlayer.x + stationPlayer.vx * dt; if (!stationCollisionAt(nextX, stationPlayer.y)) stationPlayer.x = nextX; else stationPlayer.vx = 0;
  const nextY = stationPlayer.y + stationPlayer.vy * dt; if (!stationCollisionAt(stationPlayer.x, nextY)) stationPlayer.y = nextY; else stationPlayer.vy = 0;
  stationCamera.x += (stationPlayer.x - stationCamera.x) * Math.min(1, dt * 5); stationCamera.y += (stationPlayer.y - stationCamera.y) * Math.min(1, dt * 5);
  const viewScale = stationViewScale(); const maxCameraX = Math.max(0, stationLayout.halfWidth - width / (2 * viewScale) + 28); const maxCameraY = Math.max(0, stationLayout.halfHeight - height / (2 * viewScale) + 28);
  stationCamera.x = Math.max(-maxCameraX, Math.min(maxCameraX, stationCamera.x)); stationCamera.y = Math.max(-maxCameraY, Math.min(maxCameraY, stationCamera.y));

  const terminalDistance = Math.hypot(stationPlayer.x - stationLayout.terminal.x, stationPlayer.y - (stationLayout.terminal.y + 25));
  const shipDistance = Math.hypot(stationPlayer.x - stationLayout.kestrel.x, stationPlayer.y - (stationLayout.kestrel.y - 130));
  const nearbyTraveler = stationTraffic.slots.map((traffic, index) => {
    if (!traffic || traffic.phase !== "docked" || traffic.time < 1.2) return null; const position = stationNpcPosition(traffic, stationLayout.docks[index]);
    return { traffic, distance: Math.hypot(stationPlayer.x - position.x, stationPlayer.y - position.y) };
  }).filter(Boolean).sort((a, b) => a.distance - b.distance)[0];
  if (!keys.has("u")) stationPlayer.undockArmed = true; if (!keys.has("e")) stationPlayer.npcInteractArmed = true;
  if (terminalDistance < 55) {
    ui.interaction.hidden = false; ui.interactionKey.textContent = "E"; ui.interactionTitle.textContent = "Access operations terminal"; ui.interactionProgress.style.setProperty("--progress", "0%");
    if (keys.has("e")) openStationServices();
    stationPlayer.undockProgress = 0;
  } else if (shipDistance < 60) {
    ui.interaction.hidden = false; ui.interactionKey.textContent = "U"; ui.interactionTitle.textContent = "Board Kestrel and undock";
    if (keys.has("u") && stationPlayer.undockArmed) { stationPlayer.undockProgress += dt; if (stationPlayer.undockProgress >= .8) undockFromStation(); }
    else stationPlayer.undockProgress = Math.max(0, stationPlayer.undockProgress - dt * 2);
    ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, stationPlayer.undockProgress / .8 * 100)}%`);
  } else if (nearbyTraveler?.distance < 62) {
    const race = stationRaces[nearbyTraveler.traffic.raceIndex]; ui.interaction.hidden = false; ui.interactionKey.textContent = "E"; ui.interactionTitle.textContent = `Greet ${nearbyTraveler.traffic.name} · ${race.name} ${nearbyTraveler.traffic.role}`; ui.interactionProgress.style.setProperty("--progress", "0%");
    if (keys.has("e") && stationPlayer.npcInteractArmed) openStationDialogue(nearbyTraveler.traffic);
  } else { ui.interaction.hidden = true; stationPlayer.undockProgress = 0; }
  ui.tool.style.width = `${player.tool / toolEnergyCapacity() * 100}%`;
}

function openStationDialogue(traffic) {
  const race = stationRaces[traffic.raceIndex]; const portrait = stationRaceImages[traffic.raceIndex];
  state.panelOpen = true; stationPlayer.vx = 0; stationPlayer.vy = 0; stationPlayer.npcInteractArmed = false; ui.interaction.hidden = true;
  ui.stationDialogue.style.setProperty("--speaker-accent", race.accent); ui.stationDialogueMeta.textContent = `${race.name.toUpperCase()} · ${traffic.role.toUpperCase()} · ${stationShipTypes[traffic.shipType].name}`;
  ui.stationDialogueName.textContent = traffic.name; ui.stationDialogueText.textContent = race.greeting; ui.stationDialogueImage.src = portrait.src; ui.stationDialogueImage.alt = `${race.name} traveler ${traffic.name}`;
  ui.stationDialogue.hidden = false; keys.clear();
}

function closeStationDialogue() {
  if (ui.stationDialogue.hidden) return; ui.stationDialogue.hidden = true; ui.stationDialogueImage.removeAttribute("src"); ui.stationDialogueImage.alt = ""; state.panelOpen = false; keys.clear();
}

function openStationServices() {
  state.panelOpen = true; ui.stationServices.hidden = false; stationPlayer.vx = 0; stationPlayer.vy = 0; keys.delete("e"); renderStationServices();
}

function closeStationServices() {
  if (ui.stationServices.hidden) return;
  ui.stationServices.hidden = true; state.panelOpen = false; keys.clear(); saveGame({ preserveSurfaceShip: true });
}

function undockFromStation() {
  const station = stationPosition(); const distance = Math.hypot(station.x, station.y) || 1; const outwardX = station.x / distance; const outwardY = station.y / distance;
  spaceShip.x = station.x + outwardX * (orbitalStation.radius + 760); spaceShip.y = station.y + outwardY * (orbitalStation.radius + 760);
  spaceShip.vx = outwardX * 180; spaceShip.vy = outwardY * 180; spaceShip.angle = Math.atan2(outwardY, outwardX); spaceShip.zoom = .105; spaceShip.target = planets.length;
  state.mode = "space"; state.panelOpen = false; ui.stationServices.hidden = true; ui.resources.hidden = true; ui.hotbar.hidden = true; ui.targetControl.hidden = false; ui.orbitControl.hidden = true; ui.toolLabel.textContent = "SPD";
  document.body.classList.remove("station-mode", "station-cinematic"); keys.clear(); saveGame({ preserveSurfaceShip: true }); showToast("MERIDIAN RELAY · UNDOCKED");
}

function repairShipAtStation() {
  if (player.inventory.ferrite < 4 || ship.hull >= 100 && ship.wings >= 100) return;
  player.inventory.ferrite -= 4; ship.hull = 100; ship.wings = 100; updateUI(); renderStationServices(); saveGame({ preserveSurfaceShip: true }); showToast("KESTREL STRUCTURAL SERVICE COMPLETE");
}

function resupplyAtStation() {
  player.life = 100; player.exposure = 0; player.tool = toolEnergyCapacity(); updateUI(); renderStationServices(); saveGame({ preserveSurfaceShip: true }); showToast("EXOSUIT RESUPPLY COMPLETE");
}

function exchangeStationCargo() {
  if (player.inventory.ferrite < 5) return;
  player.inventory.ferrite -= 5; player.inventory.crystal += 1; updateUI(); renderStationServices(); saveGame({ preserveSurfaceShip: true }); showToast("CARGO EXCHANGE · +1 CRYSTAL");
}

function nearestTarget() {
  let best = null; let distance = toolRange();
  for (const o of world) { if (!o.alive || !["flora", "ferrite", "crystal", "ore"].includes(o.type)) continue; const d = Math.hypot(player.x - o.x, player.y - o.y); if (d < distance) { distance = d; best = o; } }
  for (const entrance of world.filter(object => object.alive && object.type === "caveEntrance")) {
    const d = Math.hypot(player.x - entrance.x, player.y - entrance.y);
    if (d < 92 && (!best || d < distance)) { distance = d; best = entrance; }
  }
  for (const creature of creatures) {
    const sampleable = !creature.hostile && creatureKnown(creature) && selectedHotbarItem() === "bio_syringe" && !creature.sampled;
    if (!creature.alive || (!creature.hostile && creatureKnown(creature) && !sampleable) || (creature.species.nocturnal && (creature.emergence ?? 0) < .65)) continue;
    const d = Math.hypot(player.x - creature.x, player.y - creature.y);
    if (d < toolRange() + 14 && (!best || d < distance)) { distance = d; best = { type: "creature", creature, x: creature.x, y: creature.y }; }
  }
  for (const piece of basePieces[state.planet]) {
    if (!["habitat", "craftingTable"].includes(piece.type)) continue;
    const d = Math.hypot(player.x - piece.x, player.y - piece.y);
    if (d < 110 && (!best || d < distance)) { distance = d; best = { type: piece.type === "habitat" ? "baseEntrance" : "craftingTable", piece, x: piece.x, y: piece.y }; }
  }
  const shipDistance = Math.hypot(player.x - ship.x, player.y - ship.y);
  if (!shipRecall.active && shipDistance < 68 && (!best || shipDistance < distance)) return { type: "ship", x: ship.x, y: ship.y };
  return best;
}

function aimPlayerAt(x, y) {
  const dx = x - player.x; const dy = y - player.y;
  player.angle = Math.atan2(dy, dx);
  player.facing = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 1 : 3) : (dy > 0 ? 0 : 2);
}

function drawCreatureScanner() {
  const creature = state.scanning; if (!creature?.alive) return;
  const s = screenPoint(creature.x, creature.y); const radiusX = creature.hostile ? 62 : 56; const radiusY = creature.hostile ? 45 : 41;
  const progress = Math.min(1, (creature.scanProgress || 0) / 1.15);
  ctx.save(); ctx.translate(s.x, s.y - 5); ctx.strokeStyle = "rgba(98,220,237,.9)"; ctx.fillStyle = "rgba(98,220,237,.9)"; ctx.lineWidth = 1.5;
  for (const [x, y, sx, sy] of [[-radiusX,-radiusY,1,1],[radiusX,-radiusY,-1,1],[-radiusX,radiusY,1,-1],[radiusX,radiusY,-1,-1]]) {
    ctx.beginPath(); ctx.moveTo(x, y + sy * 12); ctx.lineTo(x, y); ctx.lineTo(x + sx * 12, y); ctx.stroke();
  }
  ctx.globalAlpha = .28; ctx.beginPath(); ctx.arc(0, 0, 28, -Math.PI / 2, -Math.PI / 2 + TAU * progress); ctx.stroke();
  ctx.globalAlpha = .9; ctx.fillRect(-2, -2, 4, 4); ctx.restore();
}

const SOLAR_PANEL_MAX_OUTPUT = 14;
const GENERATOR_OUTPUT = 22;
const ENTRANCE_POWER_COST = 3;
const BATTERY_CAPACITY = 200;
const BATTERY_MAX_OUTPUT = 18;
const BATTERY_MAX_CHARGE_RATE = 14;
const BATTERY_ENERGY_SECONDS = 30;
const POWER_PRIORITY = { generator: 0, room: 10, waterPump: 20, storage: 30, workLight: 40, refinery: 50, exosuitStation: 55, planter: 60, medStation: 70, greenhouse: 80 };

function solarPanelEnergyOutput(piece, planetIndex = state.planet) {
  const circumference = planetSurfaceCircumferences[planetIndex];
  const lighting = planetLighting(planetIndex, piece.x / circumference, -piece.y / (circumference * .25));
  const storm = stormSnapshot(planetIndex); const weatherEfficiency = 1 - storm.intensity * storm.solarLoss;
  return SOLAR_PANEL_MAX_OUTPUT * lighting.daylight * weatherEfficiency;
}

function structureEnergyCost(piece) {
  return piece?.starter ? 0 : buildTypes[piece?.type]?.energy || 0;
}

let powerNetworkCache = { frame: -1, planet: -1, result: null };
function basePowerNetwork() {
  if (powerNetworkCache.frame === frameSerial && powerNetworkCache.planet === state.planet) return powerNetworkCache.result;
  const surfacePieces = basePieces[state.planet]; const subsurfacePieces = undergroundPieces[state.planet];
  const surfaceById = new Map(surfacePieces.map(piece => [piece.id, piece]));
  const subsurfaceById = new Map(subsurfacePieces.map(piece => [piece.id, piece]));
  const connectedSolarIds = new Set(); const connectedSurfaceBatteryIds = new Set(); const connectedUndergroundBatteryIds = new Set(); const solarChargeBatteryIds = new Set(); const solarChargePanelIds = new Set();
  const wiredEntranceIds = new Set(); const wiredSurfaceLoadIds = new Set();
  for (const wire of surfaceWires[state.planet]) {
    const a = surfaceById.get(wire.a); const b = surfaceById.get(wire.b); if (!a || !b) continue;
    if (a.type === "solarPanel") connectedSolarIds.add(a.id); if (b.type === "solarPanel") connectedSolarIds.add(b.id);
    if (a.type === "battery") connectedSurfaceBatteryIds.add(a.id); if (b.type === "battery") connectedSurfaceBatteryIds.add(b.id);
    if (a.type === "solarPanel" && b.type === "battery") { solarChargePanelIds.add(a.id); solarChargeBatteryIds.add(b.id); }
    if (b.type === "solarPanel" && a.type === "battery") { solarChargePanelIds.add(b.id); solarChargeBatteryIds.add(a.id); }
    const sourceA = ["solarPanel", "battery"].includes(a.type); const sourceB = ["solarPanel", "battery"].includes(b.type);
    const load = sourceA && !sourceB ? b : sourceB && !sourceA ? a : null;
    if (load?.type === "habitat") wiredEntranceIds.add(load.id);
    else if (load && buildTypes[load.type]?.energy) wiredSurfaceLoadIds.add(load.id);
  }
  for (const wire of undergroundWires[state.planet]) {
    const a = subsurfaceById.get(wire.a); const b = subsurfaceById.get(wire.b);
    if (a?.type === "battery") connectedUndergroundBatteryIds.add(a.id); if (b?.type === "battery") connectedUndergroundBatteryIds.add(b.id);
  }
  const solarOutputById = new Map(surfacePieces.filter(piece => piece.type === "solarPanel").map(piece => [piece.id, solarPanelEnergyOutput(piece)]));
  const onlineSolarIds = new Set([...connectedSolarIds].filter(id => (solarOutputById.get(id) || 0) > .05));
  const solarProduction = [...connectedSolarIds].reduce((total, id) => total + (solarOutputById.get(id) || 0), 0);
  const directSolarChargeProduction = [...solarChargePanelIds].reduce((total, id) => total + (solarOutputById.get(id) || 0), 0);
  const connectedBatteryPieces = [
    ...[...connectedSurfaceBatteryIds].map(id => surfaceById.get(id)),
    ...[...connectedUndergroundBatteryIds].map(id => subsurfaceById.get(id)),
  ].filter(Boolean);
  const chargeableBatteryPieces = [...solarChargeBatteryIds].map(id => surfaceById.get(id)).filter(Boolean);
  const batteryPotential = connectedBatteryPieces.reduce((total, battery) => total + ((battery.charge || 0) > .001 ? BATTERY_MAX_OUTPUT : 0), 0);

  const reachableIds = new Set(); const starter = subsurfacePieces.find(piece => piece.starter);
  const pending = [];
  if (starter && wiredEntranceIds.size) { reachableIds.add(starter.id); pending.push(starter.id); }
  for (const id of connectedUndergroundBatteryIds) if (!reachableIds.has(id)) { reachableIds.add(id); pending.push(id); }
  if (pending.length) {
    while (pending.length) {
      const id = pending.pop();
      for (const wire of undergroundWires[state.planet]) {
        const neighbor = wire.a === id ? wire.b : wire.b === id ? wire.a : null;
        if (neighbor !== null && !reachableIds.has(neighbor) && subsurfaceById.has(neighbor)) { reachableIds.add(neighbor); pending.push(neighbor); }
      }
    }
  }

  let generationCapacity = solarProduction + batteryPotential; let consumption = 0;
  const poweredIds = new Set(); const poweredSurfaceIds = new Set(); const poweredEntranceIds = new Set(); const activeGeneratorIds = new Set();
  const allocate = (piece, targetSet, cost = structureEnergyCost(piece)) => {
    if (generationCapacity - consumption + .001 < cost) return false;
    consumption += cost; targetSet.add(piece.id); return true;
  };
  for (const id of connectedSurfaceBatteryIds) poweredSurfaceIds.add(id);
  for (const id of connectedUndergroundBatteryIds) poweredIds.add(id);
  for (const id of [...wiredEntranceIds].sort((a, b) => a - b)) {
    const entrance = surfaceById.get(id); if (entrance && allocate(entrance, poweredSurfaceIds, ENTRANCE_POWER_COST)) poweredEntranceIds.add(id);
  }
  if (starter && poweredEntranceIds.size) poweredIds.add(starter.id);
  else if (starter && reachableIds.has(starter.id)) allocate(starter, poweredIds, ENTRANCE_POWER_COST);

  const reachablePieces = [...reachableIds].map(id => subsurfaceById.get(id)).filter(piece => piece && !piece.starter);
  for (const generator of reachablePieces.filter(piece => piece.type === "generator").sort((a, b) => a.id - b.id)) {
    if (!allocate(generator, poweredIds)) continue;
    activeGeneratorIds.add(generator.id); generationCapacity += GENERATOR_OUTPUT;
  }
  const loads = [
    ...[...wiredSurfaceLoadIds].map(id => surfaceById.get(id)).filter(Boolean),
    ...reachablePieces.filter(piece => !["generator", "battery"].includes(piece.type)),
  ].sort((a, b) => (POWER_PRIORITY[a.type] ?? 100) - (POWER_PRIORITY[b.type] ?? 100) || a.id - b.id);
  for (const piece of loads) allocate(piece, surfaceById.has(piece.id) ? poweredSurfaceIds : poweredIds);

  const localStarterDemand = starter && reachableIds.has(starter.id) && !wiredEntranceIds.size ? ENTRANCE_POWER_COST : 0;
  const demand = wiredEntranceIds.size * ENTRANCE_POWER_COST + localStarterDemand
    + [...wiredSurfaceLoadIds].reduce((total, id) => total + structureEnergyCost(surfaceById.get(id)), 0)
    + reachablePieces.reduce((total, piece) => total + structureEnergyCost(piece), 0);
  const generatorProduction = activeGeneratorIds.size * GENERATOR_OUTPUT; const nonBatteryProduction = solarProduction + generatorProduction;
  const batteryDischarge = Math.min(batteryPotential, Math.max(0, consumption - nonBatteryProduction));
  const batteryChargePower = batteryDischarge > .001 ? 0 : Math.min(chargeableBatteryPieces.length * BATTERY_MAX_CHARGE_RATE, directSolarChargeProduction, Math.max(0, solarProduction - consumption));
  const generation = nonBatteryProduction + batteryDischarge; const onlineBatteryIds = new Set(connectedBatteryPieces.filter(battery => (battery.charge || 0) > .001 || solarChargeBatteryIds.has(battery.id) && batteryChargePower > .001).map(battery => battery.id));
  const result = {
    connectedSolarIds, onlineSolarIds, connectedSurfaceBatteryIds, connectedUndergroundBatteryIds, solarChargePanelIds, solarChargeBatteryIds, connectedBatteryPieces, chargeableBatteryPieces, onlineBatteryIds,
    wiredEntranceIds, poweredEntranceIds, poweredSurfaceIds, activeGeneratorIds, poweredIds, reachableIds,
    solarOutputById, solarProduction, directSolarChargeProduction, generatorProduction, batteryPotential, batteryDischarge, batteryChargePower, generation, generationCapacity, consumption, demand,
    availablePower: Math.max(0, nonBatteryProduction - consumption), overloaded: demand > generationCapacity + .001,
    surfaceById, subsurfaceById, surfaceOnline: poweredEntranceIds.size > 0 || Boolean(starter && poweredIds.has(starter.id)),
  };
  powerNetworkCache = { frame: frameSerial, planet: state.planet, result }; return result;
}

let batterySaveElapsed = 0;
function updateBatterySystems(dt) {
  const network = basePowerNetwork(); if (!network.connectedBatteryPieces.length) return;
  let changed = false; let remainingDischarge = network.batteryDischarge * dt / BATTERY_ENERGY_SECONDS;
  if (remainingDischarge > 0) for (const battery of network.connectedBatteryPieces.filter(piece => (piece.charge || 0) > 0)) {
    const amount = Math.min(battery.charge || 0, remainingDischarge); battery.charge = Math.max(0, (battery.charge || 0) - amount); remainingDischarge -= amount; changed ||= amount > 0;
    if (remainingDischarge <= .0001) break;
  }
  let remainingCharge = network.batteryChargePower * dt / BATTERY_ENERGY_SECONDS;
  if (remainingCharge > 0) for (const battery of network.chargeableBatteryPieces.filter(piece => (piece.charge || 0) < BATTERY_CAPACITY)) {
    const amount = Math.min(BATTERY_CAPACITY - (battery.charge || 0), remainingCharge); battery.charge = Math.min(BATTERY_CAPACITY, (battery.charge || 0) + amount); remainingCharge -= amount; changed ||= amount > 0;
    if (remainingCharge <= .0001) break;
  }
  if (!changed) return;
  powerNetworkCache.frame = -1; batterySaveElapsed += dt;
  if (batterySaveElapsed >= 5) { batterySaveElapsed = 0; scheduleAutosave(); }
}

const WATER_TANK_CAPACITY = 100;
const WATER_PER_SPRINKLE = 5;
let waterNetworkCache = { frame: -1, planet: -1, result: null };

function baseWaterNetwork() {
  if (waterNetworkCache.frame === frameSerial && waterNetworkCache.planet === state.planet) return waterNetworkCache.result;
  const surfacePieces = basePieces[state.planet]; const subsurfacePieces = undergroundPieces[state.planet];
  const surfaceById = new Map(surfacePieces.map(piece => [piece.id, piece])); const subsurfaceById = new Map(subsurfacePieces.map(piece => [piece.id, piece]));
  const wetTankIds = new Set(); const pumpTankLinks = []; const pumpEntranceLinks = [];
  for (const pipe of surfaceWaterPipes[state.planet]) {
    const a = surfaceById.get(pipe.a); const b = surfaceById.get(pipe.b); if (!a || !b) continue;
    const pump = a.type === "waterPump" ? a : b.type === "waterPump" ? b : null;
    const tank = a.type === "waterTank" ? a : b.type === "waterTank" ? b : null;
    const entrance = a.type === "habitat" ? a : b.type === "habitat" ? b : null;
    const pumpHasSource = pump && basePowerNetwork().poweredSurfaceIds.has(pump.id) && (state.planet !== 0 || pointInSurfaceLake(pump.x, pump.y, -buildTypes.waterPump.radius * BUILD_SCALE * .35));
    if (pumpHasSource && tank) { wetTankIds.add(tank.id); pumpTankLinks.push({ pumpId: pump.id, tankId: tank.id }); }
    if (pump && entrance) pumpEntranceLinks.push({ pumpId: pump.id, entranceId: entrance.id });
  }
  const suppliedTankIds = new Set(); const suppliedEntranceIds = new Set();
  for (const entranceLink of pumpEntranceLinks) {
    for (const tankLink of pumpTankLinks) {
      if (tankLink.pumpId !== entranceLink.pumpId) continue;
      const tank = surfaceById.get(tankLink.tankId);
      if (tank && (tank.water || 0) > 0) { suppliedTankIds.add(tank.id); suppliedEntranceIds.add(entranceLink.entranceId); }
    }
  }
  const irrigatedGreenhouseIds = new Set(); const starter = subsurfacePieces.find(piece => piece.starter);
  if (starter && suppliedEntranceIds.size) for (const pipe of undergroundWaterPipes[state.planet]) {
    const a = subsurfaceById.get(pipe.a); const b = subsurfaceById.get(pipe.b); if (!a || !b) continue;
    if (a.id === starter.id && b.type === "greenhouse") irrigatedGreenhouseIds.add(b.id);
    else if (b.id === starter.id && a.type === "greenhouse") irrigatedGreenhouseIds.add(a.id);
  }
  const result = {
    surfaceById, subsurfaceById, wetTankIds, suppliedTankIds, suppliedEntranceIds, irrigatedGreenhouseIds,
    supplyTanks: [...suppliedTankIds].map(id => surfaceById.get(id)).filter(Boolean),
  };
  waterNetworkCache = { frame: frameSerial, planet: state.planet, result }; return result;
}

function updateWaterSystems(dt) {
  const worldDelta = dt * settings.cycleSpeed; const cycle = planetCycles[state.planet];
  let network = baseWaterNetwork(); let waterChanged = false;
  if (worldDelta > 0) for (const tankId of network.wetTankIds) {
    const tank = network.surfaceById.get(tankId); if (!tank) continue;
    const previous = tank.water || 0; tank.water = Math.min(WATER_TANK_CAPACITY, previous + worldDelta / (cycle.dayLength * 5 / 24) * WATER_TANK_CAPACITY);
    waterChanged ||= tank.water !== previous; tank.waterUpdatedAt = state.worldTime;
  }
  if (waterChanged) { waterNetworkCache.frame = -1; network = baseWaterNetwork(); }
  const poweredIds = basePowerNetwork().poweredIds; const sprinklerInterval = cycle.dayLength * 5 / 24; const growthDuration = cycle.dayLength * 4;
  for (const greenhouse of undergroundPieces[state.planet].filter(piece => piece.type === "greenhouse")) {
    greenhouse.sprinklerPulse = Math.max(0, (greenhouse.sprinklerPulse || 0) - dt);
    greenhouse.growth = Math.max(0, Math.min(1, greenhouse.growth || 0));
    greenhouse.lastSprinklerWorldTime ??= state.worldTime;
    const irrigated = network.irrigatedGreenhouseIds.has(greenhouse.id) && poweredIds.has(greenhouse.id) && network.supplyTanks.some(tank => (tank.water || 0) > 0);
    if (irrigated && worldDelta > 0) greenhouse.growth = Math.min(1, greenhouse.growth + worldDelta / growthDuration);
    if (irrigated && state.worldTime - greenhouse.lastSprinklerWorldTime >= sprinklerInterval) {
      const tank = network.supplyTanks.find(candidate => (candidate.water || 0) >= WATER_PER_SPRINKLE);
      if (tank) {
        tank.water -= WATER_PER_SPRINKLE; greenhouse.lastSprinklerWorldTime = state.worldTime; greenhouse.sprinklerPulse = 3;
        waterNetworkCache.frame = -1;
        if (state.mode === "baseInterior") showToast("GREENHOUSE IRRIGATION CYCLE");
      }
    }
    if (greenhouse.growth < 1) continue;
    const pieces = undergroundPieces[state.planet];
    const capacity = pieces.filter(piece => piece.type === "storage").length * 40 + pieces.filter(piece => piece.type === "room" && !piece.starter).length * 10 + pieces.filter(piece => piece.type === "greenhouse").length * 40;
    const stored = Object.values(baseStorage[state.planet]).reduce((total, amount) => total + amount, 0);
    if (capacity - stored < 5) continue;
    baseStorage[state.planet].flora += 5; greenhouse.growth = 0; greenhouse.lastSprinklerWorldTime = state.worldTime;
    saveGame(); if (state.mode === "baseInterior") showToast("GREENHOUSE HARVEST · +5 FLORA");
  }
}

function undergroundBaseMetrics() {
  const pieces = undergroundPieces[state.planet]; const network = basePowerNetwork();
  let generators = 0; let storageUnits = 0; let rooms = 0; let greenhouses = 0; let planters = 0; let medStations = 0; let exosuitStations = 0;
  for (const piece of pieces) {
    if (!network.poweredIds.has(piece.id)) continue;
    if (piece.type === "generator") generators++;
    else if (piece.type === "storage") storageUnits++;
    else if (piece.type === "room" && !piece.starter) rooms++;
    else if (piece.type === "greenhouse") greenhouses++;
    else if (piece.type === "planter") planters++;
    else if (piece.type === "medStation") medStations++;
    else if (piece.type === "exosuitStation") exosuitStations++;
  }
  const solarPanels = network.connectedSolarIds.size;
  const capacity = storageUnits * 40 + rooms * 10 + greenhouses * 40;
  const stored = Object.values(baseStorage[state.planet]).reduce((total, amount) => total + amount, 0);
  const productionInterval = Math.max(18, 45 - rooms * 4);
  const powerRate = network.availablePower / 8;
  const water = baseWaterNetwork(); const waterStored = water.supplyTanks.reduce((total, tank) => total + (tank.water || 0), 0);
  return { generators, solarPanels, storageUnits, rooms, greenhouses, planters, medStations, exosuitStations, capacity, stored, powered: network.consumption > .001, powerRate, productionInterval, network, water, waterStored };
}

function thalassanShelterStatus() {
  if (state.planet !== 0) return { complete: false, entrance: false, powered: false };
  const entrance = basePieces[0].some(piece => piece.type === "habitat");
  const network = basePowerNetwork();
  const powered = entrance && network.poweredEntranceIds.size > 0 && network.poweredIds.size > 0;
  return { complete: powered, entrance, powered };
}

function campaignObjectiveData() {
  if (campaign.rewardClaimed) return { title: "First Footfall Complete", copy: "Verdite Bio-Helmet fabrication is available at powered Exosuit Stations.", count: "BLUEPRINT UNLOCKED", progress: 100 };
  if (campaign.stage === 0) {
    const fuel = launchFuelCount();
    return { title: "Fuel the Kestrel", copy: "Fabricate Launch Fuel from 2 Carbon Biomass and 1 Crystal at a crafting table.", count: fuel ? `${fuel} FUEL READY` : "LAUNCH FUEL REQUIRED", progress: fuel ? 100 : 0 };
  }
  if (campaign.stage === 1) {
    if (state.planet !== 0) return { title: "Thalassan Foothold", copy: "Return to Thalassa and establish a powered underground shelter.", count: "THALASSA REQUIRED", progress: 0 };
    const shelter = thalassanShelterStatus();
    return { title: "Power a Shelter", copy: shelter.entrance ? "Wire the underground entrance to an active solar panel or charged battery." : "Deploy an underground entrance, then connect it to a power source.", count: shelter.powered ? "SHELTER ONLINE" : shelter.entrance ? "ENTRANCE OFFLINE" : "ENTRANCE REQUIRED", progress: shelter.powered ? 100 : shelter.entrance ? 50 : 0 };
  }
  if (campaign.stage === 2) {
    const samples = materialAmount("thalassa_sample");
    return { title: "Thalassan Field Biology", copy: state.planet === 0 ? "Analyze peaceful fauna, equip a Bio-Syringe, and collect a viable sample." : "Return to Thalassa and collect a fauna sample.", count: `${Math.min(1, samples)} / 1 FAUNA SAMPLE`, progress: samples ? 100 : 0 };
  }
  return { title: "Return to the Kestrel", copy: "Access the mission terminal on the flight deck to transmit the expedition report.", count: "DEBRIEF READY", progress: 100 };
}

function renderCampaignObjective() {
  const objective = campaignObjectiveData();
  ui.objectiveTitle.textContent = objective.title; ui.objectiveCopy.textContent = objective.copy;
  ui.objectiveCount.textContent = objective.count; ui.objective.style.width = `${objective.progress}%`;
}

function updateCampaignProgress() {
  let nextStage = campaign.stage;
  if (nextStage === 0 && ship.repaired) nextStage = 1;
  if (nextStage === 1 && thalassanShelterStatus().complete) nextStage = 2;
  if (nextStage === 2 && materialAmount("thalassa_sample") > 0) nextStage = 3;
  if (nextStage === campaign.stage) return;
  campaign.stage = nextStage; renderCampaignObjective(); renderMissionTerminal(); saveGame();
  showToast(nextStage === 1 ? "MISSION UPDATED · ESTABLISH SHELTER" : nextStage === 2 ? "MISSION UPDATED · COLLECT FAUNA SAMPLE" : "MISSION COMPLETE · RETURN TO KESTREL");
}

function renderMissionTerminal() {
  if (!ui.missionTerminal || ui.missionTerminal.hidden) return;
  ui.missionTerminalStatus.textContent = campaign.rewardClaimed ? "EXPEDITION ARCHIVED" : campaign.stage >= 3 ? "DEBRIEF AVAILABLE" : "ACTIVE EXPEDITION";
  ui.missionTerminalStages.innerHTML = campaignStages.map((stage, index) => {
    const complete = campaign.stage > index || campaign.rewardClaimed; const active = !complete && campaign.stage === index;
    return `<section class="mission-stage ${complete ? "complete" : active ? "active" : ""}"><b>${complete ? "✓" : String(index + 1).padStart(2, "0")}</b><strong>${stage.title}</strong><span>${stage.copy}</span></section>`;
  }).join("");
  ui.missionTerminalAction.disabled = campaign.stage < 3 || campaign.rewardClaimed;
  ui.missionTerminalAction.textContent = campaign.rewardClaimed ? "BLUEPRINT RECEIVED" : campaign.stage >= 3 ? "TRANSMIT REPORT" : "EXPEDITION IN PROGRESS";
}

function openMissionTerminal() {
  closeQuickMenu(); closePlanetMap(); closeShipInventory(); closeDiscoveries(); closeUpgrades(); closeRefinery(); closeCraftingTable();
  ui.missionTerminal.hidden = false; state.panelOpen = true; interiorPlayer.vx = 0; interiorPlayer.vy = 0; keys.delete("e"); renderMissionTerminal();
}

function closeMissionTerminal() {
  if (ui.missionTerminal.hidden) return;
  ui.missionTerminal.hidden = true; state.panelOpen = false; saveGame();
}

function claimCampaignReward() {
  if (campaign.stage < 3 || campaign.rewardClaimed) return;
  campaign.rewardClaimed = true; campaign.blueprintUnlocked = true; addItem("circuit_board", 2); player.inventory.crystal += 3;
  updateUI(); renderMissionTerminal(); renderCraftingPanel(); saveGame(); showToast("VERDITE BIO-HELMET BLUEPRINT UNLOCKED");
}

function updateBaseSystemsPanel(metrics = undergroundBaseMetrics()) {
  const vault = baseStorage[state.planet];
  const powerText = metrics.network.connectedSolarIds.size || metrics.network.connectedBatteryPieces.length
    ? `${metrics.network.generation.toFixed(1)} KW · LOAD ${metrics.network.consumption.toFixed(0)}/${metrics.network.demand.toFixed(0)}`
    : "ENTRANCE UNWIRED";
  const vaultText = `${metrics.stored}/${metrics.capacity} · F${vault.ferrite} C${vault.flora} X${vault.crystal}`;
  let synthesisText;
  if (!metrics.powered) synthesisText = metrics.network.connectedSolarIds.size || metrics.network.connectedBatteryPieces.length ? "NO AVAILABLE OUTPUT" : "POWER REQUIRED";
  else if (metrics.powerRate <= .01) synthesisText = "GRID AT CAPACITY";
  else if (!metrics.capacity) synthesisText = "VAULT REQUIRED";
  else if (metrics.stored >= metrics.capacity) synthesisText = "VAULT FULL";
  else synthesisText = metrics.greenhouses
    ? `WATER ${Math.floor(metrics.waterStored)} · ${metrics.water.irrigatedGreenhouseIds.size}/${metrics.greenhouses} GREENHOUSES`
    : `${metrics.planters ? "FERRITE + FLORA" : "FERRITE"} · ${Math.max(1, Math.ceil((metrics.productionInterval - baseProduction[state.planet]) / metrics.powerRate))}S`;
  if (ui.basePower.textContent !== powerText) ui.basePower.textContent = powerText;
  if (ui.baseVault.textContent !== vaultText) ui.baseVault.textContent = vaultText;
  if (ui.baseSynthesis.textContent !== synthesisText) ui.baseSynthesis.textContent = synthesisText;
}

function updateUndergroundObjective(metrics = undergroundBaseMetrics()) {
  if (!campaign.rewardClaimed) { renderCampaignObjective(); return; }
  let systems = 0; let online = 0;
  for (const piece of undergroundPieces[state.planet]) if (["room", "greenhouse", "storage", "generator", "refinery", "workLight", "planter", "medStation", "exosuitStation"].includes(piece.type)) {
    systems++; if (metrics.network.poweredIds.has(piece.id)) online++;
  }
  const title = metrics.network.overloaded ? "Power Grid Overloaded" : metrics.powered ? "Habitat Power Grid" : "Restore Habitat Power";
  const copy = metrics.network.overloaded ? "Generation is below connected demand. Add solar panels, a charged battery, or an online generator." : metrics.powered ? "Connected rooms and machinery are receiving power." : metrics.network.connectedSolarIds.size || metrics.network.connectedBatteryPieces.length ? "Available sources cannot energize the connected load." : "The base has no connected power source.";
  const count = `${online} / ${systems} SYSTEMS ONLINE`; const progress = `${systems ? online / systems * 100 : 0}%`;
  if (ui.objectiveTitle.textContent !== title) ui.objectiveTitle.textContent = title;
  if (ui.objectiveCopy.textContent !== copy) ui.objectiveCopy.textContent = copy;
  if (ui.objectiveCount.textContent !== count) ui.objectiveCount.textContent = count;
  if (ui.objective.style.width !== progress) ui.objective.style.width = progress;
}

function depositBaseCargo() {
  const metrics = undergroundBaseMetrics(); let remaining = Math.max(0, metrics.capacity - metrics.stored); let moved = 0;
  if (!remaining) { showToast(metrics.capacity ? "BASE VAULT FULL" : "BUILD STORAGE OR AN ADDITIONAL ROOM"); return; }
  for (const resource of ["ferrite", "flora", "crystal"]) {
    const amount = Math.min(player.inventory[resource], remaining);
    player.inventory[resource] -= amount; baseStorage[state.planet][resource] += amount; remaining -= amount; moved += amount;
  }
  if (!moved) { showToast("NO FIELD CARGO TO DEPOSIT"); return; }
  updateUI(); updateBaseSystemsPanel(); saveGame(); showToast(`${moved} UNITS SECURED IN BASE VAULT`);
}

function withdrawBaseCargo() {
  const vault = baseStorage[state.planet]; const moved = Object.values(vault).reduce((total, amount) => total + amount, 0);
  if (!moved) { showToast("BASE VAULT EMPTY"); return; }
  for (const resource of ["ferrite", "flora", "crystal"]) { player.inventory[resource] += vault[resource]; vault[resource] = 0; }
  updateUI(); updateBaseSystemsPanel(); saveGame(); showToast(`${moved} UNITS MOVED TO EXOSUIT`);
}

function enterUndergroundBase(entrance) {
  if (build.active) toggleBuildMode();
  underground.entranceId = entrance.id; underground.surfaceX = player.x; underground.surfaceY = player.y;
  underground.exitProgress = 0; underground.exitArmed = false; underground.transferArmed = false;
  const pieces = undergroundPieces[state.planet];
  if (!pieces.some(piece => piece.starter)) pieces.push({ id: nextBaseId++, type: "room", x: 0, y: 0, rotation: 0, cost: {}, starter: true });
  const discoveredCave = ensureInitialExcavation(); underground.digProgress = 0; underground.digKey = null;
  state.mode = "baseInterior"; resize(); state.enterProgress = 0; state.mineProgress = 0;
  player.x = 0; player.y = 58; player.vx = 0; player.vy = 0; camera.x = player.x; camera.y = player.y;
  ui.interaction.hidden = true; ui.location.textContent = `${planets[state.planet].name} · SUBSURFACE BASE`;
  ui.baseSystems.hidden = false; updateBaseSystemsPanel(); updateUndergroundObjective();
  document.body.classList.add("underground-mode"); saveGame(); showToast(discoveredCave ? "NATURAL CAVERN NETWORK DETECTED" : "ELEVATOR DESCENT COMPLETE");
}

function exitUndergroundBase(silent = false) {
  if (build.active) toggleBuildMode();
  state.mode = "planet"; resize(); underground.exitProgress = 0; underground.exitArmed = false;
  player.x = underground.surfaceX; player.y = underground.surfaceY; player.vx = 0; player.vy = 0;
  camera.x = player.x; camera.y = player.y; ui.interaction.hidden = true; ui.toolLabel.textContent = "MULTI-TOOL";
  const p = planets[state.planet]; ui.location.textContent = `${p.name} · ${p.type} · ${p.weather}`;
  updateUI();
  ui.baseSystems.hidden = true; document.body.classList.remove("underground-mode");
  if (!silent) { saveGame(); showToast("RETURNED TO SURFACE"); }
}

function enterNaturalCave(entrance) {
  naturalCave.active = generateNaturalCave(state.planet, entrance.entranceId); naturalCave.surfaceX = player.x; naturalCave.surfaceY = player.y;
  naturalCave.exitProgress = 0; naturalCave.exitArmed = false; naturalCave.doorProgress = 0; naturalCave.doorArmed = false;
  state.mode = "caveInterior"; resize(); state.enterProgress = 0; player.x = 0; player.y = 72; player.vx = 0; player.vy = 0; camera.x = player.x; camera.y = player.y;
  ui.interaction.hidden = true; ui.baseSystems.hidden = true; ui.location.textContent = `${planets[state.planet].name} · NATURAL CAVERN`;
  ui.objectiveTitle.textContent = "Subsurface Signal"; ui.objectiveCopy.textContent = "A constructed doorway is transmitting from deep inside the cavern."; ui.objectiveCount.textContent = "SIGNAL DISTANT"; ui.objective.style.width = "0%";
  document.body.classList.add("underground-mode"); saveGame(); showToast("CAVERN DESCENT COMPLETE");
}

function restoreSurfaceFromNaturalCave() {
  state.mode = "planet"; resize(); player.x = naturalCave.surfaceX; player.y = naturalCave.surfaceY + 74; player.vx = 0; player.vy = 0; camera.x = player.x; camera.y = player.y;
  naturalCave.exitProgress = 0; naturalCave.doorProgress = 0; ui.interaction.hidden = true; ui.baseSystems.hidden = true;
  const planet = planets[state.planet]; ui.location.textContent = `${planet.name} · ${planet.type} · ${planet.weather}`;
  updateUI(); document.body.classList.remove("underground-mode"); saveGame(); showToast("RETURNED TO SURFACE");
}

function enterMineshaft() {
  const door = naturalCave.active.door; mineshaft.returnX = door.x - Math.cos(door.angle) * 72; mineshaft.returnY = door.y - Math.sin(door.angle) * 72;
  mineshaft.exitProgress = 0; mineshaft.exitArmed = false; mineshaft.chestArmed = false; state.mode = "mineshaft";
  player.x = 0; player.y = 138; player.vx = 0; player.vy = 0; camera.x = player.x; camera.y = player.y; ui.interaction.hidden = true;
  ui.location.textContent = `${planets[state.planet].name} · ABANDONED MINESHAFT`; ui.objectiveTitle.textContent = "Salvage Survey"; ui.objectiveCopy.textContent = "Locate and log the remaining cargo chests.";
  showToast("ABANDONED MINESHAFT ENTERED");
}

function exitMineshaft() {
  const door = naturalCave.active.door;
  state.mode = "caveInterior"; player.x = door.x - Math.cos(door.angle) * 138; player.y = door.y - Math.sin(door.angle) * 138; player.vx = 0; player.vy = 0; camera.x = player.x; camera.y = player.y;
  mineshaft.exitProgress = 0; naturalCave.doorProgress = 0; naturalCave.doorArmed = false; naturalCave.doorCooldown = 1; keys.delete("e"); ui.interaction.hidden = true; ui.location.textContent = `${planets[state.planet].name} · NATURAL CAVERN`;
  ui.objectiveTitle.textContent = "Subsurface Signal"; ui.objectiveCopy.textContent = "The abandoned mineshaft doorway has been located."; ui.objectiveCount.textContent = "SIGNAL LOCATED"; ui.objective.style.width = "100%";
  saveGame(); showToast("RETURNED TO CAVERN");
}

function moveSubsurfacePlayer(dt, collisionAt) {
  let dx = (keys.has("d") || keys.has("arrowright") ? 1 : 0) - (keys.has("a") || keys.has("arrowleft") ? 1 : 0);
  let dy = (keys.has("s") || keys.has("arrowdown") ? 1 : 0) - (keys.has("w") || keys.has("arrowup") ? 1 : 0);
  if (dx || dy) { const length = Math.hypot(dx, dy); dx /= length; dy /= length; player.angle = Math.atan2(dy, dx); player.facing = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 1 : 3) : (dy > 0 ? 0 : 2); player.walkTime += dt * (keys.has("shift") ? 1.35 : 1); }
  const sprint = keys.has("shift") ? 1.55 : 1; const moveSpeed = playerMoveSpeed(); player.vx += (dx * moveSpeed * sprint - player.vx) * Math.min(1, dt * 9); player.vy += (dy * moveSpeed * sprint - player.vy) * Math.min(1, dt * 9);
  const nextX = player.x + player.vx * dt; if (!collisionAt(nextX, player.y)) player.x = nextX; else player.vx = 0;
  const nextY = player.y + player.vy * dt; if (!collisionAt(player.x, nextY)) player.y = nextY; else player.vy = 0;
  camera.x += (player.x - camera.x) * Math.min(1, dt * 5); camera.y += (player.y - camera.y) * Math.min(1, dt * 5);
}

function updateNaturalCave(dt) {
  const cave = naturalCave.active; if (!cave) { restoreSurfaceFromNaturalCave(); return; }
  state.harvesting = null;
  naturalCave.doorCooldown = Math.max(0, naturalCave.doorCooldown - dt);
  moveSubsurfacePlayer(dt, (x, y) => !areaInsideCells(cave.cells, x, y, 14));
  player.tool = Math.min(toolEnergyCapacity(), player.tool + dt * 4); ui.tool.style.width = `${player.tool / toolEnergyCapacity() * 100}%`;
  const exitDistance = Math.hypot(player.x, player.y); const doorDistance = Math.hypot(player.x - cave.door.x, player.y - cave.door.y); const nearestDeposit = nearestNaturalCaveDeposit();
  if (!keys.has("e")) { naturalCave.exitArmed = true; naturalCave.doorArmed = true; }
  if (exitDistance < 76) {
    state.mineProgress = 0; naturalCave.doorProgress = 0; ui.interaction.hidden = false; ui.interactionKey.textContent = "E"; ui.interactionTitle.textContent = "Climb to planetary surface";
    if (keys.has("e") && naturalCave.exitArmed) { naturalCave.exitProgress += dt; if (naturalCave.exitProgress >= .75) { keys.delete("e"); restoreSurfaceFromNaturalCave(); return; } }
    else naturalCave.exitProgress = Math.max(0, naturalCave.exitProgress - dt * 2);
    ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, naturalCave.exitProgress / .75 * 100)}%`);
  } else if (doorDistance < 88) {
    state.mineProgress = 0; naturalCave.exitProgress = 0; ui.interaction.hidden = false; ui.interactionKey.textContent = "E"; ui.interactionTitle.textContent = "Enter abandoned mineshaft";
    if (keys.has("e") && naturalCave.doorArmed && naturalCave.doorCooldown <= 0) { naturalCave.doorProgress += dt; if (naturalCave.doorProgress >= .8) { keys.delete("e"); enterMineshaft(); return; } }
    else naturalCave.doorProgress = Math.max(0, naturalCave.doorProgress - dt * 2);
    ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, naturalCave.doorProgress / .8 * 100)}%`);
  } else if (nearestDeposit) {
    naturalCave.exitProgress = 0; naturalCave.doorProgress = 0; ui.interaction.hidden = false; ui.interactionKey.textContent = "E"; ui.interactionTitle.textContent = `Extract ${nearestDeposit.name}`;
    if (keys.has("e") && toolReadyForUse()) {
      aimPlayerAt(nearestDeposit.x, nearestDeposit.y); state.harvesting = { x: nearestDeposit.x, y: nearestDeposit.y };
      state.mineProgress += dt * miningRate(); consumeToolEnergy(dt * (17 + nearestDeposit.hardness * 3)); camera.shake = 2.2;
      if (state.mineProgress >= nearestDeposit.hardness) {
        minedNaturalCaveDeposits.add(nearestDeposit.key);
        if (nearestDeposit.item) addItem(nearestDeposit.item, nearestDeposit.amount); else player.inventory[nearestDeposit.resource] += nearestDeposit.amount;
        const discoveryKey = `${state.planet}:cave:${nearestDeposit.name}`; const previous = discoveries.minerals.get(discoveryKey);
        discoveries.minerals.set(discoveryKey, { name: nearestDeposit.name, planet: state.planet, samples: (previous?.samples || 0) + 1 });
        state.mineProgress = 0; keys.delete("e"); updateUI(); saveGame(); showToast(`${nearestDeposit.name.toUpperCase()} · +${nearestDeposit.amount}`);
      }
    } else if (!keys.has("e")) state.mineProgress = Math.max(0, state.mineProgress - dt * 1.2);
    ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, state.mineProgress / nearestDeposit.hardness * 100)}%`);
  } else { state.mineProgress = 0; naturalCave.exitProgress = 0; naturalCave.doorProgress = 0; ui.interaction.hidden = true; }
  const totalDistance = Math.max(1, Math.hypot(cave.door.x, cave.door.y)); const progress = 1 - Math.min(1, doorDistance / totalDistance);
  ui.objective.style.width = `${progress * 100}%`; ui.objectiveCount.textContent = doorDistance < 900 ? "SIGNAL NEAR" : doorDistance < 2600 ? "SIGNAL CLOSING" : "SIGNAL DISTANT";
}

function mineshaftWalkable(x, y, radius = 14) {
  const areas = [[-62, -840, 62, 185], [-330, -350, 330, -165], [-330, -715, 330, -530]];
  return areas.some(([left, top, right, bottom]) => x - radius >= left && x + radius <= right && y - radius >= top && y + radius <= bottom);
}

function mineshaftChestPositions() { return [{ x: -238, y: -258 }, { x: 238, y: -622 }]; }

function updateMineshaft(dt) {
  moveSubsurfacePlayer(dt, (x, y) => !mineshaftWalkable(x, y));
  const chests = mineshaftChestPositions(); const nearestChest = chests.map((chest, index) => ({ ...chest, index, distance: Math.hypot(player.x - chest.x, player.y - chest.y) })).sort((a, b) => a.distance - b.distance)[0];
  const exitDistance = Math.hypot(player.x, player.y - 156); if (!keys.has("e")) { mineshaft.exitArmed = true; mineshaft.chestArmed = true; }
  if (exitDistance < 62) {
    ui.interaction.hidden = false; ui.interactionKey.textContent = "E"; ui.interactionTitle.textContent = "Return to natural cavern";
    if (keys.has("e") && mineshaft.exitArmed) { mineshaft.exitProgress += dt; if (mineshaft.exitProgress >= .65) { keys.delete("e"); exitMineshaft(); return; } }
    else mineshaft.exitProgress = Math.max(0, mineshaft.exitProgress - dt * 2);
    ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, mineshaft.exitProgress / .65 * 100)}%`);
  } else if (nearestChest.distance < 70) {
    mineshaft.exitProgress = 0; const chestKey = `${naturalCave.active.key}:${nearestChest.index}`; const opened = openedMineshaftChests.has(chestKey);
    ui.interaction.hidden = false; ui.interactionKey.textContent = "E"; ui.interactionTitle.textContent = opened ? "Salvage chest logged" : "Inspect salvage chest"; ui.interactionProgress.style.setProperty("--progress", "0%");
    if (!opened && keys.has("e") && mineshaft.chestArmed) { mineshaft.chestArmed = false; keys.delete("e"); openedMineshaftChests.add(chestKey); saveGame(); showToast("SALVAGE CACHE LOGGED"); }
  } else { mineshaft.exitProgress = 0; ui.interaction.hidden = true; }
  const logged = chests.filter((_, index) => openedMineshaftChests.has(`${naturalCave.active.key}:${index}`)).length;
  ui.objectiveCount.textContent = `${logged} / ${chests.length} CHESTS LOGGED`; ui.objective.style.width = `${logged / chests.length * 100}%`;
}

const refineryRecipes = {
  ferrite: { amount: 2, output: "iron_ingot", outputAmount: 1 },
  copper_ore: { amount: 2, output: "copper_ingot", outputAmount: 1 },
  silica: { amount: 2, output: "glass", outputAmount: 1 },
  resin_sap: { amount: 2, output: "latex", outputAmount: 1 },
  carbon_biomass: { amount: 2, output: "polymer_resin", outputAmount: 1 },
  verdite_ore: { amount: 2, output: "verdite_alloy", outputAmount: 1 },
  ignicite_ore: { amount: 2, output: "ignicite_alloy", outputAmount: 1 },
  cryocite_ore: { amount: 2, output: "cryocite_alloy", outputAmount: 1 },
};
function refineryDefinition(item) { return resourceDefinitions[item] || itemDefinitions[item] || { name: item.replace(/[_-]+/g, " "), color: "#8ca09b" }; }
function refineryRawAmount(item) { return item === "ferrite" ? player.inventory.ferrite : player.items[item] || 0; }
function changeRefineryRaw(item, amount) { if (item === "ferrite") player.inventory.ferrite += amount; else player.items[item] = Math.max(0, (player.items[item] || 0) + amount); }
function refineryInputDiscovered(item) {
  if (item === "ferrite") return true;
  if (["resin_sap", "carbon_biomass"].includes(item)) return discoveries.flora.size > 0;
  const name = refineryDefinition(item).name;
  return [...discoveries.minerals.values()].some(discovery => discovery?.name === name);
}
function refineryJob(pieceId = refineryUi.pieceId) {
  if (!refineryJobs.has(pieceId)) refineryJobs.set(pieceId, { input: null, inputAmount: 0, output: null, outputAmount: 0, progress: 0 });
  return refineryJobs.get(pieceId);
}
function refineryIcon(item) {
  const definition = refineryDefinition(item);
  return definition.icon ? `<img src="${definition.icon}" alt="">` : `<i style="--item-color:${definition.color || "#8ca09b"}"></i>`;
}
function refineryIsPowered() { return refineryUi.pieceId !== null && basePowerNetwork().poweredIds.has(refineryUi.pieceId); }
function renderRefineryPanel() {
  if (ui.refineryPanel.hidden || refineryUi.pieceId === null) return;
  const job = refineryJob();
  ui.refineryCargo.innerHTML = Object.entries(refineryRecipes).filter(([input]) => refineryInputDiscovered(input)).map(([input, recipe]) => {
    const definition = refineryDefinition(input); const amount = refineryRawAmount(input); const disabled = Boolean(job.input) || amount < recipe.amount || Boolean(job.output && job.output !== recipe.output);
    return `<button class="refinery-cargo-item" type="button" draggable="${!disabled}" data-refinery-input="${input}" ${disabled ? "disabled" : ""} data-item-name="${attributeText(definition.name)}" data-item-description="${attributeText(definition.description || "Raw refinery material.")}" aria-label="Load ${attributeText(definition.name)}. ${amount} available">${refineryIcon(input)}<b>${amount}</b></button>`;
  }).join("");
  ui.refineryInput.classList.toggle("filled", Boolean(job.input)); ui.refineryInput.innerHTML = job.input ? `${refineryIcon(job.input)}<b>${job.inputAmount}</b>` : "";
  ui.refineryOutput.classList.toggle("filled", Boolean(job.output)); ui.refineryOutput.innerHTML = job.output ? `${refineryIcon(job.output)}<b>${job.outputAmount}</b>` : "";
  ui.refineryOutput.disabled = !job.output; updateRefineryPanelStatus();
}
function updateRefineryPanelStatus() {
  if (ui.refineryPanel.hidden || refineryUi.pieceId === null) return;
  const job = refineryJob(); const powered = refineryIsPowered();
  ui.refineryPower.textContent = powered ? "POWER ONLINE" : "POWER OFFLINE"; ui.refineryPower.classList.toggle("online", powered);
  ui.refineryStatus.textContent = !powered ? "STATION OFFLINE" : job.input ? "PROCESSING" : job.output ? "OUTPUT READY" : "AWAITING INPUT";
  ui.refineryMeter.style.width = `${job.input ? Math.min(100, job.progress / 1.8 * 100) : 0}%`;
}
function loadRefineryInput(input) {
  const recipe = refineryRecipes[input]; if (!recipe || refineryUi.pieceId === null) return;
  const job = refineryJob();
  if (job.input || refineryRawAmount(input) < recipe.amount || job.output && job.output !== recipe.output) { showToast("REFINERY INPUT UNAVAILABLE"); return; }
  changeRefineryRaw(input, -recipe.amount); job.input = input; job.inputAmount = recipe.amount; job.progress = 0; updateUI(); renderRefineryPanel(); saveGame();
}
function updateRefineryProcessing(dt) {
  if (!refineryJobs.size) return;
  const poweredIds = basePowerNetwork().poweredIds; const currentPieceIds = new Set(undergroundPieces[state.planet].map(piece => piece.id)); let panelChanged = false;
  for (const [pieceId, job] of refineryJobs) {
    if (!currentPieceIds.has(pieceId) || !job.input || !poweredIds.has(pieceId)) continue;
    job.progress += dt; if (pieceId === refineryUi.pieceId) updateRefineryPanelStatus();
    if (job.progress < 1.8) continue;
    const recipe = refineryRecipes[job.input]; job.output = recipe.output; job.outputAmount += recipe.outputAmount; job.input = null; job.inputAmount = 0; job.progress = 0;
    panelChanged ||= pieceId === refineryUi.pieceId; saveGame(); showToast(`${itemDefinitions[job.output].name.toUpperCase()} READY`);
  }
  if (panelChanged) renderRefineryPanel(); else updateRefineryPanelStatus();
}
function collectRefineryOutput() {
  const job = refineryJob(); if (!job.output) return;
  const name = itemDefinitions[job.output].name; addItem(job.output, job.outputAmount); job.output = null; job.outputAmount = 0; updateUI(); renderRefineryPanel(); saveGame(); showToast(`${name.toUpperCase()} COLLECTED`);
}
function refundRefineryJob(pieceId) {
  const job = refineryJobs.get(pieceId); if (!job) return;
  if (job.input) changeRefineryRaw(job.input, job.inputAmount);
  if (job.output) addItem(job.output, job.outputAmount);
  refineryJobs.delete(pieceId);
}
function openRefinery(piece) {
  closeQuickMenu(); closePlanetMap(); closeShipInventory(); closeDiscoveries(); closeUpgrades(); closeCraftingTable();
  refineryUi.pieceId = piece.id; ui.refineryPanel.hidden = false; state.panelOpen = true; player.vx = 0; player.vy = 0; keys.delete("e"); renderRefineryPanel();
}
function closeRefinery() {
  if (ui.refineryPanel.hidden) return; ui.refineryPanel.hidden = true; refineryUi.pieceId = null; state.panelOpen = !ui.craftingPanel.hidden; ui.refineryInput.classList.remove("drop-ready"); saveGame();
}
function craftingTableIsPowered() {
  if (craftingUi.pieceId === null) return false;
  return craftingUi.station !== "exosuitStation" || basePowerNetwork().poweredIds.has(craftingUi.pieceId);
}
const craftingRecipeDefinitions = {
  launch_fuel: { category: "STARSHIP SUPPLY", description: "Stabilized organic propellant consumed during one planetary ascent.", ingredients: { carbon_biomass: 2, crystal: 1 } },
  copper_wire: { category: "COMPONENT", description: "Three basic insulated conductors drawn from raw copper ore.", ingredients: { copper_ore: 1 }, outputAmount: 3 },
  rubber: { category: "MATERIAL", description: "Two flexible sheets formed from latex and a carbon filler.", ingredients: { latex: 1, carbon_biomass: 1 }, outputAmount: 2 },
  plastic: { category: "MATERIAL", description: "Two lightweight panels formed from polymer resin.", ingredients: { polymer_resin: 1 }, outputAmount: 2 },
  pipe_segment: { category: "COMPONENT", description: "Three pressure-rated, rubber-sealed water conduit sections.", ingredients: { iron_ingot: 1, rubber: 1 }, outputAmount: 3 },
  glass_panel: { category: "COMPONENT", description: "Two reinforced transparent panels formed from refined glass.", ingredients: { glass: 1 }, outputAmount: 2 },
  pressure_seal: { category: "COMPONENT", description: "Two airtight flexible seals for modular structures.", ingredients: { rubber: 1, plastic: 1 }, outputAmount: 2 },
  circuit_board: { category: "COMPONENT", description: "Compact control electronics mounted on a polymer substrate.", ingredients: { copper_wire: 2, plastic: 1, crystal: 1 } },
  power_regulator: { category: "COMPONENT", description: "Insulated high-current controller for pumps and energy systems.", ingredients: { copper_wire: 2, iron_ingot: 1, rubber: 1, crystal: 1 } },
  habitat_module: { category: "BASE MODULE", description: "Surface entrance and elevator assembly.", ingredients: { ferrite: 6, crystal: 2 } },
  refinery_module: { category: "WORKSTATION", description: "Bootstrap ore processing and alloy production unit.", ingredients: { ferrite: 6, crystal: 2 } },
  room_module: { category: "BASE MODULE", description: "Pressure-sealed underground habitat room.", ingredients: { iron_ingot: 2, pressure_seal: 2, glass_panel: 1 } },
  hallway_module: { category: "BASE MODULE", description: "Corridor segment for linking base rooms.", ingredients: { iron_ingot: 1, pressure_seal: 1 } },
  storage_module: { category: "BASE MODULE", description: "Secured cargo storage and vault capacity.", ingredients: { iron_ingot: 2, pressure_seal: 1, plastic: 2 } },
  generator_module: { category: "POWER SYSTEM", description: "Generator assembly for the base power grid.", ingredients: { iron_ingot: 4, copper_wire: 3, power_regulator: 1, crystal: 2 } },
  solar_panel_module: { category: "POWER SYSTEM", description: "Bootstrap photovoltaic array with exposed crystalline collector cells.", ingredients: { ferrite: 5, copper_wire: 2, crystal: 3 } },
  field_light_module: { category: "POWER SYSTEM", description: "Efficient one-kilowatt area illumination unit.", ingredients: { copper_wire: 1, glass_panel: 1, crystal: 1 } },
  landing_pad_module: { category: "BASE MODULE", description: "Reinforced illuminated starship landing platform.", ingredients: { iron_ingot: 6, copper_wire: 4, circuit_board: 2 } },
  battery_module: { category: "POWER SYSTEM", description: "Portable 200 kW reserve battery that retains charge when recovered.", ingredients: { iron_ingot: 3, copper_wire: 4, power_regulator: 2, crystal: 3 } },
  water_pump_module: { category: "WATER SYSTEM", description: "Planetary intake pump for the surface irrigation network.", ingredients: { iron_ingot: 3, copper_wire: 3, rubber: 2, power_regulator: 1 } },
  water_tank_module: { category: "WATER SYSTEM", description: "Sealed reservoir for greenhouse irrigation water.", ingredients: { iron_ingot: 4, pressure_seal: 2, glass_panel: 1 } },
  planter_module: { category: "LIFE SUPPORT", description: "Powered cultivation bed for renewable flora.", ingredients: { iron_ingot: 2, copper_wire: 1, plastic: 2, glass_panel: 1, flora: 3 } },
  med_station_module: { category: "LIFE SUPPORT", description: "Powered exosuit treatment and recovery unit.", ingredients: { iron_ingot: 2, circuit_board: 2, plastic: 2, glass_panel: 1, flora: 3 } },
  exosuit_station_module: { category: "WORKSTATION", description: "Powered fitting station required for advanced planetary armor.", ingredients: { iron_ingot: 5, circuit_board: 2, glass_panel: 2, rubber: 2 } },
  greenhouse_module: { category: "LIFE SUPPORT", description: "Double-scale sealed habitat for intensive flora cultivation.", ingredients: { iron_ingot: 8, glass_panel: 8, pressure_seal: 4, circuit_board: 2, flora: 6 } },
  bio_syringe: { category: "FIELD EQUIPMENT", description: "Biological sampling instrument for alien fauna.", ingredients: { copper_ingot: 1, verdite_alloy: 1, crystal: 1 }, unique: true },
  reinforced_visor: { category: "ARMOR", description: "Basic sealed helmet with 4% armor and 15% toxin resistance.", ingredients: { glass_panel: 1, plastic: 2, rubber: 1 } },
  ferrite_chestplate: { category: "ARMOR", description: "Layered chest plating with 12% armor and 10% heat resistance.", ingredients: { iron_ingot: 4, plastic: 2, rubber: 1 } },
  mining_gauntlets: { category: "ARMOR", description: "Reinforced gloves providing 4% armor and 15% faster mining.", ingredients: { iron_ingot: 2, rubber: 2, copper_wire: 1 } },
  trail_boots: { category: "ARMOR", description: "Planetary boots providing 4% armor, 8% movement, and 15% cold resistance.", ingredients: { iron_ingot: 1, rubber: 3, plastic: 2 } },
  verdite_biohelmet: { category: "ARMOR", station: "exosuit", blueprint: "first_footfall", description: "Thalassan upgrade providing 8% armor, toxin resistance, and faster fauna analysis.", ingredients: { reinforced_visor: 1, verdite_alloy: 2, thalassa_sample: 1, glass_panel: 1 } },
  ignicite_chestplate: { category: "ARMOR", station: "exosuit", description: "Vesper-forged upgrade providing 18% armor and extreme heat resistance.", ingredients: { ferrite_chestplate: 1, ignicite_alloy: 3, vesper_sample: 1, rubber: 2 } },
  ignicite_gauntlets: { category: "ARMOR", station: "exosuit", description: "Vesper combat upgrade providing 8% armor and 20% higher weapon output.", ingredients: { mining_gauntlets: 1, ignicite_alloy: 2, vesper_sample: 1, circuit_board: 1 } },
  cryocite_boots: { category: "ARMOR", station: "exosuit", description: "Orison upgrade providing 8% armor, cold resistance, and faster movement.", ingredients: { trail_boots: 1, cryocite_alloy: 2, orison_sample: 1, rubber: 2 } },
};
function craftingMaterialName(material) { return resourceDefinitions[material]?.name || itemDefinitions[material]?.name || material.replaceAll("_", " "); }
const inventoryCraftingGroups = [
  { name: "STARSHIP SUPPLIES", categories: ["STARSHIP SUPPLY"] },
  { name: "MATERIALS & COMPONENTS", categories: ["MATERIAL", "COMPONENT"] },
  { name: "FIELD EQUIPMENT", categories: ["FIELD EQUIPMENT"] },
  { name: "BASIC EXOSUIT ARMOR", categories: ["ARMOR"] },
];
function renderInventoryCrafting() {
  if (!ui.inventoryCrafting) return;
  const tableLinked = craftingUi.pieceId !== null && craftingUi.station === "craftingTable";
  ui.inventoryCraftingAccess.textContent = tableLinked ? "CRAFTING TABLE LINKED" : "CRAFTING TABLE REQUIRED";
  ui.inventoryCraftingAccess.classList.toggle("online", tableLinked);
  const renderRecipe = ([output, recipe]) => {
    const definition = itemDefinitions[output]; const outputAmount = recipe.outputAmount || 1; const owned = materialAmount(output); const ready = canAfford(recipe.ingredients); const complete = recipe.unique && owned > 0;
    const ingredients = Object.entries(recipe.ingredients).map(([material, required]) => {
      const available = materialAmount(material); return `<div><span>${attributeText(craftingMaterialName(material).toUpperCase())}</span><strong class="${available >= required ? "ready" : ""}">${Math.min(available, required)} / ${required}</strong></div>`;
    }).join("");
    const buttonText = complete ? "ALREADY FABRICATED" : !tableLinked ? "CRAFTING TABLE REQUIRED" : !ready ? "INSUFFICIENT MATERIALS" : `CRAFT ${definition.name.toUpperCase()}${outputAmount > 1 ? ` ×${outputAmount}` : ""}`;
    const icon = definition.icon ? `<img src="${definition.icon}" alt="">` : `<i style="--item-color:${definition.color || "#62dced"}"></i>`;
    const iconClass = output === "bio_syringe" ? "syringe" : recipe.category === "ARMOR" ? `armor ${definition.armorSlot}` : "component";
    return `<section class="crafting-recipe" aria-label="${attributeText(definition.name)} recipe"><div class="crafting-item-icon ${iconClass}" aria-hidden="true">${icon}</div><div class="crafting-recipe-copy"><span>${recipe.category}</span><strong>${attributeText(definition.name)}</strong><p>${attributeText(recipe.description)}</p><small>OWNED · ${owned}${outputAmount > 1 ? ` · YIELD ${outputAmount}` : ""}</small></div><div class="crafting-ingredients">${ingredients}</div><button class="crafting-action" data-inventory-crafting-recipe="${output}" type="button" ${!tableLinked || !ready || complete ? "disabled" : ""}>${buttonText}</button></section>`;
  };
  ui.inventoryCrafting.innerHTML = inventoryCraftingGroups.map(group => {
    const recipes = Object.entries(craftingRecipeDefinitions).filter(([, recipe]) => !recipe.station && group.categories.includes(recipe.category));
    return `<h3>${group.name}</h3>${recipes.map(renderRecipe).join("")}`;
  }).join("");
}
function renderCraftingPanel() {
  if (ui.craftingPanel.hidden || craftingUi.pieceId === null) return;
  const powered = craftingTableIsPowered(); const exosuitMode = craftingUi.station === "exosuitStation";
  ui.craftingTitle.textContent = exosuitMode ? "Exosuit Station" : "Crafting Table"; ui.craftingEyebrow.textContent = exosuitMode ? "EXOSUIT ENGINEERING" : "FIELD FABRICATION";
  ui.craftingPower.textContent = exosuitMode ? powered ? "POWER ONLINE" : "POWER OFFLINE" : "MANUAL SYSTEM"; ui.craftingPower.classList.toggle("online", powered);
  ui.craftingRecipes.innerHTML = Object.entries(craftingRecipeDefinitions).filter(([, recipe]) => exosuitMode ? recipe.station === "exosuit" : recipe.station !== "exosuit").map(([output, recipe]) => {
    const definition = itemDefinitions[output]; const outputAmount = recipe.outputAmount || 1; const owned = materialAmount(output); const ready = canAfford(recipe.ingredients); const complete = recipe.unique && owned > 0;
    const blueprintUnlocked = !recipe.blueprint || recipe.blueprint === "first_footfall" && campaign.blueprintUnlocked;
    const ingredients = Object.entries(recipe.ingredients).map(([material, required]) => {
      const available = materialAmount(material); return `<div><span>${attributeText(craftingMaterialName(material).toUpperCase())}</span><strong class="${available >= required ? "ready" : ""}">${Math.min(available, required)} / ${required}</strong></div>`;
    }).join("");
    const buttonText = !blueprintUnlocked ? "MISSION BLUEPRINT REQUIRED" : complete ? "ALREADY FABRICATED" : !powered ? "POWER REQUIRED" : !ready ? "INSUFFICIENT MATERIALS" : `CRAFT ${definition.name.toUpperCase()}${outputAmount > 1 ? ` ×${outputAmount}` : ""}`;
    const icon = definition.icon ? `<img src="${definition.icon}" alt="">` : `<i style="--item-color:${definition.color || "#62dced"}"></i>`;
    const iconClass = output === "bio_syringe" ? "syringe" : recipe.category === "ARMOR" ? `armor ${definition.armorSlot}` : ["COMPONENT", "MATERIAL", "STARSHIP SUPPLY"].includes(recipe.category) ? "component" : "module";
    return `<section class="crafting-recipe" aria-label="${attributeText(definition.name)} recipe"><div class="crafting-item-icon ${iconClass}" aria-hidden="true">${icon}</div><div class="crafting-recipe-copy"><span>${recipe.category}${blueprintUnlocked ? "" : " · LOCKED"}</span><strong>${attributeText(definition.name)}</strong><p>${recipe.description}</p><small>OWNED · ${owned}${outputAmount > 1 ? ` · YIELD ${outputAmount}` : ""}</small></div><div class="crafting-ingredients">${ingredients}</div><button class="crafting-action" data-crafting-recipe="${output}" type="button" ${!blueprintUnlocked || !powered || !ready || complete ? "disabled" : ""}>${buttonText}</button></section>`;
  }).join("");
}
function openCraftingTable(piece, station = "craftingTable") {
  closeQuickMenu(); closePlanetMap(); closeShipInventory(); closeDiscoveries(); closeUpgrades(); closeRefinery();
  craftingUi.pieceId = piece.id; craftingUi.station = station; state.panelOpen = true; player.vx = 0; player.vy = 0; keys.delete("e");
  if (station === "craftingTable") {
    ui.shipInventory.hidden = false; document.body.classList.add("ship-inventory-open"); setInventoryView("craft");
  } else {
    ui.craftingPanel.hidden = false; renderCraftingPanel();
  }
}
function closeCraftingTable() {
  if (ui.craftingPanel.hidden) return; ui.craftingPanel.hidden = true; craftingUi.pieceId = null; craftingUi.station = "craftingTable"; state.panelOpen = !ui.refineryPanel.hidden; saveGame();
}
function craftRecipe(output) {
  const recipe = craftingRecipeDefinitions[output]; if (!recipe) return;
  if (recipe.blueprint === "first_footfall" && !campaign.blueprintUnlocked) { showToast("MISSION BLUEPRINT REQUIRED"); return; }
  if ((craftingUi.station === "exosuitStation") !== (recipe.station === "exosuit")) return;
  if (!craftingTableIsPowered()) return;
  if (recipe.unique && materialAmount(output) > 0) { showToast(`${itemDefinitions[output].name.toUpperCase()} ALREADY FABRICATED`); return; }
  if (!canAfford(recipe.ingredients)) { showToast("INSUFFICIENT CRAFTING MATERIALS"); return; }
  const outputAmount = recipe.outputAmount || 1;
  spendResources(recipe.ingredients); addItem(output, outputAmount);
  if (output === "battery_module") for (let index = 0; index < outputAmount; index++) portableBatteryCharges.push(0);
  updateUI(); updateBuildToolbar(); renderCraftingPanel(); saveGame(); showToast(`${itemDefinitions[output].name.toUpperCase()} FABRICATED${outputAmount > 1 ? ` · +${outputAmount}` : ""}`);
}

function updateUnderground(dt) {
  let dx = (keys.has("d") || keys.has("arrowright") ? 1 : 0) - (keys.has("a") || keys.has("arrowleft") ? 1 : 0);
  let dy = (keys.has("s") || keys.has("arrowdown") ? 1 : 0) - (keys.has("w") || keys.has("arrowup") ? 1 : 0);
  if (dx || dy) {
    const length = Math.hypot(dx, dy); dx /= length; dy /= length; player.angle = Math.atan2(dy, dx);
    player.facing = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 1 : 3) : (dy > 0 ? 0 : 2);
    player.walkTime += dt * (keys.has("shift") ? 1.35 : 1);
  }
  const sprint = keys.has("shift") ? 1.55 : 1;
  const moveSpeed = playerMoveSpeed(); player.vx += (dx * moveSpeed * sprint - player.vx) * Math.min(1, dt * 9);
  player.vy += (dy * moveSpeed * sprint - player.vy) * Math.min(1, dt * 9);
  const nextX = Math.max(-1800, Math.min(1800, player.x + player.vx * dt));
  if (!baseCollisionAt(nextX, player.y)) player.x = nextX; else player.vx = 0;
  const nextY = Math.max(-1800, Math.min(1800, player.y + player.vy * dt));
  if (!baseCollisionAt(player.x, nextY)) player.y = nextY; else player.vy = 0;
  camera.x += (player.x - camera.x) * Math.min(1, dt * 5); camera.y += (player.y - camera.y) * Math.min(1, dt * 5);

  const metrics = undergroundBaseMetrics();
  player.tool = Math.min(toolEnergyCapacity(), player.tool + dt * (metrics.powered ? 34 : 3));
  ui.tool.style.width = `${player.tool / toolEnergyCapacity() * 100}%`;
  if (metrics.powered && metrics.capacity && metrics.stored < metrics.capacity) {
    baseProduction[state.planet] += dt * metrics.powerRate;
    if (baseProduction[state.planet] >= metrics.productionInterval) {
      baseProduction[state.planet] -= metrics.productionInterval; baseStorage[state.planet].ferrite += 1;
      const remainingCapacity = Math.max(0, metrics.capacity - Object.values(baseStorage[state.planet]).reduce((total, amount) => total + amount, 0));
      const floraHarvest = Math.min(metrics.planters, remainingCapacity); baseStorage[state.planet].flora += floraHarvest;
      saveGame(); showToast(floraHarvest ? `BASE HARVEST · +1 FERRITE · +${floraHarvest} FLORA` : "BASE SYNTHESIZER · +1 FERRITE");
    }
  }
  if (updateStructureRecovery(dt)) {
    const recoveryMetrics = undergroundBaseMetrics(); camera.shake *= .85; ui.tool.style.width = `${player.tool / toolEnergyCapacity() * 100}%`;
    updateBaseSystemsPanel(recoveryMetrics); updateUndergroundObjective(recoveryMetrics); return;
  }
  const nearestSystems = { storage: null, refinery: null, craftingTable: null, medStation: null, exosuitStation: null };
  for (const piece of undergroundPieces[state.planet]) {
    if (!(piece.type in nearestSystems)) continue;
    const distance = Math.hypot(player.x - piece.x, player.y - piece.y);
    if (!nearestSystems[piece.type] || distance < nearestSystems[piece.type].distance) nearestSystems[piece.type] = { piece, distance };
  }
  const nearestStorage = nearestSystems.storage;
  const nearestRefinery = nearestSystems.refinery;
  const nearestCraftingTable = nearestSystems.craftingTable;
  const nearestMedStation = nearestSystems.medStation;
  const nearestExosuitStation = nearestSystems.exosuitStation;
  const nearestDeposit = nearestUndergroundDeposit();
  const digTarget = undergroundDigTarget();
  const nearElevator = Math.hypot(player.x, player.y) < 66;
  if (!keys.has("e")) underground.exitArmed = true;
  if (!keys.has("e") && !keys.has("r")) underground.transferArmed = true;
  if (nearElevator) {
    underground.digProgress = 0; underground.digKey = null;
    ui.interaction.hidden = false; ui.interactionKey.textContent = "E"; ui.interactionTitle.textContent = "Return to surface";
    if (keys.has("e") && underground.exitArmed) {
      underground.exitProgress += dt;
      if (underground.exitProgress >= .75) { keys.delete("e"); exitUndergroundBase(); return; }
    } else underground.exitProgress = Math.max(0, underground.exitProgress - dt * 2);
    ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, underground.exitProgress / .75 * 100)}%`);
  } else if (nearestRefinery?.distance < 78) {
    underground.exitProgress = 0; underground.digProgress = 0; underground.digKey = null; ui.interaction.hidden = false;
    const powered = metrics.network.poweredIds.has(nearestRefinery.piece.id); ui.interactionKey.textContent = "E";
    ui.interactionTitle.textContent = powered ? "Access refinery workstation" : "Access refinery · power offline";
    ui.interactionProgress.style.setProperty("--progress", "0%");
    if (keys.has("e") && underground.exitArmed) { underground.exitArmed = false; openRefinery(nearestRefinery.piece); return; }
  } else if (nearestCraftingTable?.distance < 76) {
    underground.exitProgress = 0; underground.digProgress = 0; underground.digKey = null; ui.interaction.hidden = false;
    ui.interactionKey.textContent = "E"; ui.interactionTitle.textContent = "Access crafting table";
    ui.interactionProgress.style.setProperty("--progress", "0%");
    if (keys.has("e") && underground.exitArmed) { underground.exitArmed = false; openCraftingTable(nearestCraftingTable.piece); return; }
  } else if (nearestExosuitStation?.distance < 78) {
    underground.exitProgress = 0; underground.digProgress = 0; underground.digKey = null; ui.interaction.hidden = false; ui.interactionKey.textContent = "E";
    const powered = metrics.network.poweredIds.has(nearestExosuitStation.piece.id);
    ui.interactionTitle.textContent = powered ? "Access exosuit engineering" : "Exosuit station · power offline";
    ui.interactionProgress.style.setProperty("--progress", "0%");
    if (keys.has("e") && underground.exitArmed) { underground.exitArmed = false; openCraftingTable(nearestExosuitStation.piece, "exosuitStation"); return; }
  } else if (nearestMedStation?.distance < 74) {
    underground.exitProgress = 0; underground.digProgress = 0; underground.digKey = null; ui.interaction.hidden = false; ui.interactionKey.textContent = "E";
    const powered = metrics.network.poweredIds.has(nearestMedStation.piece.id);
    ui.interactionTitle.textContent = powered ? player.life >= 100 && player.exposure <= .01 ? "Medical station · health nominal" : "Restore health and purge exposure" : "Medical station · power offline";
    ui.interactionProgress.style.setProperty("--progress", "0%");
    if (powered && (player.life < 100 || player.exposure > .01) && keys.has("e") && underground.exitArmed) { underground.exitArmed = false; keys.delete("e"); player.life = 100; player.exposure = 0; updateUI(); saveGame(); showToast("EXOSUIT RESTORED AND DECONTAMINATED"); }
  } else if (nearestStorage?.distance < 72) {
    underground.exitProgress = 0; underground.digProgress = 0; underground.digKey = null; ui.interaction.hidden = false; ui.interactionKey.textContent = "E";
    const storagePowered = metrics.network.poweredIds.has(nearestStorage.piece.id);
    ui.interactionTitle.textContent = storagePowered ? "Deposit cargo · R Withdraw" : "Storage offline · connect power cable";
    ui.interactionProgress.style.setProperty("--progress", "0%");
    if (storagePowered && underground.transferArmed && keys.has("e")) { underground.transferArmed = false; keys.delete("e"); depositBaseCargo(); }
    else if (storagePowered && underground.transferArmed && keys.has("r")) { underground.transferArmed = false; keys.delete("r"); withdrawBaseCargo(); }
  } else if (nearestDeposit) {
    underground.exitProgress = 0; ui.interaction.hidden = false; ui.interactionKey.textContent = "E";
    ui.interactionTitle.textContent = `Extract ${nearestDeposit.name}`;
    const depositProgressKey = `deposit:${nearestDeposit.key}`;
    if (underground.digKey !== depositProgressKey) { underground.digKey = depositProgressKey; underground.digProgress = 0; }
    if (keys.has("e") && toolReadyForUse()) {
      aimPlayerAt(nearestDeposit.x, nearestDeposit.y); state.harvesting = { x: nearestDeposit.x, y: nearestDeposit.y };
      underground.digProgress += dt * miningRate(); consumeToolEnergy(dt * (17 + nearestDeposit.hardness * 3)); camera.shake = 2.2;
      if (underground.digProgress >= nearestDeposit.hardness) {
        minedUndergroundDeposits[state.planet].add(nearestDeposit.key);
        if (nearestDeposit.item) addItem(nearestDeposit.item, nearestDeposit.amount); else player.inventory[nearestDeposit.resource] += nearestDeposit.amount;
        const discoveryKey = `${state.planet}:underground:${nearestDeposit.name}`; const previous = discoveries.minerals.get(discoveryKey);
        discoveries.minerals.set(discoveryKey, { name: nearestDeposit.name, planet: state.planet, samples: (previous?.samples || 0) + 1 });
        underground.digProgress = 0; underground.digKey = null; keys.delete("e"); updateUI(); saveGame();
        showToast(`${nearestDeposit.name.toUpperCase()} · +${nearestDeposit.amount}`);
      }
    } else if (!keys.has("e")) underground.digProgress = Math.max(0, underground.digProgress - dt * 1.2);
    ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, underground.digProgress / nearestDeposit.hardness * 100)}%`);
  } else if (digTarget) {
    const buriedDeposit = undergroundDepositForCell(digTarget.cellX, digTarget.cellY);
    const scannedDeposit = ship.scanner && buriedDeposit;
    underground.exitProgress = 0; ui.interaction.hidden = false; ui.interactionKey.textContent = "E";
    ui.interactionTitle.textContent = scannedDeposit ? `Excavate rock · ${scannedDeposit.name} detected` : "Excavate rock · yields ferrite";
    if (underground.digKey !== digTarget.key) { underground.digKey = digTarget.key; underground.digProgress = 0; }
    if (keys.has("e") && toolReadyForUse()) {
      aimPlayerAt(digTarget.x, digTarget.y); state.harvesting = { x: digTarget.x, y: digTarget.y };
      underground.digProgress += dt * miningRate(); consumeToolEnergy(dt * 22); camera.shake = 2.5;
      if (underground.digProgress >= 1.1) {
        excavatedCells[state.planet].add(digTarget.key); player.inventory.ferrite += 1; underground.digProgress = 0; underground.digKey = null;
        keys.delete("e"); updateUI(); saveGame();
        showToast(buriedDeposit ? `ORE VEIN EXPOSED · ${buriedDeposit.name.toUpperCase()}` : "CAVERN EXCAVATED · +1 FERRITE");
      }
    } else if (!keys.has("e")) underground.digProgress = Math.max(0, underground.digProgress - dt * 1.6);
    ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, underground.digProgress / 1.1 * 100)}%`);
  } else { ui.interaction.hidden = true; underground.exitProgress = 0; underground.digProgress = 0; underground.digKey = null; }
  camera.shake *= .85; ui.tool.style.width = `${player.tool / toolEnergyCapacity() * 100}%`;
  updateBaseSystemsPanel(metrics); updateUndergroundObjective(metrics);
}

function enterShipInterior() {
  state.mode = "interior"; state.enterProgress = 0;
  interiorPlayer.x = 0; interiorPlayer.y = 84; interiorPlayer.vx = 0; interiorPlayer.vy = 0; interiorPlayer.exitProgress = 0; interiorPlayer.exitArmed = false; interiorPlayer.pilotProgress = 0; interiorPlayer.pilotArmed = false;
  player.vx = 0; player.vy = 0; ui.interaction.hidden = true;
  ui.location.textContent = "KESTREL · FLIGHT DECK";
  document.body.classList.add("interior-mode");
}

function exitShipInterior() {
  state.mode = "planet"; interiorPlayer.exitProgress = 0;
  player.x = ship.x + 76; player.y = ship.y; player.vx = 0; player.vy = 0;
  camera.x = player.x; camera.y = player.y; ui.interaction.hidden = true;
  const p = planets[state.planet]; ui.location.textContent = `${p.name} · ${p.type} · ${p.weather}`;
  document.body.classList.remove("interior-mode");
}

function enterPlanetFlight() {
  state.mode = "planetFlight"; ship.vx = 0; ship.vy = 0;
  atmosphericFlight.landProgress = 0; atmosphericFlight.launchProgress = 0; atmosphericFlight.landingArmed = false; atmosphericFlight.launchArmed = false;
  camera.x = ship.x; camera.y = ship.y; ui.interaction.hidden = true;
  ui.location.textContent = `${planets[state.planet].name} · LOW ALTITUDE`;
  ui.objectiveTitle.textContent = "Atmospheric Survey";
  ui.objectiveCopy.textContent = `Kestrel operating within ${planets[state.planet].name}'s lower atmosphere.`;
  ui.objectiveCount.textContent = "HOVER MODE"; ui.objective.style.width = "100%"; ui.toolLabel.textContent = "THR"; ui.orbitControl.hidden = false;
  document.body.classList.remove("interior-mode"); showToast("PLANETARY FLIGHT ENGAGED");
}

function landPlanetFlight() {
  const landingPad = basePieces[state.planet].filter(piece => piece.type === "landingPad").map(piece => ({ piece, distance: Math.hypot(ship.x - piece.x, ship.y - piece.y) })).sort((a, b) => a.distance - b.distance)[0];
  if (landingPad?.distance < 280) { ship.x = landingPad.piece.x; ship.y = landingPad.piece.y; ship.angle = -Math.PI / 2; }
  state.mode = "planet"; ship.vx = 0; ship.vy = 0; keys.delete("e");
  player.x = ship.x + Math.cos(ship.angle + Math.PI / 2) * 74;
  player.y = ship.y + Math.sin(ship.angle + Math.PI / 2) * 74;
  player.vx = 0; player.vy = 0; camera.x = player.x; camera.y = player.y;
  atmosphericFlight.landProgress = 0; atmosphericFlight.launchProgress = 0; ui.interaction.hidden = true; ui.toolLabel.textContent = "MULTI-TOOL"; ui.tool.style.width = `${player.tool / toolEnergyCapacity() * 100}%`; ui.orbitControl.hidden = true;
  const p = planets[state.planet]; ui.location.textContent = `${p.name} · ${p.type} · ${p.weather}`;
  updateUI();
  saveGame(); showToast("KESTREL LANDED");
}

function updatePlanetFlight(dt) {
  let dx = (keys.has("d") || keys.has("arrowright") ? 1 : 0) - (keys.has("a") || keys.has("arrowleft") ? 1 : 0);
  let dy = (keys.has("s") || keys.has("arrowdown") ? 1 : 0) - (keys.has("w") || keys.has("arrowup") ? 1 : 0);
  if (dx || dy) {
    const length = Math.hypot(dx, dy); dx /= length; dy /= length;
    const targetAngle = Math.atan2(dy, dx); const angleDelta = Math.atan2(Math.sin(targetAngle - ship.angle), Math.cos(targetAngle - ship.angle));
    ship.angle += angleDelta * Math.min(1, dt * 8);
  }
  const boost = keys.has("shift") ? 1.65 : 1; const targetSpeed = (ship.engine ? 330 : 270) * boost;
  ship.vx += (dx * targetSpeed - ship.vx) * Math.min(1, dt * 4.8);
  ship.vy += (dy * targetSpeed - ship.vy) * Math.min(1, dt * 4.8);
  ship.x += ship.vx * dt; ship.y += ship.vy * dt;
  camera.x += (ship.x - camera.x) * Math.min(1, dt * 6); camera.y += (ship.y - camera.y) * Math.min(1, dt * 6);

  const speed = Math.hypot(ship.vx, ship.vy); const launchReady = launchAvailable(); const waterBelow = pointInSurfaceLake(ship.x, ship.y, 58);
  ui.location.textContent = `${planets[state.planet].name} · ATMOSPHERIC FLIGHT`;
  ui.objectiveCount.textContent = `${Math.round(speed)} U/S · ${keys.has("shift") ? "BOOST" : "HOVER"}`;
  ui.tool.style.width = `${Math.min(100, speed / 4.45)}%`;
  ui.interaction.hidden = false; ui.interactionKey.textContent = "E";
  ui.interactionTitle.textContent = waterBelow ? "Water below · landing unavailable" : launchReady ? "Land Kestrel · SPACE Ascend" : "Land Kestrel · Launch fuel required";

  if (!keys.has("e")) atmosphericFlight.landingArmed = true;
  if (!keys.has(" ")) atmosphericFlight.launchArmed = true;
  if (keys.has("e") && atmosphericFlight.landingArmed) {
    if (waterBelow) { atmosphericFlight.landingArmed = false; atmosphericFlight.landProgress = 0; showToast("LANDING SITE SUBMERGED"); }
    else atmosphericFlight.landProgress += dt;
    atmosphericFlight.launchProgress = Math.max(0, atmosphericFlight.launchProgress - dt * 2);
    if (atmosphericFlight.landProgress >= .65) { landPlanetFlight(); return; }
  } else if (keys.has(" ") && atmosphericFlight.launchArmed) {
    atmosphericFlight.landProgress = Math.max(0, atmosphericFlight.landProgress - dt * 2);
    if (launchReady) {
      atmosphericFlight.launchProgress += dt;
      if (atmosphericFlight.launchProgress >= .85) { keys.delete(" "); launch(); return; }
    } else {
      atmosphericFlight.launchArmed = false; atmosphericFlight.launchProgress = 0; showToast("LAUNCH FUEL REQUIRED");
    }
  } else {
    atmosphericFlight.landProgress = Math.max(0, atmosphericFlight.landProgress - dt * 2);
    atmosphericFlight.launchProgress = Math.max(0, atmosphericFlight.launchProgress - dt * 2);
  }
  const progress = Math.max(atmosphericFlight.landProgress / .65, atmosphericFlight.launchProgress / .85);
  ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, progress * 100)}%`);
}

function updateInterior(dt) {
  let dx = (keys.has("d") || keys.has("arrowright") ? 1 : 0) - (keys.has("a") || keys.has("arrowleft") ? 1 : 0);
  let dy = (keys.has("s") || keys.has("arrowdown") ? 1 : 0) - (keys.has("w") || keys.has("arrowup") ? 1 : 0);
  if (dx || dy) {
    const length = Math.hypot(dx, dy); dx /= length; dy /= length;
    interiorPlayer.facing = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 1 : 3) : (dy > 0 ? 0 : 2);
    interiorPlayer.walkTime += dt;
  }
  interiorPlayer.vx += (dx * 125 - interiorPlayer.vx) * Math.min(1, dt * 10);
  interiorPlayer.vy += (dy * 125 - interiorPlayer.vy) * Math.min(1, dt * 10);
  const nextX = Math.max(-272, Math.min(272, interiorPlayer.x + interiorPlayer.vx * dt));
  if (!interiorCollisionAt(nextX, interiorPlayer.y)) interiorPlayer.x = nextX;
  else interiorPlayer.vx = 0;
  const nextY = Math.max(-116, Math.min(116, interiorPlayer.y + interiorPlayer.vy * dt));
  if (!interiorCollisionAt(interiorPlayer.x, nextY)) interiorPlayer.y = nextY;
  else interiorPlayer.vy = 0;

  const nearCockpit = Math.abs(interiorPlayer.x) < 38 && interiorPlayer.y < -78;
  const nearMissionTerminal = interiorPlayer.x < -74 && Math.abs(interiorPlayer.y) < 58;
  const nearAirlock = Math.abs(interiorPlayer.x) < 64 && interiorPlayer.y > 76;
  if (!keys.has("e")) interiorPlayer.pilotArmed = true;
  if (!keys.has("u")) interiorPlayer.exitArmed = true;
  if (nearMissionTerminal) {
    ui.interaction.hidden = false; ui.interactionKey.textContent = "E";
    ui.interactionTitle.textContent = campaign.stage >= 3 && !campaign.rewardClaimed ? "Transmit First Footfall report" : "Access Kestrel mission terminal";
    ui.interactionProgress.style.setProperty("--progress", "0%"); interiorPlayer.exitProgress = 0; interiorPlayer.pilotProgress = 0;
    if (keys.has("e")) { keys.delete("e"); openMissionTerminal(); return; }
  } else if (nearCockpit) {
    ui.interaction.hidden = false; ui.interactionKey.textContent = "E";
    ui.interactionTitle.textContent = "Take planetary flight controls";
    if (keys.has("e") && interiorPlayer.pilotArmed) {
      interiorPlayer.pilotProgress += dt;
      if (interiorPlayer.pilotProgress >= .65) {
        interiorPlayer.pilotProgress = 0;
        enterPlanetFlight();
        return;
      }
    } else interiorPlayer.pilotProgress = Math.max(0, interiorPlayer.pilotProgress - dt * 2);
    interiorPlayer.exitProgress = 0;
    ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, interiorPlayer.pilotProgress / .65 * 100)}%`);
  } else if (nearAirlock) {
    ui.interaction.hidden = false; ui.interactionKey.textContent = "U"; ui.interactionTitle.textContent = "Exit Kestrel";
    if (keys.has("u") && interiorPlayer.exitArmed) {
      interiorPlayer.exitProgress += dt;
      if (interiorPlayer.exitProgress >= .75) exitShipInterior();
    } else interiorPlayer.exitProgress = Math.max(0, interiorPlayer.exitProgress - dt * 2);
    ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, interiorPlayer.exitProgress / .75 * 100)}%`);
    interiorPlayer.pilotProgress = 0;
  } else { ui.interaction.hidden = true; interiorPlayer.exitProgress = 0; interiorPlayer.pilotProgress = 0; }
}

function interiorCollisionAt(x, y) {
  const radius = 9;
  if (y < -108 || y > 112) return true;
  const hullHalfWidth = y < -82 ? 116 + (y + 108) * 2 : y > 88 ? 151 : 176;
  if (Math.abs(x) > hullHalfWidth - radius) return true;
  return interiorCollisions.some(collision => (
    x > collision[0] - radius && x < collision[2] + radius &&
    y > collision[1] - radius && y < collision[3] + radius
  ));
}

function updatePlanetReentry(dt) {
  reentry.time += dt;
  const p = planets[reentry.planet];
  ui.location.textContent = `${p.name} · ATMOSPHERIC ENTRY`;
  ui.objectiveTitle.textContent = "Re-entry Corridor";
  ui.objectiveCopy.textContent = `Kestrel descending through ${p.weather.toLowerCase()}.`;
  ui.objectiveCount.textContent = reentry.time < 1.55 ? "ORBITAL INTERFACE" : reentry.time < 3.75 ? "PLASMA SHEATH" : "LOWER ATMOSPHERE";
  ui.objective.style.width = `${Math.min(100, reentry.time / 5.35 * 100)}%`;
  if (reentry.time >= 5.35) completePlanetReentry();
}

function update(dt) {
  if (state.menuOpen) { elapsed += dt * .15; return; }
  elapsed += dt; state.worldTime += dt * settings.cycleSpeed; state.harvesting = null; state.scanning = null; updateCycleHud();
  updatePlanetaryStorm(dt);
  updateBatterySystems(dt);
  updateWaterSystems(dt);
  updateCampaignProgress();
  if (["planet", "interior"].includes(state.mode)) renderCampaignObjective();
  camera.targetZoom = Math.max(MIN_CAMERA_ZOOM, Math.min(MAX_CAMERA_ZOOM, camera.targetZoom));
  camera.zoom = Math.max(MIN_CAMERA_ZOOM, Math.min(MAX_CAMERA_ZOOM, camera.zoom + (camera.targetZoom - camera.zoom) * Math.min(1, dt * 10)));
  reentry.surfaceFade = Math.max(0, reentry.surfaceFade - dt * 1.7);
  if (state.mode === "planet") updateShipRecall(dt);
  updateRefineryProcessing(dt);
  if (state.panelOpen) return;
  if (state.mode === "stationDocking") { updateStationDocking(dt); return; }
  if (state.mode === "stationInterior") { updateStationInterior(dt); return; }
  updateEnvironmentalHazard(dt);
  if (["planet", "planetFlight"].includes(state.mode)) camera.shake = Math.max(camera.shake, stormSnapshot().intensity * 1.5);
  if (build.active) { ui.interaction.hidden = true; return; }
  if (shipRecall.selecting) { player.vx = 0; player.vy = 0; ui.interaction.hidden = true; return; }
  if (state.mode === "interior") { updateInterior(dt); return; }
  if (state.mode === "baseInterior") { updateUnderground(dt); return; }
  if (state.mode === "caveInterior") { updateNaturalCave(dt); return; }
  if (state.mode === "mineshaft") { updateMineshaft(dt); return; }
  if (state.mode === "planetFlight") { updatePlanetFlight(dt); return; }
  if (state.mode === "reentry") { updatePlanetReentry(dt); return; }
  if (state.mode === "space") { updateSpace(dt); return; }
  if (state.mode === "launching") {
    state.launchTime += dt; ship.x += Math.cos(ship.angle) * (105 + state.launchTime * 38) * dt; ship.y += Math.sin(ship.angle) * (105 + state.launchTime * 38) * dt; camera.x += (ship.x - camera.x) * .055; camera.y += (ship.y - camera.y) * .055;
    camera.shake = state.launchTime < 1.2 ? Math.max(0, 4.5 - state.launchTime * 2.4) : 0;
    if (state.launchTime > 4.6) enterSpace();
    return;
  }
  updateCreatures(dt);
  let dx = (keys.has("d") || keys.has("arrowright") ? 1 : 0) - (keys.has("a") || keys.has("arrowleft") ? 1 : 0);
  let dy = (keys.has("s") || keys.has("arrowdown") ? 1 : 0) - (keys.has("w") || keys.has("arrowup") ? 1 : 0);
  if (dx || dy) {
    const l = Math.hypot(dx, dy); dx /= l; dy /= l; player.angle = Math.atan2(dy, dx);
    player.facing = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 1 : 3) : (dy > 0 ? 0 : 2);
    player.walkTime += dt * (keys.has("shift") ? 1.35 : 1);
  }
  const sprint = keys.has("shift") ? 1.55 : 1;
  const moveSpeed = playerMoveSpeed(); player.vx += (dx * moveSpeed * sprint - player.vx) * Math.min(1, dt * 9); player.vy += (dy * moveSpeed * sprint - player.vy) * Math.min(1, dt * 9);
  const nextPlayerX = player.x + player.vx * dt;
  if (!baseCollisionAt(nextPlayerX, player.y)) player.x = nextPlayerX; else player.vx = 0;
  const nextPlayerY = player.y + player.vy * dt;
  if (!baseCollisionAt(player.x, nextPlayerY)) player.y = nextPlayerY; else player.vy = 0;
  camera.x += (player.x - camera.x) * Math.min(1, dt * 5); camera.y += (player.y - camera.y) * Math.min(1, dt * 5);
  player.tool = Math.min(toolEnergyCapacity(), player.tool + dt * 9);

  if (updateStructureRecovery(dt)) { camera.shake *= .85; ui.tool.style.width = `${player.tool / toolEnergyCapacity() * 100}%`; return; }

  const target = nearestTarget();
  if (target) {
    ui.interaction.hidden = false;
    if (target.type === "craftingTable") {
      state.mineProgress = 0; state.enterProgress = 0; ui.interactionKey.textContent = "E";
      ui.interactionTitle.textContent = "Access crafting table";
      ui.interactionProgress.style.setProperty("--progress", "0%");
      if (keys.has("e")) { keys.delete("e"); openCraftingTable(target.piece); return; }
    } else if (target.type === "baseEntrance") {
      state.mineProgress = 0; ui.interactionKey.textContent = "E"; ui.interactionTitle.textContent = "Descend to underground base";
      if (keys.has("e")) {
        state.enterProgress += dt;
        if (state.enterProgress >= .75) { keys.delete("e"); enterUndergroundBase(target.piece); return; }
      } else state.enterProgress = Math.max(0, state.enterProgress - dt * 2);
      ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, state.enterProgress / .75 * 100)}%`);
    } else if (target.type === "caveEntrance") {
      state.mineProgress = 0; ui.interactionKey.textContent = "E"; ui.interactionTitle.textContent = "Descend into natural cavern";
      if (keys.has("e")) { state.enterProgress += dt; if (state.enterProgress >= .75) { keys.delete("e"); enterNaturalCave(target); return; } }
      else state.enterProgress = Math.max(0, state.enterProgress - dt * 2);
      ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, state.enterProgress / .75 * 100)}%`);
    } else if (target.type === "ship") {
      ui.interactionKey.textContent = "U"; ui.interactionTitle.textContent = "Enter Kestrel · E Systems";
      if (keys.has("e")) { openUpgrades(); keys.delete("e"); }
      if (keys.has("u")) {
        state.enterProgress += dt;
        if (state.enterProgress >= .75) { enterShipInterior(); return; }
      } else state.enterProgress = Math.max(0, state.enterProgress - dt * 2);
      ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, state.enterProgress / .75 * 100)}%`);
    } else if (target.type === "creature") {
      state.enterProgress = 0; ui.interactionKey.textContent = "E";
      const creature = target.creature;
      const known = creatureKnown(creature);
      if (!known) {
        state.mineProgress = 0; ui.interactionKey.textContent = "F"; ui.interactionTitle.textContent = `Analyze ${creature.species.name}`;
        if (keys.has("f") && toolReadyForUse()) {
          state.scanning = creature; aimPlayerAt(creature.x, creature.y); state.harvesting = { x: creature.x, y: creature.y };
          creature.scanProgress = Math.min(1.15, (creature.scanProgress || 0) + dt * (1 + armorStats().scan)); consumeToolEnergy(dt * 8);
          if (creature.hostile) creature.alert = Math.max(creature.alert, .8);
          if (creature.scanProgress >= 1.15) { catalogCreature(creature); creature.scanProgress = 0; keys.delete("f"); showToast(`${creature.species.name.toUpperCase()} CATALOGUED`); }
        } else if (!keys.has("f")) creature.scanProgress = Math.max(0, (creature.scanProgress || 0) - dt * .45);
        ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, (creature.scanProgress || 0) / 1.15 * 100)}%`);
      } else if (creature.hostile) {
        ui.interactionTitle.textContent = `Repel ${creature.species.name}`;
        if (keys.has("e") && toolReadyForUse()) {
        aimPlayerAt(creature.x, creature.y); state.harvesting = { x: creature.x, y: creature.y };
        state.mineProgress += dt * combatRate(); consumeToolEnergy(dt * 24);
        creature.health = Math.max(0, creature.health - dt * 68 * combatRate()); creature.alert = 3; creature.hitAnim = 1; camera.shake = 2;
        if (state.mineProgress >= 1.25 || creature.health <= 0) {
          creature.alive = false; showToast(`${creature.species.name.toUpperCase()} NEUTRALIZED`); state.mineProgress = 0; keys.delete("e");
        }
        } else if (!keys.has("e")) state.mineProgress = Math.max(0, state.mineProgress - dt * 2);
        ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, state.mineProgress / 1.25 * 100)}%`);
      } else {
        ui.interactionKey.textContent = "E"; ui.interactionTitle.textContent = `Collect sample from ${creature.species.name}`;
        if (keys.has("e")) {
          state.harvesting = { x: creature.x, y: creature.y }; aimPlayerAt(creature.x, creature.y); state.mineProgress += dt;
          if (state.mineProgress >= .9) {
            const sample = ["thalassa_sample", "vesper_sample", "orison_sample"][state.planet]; addItem(sample); creature.sampled = true; state.mineProgress = 0; keys.delete("e"); updateUI(); saveGame(); showToast(`${itemDefinitions[sample].name.toUpperCase()} COLLECTED`);
          }
        } else state.mineProgress = Math.max(0, state.mineProgress - dt * 2);
        ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, state.mineProgress / .9 * 100)}%`);
      }
    } else {
      state.enterProgress = 0;
      ui.interactionKey.textContent = "E";
      ui.interactionTitle.textContent = target.type === "flora" ? "Harvest botanical compounds" : target.type === "crystal" ? "Extract crystal" : target.type === "ore" ? `Mine ${itemDefinitions[target.item].name}` : "Mine ferrite";
      if (keys.has("e") && toolReadyForUse()) { aimPlayerAt(target.x, target.y); state.mining = target; state.harvesting = { x: target.x, y: target.y }; state.mineProgress += dt * miningRate(); consumeToolEnergy(dt * 19); camera.shake = 2; if (state.mineProgress >= .85) collect(target); }
      else if (!keys.has("e")) state.mineProgress = Math.max(0, state.mineProgress - dt * 2);
      if (keys.has("e") && state.toolOverheated) ui.interactionTitle.textContent = "Multi-tool cooling · progress held";
      ui.interactionProgress.style.setProperty("--progress", `${Math.min(100, state.mineProgress / .85 * 100)}%`);
    }
  } else { ui.interaction.hidden = true; state.mineProgress = 0; state.enterProgress = 0; }
  camera.shake *= .85;
  ui.tool.style.width = `${player.tool / toolEnergyCapacity() * 100}%`;
}

function collect(target) {
  target.alive = false; state.mineProgress = 0;
  const amount = target.type === "flora" ? 2 : target.type === "crystal" ? 1 : 2;
  if (target.type === "ore") addItem(target.item, amount); else player.inventory[target.type] += amount;
  catalogDiscovery(target);
  if (target.type === "flora") {
    const resinAmount = state.planet === 0 ? 2 : 1;
    const biomassAmount = state.planet === 1 ? 2 : 1;
    addItem("resin_sap", resinAmount); addItem("carbon_biomass", biomassAmount);
    showToast(`FLORA +${amount} · RESIN +${resinAmount} · BIOMASS +${biomassAmount}`);
  } else showToast(`+${amount} ${(target.type === "ore" ? itemDefinitions[target.item].name : target.type).toUpperCase()}`);
  updateUI(); saveGame();
}

function catalogDiscovery(target) {
  const category = target.type === "flora" ? "flora" : "minerals";
  const specimen = target.type === "flora" ? target.sprite : target.type === "ore" ? target.item : target.mineral;
  const key = `${state.planet}:${specimen || target.type}`;
  const catalog = discoveries[category];
  const previous = catalog.get(key);
  catalog.set(key, {
    name: itemDefinitions[specimen]?.name || specimenNames[specimen] || `${planets[state.planet].name} ${target.type}`,
    planet: state.planet,
    samples: (previous?.samples || 0) + 1,
  });
}

function catalogCreature(creature) {
  const key = creatureDiscoveryKey(creature); const previous = discoveries.creatures.get(key); const species = creature.species;
  discoveries.creatures.set(key, { name: species.name, planet: state.planet, samples: (previous?.samples || 0) + 1, rarity: species.rarity, behavior: species.behavior, habitat: species.habitat, description: species.description, hostile: species.hostile, nocturnal: Boolean(species.nocturnal) });
  creature.scanned = true;
  saveGame();
}

function renderSpecimenCatalog(category) {
  const view = document.querySelector(`#discovery-${category}`);
  const entries = [...discoveries[category].values()];
  if (!entries.length) {
    view.className = "discovery-view archive-empty";
    view.innerHTML = `<div><strong>No ${category} catalogued</strong><span>Field records awaiting discovery</span></div>`;
    return;
  }
  view.className = "discovery-view specimen-catalog";
  if (category === "creatures") {
    view.innerHTML = entries.map(entry => {
      const species = creatureSpeciesByName.get(entry.name) || entry;
      return `<article class="specimen-entry creature-entry ${species.hostile ? "hostile" : "passive"}">
        <i class="specimen-mark" aria-hidden="true"></i>
        <div><div class="creature-record"><strong>${entry.name}</strong><b>${entry.samples} SIGHTING${entry.samples === 1 ? "" : "S"}</b></div><small>${planets[entry.planet].name} · ${entry.rarity || species.rarity || "UNCLASSIFIED"} · ${entry.behavior || species.behavior || "BEHAVIOR UNKNOWN"}</small><p>${entry.description || species.description || "Ecological analysis incomplete."}</p><em>${entry.habitat || species.habitat || planets[entry.planet].type}${entry.nocturnal || species.nocturnal ? " · NOCTURNAL" : ""}</em></div>
      </article>`;
    }).join("");
    return;
  }
  view.innerHTML = entries.map(entry => `
    <article class="specimen-entry ${category === "minerals" ? "mineral" : ""}">
      <i class="specimen-mark" aria-hidden="true"></i>
      <div><strong>${entry.name}</strong><small>${planets[entry.planet].name} · ${planets[entry.planet].type}</small></div>
      <b>${entry.samples} ${category === "creatures" ? `SIGHTING${entry.samples === 1 ? "" : "S"}` : `SAMPLE${entry.samples === 1 ? "" : "S"}`}</b>
    </article>
  `).join("");
}

function renderDiscoveries() {
  const systemView = document.querySelector("#discovery-system");
  systemView.className = "discovery-view planet-catalog";
  systemView.innerHTML = planets.map((planet, index) => {
    const visited = discoveries.planets.has(index);
    const current = ["planet", "planetFlight", "interior", "launching"].includes(state.mode) && state.planet === index;
    const status = current ? "CURRENT" : visited ? "VISITED" : "UNCHARTED";
    return `<article class="planet-entry ${current ? "current" : ""} ${visited ? "visited" : "unvisited"}">
      <img src="assets/optimized/pixel/planets/${planetImageNames[index]}.webp" alt="${planet.name}">
      <div><div class="archive-meta"><strong>${planet.name}</strong><span class="archive-status">${status}</span></div><p>${planet.type} · ${planet.weather}</p></div>
    </article>`;
  }).join("") + `<article class="planet-entry station-entry ${["stationDocking", "stationInterior"].includes(state.mode) ? "current" : ""}">
    <div class="station-archive-visual" role="img" aria-label="Meridian Relay orbital station"><i></i><b></b></div>
    <div><div class="archive-meta"><strong>${orbitalStation.name}</strong><span class="archive-status">${["stationDocking", "stationInterior"].includes(state.mode) ? "DOCKED" : stationVisited ? "VISITED" : "DETECTED"}</span></div><p>ORBITAL SERVICE RELAY · KEPLER REACH</p></div>
  </article>`;

  renderSpecimenCatalog("creatures");
  renderSpecimenCatalog("flora");
  renderSpecimenCatalog("minerals");
  ui.launchOverride.checked = settings.launchOverride;
  ui.buildOverride.checked = settings.buildOverride;
  ui.cycleSpeed.value = settings.cycleSpeed; ui.cycleSpeedValue.value = formatCycleSpeed(); ui.cycleSpeedValue.textContent = formatCycleSpeed();
}

function selectDiscoveryTab(name) {
  document.querySelectorAll(".discovery-tab").forEach(tab => {
    const selected = tab.dataset.discoveryTab === name;
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-selected", String(selected));
  });
  document.querySelectorAll(".discovery-view").forEach(view => view.classList.toggle("active", view.id === `discovery-${name}`));
}

function drawPlanetMap() {
  if (!state.mapOpen) return;
  const mapContext = ui.planetMapCanvas.getContext("2d"); const mapWidth = ui.planetMapCanvas.width; const mapHeight = ui.planetMapCanvas.height;
  const centerX = mapWidth / 2; const centerY = mapHeight / 2 - 3; const radius = Math.min(mapHeight * .38, mapWidth * .25);
  const observer = surfaceObserverPosition(); const circumference = planetSurfaceCircumferences[state.planet];
  const longitude = ((observer.x / circumference + .5) % 1 + 1) % 1 - .5;
  const latitudeDegrees = Math.max(-90, Math.min(90, -observer.y / (circumference * .25) * 90));
  const longitudeDegrees = longitude * 360; const longitudeAngle = longitude * TAU;
  const surfaceRotation = planetRotationFraction(state.planet) * TAU;
  const mapRadius = radius * (.55 - latitudeDegrees / 180 * .45);
  const markerLocalX = Math.cos(longitudeAngle) * mapRadius;
  const markerLocalY = Math.sin(longitudeAngle) * mapRadius;
  const markerX = centerX + markerLocalX * Math.cos(surfaceRotation) - markerLocalY * Math.sin(surfaceRotation);
  const markerY = centerY + markerLocalX * Math.sin(surfaceRotation) + markerLocalY * Math.cos(surfaceRotation);
  const lighting = localPlanetLighting(); const totalMinutes = Math.floor(lighting.fraction * 1440);
  const hours = String(Math.floor(totalMinutes / 60)).padStart(2, "0"); const minutes = String(totalMinutes % 60).padStart(2, "0");

  mapContext.clearRect(0, 0, mapWidth, mapHeight); mapContext.fillStyle = "#02070b"; mapContext.fillRect(0, 0, mapWidth, mapHeight);
  mapContext.fillStyle = "rgba(213,239,240,.2)";
  for (let i = 0; i < 34; i++) mapContext.fillRect((i * 173 + 29) % mapWidth, (i * 83 + 17) % mapHeight, i % 7 ? 1 : 2, i % 7 ? 1 : 2);
  mapContext.save(); mapContext.translate(centerX, centerY); mapContext.beginPath(); mapContext.arc(0, 0, radius, 0, TAU); mapContext.clip();
  const planetImage = planetImages[state.planet];
  if (planetImage.complete && planetImage.naturalWidth) {
    mapContext.save(); mapContext.rotate(surfaceRotation); mapContext.imageSmoothingEnabled = false;
    mapContext.drawImage(planetImage, -radius, -radius, radius * 2, radius * 2); mapContext.restore();
  } else { mapContext.fillStyle = planets[state.planet].ground; mapContext.fillRect(-radius, -radius, radius * 2, radius * 2); }
  mapContext.strokeStyle = "rgba(222,244,240,.14)"; mapContext.lineWidth = 1;
  for (const scale of [.34, .68]) { mapContext.beginPath(); mapContext.ellipse(0, 0, radius * scale, radius, 0, 0, TAU); mapContext.stroke(); }
  for (const scale of [.36, .7]) { mapContext.beginPath(); mapContext.ellipse(0, 0, radius, radius * scale, 0, 0, TAU); mapContext.stroke(); }
  const planetPosition = bodyPosition(state.planet); drawPlanetTerminator(mapContext, state.planet, planetPosition, radius, false);
  mapContext.restore();
  mapContext.strokeStyle = planets[state.planet].accent; mapContext.globalAlpha = .72; mapContext.lineWidth = 2; mapContext.beginPath(); mapContext.arc(centerX, centerY, radius + 1, 0, TAU); mapContext.stroke(); mapContext.globalAlpha = 1;

  mapContext.save(); mapContext.translate(markerX, markerY);
  mapContext.fillStyle = "#f4d76c"; mapContext.strokeStyle = "#f7fffb"; mapContext.lineWidth = 2;
  mapContext.beginPath(); mapContext.arc(0, 0, 6, 0, TAU); mapContext.fill(); mapContext.stroke();
  mapContext.beginPath(); mapContext.arc(0, 0, 13 + Math.sin(elapsed * 3) * 2, 0, TAU); mapContext.stroke(); mapContext.restore();
  mapContext.fillStyle = "rgba(225,241,238,.72)"; mapContext.font = "800 8px Inter, sans-serif"; mapContext.textAlign = "center";
  mapContext.fillText("CURRENT POSITION", markerX, Math.max(16, markerY - 20));

  const latitudeLabel = `${Math.abs(Math.round(latitudeDegrees))}° ${latitudeDegrees >= 0 ? "N" : "S"}`;
  const longitudeLabel = `${Math.abs(Math.round(longitudeDegrees))}° ${longitudeDegrees >= 0 ? "E" : "W"}`;
  const latitudeBand = Math.abs(latitudeDegrees) < 18 ? "EQUATORIAL" : Math.abs(latitudeDegrees) < 55 ? `${latitudeDegrees > 0 ? "NORTHERN" : "SOUTHERN"} MID-LATITUDES` : `${latitudeDegrees > 0 ? "NORTHERN" : "SOUTHERN"} POLAR`;
  ui.planetMapName.textContent = planets[state.planet].name; ui.planetMapPosition.textContent = `${latitudeLabel} · ${longitudeLabel}`;
  ui.planetMapRegion.textContent = latitudeBand; ui.planetMapTime.textContent = `${lighting.phase} · ${hours}:${minutes}`;
}

function closePlanetMap() {
  if (!state.mapOpen) return; state.mapOpen = false; state.panelOpen = false; ui.planetMap.hidden = true;
}

function openPlanetMap() {
  if (!["planet", "planetFlight", "interior", "baseInterior", "caveInterior", "mineshaft"].includes(state.mode)) { showToast("PLANETARY POSITION UNAVAILABLE"); return; }
  if (build.active) toggleBuildMode();
  closeQuickMenu(); cancelShipRecallSelection(); closeShipInventory(); closeDiscoveries(); closeUpgrades(); closeRefinery(); closeCraftingTable(); closeMissionTerminal();
  state.mapOpen = true; state.panelOpen = false; ui.planetMap.hidden = false; drawPlanetMap();
}

function togglePlanetMap() { if (state.mapOpen) closePlanetMap(); else openPlanetMap(); }

function updateUI() {
  ui.ferrite.textContent = player.inventory.ferrite; ui.flora.textContent = player.inventory.flora; ui.crystal.textContent = player.inventory.crystal;
  ui.life.style.width = `${player.life}%`;
  const fuel = launchFuelCount(); ui.objective.style.width = `${fuel ? 100 : 0}%`;
  if (!ship.repaired && fuel > 0) { ship.repaired = true; showToast("KESTREL PROPULSION SYSTEM PRIMED"); }
  const launchReady = launchAvailable();
  ui.launch.disabled = !launchReady;
  ui.launch.textContent = settings.launchOverride ? "LAUNCH WITH OVERRIDE" : fuel ? `LAUNCH INTO SPACE · ${fuel} FUEL` : "LAUNCH FUEL REQUIRED";
  document.querySelector('[data-upgrade="engine"]').disabled = player.inventory.ferrite < 6 || ship.engine > 0;
  document.querySelector('[data-upgrade="scanner"]').disabled = player.inventory.crystal < 4 || ship.scanner > 0;
  for (const [key, definition] of Object.entries(toolUpgradeDefinitions)) {
    const button = document.querySelector(`[data-upgrade="tool-${key}"]`); if (!button) continue;
    const level = toolUpgrades[key]; const cost = definition.cost(level); const maxed = level >= 3;
    button.disabled = maxed || !canAfford(cost);
    button.querySelector("strong").textContent = `${definition.name} · MK ${maxed ? 3 : level + 1}`;
    const resourceLabels = { ferrite: "FE", flora: "FL", crystal: "CR" };
    button.querySelector("[data-upgrade-cost]").textContent = maxed ? "MAX" : Object.entries(cost).map(([resource, amount]) => `${amount} ${resourceLabels[resource]}`).join(" · ");
  }
  updateShipInventory();
  updateHotbar();
  if (["planet", "interior", "baseInterior"].includes(state.mode)) renderCampaignObjective();
}

function updateShipInventory() {
  const launchReady = launchAvailable(); const fuel = launchFuelCount();
  const cargoTotal = Object.values(player.inventory).reduce((total, amount) => total + amount, 0) + Object.values(player.items).reduce((total, amount) => total + amount, 0);
  const occupiedStacks = Object.values(player.inventory).filter(amount => amount > 0).length + Object.values(player.items).filter(amount => amount > 0).length;
  ui.exosuitFerrite.textContent = player.inventory.ferrite; ui.exosuitFlora.textContent = player.inventory.flora; ui.exosuitCrystal.textContent = player.inventory.crystal;
  ui.exosuitSlotCount.textContent = `${occupiedStacks} / ${EXOSUIT_SLOT_COUNT}`;
  ui.inventoryToolCapacity.textContent = `${toolEnergyCapacity()} EN`;
  ui.inventoryLifeReadout.textContent = `${Math.round(player.life)}%`;
  ui.inventoryEnergyReadout.textContent = `${Math.ceil(player.tool)} / ${toolEnergyCapacity()}`;
  const levelLabel = level => level ? `MK ${level}` : "STANDARD";
  ui.inventoryMiningLevel.textContent = levelLabel(toolUpgrades.mining); ui.inventoryRangeLevel.textContent = levelLabel(toolUpgrades.range); ui.inventoryCombatLevel.textContent = levelLabel(toolUpgrades.combat);
  renderArmorSlots();
  const inventoryStacks = [
    ...Object.entries(player.inventory).map(([type, amount]) => ({ key: type, type, amount, definition: resourceDefinitions[type] })),
    ...Object.entries(player.items).map(([key, amount]) => ({ key, type: "item", amount, definition: itemDefinitions[key] || { name: key.replace(/[_-]+/g, " "), description: "Uncatalogued material." } })),
  ].filter(stack => stack.amount > 0).slice(0, EXOSUIT_SLOT_COUNT);
  ui.inventorySlotGrid.innerHTML = Array.from({ length: EXOSUIT_SLOT_COUNT }, (_, index) => {
    const stack = inventoryStacks[index]; if (!stack) return `<div class="inventory-slot" aria-label="Empty inventory slot"></div>`;
    const definition = stack.definition || { name: stack.type, description: "Uncatalogued material." };
    const icon = definition.icon ? `<img src="${definition.icon}" alt="">` : `<i></i>`;
    const draggable = hotbarItemEligible(stack.key) || Boolean(definition.armorSlot); const armorClass = definition.armorSlot ? `armor ${definition.armorSlot}` : "";
    return `<div class="inventory-slot occupied ${stack.type} ${armorClass} ${draggable ? "draggable" : ""}" ${draggable ? `draggable="true" data-inventory-item="${stack.key}"` : ""} data-item-name="${attributeText(definition.name)}" data-item-description="${attributeText(definition.description)}" style="--item-color:${definition.color || "#8ca09b"}" tabindex="0" aria-label="${attributeText(`${definition.name}. ${definition.description}. Quantity ${stack.amount}`)}">${icon}<b>${stack.amount}</b></div>`;
  }).join("");
  ui.shipFerrite.textContent = player.inventory.ferrite;
  ui.shipFlora.textContent = player.inventory.flora;
  ui.shipCrystal.textContent = player.inventory.crystal;
  ui.shipCargoTotal.textContent = `${cargoTotal} ${cargoTotal === 1 ? "UNIT" : "UNITS"}`;
  ui.shipEngineStatus.textContent = ship.engine ? "PULSE MK II" : "STANDARD";
  ui.shipEngineMeter.style.width = ship.engine ? "100%" : "76%";
  ui.shipWingStatus.textContent = `${ship.wings}% · NOMINAL`;
  ui.shipWingMeter.style.width = `${ship.wings}%`;
  ui.shipHullStatus.textContent = `${ship.hull}%`;
  ui.shipHullMeter.style.width = `${ship.hull}%`;
  ui.shipLaunchStatus.textContent = settings.launchOverride ? "OVERRIDE" : fuel ? `${fuel} FUEL READY` : "FUEL EMPTY";
  ui.shipLaunchStatus.style.color = launchReady ? "#62dced" : "#ffcb57";
  ui.shipLaunchMeter.style.width = launchReady ? "100%" : "18%";
  ui.shipLaunchMeter.style.background = launchReady ? "#62dced" : "#ffcb57";
  ui.shipScannerStatus.textContent = ship.scanner ? "ONLINE" : "NOT INSTALLED";
  renderInventoryHotbar();
  renderInventoryCrafting();
}

function closeShipInventory() {
  ui.shipInventory.hidden = true; document.body.classList.remove("ship-inventory-open");
  if (craftingUi.station === "craftingTable") { craftingUi.pieceId = null; craftingUi.station = "craftingTable"; }
  if (!state.discoveryOpen && ui.upgrades.hidden && !state.mapOpen && ui.refineryPanel.hidden && ui.craftingPanel.hidden) state.panelOpen = false;
}

function setInventoryView(view) {
  activeInventoryView = ["exosuit", "ship", "craft", "build"].includes(view) ? view : "exosuit";
  document.querySelectorAll("[data-inventory-view]").forEach(button => button.classList.toggle("active", button.dataset.inventoryView === activeInventoryView));
  document.querySelectorAll("[data-inventory-panel-view]").forEach(panel => { const active = panel.dataset.inventoryPanelView === activeInventoryView; panel.hidden = !active; panel.classList.toggle("active", active); });
  updateShipInventory(); renderBuildCatalog();
}

function toggleShipInventory(preferredView = null) {
  const opening = ui.shipInventory.hidden;
  if (!opening && preferredView && activeInventoryView !== preferredView) { setInventoryView(preferredView); return; }
  if (opening) { closeQuickMenu(); closePlanetMap(); closeDiscoveries(); closeUpgrades(); closeRefinery(); closeCraftingTable(); closeMissionTerminal(); setInventoryView(preferredView || "exosuit"); }
  ui.shipInventory.hidden = !opening; document.body.classList.toggle("ship-inventory-open", opening);
  state.panelOpen = opening;
  if (opening) updateShipInventory();
}

function syncMainMenuSettings() {
  ui.mainMenuCycleSpeed.value = settings.cycleSpeed; ui.mainMenuCycleValue.textContent = formatCycleSpeed().toUpperCase();
  ui.mainMenuLaunchOverride.checked = settings.launchOverride; ui.mainMenuBuildOverride.checked = settings.buildOverride;
  ui.mainMenuPlayerName.value = multiplayer.name; ui.playerName.value = multiplayer.name;
}

function updateMainMenu() {
  storedSaveAvailable = storedSaveAvailable || Boolean(readSaveGame());
  const continueLabel = gameSessionStarted ? "RESUME EXPEDITION" : storedSaveAvailable ? "CONTINUE EXPEDITION" : "BEGIN EXPEDITION";
  ui.mainMenuContinue.querySelector("strong").textContent = continueLabel;
  ui.mainMenuNew.hidden = !storedSaveAvailable && !gameSessionStarted;
  const stage = campaign.rewardClaimed ? "FIRST FOOTFALL COMPLETE" : `FIRST FOOTFALL · STAGE ${Math.min(3, campaign.stage + 1)}/3`;
  ui.mainMenuSaveSummary.textContent = storedSaveAvailable ? `${planets[state.planet].name} · ${stage}` : "THALASSA · NEW EXPEDITION";
  syncMainMenuSettings();
}

function closeMainMenuSettings() {
  ui.mainMenuSettingsPanel.hidden = true; ui.mainMenuPrimary.hidden = false;
}

function openMainMenu() {
  if (gameSessionStarted) { saveGame(); storedSaveAvailable = true; }
  if (build.active) toggleBuildMode(); closeQuickMenu(); cancelShipRecallSelection();
  closePlanetMap(); closeShipInventory(); closeDiscoveries(); closeUpgrades(); closeRefinery(); closeCraftingTable(); closeMissionTerminal();
  clearTimeout(newExpeditionConfirmTimer); ui.mainMenuNew.classList.remove("confirm"); ui.mainMenuNew.querySelector("strong").textContent = "NEW EXPEDITION";
  closeMainMenuSettings(); updateMainMenu(); state.menuOpen = true; state.panelOpen = true; ui.mainMenu.hidden = false; document.body.classList.add("main-menu-open"); keys.clear();
}

function closeMainMenu() {
  state.menuOpen = false; state.panelOpen = false; gameSessionStarted = true; ui.mainMenu.hidden = true; document.body.classList.remove("main-menu-open"); last = performance.now(); keys.clear();
}

function requestNewExpedition() {
  if (!storedSaveAvailable && !gameSessionStarted) { closeMainMenu(); return; }
  if (!ui.mainMenuNew.classList.contains("confirm")) {
    ui.mainMenuNew.classList.add("confirm"); ui.mainMenuNew.querySelector("strong").textContent = "CONFIRM SAVE RESET";
    clearTimeout(newExpeditionConfirmTimer); newExpeditionConfirmTimer = setTimeout(() => { ui.mainMenuNew.classList.remove("confirm"); ui.mainMenuNew.querySelector("strong").textContent = "NEW EXPEDITION"; }, 3500); return;
  }
  try { localStorage.removeItem(SAVE_KEY); sessionStorage.setItem("wayfarer.autoStart", "new"); } catch {}
  location.reload();
}

function showToast(message) { ui.toast.textContent = message; ui.toast.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => ui.toast.classList.remove("show"), 1500); }
function openDiscoveries() {
  closeQuickMenu(); cancelShipRecallSelection();
  closePlanetMap(); closeShipInventory(); closeUpgrades(); closeRefinery(); closeCraftingTable(); closeMissionTerminal(); state.discoveryOpen = true; state.panelOpen = true; renderDiscoveries(); ui.discoveries.hidden = false;
  selectDiscoveryTab(document.querySelector(".discovery-tab.active")?.dataset.discoveryTab || "system");
}
function closeDiscoveries() { if (!state.discoveryOpen) return; state.discoveryOpen = false; state.panelOpen = false; ui.discoveries.hidden = true; }
function toggleDiscoveries() { if (state.discoveryOpen) closeDiscoveries(); else openDiscoveries(); }
function openUpgrades() { closePlanetMap(); closeDiscoveries(); closeShipInventory(); closeRefinery(); closeCraftingTable(); closeMissionTerminal(); state.panelOpen = true; ui.upgrades.hidden = false; updateUI(); }
function closeUpgrades() { state.panelOpen = false; ui.upgrades.hidden = true; }

function launch() {
  if (!launchAvailable()) { showToast("LAUNCH FUEL REQUIRED"); return; }
  if (!settings.launchOverride) changeMaterial("launch_fuel", -1);
  updateUI(); saveGame();
  closeUpgrades(); state.mode = "launching"; state.launchTime = 0; player.x = ship.x; player.y = ship.y; ui.interaction.hidden = true;
  interiorPlayer.vx = 0; interiorPlayer.vy = 0; interiorPlayer.pilotProgress = 0;
  document.body.classList.remove("interior-mode"); document.body.classList.add("cinematic");
}
function enterSpace() {
  const origin = bodyPosition(state.planet); const length = Math.hypot(origin.x, origin.y) || 1; const outwardX = origin.x / length; const outwardY = origin.y / length;
  spaceShip.x = origin.x + outwardX * (solarBodies[state.planet].radius + 900); spaceShip.y = origin.y + outwardY * (solarBodies[state.planet].radius + 900);
  spaceShip.vx = outwardX * 360; spaceShip.vy = outwardY * 360; spaceShip.angle = Math.atan2(outwardY, outwardX); spaceShip.zoom = .105; spaceShip.pulse = false; spaceShip.landProgress = 0; spaceShip.landingArmed = false; spaceShip.target = (state.planet + 1) % planets.length;
  state.mode = "space"; ui.resources.hidden = true; ui.hotbar.hidden = true; ui.targetControl.hidden = false; ui.orbitControl.hidden = true; ui.toolLabel.textContent = "SPD"; ui.interaction.hidden = true;
  document.body.classList.remove("cinematic");
  showToast("ORBIT ACHIEVED");
}
function beginPlanetReentry(index) {
  state.planet = index; discoveries.planets.add(index); state.mode = "reentry"; state.panelOpen = false; reentry.time = 0; reentry.planet = index; reentry.surfaceFade = 0;
  ship.vx = 0; ship.vy = 0; keys.clear(); makeWorld(index);
  closeQuickMenu(); closeShipInventory(); closeDiscoveries(); closeUpgrades(); closeRefinery(); closeCraftingTable(); ui.interaction.hidden = true; ui.targetControl.hidden = true; ui.orbitControl.hidden = true;
  document.body.classList.add("cinematic");
}

function completePlanetReentry() {
  ship.x = 90; ship.y = -80; ship.angle = Math.PI / 2; ship.vx = 0; ship.vy = 0;
  ui.resources.hidden = false; ui.hotbar.hidden = false; ui.targetControl.hidden = true; ui.toolLabel.textContent = "THR";
  updateUI(); enterPlanetFlight(); reentry.surfaceFade = 1; document.body.classList.remove("cinematic"); saveGame();
}

function drawPlanetScene(showPlayer = true) {
  const lighting = localPlanetLighting();
  ctx.save(); ctx.translate(width / 2, height / 2); ctx.scale(camera.zoom, camera.zoom); ctx.translate(-width / 2, -height / 2);
  drawGround();
  visibleDrawables.length = 0;
  for (const object of world) if (object.alive && worldPointVisible(object.x, object.y, surfaceDrawableRadius(object))) visibleDrawables.push(object);
  for (const creature of creatures) if (creature.alive && worldPointVisible(creature.x, creature.y, surfaceDrawableRadius(creature))) visibleDrawables.push(creature);
  visibleDrawables.sort((a, b) => a.y - b.y);
  for (const o of visibleDrawables) { if (o.species) drawCreature(o); else drawObject(o); }
  drawPowerWires();
  drawWaterPipes();
  drawBases();
  if (!showPlayer) drawBaseRoofs();
  drawRemoteScreenActors();
  if (showPlayer && shipRecall.active) { drawPlayer(); drawBaseRoofs(); drawShip(); }
  else { drawShip(); if (showPlayer) { drawPlayer(); drawBaseRoofs(); } }
  drawBuildPreview();
  drawShipRecallTarget();
  drawSurfaceLighting(showPlayer);
  drawSolarReadouts();
  drawBatteryReadouts(false);
  drawCreatureScanner();
  ctx.restore();
  drawAtmosphere(frameDt);
  const edgeShade = .12 + lighting.night * .28;
  const vignette = ctx.createRadialGradient(width / 2, height / 2, Math.min(width,height) * .2, width / 2, height / 2, Math.max(width,height) * .72);
  vignette.addColorStop(0, "transparent"); vignette.addColorStop(1, `rgba(1,8,10,${edgeShade})`); ctx.fillStyle = vignette; ctx.fillRect(0,0,width,height);
  if (reentry.surfaceFade > 0) { ctx.fillStyle = `rgba(0,0,0,${reentry.surfaceFade})`; ctx.fillRect(0, 0, width, height); }
}

function drawUndergroundElevator() {
  const s = screenPoint(0, 0); const powered = basePowerNetwork().surfaceOnline; const pulse = powered ? .72 + Math.sin(elapsed * 3.2) * .12 : .16;
  const view = surfaceViewBounds(70); if (s.x < view.left || s.x > view.right || s.y < view.top || s.y > view.bottom) return;
  ctx.save(); ctx.translate(Math.round(s.x), Math.round(s.y));
  const glow = ctx.createRadialGradient(0, 0, 8, 0, 0, 62);
  glow.addColorStop(0, `rgba(98,220,237,${.2 * pulse})`); glow.addColorStop(1, "rgba(98,220,237,0)");
  ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(0, 0, 62, 0, TAU); ctx.fill();
  if (undergroundExitImage.complete && undergroundExitImage.naturalWidth) {
    ctx.save(); if (!powered) { ctx.filter = "grayscale(.82) brightness(.5)"; ctx.globalAlpha = .68; } ctx.drawImage(undergroundExitImage, -57, -57, 114, 114); ctx.restore();
  }
  else {
    ctx.fillStyle = "#15252a"; ctx.beginPath(); ctx.arc(0, 0, 30, 0, TAU); ctx.fill();
    ctx.strokeStyle = "#dce5e1"; ctx.lineWidth = 4; ctx.stroke();
    ctx.strokeStyle = `rgba(98,220,237,${pulse})`; ctx.lineWidth = 2; ctx.setLineDash([8, 6]); ctx.beginPath(); ctx.arc(0, 0, 22, 0, TAU); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = "#9e343d"; ctx.fillRect(-18, -3, 36, 6); ctx.fillStyle = "#62dced"; ctx.fillRect(-3, -18, 6, 36);
  }
  ctx.restore();
}

function drawUndergroundTerrain(cells = excavatedCells[state.planet], floorImage = undergroundFloorImage, rockImage = undergroundRockImage) {
  const view = surfaceViewBounds(EXCAVATION_GRID); const half = EXCAVATION_GRID / 2;
  ctx.fillStyle = "#070c0e"; ctx.fillRect(view.left, view.top, view.right - view.left, view.bottom - view.top);
  const patternFor = image => {
    let pattern = terrainPatternCache.get(image);
    if (!pattern) { pattern = ctx.createPattern(image, "repeat"); if (pattern) terrainPatternCache.set(image, pattern); }
    const scale = image === undergroundFloorImage || image === undergroundRockImage ? .49 : .2;
    pattern?.setTransform(new DOMMatrix().translate(width / 2 - camera.x, height / 2 - camera.y).scale(scale)); return pattern;
  };
  const hasFloorTexture = floorImage.complete && floorImage.naturalWidth;
  const floorPattern = hasFloorTexture ? patternFor(floorImage) : null;
  if (hasFloorTexture) {
    if (floorImage === undergroundFloorImage) undergroundFloorPattern = floorPattern;
  }
  if (rockImage.complete && rockImage.naturalWidth) {
    const rockPattern = patternFor(rockImage); if (rockImage === undergroundRockImage) undergroundRockPattern = rockPattern;
    ctx.save(); ctx.globalAlpha = .36; ctx.fillStyle = rockPattern;
    ctx.fillRect(view.left, view.top, view.right - view.left, view.bottom - view.top); ctx.restore();
  }
  const halfWorldWidth = width / (2 * camera.zoom) + EXCAVATION_GRID * 2; const halfWorldHeight = height / (2 * camera.zoom) + EXCAVATION_GRID * 2;
  const minCellX = excavationCell(camera.x - halfWorldWidth); const maxCellX = excavationCell(camera.x + halfWorldWidth);
  const minCellY = excavationCell(camera.y - halfWorldHeight); const maxCellY = excavationCell(camera.y + halfWorldHeight);
  for (let cellX = minCellX; cellX <= maxCellX; cellX++) for (let cellY = minCellY; cellY <= maxCellY; cellY++) {
    if (!cells.has(excavationKey(cellX, cellY))) continue;
    const worldX = cellX * EXCAVATION_GRID; const worldY = cellY * EXCAVATION_GRID;
    const s = screenPoint(worldX, worldY);
    if (s.x < view.left || s.x > view.right || s.y < view.top || s.y > view.bottom) continue;
    const n = noise(worldX, worldY, planets[state.planet].seed + 130);
    if (hasFloorTexture) {
      ctx.globalAlpha = .82; ctx.fillStyle = floorPattern;
      ctx.fillRect(s.x - half, s.y - half, EXCAVATION_GRID, EXCAVATION_GRID); ctx.globalAlpha = 1;
      ctx.fillStyle = n > 0 ? "rgba(25,42,43,.22)" : "rgba(6,15,17,.24)"; ctx.fillRect(s.x - half, s.y - half, EXCAVATION_GRID, EXCAVATION_GRID);
    } else {
      ctx.fillStyle = n > 0 ? "#1b2628" : "#172124"; ctx.fillRect(s.x - half, s.y - half, EXCAVATION_GRID, EXCAVATION_GRID);
    }
    ctx.strokeStyle = "rgba(119,139,135,.48)"; ctx.lineWidth = 5; ctx.beginPath();
    if (!cells.has(excavationKey(cellX, cellY - 1))) { ctx.moveTo(s.x - half, s.y - half); ctx.lineTo(s.x + half, s.y - half); }
    if (!cells.has(excavationKey(cellX + 1, cellY))) { ctx.moveTo(s.x + half, s.y - half); ctx.lineTo(s.x + half, s.y + half); }
    if (!cells.has(excavationKey(cellX, cellY + 1))) { ctx.moveTo(s.x + half, s.y + half); ctx.lineTo(s.x - half, s.y + half); }
    if (!cells.has(excavationKey(cellX - 1, cellY))) { ctx.moveTo(s.x - half, s.y + half); ctx.lineTo(s.x - half, s.y - half); }
    ctx.stroke();
  }
}

function drawUndergroundDigTarget() {
  if (build.active) return;
  const target = undergroundDigTarget(); if (!target) return;
  const s = screenPoint(target.x, target.y); const pulse = .62 + Math.sin(elapsed * 5) * .16;
  const scannedDeposit = ship.scanner && undergroundDepositForCell(target.cellX, target.cellY);
  const color = scannedDeposit ? `rgba(98,220,237,${pulse})` : `rgba(242,196,93,${pulse})`;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.setLineDash([8, 6]);
  ctx.strokeRect(s.x - EXCAVATION_GRID / 2 + 5, s.y - EXCAVATION_GRID / 2 + 5, EXCAVATION_GRID - 10, EXCAVATION_GRID - 10); ctx.setLineDash([]);
  ctx.fillStyle = scannedDeposit ? "rgba(98,220,237,.07)" : `rgba(242,196,93,${underground.digProgress / 1.1 * .16})`; ctx.fillRect(s.x - 42, s.y - 42, 84, 84); ctx.restore();
}

function drawOreDeposit(deposit, view = surfaceViewBounds(70)) {
    const s = screenPoint(deposit.x, deposit.y);
    if (s.x < view.left || s.x > view.right || s.y < view.top || s.y > view.bottom) return;
    const rare = deposit.kind === "rare"; const copper = deposit.kind === "copper"; const silica = deposit.kind === "silica";
    const color = rare ? itemDefinitions[deposit.item].color : copper ? itemDefinitions.copper_ore.color : silica ? itemDefinitions.silica.color : "#c8a876";
    const image = undergroundOreImages[deposit.kind];
    ctx.save(); ctx.translate(s.x, s.y);
    if (!rare && image?.complete && image.naturalWidth) {
      const size = 90; ctx.rotate((deposit.phase - Math.PI) * .08); ctx.drawImage(image, -size / 2, -size / 2, size, size); ctx.restore(); return;
    }
    ctx.rotate(deposit.phase); ctx.strokeStyle = color; ctx.fillStyle = color;
    ctx.shadowColor = color; ctx.shadowBlur = rare ? 22 : silica ? 10 : 5; ctx.lineCap = "round"; ctx.lineJoin = "round";
    for (let vein = 0; vein < (rare ? 6 : 4); vein++) {
      const angle = vein * TAU / (rare ? 6 : 4) + Math.sin(deposit.phase + vein) * .34;
      const length = (rare ? 34 : 26) + Math.sin(deposit.phase * 2 + vein * 1.7) * 7;
      ctx.lineWidth = rare ? 5 : silica ? 4 : copper ? 5 : 6; ctx.beginPath(); ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(angle + .15) * length * .48, Math.sin(angle + .15) * length * .48);
      ctx.lineTo(Math.cos(angle) * length, Math.sin(angle) * length); ctx.stroke();
      ctx.beginPath(); ctx.arc(Math.cos(angle) * length, Math.sin(angle) * length, rare ? 4 : 3, 0, TAU); ctx.fill();
    }
    ctx.shadowBlur = 0; ctx.fillStyle = "#edf7f2"; ctx.globalAlpha = rare ? .85 : .42; ctx.beginPath(); ctx.arc(0, 0, rare ? 8 : 5, 0, TAU); ctx.fill(); ctx.restore();
}

function drawUndergroundDeposits() {
  const view = surfaceViewBounds(70); for (const deposit of visibleUndergroundDeposits()) drawOreDeposit(deposit, view);
}

function drawNaturalCaveDeposits(cave) {
  const view = surfaceViewBounds(70); for (const deposit of naturalCaveDeposits(cave)) drawOreDeposit(deposit, view);
}

function drawUndergroundScene() {
  ctx.save(); ctx.translate(width / 2, height / 2); ctx.scale(camera.zoom, camera.zoom); ctx.translate(-width / 2, -height / 2);
  drawUndergroundTerrain();
  drawUndergroundDeposits();
  undergroundPieces[state.planet].sort((a, b) => a.y - b.y);
  for (const piece of undergroundPieces[state.planet]) drawBasePiece(piece);
  drawPowerWires();
  drawWaterPipes();
  drawBatteryReadouts(true);
  drawUndergroundElevator(); drawUndergroundDigTarget(); drawRemoteScreenActors(); drawPlayer(); drawBuildPreview();
  ctx.restore();
  const vignette = ctx.createRadialGradient(width / 2, height / 2, Math.min(width, height) * .18, width / 2, height / 2, Math.max(width, height) * .76);
  vignette.addColorStop(0, "rgba(0,0,0,0)"); vignette.addColorStop(1, "rgba(0,2,3,.78)"); ctx.fillStyle = vignette; ctx.fillRect(0, 0, width, height);
}

function drawNaturalCaveFeatures(cave) {
  const planet = planets[state.planet];
  const halfWorldWidth = width / (2 * camera.zoom) + 120; const halfWorldHeight = height / (2 * camera.zoom) + 120;
  for (let cellX = excavationCell(camera.x - halfWorldWidth); cellX <= excavationCell(camera.x + halfWorldWidth); cellX++) for (let cellY = excavationCell(camera.y - halfWorldHeight); cellY <= excavationCell(camera.y + halfWorldHeight); cellY++) {
    if (!cave.cells.has(excavationKey(cellX, cellY))) continue;
    const hash = Math.abs(Math.sin(cellX * 91.7 + cellY * 173.3 + planet.seed * 27.1));
    if (hash > .055 || Math.abs(cellX) < 3 && Math.abs(cellY) < 3) continue;
    const s = screenPoint(cellX * EXCAVATION_GRID, cellY * EXCAVATION_GRID);
    if (s.x < -50 || s.x > width + 50 || s.y < -50 || s.y > height + 50) continue;
    ctx.save(); ctx.translate(s.x, s.y); ctx.rotate(hash * TAU); ctx.fillStyle = hash < .018 ? planet.accent : "#788985"; ctx.globalAlpha = .5;
    ctx.beginPath(); ctx.moveTo(-12, 7); ctx.lineTo(-5, -10); ctx.lineTo(8, -7); ctx.lineTo(14, 8); ctx.closePath(); ctx.fill(); ctx.restore();
  }
  const ladder = screenPoint(0, 0); ctx.save(); ctx.translate(ladder.x, ladder.y);
  ctx.fillStyle = "rgba(0,0,0,.55)"; ctx.beginPath(); ctx.ellipse(0, 3, 34, 24, 0, 0, TAU); ctx.fill(); ctx.strokeStyle = "#91a29d"; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(-11, -24); ctx.lineTo(-11, 24); ctx.moveTo(11, -24); ctx.lineTo(11, 24); ctx.stroke();
  for (let y = -18; y <= 18; y += 9) { ctx.beginPath(); ctx.moveTo(-11, y); ctx.lineTo(11, y); ctx.stroke(); } ctx.restore();
  const door = screenPoint(cave.door.x, cave.door.y); const pulse = .45 + Math.sin(elapsed * 2.3) * .13; ctx.save(); ctx.translate(door.x, door.y);
  if (mineshaftDoorImage.complete && mineshaftDoorImage.naturalWidth) {
    ctx.drawImage(mineshaftDoorImage, -72, -72, 144, 144); ctx.fillStyle = `rgba(98,220,237,${pulse})`; ctx.fillRect(34, -4, 4, 11);
  } else {
    ctx.fillStyle = "#091113"; ctx.fillRect(-38, -48, 76, 96); ctx.fillStyle = "#263236"; ctx.fillRect(-31, -41, 62, 82); ctx.fillStyle = "#11191c"; ctx.fillRect(-24, -34, 48, 68);
    ctx.strokeStyle = "#778681"; ctx.lineWidth = 4; ctx.strokeRect(-31, -41, 62, 82); ctx.fillStyle = `rgba(98,220,237,${pulse})`; ctx.fillRect(17, -3, 5, 12);
  }
  ctx.restore();
}

function drawNaturalCaveScene() {
  const cave = naturalCave.active; ctx.fillStyle = "#030708"; ctx.fillRect(0, 0, width, height); if (!cave) return;
  ctx.save(); ctx.translate(width / 2, height / 2); ctx.scale(camera.zoom, camera.zoom); ctx.translate(-width / 2, -height / 2);
  drawUndergroundTerrain(cave.cells, naturalCavernFloorImage, naturalCavernWallImage); drawNaturalCaveDeposits(cave); drawNaturalCaveFeatures(cave); drawRemoteScreenActors(); drawPlayer(); ctx.restore();
  const vignette = ctx.createRadialGradient(width / 2, height / 2, Math.min(width, height) * .15, width / 2, height / 2, Math.max(width, height) * .72);
  vignette.addColorStop(0, "rgba(0,0,0,.02)"); vignette.addColorStop(1, "rgba(0,2,3,.86)"); ctx.fillStyle = vignette; ctx.fillRect(0, 0, width, height);
}

function drawMineshaftScene() {
  ctx.fillStyle = "#020506"; ctx.fillRect(0, 0, width, height); ctx.save(); ctx.translate(width / 2, height / 2); ctx.scale(camera.zoom, camera.zoom); ctx.translate(-width / 2, -height / 2);
  const areas = [[-62, -840, 62, 185], [-330, -350, 330, -165], [-330, -715, 330, -530]];
  let shaftFloorPattern = null;
  if (naturalCavernFloorImage.complete && naturalCavernFloorImage.naturalWidth) {
    shaftFloorPattern = terrainPatternCache.get(naturalCavernFloorImage);
    if (!shaftFloorPattern) { shaftFloorPattern = ctx.createPattern(naturalCavernFloorImage, "repeat"); if (shaftFloorPattern) terrainPatternCache.set(naturalCavernFloorImage, shaftFloorPattern); }
    shaftFloorPattern?.setTransform(new DOMMatrix().translate(width / 2 - camera.x, height / 2 - camera.y).scale(.16));
  }
  for (const [left, top, right, bottom] of areas) {
    const s = screenPoint(left, top); ctx.fillStyle = shaftFloorPattern || "#151b1a"; ctx.fillRect(s.x, s.y, right - left, bottom - top); ctx.fillStyle = "rgba(8,12,12,.36)"; ctx.fillRect(s.x, s.y, right - left, bottom - top); ctx.strokeStyle = "#59605a"; ctx.lineWidth = 6; ctx.strokeRect(s.x, s.y, right - left, bottom - top);
  }
  const corridorFloor = screenPoint(-56, -835);
  if (mineshaftRailFloorImage.complete && mineshaftRailFloorImage.naturalWidth) {
    for (let y = -835; y < 179; y += 112) { const tile = screenPoint(-56, y); ctx.drawImage(mineshaftRailFloorImage, tile.x, tile.y, 112, 112); }
  } else {
    ctx.fillStyle = "#151b1a"; ctx.fillRect(corridorFloor.x, corridorFloor.y, 112, 1014); ctx.strokeStyle = "#69716c"; ctx.lineWidth = 3;
    for (const railX of [-18, 18]) { const a = screenPoint(railX, 130); const b = screenPoint(railX, -830); ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
  }
  if (mineshaftSupportImage.complete && mineshaftSupportImage.naturalWidth) {
    for (let y = 92; y >= -812; y -= 152) { const support = screenPoint(0, y); ctx.drawImage(mineshaftSupportImage, support.x - 67, support.y - 49, 134, 98); }
  } else {
    ctx.strokeStyle = "#6f6047"; ctx.lineWidth = 5;
    for (let y = 125; y >= -825; y -= 76) { const left = screenPoint(-51, y); const right = screenPoint(51, y); ctx.beginPath(); ctx.moveTo(left.x, left.y); ctx.lineTo(right.x, right.y); ctx.stroke(); }
  }
  const exit = screenPoint(0, 156);
  if (mineshaftDoorImage.complete && mineshaftDoorImage.naturalWidth) ctx.drawImage(mineshaftDoorImage, exit.x - 48, exit.y - 48, 96, 96);
  else { ctx.fillStyle = "#0a1011"; ctx.fillRect(exit.x - 32, exit.y - 24, 64, 48); ctx.strokeStyle = "#7d8984"; ctx.lineWidth = 3; ctx.strokeRect(exit.x - 32, exit.y - 24, 64, 48); }
  mineshaftChestPositions().forEach((chest, index) => {
    const s = screenPoint(chest.x, chest.y); const opened = openedMineshaftChests.has(`${naturalCave.active.key}:${index}`); ctx.save(); ctx.translate(s.x, s.y);
    const chestImage = opened ? salvageChestOpenImage : salvageChestClosedImage;
    if (chestImage.complete && chestImage.naturalWidth) ctx.drawImage(chestImage, -43, -43, 86, 86);
    else { ctx.fillStyle = opened ? "#27302e" : "#46554f"; ctx.fillRect(-24, -15, 48, 30); ctx.strokeStyle = "#a18b57"; ctx.lineWidth = 3; ctx.strokeRect(-24, -15, 48, 30); }
    ctx.restore();
  });
  drawRemoteScreenActors(); drawPlayer(); ctx.restore();
  const vignette = ctx.createRadialGradient(width / 2, height / 2, 90, width / 2, height / 2, Math.max(width, height) * .72); vignette.addColorStop(0, "rgba(0,0,0,.05)"); vignette.addColorStop(1, "rgba(0,0,0,.88)"); ctx.fillStyle = vignette; ctx.fillRect(0, 0, width, height);
}

function drawInteriorPlayer() {
  ctx.save(); ctx.translate(Math.round(interiorPlayer.x), Math.round(interiorPlayer.y));
  ctx.fillStyle = "rgba(0,0,0,.32)"; ctx.beginPath(); ctx.ellipse(4, 8, 11, 6, 0, 0, TAU); ctx.fill();
  if (playerImage.complete && playerImage.naturalWidth) {
    const cellW = playerImage.naturalWidth / 4; const cellH = playerImage.naturalHeight / 4;
    const moving = Math.hypot(interiorPlayer.vx, interiorPlayer.vy) > 10;
    const frame = moving ? Math.floor(interiorPlayer.walkTime * 9) % 4 : 0;
    const drawH = 50; const drawW = drawH * cellW / cellH;
    ctx.drawImage(playerImage, frame * cellW, interiorPlayer.facing * cellH, cellW, cellH, Math.round(-drawW / 2), -41, Math.round(drawW), drawH);
  } else {
    ctx.fillStyle = "#e8eee9"; ctx.fillRect(-7, -18, 14, 24); ctx.fillStyle = "#163c47"; ctx.fillRect(-6, -17, 12, 6);
  }
  ctx.restore();
}

function drawShipInterior() {
  ctx.fillStyle = "#020509"; ctx.fillRect(0, 0, width, height);
  const scale = Math.min((width - 24) / 640, (height - 88) / 360, 1.4);
  ctx.save(); ctx.translate(width / 2, height / 2 + 10); ctx.scale(scale, scale);

  if (interiorBackgroundImage.complete && interiorBackgroundImage.naturalWidth) {
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = "high";
    ctx.drawImage(interiorBackgroundImage, -320, -180, 640, 360);
    ctx.imageSmoothingEnabled = false;
  } else {
    ctx.fillStyle = "#152126"; ctx.fillRect(-176, -108, 352, 220);
  }

  ctx.save(); ctx.globalCompositeOperation = "screen";
  const reactorGlow = ctx.createRadialGradient(123, -2, 2, 123, -2, 28);
  reactorGlow.addColorStop(0, `rgba(80,235,255,${.15 + Math.sin(elapsed * 3.2) * .04})`);
  reactorGlow.addColorStop(1, "rgba(80,235,255,0)");
  ctx.fillStyle = reactorGlow; ctx.fillRect(93, -32, 60, 60);
  ctx.fillStyle = `rgba(90,232,244,${.28 + Math.sin(elapsed * 4) * .08})`;
  ctx.fillRect(-54, 118, 3, 8); ctx.fillRect(51, 118, 3, 8);
  ctx.fillRect(-34, -151, 18, 2); ctx.fillRect(16, -151, 18, 2);
  ctx.restore();

  ctx.save();
  ctx.fillStyle = "rgba(2,9,12,.86)"; ctx.fillRect(-157, -20, 39, 28);
  ctx.strokeStyle = campaign.stage >= 3 && !campaign.rewardClaimed ? "#f2c45d" : "#62dced"; ctx.lineWidth = 1; ctx.strokeRect(-157, -20, 39, 28);
  ctx.fillStyle = campaign.stage >= 3 && !campaign.rewardClaimed ? `rgba(242,196,93,${.55 + Math.sin(elapsed * 4) * .18})` : "rgba(98,220,237,.55)";
  ctx.fillRect(-152, -15, 29, 3); ctx.fillRect(-152, -8, 20, 2); ctx.fillRect(-152, -3, 25, 2);
  ctx.restore();

  drawRemoteDirectActors(); drawInteriorPlayer();
  ctx.restore();

  const vignette = ctx.createRadialGradient(width / 2, height / 2, Math.min(width, height) * .22, width / 2, height / 2, Math.max(width, height) * .68);
  vignette.addColorStop(0, "transparent"); vignette.addColorStop(1, "rgba(0,2,5,.34)"); ctx.fillStyle = vignette; ctx.fillRect(0, 0, width, height);
}

function drawAscentBackground(image, ascent) {
  const coverScale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const scale = coverScale * (1.2 - ascent * .12);
  const drawWidth = image.naturalWidth * scale;
  const drawHeight = image.naturalHeight * scale;
  const overflowY = Math.max(0, drawHeight - height);
  const x = (width - drawWidth) / 2 + Math.sin(ascent * Math.PI) * 10;
  const y = -overflowY * (1 - ascent);
  ctx.save();
  ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = "high";
  ctx.drawImage(image, x, y, drawWidth, drawHeight);
  ctx.restore();
  ctx.imageSmoothingEnabled = false;
}

function drawLaunchCutscene() {
  const t = state.launchTime;
  const p = planets[state.planet];
  if (t < 1.2) {
    drawPlanetScene(false);
    const s = screenPoint(ship.x, ship.y);
    ctx.save(); ctx.translate(s.x, s.y);
    for (let i = 0; i < 6; i++) {
      const spread = 14 + t * 70 + i * 8;
      ctx.fillStyle = `rgba(${state.planet === 1 ? "225,113,57" : state.planet === 2 ? "190,239,244" : "174,210,164"},${Math.max(0, .2 - i * .022 - t * .08)})`;
      ctx.beginPath(); ctx.ellipse(-26 - t * 30, (i - 2.5) * 7, spread, 5 + t * 9, ship.angle, 0, TAU); ctx.fill();
    }
    ctx.restore();
    ctx.fillStyle = `rgba(255,240,194,${Math.max(0, .14 - t * .11)})`; ctx.fillRect(0, 0, width, height);
  } else {
    const ascent = smoothstep(1.2, 4.25, t);
    const starsVisible = smoothstep(1.65, 2.75, t);
    const launchBackground = launchBackgrounds[state.planet];
    const customBackgroundReady = launchBackground.complete && launchBackground.naturalWidth;
    if (customBackgroundReady) {
      drawAscentBackground(launchBackground, ascent);
      ctx.fillStyle = `rgba(0,3,9,${ascent * .13})`; ctx.fillRect(0, 0, width, height);
    } else {
      const sky = ctx.createLinearGradient(0, 0, 0, height);
      sky.addColorStop(0, ascent < .35 ? p.ground2 : "#02050b");
      sky.addColorStop(.55, ascent < .22 ? p.ground : "#07121c");
      sky.addColorStop(1, "#020409");
      ctx.fillStyle = sky; ctx.fillRect(0, 0, width, height);
    }

    ctx.save(); ctx.globalAlpha = starsVisible;
    for (const star of state.stars) {
      ctx.fillStyle = `rgba(225,243,247,${star.alpha})`;
      ctx.fillRect(star.x, star.y, Math.max(1, star.size), Math.max(1, star.size));
    }
    ctx.restore();

    if (!customBackgroundReady) {
      const planetRadius = Math.max(width, height) * (1.25 - ascent * .74);
      const planetY = height + planetRadius * (.5 + ascent * .25);
      const planetImage = planetImages[state.planet];
      ctx.save(); ctx.globalAlpha = 1 - ascent * .12; ctx.shadowColor = p.accent; ctx.shadowBlur = 26;
      if (planetImage.complete && planetImage.naturalWidth) ctx.drawImage(planetImage, width / 2 - planetRadius, planetY - planetRadius, planetRadius * 2, planetRadius * 2);
      else { ctx.fillStyle = p.ground; ctx.beginPath(); ctx.arc(width / 2, planetY, planetRadius, 0, TAU); ctx.fill(); }
      ctx.restore();
    }

    ctx.save(); ctx.globalAlpha = .12 + (1 - ascent) * .22;
    for (let i = 0; i < 38; i++) {
      const x = (i * 193 + state.planet * 71) % (width + 80) - 40;
      const y = (i * 97 + t * (210 + i % 5 * 25)) % (height + 120) - 60;
      const length = 18 + ascent * 72 + i % 4 * 9;
      ctx.strokeStyle = i % 3 ? "#d9eef0" : p.accent; ctx.lineWidth = 1 + i % 2;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + length); ctx.stroke();
    }
    ctx.restore();

    const shipY = height * (.68 - ascent * .23);
    ctx.save(); ctx.translate(width / 2, shipY); ctx.rotate(-Math.PI / 2);
    const flameLength = 72 + Math.sin(t * 31) * 12 + ascent * 45;
    ctx.fillStyle = `rgba(98,220,237,${.68 + Math.sin(t * 23) * .12})`;
    ctx.beginPath(); ctx.moveTo(-47, -8); ctx.lineTo(-47 - flameLength, 0); ctx.lineTo(-47, 8); ctx.closePath(); ctx.fill();
    drawKestrelArt(1.45 - ascent * .2);
    ctx.restore();

    const bar = Math.max(30, height * .055);
    ctx.fillStyle = "#010307"; ctx.fillRect(0, 0, width, bar); ctx.fillRect(0, height - bar, width, bar);
    ctx.fillStyle = "rgba(226,241,240,.78)"; ctx.font = "800 9px Inter, sans-serif"; ctx.textAlign = "left";
    ctx.fillText(`${p.name} · ATMOSPHERE EXIT`, 22, bar / 2 + 3);
    ctx.textAlign = "right"; ctx.fillStyle = p.accent; ctx.fillText(ascent < .7 ? "ASCENT" : "ORBITAL INSERTION", width - 22, bar / 2 + 3);

    const fade = smoothstep(4.28, 4.6, t);
    if (fade > 0) { ctx.fillStyle = `rgba(0,0,0,${fade})`; ctx.fillRect(0, 0, width, height); }
  }
}

function drawPlanetReentry() {
  const t = reentry.time; const p = planets[reentry.planet];
  const descent = smoothstep(.65, 5.05, t); const atmosphere = smoothstep(.75, 1.8, t);
  ctx.fillStyle = "#010409"; ctx.fillRect(0, 0, width, height);

  ctx.save(); ctx.globalAlpha = 1 - atmosphere;
  for (const star of state.stars) {
    const streak = 2 + descent * 38 * star.alpha;
    ctx.strokeStyle = `rgba(225,243,247,${star.alpha})`; ctx.lineWidth = Math.max(1, star.size);
    ctx.beginPath(); ctx.moveTo(star.x, star.y); ctx.lineTo(star.x, star.y - streak); ctx.stroke();
  }
  ctx.restore();

  const planetImage = planetImages[reentry.planet]; const planetRadius = Math.max(width, height) * (.32 + descent * .78); const planetY = height * .82 + planetRadius * descent * .18;
  ctx.save(); ctx.globalAlpha = 1 - atmosphere * .82; ctx.shadowColor = p.accent; ctx.shadowBlur = 32;
  if (planetImage.complete && planetImage.naturalWidth) ctx.drawImage(planetImage, width / 2 - planetRadius, planetY - planetRadius, planetRadius * 2, planetRadius * 2);
  else { ctx.fillStyle = p.ground; ctx.beginPath(); ctx.arc(width / 2, planetY, planetRadius, 0, TAU); ctx.fill(); }
  ctx.restore();

  const entryBackground = launchBackgrounds[reentry.planet];
  if (entryBackground.complete && entryBackground.naturalWidth) {
    ctx.save(); ctx.globalAlpha = atmosphere; drawAscentBackground(entryBackground, 1 - descent); ctx.restore();
  } else {
    const sky = ctx.createLinearGradient(0, 0, 0, height); sky.addColorStop(0, "#07101a"); sky.addColorStop(.52, p.ground2); sky.addColorStop(1, p.ground);
    ctx.save(); ctx.globalAlpha = atmosphere; ctx.fillStyle = sky; ctx.fillRect(0, 0, width, height); ctx.restore();
  }

  const plasma = Math.sin(Math.min(1, Math.max(0, (t - .75) / 3.65)) * Math.PI);
  ctx.save(); ctx.globalCompositeOperation = "screen"; ctx.globalAlpha = plasma * .78;
  for (let i = 0; i < 32; i++) {
    const x = (i * 157 + reentry.planet * 83 + elapsed * (46 + i % 5 * 12)) % (width + 160) - 80;
    const y = (i * 89 + elapsed * (240 + i % 4 * 45)) % (height + 180) - 90;
    ctx.strokeStyle = i % 3 ? "#ffb05d" : p.accent; ctx.lineWidth = 1 + i % 3;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - 12, y - 54 - i % 5 * 10); ctx.stroke();
  }
  ctx.restore();

  if (atmosphere > .35) {
    ctx.save(); ctx.globalAlpha = atmosphere * .32;
    for (let i = 0; i < 34; i++) {
      const x = (i * 211 + elapsed * (p.particle === "ash" ? 155 : 75)) % (width + 100) - 50;
      const y = (i * 103 + elapsed * (p.particle === "rain" ? 330 : 205)) % (height + 120) - 60;
      ctx.strokeStyle = p.particle === "ash" ? "#ef9a55" : p.particle === "snow" ? "#e4ffff" : "#8ee7ea"; ctx.lineWidth = p.particle === "snow" ? 2 : 1;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - (p.particle === "ash" ? 18 : 5), y - (p.particle === "snow" ? 8 : 28)); ctx.stroke();
    }
    ctx.restore();
  }

  const shipY = height * (.3 + descent * .24); const shipScale = 1.08 + descent * .34;
  ctx.save(); ctx.translate(width / 2 + Math.sin(t * 9) * plasma * 3, shipY); ctx.rotate(Math.PI / 2);
  if (plasma > .02) {
    ctx.shadowColor = "#ff884d"; ctx.shadowBlur = 36 * plasma; ctx.strokeStyle = `rgba(255,166,86,${.35 + plasma * .45})`; ctx.lineWidth = 4 + plasma * 5;
    ctx.beginPath(); ctx.ellipse(5, 0, 57 * shipScale, 27 * shipScale, 0, 0, TAU); ctx.stroke();
  }
  ctx.fillStyle = `rgba(98,220,237,${.55 + Math.sin(t * 25) * .12})`; ctx.beginPath(); ctx.moveTo(-46, -7); ctx.lineTo(-82 - plasma * 38, 0); ctx.lineTo(-46, 7); ctx.closePath(); ctx.fill();
  drawKestrelArt(shipScale); ctx.restore();

  const bar = Math.max(30, height * .055); ctx.fillStyle = "#010307"; ctx.fillRect(0, 0, width, bar); ctx.fillRect(0, height - bar, width, bar);
  ctx.fillStyle = "rgba(226,241,240,.8)"; ctx.font = "800 9px Inter, sans-serif"; ctx.textAlign = "left"; ctx.fillText(`${p.name} · ATMOSPHERIC ENTRY`, 22, bar / 2 + 3);
  ctx.textAlign = "right"; ctx.fillStyle = p.accent; ctx.fillText(t < 1.55 ? "INTERFACE" : t < 3.75 ? "PLASMA" : "DESCENT", width - 22, bar / 2 + 3);

  const fade = smoothstep(4.92, 5.35, t); if (fade > 0) { ctx.fillStyle = `rgba(0,0,0,${fade})`; ctx.fillRect(0, 0, width, height); }
}

function render() {
  ctx.imageSmoothingEnabled = false;
  ctx.save(); ctx.translate((Math.random() - .5) * camera.shake, (Math.random() - .5) * camera.shake);
  if (state.mode === "space") drawSpace();
  else if (state.mode === "stationDocking") drawStationDocking();
  else if (state.mode === "stationInterior") drawStationInterior();
  else if (state.mode === "launching") drawLaunchCutscene();
  else if (state.mode === "reentry") drawPlanetReentry();
  else if (state.mode === "interior") drawShipInterior();
  else if (state.mode === "baseInterior") drawUndergroundScene();
  else if (state.mode === "caveInterior") drawNaturalCaveScene();
  else if (state.mode === "mineshaft") drawMineshaftScene();
  else if (state.mode === "planetFlight") drawPlanetScene(false);
  else drawPlanetScene();
  ctx.restore();
  if (state.mapOpen) drawPlanetMap();
  if (!ui.shipInventory.hidden) {
    ui.inventoryLifeReadout.textContent = `${Math.round(player.life)}%`;
    ui.inventoryEnergyReadout.textContent = `${Math.ceil(player.tool)} / ${toolEnergyCapacity()}`;
  }
  updateHudTelemetry();
}

function cleanPlayerName(value) {
  const cleaned = String(value || "WAYFARER").replace(/[^a-z0-9 _-]/gi, "").trim().slice(0, 16);
  return cleaned || "WAYFARER";
}

function updateMultiplayerStatus(status = multiplayer.status) {
  multiplayer.status = status; const online = status === "online"; const count = multiplayer.players.size + (online ? 1 : 0);
  ui.multiplayerStatus.classList.toggle("online", online); ui.multiplayerStatus.classList.toggle("offline", status === "offline");
  ui.multiplayerStatus.classList.toggle("connecting", status === "connecting");
  ui.multiplayerCount.textContent = online ? `${count} ONLINE` : status === "connecting" ? "CONNECTING" : "OFFLINE";
  ui.mainMenuNetworkStatus.textContent = online ? `LAN CO-OP · ${count} ONLINE` : status === "connecting" ? "LAN CO-OP · CONNECTING" : "LAN CO-OP · OFFLINE";
}

function acceptRemotePlayer(incoming) {
  if (!incoming?.id || incoming.id === multiplayer.id) return;
  const previous = multiplayer.players.get(incoming.id); const changedArea = previous && (previous.mode !== incoming.mode || previous.planet !== incoming.planet || previous.zone !== incoming.zone);
  if (!previous) multiplayer.players.set(incoming.id, { ...incoming, x: incoming.x, y: incoming.y, targetX: incoming.x, targetY: incoming.y, walkTime: 0 });
  else {
    previous.name = incoming.name; previous.color = incoming.color; previous.active = incoming.active; previous.mode = incoming.mode; previous.planet = incoming.planet; previous.zone = incoming.zone;
    previous.angle = incoming.angle; previous.facing = incoming.facing; previous.moving = incoming.moving; previous.pulse = incoming.pulse;
    previous.targetX = incoming.x; previous.targetY = incoming.y;
    if (changedArea || Math.hypot(previous.x - incoming.x, previous.y - incoming.y) > 2400) { previous.x = incoming.x; previous.y = incoming.y; }
  }
  updateMultiplayerStatus();
}

function sendMultiplayerHello() {
  if (multiplayer.socket?.readyState === WebSocket.OPEN) multiplayer.socket.send(JSON.stringify({ type: "hello", name: multiplayer.name }));
}

function connectMultiplayer() {
  clearTimeout(multiplayer.reconnectTimer);
  if (location.protocol === "file:") { updateMultiplayerStatus("offline"); return; }
  updateMultiplayerStatus("connecting");
  const protocol = location.protocol === "https:" ? "wss:" : "ws:"; const socket = new WebSocket(`${protocol}//${location.host}/multiplayer`); multiplayer.socket = socket;
  socket.addEventListener("open", () => { if (multiplayer.socket !== socket) return; multiplayer.retryDelay = 1000; updateMultiplayerStatus("online"); sendMultiplayerHello(); });
  socket.addEventListener("message", event => {
    let message; try { message = JSON.parse(event.data); } catch { return; }
    if (message.type === "welcome") { multiplayer.id = message.id; multiplayer.players.clear(); for (const remote of message.players || []) acceptRemotePlayer(remote); }
    else if (message.type === "player") acceptRemotePlayer(message.player);
    else if (message.type === "leave") { multiplayer.players.delete(message.id); updateMultiplayerStatus(); }
  });
  socket.addEventListener("close", () => {
    if (multiplayer.socket !== socket) return; multiplayer.socket = null; multiplayer.id = null; multiplayer.players.clear(); updateMultiplayerStatus("offline");
    multiplayer.reconnectTimer = setTimeout(connectMultiplayer, multiplayer.retryDelay); multiplayer.retryDelay = Math.min(10000, multiplayer.retryDelay * 1.7);
  });
  socket.addEventListener("error", () => {});
}

function currentMultiplayerActor() {
  if (state.mode === "space") return spaceShip;
  if (state.mode === "planetFlight") return ship;
  if (state.mode === "interior") return interiorPlayer;
  if (state.mode === "stationInterior") return stationPlayer;
  return player;
}

function localMultiplayerSnapshot() {
  const allowed = ["planet", "planetFlight", "space", "interior", "baseInterior", "caveInterior", "mineshaft", "stationInterior"];
  const actor = currentMultiplayerActor(); const speed = Math.hypot(actor.vx || 0, actor.vy || 0);
  return { active: gameSessionStarted && allowed.includes(state.mode), mode: state.mode, planet: state.planet, zone: multiplayerZone(), x: actor.x, y: actor.y, angle: actor.angle || 0, facing: actor.facing || 0, moving: speed > 10, pulse: Boolean(state.mode === "space" && spaceShip.pulse) };
}

function updateMultiplayer(dt) {
  for (const remote of multiplayer.players.values()) {
    const factor = 1 - Math.exp(-dt * 14); remote.x += (remote.targetX - remote.x) * factor; remote.y += (remote.targetY - remote.y) * factor;
    if (remote.moving) remote.walkTime += dt;
  }
  multiplayer.sendAccumulator += dt;
  if (multiplayer.sendAccumulator < .1 || multiplayer.socket?.readyState !== WebSocket.OPEN) return;
  multiplayer.sendAccumulator %= .1; multiplayer.socket.send(JSON.stringify({ type: "state", state: localMultiplayerSnapshot() }));
}

function setMultiplayerName(value) {
  multiplayer.name = cleanPlayerName(value); ui.mainMenuPlayerName.value = multiplayer.name; ui.playerName.value = multiplayer.name;
  try { localStorage.setItem("wayfarer.playerName", multiplayer.name); } catch {}
  sendMultiplayerHello();
}

function frame(now) { frameSerial++; frameDt = Math.min(.05, (now - last) / 1000); last = now; update(frameDt); updateMultiplayer(frameDt); render(); requestAnimationFrame(frame); }

let autosavePending = false;
function scheduleAutosave() {
  if (!gameSessionStarted || state.menuOpen) return;
  if (autosavePending) return; autosavePending = true;
  const run = () => { autosavePending = false; saveGame(); };
  if (typeof requestIdleCallback === "function") requestIdleCallback(run, { timeout: 1800 });
  else setTimeout(run, 0);
}

addEventListener("resize", resize);
addEventListener("keydown", e => {
  const key = e.key.toLowerCase(); keys.add(key);
  if (state.menuOpen) {
    if (key === "escape") { e.preventDefault(); if (!ui.mainMenuSettingsPanel.hidden) closeMainMenuSettings(); else if (gameSessionStarted) closeMainMenu(); }
    keys.delete(key); return;
  }
  if (state.mode === "stationDocking") {
    if (key === "escape") { e.preventDefault(); openMainMenu(); }
    keys.delete(key); return;
  }
  if (state.mode === "stationInterior") {
    if (!ui.stationDialogue.hidden) {
      if (["e", "enter", "escape"].includes(key)) closeStationDialogue();
      e.preventDefault(); keys.delete(key); return;
    }
    if (key === "escape") { e.preventDefault(); if (!ui.stationServices.hidden) closeStationServices(); else openMainMenu(); keys.delete(key); return; }
    if (["m", "x", "b", "tab", "i"].includes(key) || /^[1-8]$/.test(key)) { e.preventDefault(); keys.delete(key); return; }
  }
  if (["arrowup","arrowdown","arrowleft","arrowright"," ","tab"].includes(key)) e.preventDefault();
  if (!e.ctrlKey && !e.metaKey && ["-", "_", "+", "="].includes(key)) { e.preventDefault(); adjustSurfaceZoom(key === "-" || key === "_" ? -1 : 1); keys.delete(key); return; }
  if (key === "m") { if (!e.repeat && !["launching", "reentry"].includes(state.mode)) togglePlanetMap(); keys.delete("m"); return; }
  if (key === "x") { if (!e.repeat) toggleQuickMenu(); keys.delete("x"); return; }
  if (key === "b") { if (!e.repeat) openBuildCatalog(); keys.delete("b"); return; }
  if (build.active) {
    if (/^[1-8]$/.test(key) && !e.repeat) activateHotbarSlot(Number(key) - 1);
    else if (key === "r" && !e.repeat) build.rotation = (build.rotation + 1) % 4;
    else if (key === "escape") toggleBuildMode();
    keys.delete(key); return;
  }
  if (/^[1-8]$/.test(key) && !e.repeat && !state.panelOpen && !state.mapOpen) { activateHotbarSlot(Number(key) - 1); keys.delete(key); return; }
  if (key === "tab") { closeQuickMenu(); cancelShipRecallSelection(); if (!e.repeat && !["launching", "reentry"].includes(state.mode)) toggleDiscoveries(); keys.delete("tab"); return; }
  if (key === "i") { closeQuickMenu(); cancelShipRecallSelection(); if (!e.repeat && !["launching", "reentry"].includes(state.mode)) toggleShipInventory(); keys.delete("i"); return; }
  if (key === "escape") {
    if (shipRecall.selecting) cancelShipRecallSelection();
    else if (!ui.quickMenu.hidden) closeQuickMenu();
    else if (state.mapOpen) closePlanetMap();
    else if (state.discoveryOpen) closeDiscoveries();
    else if (!ui.upgrades.hidden) closeUpgrades();
    else if (!ui.refineryPanel.hidden) closeRefinery();
    else if (!ui.craftingPanel.hidden) closeCraftingTable();
    else if (!ui.missionTerminal.hidden) closeMissionTerminal();
    else if (!ui.shipInventory.hidden) closeShipInventory();
    else openMainMenu();
  }
  if (key === "q" && state.mode === "space" && !state.panelOpen && !e.repeat) cycleSpaceTarget();
});
addEventListener("keyup", e => keys.delete(e.key.toLowerCase()));
ui.mainMenuContinue.addEventListener("click", closeMainMenu);
ui.mainMenuNew.addEventListener("click", requestNewExpedition);
ui.mainMenuSettings.addEventListener("click", () => { ui.mainMenuPrimary.hidden = true; ui.mainMenuSettingsPanel.hidden = false; syncMainMenuSettings(); });
ui.mainMenuSettingsBack.addEventListener("click", closeMainMenuSettings);
ui.mainMenuCycleSpeed.addEventListener("input", () => {
  settings.cycleSpeed = Math.max(0, Math.min(4, Number(ui.mainMenuCycleSpeed.value) || 0));
  ui.mainMenuCycleValue.textContent = formatCycleSpeed().toUpperCase(); ui.cycleSpeed.value = settings.cycleSpeed;
  const label = formatCycleSpeed(); ui.cycleSpeedValue.value = label; ui.cycleSpeedValue.textContent = label;
  try { localStorage.setItem("wayfarer.cycleSpeed", String(settings.cycleSpeed)); } catch {}
  updateCycleHud();
});
ui.mainMenuCycleSpeed.addEventListener("change", () => { if (gameSessionStarted) saveGame(); });
ui.mainMenuLaunchOverride.addEventListener("change", () => {
  settings.launchOverride = ui.mainMenuLaunchOverride.checked; ui.launchOverride.checked = settings.launchOverride;
  try { localStorage.setItem("wayfarer.launchOverride", String(settings.launchOverride)); } catch {}
  updateUI(); if (gameSessionStarted) saveGame();
});
ui.mainMenuBuildOverride.addEventListener("change", () => {
  settings.buildOverride = ui.mainMenuBuildOverride.checked; ui.buildOverride.checked = settings.buildOverride;
  try { localStorage.setItem("wayfarer.buildOverride", String(settings.buildOverride)); } catch {}
  if (build.active) updateBuildToolbar(); if (gameSessionStarted) saveGame();
});
ui.mainMenuPlayerName.addEventListener("change", () => setMultiplayerName(ui.mainMenuPlayerName.value));
ui.mainMenuPlayerName.addEventListener("keydown", event => { if (event.key === "Enter") { event.preventDefault(); ui.mainMenuPlayerName.blur(); } });
ui.playerName.addEventListener("change", () => setMultiplayerName(ui.playerName.value));
ui.playerName.addEventListener("keydown", event => { if (event.key === "Enter") { event.preventDefault(); ui.playerName.blur(); } });
ui.stationRepair.addEventListener("click", repairShipAtStation);
ui.stationResupply.addEventListener("click", resupplyAtStation);
ui.stationExchange.addEventListener("click", exchangeStationCargo);
ui.stationUndock.addEventListener("click", closeStationServices);
ui.stationDialogueClose.addEventListener("click", closeStationDialogue);
document.querySelector("#close-upgrades").addEventListener("click", closeUpgrades);
document.querySelector("#close-discoveries").addEventListener("click", closeDiscoveries);
document.querySelector("#close-planet-map").addEventListener("click", closePlanetMap);
document.addEventListener("pointerover", event => {
  const target = event.target.closest?.("[data-item-description]"); if (target) showItemTooltip(target, event.clientX, event.clientY);
});
document.addEventListener("pointermove", event => {
  const target = event.target.closest?.("[data-item-description]"); if (target) positionItemTooltip(event.clientX, event.clientY, target);
});
document.addEventListener("pointerout", event => {
  const target = event.target.closest?.("[data-item-description]");
  if (target && event.relatedTarget?.closest?.("[data-item-description]") !== target) hideItemTooltip();
});
document.addEventListener("focusin", event => { const target = event.target.closest?.("[data-item-description]"); if (target) showItemTooltip(target); });
document.addEventListener("focusout", event => { if (event.target.closest?.("[data-item-description]")) hideItemTooltip(); });

document.querySelector("#close-ship-inventory").addEventListener("click", closeShipInventory);
document.querySelector("#close-refinery").addEventListener("click", closeRefinery);
document.querySelector("#close-crafting").addEventListener("click", closeCraftingTable);
document.querySelector("#close-mission-terminal").addEventListener("click", closeMissionTerminal);
ui.missionTerminalAction.addEventListener("click", claimCampaignReward);
ui.refineryCargo.addEventListener("click", event => { const item = event.target.closest("[data-refinery-input]"); if (item && !item.disabled) loadRefineryInput(item.dataset.refineryInput); });
ui.refineryCargo.addEventListener("dragstart", event => {
  const item = event.target.closest("[data-refinery-input]"); if (!item || item.disabled) { event.preventDefault(); return; }
  event.dataTransfer.setData("text/refinery-item", item.dataset.refineryInput); event.dataTransfer.effectAllowed = "move";
});
ui.refineryInput.addEventListener("dragover", event => { event.preventDefault(); event.dataTransfer.dropEffect = "move"; ui.refineryInput.classList.add("drop-ready"); });
ui.refineryInput.addEventListener("dragleave", () => ui.refineryInput.classList.remove("drop-ready"));
ui.refineryInput.addEventListener("drop", event => { event.preventDefault(); ui.refineryInput.classList.remove("drop-ready"); loadRefineryInput(event.dataTransfer.getData("text/refinery-item")); });
ui.refineryOutput.addEventListener("click", collectRefineryOutput);
ui.craftingRecipes.addEventListener("click", event => { const button = event.target.closest("[data-crafting-recipe]"); if (button && !button.disabled) craftRecipe(button.dataset.craftingRecipe); });
ui.inventorySlotGrid.addEventListener("dragstart", event => {
  const slot = event.target.closest("[data-inventory-item]"); if (!slot) { event.preventDefault(); return; }
  event.dataTransfer.setData("text/wayfarer-item", slot.dataset.inventoryItem); event.dataTransfer.effectAllowed = "move";
});
ui.inventorySlotGrid.addEventListener("click", event => {
  const slot = event.target.closest("[data-inventory-item]"); const item = slot?.dataset.inventoryItem;
  if (itemDefinitions[item]?.armorSlot) equipArmor(item);
});
ui.inventorySlotGrid.addEventListener("keydown", event => {
  if (!["Enter", " "].includes(event.key)) return;
  const item = event.target.closest("[data-inventory-item]")?.dataset.inventoryItem;
  if (itemDefinitions[item]?.armorSlot) { event.preventDefault(); equipArmor(item); }
});
ui.armorSlots.forEach(slot => {
  slot.addEventListener("click", () => unequipArmor(slot.dataset.armorSlot));
  slot.addEventListener("dragover", event => { event.preventDefault(); event.dataTransfer.dropEffect = "move"; slot.classList.add("drop-ready"); });
  slot.addEventListener("dragleave", event => { if (!slot.contains(event.relatedTarget)) slot.classList.remove("drop-ready"); });
  slot.addEventListener("drop", event => {
    event.preventDefault(); slot.classList.remove("drop-ready"); equipArmor(event.dataTransfer.getData("text/wayfarer-item"), slot.dataset.armorSlot);
  });
});
ui.inventoryHotbar.addEventListener("click", event => { const slot = event.target.closest("[data-inventory-hotbar-slot]"); if (slot) activateHotbarSlot(Number(slot.dataset.inventoryHotbarSlot), false); });
ui.inventoryHotbar.addEventListener("dragstart", event => {
  const slot = event.target.closest("[data-hotbar-item]"); if (!slot) { event.preventDefault(); return; }
  event.dataTransfer.setData("text/wayfarer-item", slot.dataset.hotbarItem); event.dataTransfer.setData("text/wayfarer-hotbar-slot", slot.dataset.inventoryHotbarSlot); event.dataTransfer.effectAllowed = "move";
});
ui.inventoryHotbar.addEventListener("dragover", event => { const slot = event.target.closest("[data-inventory-hotbar-slot]"); if (slot) { event.preventDefault(); event.dataTransfer.dropEffect = "move"; slot.classList.add("drop-ready"); } });
ui.inventoryHotbar.addEventListener("dragleave", event => { const slot = event.target.closest("[data-inventory-hotbar-slot]"); if (slot && !slot.contains(event.relatedTarget)) slot.classList.remove("drop-ready"); });
ui.inventoryHotbar.addEventListener("drop", event => {
  const slot = event.target.closest("[data-inventory-hotbar-slot]"); if (!slot) return; event.preventDefault(); slot.classList.remove("drop-ready");
  assignHotbarItem(event.dataTransfer.getData("text/wayfarer-item"), Number(slot.dataset.inventoryHotbarSlot));
});
ui.inventorySlotGrid.addEventListener("dragover", event => { if (event.dataTransfer.types.includes("text/wayfarer-hotbar-slot")) { event.preventDefault(); event.dataTransfer.dropEffect = "move"; ui.inventorySlotGrid.classList.add("drop-ready"); } });
ui.inventorySlotGrid.addEventListener("dragleave", event => { if (!ui.inventorySlotGrid.contains(event.relatedTarget)) ui.inventorySlotGrid.classList.remove("drop-ready"); });
ui.inventorySlotGrid.addEventListener("drop", event => {
  const sourceValue = event.dataTransfer.getData("text/wayfarer-hotbar-slot"); if (sourceValue === "") return;
  const source = Number(sourceValue); if (!Number.isInteger(source) || source < 0 || source >= hotbar.slots.length) return;
  event.preventDefault(); ui.inventorySlotGrid.classList.remove("drop-ready"); hotbar.slots[source] = null; updateHotbar(); saveGame();
});
document.addEventListener("dragend", () => { ui.inventorySlotGrid.classList.remove("drop-ready"); ui.inventoryHotbar.querySelectorAll(".drop-ready").forEach(slot => slot.classList.remove("drop-ready")); ui.armorSlots.forEach(slot => slot.classList.remove("drop-ready")); });
document.querySelectorAll("[data-inventory-view]").forEach(button => button.addEventListener("click", () => setInventoryView(button.dataset.inventoryView)));
ui.clearBuildings.addEventListener("click", clearAllBuildings);
document.querySelectorAll("[data-quick-action]").forEach(button => button.addEventListener("click", () => {
  const action = button.dataset.quickAction;
  if (action === "recall") beginShipRecallSelection();
  else if (action === "cargo") { closeQuickMenu(); toggleShipInventory("ship"); }
  else if (action === "build") { closeQuickMenu(); openBuildCatalog(); }
}));
ui.buildCatalog.addEventListener("click", event => { const button = event.target.closest("[data-build-catalog]"); if (button && !button.disabled) beginBuildPlacement(button.dataset.buildCatalog); });
ui.inventoryCrafting.addEventListener("click", event => { const button = event.target.closest("[data-inventory-crafting-recipe]"); if (button && !button.disabled) craftRecipe(button.dataset.inventoryCraftingRecipe); });
canvas.addEventListener("pointermove", event => {
  const point = pointerWorldPoint(event);
  if (shipRecall.selecting) { updateRecallTarget(point.x, point.y); return; }
  if (!build.active) return;
  build.worldX = point.x;
  build.worldY = point.y;
});
canvas.addEventListener("pointerdown", event => {
  const point = pointerWorldPoint(event);
  if (shipRecall.selecting) { event.preventDefault(); updateRecallTarget(point.x, point.y); if (event.button === 0) confirmShipRecall(); else if (event.button === 2) cancelShipRecallSelection(); return; }
  if (!build.active) return;
  event.preventDefault(); build.worldX = point.x; build.worldY = point.y;
  if (event.button === 0) placeBuildPiece();
  else if (event.button === 2) dismantleBuildPiece();
});
canvas.addEventListener("contextmenu", event => { if (build.active || shipRecall.selecting) event.preventDefault(); });
document.querySelectorAll(".discovery-tab").forEach(tab => tab.addEventListener("click", () => selectDiscoveryTab(tab.dataset.discoveryTab)));
ui.launchOverride.addEventListener("change", () => {
  settings.launchOverride = ui.launchOverride.checked;
  try { localStorage.setItem("wayfarer.launchOverride", String(settings.launchOverride)); } catch {}
  updateUI(); saveGame();
});
ui.buildOverride.addEventListener("change", () => {
  settings.buildOverride = ui.buildOverride.checked;
  try { localStorage.setItem("wayfarer.buildOverride", String(settings.buildOverride)); } catch {}
  if (build.active) updateBuildToolbar();
  saveGame(); showToast(settings.buildOverride ? "BUILD OVERRIDE ENABLED" : "BUILD COSTS RESTORED");
});
ui.cycleSpeed.addEventListener("input", () => {
  settings.cycleSpeed = Math.max(0, Math.min(4, Number(ui.cycleSpeed.value) || 0));
  const label = formatCycleSpeed(); ui.cycleSpeedValue.value = label; ui.cycleSpeedValue.textContent = label;
  try { localStorage.setItem("wayfarer.cycleSpeed", String(settings.cycleSpeed)); } catch {}
  updateCycleHud();
});
ui.cycleSpeed.addEventListener("change", () => { saveGame(); showToast(`PLANETARY CYCLE · ${formatCycleSpeed()}`); });
ui.launch.addEventListener("click", launch);
document.querySelectorAll(".upgrade").forEach(button => button.addEventListener("click", () => {
  const type = button.dataset.upgrade;
  if (type === "engine" && player.inventory.ferrite >= 6) { player.inventory.ferrite -= 6; ship.engine = 1; player.speed += 20; showToast("PULSE ENGINE INSTALLED"); }
  if (type === "scanner" && player.inventory.crystal >= 4) { player.inventory.crystal -= 4; ship.scanner = 1; world.filter(o => o.type === "crystal").forEach(o => o.size *= 1.25); showToast("SURVEY SCANNER INSTALLED"); }
  if (type.startsWith("tool-")) {
    const key = type.slice(5); const definition = toolUpgradeDefinitions[key]; const level = toolUpgrades[key];
    if (definition && level < 3) {
      const cost = definition.cost(level);
      if (canAfford(cost)) {
        spendResources(cost); toolUpgrades[key] += 1;
        if (key === "capacity") player.tool = Math.min(toolEnergyCapacity(), player.tool + 25);
        showToast(`${definition.name.toUpperCase()} · MK ${toolUpgrades[key]}`);
      }
    }
  }
  updateUI(); saveGame();
}));

for (let i = 0; i < 180; i++) state.stars.push({ x: Math.random() * width, y: Math.random() * height, size: .5 + Math.random() * 1.5, speed: 12 + Math.random() * 38, alpha: .2 + Math.random() * .7 });
const savedGame = readSaveGame();
try { multiplayer.name = cleanPlayerName(localStorage.getItem("wayfarer.playerName") || `WAYFARER-${Math.floor(100 + Math.random() * 900)}`); localStorage.setItem("wayfarer.playerName", multiplayer.name); } catch { multiplayer.name = "WAYFARER"; }
storedSaveAvailable = Boolean(savedGame);
if (Number.isInteger(savedGame?.planet) && planets[savedGame.planet]) state.planet = savedGame.planet;
resize(); makeSolarSystem(); makeWorld(state.planet); applySaveGame(savedGame); placeSurfaceCaveEntrances(state.planet);
const startingPlanet = planets[state.planet];
ui.location.textContent = `${startingPlanet.name} • ${startingPlanet.type} • ${startingPlanet.weather}`;
document.querySelector("#title-card h1").textContent = startingPlanet.name;
document.querySelector("#title-card p").textContent = `${startingPlanet.type} • ${startingPlanet.weather}`;
updateUI(); updateCycleHud();
let autoStartNewExpedition = false;
try { autoStartNewExpedition = sessionStorage.getItem("wayfarer.autoStart") === "new"; sessionStorage.removeItem("wayfarer.autoStart"); } catch {}
updateMainMenu();
connectMultiplayer();
if (autoStartNewExpedition) closeMainMenu(); else openMainMenu();
setInterval(scheduleAutosave, 5000); addEventListener("beforeunload", () => { if (gameSessionStarted) saveGame(); }); requestAnimationFrame(frame);
