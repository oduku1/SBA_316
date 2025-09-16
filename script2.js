const sportTeams = [
  {
    team: "Atlanta Hawks",
    location: "Atlanta",
    stadium: "State Farm Arena",
    image: "sportTeams/Hawks.png",
  },
  {
    team: "Boston Celtics",
    location: "Boston",
    stadium: "TD Garden",
    image: "sportTeams/Celtics.png",
  },
  {
    team: "Brooklyn Nets",
    location: "Brooklyn",
    stadium: "Barclays Center",
    image: "sportTeams/Nets.png",
  },
  {
    team: "Charlotte Hornets",
    location: "Charlotte",
    stadium: "Spectrum Center",
    image: "sportTeams/Hornets.png",
  },
  {
    team: "Chicago Bulls",
    location: "Chicago",
    stadium: "United Center",
    image: "sportTeams/Bulls.png",
  },
  {
    team: "Cleveland Cavaliers",
    location: "Cleveland",
    stadium: "Rocket Mortgage FieldHouse",
    image: "sportTeams/Cavaliers.png",
  },
  {
    team: "Dallas Mavericks",
    location: "Dallas",
    stadium: "American Airlines Center",
    image: "sportTeams/Mavs.png",
  },
  {
    team: "Denver Nuggets",
    location: "Denver",
    stadium: "Ball Arena",
    image: "sportTeams/Nuggets.png",
  },
  {
    team: "Detroit Pistons",
    location: "Detroit",
    stadium: "Little Caesars Arena",
    image: "sportTeams/Pistons.png",
  },
  {
    team: "Golden State Warriors",
    location: "San Francisco",
    stadium: "Chase Center",
    image: "sportTeams/Warriors.png",
  },
  {
    team: "Houston Rockets",
    location: "Houston",
    stadium: "Toyota Center",
    image: "sportTeams/Rockets.png",
  },
  {
    team: "Indiana Pacers",
    location: "Indianapolis",
    stadium: "Gainbridge Fieldhouse",
    image: "sportTeams/Pacers.png",
  },
  {
    team: "Los Angeles Clippers",
    location: "Los Angeles",
    stadium: "Crypto.com Arena",
    image: "sportTeams/Clippers.png",
  },
  {
    team: "Los Angeles Lakers",
    location: "Los Angeles",
    stadium: "Crypto.com Arena",
    image: "sportTeams/Lakers.png",
  },
  {
    team: "Memphis Grizzlies",
    location: "Memphis",
    stadium: "FedExForum",
    image: "sportTeams/Grizzlies.png",
  },
  {
    team: "Miami Heat",
    location: "Miami",
    stadium: "Kaseya Center",
    image: "sportTeams/Heat.png",
  },
  {
    team: "Milwaukee Bucks",
    location: "Milwaukee",
    stadium: "Fiserv Forum",
    image: "sportTeams/Bucks.png",
  },
  {
    team: "Minnesota Timberwolves",
    location: "Minneapolis",
    stadium: "Target Center",
    image: "sportTeams/Wolves.png",
  },
  {
    team: "New Orleans Pelicans",
    location: "New Orleans",
    stadium: "Smoothie King Center",
    image: "sportTeams/Pelicans.png",
  },
  {
    team: "New York Knicks",
    location: "New York",
    stadium: "Madison Square Garden",
    image: "sportTeams/Knicks.png",
  },
  {
    team: "Oklahoma City Thunder",
    location: "Oklahoma City",
    stadium: "Paycom Center",
    image: "sportTeams/OKC.png",
  },
  {
    team: "Orlando Magic",
    location: "Orlando",
    stadium: "Kia Center",
    image: "sportTeams/Magic.png",
  },
  {
    team: "Philadelphia 76ers",
    location: "Philadelphia",
    stadium: "Wells Fargo Center",
    image: "sportTeams/Sixers.png",
  },
  {
    team: "Phoenix Suns",
    location: "Phoenix",
    stadium: "Footprint Center",
    image: "sportTeams/Suns.png",
  },
  {
    team: "Portland Trail Blazers",
    location: "Portland",
    stadium: "Moda Center",
    image: "sportTeams/TrailBlazers.png",
  },
  {
    team: "Sacramento Kings",
    location: "Sacramento",
    stadium: "Golden 1 Center",
    image: "sportTeams/Kings.png",
  },
  {
    team: "San Antonio Spurs",
    location: "San Antonio",
    stadium: "Frost Bank Center",
    image: "sportTeams/Spurs.png",
  },
  {
    team: "Toronto Raptors",
    location: "Toronto",
    stadium: "Scotiabank Arena",
    image: "sportTeams/Raptors.png",
  },
  {
    team: "Utah Jazz",
    location: "Salt Lake City",
    stadium: "Delta Center",
    image: "sportTeams/Jazz.png",
  },
  {
    team: "Washington Wizards",
    location: "Washington, D.C.",
    stadium: "Capital One Arena",
    image: "sportTeams/Wizards.png",
  },
];

