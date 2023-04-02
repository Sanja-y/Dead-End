// JavaScript source code

function selectJoke()
{
	rattle();
	var suicideJokes = ["The only person that keeps me from commiting suicide, is that guy instantly upvoting anything I post", "Suicide jokes don't fly with most people, they hang.","My mum told me to stop telling the suicidal jokes. I replied with: \"Don't worry, suicide would be the last thing I'd do.", "Suicide is not a joke, get help. You can pay someone to shoot you", "When is the best time to commit suicide? Ate a glock in the morning."];
	var selector = Math.floor(Math.random()*suicideJokes.length);
	$("h1").text(suicideJokes[selector]);
	$("h1").removeClass("neonText");
}
function rattle()
{
	$("img").toggleClass("shake");
}
setInterval(rattle, 1000 );
function blink_text() {
    $('h1').toggleClass("neonText");
}
setInterval(blink_text, 1000);
