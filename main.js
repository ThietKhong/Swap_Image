

function swapImages(){
  if( document.getElementById("img-1").src.indexOf(1) > -1 ){
    document.getElementById("img-1").src = "https://cdn.britannica.com/49/186549-050-D861832E/offering-fertility-goddess-rice-Dewi-Sri-Bali.jpg";
  } else {
    document.getElementById("img-1").src = "https://upload.wikimedia.org/wikipedia/commons/2/24/Rosa_sulfurea_001.JPG";
  }
};