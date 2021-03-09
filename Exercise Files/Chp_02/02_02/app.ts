var container = document.getElementById('container');

function countdown(initial, final = 0, interval = 1) {

    var current = initial;

    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }

}

// countdown(10, 5, 2)
countdown(20);
//or as much as we need 