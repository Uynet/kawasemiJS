import kawa from "../kawasemi.js";
import Renderer from "../glCore/renderer.js";
import Primitive from "./Primitive.js";

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
      x+w , y+h ,
      x , y ,
      x+w , y+h ,
      x , y+h ,
    ]
    this.VBOInit();
    this.AttributeInit();
  }
  Render(){
    const gl = Renderer.getGL();
    this.AttributeInit()
    gl.bindBuffer(gl.ARRAY_BUFFER,this.VBO);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertexData),gl.STATIC_DRAW);
    gl.drawArrays(gl.TRIANGLES,0,3);
    gl.drawArrays(gl.TRIANGLES,3,3);
    gl.flush();
    gl.bindBuffer(gl.ARRAY_BUFFER,null);
  }
}
