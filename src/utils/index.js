import { createElement as e } from 'react';

export const first = (code) => Promise.resolve(code);
export const parseJSON = (APIresponse) => APIresponse.json();
const htmlElement = (elem) => (
  children, attributes = null,
) => e(elem, attributes, children);
export const div = htmlElement('div');
export const table = htmlElement('table');
export const thead = htmlElement('thead');
export const tr = htmlElement('tr');
export const th = htmlElement('th');
export const tbody = htmlElement('tbody');
export const td = htmlElement('td');
export const label = htmlElement('label');
export const input = htmlElement('input');
export const comparisons = ['maior que', 'igual a', 'menor que'];
export const is = (a, comparison, b) => {
  const numA = Number(a);
  const numB = Number(b);
  switch (comparison) {
  case 'maior que':
    return numA > numB;
  case 'menor que':
    return numA < numB;
  default:
    return numA === numB;
  }
};
