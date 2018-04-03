const vermelhoBranco = universe => {
    // QUadrado
    universe.update({102: 0, 104: 0, 106: 0, 108: 255}) //verde
    universe.update({122: 0, 124: 0, 126: 0, 128: 255}) //verde
    universe.update({142: 0, 144: 0, 146: 0, 148: 255}) //verde
    universe.update({162: 0, 164: 0, 166: 0, 168: 255}) //verde

    // circulo centro
    universe.update({2: 255, 4: 255, 6: 0, 8: 0}) //vermelho
    universe.update({62: 255, 64: 255, 66: 0, 68: 0}) //vermelho

    // circular botton
    universe.update({42: 255, 44: 255, 46: 0, 48: 0}) //azul
    universe.update({22: 255, 24: 255, 26: 0, 28: 0}) //azul
    universe.update({82: 255, 84: 255, 86: 0, 88: 0}) //azul

    
}

const azulBranco = universe => {
    
    // QUadrado
    universe.update({102: 0, 104: 0, 106: 255, 108: 0}) //azul
    universe.update({122: 0, 124: 0, 126: 255, 128: 0}) //azul
    universe.update({142: 0, 144: 0, 146: 255, 148: 0}) //azul
    universe.update({162: 0, 164: 0, 166: 255, 168: 0}) //azul

    // circulo centro
    universe.update({2: 255, 4: 0, 6: 0, 8: 0, 10:255}) //branco
    universe.update({62: 255, 64: 0, 66: 0, 68: 0, 70:255}) //branco

    // circular botton
    universe.update({42: 255, 44: 0, 46: 0, 48: 255}) //azul
    universe.update({22: 255, 24: 0, 26: 0, 28: 255}) //azul
    universe.update({82: 255, 84: 0, 86: 0, 88: 255}) //azul

}

const vermelho = universe => {
    // QUadrado
    universe.update({102: 255, 104: 0, 106: 0, 108: 0}) //vermelho
    universe.update({122: 255, 124: 0, 126: 0, 128: 0}) //vermelho
    universe.update({142: 255, 144: 0, 146: 0, 148: 0}) //vermelho
    universe.update({162: 255, 164: 0, 166: 0, 168: 0}) //vermelho

    // circulo centro
    universe.update({2: 255, 4: 255, 6: 0, 8: 0, 10:0}) //vermelho
    universe.update({62: 255, 64: 255, 66: 0, 68: 0, 70:0}) //vermelho

    // circular botton
    universe.update({42: 255, 44: 255, 46: 0, 48: 0}) //vermelho
    universe.update({22: 255, 24: 255, 26: 0, 28: 0}) //vermelho
    universe.update({82: 255, 84: 255, 86: 0, 88: 0}) //vermelho
}

const vermelhoAzulEBranco = universe => {
    // 2 - d, 4 - r, 6 - g, 8 - b, 10 - w
    // QUadrado
    universe.update({102: 255, 104: 0, 106: 0, 108: 0}) //vermelho
    universe.update({122: 255, 124: 0, 126: 0, 128: 0}) //vermelho
    universe.update({142: 255, 144: 0, 146: 0, 148: 0}) //vermelho
    universe.update({162: 255, 164: 0, 166: 0, 168: 0}) //vermelho

    // circulo centro
    universe.update({2: 255, 4: 0, 6: 0, 8: 0, 10:255}) //branco
    universe.update({62: 255, 64: 0, 66: 0, 68: 0, 70:255}) //branco

    // circular botton
    universe.update({42: 255, 44: 0, 46: 0, 48: 255}) //azul
    universe.update({22: 255, 24: 0, 26: 0, 28: 255}) //azul
    universe.update({82: 255, 84: 0, 86: 0, 88: 255}) //azul
}

const branco = universe => {
    // 2 - d, 4 - r, 6 - g, 8 - b, 10 - w
    // QUadrado
    universe.update({102: 0, 104: 0, 106: 0, 108: 255}) //vermelho
    universe.update({122: 0, 124: 0, 126: 0, 128: 255}) //vermelho
    universe.update({142: 0, 144: 0, 146: 0, 148: 255}) //vermelho
    universe.update({162: 0, 164: 0, 166: 0, 168: 255}) //vermelho

    // circulo centro
    universe.update({2: 255, 4: 0, 6: 0, 8: 0, 10:255}) //branco
    universe.update({62: 255, 64: 0, 66: 0, 68: 0, 70:255}) //branco

    // circular botton
    universe.update({42: 255, 44: 0, 46: 0, 48: 0, 50: 255}) //azul
    universe.update({22: 255, 24: 0, 26: 0, 28: 0, 30: 255}) //azul
    universe.update({82: 255, 84: 0, 86: 0, 88: 0, 90: 255}) //azul
}

