import GLProgram from "../glCore/glProgram.js";
import Material from "./material.js";

export default class TextureMaterial{
  static Init(){
    return new Promise(resolve=>{
      this.fp = "kawa/Material/texture.frag";
      this.vp = "kawa/Material/texture.vert";
      this.GLP = new GLProgram(this.fp,this.vp,resolve);
      this.program = this.GLP.program;
    })
  }
}
