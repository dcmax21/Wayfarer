# Kestrel Interior Props

`kestrel-props-sheet.png` is a 4 x 3 RGBA sprite atlas. The runtime uses per-object source rectangles because some artwork extends across the nominal 362 x 362 cell boundaries.

| Row | Column 1 | Column 2 | Column 3 | Column 4 |
| --- | --- | --- | --- | --- |
| 1 | Cockpit console | Pilot chair | Wall terminal | Navigation table |
| 2 | Reactor core | Medical station | Workbench | Cargo crates |
| 3 | Crew bunk | Storage locker | Hydroponics planter | Airlock door |

The alpha-safe source rectangles are defined in `interiorPropAtlas` in `game.js`.

`kestrel-airlock-hatch.png` is a separate, directly overhead pressure hatch used at the lower exit threshold.

`kestrel-interior-v2.png` is the unified 16:9 Kestrel interior background currently used by the game. Equipment collisions and animated light overlays remain code-driven.