const laranjaEVermelho = universe => {
    // QUadrado
    universe.update({102: 255, 104: 127, 106: 0, 108: 0}) //vermelho
    universe.update({122: 255, 124: 127, 126: 0, 128: 0}) //vermelho
    universe.update({142: 255, 144: 127, 146: 0, 148: 0}) //vermelho
    universe.update({162: 255, 164: 127, 166: 0, 168: 0}) //vermelho

    // circulo centro
    universe.update({2: 255, 4: 255, 6: 0, 8: 0, 10:0}) //vermelho
    universe.update({62: 255, 64: 255, 66: 0, 68: 0, 70:0}) //vermelho

    // circular botton
    universe.update({42: 255, 44: 255, 46: 127, 48: 0}) //vermelho
    universe.update({22: 255, 24: 255, 26: 127, 28: 0}) //vermelho
    universe.update({82: 255, 84: 255, 86: 127, 88: 0}) //vermelho
}

const azulEGana = universe => {
    // QUadrado
    universe.update({102: 0, 104: 0, 106: 255, 108: 0}) //azul
    universe.update({122: 0, 124: 0, 126: 255, 128: 0}) //azul
    universe.update({142: 0, 144: 0, 146: 255, 148: 0}) //azul
    universe.update({162: 0, 164: 0, 166: 255, 168: 0}) //azul

    // circulo centro
    universe.update({2: 255, 4: 255, 6: 0, 8: 60, 10:0}) //vermelho
    universe.update({62: 255, 64: 255, 66: 0, 68: 60, 70:0}) //vermelho

    // circular botton
    universe.update({42: 255, 44: 255, 46: 0, 48: 60}) //vermelho
    universe.update({22: 255, 24: 255, 26: 0, 28: 60}) //vermelho
    universe.update({82: 255, 84: 255, 86: 0, 88: 60}) //vermelho
}

const brancoEPreto = universe => {
    // QUadrado
    universe.update({102: 0, 104: 0, 106: 0, 108: 255}) //azul
    universe.update({122: 0, 124: 0, 126: 0, 128: 255}) //azul
    universe.update({142: 0, 144: 0, 146: 0, 148: 255}) //azul
    universe.update({162: 0, 164: 0, 166: 0, 168: 255}) //azul

    // circulo centro
    universe.update({2: 255, 4: 255, 6: 127, 8: 0, 10:0}) //vermelho
    universe.update({62: 255, 64: 255, 66: 127, 68: 0, 70:0}) //vermelho

    // circular botton
    universe.update({42: 255, 44: 0, 46: 0, 48: 0}) //vermelho
    universe.update({22: 255, 24: 0, 26: 0, 28: 0}) //vermelho
    universe.update({82: 255, 84: 0, 86: 0, 88: 0}) //vermelho
}

const alloff = universe => {
    // QUadrado
    universe.update({102: 0, 104: 0, 106: 0, 108: 0}) //azul
    universe.update({122: 0, 124: 0, 126: 0, 128: 0}) //azul
    universe.update({142: 0, 144: 0, 146: 0, 148: 0}) //azul
    universe.update({162: 0, 164: 0, 166: 0, 168: 0}) //azul

    // circulo centro
    universe.update({2: 255, 4: 0, 6: 127, 8: 0, 10:0}) //vermelho
    universe.update({62: 255, 64: 0, 66: 127, 68: 0, 70:0}) //vermelho

    // circular botton
    universe.update({42: 255, 44: 0, 46: 0, 48: 0}) //vermelho
    universe.update({22: 255, 24: 0, 26: 0, 28: 0}) //vermelho
    universe.update({82: 255, 84: 0, 86: 0, 88: 0}) //vermelho
}

module.exports = {vermelhoBranco, azulBranco, vermelho, vermelhoAzulEBranco, branco, laranjaEVermelho, azulEGana, brancoEPreto, alloff}