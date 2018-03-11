import { OrganisationDetailsType } from 'app/services/octokit';
import HeaderLevel2 from 'app/ui/kit/Typography/HeaderLevel2';
import * as React from 'react';
import { TextLabelSmallMediumGrey } from 'app/ui/kit/Typography/TextLabels';
import { Link } from 'react-router-dom';

const css = require('./OrganisationDetails.css');

interface OrganisationDetailsProps {
  details: OrganisationDetailsType;
}

const OrganisationDetails = ({ details }: OrganisationDetailsProps) => {
  return (
    <div className={css.OrganisationDetails}>
      <div className={css.back}>
        <Link to="/" replace={false}>◀</Link>
      </div>
      <div className={css.avatar}>
        <img src={details.avatar_url} />
      </div>
      <div className={css.details}>
        <div>
          <HeaderLevel2>{details.name}</HeaderLevel2>
          <a href={details.html_url} target="_blank">View on Github</a>
        </div>
        <div className={css.repos}>
          <div className={css.count}>{details.public_repos}</div>
          <TextLabelSmallMediumGrey>Repositories</TextLabelSmallMediumGrey>
        </div>
      </div>
    </div>
  );
};

export default OrganisationDetails;
