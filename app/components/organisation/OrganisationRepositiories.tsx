import RepositoryPanel from 'app/components/organisation/RepositoryPanel';
import { OrganisationRepositoriesType } from 'app/services/octokit';
import * as React from 'react';

interface OrganisationRepositoriesProps {
  repos: OrganisationRepositoriesType;
}

const OrganisationRepositories = ({ repos }: OrganisationRepositoriesProps) => {
  return (
    <React.Fragment>
      {repos.map((repo) => {
        return (
          <RepositoryPanel
            name={repo.name}
            owner={repo.owner.login}
            id={repo.id}
            key={repo.id}
          />
        );
      })}
    </React.Fragment>
  );
};

export default OrganisationRepositories;
