import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

const formData = {};
populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
// refs.input.addEventListener('input', throttle(onEmailInput, 500));
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) { 
    formData[e.target.name] = e.target.value;
    const stringData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, stringData);
    console.log(formData);
};

function onFormSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
 }

// function onEmailInput(e) {
//     const email = e.target.value;
//     localStorage.setItem(STORAGE_KEY, email)

//     console.log('email:', email);
//  }

// function onTextareaInput(e) { 
//     const message = e.target.value;
//     localStorage.setItem(STORAGE_KEY, message)

//     console.log('message:', message);
// }

function populateTextarea() {
    const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (saveMessage) {
        console.log(saveMessage);
        refs.textarea.value = saveMessage['message'] || '';
        refs.input.value = saveMessage['email'] || '';
    }
}

