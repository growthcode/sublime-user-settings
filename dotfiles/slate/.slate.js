// https://apple.stackexchange.com/questions/126351/remember-window-sizes-and-placement-when-unplugging-and-replugging-second-monito
// http://thume.ca/howto/2012/11/19/using-slate/
// Try the above to get work layout how you want it

// ####=> slate configuration file
// #### reference this file from root directory like this:
//=> S.src('~/Library/Application Support/Sublime Text/Packages/User/dotfiles/slate/.slate.js');

// Useful links:
// * https://github.com/lunixbochs/reslate
// * https://github.com/jigish/slate/wiki/Operations
// * http://thume.ca/howto/2012/11/19/using-slate/
// * http://larryhynes.net/2013/11/simple-slate-configuration.html

// ———--—Shortcuts Cheat Sheet———--—

// Maximize:  “slate_key2 m”

// 1/2 Left:  “slate_keys2 arrow_left”
// 1/2 Right: “slate_keys2  arrow_right”
// 1/2 Up:    “slate_keys2  arrow_up”
// 1/2 Down:  “slate_keys2  arrow_down”

// 2/3 Left:   “slate_key2 <”
// 2/3 Right:  “slate_key2 >”

// 1/3 Left:   “slate_key1 <”
// 1/3 middle:  “slate_key1 l”
// 1/3 Right:  “slate_key1 >”

// 1/4 Left:   “slate_key1 shift arrow_left”
// 1/4 Right:  “slate_key1 shift arrow_right”
// 1/4 Up:     “slate_key1 shift arrow_up”
// 1/4 Down:   “slate_key1 shift arrow_down”

// Corner TL: “slate_key2 [“
// Corner TR: “slate_key2 ]“
// Corner BL: “slate_key2 ;“
// Corner BR: “slate_key2 ( “ which_is_also ‘ )“

// Center Screen 1/3: “slate_key2 /“
// Center Screen 1/4: “slate_key1 /“

// Monitor 1: “slate_key2 8”
// Monitor 2: “slate_key2 9”
// Monitor 3: “slate_key2 0”

// ——--——Shortcuts Cheat Sheet End—--———

S.src('~/Library/Application Support/Sublime Text/Packages/User/dotfiles/slate/.reslate.js');

// enable to see debug messages in Console.app
// $.debug = true;

// aliases must not include 100% of another alias'
slate.alias('slate_keys1', 'cmd;ctrl');
slate.alias('slate_keys2', 'cmd;ctrl;alt');

// // begin config
slate.configAll({
  defaultToCurrentScreen: true,
  nudgePercentOf: 'screenSize',
  resizePercentOf: 'screenSize',
});

slate.bindAll({
  slate_keys1: {
    'esc': 'relaunch',

    // # 1/3 screen resize
    ',': 'push left bar-resize:screenSizeX/3',
    'l': 'move screenOriginX+screenSizeX/3;screenOriginY screenSizeX/3;screenSizeY',
    '.': 'push right bar-resize:screenSizeX/3',

    // direct focus
    c: $.focus('Google Chrome'),
    s: $.focus('Sublime Text'),
    t: $.focus('iTerm2'),
    f: $.focus('Finder'),
    p: $.focus('Spotify'),

    tab: 'hint'
  },
  slate_keys2: {
    m: $('divResize'), // maximize

    // # 1/2 screen push
    up: $('barResize', 'top', 2),
    down: $('barResize', 'bottom', 2),
    left: $('barResize', 'left', 2),
    right: $('barResize', 'right', 2),

    // # 2/3 screen resize
    ',': 'push left   bar-resize:screenSizeX/3*2',
    '.': 'push right  bar-resize:screenSizeX/3*2',


    // corners
    '[': $('corner', 'top-left'),
    ']': $('corner', 'top-right'),
    ';': $('corner', 'bottom-left'),
    "'": $('corner', 'bottom-right'),

    '=': 'undo',
    tab: 'hint', // gives choices on which window you want to focus on

    // multiple monitors
    '8': 'throw 0 resize',
    '9': 'throw 1 resize',
    '0': 'throw 2 resize',

    // utility functions
    '=': 'undo', // no longer works... ?
    tab: 'hint', // gives choices on which window you want to focus on
    z: 'undo', // no longer works... ?
  },
});

// # global application hotkeys
// bind t:${slate_keys} shell path:~/ '/usr/bin/open -a /Applications/Utilities/Terminal.app'

// # undo... not working:
// bind =:${slate_keys2} undo

// Sample Configuration
// From: https://github.com/lunixbochs/reslate/blob/master/slate.example.js
//
// slate.bindAll({
//   hyper: {
//     shift: {
//       // edges
//       h: [$('barResize', 'left',   3),
//           $('center',    'left',   3, 3)],
//       j: [$('barResize', 'bottom', 2),
//           $('center',    'bottom', 3, 3)],
//       k: [$('barResize', 'top',    2),
//           $('center',    'top',    3, 3)],
//       l: [$('barResize', 'right',  3),
//           $('center',    'right',  3, 3)],

//       // corners
//       y: [$('corner', 'top-left',     3, 2),
//           $('corner', 'top-left',     3, 3)],
//       i: [$('corner', 'top-right',    3, 2),
//           $('corner', 'top-right',    3, 3)],
//       b: [$('corner', 'bottom-left',  3, 2),
//           $('corner', 'bottom-left',  3, 3)],
//       m: [$('corner', 'bottom-right', 3, 2),
//           $('corner', 'bottom-right', 3, 3)],

//       // centers
//       u: [$('center', 'top'),
//           $('center', 'top', 3, 3)],
//       n: [$('center', 'bottom'),
//           $('center', 'bottom', 3, 3)],
//       'return': $('center', 'center', 3, 3)
//     },
//     // bars
//     h: [$('barResize', 'left',  2),
//         $('barResize', 'left',  1.5)],
//     j: $('barResize', 'bottom', 2),
//     k: $('barResize', 'top',    2),
//     l: [$('barResize', 'right', 2),
//         $('barResize', 'right', 1.5)],
//     // corners
//     y: [$('corner', 'top-left'),
//         $('corner', 'top-left', 1.5)],
//     i: [$('corner', 'top-right'),
//         $('corner', 'top-right', 1.5)],
//     b: [$('corner', 'bottom-left'),
//         $('corner', 'bottom-left', 1.5)],
//     m: [$('corner', 'bottom-right'),
//         $('corner', 'bottom-right', 1.5)],

//     // centers
//     u: $('center', 'top'),
//     n: $('center', 'bottom'),
//     'return': $('center', 'center'),
//     // throw to monitor
//     '`': ['throw 0 resize',
//           'throw 1 resize'],
//     '1': $('toss', '0', 'resize'),
//     '2': $('toss', '1', 'resize'),
//     '3': $('toss', '2', 'resize'),
//     // direct focus
//     a: $.focus('Adium'),
//     c: $.focus('Google Chrome'),
//     s: $.focus('Sublime Text'),
//     t: $.focus('Terminal'),
//     f: $.focus('Finder'),
//     e: $.focus('Sparrow'),
//     x: $.focus('X11'),
//     p: $.focus('Spotify'),
//     // utility functions
//     f1: 'relaunch',
//     z: 'undo',
//     tab: 'hint'
//   }
// });
