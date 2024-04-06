const formElm = document.querySelector("#email");
const messageElm = document.querySelector("#message");
console.log(formElm, message);

formElm.addEventListener("sumbit", (event) => {
  event.preventDefault();
  const mailInput = document.querySelector("#mail");
  const mail = mailInput.value;
  messageElm.textContent = `<p>Děkujeme za váš zájem ${mail}</p>
  `
});


