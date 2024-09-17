
function login() {
    // Hide the login form and show the choice page
    const loginForm = document.getElementById('login-form');
    const choicePage = document.getElementById('choice-page');

    if (loginForm && choicePage) {
        loginForm.classList.add('hidden');
        choicePage.classList.remove('hidden');
    } else {
        console.error('Login form or choice page not found');
    }
}

function selectBranch(branch) {
    // Hide the choice page and show the start game page
    const choicePage = document.getElementById('choice-page');
    const startGamePage = document.getElementById('start-game-page');

    if (choicePage) {
        choicePage.classList.add('hidden');
    }

    if (startGamePage) {
        startGamePage.classList.remove('hidden');
        startGamePage.dataset.branch = branch; // Store the selected branch in a data attribute
    } else {
        console.error('Start game page not found');
    }
}

function startGame() {
    // Hide the start game page and show the selected game page
    const startGamePage = document.getElementById('start-game-page');
    const branch = startGamePage.dataset.branch; // Retrieve the stored branch
    const gamePage = document.getElementById(branch + '-game');

    if (startGamePage) {
        startGamePage.classList.add('hidden');
    }

    if (gamePage) {
        gamePage.classList.remove('hidden');
    } else {
        console.error('Selected game page not found');
    }
}

function finishGame() {
    // Hide the currently visible game page and show the feedback form
    const currentGamePage = document.querySelector('.game-page:not(.hidden)');
    const feedbackForm = document.getElementById('feedback-form');

    if (currentGamePage) {
        currentGamePage.classList.add('hidden');
    }

    if (feedbackForm) {
        feedbackForm.classList.remove('hidden');
    } else {
        console.error('Feedback form not found');
    }
}

function showLeaderboard() {
    // Hide the feedback form and show the leaderboard
    const feedbackForm = document.getElementById('feedback-form');
    const leaderboard = document.getElementById('leaderboard');

    if (feedbackForm) {
        feedbackForm.classList.add('hidden');
    }

    if (leaderboard) {
        leaderboard.classList.remove('hidden');
    } else {
        console.error('Leaderboard not found');
    }
}
