const io = require('socket.io-client')

const socket = io('http://lays.brazilsouth.cloudapp.azure.com:8080').on('tweet', (t) => {
      console.log(t)
    })

socket.on('connect', () => {
    console.log('Teste')
                // console.log(socket)
            socket.emit('deviceConnect', JSON.stringify({
                "deviceName": "LED_Principal",
                "deviceId":   "5ac2a4f7fc497db81ee50c6b",
                "actionId":   "5ac11b205ec6cca480b38a24"
            }))
})