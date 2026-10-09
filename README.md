<img src="icon-192.png" alt="" width="96" align="right">

# Go Girls\* Timer

*A Go Girls\* App by Sina* 🖤

A game clock for Go that runs in the browser, on a phone lying next to the board.

**Open it: https://sinalaura.github.io/go-timer**. On your phone, add it to the home screen and it opens like an app. Once it's open, it needs no internet.

## How to use

- Put the phone next to the board. The top half is turned around for the player across from you.
- Tap White's half to start Black's clock. After each move, tap your own half and the other clock starts. A thick pink bar with a little heart on the edge of the screen flips to the player whose turn it is.
- **Pause** and **Reset** are in the middle bar.
- Between games, tap the box with the pencil in the middle to change the time: **Fischer**, **byo-yomi** or a **simple timer**, each with the times you like. A reset button brings each one back to a standard setting. The clock remembers your choice and your times for next time. You can also switch between English and German there (EN / DE) and turn the chime and voice on or off.

## What it does

- Three time systems:
  - **Fischer:** a main time, plus a few seconds added after every move. Standard: 45 min + 15 s.
  - **Byo-yomi:** a main time, then periods of a few seconds each. Move within a period and it starts again. If a period runs out, the next one begins. When the last one runs out, you lose on time. Each half shows how many periods are left. Standard: 30 min + 5 × 30 s.
  - **Simple timer:** just a main time, nothing added. Standard: 30 min.
- Warnings: the digits turn pink under 1 minute. Under 10 seconds the whole half turns bright pink, with a soft chime (in byo-yomi in every period, plus a lower chime when a period is used up).
- When someone runs out of time, each half shows a big **LOST** or **WON**, and a voice says who lost, in English or German. On Android the phone also vibrates.
- The screen stays on during a game.
- In English or German: it starts in your phone's language and remembers your choice.

## How it's built

One `index.html` file: HTML, CSS and JavaScript, with no framework, no build step and no server. The icon files and `manifest.webmanifest` only give the app its name and icon on the home screen. Built by Sina with [Claude](https://claude.com/claude-code) in one afternoon: about 3 hours from first plan to a working app, on 9 Oct 2026. It was her first app.

## Licence

[MIT](LICENSE): free to use, change and share, as long as the copyright notice stays in. The embedded Nunito font is under the SIL Open Font License.
