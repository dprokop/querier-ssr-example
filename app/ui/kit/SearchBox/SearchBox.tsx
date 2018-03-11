import TertiaryButton from 'app/ui/kit/Button/TertiaryButton';
import Input from 'app/ui/kit/Input/Input';
import * as React from 'react';
import { QuerierState } from 'querier';

const css = require('./SearchBox.css');

interface SearchBoxProps {
  onSubmit: (query: string) => void;
  status: QuerierState | undefined;

}
interface SearchBoxState {
  value: string;
}

class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {
  constructor(props: SearchBoxProps) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSubmit();
  }

  handleQueryChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      value: e.currentTarget.value
    });
  }

  handleSubmit() {
    this.props.onSubmit(this.state.value);
  }

  render() {
    const {status} = this.props;

    const label = status && status === QuerierState.Active ? 'Loading...' : 'Search';

    return (
      <div className={css.SearchBox}>
        <div className={css.inputWrap}>
          <Input
            value={this.state.value}
            onChange={this.handleQueryChange}
            type="text"
            placeholder="Search github username..."
          />
        </div>
        <div className={css.button}>
          <TertiaryButton onClick={this.handleSubmit}>{label}</TertiaryButton>
        </div>
      </div>
    );
  }
}

export default SearchBox;
