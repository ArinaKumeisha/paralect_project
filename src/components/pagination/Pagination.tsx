import React, { useState } from 'react';

import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import style from './Pagination.module.scss';

import { RootState } from 'redux/store';
import { getRepositories } from 'redux/userReducer';

export const Pagination = () => {
  const dispatch = useDispatch();
  const name = useSelector<RootState, string>(state => state.userReducer.user.name);
  const pageRepoCount = useSelector<RootState, number>(
    state => state.userReducer.user.public_repos,
  );
  const [currentItems, setCurrentItems] = useState(1);

  const handlePageClick = (event: { selected: number }) => {
    const number = event.selected;
    setCurrentItems(number);
    dispatch(getRepositories(name, number + 1));
  };
  const pageCountInPage = Math.ceil(pageRepoCount / 4);

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCountInPage}
      previousLabel="<"
      className={style.paginator}
      activeClassName={style.active}
    />
  );
};
