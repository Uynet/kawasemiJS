import Renderer from "./renderer.js";

export default class VBO{
  constructor(){
    const gl = Renderer.getGL();
    this.buffer = gl.createBuffer();
  }
  bufferData(vertexData){
    const gl = Renderer.getGL();
    gl.bindBuffer(gl.ARRAY_BUFFER,this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertexData),gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER,null);
  }
}
