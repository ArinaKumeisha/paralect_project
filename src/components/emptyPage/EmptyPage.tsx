import React from 'react';

import style from './EmptyPage.module.scss';

import emptyRepos from 'mainStyles/svg/empty.svg';

export const EmptyPage = () => (
  <div className={style.block}>
    <div className={style.wrapper}>
      <img src={emptyRepos} alt="emptyRepo" className={style.img} />
      <h2 className={style.title}>Repository list is empty</h2>
    </div>
  </div>
);
