console.log('service worke2222r 注册成功')


self.addEventListener('activate', (ev) => {
    console.log('service worker 激活成功');
})

self.addEventListener('fetch', event => {
    console.log('service worker 抓取请求成功: ' + event.request.url)
})

self.addEventListener("message", (ev) => {
    console.log("service worker 监听message")
    console.log(ev)
    console.log("给service worker的信息是:", ev.data)
})

