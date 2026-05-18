(function () {
	'use strict';

	var trigger = document.querySelector('[data-cv-trigger]');
	var challenge = document.querySelector('[data-cv-challenge]');
	var submit = document.querySelector('[data-cv-submit]');
	var answer = document.querySelector('#cv-answer');
	var feedback = document.querySelector('[data-cv-feedback]');
	var cvParts = ['https://drive.google.com/file/d/', '1d9OMtyabxRPVruchOfk_QRLe_-gkIJ9u', '/view?usp=sharing'];

	if (!trigger || !challenge || !submit || !answer || !feedback) {
		return;
	}

	function openChallenge() {
		challenge.hidden = false;
		trigger.setAttribute('aria-expanded', 'true');
		answer.focus();
	}

	function openCv() {
		if (answer.value.trim() === '18') {
			feedback.textContent = '';
			document.location.href = cvParts.join('');
			return;
		}

		feedback.textContent = 'Try that one again.';
		answer.select();
	}

	trigger.setAttribute('aria-expanded', 'false');
	trigger.addEventListener('click', openChallenge);
	submit.addEventListener('click', openCv);
	answer.addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			openCv();
		}
	});
}());
