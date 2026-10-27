<img src="icon-192.png" alt="" width="96" align="right">

# Go Girls\* Timer

*A Go Girls\* App by Sina* 🖤

A Go clock for your phone, lying next to the board.

<img src="images/playing.svg" alt="Two girls playing Go, the timer lying next to the board" width="640">

**Open it: https://sinalaura.github.io/go-timer**

## Two ways to use it

**1. In the browser:** open the link above on your phone. Nothing to install. When a game starts, it goes full screen (on Android).

**2. As an app:** add it to your phone's home screen. Then it has its own icon, always opens full screen, and works without internet once it's been opened.

- **Android:** open the browser's menu **⋮** (in Chrome at the top right, in Brave at the bottom right), then tap **Install app**, **Add to home screen** or **Install and create shortcut**, whichever your browser offers.
- **iPhone (Safari):** tap the share button, then **Add to Home Screen**.

<p><img src="images/install-1.jpg" alt="Step 1: the menu button at the bottom right in Brave" width="200">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="images/install-2.jpg" alt="Step 2: Install and create shortcut" width="200"></p>

Both are the same timer, and changes reach both by themselves.

## How to use

- Tap White's half or the play button **▶** in the middle to start Black's clock. After your move, tap your own half.
- During a game, tap the pause button or the box in the middle to pause and see the statistics. Tap a half to see a chart of the time per move. When paused, three buttons slide out: **▶** continues the game, the power button ends it (it asks first), and the stopwatch lets you add or take away time for each player, or periods in byo-yomi.
- Between games, tap the box in the middle to change the time setting. It also shows how long a game will probably take, for a 19×19, 13×13 or 9×9 board.
- Leaving the app during a game pauses the clock.

<p><img src="images/stats.png" alt="The statistics while paused, with resume, end game and adjust time in the middle" width="170">&nbsp;&nbsp;&nbsp;<img src="images/chart.png" alt="A tap shows the time per move as a chart" width="170">&nbsp;&nbsp;&nbsp;<img src="images/adjust.png" alt="Adjusting each player's time" width="170">&nbsp;&nbsp;&nbsp;<img src="images/settings.png" alt="The time settings, with the expected game length" width="170"></p>

## Time settings

- **Fischer:** a main time, plus seconds after every move. Default: 45 min + 15 s.
- **Byo-yomi:** a main time, then periods that start again after every move. Default: 30 min + 5 × 30 s.
- **Simple timer:** just a main time.

Under 10 seconds the half turns pink and a soft chime sounds. When time runs out, a voice says who lost. In English or German.

<details>
<summary>🤫 Easter egg (spoiler)</summary>

<br>

During a game, tap the little heart on the running clock. Here are three of the colour themes; the last one is yours to find.

<p><img src="images/go-girls.gif" alt="Go Girls* theme, with the colour themes open" width="200">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="images/trans.gif" alt="Trans theme" width="200">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="images/pride.gif" alt="Pride theme" width="200"></p>

</details>

## How it's built

One `index.html` file, with no framework, no build step and no server. Built by Sina with [Claude](https://claude.com/claude-code) in October 2026: the first version in one day, then polished, about 15 hours over three days in all. Her first app.

## Licence

[MIT](LICENSE). The embedded Nunito font is under the SIL Open Font License.
