let cir = document.querySelector('.circle');
let cc = document.getElementById('btn2');

let arr = ['blue', 'black', 'red', 'yellow', 'purple'];
let cs = document.getElementById('btn1');

cc.addEventListener('click', () =>{
    let color = Math.floor(Math.random() * 5);
    cir.style.backgroundColor = arr[color];
});

cs.addEventListener('click', () =>{
    let shape1 = document.getElementById('shape');
    let shape2 = document.getElementById('triangle');

    let s1 = shape1.style.zIndex;
    let s2 = shape2.style.zIndex;

    if(s1 == -1 && s2 != -1){
        shape1.style.zIndex = '1';
        shape2.style.zIndex = '-1';
    }
    else{
        shape1.style.zIndex = '-1';
        shape2.style.zIndex = '1';
    }
})