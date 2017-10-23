// Variables

	// 30 second countdown timer
    var thirtySeconds = 5;

    // Variable to hold count of correct or incorrect answers
    var correctAnswer = "";
    var wrongAnswer = "";
    
    // Variables to hold count of wins or losses, may not be needed
    var winCounter = "";
   	var lossCounter = "";
    

// Functions

//  The run function sets an interval
    //  that runs the decrement function once a second.
    function startTimer() {
      intervalId = setInterval(decrement, 1000);
      document.getElementById("btn-check-answers").disabled = false;
    }

    //  The decrement function.
    function decrement() {

      //  Decrease thirtySeconds by one.
      thirtySeconds--;

      //  Show the thirtySeconds in the #show-thirtySeconds tag.
      $("#thirty-seconds").html("<h2>" + thirtySeconds + "</h2>");


      //  Once thirtySeconds hits zero...
      if (thirtySeconds === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        // alert("Time Up!");

        // Sets Submit button state back to disabled.
        document.getElementById("btn-check-answers").disabled = true;
        $("#thirty-seconds").html("<h2>Sorry, your time is up!</h2>");
      }
    }


    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }


// check form elements for correct answers

	function checkAnswers(){
		// alert("Check Answers Clicked");

		var val = checkAnswers(document.getElementById("submit-btn"), "radio-btn-group" );
		alert(val);
		
		// Get values from checkboxes and put into variable
		
	};



/*

function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}

*/