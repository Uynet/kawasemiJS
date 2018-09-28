import kawa from "./kawasemi.js";
import KDrawer from "./kDrawer.js";
import KPrimitive from "./kPrimitive.js";

export default class KRectanlge extends KPrimitive{
  constructor(x,y,w,h){
    super();
    this.primitiveType = "RECTANGLE";
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.posData = [
      x , y ,
      x+w , y ,
      x+Math.random() , y+h ,
    ]
    this.VBOInit();
    this.AttributeInit();
  }
}
