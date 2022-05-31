import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import style from './UserPage.module.scss';

import { EmptyPage } from 'components/emptyPage/EmptyPage';
import { ErrorPage } from 'components/errorPage/ErrorPage';
import { Pagination } from 'components/pagination/Pagination';
import { Repos } from 'components/repos/Repos';
import { Spinner } from 'components/spinner/Spinner';
import group from 'mainStyles/svg/group_24px.svg';
import person from 'mainStyles/svg/person_24px.svg';
import { RootState } from 'redux/store';
import { getRepositories, getUser } from 'redux/userReducer';
import { User } from 'types';

export const UserPage = () => {
  const user = useSelector<RootState, User>(state => state.userReducer.user);
  const error = useSelector<RootState, string>(state => state.userReducer.error);
  const loading = useSelector<RootState, boolean>(state => state.userReducer.loading);
  const dispatch = useDispatch();
  const { userName } = useParams();
  const currentPage = 1;
  useEffect(() => {
    dispatch(getUser(userName!));
    dispatch(getRepositories(userName!, currentPage));
  }, []);

  if (error) {
    return <ErrorPage />;
  }
  return (
    <div>
      {loading ? (
        <Spinner />
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
            {!user.public_repos ? <EmptyPage /> : <Repos />}
          </div>
          <Pagination />
        </div>
      )}
    </div>
  );
};
