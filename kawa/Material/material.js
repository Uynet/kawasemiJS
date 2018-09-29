import GLProgram from "../glCore/glProgram.js";

export default class Material{
    constructor(){
      const fp = "kawa/Material/flat.frag";
      const vp = "kawa/Material/flat.vert";
      this.program = new GLProgram(fp,vp,res);
    }
}
