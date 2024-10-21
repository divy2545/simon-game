let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let max = 0;

let colors = ["red", "yellow", "blue", "purple"];

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
  }
  levelCount();
});



function check(){
        for (let i = 0; i < gameSeq.length; i++) {
          if (gameSeq[i] === userSeq[i]) {
            if (gameSeq[gameSeq.length - 1] === userSeq[userSeq.length - 1]) {
              h3.innerText = ` ${level} completed.. moving to next level `;
            }
            continue;
          } else {
            h3.innerHTML = `Game Over!! Your score is- <br> <b style="font-size: 70px; text-align: center"> ${level} </b> <br> press any key to start again <br>`;
            document.querySelector("body").style.backgroundColor = "black";
            document.querySelector("body").style.color = "grey";
            setTimeout(function () {
              document.querySelector("body").style.backgroundColor = "grey";
              document.querySelector("body").style.color = "black";
            }, 200);
  
            max = Math.max(max, level);
            h3.append(`Max score is ${max}`);
  
            reset();
            break;
          }
        }
        userSeq = [];
    }


function flash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelCount() {
  level++;
  h3.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = colors[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);

  flash(randbtn);
  gameSeq.push(`${randColor}`);
  console.log(gameSeq);
}

let userInp = document.querySelectorAll(".btn");
for (click of userInp) {
  click.addEventListener("click", function (event) {
    userflash(this);
    userSeq.push(event.target.textContent);
    if(userSeq.length==gameSeq.length){
        check();
    }
   
  });
}


function reset() {
  gameSeq = [];
  userSeq = [];
  level = 0;
}
