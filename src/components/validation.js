export function validateUsername(value) {
  let error = '';

  if (!value) return error = 'Введите имя и фамилию';

  return error;
}

export function validatePhoneNumber(value) {
  let error = '';

  if (!value) return error = 'Введите номер телефона';
  if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)) {
    error = 'Вы неверно указали формат номера телефона';
  }

  return error
}

export function validateEmail(value) {
  let error = '';

  if (!value) return error = 'Введите почту';
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }

  return error
}