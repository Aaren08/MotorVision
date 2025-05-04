let nextBtn = document.getElementById('next')
let prevBtn = document.getElementById('prev')
let carouselDom = document.querySelector('.carousel')
let listItemDom = document.querySelector('.carousel .list')
let thumbnailDom = document.querySelector('.carousel .thumbnail')

nextBtn.onclick = function () {
  showSlider('next')
}

prevBtn.onclick = function () {
  showSlider('prev')
}

let autoRunTime = 10000
let animationTime = 3000
let runTimeOut

let autoRun = setTimeout(() => {
  next.click()
}, autoRunTime)

function showSlider(type) {
  let itemSlider = document.querySelectorAll('.carousel .list .item')
  let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item')

  if (type === 'next') {
    listItemDom.appendChild(itemSlider[0])
    thumbnailDom.appendChild(itemThumbnail[0])
    carouselDom.classList.add('next')
  } else {
    let lastThumbnail = itemSlider.length - 1
    listItemDom.prepend(itemSlider[lastThumbnail])
    thumbnailDom.prepend(itemThumbnail[lastThumbnail])
    carouselDom.classList.add('prev')
  }

  clearTimeout(runTimeOut)
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next')
    carouselDom.classList.remove('prev')
  }, animationTime)

  clearTimeout(autoRun)
  autoRun = setTimeout(() => {
    next.click()
  }, autoRunTime)
}
