import cn from 'classnames';
import { useFormik } from 'formik';
import * as yup from 'yup';

const ContactSection = () => {
  const validationSchema = yup.object({
    subject: yup.string().max(20, 'The field must contain no more than 20 characters').required('Required field!'),
    name: yup.string().matches(/^[A-Za-z\s]+$/, 'The field must contain only latin characters').required('Required field!'),
    phone: yup.string().matches(/^\+\d\s\d{6}-\d{2}-\d{2}$/, 'The field must be in the format +7 ___-__-__').required('Required field!'),
  });

  const handleNameMask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const correctName = event.target.value.replace(/\b\w/g, (letter) => letter.toUpperCase());
    formik.setFieldValue('name', correctName);
  };
  const handlePhoneMask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumberTrim = event.target.value.replace(/[^\d+ ]/g, '');
    const correctPhoneNumber = phoneNumberTrim.replace(/(\d{6})(\d{2})(\d{2})/, '$1-$2-$3');
    formik.setFieldValue('phone', correctPhoneNumber);
  };
  const handlePhoneFocus = () => !formik.values.phone.startsWith('+7 ') ? formik.setFieldValue('phone', '+7 ') : null;

  const formik = useFormik({
    initialValues: {
      subject: '',
      name: '',
      phone: '',
      description: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(`(subject: ${values.subject}, name: ${values.name}, phone: ${values.phone}, description: ${values.description})`);
      formik.resetForm();
    },
  });

  const formSubjectClass = cn('form__field-wrapper', {
    'form__field-wrapper--error': formik.touched.subject && formik.errors.subject,
  });
  const formNameClass = cn('form__field-wrapper', {
    'form__field-wrapper--error': formik.touched.name && formik.errors.name,
  });
  const formPhoneClass = cn('form__field-wrapper', {
    'form__field-wrapper--error': formik.touched.phone && formik.errors.phone,
  });

  return (
    <section id="contact" className="content-container">
      <div className="content">
        <header className="content__header content__header--gray">
          <h2>
            Contact Capibarara
          </h2>
          <p className="subtitle-2">
            Do you wanna chat with Capibarara? Then send the request!
          </p>
        </header>
        <form className="form card" onSubmit={formik.handleSubmit}>
          <div className={formSubjectClass}>
            <label htmlFor="subject" className="field-label">
              Subject*
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="field body-2"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <p>{formik.errors.subject}</p>
            ) : null}
          </div>
          <div className={formNameClass}>
            <label htmlFor="name" className="field-label">
              Name*
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="capybara fan :)"
              className="field body-2"
              value={formik.values.name}
              onChange={(event) => {
                formik.handleChange(event);
                handleNameMask(event);
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <p>{formik.errors.name}</p>
            ) : null}
          </div>
          <div className={formPhoneClass}>
            <label htmlFor="phone" className="field-label">
              Phone*
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+7 ______-__-__"
              className="field body-2"
              value={formik.values.phone}
              onChange={(event) => {
                formik.handleChange(event);
                handlePhoneMask(event);
              }}
              onBlur={formik.handleBlur}
              onFocus={handlePhoneFocus}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <p>{formik.errors.phone}</p>
            ) : null}
          </div>
          <div className="form__field-wrapper">
            <label htmlFor="description" className="field-label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="body-2"
              value={formik.values.description}
              onChange={formik.handleChange}
            >
            </textarea>
          </div>
          <button
            type="submit"
            className="button button--contact"
            disabled={!formik.dirty || !formik.isValid}
          >
            Send It!
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
