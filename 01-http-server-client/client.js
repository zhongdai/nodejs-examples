const http = require('http')

const options = {
    hostname: '127.0.0.1',
    port: 8081,
    path: '/',
    method: 'GET'
}

for (var i = 0; i < 100; i++) {
    var content
    var req = http.request(options, res => {
        res.on('data', d => {
            content += d
        })

        res.on('end', () => {
            console.log(content)
        })
    })

    req.on('error', error => {
        console.error(error)
    })

    req.end()
}
