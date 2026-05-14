Hello big-yogurt-slinger-master — next update should be `script.js`.

Right now the site LOOKS good, but this is where we make it feel alive:

* floating rage quotes
* random screen flickers
* popup chaos
* copy contract button
* keyboard easter eggs
* meme explosions
* old internet energy

Replace your ENTIRE `script.js` with this:

```javascript
const glow = document.querySelector(".cursor-glow");
const rageButton = document.getElementById("rageButton");
const rageBox = document.getElementById("rageBox");
const copyButton = document.getElementById("copyContract");
const contract = document.getElementById("contract");
const copyMessage = document.getElementById("copyMessage");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");


// CURSOR GLOW

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX - 12 + "px";
  glow.style.top = e.clientY - 12 + "px";

});


// RAGE QUOTES

const rageQuotes = [

  "Bitch Please.",
  "YAO MING NEVER LEFT.",
  "The timeline is cooked.",
  "This website smells like old YouTube.",
  "Achievement unlocked: terminally online.",
  "Powered by disrespect.",
  "Delete this now.",
  "Cool story bro.",
  "Rage comics are so back.",
  "Certified internet veteran.",
  "You just activated bitch please mode.",
  "This is emotional damage.",
  "The internet peaked in 2009.",
  "Memes were better when they looked terrible.",
  "Bro entered the forbidden website.",
  "Vintage internet detected.",
  "FFFFFFFFFFFFFFFFFFFFUUUUUUUUUUUU",
  "YAO ENERGY INCREASING",
  "Welcome to the trenches.",
  "The meme portal is unstable."

];


// BUTTON CLICK

rageButton.addEventListener("click", () => {

  const randomQuote =
    rageQuotes[Math.floor(Math.random() * rageQuotes.length)];

  rageBox.innerText = randomQuote;

  rageBox.animate(
    [
      {
        transform:"scale(.85) rotate(-2deg)"
      },

      {
        transform:"scale(1.08) rotate(2deg)"
      },

      {
        transform:"scale(1) rotate(0)"
      }

    ],

    {
      duration:350
    }

  );

  spawnFloatingText(randomQuote);

  randomPopup();

});


// FLOATING TEXT

function spawnFloatingText(text){

  const item = document.createElement("div");

  item.innerText = text;

  item.style.position = "fixed";

  item.style.left =
    Math.random() * window.innerWidth + "px";

  item.style.top =
    Math.random() * window.innerHeight + "px";

  item.style.color = "#ffcc00";

  item.style.fontWeight = "900";

  item.style.fontSize = "22px";

  item.style.zIndex = "997";

  item.style.pointerEvents = "none";

  item.style.textShadow = "3px 3px 0 black";

  document.body.appendChild(item);

  item.animate(

    [

      {
        transform:"translateY(0) scale(1)",
        opacity:1
      },

      {
        transform:"translateY(-80px) scale(1.5)",
        opacity:0
      }

    ],

    {
      duration:1200
    }

  );

  setTimeout(() => {

    item.remove();

  },1200);

}


// RANDOM POPUPS

function randomPopup(){

  if(Math.random() > 0.5){

    popup.style.display = "block";

    popup.animate(

      [

        {
          transform:"scale(0)"
        },

        {
          transform:"scale(1)"
        }

      ],

      {
        duration:300
      }

    );

  }

}


// CLOSE POPUP

closePopup.addEventListener("click", () => {

  popup.style.display = "none";

});


// COPY CONTRACT

copyButton.addEventListener("click", async () => {

  try{

    await navigator.clipboard.writeText(contract.innerText);

    copyMessage.innerText =
      "Contract copied. Bitch Please.";

    spawnFloatingText("COPIED");

  }

  catch{

    copyMessage.innerText =
      "Copy failed. Highlight manually.";

  }

});


// RANDOM SCREEN FLICKER

setInterval(() => {

  if(Math.random() > 0.93){

    document.body.style.filter =
      "brightness(1.25) contrast(1.15)";

    setTimeout(() => {

      document.body.style.filter =
        "brightness(1) contrast(1)";

    },100);

  }

},1700);


// CHAOS MODE

let chaos = false;

document.addEventListener("keydown", (e) => {

  if(e.key.toLowerCase() === "y"){

    chaos = !chaos;

    if(chaos){

      document.body.style.animation =
        "shake .15s infinite";

      document.body.style.background =
        "#1a0000";

      rageBox.innerText =
        "CHAOS MODE ACTIVATED";

      spawnFloatingText("CHAOS");

      document.title =
        "⚠️ BITCH PLEASE ⚠️";

    }

    else{

      document.body.style.animation =
        "none";

      document.body.style.background =
        "#050505";

      rageBox.innerText =
        "CHAOS MODE DISABLED";

      document.title =
        "$YAO | Bitch Please";

    }

  }

});


// RANDOM TITLE CHANGES

setInterval(() => {

  if(Math.random() > 0.8){

    const titles = [

      "$YAO | Bitch Please",
      "YAO ENERGY DETECTED",
      "Vintage Internet Restored",
      "Rage Comic Protocol",
      "⚠️ MEME WARNING ⚠️"

    ];

    document.title =
      titles[Math.floor(Math.random() * titles.length)];

  }

},4000);


// AUTO RANDOM FLOATING MEMES

setInterval(() => {

  if(Math.random() > 0.7){

    const randomQuote =
      rageQuotes[Math.floor(Math.random() * rageQuotes.length)];

    spawnFloatingText(randomQuote);

  }

},5000);


console.log("$YAO WEBSITE LOADED");
```

After that:

1. Commit changes
2. Refresh your website
3. Press the `Y` key 😭
