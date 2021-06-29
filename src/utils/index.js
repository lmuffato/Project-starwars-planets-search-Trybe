import { createElement as e } from 'react';

export const first = (code) => Promise.resolve(code);
export const parseJSON = (APIresponse) => APIresponse.json();
const htmlElement = (elem) => (
  children = null, attributes = { key: elem },
) => e(elem, attributes, children);
export const div = htmlElement('div');
export const table = htmlElement('table');
export const thead = htmlElement('thead');
export const tr = htmlElement('tr');
// export const th = htmlElement('th');
export const th = (elem) => e('th', { key: `th-${elem}` }, elem);
export const tbody = htmlElement('tbody');
export const td = htmlElement('td');
const label = (children, attributes = null) => e(
  'label', { ...attributes, key: `labelfor-${children}` }, ...children,
);
const select = htmlElement('select');
const option = (key) => e('option', { key }, `${key}`);
export const selector = (labelText, selectData, optionsData) => label(
  [
    labelText,
    select(
      optionsData.map(option),
      {
        ...selectData,
        'data-testid': selectData.name,
      },
    ),
  ],
);
export const input = htmlElement('input');
export const labelledInput = (labelText, inputData, inputName) => label([
  labelText,
  input(null, { ...inputData, name: inputName }),
],
{ htmlFor: inputName });
export const labelledRadio = (radioName, buttonsData) => div([
  buttonsData.map(({ labelText, name, onChange, checked }) => label([
    labelText,
    input(
      null, {
        type: 'radio',
        onChange,
        checked,
        id: name,
        value: name,
        name: radioName,
        key: `radio-${name}`,
        'data-testid': name },
    ),
  ],
  { htmlFor: name, key: `labelfor-${name}` })),
], { key: `radio=${radioName}-container`,
  'data-testid': radioName });
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
