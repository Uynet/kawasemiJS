precision mediump float;
varying vec2 vTextureCoord; 
uniform sampler2D texture;

void main(){
  //vec2 uv = gl_FragCoord.xy/400.0;
  vec2 vUV = vTextureCoord;
  //gl_FragColor = vec4(vTextureCoord,0,1);
  gl_FragColor = texture2D(texture,vUV);
  //gl_FragColor = vec4(vUV,1,1);
}
