function git() {

    let liczba = document.querySelector("#liczba-input").value;
    //tutaj pobiera liczba i przypisuje do zmiennej 'liczba'

    document.getElementById("start-button").disabled = true;
    document.getElementById("liczba-input").disabled = true;
    //disable button "GO" & input (number)

    document.getElementById("counter").innerHTML = liczba;

    // while (liczba > -1){
        
    //     let liczba = liczba - 1;

        //here wait js

    //     setTimeout(check, 1000);

    //     document.getElementById("counter").innerHTML = liczba;
    // }
    
    //document.getElementById("counter").innerHTML = liczba;
    document.getElementById("counter").innerHTML = "tutaj";

    document.getElementById("start-button").disabled = false;
    document.getElementById("liczba-input").disabled = false;
    // alert("IT WORKS");
}

