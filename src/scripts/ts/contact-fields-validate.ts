const form = document.querySelector<HTMLFormElement>('.form');

const subjectValidate = (value: string): boolean => {
  const regexp = /^.{1,20}$/;
  return regexp.test(value);
};
const nameValidate = (value: string): boolean => {
  const regexp = /^[A-Za-z\s]+$/;
  return regexp.test(value);
};
const phoneValidate = (value: string): boolean => {
  const regexp = /^\+\d\s\d{6}-\d{2}-\d{2}$/;
  return regexp.test(value);
};

const phoneMask = (event: Event): void => {
  const target = <HTMLInputElement>event.target
  const phoneNumberTrim = target.value.replace(/[^\d+ ]/g, '');
  const correctPhoneNumber = phoneNumberTrim.replace(/(\d{6})(\d{2})(\d{2})/, '$1-$2-$3');
  target.value = correctPhoneNumber;
};
const nameMask = (event: Event): void => {
  const target = <HTMLInputElement>event.target;
  target.value = target.value.replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const isFormValid = (): boolean => {
  if (!form) return false;
  const fields = Array.from(form.querySelectorAll<HTMLInputElement>('.form__field-wrapper .field'));
  const result = fields.every((field) => !field.parentElement?.matches('.form__field-wrapper--error') && field.value !== '');
  return result;
};

interface dataForm {
  selector: string;
  mask?: (event: Event) => void;
  validate: (value: string) => boolean;
  errorMessage: string;
}

const formData: dataForm[] = [
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
  if (!form) return;
  const fieldWrapper = form.querySelector<HTMLDivElement>(`[data-field=${data.selector}]`);
  const field = fieldWrapper?.querySelector<HTMLInputElement>('.field');
  const error = document.createElement('p');

  data.selector !== 'subject' ? field?.addEventListener('input', (event) => data.mask?.(event)) : null;
  data.selector === 'phone' ? field?.addEventListener('focus', (event) => (event.target as HTMLInputElement).value = '+7 ') : null;

  field?.addEventListener('blur', (event) => {
    const target = <HTMLInputElement>event.target;
    const fieldValue = target.value;
    if (!fieldValue) return;
    
    if (fieldValue === '') {
      fieldWrapper?.classList.add('form__field-wrapper--error');
      fieldWrapper?.append(error);
      error.textContent = 'Required field!';
    }
    else if (!data.validate(fieldValue)) {
      fieldWrapper?.classList.add('form__field-wrapper--error');
      fieldWrapper?.append(error);
      error.textContent = data.errorMessage;
    } else {
      fieldWrapper?.classList.remove('form__field-wrapper--error');
      fieldWrapper?.contains(error) ? fieldWrapper.querySelector('p')?.remove() : null;
    }

    const formButton = form.querySelector('.button');
    isFormValid() ? formButton?.removeAttribute('disabled') : formButton?.setAttribute('disabled', 'true');
  })
});

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset() 
  });
};
