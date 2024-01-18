const arrayLength = document.getElementById("length");
const speed = document.getElementById("speed");
const idOfSortAlg = document.getElementById("sortType");
const bars = document.querySelectorAll(".bar");
var arr;
addEventListener("DOMContentLoaded", () => {
  generate();
});
arrayLength.oninput = function () {
  console.log(this.value);
  setInterval(generate(), 10);
};

function randomNum() {
  arr = [];
  for (let i = 0; i < arrayLength.value; i++) {
    let randomN = Math.random();
    arr.push(randomN);
    console.log.apply(arr);
  }
}
function generate() {
  if (arrayLength.value <= 0) {
    alert("Please enter a valid number of bars!");
    return;
  }

  console.log(arrayLength.value);
  randomNum();
  show();
}
function show(indices) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  for (let i = 0; i < arrayLength.value; i++) {
    var bar = document.createElement("div");
    var barWidth = 100 / arr.length;
    bar.classList.add("bar");
    bar.style.width = barWidth + "%";
    bar.style.backgroundColor = "#F6B17A";
    bar.style.height = arr[i] * 75 + "%";
    bar.classList.add("fadeIn");
    container.appendChild(bar);
    if (indices && indices.includes(i)) {
      bar.style.backgroundColor = "lightgreen";
    }
  }
}

function sort() {
  if (idOfSortAlg.value === "Algorithm") {
    alert("Please select a sorting algorithm!");
    return;
  }
  if (speed.value === "Speed") {
    alert("Please set a valid speed for the algorithm!");
    return;
  }
  console.log(idOfSortAlg.value);
  console.log(speed.value);
  switch (idOfSortAlg.value) {
    case "bubble":
      bubbleSort();
      break;
    case "selection":
      selectionSort();
      break;
    case "insertion":
      insertionSort();
      break;
  }
}
async function bubbleSort() {
  const bars = document.querySelectorAll(".bar");

  do {
    var swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;

        bars[i].style.height = arr[i] * 75 + "%";
        bars[i + 1].style.height = arr[i + 1] * 75 + "%";
        bars[i].style.backgroundColor = "red";
        bars[i + 1].style.backgroundColor = "red";
        // bars[i].classList.add("fadeIn");
        // bars[i+1].classList.add("fadeIn");
        await new Promise((resolve) => setTimeout(resolve, speed.value));
      }
      bars[i].style.backgroundColor = "#F6B17A";
      bars[i + 1].style.backgroundColor = "#F6B17A";
    }
    await new Promise((resolve) => setTimeout(resolve, speed.value));
  } while (swapped);
  finalAnimation();
}

async function selectionSort() {
  const bars = document.querySelectorAll(".bar");
  let i, j, min;

  for (i = 0; i < arr.length - 1; i++) {
    min = i;
    let count = 0;
    await new Promise((resolve) => setTimeout(resolve, speed.value));
    bars[min].style.backgroundColor = "green";
    console.log(i);
    for (j = i; j < arr.length; j++) {
      if (j !== i) {
        bars[j].style.backgroundColor = "red";
      }
      await new Promise((resolve) => setTimeout(resolve, speed.value));
      if (arr[j] < arr[min]) {
        if (count > 0) {
          bars[min].style.backgroundColor = "#F6B17A";
        }
        // console.log("inside loop");
        min = j;
        bars[min].style.backgroundColor = "green";
        count++;
      }
      if (min !== j) {
        bars[j].style.backgroundColor = "#F6B17A";
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
      bars[i].style.height = arr[i] * 75 + "%";
      bars[min].style.height = arr[min] * 75 + "%";
      bars[i].style.backgroundColor = "green";
      bars[min].style.backgroundColor = "green";
    }
    bars[i].style.backgroundColor = "#F6B17A";
    bars[min].style.backgroundColor = "#F6B17A";
  }
  finalAnimation();
}

async function insertionSort() {
  const bars = document.querySelectorAll(".bar");
  let i, j, key;
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let prev = i - 1;

    bars[i].style.backgroundColor = "red";
    await new Promise((release) => setTimeout(release, speed.value));

    while (prev >= 0 && arr[prev] > current) {
      bars[prev].style.backgroundColor = "red";
      bars[prev + 1].style.backgroundColor = "red";
      await new Promise((release) => setTimeout(release, speed.value));

      arr[prev + 1] = arr[prev];
      bars[prev + 1].style.height = arr[prev] * 75 + "%";
      bars[prev].style.height = arr[prev] * 75 + "%";
      bars[prev].style.backgroundColor = "#F6B17A";
      bars[prev + 1].style.backgroundColor = "#F6B17A";

      prev--;
    }

    arr[prev + 1] = current;
    bars[prev + 1].style.height = current * 75 + "%";
    for (let j = i + 1; j < arr.length; j++) {
      bars[j].style.backgroundColor = "#F6B17A";
    }
  }
  finalAnimation();
}
async function finalAnimation() {
  const bars = document.querySelectorAll(".bar");
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = "#b6fc03";
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = "#F6B17A";
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
}
