function checklogin(){
//    let temp = document.querySelector("#input-login").value;

//    let display = document.querySelector("#pass");

//    display.innerHTML = temp;

    let login = document.querySelector("#input-login").value;
    let password = document.querySelector("#input-pass").value;

    let right = document.querySelector("#right");
    let wrong = document.querySelector("#wrong");

    //zrobić jeszcze right & wrong innerHTML = "" zeby puste bylo po kazdym kliknieciu

    right.innerHTML = ""; //odświeża napis right
    wrong.innerHTML = ""; //odświeża napis wrong

    if(login == "admin"){
        if(password == "admin123"){
            right.innerHTML = "ACCESS";
            //tutaj użytkownik ma dostęp
            open_access();
        }

        else if(password == ""){
            wrong.innerHTML = "PLEASE ENTER A PASSWORD";
        }

        else{
            wrong.innerHTML = "ACCESS DENIED";
        }
    }

    else if(login == ""){
        wrong.innerHTML = "PLEASE ENTER A LOGIN";
    }

    else{
        wrong.innerHTML = "WRONG LOGIN";
    }
    
}

function open_access(){
    window.open("https://www.google.com", "_self");
}

function mess(){
    let email = document.querySelector("#mail").value;

    if(email == ""){
        alert("Please enter a email");
    }

    alert("The request for change password was sent to " + email);
}
