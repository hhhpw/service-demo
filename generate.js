const { injectManifest } = require("workbox-build");

injectManifest({
    swSrc: "./demo2/sw-demo2.js",
    swDest: './demo2/build-demo2.js',
    globDirectory: "./demmo2"
})