/*Данные для обращения к серверу */
const token = '1d384fcf-35e6-4df7-b215-c6433e7c1bdc';
const cohortId = 'cohort-65';

export const apiConfig = {
  baseUrl: `https://mesto.nomoreparties.co/v1/${cohortId}`,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
};