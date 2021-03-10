var container = document.getElementById('container');
//why is var vs let 
for (let x = 0; x <= 5; x++) {
    const counter = x;
    counter = 1;
    //can't find when using let?
    //related to block scope 
}

console.log(counter);