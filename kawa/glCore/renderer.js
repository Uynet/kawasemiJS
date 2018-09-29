import GLProgram from "./glProgram.js";

export default class Renderer{
  static Init(){
    return new Promise(res=>{
      /*-prototype-*/
      this.gl;
      /*-----------*/

      const canvas = document.getElementById("cvs");
      canvas.width = 400;
      canvas.height = 400;
      this.gl = canvas.getContext("webgl");

      const fp = "kawa/Material/flat.frag";
      const vp = "kawa/Material/flat.vert";
      this.program = new GLProgram(fp,vp,res);

    })
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
  static Render(Stage){
    const gl = this.gl;
    gl.clearColor(0,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    Stage.list.forEach(e=>{
      e.Render();
    })

    gl.flush();
  }

}
