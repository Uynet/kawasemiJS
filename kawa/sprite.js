import Renderer from "./glCore/renderer.js";
import TextureMaterial from "./Material/textureMaterial.js";
import VBO from "./glCore/VBO.js";

export default class Sprite{
  constructor(texture,x,y,w,h){
    this.texture = texture;
    this.x = x;
    this.y = y;
    this.vertexData = [
      x , y ,
      x+w , y ,
      x , y+h ,
      x+w , y+h ,
    ]
    this.texcoord = [
        0.0, 1.0,
        1.0, 1.0,
        0.0, 0.0,
        1.0, 0.0
    ];
    this.material = TextureMaterial;
    this.VBOInit(this.vertexData);
    this.indexData = [
      0,1,2,
      1,2,3
    ]
    this.IBOInit(this.indexData);
  }
  SetUniform(){
      const gl = Renderer.gl;
      gl.useProgram(this.material.program);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, this.texture.textureObject);
      let texL = gl.getUniformLocation(this.material.program, 'texture');
      gl.uniform1i(texL, 0);
  }
  Render(){
    if(this.texture.onReady){
      const gl = Renderer.gl;
      this.SetAttribute()
      this.SetUniform();
      //gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertexData),gl.STATIC_DRAW);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.IBO);
      gl.useProgram(this.material.program);
      gl.drawElements(gl.TRIANGLES,this.indexData.length,gl.UNSIGNED_SHORT,0);

      gl.flush();
      gl.bindBuffer(gl.ARRAY_BUFFER,null);
    }
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
    this.posVBO = new VBO(this.vertexData);
    this.texVBO = new VBO(this.texcoord);
  }
  SetAttribute(){
    const gl = Renderer.gl;
    const program = this.material.program;

    gl.bindBuffer(gl.ARRAY_BUFFER,this.posVBO.buffer);
    const attr = gl.getAttribLocation(program,"position");
    gl.enableVertexAttribArray(attr);
    gl.vertexAttribPointer(attr, 2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER,null);

    gl.bindBuffer(gl.ARRAY_BUFFER,this.texVBO.buffer);
    const attr2 = gl.getAttribLocation(program,"textureCoord");
    gl.enableVertexAttribArray(attr2);
    gl.vertexAttribPointer(attr2, 2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER,null);
  }
}
