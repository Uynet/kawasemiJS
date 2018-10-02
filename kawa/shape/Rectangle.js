import kawa from "../kawasemi.js";
import Renderer from "../glCore/renderer.js";
import Primitive from "./Primitive.js";
import GLProgram from "../glCore/glProgram.js";
import FlatMaterial from "../Material/flatMaterial.js";
import TextureMaterial from "../Material/textureMaterial.js";

export default class Rectanlge extends Primitive{
  constructor(x,y,w,h){
    super();
    this.primitiveType = "RECTANGLE";
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vertexData = [
      x , y ,
      x+w , y ,
      x , y+h ,
      x+w , y+h ,
    ]
    this.material = FlatMaterial;
    this.VBOInit(this.vertexData);
    this.indexData = [
      0,1,2,
      1,2,3
    ]
    this.IBOInit(this.indexData);
  }
  Render(){
    const gl = Renderer.gl;
    this.AttributeInit()
    gl.bindBuffer(gl.ARRAY_BUFFER,this.VBO);
    gl.useProgram(this.material.program);
    //gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertexData),gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.IBO);
    gl.drawElements(gl.TRIANGLES,this.indexData.length,gl.UNSIGNED_SHORT,0);
    gl.flush();
    gl.bindBuffer(gl.ARRAY_BUFFER,null);
  }
  AttributeInit(){
    const gl = Renderer.gl;
    const program = this.material.program;
    gl.bindBuffer(gl.ARRAY_BUFFER,this.VBO);
    const attr = gl.getAttribLocation(program,"position");
    gl.enableVertexAttribArray(attr);
    gl.vertexAttribPointer(attr, 2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER,null);
  }
}
