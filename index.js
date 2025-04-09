document.getElementById("myForm")
    .addEventListener("submit", function(e) {
    e.preventDefault();

    const campoA = Number (document.getElementById('campoA').value);
    const campoB = Number (document.getElementById('campoB').value);

    if (campoB > campoA) {
        alert("Formulário válido e enviado com sucesso!");
    } else {
        alert("Formulário inválido! Campo B deve ser maior que o Campo A.");
    }
});
