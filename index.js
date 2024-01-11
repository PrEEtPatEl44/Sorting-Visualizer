const arrayLength = document.getElementById("length");
const speed = document.getElementById("speed");
const idOfSortAlg = document.getElementById("sortType");
var arr;

function randomNum() {
  arr = [];
  for (let i = 0; i < arrayLength.value; i++) {
    let randomN = Math.random();
    arr.push(randomN);
    console.log.apply(arr);
  }
}
function generate() {
  console.log(arrayLength.value);
  randomNum();
  show();
}
function show(indices) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  for (let i = 0; i < arrayLength.value; i++) {
    var bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.backgroundColor = "black";
    bar.style.height = arr[i] * 100 + "%";
    container.appendChild(bar);
    if (indices && indices.includes(i)) {
      bar.style.backgroundColor = "lightgreen";
    }
  }
}

function sort() {
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
        bars[i].style.height = arr[i] * 90 + "%";
        bars[i + 1].style.height = arr[i + 1] * 90 + "%";
        bars[i].style.backgroundColor = "red";
        bars[i + 1].style.backgroundColor = "red";
        await new Promise((resolve) => setTimeout(resolve, speed.value));
      }
      bars[i].style.backgroundColor = "black";
      bars[i + 1].style.backgroundColor = "black";
    }
    await new Promise((resolve) => setTimeout(resolve, speed.value));
  } while (swapped);
}

async function selectionSort() {
  const bars = document.querySelectorAll(".bar");
  // for(let i=0; i<arr.length; i++){
  //     var min =i;
  //     bars[min].style.backgroundColor= "lightgreen";
  //     for(let j=i ; j<arr.length-1; j++){
  //         if(arr[min]> arr[j]){
  //             min=j;
  //             // bars[min].style.backgroundColor= "lightgreen";
  //             // await new Promise((resolve) => setTimeout(resolve, 1000));
  //             // let temp = arr[j];
  //             // arr[j]=arr[min];
  //             // arr[min]=temp;
  //             // bars[j].style.height = arr[j] * 100 + "%";
  //             // bars[min].style.height = arr[min] * 100 + "%";
  //             // // bars[i].style.backgroundColor = "red";
  //             // await new Promise((resolve) => setTimeout(resolve, 1000));
  //         }
  //         bars[i].style.backgroundColor = "black";
  //         // bars[min].style.backgroundColor= "black";
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
          bars[min].style.backgroundColor = "black";
        }
        // console.log("inside loop");
        min = j;
        bars[min].style.backgroundColor = "green";
        count++;
      }
      if (min !== j) {
        bars[j].style.backgroundColor = "black";
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
      bars[i].style.height = arr[i] * 90 + "%";
      bars[min].style.height = arr[min] * 90 + "%";
      bars[i].style.backgroundColor = "green";
      bars[min].style.backgroundColor = "green";
    }
    bars[i].style.backgroundColor = "black";
    bars[min].style.backgroundColor = "black";
  }
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
      bars[prev + 1].style.height = arr[prev] * 90 + "%";
      bars[prev].style.height = arr[prev] * 90 + "%";
      bars[prev].style.backgroundColor = "black";
      bars[prev + 1].style.backgroundColor = "black";

      prev--;
    }

    arr[prev + 1] = current;
    bars[prev + 1].style.height = current * 90 + "%";
    for (let j = i + 1; j < arr.length; j++) {
      bars[j].style.backgroundColor = "black";
    }
  }
}
