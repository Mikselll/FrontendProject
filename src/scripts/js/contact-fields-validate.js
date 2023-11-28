"use strict";
const form = document.querySelector('.form');
const subjectValidate = (value) => {
    const regexp = /^.{1,20}$/;
    return regexp.test(value);
};
const nameValidate = (value) => {
    const regexp = /^[A-Za-z\s]+$/;
    return regexp.test(value);
};
const phoneValidate = (value) => {
    const regexp = /^\+\d\s\d{6}-\d{2}-\d{2}$/;
    return regexp.test(value);
};
const phoneMask = (event) => {
    const target = event.target;
    const phoneNumberTrim = target.value.replace(/[^\d+ ]/g, '');
    const correctPhoneNumber = phoneNumberTrim.replace(/(\d{6})(\d{2})(\d{2})/, '$1-$2-$3');
    target.value = correctPhoneNumber;
};
const nameMask = (event) => {
    const target = event.target;
    target.value = target.value.replace(/\b\w/g, (letter) => letter.toUpperCase());
};
const isFormValid = () => {
    if (!form)
        return false;
    const fields = Array.from(form.querySelectorAll('.form__field-wrapper .field'));
    const result = fields.every((field) => { var _a; return !((_a = field.parentElement) === null || _a === void 0 ? void 0 : _a.matches('.form__field-wrapper--error')) && field.value !== ''; });
    return result;
};
const formData = [
    {
        selector: 'subject',
        validate: subjectValidate,
        errorMessage: 'Field must contain no more than 20 characters',
    },
    {
        selector: 'name',
        mask: nameMask,
        validate: nameValidate,
        errorMessage: 'Field must contain only letters',
    },
    {
        selector: 'phone',
        mask: phoneMask,
        validate: phoneValidate,
        errorMessage: 'Incorrect number',
    },
];
formData.forEach((data) => {
    if (!form)
        return;
    const fieldWrapper = form.querySelector(`[data-field=${data.selector}]`);
    const field = fieldWrapper === null || fieldWrapper === void 0 ? void 0 : fieldWrapper.querySelector('.field');
    const error = document.createElement('p');
    data.selector !== 'subject' ? field === null || field === void 0 ? void 0 : field.addEventListener('input', (event) => { var _a; return (_a = data.mask) === null || _a === void 0 ? void 0 : _a.call(data, event); }) : null;
    data.selector === 'phone' ? field === null || field === void 0 ? void 0 : field.addEventListener('focus', (event) => event.target.value = '+7 ') : null;
    field === null || field === void 0 ? void 0 : field.addEventListener('blur', (event) => {
        var _a;
        const target = event.target;
        const fieldValue = target === null || target === void 0 ? void 0 : target.value;
        if (!fieldValue)
            return;
        if (fieldValue === '') {
            fieldWrapper === null || fieldWrapper === void 0 ? void 0 : fieldWrapper.classList.add('form__field-wrapper--error');
            fieldWrapper === null || fieldWrapper === void 0 ? void 0 : fieldWrapper.append(error);
            error.textContent = 'Required field!';
        }
        else if (!data.validate(fieldValue)) {
            fieldWrapper === null || fieldWrapper === void 0 ? void 0 : fieldWrapper.classList.add('form__field-wrapper--error');
            fieldWrapper === null || fieldWrapper === void 0 ? void 0 : fieldWrapper.append(error);
            error.textContent = data.errorMessage;
        }
        else {
            fieldWrapper === null || fieldWrapper === void 0 ? void 0 : fieldWrapper.classList.remove('form__field-wrapper--error');
            (fieldWrapper === null || fieldWrapper === void 0 ? void 0 : fieldWrapper.contains(error)) ? (_a = fieldWrapper.querySelector('p')) === null || _a === void 0 ? void 0 : _a.remove() : null;
        }
        const formButton = form.querySelector('.button');
        isFormValid() ? formButton === null || formButton === void 0 ? void 0 : formButton.removeAttribute('disabled') : formButton === null || formButton === void 0 ? void 0 : formButton.setAttribute('disabled', 'true');
    });
});
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.reset();
    });
}
;
