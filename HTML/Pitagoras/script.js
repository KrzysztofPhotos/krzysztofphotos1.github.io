document.getElementById('a').disabled = true;
document.getElementById('b').disabled = true;
document.getElementById('c').disabled = true;





function disable_one() {
    var change_letter = document.querySelector("#change_side").value;


    if (change_letter == "c") {
        // alert("C");
        document.getElementById('a').disabled = false;
        document.getElementById('b').disabled = false;
    }
    else if (change_letter == "b") {
        // alert("B");
        document.getElementById('c').disabled = false;
        document.getElementById('a').disabled = false;
    }
    else if (change_letter == "a") {
        // alert("A");
        document.getElementById('b').disabled = false;
        document.getElementById('c').disabled = false;
    }
    else {
        alert("ERROR");
    }
    
}

function calculate() {
    // let login = document.querySelector("#change_side").value;
    // let print_temp = document.querySelector("#printf");
    // print_temp.innerHTML = login;

    if (change_letter == "a") {
        var change_letter = document.querySelector("#change_side").value;



    }

    else if (change_letter == "b") {

    }

    else (change_letter == "c") {

    }


}
