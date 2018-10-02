import Stage from "./Stage.js";
import Triangle from "./shape/Triangle.js";
import Renderer from "./glCore/renderer.js";
import Rectangle from "./shape/Rectangle.js";
import FlatMaterial from "./Material/flatMaterial.js";

export default class KAWA{
  static Init(width , height){
    this.width = width;
    this.height = height;
    this.Stage = Stage;
    this.Renderer = Renderer;
    this.Triangle = Triangle;
    this.Rectangle = Rectangle;


    this.Renderer.Init(width,height);
    //なんかやばい
    return Promise.all([
      //Promiseを並列できるよ
      FlatMaterial.Init(),
    ]);
  }
  static Render(stage){
    this.Renderer.Render(stage);
  }
}
