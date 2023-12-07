let count = 1;
document.getElementById("slide6").checked = true;

setInterval(function(){
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("slide6"+ count).checked = true;
}
