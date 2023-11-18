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
  const phoneNumberTrim = event.target.value.replace(/[^\d+ ]/g, '');
  const correctPhoneNumber = phoneNumberTrim.replace(/(\d{6})(\d{2})(\d{2})/, '$1-$2-$3');
  event.target.value = correctPhoneNumber;
};
const nameMask = (event) => {
  event.target.value = event.target.value.replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const isFormValid = () => {
  const fields = Array.from(form.querySelectorAll('.form__field-wrapper .field'));
  const result = fields.every((field) => !field.parentElement.matches('.form__field-wrapper--error') && field.value !== '');
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
  const fieldWrapper = form.querySelector(`[data-field=${data.selector}]`);
  const field = fieldWrapper.querySelector('.field');
  const error = document.createElement('p');

  data.selector !== 'subject' ? field.addEventListener('input', (event) => data.mask(event)) : null;
  data.selector === 'phone' ? field.addEventListener('focus', (event) => event.target.value = '+7 ') : null;

  field.addEventListener('blur', (event) => {
    const fieldValue = event.target.value;
    
    if (fieldValue === '') {
      fieldWrapper.classList.add('form__field-wrapper--error');
      fieldWrapper.append(error);
      error.textContent = 'Required field!';
    }
    else if (!data.validate(fieldValue)) {
      fieldWrapper.classList.add('form__field-wrapper--error');
      fieldWrapper.append(error);
      error.textContent = data.errorMessage;
    } else {
      fieldWrapper.classList.remove('form__field-wrapper--error');
      fieldWrapper.contains(error) ? fieldWrapper.querySelector('p').remove() : null;
    }

    const formButton = form.querySelector('.button');
    isFormValid() ? formButton.disabled = false : formButton.disabled = true;
  })
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset() 
});
