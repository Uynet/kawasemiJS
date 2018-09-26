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
      const program = this.gl.createProgram(); 

      this.BufferInit(this.gl);
      this.CreateShader(this.gl,fp).then(fs=>{
        this.gl.attachShader(program,fs);
        return this.CreateShader(this.gl,vp);
      }).then(vs=>{
        this.gl.attachShader(program,vs);
        this.gl.linkProgram(program);
        this.gl.useProgram(program);
        this.AttributeInit(program , this.gl);
        res();
      });
    })
  }
  static AttributeInit(program , gl){
    const attr = gl.getAttribLocation(program,"position");
    gl.enableVertexAttribArray(attr);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexPositionBuffer);
    gl.vertexAttribPointer(attr, 2, gl.FLOAT, false, 0, 0);
  }
  static BufferInit(gl){
    this.vertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER , this.vertexPositionBuffer);
    const posData = new Float32Array([
      1,0,
      0,1,
      1,1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER,posData,gl.STATIC_DRAW);
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

  static Render(Stage){
    const gl = this.gl;
    gl.clearColor(0,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    Stage.list.forEach(e=>{
      gl.bufferData(gl.ARRAY_BUFFER,e.posData,gl.STATIC_DRAW);
      gl.drawArrays(gl.TRIANGLES,0,3);
    })

    gl.flush();
  }
}
