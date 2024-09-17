// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const startScreen = document.getElementById('start-screen');
  const loginScreen = document.getElementById('login-screen');
  const departmentScreen = document.getElementById('department-screen');
  const introScreen = document.getElementById('intro-screen');
  const gameplayScreen = document.getElementById('gameplay-screen');
  const feedbackScreen = document.getElementById('feedback-screen');
  const progressScreen = document.getElementById('progress-screen');
  
  const loginBtn = document.getElementById('login-btn');
  const submitLogin = document.getElementById('submit-login');
  const deptBtns = document.querySelectorAll('.dept-btn');
  const startGameBtn = document.getElementById('start-game');
  const nextBtn = document.getElementById('next-btn');
  const restartBtn = document.getElementById('restart-btn');
  
  let currentScenario = 0;
  let score = 0;

  // Event Listeners
  loginBtn.addEventListener('click', () => {
      startScreen.classList.add('hidden');
      loginScreen.classList.remove('hidden');
  });

  submitLogin.addEventListener('click', () => {
      loginScreen.classList.add('hidden');
      departmentScreen.classList.remove('hidden');
  });

  deptBtns.forEach(button => {
      button.addEventListener('click', () => {
          departmentScreen.classList.add('hidden');
          introScreen.classList.remove('hidden');
      });
  });

  startGameBtn.addEventListener('click', () => {
      introScreen.classList.add('hidden');
      gameplayScreen.classList.remove('hidden');
      showScenario();
  });

  nextBtn.addEventListener('click', () => {
      feedbackScreen.classList.add('hidden');
      if (currentScenario < 3) { // Example: 3 scenarios
          currentScenario++;
          showScenario();
      } else {
          gameplayScreen.classList.add('hidden');
          progressScreen.classList.remove('hidden');
      }
  });

  restartBtn.addEventListener('click', () => {
      progressScreen.classList.add('hidden');
      startScreen.classList.remove('hidden');
  });

  // Functions
  function showScenario() {
      // Example scenarios
      const scenarios = [
          "Scenario 1: What is the role of the Legislature?",
          "Scenario 2: How is the Executive structured?",
          "Scenario 3: What are the functions of the Judiciary?"
      ];
      const answers = [
          ["Make laws", "Interpret laws", "Execute laws", "Draft laws"],
          ["President", "Prime Minister", "Judges", "Legislators"],
          ["Create laws", "Enforce laws", "Interpret laws", "Amend laws"]
      ];

      document.getElementById('scenario-title').textContent = `Scenario ${currentScenario + 1}`;
      document.getElementById('scenario-text').textContent = scenarios[currentScenario];

      const buttons = document.querySelectorAll('.answer-btn');
      buttons.forEach((button, index) => {
          button.textContent = answers[currentScenario][index];
          button.onclick = () => handleAnswer(button.textContent);
      });
  }

  function handleAnswer(answer) {
      const correctAnswers = [
          "Make laws", // Correct answer for Scenario 1
          "Prime Minister", // Correct answer for Scenario 2
          "Interpret laws" // Correct answer for Scenario 3
      ];

      const feedbackText = document.getElementById('feedback-text');
      if (answer === correctAnswers[currentScenario]) {
          score += 10; // Example score increment
          feedbackText.textContent = "Correct!";
      } else {
          feedbackText.textContent = "Incorrect. Try again!";
      }

      document.getElementById('score').textContent = `Score: ${score}`;
      gameplayScreen.classList.add('hidden');
      feedbackScreen.classList.remove('hidden');
  }
});