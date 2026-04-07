# 🎮 10 x 10 — Mexer o Boneco

> *"Move to the right. No wait, up. UP. Too late, you walked into a wall."*

A grid-based browser game built with zero frameworks and zero regrets.
Pick your grid size, find your character, and hunt down every alien before you give up and close the tab.
(They can't run. They're divs. You have no excuse.)

## What's inside

- Dynamic grid built from scratch — no canvas, no engine, just a sea of `<div>`s
- Grid size chosen at runtime via `prompt()` — 5x5 or 100x100, your call
- Random starting position for the player on every run
- 6 aliens placed randomly, guaranteed not to spawn on top of the player
- Keyboard-driven movement with full boundary detection (no clipping through walls)
- Step on an alien to capture it — no button, no click, just walk into it
- Countdown in the console: it tells you how many are left
- Win condition: capture all 6 to end the game (and earn a console.log)
- CSS-only visuals — red square is you, green squares are the enemy

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## How to play

1. Open `index.html` in the browser
2. Enter a grid size when prompted (default: 10)
3. Use the **arrow keys** to move the red square
4. Walk over the **green aliens** to capture them
5. Open the browser console — that's where the drama happens

## Project structure

