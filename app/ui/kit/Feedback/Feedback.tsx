import * as React from 'react';
import HeaderLevel2 from 'app/ui/kit/Typography/HeaderLevel2';
import { QuerierState, StatesType, combineStates } from 'querier';

interface FeedbackProps {
  states: StatesType;
  text?: string;
}

const Feedback = ({ states, text }: FeedbackProps) => {
  const combinedState = combineStates(states);

  if (combinedState.state === QuerierState.Error) {
    return <HeaderLevel2><div>Shit went wrong <pre>¯\_(ツ)_/¯</pre></div></HeaderLevel2>;
  }

  if (combinedState.state === QuerierState.Active) {
    return <HeaderLevel2>{text || `Loading data...`}</HeaderLevel2>;
  }

  return null;
};

export default Feedback;
