import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';


export default class TableOfContents extends React.Component {




  render() {

    const TocContainer = styled.div`
      grid-area: right;
      width: 100%;
      height: auto;
      background-color: black;
    `

    return (
      <TocContainer>
        toc
      </TocContainer>
    )

  }
}
