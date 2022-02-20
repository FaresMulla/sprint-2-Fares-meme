'use strict'

'use strict'

var gGalleryImgs;
const STORAGE_KEY = 'galleryDB'
var imgsCounter = 1

_createImgs()
// console.log('gGalleryImgs', gGalleryImgs);

function getImgsForDisplay() {
    return gGalleryImgs
}

function _createImg(elTitle, elImg) {
    let img = {
        id: imgsCounter++,
        title: elTitle,
        imgUrl: elImg,
        counterFind: 0
    }
    return img
}

function _createImgs() {

    gGalleryImgs = [
        _createImg('donald trump', 'img/1.jpg'),
        _createImg('dogs', 'img/2.jpg'),
        _createImg('dog and baby', 'img/3.jpg'),
        _createImg('cat', 'img/4.jpg'),
        _createImg('angry baby', 'img/5.jpg'),
        _createImg('funny man', 'img/6.jpg'),
        _createImg('surprised baby', 'img/7.jpg'),
        _createImg('listening man', 'img/8.jpg'),
        _createImg('nasty baby', 'img/9.jpg'),
        _createImg('barack obama', 'img/10.jpg'),
        _createImg('men wrestling', 'img/11.jpg'),
        _createImg('good man', 'img/12.jpg'),
        _createImg('jim carrey', 'img/13.jpg'),
        _createImg('matrix morpheus', 'img/14.jpg'),
        _createImg('precise', 'img/15.jpg'),
        _createImg('ridiculous', 'img/16.jpg'),
        _createImg('vladimir putin', 'img/17.jpg'),
        _createImg('cartoons', 'img/18.jpg'),
    ]

}



function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

