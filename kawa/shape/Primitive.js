import kawa from "../kawasemi.js";
import Renderer from "../glCore/renderer.js";

export default class Primitive{
  constructor(){
  }
  Render(){
    const gl = Renderer.getGL();
    this.AttributeInit()
    gl.bindBuffer(gl.ARRAY_BUFFER,this.VBO);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertexData),gl.STATIC_DRAW);
    gl.drawArrays(gl.TRIANGLES,0,3);
    gl.flush();
    gl.bindBuffer(gl.ARRAY_BUFFER,null);
  }
  VBOInit(){
    const gl = Renderer.getGL();
    this.VBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,this.VBO);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertexData),gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER,null);
  }
  AttributeInit(){
    const gl = Renderer.getGL();
    const program = Renderer.program;
    gl.bindBuffer(gl.ARRAY_BUFFER,this.VBO);
    const attr = gl.getAttribLocation(program,"position");
    gl.enableVertexAttribArray(attr);
    gl.vertexAttribPointer(attr, 2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER,null);
  }
}
