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
