ng-perfect-scroll
==========================
Directive built on top of this awesome plugin - https://github.com/noraesae/perfect-scrollbar

Demo
===========================
http://embed.plnkr.co/Fa2lvLDApHrjSRbTWyzw/

Features
===========================
- Support for keyboard.
- Support for vertical as well as horizontal scroll.
- Auto updating when height of the content inside div(on which directive is applied) increases.
- No hacks like timeout included in the code to update the scroll bar.

Optional Parameters
===========================
You can add additional attributes to the directive to use the following parameters

wheelSpeed

The scroll speed applied to mousewheel event.
Default: 10

wheelPropagation

If this option is true, when the scroll reach the end of the side, mousewheel event will be propagated to parent element.
Default: false

minScrollbarLength

When set to an integer value, the thumb part of the scrollbar will not shrink below that number of pixels.
Default: null

useBothWheelAxes

When set to true, and only one (vertical or horizontal) scrollbar is visible then both vertical and horizontal scrolling will affect the scrollbar.
Default: false

useKeyboard

When set to true, the scroll works with arrow keys on the keyboard. The element is scrolled only when the mouse cursor hovers the element.
Default: true

suppressScrollX

When set to true, the scroll bar in X axis will not be available, regardless of the content width.
Default: false

suppressScrollY

When set to true, the scroll bar in Y axis will not be available, regardless of the content height.
Default: false

scrollXMarginOffset

The number of pixels the content width can surpass the container width without enabling the X axis scroll bar. Allows some "wiggle room" or "offset break", so that X axis scroll bar is not enabled just because of a few pixels.
Default: 0

scrollYMarginOffset

The number of pixels the content height can surpass the container height without enabling the Y axis scroll bar. Allows some "wiggle room" or "offset break", so that Y axis scroll bar is not enabled just because of a few pixels.
Default: 0

scrollPadding

To give 15px right padding to the div, to prevent the scollbar from overlapping the content inside the div.

Dependencies
==================
-jquery.js
-jquery.mousewheel.js
-perfect-scroll.js


Usage
===================
-// for making the height of the div same as the window and suppresing horizontal scroll
<div perfect-scroll scroll-padding="15" suppress-scroll-x="true"> 

-//for making the height of the div to 300px and suppressing the horizontal scroll
<div perfect-scroll="300" scroll-padding="15" suppress-scroll-x="true">



License
=======================================
The MIT License (MIT) Copyright (c) 2012, 2014 Hyeonje Alex Jun and other contributors.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
