export class DisplayError {
  constructor(className, message) {
    this.className = className;
    this.message = message;
  }

  displayError() {
    const element = document.querySelector(`.${this.className}`);

    element.style.display = "block";
    element.innerHTML = "";

    const messageElement = document.createElement("p");
    messageElement.textContent = this.message;
    element.appendChild(messageElement);
  }
}
