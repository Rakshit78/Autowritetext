const text = 'hello my name is Rakshit';
let index=0;
function textwrite(){
    document.body.innerHTML= text.slice(0, index);
    index++;
    if(index > text.length-1){
     index = 0;
    }

}
setInterval(textwrite, 100);