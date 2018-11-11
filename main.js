import KAWA from "./kawa/kawasemi.js";

let kawa,stage;
let timer;
let r1,r2;
let sprite

export default class Main{
  static Init(){
    return new Promise(resolve=>{
timer = 0;
      stage = new KAWA.Stage();
      r1 = new KAWA.Rectangle(-0.2,-0.5,0.5,0.5);
      r2 = new KAWA.Rectangle(0.5,-0.5,0.3,0.3);
      stage.Add(r1);
      stage.Add(r2);

      let texture = new KAWA.Texture("resource/img.png");
      let fbo = new KAWA.FrameBufferObject();
      fbo.createBuffer(16,16);
      sprite = new KAWA.Sprite(texture,0,0,0.4,0.4);
      stage.Add(sprite);

      resolve();
    })
  }
  static Run(){
    requestAnimationFrame(Main.Run);

    if(timer == 40) stage.Remove(sprite);
    KAWA.Render(stage);
    timer++;
  }
}

KAWA.Init(400,400).then(()=>{
  Main.Init().then(Main.Run);
});

