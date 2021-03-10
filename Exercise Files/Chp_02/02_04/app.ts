var container = document.getElementById('container');
//why is var vs let 
for (var x = 0; x <= 5; x++) {
    let counter = x; //should be let, const does not work since it's been initialized 
    counter = 1;
    //can't find when using let?
    //related to block scope
}

console.log(counter);