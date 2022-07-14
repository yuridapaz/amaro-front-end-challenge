import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { BiArrowBack } from 'react-icons/bi';

const ReturnHeaderButton = () => {
  return (
    <div className='full__header__div'>
      <div className='header__div'>
        <Link to={'/'}>
          <button className='header__button'>
            <BiArrowBack className='header__button__icon' />
            Voltar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReturnHeaderButton;
