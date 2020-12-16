let c_container = document.querySelector(".calendar");
let days = 25;
let closebtn = document.querySelector(".close");
let cta = document.querySelectorAll(".cta");
const masc = document.querySelector(".navigation__handle");
const navigation = document.querySelector(".navigation");
let navize = document.querySelector(".navigation__content").clientWidth + 7;
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
    let door_front = document.createElement("p");
    let door_back = document.createElement("section");

    let img = new Image();
    let ig = new Array(
        [
            "../images/imgelementer/ball.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/bell.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/blouse.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/candle.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/candy.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/cupcakes.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/decoration.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/gingerhouse.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/hat.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/helper1.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/helper2.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/helper3.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/light.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/olaf.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/presents.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/reindeer1.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/reindeer2.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/sack.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/snowball.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/snowman.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/sok.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/star.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/tree.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ],
        [
            "../images/imgelementer/trousers.png",
            "I dag har nisserne gemt det her- bliver det mon nogensinde jul? Kom og leg med og se om du kan finde det nisserne har gemt for julemanden."
        ]
    );
    
    img.setAttribute("class", "day-img")

    img.src = ig[i-1][0];
    door_back.appendChild(img);

    door.setAttribute("class", "door");
    door_face.setAttribute("class", "door__face");
    door_back.setAttribute("class", "door__back");
    door_front.setAttribute("class", "door__front");
    
    /* ig[i-1] */

    door_back.setAttribute("data-text", ig[i-1][1]);

    door_front.innerHTML = i;
    door_face.appendChild(door_front);
    door_face.appendChild(door_back);
    door.appendChild(door_face.cloneNode(true));
    c_container.appendChild(door);
}
let doors = document.querySelectorAll(".door__face");
let front = document.querySelectorAll(".door__front");

for(var i = 0; i<doors.length; i++){
    var door = document.querySelectorAll(".door");
    var today = new Date();
    var dd = String(today.getDate());
    var mm = String(today.getMonth() + 1);
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    var t = doors[i].querySelector(".door__front").innerText;
    if(t == parseInt(dd)){
        doors[i].addEventListener("click", function(e){
            e.preventDefault();
            this.style.transform = "rotateY(180deg)";
            document.querySelector(".overlay__inner-content").classList.add("overlay__inner-content--grid");
            document.querySelector(".overlay__inner-content").innerHTML = "<img src='" + this.querySelector(".door__back img").src+ "'>";
            document.querySelector(".overlay__inner-content").innerHTML += "<p>"+this.querySelector(".door__back").getAttribute("data-text") +"</p>";
            document.querySelector(".overlay").style.opacity = "1";
            document.querySelector(".overlay").style.visibility = "visible";

        });
    
        /* doors[i].addEventListener("click", function(){
            if(t < parseInt(dd)){
                this.style.transform = "rotateY(180deg)";
            }else{
                this.style.transform = "";
            }
            
        }); */

        door[i].classList.add("door--modifier");

        console.log(door);
    }else{
        door[i].classList.remove("door--modifier"); 
    }

    if(t < parseInt(dd)){
        doors[i].style.transform = "rotateY(180deg)";
    }
}

closebtn.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".overlay").style.opacity = "0";
    document.querySelector(".overlay").style.visibility = "hidden";
});

for(var i = 0; i<cta.length; i++){
    cta[i].addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(".overlay__inner-content").classList.remove("overlay__inner-content--grid");
        document.querySelector(".overlay__inner-content").innerHTML = "";
        document.querySelector(".overlay").style.opacity = "1";
        document.querySelector(".overlay").style.visibility = "visible";
    });
}

//Functionen har jeg fra: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let d = Array.prototype.slice.call(document.querySelectorAll(".door"));

shuffle(d);

for(var j=0; j<d.length; j++){
    c_container.appendChild(d[j]);
}
