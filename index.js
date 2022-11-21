const wrapper = document.querySelector('.wrapper');
const form = document.querySelectorAll('.form');
const submit = form[0].querySelector('input[type="submit"]');

function getDataFromForm(e) {
    e.preventDefault();
    var formData = new FormData(form[0]);
    alert(formData.get('nameField') + ' - ' + formData.get('emailField') +
        ' - ' + formData.get('passwordField'));

}

document.addEventListener('DOMContentLoaded', function () {
    submit.addEventListener('click', getDataFromForm, false)
}, false);