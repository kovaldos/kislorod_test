
const baseSuccessCallback = (event) => {
  event.preventDefault();

  const form = event.target.closest('form');
  if (!form) {
    return;
  }

  const formData = new FormData(form);
  const data = {};

  formData.forEach((value, key) => {
    if (data[key]) {
      data[key] = [].concat(data[key], value);
    } else {
      data[key] = value;
    }
  });

  console.log('🚀 Данные формы:', data);

  const formContainer = form.closest('.reviews-form');
  if (!formContainer) {
    return;
  }

  const thanks = document.querySelector('.reviews-form__thanks');
  thanks.classList.remove('reviews-form__thanks--is-hidden');
  setTimeout(() => {
    thanks.classList.add('reviews-form__thanks--is-hidden');
  }, 3500);
};


const baseErrorCallback = (event) => {
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
};

export const callbacks = {
  base: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 3500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
