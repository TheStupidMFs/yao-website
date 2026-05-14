document.addEventListener("DOMContentLoaded", () => {
  const rageButton = document.getElementById("rageButton");
  const rageBox = document.getElementById("rageBox");
  const copyButton = document.getElementById("copyContract");
  const contract = document.getElementById("contract");
  const copyMessage = document.getElementById("copyMessage");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");

  const rageQuotes = [
    "Bitch Please.",
    "Yao Ming never left.",
    "CTO energy detected.",
    "The meme has been taken over by the people.",
    "Rage comics are back.",
    "The timeline is cooked.",
    "This website smells like 2009.",
    "Powered by community disrespect.",
    "Welcome to the YAO trenches.",
    "The internet peaked with this face.",
    "Community takeover activated.",
    "Old internet. New chain. Same face.",
    "The meme escaped containment.",
    "You are now spiritually online.",
    "Certified Bitch Please behavior."
  ];

  function spawnFloatingText(text){
    const item = document.createElement("div");

    item.innerText = text;
    item.style.position = "fixed";
    item.style.left = Math.random() * window.innerWidth + "px";
    item.style.top = Math.random() * window.innerHeight + "px";
    item.style.color = "#000";
    item.style.background = "#ffcc00";
    item.style.border = "4px solid #000";
    item.style.padding = "8px 12px";
    item.style.fontWeight = "900";
    item.style.fontSize = "18px";
    item.style.zIndex = "9999";
    item.style.pointerEvents = "none";
    item.style.boxShadow = "6px 6px 0 #000";

    document.body.appendChild(item);

    item.animate(
      [
        { transform:"translateY(0) scale(1)", opacity:1 },
        { transform:"translateY(-90px) scale(1.25) rotate(-4deg)", opacity:0 }
      ],
      { duration:1300 }
    );

    setTimeout(() => {
      item.remove();
    },1300);
  }

  function activateRage(){
    const randomQuote = rageQuotes[Math.floor(Math.random() * rageQuotes.length)];

    rageBox.innerText = randomQuote;

    rageBox.animate(
      [
        { transform:"scale(.85) rotate(-2deg)" },
        { transform:"scale(1.08) rotate(2deg)" },
        { transform:"scale(1) rotate(0)" }
      ],
      { duration:350 }
    );

    spawnFloatingText(randomQuote);

    if(popup){
      popup.style.display = "block";
    }
  }

  if(rageButton){
    rageButton.addEventListener("click", activateRage);
  }

  if(closePopup){
    closePopup.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }

  if(copyButton){
    copyButton.addEventListener("click", async () => {
      try{
        await navigator.clipboard.writeText(contract.innerText);
        copyMessage.innerText = "Contract copied. Bitch Please.";
        spawnFloatingText("COPIED");
      }catch{
        copyMessage.innerText = "Copy failed. Highlight manually.";
      }
    });
  }

  let chaos = false;

  document.addEventListener("keydown", (e) => {
    if(e.key.toLowerCase() === "y"){
      chaos = !chaos;

      if(chaos){
        document.body.classList.add("chaos-mode");
        rageBox.innerText = "CHAOS MODE ACTIVATED";
        spawnFloatingText("CTO CHAOS");
        document.title = "⚠️ BITCH PLEASE CTO ⚠️";
      }else{
        document.body.classList.remove("chaos-mode");
        rageBox.innerText = "CHAOS MODE DISABLED";
        document.title = "$YAO | Bitch Please CTO";
      }
    }
  });

  setInterval(() => {
    if(Math.random() > 0.94){
      document.body.style.filter = "contrast(1.08) brightness(1.04)";

      setTimeout(() => {
        document.body.style.filter = "contrast(1) brightness(1)";
      },100);
    }
  },1800);

  console.log("YAO SCRIPT IS WORKING");
});
