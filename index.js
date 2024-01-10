const arrayLength = 100;
var arr;

function randomNum() {
    arr=[];
    for(let i=0; i<arrayLength; i++){  
        let randomN = Math.random();
        arr.push(randomN)
        // console.log(arr);
    }
    
}
function generate() {
    randomNum();
    show();
    
}
function show(indices){
    const container = document.querySelector(".container");
    container.innerHTML = "";
    for (let i = 0; i < arrayLength; i++) {
        var bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.backgroundColor = "black";
        bar.style.height = arr[i] * 100 + "%";
        container.appendChild(bar);
        if(indices && indices.includes(i)){
            bar.style.backgroundColor="lightgreen";
        }
    }
}
function animate(swaps){
    if(swaps.length===0){
        
        return;
    }
    console.log(swaps[0]);
    const [i,j]=swaps.shift();
    console.log(i+","+j);
    // bars[i].style.height = arr[i] * 100 + "%";
    // bars[j].style.height = arr[j] * 100 + "%";
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    show([i, j]);
    setTimeout(()=>{
        animate(swaps);
    },10);
}
function sort(){
    // const copy =[...arr];
    // console.log(copy);
    // const swaps=bubbleSort(copy);
    
    // animate(swaps);
    // selectionSort(arr);
    bubbleSort();
}
async function bubbleSort(){
    // const swaps=[];
    do{
        var swapped=false;
        const bars = document.querySelectorAll(".bar");
        for(let i=0; i<arr.length-1; i++){
            if(arr[i]>arr[i+1]){
                // swaps.push([i,i+1]);
                // console.log(swaps);
                let temp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                swapped=true;
                bars[i].style.height = arr[i] * 100 + "%";
                bars[i+1].style.height = arr[i+1] * 100 + "%";
                bars[i].style.backgroundColor = "red";
                bars[i+1].style.backgroundColor= "red";
                await new Promise((resolve) => setTimeout(resolve, 10));;
            }
            bars[i].style.backgroundColor = "black";
            bars[i+1].style.backgroundColor= "black";
        }
        await new Promise((resolve) => setTimeout(resolve, 10));
    }while(swapped);
    // return swaps
    // show();
    // animate(swaps);
  
    // animate(swaps);
    
}

function selectionSort(arr){
    for(let i=0; i<arr.length-1; i++){
        var min =i;
        for(let j=i ; j<arr.length-1; j++){
            if(arr[min]> arr[j]){
                min=j;

            }
        }
        let temp = arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
                
    }
    show();
}
