import Renderer from "./glCore/renderer.js";

export default class Texture {
  constructor(path){
    const gl = Renderer.gl;
    let img = new Image;
    img.onload = function(){
      this.texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D,this.texture);
      gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img);
      gl.bindTexture(gl.TEXTURE_2D,null);
    }
    img.src = path;
  }
}