window.onload = () => {
  randomTeam();
};

const enterButton = document.querySelector("#enterBtn");
const newButton = document.querySelector("#newBtn");
const input = document.querySelector("#input");
const result = document.querySelector("#result");
const hint1 = document.querySelector("#hint1");
const hint2 = document.querySelector("#hint2");
const stadiumEl = document.querySelector("#stadium");
const locationEl = document.querySelector("#location");
const blurImage = document.getElementById("blurImage");
const guessesDisplay = document.getElementById("guesses");

let guesses = 10;
let blurVal = 12;
let currentTeam;

function randomTeam() {
  const randomIndex = Math.floor(Math.random() * sportTeams.length);
  currentTeam = sportTeams[randomIndex];
  blurImage.setAttribute("src", currentTeam.image);
  blurImage.style.filter = `blur(${blurVal}px)`;
}

function resetRound() {
  randomTeam();
  input.value = "";
  result.textContent = "";
  guesses = 10;
  blurVal = 12;
  blurImage.style.filter = `blur(${blurVal}px)`;
  hint1.classList.add("hidden");
  hint2.classList.add("hidden");
  guessesDisplay.textContent = guesses;
}

function guessHandle() {
  const guess = input.value.trim().toLowerCase();

  if (guess === "") {
    result.classList.remove("right-answer", "wrong-answer");
    result.textContent = "Please enter a valid guess";
    setTimeout(() => {
      result.textContent = "";
    }, 3000);
    return;
  }

  const teamWords = currentTeam.team.toLowerCase().split(" ");
  const isCorrect =
    guess === currentTeam.team.toLowerCase() || teamWords.includes(guess);

  if (isCorrect) {
    result.classList.remove("wrong-answer");
    result.classList.add("right-answer");
    result.textContent = "✅ Correct!";
    blurImage.style.filter = "blur(0px)";
    setTimeout(resetRound, 3000);
  } else {
    guesses--;
    guessesDisplay.textContent = guesses;
    blurVal -= 1.2;
    result.classList.remove("right-answer");
    result.classList.add("wrong-answer");
    result.textContent = `❌ Wrong — ${guesses} left`;
    blurImage.style.filter = `blur(${blurVal}px)`;

    if (guesses === 7) {
      hint1.classList.remove("hidden");
      stadiumEl.textContent = currentTeam.stadium;
    }

    if (guesses === 3) {
      hint2.classList.remove("hidden");
      locationEl.textContent = currentTeam.location;
    }

    if (guesses === 0) {
      result.textContent = `⛔ Out of guesses! Answer: ${currentTeam.team}`;
      blurImage.style.filter = "blur(0px)";
      setTimeout(resetRound, 3000);
    }
  }

  input.value = "";
}

enterButton.addEventListener("click", guessHandle);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") guessHandle();
});

newButton.addEventListener("click", () => {
  result.textContent = `Answer: ${currentTeam.team}`;
  blurImage.style.filter = "blur(0px)";
  setTimeout(resetRound, 3000);
});
