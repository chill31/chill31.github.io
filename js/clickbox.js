const start_btn = document.getElementById("start-btn");

let score;

start_btn.addEventListener("click", () => {
  document.body.classList.add("game-started");

  document.body.innerHTML += `

<h1 style="text-align: center">Click The Box Game</h1>
<p>In the bordered section, a box appears, everytime you click on it, it randomly spawns somewhere else and increments your score by 1, score as much as you can in 1 minute.</p>

<label id="score" class="score">Score: 0</label>

<button class="restart-game" id="restart-game">Restart Game</button>

    <div class="click-btn-div" id="click-btn-div">

        <div class="spawn-here" id="spawn-here">

            <button class="click-btn" id="click-btn"></button>

        </div>

    </div>
`;

const restart_btn = document.getElementById("restart-game");
restart_btn.style.opacity = "0";
restart_btn.style.pointerEvents = "none";

    const spawn_div = document.getElementById("spawn-here");
    const click_box = document.getElementById("click-btn");

    const score_lbl = document.getElementById("score");

  score = 0;

  function setPos(btn, parent) {
    btn.style.top = Math.floor(Math.random() * parent.offsetHeight) + "px";
    btn.style.left = Math.floor(Math.random() * parent.offsetWidth) + "px";
  }

  click_box.addEventListener("click", () => {
    setPos(click_box, spawn_div);

    score++;
    score_lbl.textContent = `Score: ${score}`;
  });

  setTimeout(() => {

     notify(`Game Ended<br><br>You scored: ${score}`, "info");

    score = 0;
    score_lbl.textContent = `Score: ${score}`;

    click_box.disabled = true;

    restart_btn.style.opacity = "1";
    restart_btn.style.pointerEvents = "all";

    document.getElementById("dk").classList.add("active");

  }, 60000);

  restart_btn.addEventListener("click", () => {
      window.location.href = window.location.href;
  })
});