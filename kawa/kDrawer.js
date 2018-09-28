import KTrianlge from "./kTriangle.js";

export default class KDrawer{
  static Init(){
    return new Promise(res=>{
      /*-prototype-*/
      this.gl;
      /*-----------*/

      const canvas = document.getElementById("cvs");
      canvas.width = 400;
      canvas.height = 400;
      this.gl = canvas.getContext("webgl");

      const fp = "kawa/main.frag";
      const vp = "kawa/main.vert";
      this.program = this.gl.createProgram(); 

      this.BufferInit(this.gl);
      this.CreateShader(this.gl,fp).then(fs=>{
        this.gl.attachShader(this.program,fs);
        return this.CreateShader(this.gl,vp);
      }).then(vs=>{
        this.gl.attachShader(this.program,vs);
        this.gl.linkProgram(this.program);
        this.gl.useProgram(this.program);
        res();
      });
    })
  }
  static BufferInit(gl){
    this.vertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER , this.vertexPositionBuffer);
  }
  static CreateShader(gl,path){
    return new Promise((res,rej)=>{
      const type = (function(){
        switch(path.split(".")[1]){
          case "frag" : return gl.FRAGMENT_SHADER;
          case "vert" : return gl.VERTEX_SHADER;
          default : return "error:"+path.split[1];
        }
      }());
      const xhr = new XMLHttpRequest();
      xhr.open("GET",path,true);
      xhr.addEventListener("load", event => {
        const code = event.target.response;
        const shader = gl.createShader(type);
        gl.shaderSource(shader,code);
        gl.compileShader(shader);
        if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          res(shader);
        } else {
          console.error(gl.getShaderInfoLog(shader));
          rej();
        }
      });

      xhr.send(null);
    });
  }
  static getGL(){
    return this.gl;
  }
  static RenderTriangle(t){
    const gl = this.gl;
    gl.bindBuffer(gl.ARRAY_BUFFER,t.VBO);
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(t.posData),gl.STATIC_DRAW);
    gl.drawArrays(gl.TRIANGLES,0,3);
    gl.bindBuffer(gl.ARRAY_BUFFER,null);
  }
  static RenderRectangle(r){
  }
  static Render(Stage){
    const gl = this.gl;
    gl.clearColor(0,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    Stage.list.forEach(e=>{
      switch(e.primitiveType){
        case "RECTANGLE" : this.RnederRectangle(e) ; break; 
        case "TRIANGLE" : this.RenderTriangle(e); break; 
      }
    })

    gl.flush();
  }

}
