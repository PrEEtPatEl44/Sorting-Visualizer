// const arrayLength = (document.getElementById('ArrayLength'));
const arrayLength=document.getElementById('length');
const speed = document.getElementById('speed');
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
// function animate(swaps){
//     if(swaps.length===0){

//         return;
//     }
//     console.log(swaps[0]);
//     const [i,j]=swaps.shift();
//     console.log(i+","+j);
//     // bars[i].style.height = arr[i] * 100 + "%";
//     // bars[j].style.height = arr[j] * 100 + "%";
//     let temp = arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     show([i, j]);
//     setTimeout(()=>{
//         animate(swaps);
//     },10);
// }
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
  // const swaps=[];
  const bars = document.querySelectorAll(".bar");

  do {
    var swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // swaps.push([i,i+1]);
        // console.log(swaps);
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        bars[i].style.height = arr[i] * 100 + "%";
        bars[i + 1].style.height = arr[i + 1] * 100 + "%";
        bars[i].style.backgroundColor = "red";
        bars[i + 1].style.backgroundColor = "red";
        await new Promise((resolve) => setTimeout(resolve, speed.value));
      }
      bars[i].style.backgroundColor = "black";
      bars[i + 1].style.backgroundColor = "black";
    }
    await new Promise((resolve) => setTimeout(resolve, speed.value));
  } while (swapped);
  // return swaps
  // show();
  // animate(swaps);

  // animate(swaps);
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
      bars[i].style.height = arr[i] * 100 + "%";
      bars[min].style.height = arr[min] * 100 + "%";
      bars[i].style.backgroundColor = "green";
      bars[min].style.backgroundColor = "green";
    }
    bars[i].style.backgroundColor = "black";
    bars[min].style.backgroundColor = "black";
  }
}

async function insertionSort(){
    const bars = document.querySelectorAll(".bar");
    let i,j,key;
    for(i=1; i<arr.length; i++){
        // await new Promise((resolve)=>setTimeout(resolve, speed.value));
        j=i-1;
        // bars[i].style.backgroundColor = "red";
        key=i;
        while(j>=0 && arr[j]>arr[key]){
            arr[j+1]=arr[j];
            j--;
            //bars[j].style.height = arr[j] * 100 + "%";
            //bars[j+1].style.height = arr[j+1] * 100 + "%";
            
            await new Promise((resolve)=>setTimeout(resolve, speed.value));
        }
        arr[j+1]=arr[key];
    }
    show();
    
}

// async function quickSort(){}
// async function partition(){
//     let leftMost=arr[0];
//     let rightMost=arr[arr.length-1];
//     let pivot=rightMost;
// }
