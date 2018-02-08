import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';


export default class About extends React.Component {



  render() {
    const AboutContainer = styled.div`
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

    const AboutList = styled.div`
      grid-area: list;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    `;

    const About = styled.div`
      min-height: 300px;
      min-width: 300px;
      background-color: blanchedalmond;
    `;

    return (
      <AboutContainer>
        <Title>ABOUT</Title>
        <Subheader>Stock About for your next project</Subheader>
        <AboutList>
          <About>About 1</About>
          <About>About 2</About>
          <About>About 3</About>
          <About>About 4</About>
        </AboutList>
      </AboutContainer>
    )

  }
}
