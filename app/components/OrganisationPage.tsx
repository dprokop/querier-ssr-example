import OrganisationDetails from 'app/components/organisation/OrganisationDetails';
import OrganisationRepositories from 'app/components/organisation/OrganisationRepositiories';
import {
  getOrganisationDetails,
  getOrganisationRepositories,
  OrganisationDetailsType,
  OrganisationRepositoriesType,
} from 'app/services/octokit';
import Feedback from 'app/ui/kit/Feedback/Feedback';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { WithDataProps, withData } from 'querier';

interface OrganisationPageInputQueries {
  organisation: OrganisationDetailsType;
  repos: OrganisationRepositoriesType;
}

type OrganisationPageOwnProps = {
  orgName: string;
};

type OrganisationPageProps = WithDataProps<OrganisationPageOwnProps, OrganisationPageInputQueries, {}>;

class OrganisationPage extends React.Component<OrganisationPageProps> {
  constructor(props: OrganisationPageProps) {
    super(props);
  }

  renderDetails() {
    const { orgName, states, results: { organisation } } = this.props;

    return (
      <React.Fragment>
        <Feedback states={{ organisation: states.organisation }} text={`Loading ${orgName} details...`} />
        {organisation && <OrganisationDetails details={organisation} />}
      </React.Fragment>
    );

  }

  renderRepos() {
    const { orgName, states, results: { repos } } = this.props;

    return (
      <React.Fragment>
        <Feedback states={{ repos: states.repos }} text={`Loading ${orgName} repos...`} />
        {repos && <OrganisationRepositories repos={repos} />}
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderDetails()}
        {this.renderRepos()}
      </React.Fragment>
    );
  }
}

export const organisationPageQueries = {
  inputQueries: {
    organisation: {
      query: getOrganisationDetails,
    },
    repos: {
      query: getOrganisationRepositories
    }
  }
};

const OrganisationPageWithData
  = withData<OrganisationPageOwnProps, OrganisationPageInputQueries, {}>(organisationPageQueries)(OrganisationPage);

const OrganisationPageRoute = (props: RouteComponentProps<OrganisationPageOwnProps>) => {
  return <OrganisationPageWithData orgName={props.match.params.orgName} />;
};

export default OrganisationPageRoute;
