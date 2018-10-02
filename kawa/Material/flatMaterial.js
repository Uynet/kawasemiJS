import GLProgram from "../glCore/glProgram.js";
import Material from "./material.js";

export default class FlatMaterial{
  static Init(){
    return new Promise(resolve=>{
      this.fp = "kawa/Material/flat.frag";
      this.vp = "kawa/Material/flat.vert";
      this.program = new GLProgram(this.fp,this.vp,resolve).program;
    })
  }
}
