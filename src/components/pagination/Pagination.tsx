import React, { useState } from 'react';

import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import style from './Pagination.module.scss';

import { RootState } from 'redux/store';
import { getRepositories } from 'redux/userReducer';

export const Pagination = () => {
  const dispatch = useDispatch();
  const name = useSelector<RootState, string>(state => state.userReducer.user.name);
  const [active, setActive] = useState(false);
  const pageRepoCount = useSelector<RootState, number>(
    state => state.userReducer.user.public_repos,
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [firstItem, setFirstItem] = useState(1);
  const handlePageClick = (e: { selected: number }) => {
    const number = e.selected + 1;
    setFirstItem(number);
    dispatch(getRepositories(name, number));
  };
  const pageCountInPage = Math.ceil(pageRepoCount / 4);
  return (
    <div className={style.container}>
      <h2 className={style.countRepo}>
        {/* {firstItem} - {firstItem + 3} > {pageRepoCount} ? {pageRepoCount} : {firstItem + 3} */}
        <span> of </span>
        {pageRepoCount} <span> items </span>
      </h2>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCountInPage}
        previousLabel="<"
        className={style.paginator}
        containerClassName={style.paginator}
        activeLinkClassName={style.active}
      />
    </div>
  );
};
