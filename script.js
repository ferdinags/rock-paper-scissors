function play(userChoice) {
  const choices = ["Rock ✊", "Paper ✋", "Scissors ✌️"];
  const computerChoice = Math.floor(Math.random() * 3);

  let result = `<p><strong>You chose:</strong> ${choices[userChoice]}</p>
                <p><strong>Computer chose:</strong> ${choices[computerChoice]}</p>`;

  if (userChoice === computerChoice) {
    result += `<p style="color:#636e72;font-weight:bold;">It's a draw!!</p>`;
  } else if (
    (userChoice === 0 && computerChoice === 2) ||
    (userChoice === 1 && computerChoice === 0) ||
    (userChoice === 2 && computerChoice === 1)
  ) {
    result += `<p style="color:#00b894;font-weight:bold;">🎉 You win!</p>`;
  } else {
    result += `<p style="color:#d63031;font-weight:bold;">😢 You lose!</p>`;
  }

  document.getElementById("result").innerHTML = result;
}
