import KStage from "./kStage.js";
import KTriangle from "./kTriangle.js";
import KDrawer from "./kDrawer.js";
import KRectangle from "./kRectangle.js";

export default class KAWA{
  constructor(width , height){
    this.width = width;
    this.height = height;
    this.Stage = KStage;
    this.Drawer = KDrawer;
    this.Triangle = KTriangle;
    this.Rectangle = KRectangle;

    this.Init();
  }
  Init(){
    this.Drawer.Init();
  }
  getGL(){
    return this.Drawer.getGL(); 
  }
  Render(stage){
    this.Drawer.Render(stage);
  }
}
