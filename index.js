const HashtagCount = require('hashtag-count')
const storage = require('node-persist')
const DMX = require('dmx')
const io = require('socket.io-client')
const A = DMX.Animation

const dmx = new DMX()

var universe = dmx.addUniverse('demo', 'enttec-open-usb-dmx', '/dev/cu.usbserial-A4004UbI')

// 1 - 9

// 2 - d, 4 - 5, 6 - r, 8 - b
// universe.update({1: 0, 2: 255, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 255})
// universe.update({10: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0})

// universe.update({21: 0, 22: 255, 23: 0, 24: 255, 25: 0, 26: 0, 27: 0, 28: 0})
// universe.update({31: 0, 32: 0, 33: 0, 34: 0, 35: 0, 36: 0, 37: 0, 38: 0})

// universe.update({41: 0, 42: 255, 43: 0, 44: 255, 45: 0, 46: 0, 47: 0, 48: 0})
// universe.update({51: 0, 52: 0, 53: 0, 54: 0, 55: 0, 56: 0, 57: 0, 58: 0})

// universe.update({61: 0, 62: 255, 63: 0, 64: 255, 65: 0, 66: 0, 67: 0, 68: 0})
// universe.update({71: 0, 72: 0, 73: 0, 74: 0, 75: 0, 76: 0, 77: 0, 78: 0})

// universe.update({81: 0, 82: 255, 83: 0, 84: 255, 85: 0, 86: 0, 87: 0, 88: 0})
// universe.update({91: 0, 92: 0, 93: 0, 94: 0, 95: 0, 96: 0, 97: 0, 98: 0})

// Cima
// 2 - r, 4 - g, 8 - b
// universe.update({101: 0, 102: 0, 103: 0, 104: 0, 105: 0, 106: 0, 107: 0, 108: 0})
// universe.update({111: 0, 112: 0, 113: 0, 114: 0, 115: 0, 116: 0, 117: 0, 118: 0})

// universe.update({121: 0, 122: 0, 123: 0, 124: 0, 125: 0, 126: 0, 127: 0, 128: 0})
// universe.update({131: 0, 132: 0, 133: 0, 134: 0, 135: 0, 136: 0, 137: 0, 138: 0})

const {vermelhoBranco, azulBranco, vermelho, vermelhoAzulEBranco, branco, laranjaEVermelho, azulEGana, brancoEPreto, alloff} = require('./showColors')

// vermelhoBranco(universe)
// azulBranco(universe)
// vermelho(universe)
// vermelhoAzulEBranco(universe)
// branco(universe)
// laranjaEVermelho(universe)
// azulEGana(universe)
// brancoEPreto(universe)

/// LISTRADO HORIZONTAL
// QUadrado
// universe.update({102: 0, 104: 255, 106: 0, 108: 0}) //verde
// universe.update({122: 0, 124: 255, 126: 0, 128: 0}) //verde
// universe.update({142: 0, 144: 255, 146: 0, 148: 0}) //verde
// universe.update({162: 0, 164: 255, 166: 0, 168: 0}) //verde

// // circulo centro
// universe.update({2: 255, 4: 255, 6: 0, 8: 0}) //vermelho
// universe.update({62: 255, 64: 255, 66: 0, 68: 0}) //vermelho

// // circular botton
// universe.update({42: 255, 44: 125, 46: 125, 48: 0}) //azul
// universe.update({22: 255, 24: 125, 26: 125, 28: 0}) //azul
// universe.update({82: 255, 84: 125, 86: 125, 88: 0}) //azul





/// LISTRADO VERTICAL
// universe.update({102: 0, 104: 255, 106: 0, 108: 0}) //verde
// universe.update({2: 255, 4: 0, 6: 255, 8: 0}) //verde
// universe.update({22: 255, 24: 0, 26: 255, 28: 0}) //verde


// universe.update({122: 255, 124: 0, 126: 0, 128: 0}) //vermelho
// universe.update({62: 255, 64: 255, 66: 0, 68: 0}) //vermelho
// universe.update({42: 255, 44: 255, 46: 0, 48: 0}) //vermelho
// universe.update({142: 255, 144: 0, 146: 0, 148: 0}) //vermelho

// universe.update({162: 0, 164: 0, 166: 255, 168: 0}) //azul
// universe.update({82: 255, 84: 0, 86: 0, 88: 255}) //azul

var hc = new HashtagCount({
  'consumer_key': 'V0uA3u4gc3yVZAUkM0V3rqRBG',
  'consumer_secret': '4RKaWilYB1tTKjbpUcOUe7KhhNAhaeijZmOsL5osDZKrn8Tdh8',
  'access_token': '968093812714328067-ZEv0KS5v6ZElSxKvUQAght7oViGidxy',
  'access_token_secret': 'OefT5BxtME0n3f1Wi2jhsDyO1vc7Y3hvfRs9QYrjMHOWn'
})

// inner modules

const storageHashtags = require('./storageHashtags')

const concatArray = (...array) => array.length > 0 && array[0].length > 0 ? array.reduce((prev, current) => current.concat(prev), []) : []
const alarmClock = (date, cb) => {
    let currentM = date.getTime() - Date.now()
    if(currentM < 0) return console.log('Not executable, time is lower zero')
    return setTimeout(cb, currentM)
}

const convertObjectToArray = data => Object.keys(data).reduce((prev, curr) => {
    prev.push([curr, data[curr]])
    return prev
}, [])
  
const convertArrayToObject = array => array.reduce((prev, curr) => {
    prev[curr[0]] = curr[1]
    return prev
}, {})
  
const sortByInnerArray = array => 
        array.sort((a, b) => b[1] - a[1])

