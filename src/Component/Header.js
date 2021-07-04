import React from 'react';
import SWCombobox from './SWCombobox';
import SWInput from './SWInput';

function Header() {
  return (
    <header className="header">
      <SWInput />
      <SWCombobox />
    </header>
  );
}

export default Header;
