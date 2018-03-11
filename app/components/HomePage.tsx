import { searchOrganisation, SearchOrgResults } from 'app/services/octokit';
import SearchBox from 'app/ui/kit/SearchBox/SearchBox';
import SearchResults from 'app/ui/kit/SearchResults/SearchResults';
import * as React from 'react';
import JSONTree from 'react-json-tree';
import { WithDataProps, withData } from 'querier';

interface HomePageActionQueries {
  searchOrganisation: SearchOrgResults;
}

type HomePageProps = WithDataProps<{}, {}, HomePageActionQueries>;

class HomePage extends React.Component<HomePageProps> {
  constructor(props: HomePageProps) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(query: string) {
    if (this.props.actionQueries && this.props.actionQueries.searchOrganisation) {
      this.props.actionQueries.searchOrganisation(query);
    }
  }

  renderResults() {
    if (this.props.states.searchOrganisation && this.props.states.searchOrganisation.error) {
      return <JSONTree data={this.props.states.searchOrganisation.error} />;
    }
    if (this.props.results.searchOrganisation ) {
      return (
        <SearchResults
          results={this.props.results.searchOrganisation.items.filter((o) => o.type !== 'User' )}
        />
      );
    }

    return undefined;
  }

  render() {
    const status = this.props.states.searchOrganisation && this.props.states.searchOrganisation.state;
    return (
      <div>
        <SearchBox onSubmit={this.handleSubmit} status={status}/>
        {this.renderResults()}
      </div>
    );
  }
}

export const homePageQueries = {
  actionQueries: {
    searchOrganisation: {
      query: searchOrganisation,
      hot: false
    }
  }
};

const HomePageWithData
  = withData(homePageQueries)(HomePage);

const HomePageRoute = () => <HomePageWithData />;

export default HomePageRoute;
