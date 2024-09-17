function login() {
  // Simulate a login process
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('choice-page').classList.remove('hidden');
}

function selectBranch(branch) {
  document.getElementById('choice-page').classList.add('hidden');
  if (branch === 'legislative') {
      document.getElementById('legislative-game').classList.remove('hidden');
  } else if (branch === 'judiciary') {
      document.getElementById('judiciary-game').classList.remove('hidden');
  } else if (branch === 'executive') {
      document.getElementById('executive-game').classList.remove('hidden');
  }
}

function Startgame() {
  document.querySelector('.game-page:not(.hidden)').classList.add('hidden');
  document.getElementById('feedback-form').classList.remove('hidden');
}

function finishGame() {
  document.querySelector('.game-page:not(.hidden)').classList.add('hidden');
  document.getElementById('feedback-form').classList.remove('hidden');
}

function showLeaderboard() {
  document.getElementById('feedback-form').classList.add('hidden');
  document.getElementById('leaderboard').classList.remove('hidden');
}
