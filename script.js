let startTime = null;

const textInput = document.getElementById("textInput");

textInput.addEventListener("focus", () => {
  if (!startTime) {
    startTime = new Date();
  }
});

function calculateSpeed() {
  if (!startTime) {
    return;
  }

  const endTime = new Date();
  const totalTime = (endTime - startTime) / 1000;
  const text = textInput.value.trim();
  const words = text.split(/\s+/).length;
  const wpm = Math.round((words / totalTime) * 60);

  document.getElementById("result").innerText =
    "Your typing speed is " + wpm + " words per minute.";
}
