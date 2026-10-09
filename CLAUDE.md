# Go timer

A game clock for Go that runs in the browser, on a phone lying next to the board.
Built by Sina with Claude. First app project, started October 2026.

**Why now:** Sina plays the Go tournament in Mannheim on **24–25 Oct 2026**, with
**45 min + 15 s Fischer** time. A clock set to exactly that makes practice games feel
like the real thing. So the first goal is a version that works by **Sat 17 Oct**, the day of
the practice game at tournament time.

## What it should do

**Version 1 — the must-haves**

- Two big halves of the screen, one per player (Black and White). Tap your half after
  your move and the other player's clock starts.
- Two time systems:
  - **Fischer:** a main time, plus a fixed number of seconds added after every move.
    Preset: *Mannheim — 45 min + 15 s*.
  - **Byo-yomi (Japanese):** a main time, then a number of periods of a few seconds
    each, e.g. 5 × 30 s. If you move inside a period, it starts again from the full
    length. If a period runs out, you lose it and the next one begins. When the last
    one runs out, you lose on time.
- Pause and reset buttons.
- Clear warning when time is short: colour change, and a beep or vibration in the last
  seconds of a byo-yomi period.
- Works on a phone in portrait mode, and the screen does not go dark while the clock runs.
- Says who lost on time when it happens.

**Later, only once version 1 works**

- Canadian byo-yomi (N stones in X minutes).
- Custom time settings that are remembered.
- A spoken count in the last seconds, the way tournament clocks do it.
- Move counter per player.

## How it is built

- **One file:** `index.html`, with the HTML, CSS and JavaScript in it. No framework, no
  build step, no server, no login. It opens by double-clicking it.
- Runs offline once loaded.
- Time is measured from the real clock (`Date.now()` / `performance.now()`), not by
  counting timer ticks, so it stays accurate when the phone is slow or the tab is in
  the background.

## Putting it online

Once there is a first working version:

1. On github.com, create a **public** repo called `go-timer`, without a README.
2. Ask Claude to connect this folder to it and push.
3. On GitHub, open the repo's **Settings → Pages**, choose branch `main` and
   folder `/ (root)`, and save.
4. A minute later it is live at **https://sinalaura.github.io/go-timer** — open that
   on the phone and add it to the home screen.

After that, every change Claude pushes goes live by itself.

## Working together

- **Sina** (she/her) builds this, with Claude doing most of the
  typing. Keep explanations short. Show the result: open `index.html` in the browser
  after each change.
- Small steps: one feature at a time, test it in the browser, then commit with a short
  message.
- If the choice is between more features or finished by 17 Oct, finish first.
- Personal notes, tasks and ideas do not belong here; they live in Sina's `Life` folder.
