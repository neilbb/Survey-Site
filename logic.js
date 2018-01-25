/**
 * App name space.
 * @type {object} questionaire
*/

/**
* Global variables
*/

var questionaire = questionaire || {};

questionaire.handleSubmitButton = function() {
	document.getElementById("Next").onclick = function() {

		window.alert("Results");
		var answers = [
		$('#q1').slider("option", "value"),
		$('#q2').slider("option", "value"),
		$('#q3').slider("option", "value"),
		$('#q4').slider("option", "value"),
		$('#q5').slider("option", "value"),
		$('#q6').slider("option", "value"),
		$('#q7').slider("option", "value"),
		$('#q8').slider("option", "value"),
		$('#q9').slider("option", "value"),
		$('#q10').slider("option", "value"),
		$('#q11').slider("option", "value"),
		$('#q12').slider("option", "value"),
		$('#q13').slider("option", "value"),
		$('#q14').slider("option", "value"),
		$('#q15').slider("option", "value"),
		$('#q16').slider("option", "value"),
		$('#q17').slider("option", "value")

		];
		window.alert(answers);
		window.location.href="idaq.html";
	}
};
/**
* An init function that calls the methods above to handle on clicks for submit button.
*/

function handleSubmitButton2() {

	window.alert("Submit Results");
	
	var answers = [
	//document.getElementById("id").value,
	//document.getElementById("q3").value,
	//document.getElementById("q4").value,
	//document.getElementById("q5").value,
	//document.getElementById("q6").value,
	//document.getElementById("q7").value,
	//document.getElementById("q8").value,
	//document.getElementById("q9").value,
	//document.getElementById("q10").value,
	//document.getElementById("q11").value,
	$('#qq1').slider("option", "value"),
	$('#qq2').slider("option", "value"),
	$('#qq3').slider("option", "value"),
	$('#qq4').slider("option", "value"),
	$('#qq5').slider("option", "value"),
	$('#qq6').slider("option", "value"),
	$('#qq7').slider("option", "value"),
	$('#qq8').slider("option", "value"),
	$('#qq9').slider("option", "value"),
	$('#qq10').slider("option", "value"),
	$('#qq11').slider("option", "value"),
	$('#qq12').slider("option", "value"),
	$('#qq13').slider("option", "value"),
	$('#qq14').slider("option", "value"),
	$('#qq15').slider("option", "value"),
	$('#qq16').slider("option", "value"),
	$('#qq17').slider("option", "value"),
	$('#qq18').slider("option", "value"),
	$('#qq19').slider("option", "value"),
	$('#qq20').slider("option", "value"),
	$('#qq21').slider("option", "value"),
	$('#qq22').slider("option", "value"),
	$('#qq23').slider("option", "value"),
	$('#qq24').slider("option", "value"),
	$('#qq25').slider("option", "value"),
	$('#qq26').slider("option", "value"),
	$('#qq27').slider("option", "value"),
	$('#qq28').slider("option", "value"),
	$('#qq29').slider("option", "value"),
	$('#qq30').slider("option", "value")
	];
	window.alert(answers);
	/**window.location.href="idaq.html";*/
};

questionaire.init = function() {
	this.handleSubmitButton();
};

// Initialize
questionaire.init();