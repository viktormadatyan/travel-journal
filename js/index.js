let menubtn = document.getElementById ('menubtn');
let navpanel = document.getElementById ('navpanel');

menubtn.addEventListener('click', event => {
    navpanel.classList.toggle('hidden');
    menubtn.classList.toggle('close');
});