let c_container = document.querySelector(".calendar");
let days = 25;

for(let i = 1; i<days; i++){
    let door = document.createElement("article");
    let door_front = document.createElement("section");
    let door_back = document.createElement("section");

    door.setAttribute("class", "door");
    door_back.setAttribute("class", "door-back");
    door_front.setAttribute("class", "door-front");
    
    door_front.innerHTML = i;

    door.appendChild(door_front.cloneNode(true));
    door.appendChild(door_back.cloneNode(true));

    c_container.appendChild(door);
}

let doors = document.querySelectorAll(".door");
let front = document.querySelectorAll("door-front");

for(var i = 0; i<doors.length; i++){
    doors[i].addEventListener("mouseover", function(){
        console.log(front);
        front[i].style.transfrom = "rotateZ(10deg)";
    });
}