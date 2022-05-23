import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import style from './UserPage.module.scss';

import { ErrorPage } from 'components/errorPage/ErrorPage';
import { Pagination } from 'components/pagination/Pagination';
import group from 'mainStyles/svg/group_24px.svg';
import person from 'mainStyles/svg/person_24px.svg';
import { RootState } from 'redux/store';
import { User } from 'types';
import { Repo } from 'types/types';

export const UserPage = () => {
  const user = useSelector<RootState, User>(state => state.userReducer.user);
  const repos = useSelector<RootState, Repo[]>(state => state.userReducer.repos);
  const error = useSelector<RootState, string>(state => state.userReducer.error);

  return (
    <div>
      {error ? (
        <ErrorPage />
      ) : (
        <div className={style.container}>
          <div className={style.block}>
            <div className={style.userInfo}>
              <img className={style.userPhoto} src={user.avatar_url} alt="userPhoto" />
              <h1 className={style.name}>{user.name}</h1>
              <a href={user.html_url} target="blank" className={style.nickName}>
                {user.login}
              </a>
              <div className={style.follow}>
                <img src={group} alt="group" />
                <div className={style.followers}>{user.followers} followers</div>
                <img src={person} alt="person" />
                <div className={style.following}>{user.following} following</div>
              </div>
            </div>

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
          </div>
          <Pagination />
        </div>
      )}
    </div>
  );
};
