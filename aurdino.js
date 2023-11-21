const { SerialPort } = require("serialport");
const gTTS = require("gtts");
const sound = require("sound-play");
const path = require("path");
const port = new SerialPort({ path: "COM3", baudRate: 9600 });
const dialogues = [
  "Dive into the future of computing, right here at our Computer Science Exhibition!",
  "Step into the world of innovation and discovery at our Computer Science Exhibition!",
  "Explore the cutting-edge of technology at our Computer Science Exhibition!",
  "Dive into the digital age at our Computer Science Exhibition!",
  "Experience the power of computing at our Computer Science Exhibition!",
  "Unleash your curiosity at our Computer Science Exhibition!",
  "Join us on a journey through the evolution of computing at our Computer Science Exhibition!",
  "Discover the magic of binary at our Computer Science Exhibition!",
  "Welcome to a world where technology meets creativity at our Computer Science Exhibition!",
  "Embrace the wonders of computer science at our Computer Science Exhibition!",
];
let spoken = false;
console.log("Started")
function speak() {
  const text =
    "Good Afternoon. I am Sophia, a humanoid robot. Welcome to S D Public School, Jagaadhri. " +
    dialogues[Math.floor(Math.random() * 10)];
  var gtts = new gTTS(text, "en");
  gtts.save("./audio.mp3", function (err, result) {
    const file = path.join(__dirname, "audio.mp3");
    sound.play(file)
  });
}
port.on("data", function (data) {
  const signal = data.toString();
  if (signal == 0 && !spoken) {
    speak();
    spoken = true;
    setTimeout(() => {
      spoken = false;
    }, 20000);
  } else return;
});

//Package.json
// {
//   "dependencies": {
//     "gtts": "^0.2.1",
//     "serialport": "^12.0.0",
//     "sound-play": "^1.1.0",
//     "talkify-tts": "^4.0.0"
//   }
// }
