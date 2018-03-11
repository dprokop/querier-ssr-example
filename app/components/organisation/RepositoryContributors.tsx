import { ContributorType, getRepositoryContributors, RepositoryContributorsType } from 'app/services/octokit';
import Feedback from 'app/ui/kit/Feedback/Feedback';
import List from 'app/ui/kit/List/List';
import * as React from 'react';
import { WithDataProps, withData } from 'querier';

const css = require('./RepositoryContributors.css');

interface RepositoryContirbutorsInputQueries {
  contributors: RepositoryContributorsType;
}

interface RepositoryContirbutorsOwnProps {
  owner: string;
  repo: string;
}

type RepositoryContirbutorsProps =
  WithDataProps<RepositoryContirbutorsOwnProps, RepositoryContirbutorsInputQueries, {}>;

class RepositoryContirbutors extends React.Component<RepositoryContirbutorsProps> {
  renderContributor(item: ContributorType) {
    return (
      <div className={css.contributor}>
        <img src={item.avatar_url} />
      </div>
    );
  }

  render() {

    const { states, results: { contributors } } = this.props;

    return (
      <React.Fragment>
        <Feedback text="Loading contributors..." states={states} />

        {
          contributors &&
          <div>
            <List
              className={css.list}
              items={contributors}
              itemRenderer={this.renderContributor}
            />
          </div>
        }
      </React.Fragment>
    );
  }
}

const repositortContributorsQueries = {
  inputQueries: {
    contributors: {
      query: getRepositoryContributors
    }
  }
};

export default withData<RepositoryContirbutorsOwnProps, RepositoryContirbutorsInputQueries, {}>(
  repositortContributorsQueries
)(RepositoryContirbutors);
