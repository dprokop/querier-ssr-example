import * as React from 'react';
import AccordionPanel from 'app/ui/kit/AccordionPanel/AccordionPanel';
import RepositoryDetails from 'app/components/organisation/RepositoryDetails';
import RepositoryContributors from 'app/components/organisation/RepositoryContributors';

interface RepositoryPanelProps {
  name: string;
  owner: string;
  id: number;
}

const RepositoryPanel = ({ name, owner, id }: RepositoryPanelProps) => {
  return (
    <AccordionPanel title={name} >
      <React.Fragment>
        <RepositoryDetails id={id} />
        <RepositoryContributors owner={owner} repo={name} />
      </React.Fragment>
    </AccordionPanel>
  );
};

export default RepositoryPanel;
