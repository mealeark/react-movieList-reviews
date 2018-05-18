import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import Container from './Container.jsx';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      movie: {},
      reviews: {}
    };

  }

  render() {
    return (
      <Wrapper>
        <Search />
        <Container />
        <MovieList />
      </Wrapper>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
