import KAWA from "./kawa/kawasemi.js";

let kawa,stage;
let r1,r2;

export default class Main{
  static Init(){
    return new Promise(resolve=>{

      stage = new KAWA.Stage();
      r1 = new KAWA.Rectangle(-0.2,-0.5,0.5,0.5);
      r2 = new KAWA.Rectangle(0.5,-0.5,0.3,0.3);
      stage.Add(r1);
      stage.Add(r2);

      let texture = new KAWA.Texture("resource/img.png");
      let sprite = new KAWA.Sprite(texture,0,0,0.4,0.4);
      stage.Add(sprite);

      resolve();
    })
  }
  static Run(){
    requestAnimationFrame(Main.Run);

    KAWA.Render(stage);
  }
}

KAWA.Init(400,400).then(()=>{
  Main.Init().then(Main.Run);
});

