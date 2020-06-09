/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import BurgerMenu from './BurgerMenu.jsx';
import Write from './Write.jsx';

const axios = require('axios');


const GlobalStyle = createGlobalStyle`

`;
const Wrapper = styled.div`
  font-size: 13px;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journals: [],
      write: false,
    };

    this.fetchData = this.fetchData.bind(this);
    this.setWrite = this.setWrite.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get(`/journals`)
      .then((response) => {
        // console.log(response.data);
        this.setState({ journals: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

//   postData() {
//     axios.patch('/journals', { vote, id })
//       .then((response) => {
//         this.fetchData(Number(productId));
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

  setWrite() {
    this.setState({write: true});
  }

  render() {
      const {journals, write} = this.state;
      let newPost = '';

      if (write) {
        newPost = <Write />;
      }

    return (
        <div>
            <BurgerMenu all={journals} post={this.setWrite}/>
            {newPost}
        </div>
    );
  }
}

export default App;
