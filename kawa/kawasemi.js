import Stage from "./Stage.js";
import Triangle from "./shape/Triangle.js";
import Renderer from "./glCore/renderer.js";
import Rectangle from "./shape/Rectangle.js";

export default class KAWA{
  constructor(width , height){
    this.width = width;
    this.height = height;
    this.Stage = Stage;
    this.Drawer = Renderer;
    this.Triangle = Triangle;
    this.Rectangle = Rectangle;

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
