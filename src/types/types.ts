export type User = {
  avatar_url: string;
  followers: number;
  following: number;
  login: 'ArinaKumeisha';
  name: 'ArinaKumeisha';
  public_gists: number;
  public_repos: number;
  html_url: string;
};
export type Repos = {
  repos: Repo[];
};
export type Repo = {
  html_url: string;
  description: string;
  name: string;
  id: number;
};
