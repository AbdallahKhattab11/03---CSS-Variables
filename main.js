
const inputs = document.querySelectorAll('input');

function handleUpdate() {
  if (this.name === "base-color") {
    document.documentElement.style.setProperty(`--${this.name}`, this.value)
  }else {
    document.documentElement.style.setProperty(`--${this.name}`,`${this.value}px`);
  }
}

inputs.forEach(input => {
  input.addEventListener('input', handleUpdate);
})
