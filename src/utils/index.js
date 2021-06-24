import { createElement as e } from 'react';

export const parseJSON = (APIresponse) => APIresponse.json();
export const div = (children, attributes = null) => e('div', attributes, children);
export const table = (children, attributes = null) => e('table', attributes, children);
export const thead = (children, attributes = null) => e('thead', attributes, children);
export const tr = (children, attributes = null) => e('tr', attributes, children);
export const th = (children, attributes = null) => e('th', attributes, children);
export const tbody = (children, attributes = null) => e('tbody', attributes, children);
export const td = (children, attributes = null) => e('td', attributes, children);
