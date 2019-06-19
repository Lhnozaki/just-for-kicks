// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.

let ship = document.querySelector("#details");

ship.addEventListener("click", function() {
  alert("Not Available in Hawaii.");
});

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.

let nameOne = document.querySelector("#name1");
let descOne = document.querySelector("#descrip1");
nameOne.addEventListener("mouseover", function() {
  if(descOne.style.display === "none") {
    descOne.style.display = "block";
  } else {
    descOne.style.display = "none";
  }
})

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'

//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 

let nameTwo = document.querySelector("#name2");
let descTwo = document.createElement("div");
descTwo.id = "descrip2";
descTwo.textContent = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.";
nameTwo.appendChild(descTwo);

nameTwo.addEventListener("click", function () {
  if(descTwo.style.display === "block") {
    descTwo.style.display = "none";
  } else {
    descTwo.style.display = "block";
  }
})

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.

let thumbsUp = document.querySelectorAll("#thumbs");

thumbsUp.forEach(function (e) {
  let zero = document.createElement("span");
  e.appendChild(zero);
  zero.innerHTML = 0;
  e.addEventListener("click", function() {
    zero.innerHTML++;
  })
})

//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

document.querySelector("#increase").addEventListener("click", onClick);

function onClick() {
  let num = parseInt(document.querySelector("#price4").innerText);
  let yen = document.querySelector("#price4").firstChild;
  num++;
  yen.textContent = num;
}

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

document.querySelector("#decrease").addEventListener("click", function() {
  let num = parseInt(document.querySelector("#price5").innerText);
  let dollar = document.querySelector("#price5").firstChild;
  num--;
  dollar.textContent = num;
})

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 

document.querySelector("#name6").parentElement.firstChild.addEventListener("mouseover" , function(e) {
    e.target.src = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRbqe8_4MPwHC6yT0LtqI2WpwKR_cQrbppUEazdotvZsU9wJOvcJhtVDBNibiLC2QEUOhoNHC6kfLfb2xdBln73MiZh-99XodOa_7VryNT78ex8STRJQtcD0w&usqp=CAc";
});

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

let xii = document.querySelector("#name7").parentElement.firstChild.addEventListener("click", function() {
  this.style.width = "375px";
  this.style.height = "375px";
});

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.
