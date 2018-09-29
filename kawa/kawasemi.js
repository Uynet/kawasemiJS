import Stage from "./Stage.js";
import Triangle from "./shape/Triangle.js";
import Renderer from "./glCore/renderer.js";
import Rectangle from "./shape/Rectangle.js";

export default class KAWA{
  static Init(width , height){
    return new Promise(res=>{
      this.width = width;
      this.height = height;
      this.Stage = Stage;
      this.Renderer = Renderer;
      this.Triangle = Triangle;
      this.Rectangle = Rectangle;

      this.Renderer.Init().then(res);
    })
  }
  static Render(stage){
    this.Renderer.Render(stage);
  }
}
