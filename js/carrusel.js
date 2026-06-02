
var imagenes =[
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg",
]
var i = 0;

document.getElementById("siguiente").addEventListener("click",()=> {
    if(i < 4){i++;}
    document.getElementById("img").setAttribute("src",imagenes[i])
});

document.getElementById("anterior").addEventListener("click",()=> {
    if(i > 0){i--;}
    document.getElementById("img").setAttribute("src",imagenes[i]);
});