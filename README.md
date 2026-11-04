<img src="icon-192.png" alt="" width="96" align="right">

# Go Girls\* Timer

*A Go Girls\* App by Sina* 🖤

A Go clock for your phone, lying next to the board.

<img src="images/playing.svg" alt="Two girls playing Go, the timer lying next to the board" width="640">

**Android: [get it on Google Play](https://play.google.com/store/apps/details?id=io.github.sinalaura.gotimer)**

**Or open it in the browser: https://sinalaura.github.io/go-timer**. On an iPhone, tap the share button in Safari, then **Add to Home Screen**: it then has its own icon, opens full screen and works without internet.

It is the same timer everywhere, and changes reach all of them by themselves.

## Features

<table>
<tr>
<td width="33%" valign="top"><b>Two big halves</b><br>Tap your half after your move, and your opponent's clock starts.<br><br><img src="images/f-halves.png" alt="The running clock: Black's half with the time and the hint to tap after your move, White's half dimmed above" width="220"></td>
<td width="33%" valign="top"><b>Three time systems</b><br>Fischer (default 45 min + 15 s), byo-yomi (default 30 min + 5 × 30 s) or a simple timer.<br><br><img src="images/f-systems.png" alt="The time setting dialog with Fischer, byo-yomi and simple timer marked" width="220"></td>
<td width="33%" valign="top"><b>Expected game length</b><br>See how long a game will probably take, for a 19×19, 13×13 or 9×9 board.<br><br><img src="images/f-expected.png" alt="The expected game length box in the time settings, marked" width="220"></td>
</tr>
<tr>
<td valign="top"><b>Warning when time is short</b><br>Under 10 seconds the half turns pink, the time shows tenths, and a soft chime sounds.<br><br><img src="images/f-low.png" alt="Black's clock at 7.3 seconds on a pink half" width="260"></td>
<td valign="top"><b>Who lost on time</b><br>The screen says it, and a voice does too, in English or German.<br><br><img src="images/f-lost.png" alt="Black lost on time" width="260"></td>
<td valign="top"><b>Statistics</b><br>Pause to see the number of moves, the time used, the average and the longest move.<br><br><img src="images/f-stats.png" alt="The paused game with the statistics" width="260"></td>
</tr>
<tr>
<td valign="top"><b>Pause menu</b><br>Resume, end the game (it asks first) or adjust the time.<br><br><img src="images/f-pause.png" alt="The three round buttons in the middle of the paused game, marked" width="260"></td>
<td valign="top"><b>Time per move</b><br>Tap a half while paused to see a chart of how long every move took.<br><br><img src="images/f-chart.png" alt="The chart of the time per move" width="260"></td>
<td valign="top"><b>Adjust the time</b><br>Add or take away time for each player, or periods in byo-yomi, if something went wrong.<br><br><img src="images/f-adjust.png" alt="The adjust time dialog" width="260"></td>
</tr>
<tr>
<td valign="top"><b>English and German</b><br>Switch the language in the time settings.<br><br><img src="images/f-lang.png" alt="The time settings with the language switch marked" width="220"></td>
<td colspan="2" valign="top"><b>Also</b><ul><li>The screen stays on while the clock runs.</li><li>Leaving the app during a game pauses the clock.</li><li>Works offline, once it has been opened.</li><li>No account, no ads, no tracking.</li></ul></td>
</tr>
</table>

## Themes

Five colour themes, from pink to Yin/Yang. Tap the little heart on the clock to pick one. The choice is kept on your phone. The pictures show the time settings and a game in each theme.

<img src="images/t-picker.png" alt="The theme picker, opened with the heart on the running clock" width="200">

<table>
<tr>
<td align="center"><img src="images/t-pink.png" alt="Go Girls* theme" width="140"><br><b>Go Girls*</b></td>
<td align="center"><img src="images/t-wlw.png" alt="wlw theme" width="140"><br><b>wlw</b></td>
<td align="center"><img src="images/t-trans.png" alt="Trans theme" width="140"><br><b>Trans</b></td>
<td align="center"><img src="images/t-pride.png" alt="Pride theme" width="140"><br><b>Pride</b></td>
<td align="center"><img src="images/t-yinyang.png" alt="Yin/Yang theme" width="140"><br><b>Yin/Yang</b></td>
</tr>
<tr>
<td align="center"><img src="images/t-game-pink.png" alt="Go Girls* theme during a game" width="140"></td>
<td align="center"><img src="images/t-game-wlw.png" alt="wlw theme during a game" width="140"></td>
<td align="center"><img src="images/t-game-trans.png" alt="Trans theme during a game" width="140"></td>
<td align="center"><img src="images/t-game-pride.png" alt="Pride theme during a game" width="140"></td>
<td align="center"><img src="images/t-game-yinyang.png" alt="Yin/Yang theme during a game" width="140"></td>
</tr>
</table>


## Found a bug or have an idea?

Write to [sinadenzel@googlemail.com](mailto:sinadenzel@googlemail.com) (there is a **Feedback** link in the app's time settings too), or start a [discussion](https://github.com/SinaLaura/go-timer/discussions) here on GitHub. English or German is fine.

## How it's built

One `index.html` file, with no framework, no build step and no server. Built by me, Sina, with [Claude](https://claude.com/claude-code), starting in October 2026: the first version took one day. My first app.

## Licence

[MIT](LICENSE). The embedded Nunito font is under the SIL Open Font License.
