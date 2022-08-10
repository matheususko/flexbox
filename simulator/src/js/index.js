import '../scss/styles.scss'
import imageBuilding from '../assets/building.jpg'
import imageBackground from '../assets/background.jpg'

const elemRoot = document.getElementById('root')
elemRoot.classList.add('container')

const elemImageBuilding = new Image()
elemImageBuilding.src = imageBuilding

const elemImageBackground = new Image()
elemImageBackground.src = imageBackground

document.querySelector('#building').appendChild(elemImageBuilding)
document.querySelector('#background').appendChild(elemImageBackground)