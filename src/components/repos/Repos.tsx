import React from 'react';

import { useSelector } from 'react-redux';

import style from 'components/userPage/UserPage.module.scss';
import { RootState } from 'redux/store';
import { Repo, User } from 'types/types';

export const Repos = () => {
  const user = useSelector<RootState, User>(state => state.userReducer.user);
  const repos = useSelector<RootState, Repo[]>(state => state.userReducer.repos);
  return (
    <div className={style.repo}>
      <h1 className={style.title}>Repositories({user.public_repos})</h1>

      {repos.map(el => (
        <div className={style.elem} key={el.id}>
          <a href={el.html_url} target="blank" className={style.repoName}>
            {el.name}
          </a>
          <p className={style.desc}>{el.description}</p>
        </div>
      ))}
    </div>
  );
};
