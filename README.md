# `woff-tools`

### OTF to WOFF · WOFF to OTF · TTF to WOFF · WOFF to TTF

Node.js font converter capable of converting SFNT ([TrueType](https://en.wikipedia.org/wiki/TrueType), [OpenType](https://en.wikipedia.org/wiki/OpenType)) font files to [WOFF](https://en.wikipedia.org/wiki/Web_Open_Font_Format) and vice-versa.

Forked from https://github.com/odemiral/woff2sfnt-sfnt2woff and added some clearer documentation, a package.json and added to npm.

> `woff2sfnt-sfnt2woff` is based on an Ubuntu package `woff-tools`, which contains the two commands woff2sfnt and sfnt2woff. As far as I can find, this Ubuntu package is the original package released with `woff` by Mozilla. I came across this project and gave it a small cleanup before releasing it, but if you'd like me to do a full refactor and cleanup of deprecated code and performance tweaks, and make a better CLI, give this project a star :)

## Usage

### CLI

```sh
# Convert from ttf to woff
node sfnt2woff.js input.ttf output.woff
# Convert from otf to woff
node sfnt2woff.js input.otf output.woff
```

```sh
# Convert from woff to ttf
node woff2sfnt.js input.woff output.ttf
# Convert from woff to otf
node woff2sfnt.js input.woff output.otf
```

### API

```js
// ttf to woff
const { toWoff } = require("woff-tools");
const fs = require("fs");

fs.writeFileSync("output.woff", toWoff(fs.readFileSync("input.ttf")));
```

```js
// woff to ttf
const { toSfnt } = require("woff-tools");
const fs = require("fs");

fs.writeFileSync("output.ttf", toSfnt(fs.readFileSync("input.woff")));
```

## License

MIT License
