'use strict'

var gCanvas
var gCtx
var arrPlace = 0
var currImg

function onInit() {
    renderGallery()
    myListSearch()
    console.log('loaded');
    gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d')
}



function changeText(ev) {
    const myText = document.querySelector('input[name=text-on-canvas]').value
    changeTextInMeme(myText, arrPlace)
    if (ev.keyCode == 8 || ev.keyCode == 46) clearTxt()
    drawTextOnCanvas()
}

function drawImg(val) {
    currImg = val
    var elImg = document.querySelector('.' + val)
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)

}

function drawTextOnCanvas(idx = arrPlace) {
    var elInput = getMeme()
    elInput = { txt: elInput.lines[idx].txt, x: elInput.lines[idx].x, y: elInput.lines[idx].y }
    saveAndRestoreExample()
}

function saveAndRestoreExample() {
    var elInput = getMeme()
    elInput.lines.forEach(line => {
        // console.log('line', line);
        gCtx.lineWidth = line.strokeS
        gCtx.strokeStyle = line.strokeC
        gCtx.fillStyle = line.color
        gCtx.font = (line.size + 'px ' + line.font)
        gCtx.textAlign = line.align;
        gCtx.fillText(line.txt, line.x, line.y)
        gCtx.strokeText(line.txt, line.x, line.y)
        gCtx.strokeStyle = 'blue';
        gCtx.strokeRect(line.x, line.y, line.txt.width, line.txt.height);
    })

}

function clearTxt() {
    drawImg(currImg)
    drawTextOnCanvas()
}

function nextText() {
    document.querySelector('input[name=text-on-canvas]').value = ''
    var memes = getMeme()
    // console.log('elInput.lines.length', elInput.lines.length-1);
    if (arrPlace == memes.lines.length - 1) {
        arrPlace = 0
    } else {
        arrPlace++
    }
    document.querySelector('input[name=text-on-canvas]').value = memes.lines[arrPlace].txt

}


function sendArrPlace() {
    return { arrPlace: arrPlace, currImg: currImg }
}


function downloadCanvas(elLink) {
    // console.log('elLink', elLink);
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-img.jpg'
}


function onShareImg() {
    const imgDataUrl = gCanvas.toDataURL("image/jpeg");//create img url
    function onSuccess(uploadedImgUrl) {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}`)
    }
    doUploadImg(imgDataUrl, onSuccess);
}

//uploads the img to an upload server
function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData();
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            // console.log('Got back live url:', url);
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}

function removeLine() {
    removeLineService(arrPlace)
}


