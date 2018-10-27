import Renderer from "./renderer.js";

export default class VBO{
  constructor(data){
    const gl = Renderer.gl;
    this.buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(data),gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER,null);
  }
  bufferData(vertexData){
    const gl = Renderer.gl;
    gl.bindBuffer(gl.ARRAY_BUFFER,this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertexData),gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER,null);
  }
}
