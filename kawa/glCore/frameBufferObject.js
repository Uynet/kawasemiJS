import Renderer from "./renderer.js";

export default class FrameBufferObject{
  constructor(width,height){
    const gl = Renderer.GetGL();
    this.gl = gl;
    console.assert(width && height);
    this.width = width;
    this.height = height;
  }
  createBuffer(){
    const gl = this.gl;
    //this.Bind()
    //framebuffer
    this.framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER,this.framebuffer);
    //Defpth
    this.depthRendererBuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER,this.depthRendererBuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,this.width,this.height);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,this.depthRendererBuffer);

    //Texture
    this.fTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D,this.fTexture);

    //gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    const texSlot = 10;
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,this.width,this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.fTexture, 0);
    gl.activeTexture(gl.TEXTURE0+texSlot);

    this.UnBind()
  }
  Bind(){
    const gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
    gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthRendererBuffer);
    gl.bindTexture(gl.TEXTURE_2D, this.fTexture);
  }
  UnBind(){
    const gl = this.gl;
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }
  bindFramebuffer(){
    const gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
  }
}
