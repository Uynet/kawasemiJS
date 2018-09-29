import kawa from "../kawasemi.js";
import Renderer from "../glCore/renderer.js";
import Primitive from "./Primitive.js";

export default class Trianlge extends Primitive{
  constructor(vertexData){
    super();
    this.primitiveType = "TRIANGLE";
    this.vertexData = vertexData;
    this.VBOInit();
    this.AttributeInit();
  }
}
