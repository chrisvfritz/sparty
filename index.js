var images = [
  'https://i.imgur.com/2pxYTLw.jpg',
  'https://i.imgur.com/WAd25ib.jpg',
  'https://i.imgur.com/DbiOfQW.jpg',
  'https://i.imgur.com/VbT7OVM.jpg',
  'https://i.imgur.com/DxM4nBg.jpg',
  'https://i.imgur.com/R4piqfs.jpg'
]

module.exports = function () {
  var randomIndex = Math.floor(Math.random() * images.length)
  return images[randomIndex]
}
