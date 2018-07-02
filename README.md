# React-Navigation Deeplink Example

This is a sample project to demo the deeplinking bug i've noticed in the Tab
Navigator.

### How to run

* `yarn && yarn install`
* `react-native run-ios` or `react-native run-android`

### Steps to reproduce

The problem seems to be that the Tab Navigator does not pass down links to sub
navigators when the tab is already matching selected.

#### on ios

* try to open to `linkexample://Home/News/Article` (by openining safari and
  typing in the url) and notice that the title of the screen is `News Home`
* switch the app to any other tab (`Games`, `Podcasts`, `Music` or `More` and
  try to open to `linkexample://Home/News/Article` and notice that the title of
  the screen is `Article`

### on android

* try to open to `linkexample://Home/News/Article` by running command

```
adb shell am start -W -a android.intent.action.VIEW -d "linkexample://Home/News/Article" com.deeplinkingexample
```

and notice the `News Home` page shows up.

* try to open `linkexample://Home/Games/Football` by running command

```
adb shell am start -W -a android.intent.action.VIEW -d "linkexample://Home/Games/Football" com.deeplinkingexample
```

and notice, since the default selected tab is not Games, the app properly opens
to the `Football` screen
