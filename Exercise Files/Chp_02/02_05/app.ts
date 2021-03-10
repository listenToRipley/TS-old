var array = [
    "Pick up drycleaning", 
    "Clean Batcave", 
    "Save Gotham"
];

for (var value in array) { //in 
    var content = array[value];  //have to call the content in order to actually get it out of the array 
    console.log(content);
}

//vs for of

for (var value of array) { //in 
    console.log(content);
}