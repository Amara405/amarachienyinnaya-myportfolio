
function myFunction(){
    let element = document.body;
    element.classList.toggle("darkmode");
}

let i = 0;
let txt = "I'm a ui/ux designer, front-end developer and a web designer";
let speed = 100;

function typeWriter(){
   if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    
   }

}

let io = 0;
let text = " Hi! I'm Amarachi Enyinnaya";
let speedy = 100;
let repeat = Infinity;

function typeWrite(){
   if (io < text.length) {
        document.getElementById("demor").innerHTML += text.charAt(io);
        io++;
        setTimeout(typeWrite, speedy,);
    
   }

}
  
function openNav(){
    let x = document.getElementById("myLinks");
    let y = document.getElementById("myNav");

    if (x.style.display === "block")
    {
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
        setTimeout(openNav, 3000)
    }
  
}
