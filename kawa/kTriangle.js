import kawa from "./kawasemi.js";
import KDrawer from "./kDrawer.js";

export default class KTrianlge{
  constructor(posData){
    this.primitiveType = "TRIANGLE";
    this.posData = posData;
    this.VBOInit();
    this.AttributeInit();
  }
  VBOInit(){
    const gl = KDrawer.getGL();
    this.VBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,this.VBO);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.posData),gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER,null);
  }
  AttributeInit(){
    const gl = KDrawer.getGL();
    const program = KDrawer.program;
    gl.bindBuffer(gl.ARRAY_BUFFER,this.VBO);
    const attr = gl.getAttribLocation(program,"position");
    gl.enableVertexAttribArray(attr);
    gl.vertexAttribPointer(attr, 2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER,null);
  }
}
