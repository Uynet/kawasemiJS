import KAWA from "./kawa/kawasemi.js";

let kawa,stage;
let timer;
let r1,r2;
let sprite
let fbo;

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
      fbo = new KAWA.FrameBufferObject(256,256);
      fbo.createBuffer();
      sprite = new KAWA.Sprite(texture,0,0,0.4,0.4);
      //stage.Add(sprite);

      resolve();
    })
  }
  //test for only 1 drawing
  static Run(){
    //requestAnimationFrame(Main.Run);
    fbo.Bind();
    fbo.gl.viewport(0,0,fbo.width, fbo.height);
    KAWA.Render(stage);
    fbo.UnBind();
    //sprite.setTextureSlot(10);
    sprite.Render();
    timer++;
  }
}

KAWA.Init(400,400).then(()=>{
  Main.Init()
  setTimeout(Main.Run,400);
});

