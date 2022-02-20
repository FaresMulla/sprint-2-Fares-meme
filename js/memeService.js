'use strict'

var gY = 100

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }
];

var gMeme =
{
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines:
        [
            {
                txt: 'enter text',
                size: 50,
                align: 'left',
                color: 'red',
                strokeC: 'black',
                strokeS: 1,
                font: 'Arial',
                x: 30,
                y: 100
            },
        ]
}

function getMeme() {
    return gMeme
}

function changeTextInMeme(txt, idx) {
    gMeme.lines[idx].txt = txt
}

function removeLineService(line) {
    gMeme.lines.splice(line, 1)
    var res = sendArrPlace()
    drawImg(res.currImg)
    drawTextOnCanvas()
}

function fontEnlargement() {
    var res = sendArrPlace()
    gMeme.lines[res.arrPlace].size += 5
    drawImg(res.currImg)
    drawTextOnCanvas()
}
function fontReduction() {
    var res = sendArrPlace()
    gMeme.lines[res.arrPlace].size -= 5
    drawImg(res.currImg)
    drawTextOnCanvas()
}
function strokeEnlargement() {
    var res = sendArrPlace()
    gMeme.lines[res.arrPlace].strokeS += 1
    drawImg(res.currImg)
    drawTextOnCanvas()
}
function strokeReduction() {
    var res = sendArrPlace()
    gMeme.lines[res.arrPlace].strokeS -= 1
    drawImg(res.currImg)
    drawTextOnCanvas()
}
function textAlignLeft(val) {
    var res = sendArrPlace()
    gMeme.lines[res.arrPlace].align = val
    gMeme.lines[res.arrPlace].x = 30
    drawImg(res.currImg)
    drawTextOnCanvas()
}
function textAlignCenter(val) {
    var res = sendArrPlace()
    gMeme.lines[res.arrPlace].align = val
    gMeme.lines[res.arrPlace].x = (gCanvas.width / 2)
    drawImg(res.currImg)
    drawTextOnCanvas()
}
function textAlignRight(val) {
    var res = sendArrPlace()
    gMeme.lines[res.arrPlace].align = val
    gMeme.lines[res.arrPlace].x = (gCanvas.width - 30)
    drawImg(res.currImg)
    drawTextOnCanvas()
}
function moveTextUp() {
    var res = sendArrPlace()
    gMeme.lines[res.arrPlace].y += 10
    drawImg(res.currImg)
    drawTextOnCanvas()
}
function moveTextDown() {
    var res = sendArrPlace()
    gMeme.lines[res.arrPlace].y -= 10
    drawImg(res.currImg)
    drawTextOnCanvas()
}
function setFontFamily(val) {
    var res = sendArrPlace()
    gMeme.lines[res.arrPlace].font = val
    drawImg(res.currImg)
    drawTextOnCanvas()
}

function addNewLine() {
    var res = sendArrPlace()
    arrPlace++
    var newLine = {
        txt: '',
        size: 50,
        align: 'left',
        color: 'red',
        strokeC: 'black',
        strokeS: 1,
        font: 'Arial',
        x: 30,
        y: (gY + 100)
    }
    gY += 100
    gMeme.lines.push(newLine)
    document.querySelector('input[name=text-on-canvas]').value = ''
    drawImg(res.currImg)
    drawTextOnCanvas(arrPlace)
    // console.log('gMeme.lines', gMeme.lines);
}

function textColor(val) {
    var res = sendArrPlace()
    gMeme.lines[res.arrPlace].color = val
    drawImg(res.currImg)
    drawTextOnCanvas()
}
function strokeColor(val) {
    var res = sendArrPlace()
    gMeme.lines[res.arrPlace].strokeC = val
    drawImg(res.currImg)
    drawTextOnCanvas()
}