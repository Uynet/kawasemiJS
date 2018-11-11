import GLProgram from "./glProgram.js";
import FlatMaterial from "../Material/flatMaterial.js";

export default class Renderer{
  static Init(width,height){
    /*-prototype-*/
    this.gl;
    /*-----------*/

    const canvas = document.getElementById("cvs");
    canvas.width = width;
    canvas.height = height; 
    this.gl = canvas.getContext("webgl");
    if(this.gl==null){
      console.error("webGL対応してないよ")
    }
  }
  static GetGL(){
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
