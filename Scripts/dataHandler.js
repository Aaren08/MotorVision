import carouselItems from './carouselData.js'
import thumbnails from './thumbnailData.js'

// Helper function to create carousel items
function createCarouselItems() {
  const listContainer = document.querySelector('.carousel .list')
  carouselItems.forEach((item) => {
    const carItem = document.createElement('div')
    carItem.className = 'item'
    carItem.innerHTML = `
      <img src="${item.image}" />
      <div class="content">
        <div class="company">${item.company}</div>
        <div class="name">${item.name}</div>
        <div class="variant">${item.variant}</div>
        <div class="specs">
          <ul>
            <li>Engine: ${item.specs.engine}</li>
            <li>Power: ${item.specs.power}</li>
            <li>Torque: ${item.specs.torque}</li>
          </ul>
          <ul>
            <li>Weight: ${item.specs.weight}</li>
            <li>0 to 62 mph: ${item.specs.acceleration}</li>
            <li>Top Speed: ${item.specs.topSpeed}</li>
          </ul>
        </div>
        <div class="buttons">
          <button onclick="window.open('${item.links.buyNow}', '_blank')">BUY NOW</button>
          <button onclick="window.open('${item.links.learnMore}', '_blank')">Learn more</button>
        </div>
      </div>
    `
    listContainer.appendChild(carItem)
  })
}

// Helper function to create thumbnails
function createThumbnails() {
  const thumbnailContainer = document.querySelector('.carousel .thumbnail')
  thumbnails.forEach((thumbnail) => {
    const thumbItem = document.createElement('div')
    thumbItem.className = 'item'
    thumbItem.innerHTML = `
      <img src="${thumbnail.image}" />
      <div class="content">
        <div class="name">${thumbnail.name}</div>
        <div class="description">${thumbnail.description}</div>
      </div>
    `
    // Add click event to sync with the main carousel
    thumbItem.addEventListener('click', () => {
      syncCarouselWithThumbnail(index)
    })
    thumbnailContainer.appendChild(thumbItem)
  })
}

// Sync carousel with thumbnail click
function syncCarouselWithThumbnail(index) {
  const listContainer = document.querySelector('.carousel .list')
  const items = Array.from(listContainer.children)
  while (items[0] !== items[index]) {
    listContainer.appendChild(items.shift())
  }
}

// Initialize the carousel
document.addEventListener('DOMContentLoaded', () => {
  createCarouselItems()
  createThumbnails()
})
