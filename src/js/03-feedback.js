// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.
import throttle from 'lodash.throttle';

const myForm = document.querySelector('.feedback-form');
// console.log(myForm)

myForm.addEventListener('input', throttle(e => {
  const {
    elements: { email, message },
  } = e.currentTarget;
  const userData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}), 500);

myForm.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.getItem('feedback-form-state');

  event.currentTarget.reset();
  localStorage.clear();
});

const addDatatoForm = () => {
  const storage = localStorage.getItem('feedback-form-state');
  const parseStorageData = JSON.parse(storage);

  if (parseStorageData !== null) {
    myForm.elements.email.value = parseStorageData.email;
    myForm.elements.message.value = parseStorageData.message;
  }
};
addDatatoForm();
