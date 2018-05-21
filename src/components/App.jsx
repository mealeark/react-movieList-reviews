import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';

import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import MovieReviews from './MovieReviews.jsx';
import Search from './Search.jsx';


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
      movies: ['hello']
    };
  }

  // handleClick(movie) {
  //   this.setState({movie: movie});
  // }

  render() {
    return (
      <Wrapper>

          <MovieList movies={this.state.movies} />

      </Wrapper>
    );
  }
}


export default App;
ReactDOM.render(<App />, document.getElementById("app"));
