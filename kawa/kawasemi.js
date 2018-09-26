import KStage from "./kStage.js";
import KTriangle from "./kTriangle.js";
import KDrawer from "./kDrawer.js";

export default class KAWA{
  constructor(width , height){
    this.width = width;
    this.height = height;
    this.Stage = KStage;
    this.Triangle = KTriangle;
    this.Drawer = KDrawer;

    this.Init();
  }

  Init(){
    this.Drawer.Init();
  }
  Render(stage){
    this.Drawer.Render(stage);
  }
}
