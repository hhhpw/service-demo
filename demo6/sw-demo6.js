
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js')




if (workbox) {
    workbox.routing.registerRoute(
        /\/article\.json$/,
        new workbox.strategies.StaleWhileRevalidate(
            {
                cacheName: "demo6-sw"
            }
        )
    )
}
