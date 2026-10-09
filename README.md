# Go timer

*A Go Girls\* App by Sina*

A game clock for Go that runs in the browser, on a phone lying next to the board.

**Open it: https://sinalaura.github.io/go-timer**. On your phone, add it to the home screen and it works like an app, even offline.

## How to use

- Put the phone next to the board. The top half is turned around for the player across from you.
- Tap White's half to start Black's clock. After each move, tap your own half and the other clock starts.
- **Pause** and **Reset** are in the middle bar.
- Tap the time in the middle to change it: **Fischer time** (45 min, plus 15 s after every move) or **your own time**. The EN / DE switch is there too.

## What it does

- Fischer time: a main time, plus a few seconds added after every move.
- Warnings: the digits turn pink under 1 minute. Under 10 seconds the whole half turns bright pink, with a soft chime.
- When someone runs out of time, a voice says who lost, in English or German. On Android the phone also vibrates.
- The screen stays on during a game.

## How it's built

One `index.html` file: HTML, CSS and JavaScript, with no framework, no build step and no server. Built by Sina with [Claude](https://claude.com/claude-code).
