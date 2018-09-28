import kawa from "./kawasemi.js";
import KDrawer from "./kDrawer.js";
import KPrimitive from "./kPrimitive.js";

export default class KTrianlge extends KPrimitive{
  constructor(posData){
    super();
    this.primitiveType = "TRIANGLE";
    this.posData = posData;
    this.VBOInit();
    this.AttributeInit();
  }
}
