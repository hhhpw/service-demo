
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.4/workbox-sw.js')


// const precache = [
//     './a.png',
//     './b.png'
// ];

let urls = [
    '/demo4/test.js?v=0.1',
    '/index.html',
    // '/index.js',
    // '/index.css'
]
// const preCacheList = [

//     {
//         url: './test.js?v=0.1',
//         revision: '0.1'
//     },

// ];


const CACHE_NAME = 'precache';
if (workbox) {


    workbox.core.setCacheNameDetails({
        prefix: '',
        suffix: '',
        precache: CACHE_NAME,
    });

    // skipWaiting();
    // clientsClaim();

    self.addEventListener('install', (event) => {

        // event.waitUntil( return caches.open(CACHE_NAME).then(cache => cache.addAll(urls)));

        event.waitUntil(() => caches.open(CACHE_NAME).then(cache => cache.addAll(urls)));

        // event.waitUntil(
        //     caches.open(CACHE_NAME).then(cache => {
        //         console.log("cache", cache)
        //         // if (Object.keys(cache).length > 0) {
        //         return cache.addAll(preCacheList);
        //         // }

        //     })
        // )

        // event.waitUntil(
        //     caches.open(CACHE_NAME)
        //         .then(function (cache) {
        //             console.log('[SW]: Opened cache');
        //             return cache.addAll(preCacheList);
        //         })
        // );
        console.log('service worker 安装成功')
    })

    self.addEventListener('activate', (event) => {
        // 旧资源的清理
        console.log('service worker 激活成功');
        event.waitUntil(
            Promise.all(
                [
                    // self.clients.claim(),
                    caches.keys().then(cacheNames => {
                        return cacheNames.map(name => {
                            return caches.delete(name);
                        })
                    }),
                ]
            ).then(() => {
                console.log('新增缓存')
                return caches.open(CACHE_NAME).then(cache => cache.addAll(urls));
                // return self.clients.claim()
            })
        )

    })

    // self.addEventListener('fetch', event => {
    //     console.log('service worker 抓取请求成功: ' + event.request.url)
    // })

    self.addEventListener("message", (ev) => {
        console.log("service worker 监听message")
        console.log(ev)
        console.log("给service worker的信息是:", ev.data)
    });

    workbox.precaching.precacheAndRoute(urls);

}


// 资源更新时，刷新一次即会加载最新的资源


