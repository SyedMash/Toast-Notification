const toastBox = document.querySelector("#toastBox") as HTMLDivElement;

let success = "✅ Success";
let error = "❌ Error";
let invalid = "❗ Invalid";

function showToast(msg: string): void {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("Error")) {
    toast.classList.add("error");
  } else if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 5000);
}
