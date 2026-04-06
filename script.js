function startBuild() {
  let logs = document.getElementById("logs");
  let status = document.getElementById("status");

  logs.innerHTML = "";
  status.innerHTML = "Status: Running...";

  let steps = [
    "Cloning repo...",
    "Installing...",
    "Testing...",
    "Building...",
    "Deploying..."
  ];

  let i = 0;

  let interval = setInterval(() => {
    if (i < steps.length) {
      logs.innerHTML += steps[i] + "\n";
      i++;
    } else {
      clearInterval(interval);
      status.innerHTML = "✅ Success";
      logs.innerHTML += "Build finished!";
    }
  }, 1000);
}
