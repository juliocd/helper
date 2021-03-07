let i;
onmessage = function (event) {
  i=event.data
}
setInterval(generarSecuencia, 300);
function generarSecuencia(){
  if(i){
    i *= 2;
    if(i > 1000){
      close()
    }else{
      postMessage(i);
    }
  }
}
