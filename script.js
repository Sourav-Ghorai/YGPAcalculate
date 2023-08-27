
//window is used to show the alert message after loading the website
window.onload = function(){
    
    // Display an alert with a message
    alert("Terms & Conditions: This site is only for YGPA calculation of MAKAUT University. It doesn't support other university's YGPA calculation. Thank You!");

    // Get references to the input elements
    var inputArr = document.querySelectorAll(".inputBox");

    //Error occured then set box to red
    function errorBox(box){
        box.style.borderColor = "red";
        box.style.backgroundColor = "#ffe7e5";
    }

    //If not error occured the reset the boxes
    function reset(box){
        box.style.borderColor = "lightgray";
        box.style.backgroundColor = "white";
    }

    //Error checking in input value
    function errorCheck(){
        var flag1 = 0, flag2 = 0;

        //Error checking for odd sem input value
        if((inputArr[0].value==="" || inputArr[0].value==='0') || (inputArr[1].value==="" || inputArr[1].value==='0')){
            document.querySelector(".errorMessege1").style.display = "block";
            flag1 = 1;
            if(inputArr[0].value==="" || inputArr[0].value==='0') errorBox(inputArr[0]);
            else{
                reset(inputArr[0]);
            }
            if(inputArr[1].value==="" || inputArr[1].value==='0') errorBox(inputArr[1]);
            else{
                reset(inputArr[1]);
            }
        }
        else{
            document.querySelector(".errorMessege1").style.display = "none";
            flag1 = 0;
            reset(inputArr[1]);
            reset(inputArr[0]);
        }

        //Error checking for even sem input value
        if((inputArr[2].value==="" || inputArr[2].value==='0') || (inputArr[3].value==="" || inputArr[3].value==='0')){
            document.querySelector(".errorMessege2").style.display = "block";
            flag2 = 1;
            if(inputArr[2].value==="" || inputArr[2].value==='0') errorBox(inputArr[2]);
            else{
                reset(inputArr[2]);
            }
            if(inputArr[3].value==="" || inputArr[3].value==='0') errorBox(inputArr[3]);
            else{
                reset(inputArr[3]);
            }
        }
        else{
            document.querySelector(".errorMessege2").style.display = "none";
            flag2 = 0;
            reset(inputArr[3]);
            reset(inputArr[2]);
        }

        if(flag1===0 && flag2===0) return 0;
        else return 1;
    }

    // Calculate YGPA
    function calculateYGPA() {
        var numerator = Number(inputArr[1].value) + Number(inputArr[3].value);
        var denominator = Number(inputArr[0].value) + Number(inputArr[2].value);

        var ygpaValue = numerator / denominator;
        return ygpaValue;
    }

    // Get reference to the button and set up click event listener
    document.querySelector("button").addEventListener("click", function() {
        var flag  = errorCheck();
        if(flag===0){
            var ygpaResult = calculateYGPA();

            //To scroll up top of the page to show the result
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

            document.querySelector("span").innerHTML = ygpaResult.toFixed(2);
            document.querySelector(".container").style.filter = "blur(7px)";
            document.querySelector(".success-block").style.display = "block";
        }
    });

    document.querySelector(".dismiss-btn").addEventListener("click", function(){
        document.querySelector(".container").style.filter = "blur(0px)";
        document.querySelector(".success-block").style.display = "none";
    });

};
