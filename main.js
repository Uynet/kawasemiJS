import KAWA from "./kawa/kawasemi.js";

let kawa,stage;
let t1,r1;
let timer;

export default class Main{
  static Init(){
    return new Promise(res=>{
      timer =0;
      kawa = new KAWA(400,300);
      stage = new kawa.Stage();
      const posData = [
        0.0, 0.5,
        0.5, 0.0,
        -0.5, 0.0
      ];
      t1 = new kawa.Triangle(posData);
      r1 = new kawa.Rectangle(-0.5,-0.5,0.5,0.5);
      stage.Add(t1);
      res();
    })
  }
  static Run(){
    t1.posData[0]+=Math.cos(timer/10)/10;
    requestAnimationFrame(Main.Run);
    kawa.Render(stage);
    timer++;
  }
}

Main.Init().then(Main.Run);

