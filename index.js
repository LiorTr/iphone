let icons = document.querySelectorAll('.icons')
let weather = document.querySelector('.weather')
let screen = document.querySelector('.screen')
let backSpace = document.querySelector('.back-space')
let whiteContainer = document.querySelector('.white-container')
let heart = document.querySelector('.heart')
let calendar = document.querySelector('.calendar')
let spotifyPlay = document.querySelector('.spotify-play')
let pets = document.querySelector('.image-fader')
let clock = document.querySelector('.clock')
let navigation = document.querySelector('.navigation')


const addIphoneClickEvent = (selector, urlPhoto) => {
  document.querySelector(selector).addEventListener('click', function () {
    screen.style.backgroundImage = `url('pics/${urlPhoto}')`
    screen.style.backgroundRepeat = 'no-repeat'
    screen.style.backgroundSize = 'cover'

    for (let i = 0; i < icons.length; i++) {
      icons[i].style.opacity = '0'
    }
    weather.style.opacity = '0'
    whiteContainer.style.opacity = '0'
    heart.style.opacity = '0'
    calendar.style.opacity = '0'
    spotifyPlay.style.opacity = '0'
    pets.style.opacity = '0'
    clock.style.opacity = '0'
    navigation.style.opacity = '0'

  })
}
addIphoneClickEvent('.icon-one', 'appStoreMenu.jpg')
addIphoneClickEvent('.icon-two', 'photosMenu.jpg')
addIphoneClickEvent('.icon-three', 'mailMenu.jpg')
addIphoneClickEvent('.icon-four', 'settingsMenu.jpg')
addIphoneClickEvent('.icon-five', 'cameraMenu.jpg')
addIphoneClickEvent('.icon-six', 'notesMenu.jpg')
addIphoneClickEvent('.icon-seven', 'safariMenu.jpg')
addIphoneClickEvent('.icon-eight', 'MapsMenu.jpg')
addIphoneClickEvent('.icon-nine', 'googleMenu.jpg')
addIphoneClickEvent('.icon-ten', 'facebookMenu.jpg')
addIphoneClickEvent('.icon-eleven', 'callMenu.jpg')
addIphoneClickEvent('.icon-twelve', 'musicMenu.jpg')
addIphoneClickEvent('.icon-thirteen', 'appleTvMenu.jpg')
addIphoneClickEvent('.icon-fourteen', 'spotifyMenu.jpg')
addIphoneClickEvent('.icon-fifteen', 'whatsAppMenu.jpg')
addIphoneClickEvent('.icon-sixteen', 'faceTimeMenu.jpg')

backSpace.addEventListener('click', function () {
  screen.style.backgroundImage = "url('pics/ScreenImage.jpg')"
  screen.style.backgroundSize = 'fit'
  for (let i = 0; i < icons.length; i++) {
    icons[i].style.opacity = '1'
  }
  weather.style.opacity = '1'
  whiteContainer.style.opacity = '0.4'
  heart.style.opacity = '1'
  calendar.style.opacity = '1'
  spotifyPlay.style.opacity = '1'
  pets.style.opacity = '1'
  clock.style.opacity = '1'
  navigation.style.opacity = '1'

})

spotifyPlay.addEventListener('mouseover', function () {
  pets.style.transition = '0.5s'
  pets.style.opacity = '0'
})


weather.addEventListener('mouseover', function () {
  pets.style.transition = '0.5s'
  pets.style.opacity = '0'
})

if (screen.style.backgroundImage === " url(pics/ScreenImage.jpg)") {
  backSpace.addEventListener('mouseout', function () {
    pets.style.opacity = '1'
  })
}