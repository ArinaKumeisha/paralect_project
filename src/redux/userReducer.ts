import { Dispatch } from 'react';

import axios from 'axios';

import { User } from 'types';
import { Repo } from 'types/types';

type InitialState = {
  user: User;
  error: string;
  loading: boolean;
  repos: Repo[];
  currentPage: number;
  pageCount: number;
};
const initialState = {
  user: {} as User,
  error: '',
  loading: false,
  repos: [] as Repo[],
  currentPage: 1,
  pageCount: 5,
};

export const userReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case 'USER/GET-USER':
      return { ...state, user: action.user };

    case 'USER/HANDLE-ERROR':
      return { ...state, error: action.error };

    case 'USER/INCLUDE-LOADING':
      return { ...state, loading: true };
    case 'USER/GET-REPO':
      return { ...state, repos: action.repos };
    case 'TABLE/SET-CURRENT-PAGE':
      return { ...state, currentPage: action.currentPage };
    default:
      return state;
  }
};

export const getOneUser = (user: User) => ({ type: 'USER/GET-USER', user } as const);

export const setCurrentPageAC = (currentPage: number) =>
  ({ type: 'TABLE/SET-CURRENT-PAGE', currentPage } as const);

export const handleError = (error: string) =>
  ({ type: 'USER/HANDLE-ERROR', error } as const);

export const includeLoading = (loading: boolean) =>
  ({ type: 'USER/INCLUDE-LOADING', loading } as const);

export const getRepos = (repos: any) => ({ type: 'USER/GET-REPO', repos } as const);

export const getUser = (name: string) => async (dispatch: Dispatch<Action>) => {
  dispatch(includeLoading(true));
  try {
    const response = await axios.get<User>(`https://api.github.com/users/${name}`);

    dispatch(getOneUser(response.data));
    dispatch(includeLoading(false));
    dispatch(handleError(''));
  } catch (e: any) {
    dispatch(handleError(e.message));
    dispatch(includeLoading(false));
  }
};
type Action =
  | ReturnType<typeof getOneUser>
  | ReturnType<typeof handleError>
  | ReturnType<typeof includeLoading>;

type RepoAction =
  | ReturnType<typeof getRepos>
  | ReturnType<typeof handleError>
  | ReturnType<typeof setCurrentPageAC>;
export const getRepositories =
  (name: string, currentPage: number) => async (dispatch: Dispatch<RepoAction>) => {
    try {
      const response2 = await axios.get(
        `https://api.github.com/users/${name}/repos?per_page=4&page=${currentPage}`,
      );
      dispatch(getRepos(response2.data));
      dispatch(setCurrentPageAC(currentPage));
    } catch {
      dispatch(handleError('error'));
    }
  };
