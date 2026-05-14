// CURSOR GLOW

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX - 10 + "px";
  glow.style.top = e.clientY - 10 + "px";
});


// RAGE QUOTES

const rageButton = document.getElementById("rageButton");
const rageBox = document.getElementById("rageBox");

const rageQuotes = [

  "Bitch Please.",
  "FFFFFFFFUUUUUUUU",
  "ARE YOU SERIOUS RIGHT NOW?",
  "cool story bro",
  "I saw this meme in 2009.",
  "YAO MING NEVER LEFT.",
  "ratio + rage comic",
  "certified internet veteran",
  "memecoins are stupid",
  "this website smells like old youtube",
  "achievement unlocked: terminally online",
  "bro opened the forbidden website",
  "vintage meme detected",
  "pain.",
  "internet culture has peaked",
  "DELETE THIS NOW",
  "this is financial advice (not really)",
  "powered by disrespect",
  "welcome to the trenches",
  "you just activated bitch please mode"

];

rageButton.addEventListener("click", () => {

  const randomQuote =
    rageQuotes[Math.floor(Math.random() * rageQuotes.length)];

  rageBox.innerText = randomQuote;

  rageBox.animate(
    [
      { transform: "scale(0.9)" },
      { transform: "scale(1.05)" },
      { transform: "scale(1)" }
    ],
    {
      duration: 300
    }
  );

});


// RANDOM FLASH EFFECT

setInterval(() => {

  if(Math.random() > 0.93){

    document.body.style.filter = "brightness(1.2)";

    setTimeout(() => {
      document.body.style.filter = "brightness(1)";
    },100);

  }

},2000);


// SECRET CHAOS MODE

let chaos = false;

document.addEventListener("keydown", (e) => {

  if(e.key === "y"){

    chaos = !chaos;

    if(chaos){

      document.body.style.animation =
      "shake .15s infinite";

      rageBox.innerText =
      "CHAOS MODE ACTIVATED";

    }else{

      document.body.style.animation =
      "none";

      rageBox.innerText =
      "CHAOS MODE DISABLED";

    }

  }

});

console.log("$YAO WEBSITE LOADED");
