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
    const bars = document.querySelectorAll(".bar");
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
    const copy =[...arr];
    console.log(copy);
    const swaps=bubbleSort(copy);

    animate(swaps);
}
function bubbleSort(arr){
    const swaps=[];
    do{
        var swapped=false;
        for(let i=0; i<arr.length-1; i++){
            if(arr[i]>arr[i+1]){
                swaps.push([i,i+1]);
                console.log(swaps);
                let temp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                swapped=true;
            }
        }
    }while(swapped);
    return swaps
    // show();
    // animate(swaps);
  
    // animate(swaps);
    
}
