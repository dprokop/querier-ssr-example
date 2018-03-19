import * as Github from '@octokit/rest';

const octokit = new Github();

const auth = async () => {
  await octokit.authenticate({
    username: '',
    password: '',
    type: 'basic',
  });
};

export const searchOrganisation =
  async (orgName: string): Promise<SearchOrgResults> => {
    await auth();
    const results = await octokit.search.users({
      q: orgName,
    });

    return results.data;
  };

export const getOrganisationDetails =
  async ({ orgName }: { orgName: string }): Promise<OrganisationDetailsType> => {
    await auth();
    const results = await octokit.orgs.get({
      org: orgName
    });

    return results.data;
  };

export const getOrganisationRepositories =
  async ({ orgName }: { orgName: string }): Promise<OrganisationRepositoriesType> => {
    await auth();
    const results = await octokit.repos.getForOrg({
      org: orgName
    });

    return results.data;
  };

export const getRepository =
  async ({ id }: { id: number }): Promise<RepositoryType> => {
    await auth();
    const result = await octokit.repos.getById({
      id: id.toString()
    });

    return result.data;
  };
export const getRepositoryContributors =
  async ({ owner, repo }: { owner: string, repo: string }): Promise<RepositoryContributorsType> => {
    await auth();
    const result = await octokit.repos.getContributors({
      owner,
      repo
    });

    return result.data;
  };

export type OrganisationDetailsType = {
  login: string
  id: number,
  url: string,
  repos_url: string,
  events_url: string,
  hooks_url: string,
  issues_url: string,
  members_url: string,
  public_members_url: string,
  avatar_url: string,
  description: string,
  name: string,
  company: string | null,
  blog: string,
  location: string | null,
  email: string,
  has_organization_projects: boolean,
  has_repository_projects: boolean,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  html_url: string,
  created_at: string,
  updated_at: string,
  type: string
};

export type SearchOrgResult = {
  login: string,
  id: number,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean,
  score: number;
};

export type SearchOrgResults = {
  total_count: number;
  incomplete_results: boolean;
  items: Array<SearchOrgResult>;
};

export type RepositoryType = {
  id: number,
  name: string,
  full_name: string,
  owner: {
    login: string,
    id: number,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean
  },
  private: boolean,
  html_url: string,
  description: string,
  fork: boolean,
  url: string,
  forks_url: string,
  keys_url: string,
  collaborators_url: string,
  teams_url: string,
  hooks_url: string,
  issue_events_url: string,
  events_url: string,
  assignees_url: string,
  branches_url: string,
  tags_url: string,
  blobs_url: string,
  git_tags_url: string,
  git_refs_url: string,
  trees_url: string,
  statuses_url: string,
  languages_url: string,
  stargazers_url: string,
  contributors_url: string,
  subscribers_url: string,
  subscription_url: string,
  commits_url: string,
  git_commits_url: string,
  comments_url: string,
  issue_comment_url: string,
  contents_url: string,
  compare_url: string,
  merges_url: string,
  archive_url: string,
  downloads_url: string,
  issues_url: string,
  pulls_url: string,
  milestones_url: string,
  notifications_url: string,
  labels_url: string,
  releases_url: string,
  deployments_url: string,
  created_at: string,
  updated_at: string,
  pushed_at: string,
  git_url: string,
  ssh_url: string,
  clone_url: string,
  svn_url: string,
  homepage: string,
  size: number,
  stargazers_count: number,
  watchers_count: number,
  language: string,
  has_issues: boolean,
  has_projects: boolean,
  has_downloads: boolean,
  has_wiki: boolean,
  has_pages: boolean,
  forks_count: number,
  mirror_url: null,
  archived: boolean,
  open_issues_count: number,
  license: {
    key: string,
    name: string,
    spdx_id: string,
    url: string,
  },
  forks: number,
  open_issues: number,
  watchers: number,
  default_branch: string,
  permissions: {
    admin: boolean,
    push: boolean,
    pull: boolean
  }
};

export type OrganisationRepositoriesType = Array<RepositoryType>;

export type ContributorType = {
  login: string,
  id: number,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean,
  contributions: number
};

export type RepositoryContributorsType = Array<ContributorType>;
