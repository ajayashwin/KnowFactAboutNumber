let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

function printingTheFactContent(fact) {
    spinnerEl.classList.add("d-none");
    factEl.textContent = fact;
}

function givingthenumbers(userValue) {

    let options = {
        method: "GET"
    }
    let url = "https://apis.ccbp.in/numbers-fact?number=" + userValue;


    fetch(url, options)

        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            let {
                fact
            } = jsondata;
            printingTheFactContent(fact);
        });

}


function call() {
    if (event.key === "Enter") {
        let userValue = userInputEl.value;
        givingthenumbers(userValue);
        spinnerEl.classList.remove("d-none");
        factEl.textContent = "";
    }


}

userInputEl.addEventListener("keydown", call)