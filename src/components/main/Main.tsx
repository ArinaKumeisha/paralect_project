import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import style from './Main.module.scss';

import { ErrorPage, MainPage, Search, UserPage } from 'components';

export const Main = () => {
  const [name, setName] = useState<string>('');
  return (
    <div className={style.container}>
      <Search setName={setName} name={name} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/:userName" element={<UserPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
