const arrayLength = 100;
var arr;

function randomNum() {
    arr=[];
  for(let i=0; i<arrayLength; i++){  
  let randomN = Math.random();
    arr.push(randomN)
    console.log(arr);
}
    
}
function generate() {
    randomNum();
  show();
 
}
function show(){
    const container = document.querySelector(".container");
    container.innerHTML = "";
    for (let i = 0; i < arrayLength; i++) {
        var bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.backgroundColor = "black";
        bar.style.height = arr[i] * 100 + "%";
        container.appendChild(bar);
      }
}

async function sort(){
    do{
        var swapped=false;
        for(let i=0; i<arrayLength-1; i++){     
            if(arr[i]>arr[i+1]){
                swapped=true;
                let temp =arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
            }
        }
    }while(swapped);
    show();
    // let bars = document.getElementsByClassName("bar");
    // for (let i = 0; i < arr.length; i++) {
    //   for (let j = 0; j < arr.length - i - 1; j++) {
    //     if (arr[j] > arr[j + 1]) {
    //       for (let k = 0; k < bars.length; k++) {
    //         if (k !== j && k !== j + 1) {
    //           bars[k].style.backgroundColor = "black";
    //         }
    //       }
    //       let temp = arr[j];
    //       arr[j] = arr[j + 1];
    //       arr[j + 1] = temp;
    //       bars[j].style.height = arr[j] * 100 + "%";
    //       bars[j].style.backgroundColor = "lightgreen";
    //       //bars[j].innerText = array[j];
    //       bars[j + 1].style.height = arr[j + 1] * 100 + "%";
    //       bars[j + 1].style.backgroundColor = "lightgreen";
    //       bars[j + 1].innerText = array[j + 1];
    //       await sleep(50);
    //     // setTimeout(()=>{
    //     //     bars[j].style.height = arr[j] * 100 + "%";
    //     //     bars[j].style.backgroundColor = "lightgreen";
    //     //     //bars[j].innerText = array[j];
    //     //     bars[j + 1].style.height = arr[j + 1] * 100 + "%";
    //     //     bars[j + 1].style.backgroundColor = "lightgreen";
    //     // }, 50);
    //     }
    //   }
    //   await sleep(50);
    // // setTimeout(()=>{
    // //     bars[j].style.height = arr[j] * 100 + "%";
    // //     bars[j].style.backgroundColor = "lightgreen";
    // //     //bars[j].innerText = array[j];
    // //     bars[j + 1].style.height = arr[j + 1] * 100 + "%";
    // //     bars[j + 1].style.backgroundColor = "lightgreen";
    // // }, 50);
    // }
    // return arr;
}
