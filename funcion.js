const campoEmail = document.getElementById('correo');
const openModal = document.querySelector('.boton_1');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.boton_2');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    const email = campoEmail.value;
    if (!validarEmail(email)) {
      alert("Valid email requiered");
    } else {
      modal.classList.add('modal_aparecer');
    }
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal_aparecer');
});
function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}