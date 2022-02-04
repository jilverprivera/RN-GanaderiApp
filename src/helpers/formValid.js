import validator from 'validator';

export const validRegister = email => {
  validator.isEmail(email);
};
