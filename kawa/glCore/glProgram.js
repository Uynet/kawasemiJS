import Renderer from "./renderer.js";

export default class GLProgram{
  //fp,vp ... path to shader file
  constructor(fp,vp,res){
    const gl = Renderer.gl;
    this.program = gl.createProgram(); 

    this.CreateShader(gl,fp).then(fs=>{
      gl.attachShader(this.program,fs);
      return this.CreateShader(gl,vp);
    }).then(vs=>{
      gl.attachShader(this.program,vs);
      gl.linkProgram(this.program);
      gl.useProgram(this.program);
      res();
    });
  }
  //Read shader program and create shader object
  CreateShader(gl,path){
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
}
