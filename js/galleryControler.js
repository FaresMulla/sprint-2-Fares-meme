'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }




function renderGallery(search = '') {
  var elGallery = document.querySelector('.my-gallery')
  var mySearch = search
  var myGallery = getImgsForDisplay()
  var myGalleryFilter = myGallery.filter(elemnt => elemnt.title.includes(mySearch))
  var strHtml = myGalleryFilter.map(img => `
    <div class="img-container col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2"><img src="./${img.imgUrl}"  class="img-item my-img-${img.id}" onclick="showMemeEditor('my-img-${img.id}')" ></div>
    `).join('')
  // console.log('strHtml', strHtml);
  elGallery.innerHTML = strHtml
}

function onSearch() {
  var mySearch = document.querySelector('input[name=searchMeme]').value
  // console.log('mySearch', mySearch);
  renderGallery(mySearch)

}


function myListSearch() {
  var myListSearch = document.querySelector('.imgsListToS')
  var myGallery = getImgsForDisplay()
  var strHtml = myGallery.map(elemnt => `<option value="${elemnt.title}" label="${elemnt.title}" />`)
  myListSearch.innerHTML = strHtml.join('')
  // console.log('strHtml', strHtml);

}



function showMemeEditor(val = 'value') {
  var elGallery = document.querySelector('.main-page')
  elGallery.classList.add('display-none')

  var elSearch = document.querySelector('.search-input')
  elSearch.classList.add('display-none')


  var elMeme = document.querySelector('.main-editor')
  elMeme.classList.remove('display-none')
  drawImg(val)



}

function backToGallery() {
  var elGallery = document.querySelector('.main-page')
  elGallery.classList.remove('display-none')

  var elSearch = document.querySelector('.search-input')
  elSearch.classList.remove('display-none')


  var elMeme = document.querySelector('.main-editor')
  elMeme.classList.add('display-none')
}





function searchRate() {
  var mySearch = document.querySelector('input[name=searchMeme]').value
  var mySearches = document.querySelector('.popular-searches')

  var imgRate = getImgsForDisplay().find(Element => Element.title == mySearch)
  if (imgRate) {
    imgRate.counterFind++
    mySearches.innerHTML += `${imgRate.title}, `
  }

}