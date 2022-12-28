import airpods from './assets/products/airpods.png'
import appleTv from './assets/products/app-tv.png'
import boatHeadphone from './assets/products/boat-headphone.png'
import echoDot from './assets/products/echo.png'
import homePod from './assets/products/home-pod.png'
import iphoneX from './assets/products/iphone-x.png'
import macMini from './assets/products/mac-mini.png'
import pocoF2 from './assets/products/poco-f2.png'

const productsData = [
  {
    id: 1,
    name: 'boAt Rockerz 370',
    info: 'Headphones with Upto 12 Hours Playtime, Cozy Padded Earcups and Bluetooth v5.0',
    price: 50,
    image: boatHeadphone,
    qty: 0,
  },
  {
    id: 2,
    name: 'POCO F2 Pro',
    info: 'Qualcomm® Kryo™ 585, 7 nm Process Technology CPU frequency',
    price: 299,
    image: pocoF2,
    qty: 0,
  },
  {
    id: 3,
    name: 'Echo Dot',
    info: 'Echo Dot is a smart speaker that can be operated by voice - even from a distance.',
    price: 100,
    image: echoDot,
    qty: 0,
  },
  {
    id: 4,
    name: 'APPLE iPhone X',
    info: 'Meet the iPhone X - the device that so smart that it responds to a tap, your voice, and even a glance.',
    price: 1000,
    image: iphoneX,
    qty: 0,
  },
  {
    id: 5,
    name: 'Apple AirPods',
    info: 'New Apple H1 headphone chip delivers faster wireless connection to your devices',
    price: 350,
    image: airpods,
    qty: 0,
  },
  {
    id: 6,
    name: 'Google Home',
    info: 'A smart personal assistant at your beck and call, who makes doing your everyday tasks easier',
    price: 400,
    image: homePod,
    qty: 0,
  },
  {
    id: 7,
    name: 'Apple Mac Mini M1',
    info: 'Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance',
    price: 500,
    image: macMini,
    qty: 0,
  },
  {
    id: 8,
    name: 'Apple TV 4K',
    info: 'A12 Bionic chip gives a big boost to audio, video, and graphics, for even better game and app experiences',
    price: 200,
    image: appleTv,
    qty: 0,
  },
]

export default productsData
