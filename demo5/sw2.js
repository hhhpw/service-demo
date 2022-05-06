
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js')


// const precache = [
//     './a.png',
//     './b.png'
// ];

let urls = [
    "./bb.png"
    // '/demo3/test.js?v=0.2',
    // '/demo3/index.html',
    // '/demo3/a.png',
    // '/index.html',
    // '/index.js',
    // '/index.css'
]

const CACHE_NAME = 'precacheB';
if (workbox) {

    self.addEventListener('install', () => {
        caches.delete("precache");
        console.log('service worker B=====安装成功')
    })


    workbox.core.setCacheNameDetails({
        prefix: '',
        suffix: '',
        precache: CACHE_NAME,
    });

    workbox.precaching.precacheAndRoute(urls);


    // workbox.core.setCacheNameDetails({
    //     prefix: '',
    //     suffix: '',
    //     precache: CACHE_NAME,
    // });

    // workbox.precaching.precacheAndRoute(urls);

}


// 资源更新时，刷新一次即会加载最新的资源


