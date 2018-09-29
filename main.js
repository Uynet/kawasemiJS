import KAWA from "./kawa/kawasemi.js";

let kawa,stage;
let r1,r2;
let timer;

export default class Main{
  static Init(){
    return new Promise(res=>{
      kawa = new KAWA(400,300);

      stage = new kawa.Stage();
      r1 = new kawa.Rectangle(-0.5,-0.5,0.5,0.5);
      r2 = new kawa.Rectangle(0.5,-0.5,0.3,0.3);
      stage.Add(r1);
      stage.Add(r2);

      //let shader = kawa.LoadShader("shader.frag");

      //let texture = kawa.LoadTexture("img.png");
      //let sprite = kawa.CreateSprite(texture);
      //stage.Add(sprite);

      res();
    })
  }
  static Run(){
    requestAnimationFrame(Main.Run);

    kawa.Render(stage);
  }
}

Main.Init().then(Main.Run);

