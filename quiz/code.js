const correctAnswers = ["C", "B", "C"];

const submitButton = document.querySelector(".submit-button");
const form = document.querySelector("form");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  scrollTo(0, 0);
  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value];
  userAnswers.forEach((val, i) => {
    if (correctAnswers[i] == val) {
      score += 33.3;
    }
  });
  percentage = Math.round(score);
  const hero = document.querySelector(".hero");
  const newHero = document.querySelector(".final-results");
  const mainHtml = document.querySelector("main");
  hero.style.display = "none";
  mainHtml.style.display = "none";
  newHero.style.display = "flex";
  let scoreSpan = newHero.querySelector("span");
  let i = 0;
  const successAnimation = setInterval(() => {
    if (i >= percentage) {
      if (percentage >= 50) {
        scoreSpan.style.color = "green";
      } else {
        scoreSpan.style.color = "crimson";
      }
      clearInterval(successAnimation);
    }
    scoreSpan.innerText = i + "%";
    i++;
  }, 20);
});
