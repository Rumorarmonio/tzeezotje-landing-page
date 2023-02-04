console.log('Init!');

const form = document.querySelector('.modal__form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.modal__form');

validation
    .addField('.input-name', [
        {
            rule: 'minLength',
            value: 3,
        },
        {
            rule: 'maxLength',
            value: 30,
        },
        {
            rule: 'required',
            value: true,
            errorMessage: 'Enter your name!'
        }
    ])
    .addField('.input-email', [
        {
            rule: 'required',
            value: true,
            errorMessage: 'Email is required!',
        },
        {
            rule: 'email',
            value: true,
            errorMessage: 'Enter a valid email address!',
        },
    ])
    .addField('.input-tel', [
        {
            rule: 'required',
            value: true,
            errorMessage: 'Phone is required!',
        },
        {
            rule: 'function',
            validator: function () {
                const phone = telSelector.inputmask.unmaskedvalue();
                return phone.length === 10;
            },
            errorMessage: 'Enter a valid phone number!',
        },
    ])
    .addField('.input-date', [
        {
            rule: 'required',
            value: true,
            errorMessage: 'Date is required!',
        }
    ])
    .onSuccess((event) => {
        console.log('Validation passes and form submitted', event);

        let formData = new FormData(event.target);

        console.log(...formData);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Sent!');
                }
            }
        }

        xhr.open('POST', 'sendmail.php', true);
        xhr.send(formData);

        event.target.reset();
    });
