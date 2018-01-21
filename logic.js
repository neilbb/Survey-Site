/**
 * App name space.
 * @type {object} questionaire
*/

/**
* Global variables
*/

var questionaire = questionaire || {};

questionaire.handleSubmitButton = function() {
	document.getElementById("submit").onclick = function() {
		var answers = [
		document.getElementById("id").value,
		document.getElementById("q3").value,
		document.getElementById("q4").value,
		document.getElementById("q5").value,
		document.getElementById("q6").value,
		document.getElementById("q7").value,
		document.getElementById("q8").value,
		document.getElementById("q9").value,
		document.getElementById("q10").value,
		document.getElementById("q11").value,
		$('#q1').slider("option", "value"),
		$('#q2').slider("option", "value")

		];
		window.alert(answers);
	}
}
/**
* An init function that calls the methods above to handle on clicks for submit button.
*/


questionaire.init = function() {
	this.handleSubmitButton();
};

// Initialize
questionaire.init();