import Drawer from "./drawer.js";

export default class Main{
  static Init(){
    Drawer.Init();
    this.Run();
  }
  static Run(){
    requestAnimationFrame(Main.Run);
  }


}

Main.Init();

