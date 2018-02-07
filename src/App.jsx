import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import HomeCTA from './components/HomeCTA';
import TableOfContents from './components/TableOfContents';

export default class App extends React.Component {



  render() {

    const AppContainer = styled.div`
    display: grid;
    margin: -20px;
    width: 100vw;
    height: 100vh;
    background-color: gainsboro;

    @media screen and (min-width: 1024px){
      grid-template-columns: 3fr 2fr;
      grid-template-areas: 'left right';

    }
    `;

    return (
      <AppContainer>
       <HomeCTA/>
       <TableOfContents/>
     </AppContainer>
    )

  }
}
