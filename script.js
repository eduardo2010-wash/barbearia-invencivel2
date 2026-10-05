// ============================
// MENU MOBILE
// ============================

function toggleMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("active");

}


// ============================
// FECHAR MENU
// ============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("menu")
            .classList.remove("active");

    });

});


// ============================
// FORMULÁRIO
// ============================

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome =
        document.getElementById("nome").value;

    const servico =
        document.getElementById("servico").value;

    const barbeiro =
        document.getElementById("barbeiro").value;

    const data =
        document.getElementById("data").value;

    const horario =
        document.getElementById("horario").value;


    alert(
        "⚡ AGENDAMENTO CONFIRMADO!\n\n" +

        "Cliente: " + nome + "\n" +

        "Serviço: " + servico + "\n" +

        "Barbeiro: " + barbeiro + "\n" +

        "Data: " + data + "\n" +

        "Horário: " + horario
    );


    form.reset();

});


// ============================
// IMPEDIR DATA PASSADA
// ============================

const data = document.getElementById("data");

const hoje = new Date()
    .toISOString()
    .split("T")[0];

data.min = hoje;