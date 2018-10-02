import Renderer from "./glCore/renderer.js";
import TextureMaterial from "./Material/textureMaterial.js";

export default class Sprite{
  constructor(texture,x,y){
    this.texture = texture;
    this.x = x;
    this.y = y;
      let w = 0.1 ; let h = 0.1;
    this.vertexData = [
      x , y ,
      x+w , y ,
      x , y+h ,
      x+w , y+h ,
    ]
    this.material = TextureMaterial;
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
    //gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertexData),gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.IBO);
    gl.useProgram(this.material.program);
    gl.drawElements(gl.TRIANGLES,this.indexData.length,gl.UNSIGNED_SHORT,0);

    gl.flush();
    gl.bindBuffer(gl.ARRAY_BUFFER,null);
  }
  IBOInit(data){
    const gl = Renderer.gl;
    this.IBO = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.IBO);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Int16Array(data),gl.STATIC_DRAW)
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,null);
  }
  VBOInit(data){
    const gl = Renderer.gl;
    this.VBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,this.VBO);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(data),gl.STATIC_DRAW);
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
