import React from 'react';

import style from './Spinner.module.scss';

import spinner from 'mainStyles/svg/VAyR.gif';

export const Spinner = () => (
  <div className={style.container}>
    <img src={spinner} alt="spinner" />
  </div>
);
