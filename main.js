import KAWA from "./kawa/kawasemi.js";

let kawa,stage;

export default class Main{
  static Init(){
    return new Promise(res=>{
      kawa = new KAWA(400,300);
      stage = new kawa.Stage();
      const posData = new Float32Array([
        0.0, 0.5,
        0.5, 0.0,
        -0.5, 0.0
      ]);
      const t1 = new kawa.Triangle(posData);
      stage.Add(t1);
      res();
    })
  }
  static Run(){
    requestAnimationFrame(Main.Run);
    kawa.Render(stage);
  }
}

Main.Init().then(Main.Run);

