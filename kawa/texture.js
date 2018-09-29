import Renderer from "./glCore/renderer.js";

export default class Texture{
  constructor(path){
    const gl = Renderer.gl;
    let img = new Image;
    img.onload = function(){
      let tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D,tex);
      gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img);
      gl.bindTexture(gl.TEXTURE_2D,null);
    }
    img.src = path;
  }
}
