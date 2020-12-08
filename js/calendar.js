let c_container = document.querySelector(".calendar");
let days = 25;
let closebtn = document.querySelector(".close");
let cta = document.querySelectorAll(".cta");
const masc = document.querySelector(".navigation__mascot");
const navigation = document.querySelector(".navigation");
let navize = document.querySelector(".navigation__content").clientWidth;
masc.addEventListener("click", function(){
    if(navigation.style.left == "" || navigation.style.left == null || navigation.style.left == "-" + navize + "px"){
        navigation.style.left = "0";
        document.body.style.overflow = "hidden";
    }else{
        navigation.style.left = "-"+navize+"px"; 
        document.body.style.overflow = "auto";
    }
});



for(let i = 1; i<days; i++){
    let door = document.createElement("article");
    let door_face = document.createElement("section");
    let door_front = document.createElement("section");
    let door_back = document.createElement("section");

    let img = new Image();
    let ig = new Array(
        "../images/imgelementer/ball.png",
        "../images/imgelementer/bell.png",
        "../images/imgelementer/blouse.png",
        "../images/imgelementer/candle.png",
        "../images/imgelementer/candy.png",
        "../images/imgelementer/cupcakes.png",
        "../images/imgelementer/decoration.png",
        "../images/imgelementer/gingerhouse.png",
        "../images/imgelementer/hat.png",
        "../images/imgelementer/helper1.png",
        "../images/imgelementer/helper2.png",
        "../images/imgelementer/helper3.png",
        "../images/imgelementer/light.png",
        "../images/imgelementer/olaf.png",
        "../images/imgelementer/presents.png",
        "../images/imgelementer/reindeer1.png",
        "../images/imgelementer/reindeer2.png",
        "../images/imgelementer/sack.png",
        "../images/imgelementer/snowball.png",
        "../images/imgelementer/snowman.png",
        "../images/imgelementer/sok.png",
        "../images/imgelementer/star.png",
        "../images/imgelementer/tree.png",
        "../images/imgelementer/trousers.png"
    );
    
    img.setAttribute("class", "day-img")

    img.src = ig[i-1];
    door_back.appendChild(img);

    door.setAttribute("class", "door");
    door_face.setAttribute("class", "door__face");
    door_back.setAttribute("class", "door__back");
    door_front.setAttribute("class", "door__front");

    door_front.innerHTML = i;
    door_face.appendChild(door_front);
    door_face.appendChild(door_back);
    door.appendChild(door_face.cloneNode(true));
    c_container.appendChild(door);
}
let doors = document.querySelectorAll(".door__face");
let front = document.querySelectorAll(".door__front");

for(var i = 0; i<doors.length; i++){
    doors[i].addEventListener("mouseover", function(){
        this.style.transform = "rotateY(180deg)";
    });

    doors[i].addEventListener("mouseout", function(){
        this.style.transform = "";
    });
}

closebtn.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".overlay").style.opacity = "0";
    document.querySelector(".overlay").style.visibility = "hidden";
});

for(var i = 0; i<cta.length; i++){
    cta[i].addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(".overlay").style.opacity = "1";
        document.querySelector(".overlay").style.visibility = "visible";
    });
}

//Functionen har jeg fra: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let d = Array.prototype.slice.call(document.querySelectorAll(".door"));

shuffle(d);

for(var j=0; j<d.length; j++){
    console.log(d[j]);
    c_container.appendChild(d[j]);
}