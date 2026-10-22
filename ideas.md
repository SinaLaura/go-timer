# Ideas and issues

Things to change in the app later. Newest first.

## 2026-10-22 · Change the time settings during a game

A user would like to be able to change the time settings in the middle of a game, for
example to give a player more time or to fix a wrong setting, without starting over.
Open questions: should this only work while paused, and does a change apply to both
players or to one of them?

## 2026-10-22 · Hard to leave the app

A user found the app hard to leave. Most likely because of full screen: with no status
bar or navigation bar showing, it is not clear how to get out. To look into:

- **Play Store / home-screen app:** starts in full screen through the manifest
  (`manifest.webmanifest`, `"display": "fullscreen"`). Android's bars only show after a
  swipe from the edge. Possible fix: `"standalone"` instead, which keeps the phone's bars.
- **Browser:** the page asks for full screen again on each tap during a game
  (`index.html`, `goFullScreen()`), so leaving full screen doesn't last.
- Maybe add a clear way out in the menu, or a short hint on how to leave.

## 2026-10-19 · Hearts on the pause screen

Sina is not quite happy with the hearts showing while paused (since 19 Oct, so the
colours can be changed in a pause), especially on the bar chart of the statistics:
there they get in the way. To pick up again later. Possible ways:

- hide the hearts while the chart shows, keep them with the numbers;
- show them only for a moment after the pause starts;
- change colours somewhere else while paused (e.g. in the settings), with no hearts.

## 2026-10-19 · Pause when you leave the app

**Done on 19 Oct:** leaving the app during a game (home button, another app, a call)
pauses the clock right away, even for a short moment. The background check from 18 Oct
(chime and vibration while the app is hidden) is gone. While paused, the hearts no
longer pulse and take each player's colour from the theme.

## 2026-10-18 · Old logo on the loading screen

**Done on 19 Oct:** the old logo is gone; it changed by itself.

When the app opens, the loading screen still shows the old G logo. The app's own screen
has no logo, and all icons in this repo are already the new Go Girls* stone (since
12 Oct), so the old one is a copy saved on the phone. Parked for now: wait and see
whether it changes by itself.

- **Home-screen web app:** Android updates the saved logo by itself, but that can take
  days. Faster: remove it from the home screen and add it again.
- **Play Store app:** the loading screen is built into the app package, so it only
  changes with a new app version (higher version number, same signing key, uploaded in
  the Play Console).
- **Maybe also:** the app's saved offline copy (`sw.js`) may still hold the old icon
  files. Possible fix: let it throw away its saved copy once and load everything fresh.

## 2026-10-18 · Feedback from a friend

Done on 18 Oct:
- ~~Colours only while the clock runs.~~ The hearts now also show while paused.
- ~~Error message doesn't match the colours, and isn't translated.~~ It was the browser's
  own bubble. Now the app shows its own message under the fields, in the app's colours
  and language.
- ~~German: comma before "ohne".~~ Removed.
- ~~German: "Klänge und Stimme".~~ Now "Ton und Stimme".

Decided against:
- Scroll wheel for minutes and seconds instead of typing them: too much for what it
  gives. Typing stays.

## 2026-10-17 · Full-screen notice in the Play Store app

**Done on 19 Oct:** the Play Store app no longer asks for full screen (it is recognised
by the `android-app://` referrer it opens the page with). Still to check on a real phone:
whether a thin strip around the camera now stays in the bar colour.

After installing the app from the Play Store, a notice says it is running in full-screen
mode. Other apps don't show this. Is it needed?

The notice comes from Chrome: when a game starts, the page asks for full screen again
(`index.html`, `goFullScreen()`), and Chrome then shows its own "swipe to exit full
screen" message every time. Normal apps go full screen through Android directly and never
get that message.

Possible fix: in the Play Store app, skip that request, since the app already starts full
screen through the manifest. Keep it in the normal browser. Risk: on some phones a thin
strip around the camera stays in the bar colour. Needs a check on a real Android phone.
No new app version needed, the website change is enough, so it is safe during the
closed test.
