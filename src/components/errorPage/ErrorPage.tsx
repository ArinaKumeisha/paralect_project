import React from 'react';

import s from '../MainPage/MainPage.module.scss';

import style from './ErorPage.module.scss';

import found from 'mainStyles/svg/found.svg';

export const ErrorPage = () => (
  <div className={s.block}>
    <div className={style.img}>
      <img src={found} alt="not found" />
    </div>
    <h1 className={style.errorMessage}>User not found</h1>
  </div>
);
