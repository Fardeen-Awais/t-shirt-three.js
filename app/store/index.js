import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#efbd48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: 'three.png',
    fullDecal: 'three.png'   
})

export default state 