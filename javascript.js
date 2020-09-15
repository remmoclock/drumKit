var data = {
  A: { name: "Clap", sound: "sounds/clap.wav" },
  Z: { name: "Hihat", sound: "sounds/hihat.wav" },
  E: { name: "Kick", sound: "sounds/kick.wav" },
  Q: { name: "Hat", sound: "sounds/openhat.wav" },
  S: { name: "Boom", sound: "sounds/boom.wav" },
  D: { name: "Ride", sound: "sounds/ride.wav" },
  W: { name: "Snare", sound: "sounds/snare.wav" },
  X: { name: "Tom", sound: "sounds/tom.wav" },
  C: { name: "Tink", sound: "sounds/tink.wav" },
}

var drumkit = document.getElementById("drumkit")

function construct() {
  for (var key in data) {
    var drumEl = document.createElement("div")
    drumEl.classList.add("drum")
    var h2 = document.createElement("h2")
    h2.textContent = key
    var span = document.createElement("span")
    span.textContent = data[key].name

    drumEl.appendChild(h2)
    drumEl.appendChild(span)
    drumkit.appendChild(drumEl)

    data[key].el = drumEl

    drumEl.addEventListener("click", function (event) {
      var key = event.currentTarget.querySelector("h2").textContent
      playDrum(key)
    })
  }
}

function handleKeyEvents(event) {
  playDrum(event.key.toUpperCase())
}

function removeAnimation(event) {
  event.currentTarget.style.WebkitAnimation = "none"
  event.currentTarget.style.animation = "none"
}

function playDrum(key) {
  var audio = new Audio()
  audio.src = data[key].sound
  audio.play()

  data[key].el.style.WebkitAnimation = "drum-animation 0.3s"
  data[key].el.style.animation = "drum-animation 0.3s"
  data[key].el.addEventListener("webkitAnimationEnd", removeAnimation)
  data[key].el.addEventListener("animationend", removeAnimation)
}

construct()
window.addEventListener("keydown", handleKeyEvents)