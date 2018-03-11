import { navigateTo } from 'app/services/navigation';
import { SearchOrgResult } from 'app/services/octokit';
import List from 'app/ui/kit/List/List';
import HeaderLevel1 from 'app/ui/kit/Typography/HeaderLevel1';
import { TextLabel, TextLabelSmallMediumGrey } from 'app/ui/kit/Typography/TextLabels';
import * as React from 'react';

const css = require('./SearchResults.css');

interface SearchResultsProps {
  results: Array<SearchOrgResult>;
}

interface SearchResultProps {
  data: SearchOrgResult;
}

const SearchResult = ({ data }: SearchResultProps) => {
  return (
    <div
      className={css.SearchResult}
      onClick={() => {
        navigateTo('/organisation/' + data.login);
      }}
    >
      <div className={css.imageWrap}><img src={data.avatar_url} className={css.avatar} /></div>
      <div className={css.details}>
        <TextLabel className={css.name}>{data.login}</TextLabel><br />
        <TextLabelSmallMediumGrey className={css.name}>{data.type}</TextLabelSmallMediumGrey>
      </div>
    </div>
  );
};

const resultRenderer = (item: SearchOrgResult) => {
  return <SearchResult data={item} />;
};

const SearchResults = ({ results }: SearchResultsProps) => {
  const empty = results.length === 0
    ? <HeaderLevel1 className={css.empty}>No results...</HeaderLevel1>
    : null;

  return (
    <React.Fragment>
      {empty || <List
        className={css.SearchResults}
        items={results}
        itemRenderer={resultRenderer}
      />}
    </React.Fragment>
  );
};

export default SearchResults;
