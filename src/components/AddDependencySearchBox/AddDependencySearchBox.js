// @flow
/**
 * This component uses Algolia's `react-instantsearch`.
 * Unfortunately, styling these components is tricky, and doesn't play nicely
 * with styled-components. Just gonna override the provided global styles.
 */
import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { SearchBox } from 'react-instantsearch/dom';

import { COLORS } from '../../constants';

type Props = {
  onChange: (ev: SyntheticEvent<*>) => void,
};

class AddDependencySearchBox extends Component<Props> {
  render() {
    return (
      <Wrapper>
        <SearchBoxGlobalStyle />
        <SearchBox
          onChange={this.props.onChange}
          autoFocus={true}
          placeholder="eg. redux, react-router..."
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding-top: 15px;
  width: 100%;
`;

const SearchBoxGlobalStyle = createGlobalStyle`
  .ais-SearchBox {
    /* width: 100%; */
  }
  .ais-SearchBox-submit, .ais-SearchBox-reset {
    display: none;
  }
  .ais-SearchBox-input {
    width: 100%;
    padding: 8px 0px;
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.75);
    color: ${COLORS.white};
    border-radius: 0px;
    outline: none;
    font-size: 21px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.35);
    }

    &:focus {
      border-bottom: 2px solid ${COLORS.white};

    }
  }
`;

export default AddDependencySearchBox;
