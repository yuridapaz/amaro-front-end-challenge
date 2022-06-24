import React from 'react';
import './index.css';
import { BiArrowBack } from 'react-icons/bi';

const ReturnHeaderButton = () => {
  return (
    <div className='header__div'>
      <button className='header__button'>
        <BiArrowBack className='header__button__icon' />
        Voltar
      </button>
    </div>
  );
};

export default ReturnHeaderButton;
