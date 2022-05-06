importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');



workbox.routing.registerRoute(
    /\.(?:css|js)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "assets",
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 1000,
                maxAgeSeconds: 18000000,
            })
        ]
    })
)

workbox.routing.registerRoute(
    /\.(?:png|jpg|gif)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 1000,
                maxAgeSeconds: 1800,
            })
        ]
    })
)

const CACHE_NAME = "pre_cache";

workbox.core.setCacheNameDetails({
    prefix: '',
    suffix: '',
    precache: CACHE_NAME,
});

const urls = [
    './index.html',
]


// workbox-build将会替换
const v = self.__WB_MANIFEST;
workbox.precaching.precacheAndRoute(urls);