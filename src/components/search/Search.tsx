import React, { ChangeEvent } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './Search.module.scss';

import personIcon from 'mainStyles/svg/personIcon.svg';
import { getRepositories, getUser } from 'redux/userReducer';

type Props = {
  name: string;
  setName: (value: string) => void;
};
export const Search = ({ name, setName }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const getUserHandler = () => {
    if (name) {
      dispatch(getUser(name));
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      dispatch(getRepositories(name, 1));
      navigate(`/user/${name}`);
    }
  };

  const onClickHandler = (e: any) => {
    if (e.key === 'Enter') getUserHandler();
  };

  return (
    <div className={style.footer}>
      <div className={style.icon}>
        <img src={personIcon} alt="person_icon" />
      </div>
      <input
        className={style.input}
        type="text"
        value={name}
        placeholder="Enter GitHub username"
        onChange={searchName}
        onKeyPress={onClickHandler}
      />
    </div>
  );
};
