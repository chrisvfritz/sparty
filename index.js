var images = [
  'https://i.imgur.com/2pxYTLwm.jpg',
  'https://i.imgur.com/WAd25ibm.jpg',
  'https://i.imgur.com/DbiOfQWm.jpg',
  'https://i.imgur.com/VbT7OVMm.jpg',
  'https://i.imgur.com/DxM4nBgm.jpg',
  'https://i.imgur.com/R4piqfsm.jpg'
]

module.exports = function () {
  var randomIndex = Math.floor(Math.random() * images.length)
  return images[randomIndex]
}
