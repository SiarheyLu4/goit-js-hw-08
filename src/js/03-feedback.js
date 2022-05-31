import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(e) {
    e.preventDefault();

    console.log('Отправляем форму:')
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
 }


function onEmailInput(e) {
    const email = e.target.value;
    localStorage.setItem(STORAGE_KEY, email)

    console.log('email:', email);
 }


function onTextareaInput(e) { 
    const message = e.target.value;
    localStorage.setItem(STORAGE_KEY, message)

    console.log('message:', message);
}


function populateTextarea() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);

    if (saveMessage) {
        console.log(saveMessage);
        refs.textarea.value = saveMessage;
    }
}

