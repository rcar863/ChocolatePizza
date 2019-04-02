# ChocolatePizza

## Chocolate pizza is an application that uses xz file decompression to speed up webpage delivery.
File decompression is handled by a Javascript port of xz-embedded, with optional compression by a node.js server.

Current live demo @ http://executable.co/ChocolatePizza/

# About

This project is implemented in 3 phases.

## Compress.js
This is the setup file for a nodejs server. It fetches an uncompressed text file, 1984.txt, and compresses it on the fly into an .xz archive. This cuts down the file size by almost 70%.

## Unxz.js
Unxz.js is the .xz decompression library in javascript. This is a javscript port of some of the function calls in the [xz-embedded](http://tukaani.org/xz/embedded.html) library, written in C.  This was ported with [emscripten](https://github.com/kripken/emscripten), which is a transcompiler which converts C/C++ code to Javascript

## Client decompression
Unxz.js is fetched and ran in the browser with jquery. It gets the compressed .xz file from the nodejs server, then is decompressed *in the web browser*. Preliminary tests showed that the javascript decompresser ran just as well as the native xz-embedded. If this is developed further we can cut *30%* off web page loading times.

# Pretty visualizations
![](http://i.imgur.com/B9tAxow.png)
![](http://i.imgur.com/jI57OOT.png)
![](http://i.imgur.com/oe7fNA2.png)
![](http://i.imgur.com/5la63sb.png)

# Usage:

>1. Clone repo into a directory
>2. Boot up a localhost webserver
>3. Head to localhost/path-to-repo/
>4. Enjoy faster file delivery thanks to xz compression.

Included is the compress.js server config file, just run on a node.js server to download and compress files.

Feel free to use this software as you wish.

It is currently a work in progress by:
@rcar863 / 
@cgza / 
@marcusklein / 
@Velitheda
