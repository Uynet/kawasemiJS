attribute vec2 position;
attribute vec2 textureCoord;
varying vec2 vTextureCoord;

void main(){
  vTextureCoord = textureCoord;
  gl_Position = vec4(position,1,1);
}
