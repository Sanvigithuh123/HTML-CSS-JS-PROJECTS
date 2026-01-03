const decreaseBtn = document.getElementById("decreaseBtn"); // put all buttons ids as const
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count=0;

increaseBtn.onclick = function (){ // put all buttons id in function upon clicking on them
  count ++; // add 1 on each count
  countLabel.textContent=count; // display in place of countlbel which is in place of 0 everytime we click as we put the function in onclick
}

decreaseBtn.onclick = function (){ // put all buttons id in function upon clicking on them
  count --; // substract 1 on each count
  countLabel.textContent=count; // display in place of countlbel which is in place of 0 everytime we click as we put the function in onclick
}

resetBtn.onclick = function (){ // put all buttons id in function upon clicking on them
  count = 0; // to reset to 0
  countLabel.textContent=count; // display in place of countlbel which is in place of 0 everytime we click as we put the function in onclick
}
