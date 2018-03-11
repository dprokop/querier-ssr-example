import { getRepository, RepositoryType } from 'app/services/octokit';
import Feedback from 'app/ui/kit/Feedback/Feedback';
import { TextLabel, TextLabelSmallMediumGrey } from 'app/ui/kit/Typography/TextLabels';
import * as React from 'react';
import { withData, WithDataProps } from 'querier';

const css = require('./RepositoryDetails.css');

interface RepositoryDetailsOwnProps {
  id: number;
}

interface RepositorDetailsInputQueries {
  repository: RepositoryType;
}

type RepositoryDetailsProps = WithDataProps<RepositoryDetailsOwnProps, RepositorDetailsInputQueries, {}>;

class RepositoryDetails extends React.Component<RepositoryDetailsProps> {

  render() {
    const { states, results: { repository } } = this.props;

    return (
      <React.Fragment>
        <Feedback states={states} />
        {
          repository && <div className={css.RepositoryDetails} >
            <div className={css.row}>
              <TextLabelSmallMediumGrey>Language: </TextLabelSmallMediumGrey>
              <TextLabel>{repository.language}</TextLabel>
            </div>
            <div className={css.row}>
              <TextLabelSmallMediumGrey>Homepage: </TextLabelSmallMediumGrey>
              <a href={repository.homepage} target="_blank">{repository.homepage}</a>
            </div>
          </div>}
      </React.Fragment>
    );
  }
}

const repositoryDetailsQueries = {
  inputQueries: {
    repository: {
      query: getRepository
    }
  }
};

export default
  withData<RepositoryDetailsOwnProps, RepositorDetailsInputQueries, {}>(repositoryDetailsQueries)(RepositoryDetails);
