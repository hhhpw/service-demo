
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js')


// const precache = [
//     './a.png',
//     './b.png'
// ];

let urls = [
    "./aa.png"
    // '/demo3/test.js?v=0.2',
    // '/demo3/index.html',
    // '/demo3/a.png',
    // '/index.html',
    // '/index.js',
    // '/index.css'
]

const CACHE_NAME = 'precache';
if (workbox) {


    self.addEventListener('install', () => {
        console.log('service worker A=====安装成功')
    })


    workbox.core.setCacheNameDetails({
        prefix: '',
        suffix: '',
        precache: CACHE_NAME,
    });

    workbox.precaching.precacheAndRoute(urls);

}




