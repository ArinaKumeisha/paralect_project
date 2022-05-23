import React from 'react';

import iconSearch from '../../mainStyles/svg/image.svg';

import style from 'components/MainPage/MainPage.module.scss';

export const MainPage = () => (
  <div className={style.block}>
    <img src={iconSearch} alt="search" className={style.searchIcon} />
    <h1 className={style.record}> Start with searching a GitHub user</h1>
  </div>
);
