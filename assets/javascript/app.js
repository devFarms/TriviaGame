// Variables
 
  // 30 second countdown timer
    var thirtySeconds = 30;   
 
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
    console.log(val);
   
    // Get values from checkboxes and put into variable
   
  };
 
// Game Logic
 
 
 
function checkAnswers() {
    var totalQuestions = 3;
    var quizScore = 0;
 
    var q1 = document.forms["quiz-form"]["radio-question-1"].value;
    var q2 = document.forms["quiz-form"]["radio-question-2"].value;
    var q3 = document.forms["quiz-form"]["radio-question-3"].value;
 
    // Validation
    for (i = 1; i <= totalQuestions; i++) {
        if (eval("q" + i) == null || eval("q" + i) == "") {
            alert("You missed question " + i);
            return false;
        }
    }
 
    // The answers!
    var correctAnswers = ["B", "A", "C"];
 
    for (i = 1; i <= totalQuestions; i++) {
        if (eval("q" + i) == correctAnswers[i - 1]) {
            quizScore++;
        }
    }
    alert("You scored "+quizScore+" out of "+totalQuestions );
    return false;
}