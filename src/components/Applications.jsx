import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';


export default class Applications extends React.Component {



  render() {
    const ApplicationsContainer = styled.div`
      font-family: 'Montserrat';
      background-color: black;
      color: white;
      display: grid;
      grid-template-columns: 1fr 10fr 1fr;
      grid-template-areas: '.. tit   ..'
                           '.. subt  ..'
                           '.. list  ..';
    `;

    const Title = styled.div`
      font-weight: bold;
      margin-top: 40px;
      grid-area: tit;
      font-size: 4em;
    `;

    const Subheader = styled.div`
      grid-area: subt;
      font-size: 1.5em;
      font-style: italic;
      font-family: 'Helvetica';
    `;

    const ApplicationsList = styled.div`
      grid-area: list;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    `;

    const Application = styled.div`
      min-height: 300px;
      min-width: 300px;
      background-color: blanchedalmond;
    `;

    return (
      <ApplicationsContainer>
        <Title>APPS</Title>
        <Subheader>Stock Applications for your next project</Subheader>
        <ApplicationsList>
          <Application>Application 1</Application>
          <Application>Application 2</Application>
          <Application>Application 3</Application>
          <Application>Application 4</Application>
        </ApplicationsList>
      </ApplicationsContainer>
    )

  }
}