const agroupByDate = (result) => Object.keys(result).reduce((prev, curre) => {
    let v = storageHashtags.sortByFight(result[curre], false)
    Object.keys(v).forEach(vFK => {
        if(prev[vFK]){
            prev[vFK] += v[vFK]
        }else{
            prev[vFK] = v[vFK]
        }
    })  
    return prev
}, {})

const startCount = (hashtags, cb) => {
    const interval = '10 seconds';

    const history = '10 seconds';
    
    hc.start({
        hashtags: hashtags,       // required 
        interval: interval,       // required 
        intervalCb: cb,
        history: history,
        connectingCb: () => {
            // Called when connecting to Twitter Streaming API for the first time. 
            console.log('Connectando')
        },
        reconnectingCb: () => {
            // Called as soon as a failed connection is detected and a reschedule attempt 
            // is scheduled. 
            console.log('reconectado')
        },
        connectedCb: () => {
            // Called when a connection is established, either on the first connection 
            // attempt or a later reconnection attempt. 
            console.log('conectado')
        }
    })
}

const showLeds = (campeaoArray) => {
    if(campeaoArray.length > 0){
        storageHashtags.getResultOrder(campeaoArray[0][0], () => { // sevilha
            // vermelho e branco
            console.log('sevilha')
            vermelhoBranco(universe)
        }, () => { // city
            console.log('city')
            // azul e branco 
            azulBranco(universe)
        }, () => { // liverpool
            console.log('liverpool')
            // vermelho
            vermelho(universe)
        }, () => { // bayern
            console.log('bayern')
            // vermelho, azul e branco
            vermelhoAzulEBranco(universe)
        }, () => { // realMadrid
            console.log('realMadrid')
            // branco
            branco(universe)
        }, () => { // roma
            console.log('roma')
            // laranja e vermelho
            laranjaEVermelho(universe)
        }, () => { // barcelon
            console.log('barcelon')
            // azul e grená 
            azulEGana(universe)
        }, () => { // juventus
            console.log('juventus')
            // branco e preto
            brancoEPreto(universe)
        }, () => {
            vermelhoBranco(universe)
            console.log('teste bizsys')
        }, () => {
            alloff(universe)
        })
    }else{
        console.error('Erro: not find campeao')
    }
}

const execSocket = cb => {
    const socket = io('http://lays.brazilsouth.cloudapp.azure.com:8080').on('tweet', cb)

    socket.on('connect', () => {
        // console.log(socket)
        socket.emit('deviceConnect', JSON.stringify({
            "deviceName": "LED_Principal",
            "deviceId":   "5ac2a4f7fc497db81ee50c6b",
            "actionId":   "5ac11b205ec6cca480b38a24"
        }))
    })
}

const exec = (dayString, methodExec, cbCampeao) => () => {
    console.log(`\n\nIniciando ${dayString}`)

    execSocket(t => {
        storage.getItem(dayString).then(result => {
            let findBase = storageHashtags.findInArray(methodExec(), t.body.toLowerCase())

            if(Object.keys(findBase).length > 0){
                let base = storageHashtags.sortByFight1(findBase)
                console.log(base)
                if(result){
                    if(result[base]){
                        result[base]++
                    }else{
                        result[base] = 1
                    }
                }else{
                    result = {
                        [base]: 1
                    }
                }
                
                cbCampeao(sortByInnerArray(convertObjectToArray(result)))
                return storage.setItem(dayString, result)
            }else{
                return Promise.reject('Not found')                
            }
        }).then(result => console.log('Tudo certo', result)).catch(console.error)
    })

    // startCount(methodExec(), (err, result) => {
    //     if(err) return console.error(err)

    //     storage.getItem(dayString).then(v => {
    //         // Só pegar este valor caso não tenha persistencia
    //         let trateV = agroupByDate(result)
    //         let returned
    //         if(v){
    //             returned = Object.keys(trateV).reduce((prev, curr) => {
    //                 if(v[curr]){
    //                     prev[curr] = trateV[curr] + v[curr]
    //                 }else{
    //                     prev[curr] = trateV[curr]
    //                 }
    //                 return prev
    //             }, {})
    //         }else{
    //             returned = trateV
    //         }
    //         console.log(returned)
    //         cbCampeao(sortByInnerArray(convertObjectToArray(returned)))
    //         return storage.setItem(dayString, returned)
    //     }).then(() => console.log('Tudo certo')).catch(console.error)
        
    //     storage.getItem('log').then(v => {
    //         if(v){
    //             v.push(result)
    //         }else{
    //             v = [result]
    //         }
    //         return storage.setItem('log', v)
    //     }).catch(console.error)
    //     //.then(ver => console.log(JSON.stringify(ver)))
    // })
}

storage.init().then(() => {
    console.log('Inicio do programa')

    // First 3/4-15:45
    var t = new Date('2018-04-03T15:45:00')
    alarmClock(t, exec('dia3', storageHashtags.firstFinalDay3, showLeds))
    exec('dia3', storageHashtags.firstFinalDay3, showLeds)()

    // First 4/4-15:45
    t = new Date('2018-04-04T15:45:00')
    alarmClock(t, exec('dia4', storageHashtags.firstFinalDay4, showLeds))
    //exec('dia4', storageHashtags.firstFinalDay4, showLeds)()

    // First 10/4-15:45
    t = new Date('2018-04-10T15:45:00')
    alarmClock(t, exec('dia10', storageHashtags.secondFinalDay10, showLeds))
    //exec('dia10', storageHashtags.secondFinalDay10, showLeds)()

    // First 11/4-15:45
    t = new Date('2018-04-11T15:45:00')
    alarmClock(t, exec('dia11', storageHashtags.secondFinalDay11, showLeds))
    //exec('dia11', storageHashtags.secondFinalDay11, showLeds)()
    
})