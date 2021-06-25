import { createElement as e } from 'react';

export const first = (code) => Promise.resolve(code);
export const parseJSON = (APIresponse) => APIresponse.json();
const htmlElement = (elem) => (
  children = null, attributes = null,
) => e(elem, attributes, children);
export const div = htmlElement('div');
export const table = htmlElement('table');
export const thead = htmlElement('thead');
export const tr = htmlElement('tr');
export const th = htmlElement('th');
export const tbody = htmlElement('tbody');
export const td = htmlElement('td');
export const label = (children, attributes) => e(
  'label', attributes, ...children,
);
export const select = htmlElement('select');
export const option = (key) => e('option', { key }, `${key}`);
export const input = htmlElement('input');
export const labelledInput = (labelText, inputData, inputName) => label([
  labelText,
  input(null, { ...inputData, name: inputName }),
],
{ htmlFor: inputName });
export const button = htmlElement('button');
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
