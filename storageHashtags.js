const concatArray = (...array) => array.length > 0 && array[0].length > 0 ? array.reduce((prev, current) => current.concat(prev), []) : []

// Primeira etapa 03/04

const hSevilla = [
    'sevilla'
]

const hBayern = [
    'bayern'
]

const hJuventus = [
    'juventus'
]

const hRealMadrid = [
    'realmadrid'
]

// Primeira etapa 04/04

const hLiverpool = [
    'liverpool'
]

const hCity = [
    'mancity',
    'city'
]

const hBarcelona = [
    'barça',
    'barcelona'
]

const hRoma = [
    'roma'
]

// Segunda etapa 10/04

const hCityS = [
    'mancity',
    'city'
]

const hLiverpoolS = [
    'liverpool',
    'liverpoolfc'
]

const hBarcelonaS = [
    'barça',
    'barcelona'
]

const hRomaS = [
    'roma'
]

// Segunda etapa 11/04

const hSevillaS = [
    'sevilla'
]

const hBayernS = [
    'bayern'
]

const hJuventusS = [
    'juventus'
]

const hRealMadridS = [
    'realmadrid'
]

const testeBizsys = [
    'bizsys',
    'teste'
]

const firstFinalDay3 = () => concatArray(hSevilla, hBayern, hJuventus, hRealMadrid)
const firstFinalDay4 = () => concatArray(hLiverpool, hCity, hBarcelona, hRoma)

const secondFinalDay10 = () => concatArray(hCityS, hLiverpoolS, hBarcelonaS, hRomaS)
const secondFinalDay11 = () => concatArray(hSevillaS, hBayernS, hJuventusS, hRealMadridS)

const agroupAll = {
    hSevilla,
    hBayern,
    hJuventus,
    hRealMadrid,
    hLiverpool,
    hCity,
    hBarcelona,
    hRoma,
    testeBizsys
}

// const agroupAllS = {
//     hCityS,
//     hLiverpoolS,
//     hBarcelonaS,
//     hRomaS,
//     hSevillaS,
//     hBayernS,
//     hJuventusS,
//     hRealMadridS,
//     testeNodejs
// }

const sortByFight = (array, secondFace = false) => 
        Object.keys(array).reduce((prev, current, index) => {
    
    //let agroupAll = secondFace ? agroupAllS : agroupAllF
    Object.keys(agroupAll).forEach(vKey => {
        agroupAll[vKey].forEach(vValue => {
            if(current == vValue){
                if(prev[vKey]){
                    prev[vKey] += array[current]
                }else{
                    prev[vKey] = array[current]
                }
            }
        })
    })
    return prev
}, {})

const sortByFight1 = currentString => Object.keys(agroupAll).reduce((prev, current) => {
        
    agroupAll[current].forEach(v => {
        if(currentString == v){
            prev = current
        }
    })
    return prev
}, '')

const findInArray = (array, word) => array.reduce((prev, current, index) => {
    if(word.indexOf(current) != -1){
        return current
    }
    return prev
}, {})

const getResultOrder = (campeao, 
                        sevilha, 
                        city, 
                        liverpool, 
                        bayern, 
                        realMadrid, 
                        roma, 
                        barcelon, 
                        juventus, 
                        bizsysTeste,
                        defaultEvent) => {
    
    switch(campeao){
        case 'hSevilla': {
            sevilha()
            break;
        }
        case 'hBayern': {
            bayern()
            break;
        }
        case 'hJuventus': {
            juventus()
            break;
        }
        case 'hRealMadrid': {
            realMadrid()
            break;
        }
        case 'hLiverpool': {
            liverpool()
            break;
        }
        case 'hCity': {
            city()
            break;
        }
        case 'hBarcelona': {
            barcelon()
            break;
        }
        case 'hRoma': {
            roma()
            break;
        }
        case 'hCityS': {
            city()
            break;
        }
        case 'hLiverpoolS': {
            liverpool()
            break;
        }
        case 'hBarcelonaS': {
            barcelon()
            break;
        }
        case 'hRomaS': {
            roma()
            break;
        }
        case 'hSevillaS': {
            sevilha()
            break;
        }
        case 'hBayernS': {
            bayern()
            break;
        }
        case 'hJuventusS': {
            juventus()
            break;
        }
        case 'hRealMadridS': {
            realMadrid()
            break;
        }
        case 'testeBizsys': {
            bizsysTeste()
            break;
        }
        default: {
            defaultEvent()
            break;
        }
    }
}

module.exports = {
    hSevilla,
    hBayern,
    hJuventus,
    hRealMadrid,
    hLiverpool,
    hCity,
    hBarcelona,
    hRoma,
    hCityS,
    hLiverpoolS,
    hBarcelonaS,
    hRomaS,
    hSevillaS,
    hBayernS,
    hJuventusS,
    hRealMadridS,

    testeBizsys,

    firstFinalDay3,
    firstFinalDay4,
    secondFinalDay10,
    secondFinalDay11,

    sortByFight,

    getResultOrder,

    findInArray,

    sortByFight1
}