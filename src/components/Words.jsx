import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';


export default class Words extends React.Component {



  render() {
    const WordsContainer = styled.div`
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

    const WordsList = styled.div`
      grid-area: list;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    `;

    const Word = styled.div`
      min-height: 300px;
      min-width: 300px;
      background-color: blanchedalmond;
    `;

    return (
      <WordsContainer>
        <Title>WORDS</Title>
        <Subheader>First Impressions, Second Thoughts, and Final Words</Subheader>
        <WordsList>
          <Word>Word 1</Word>
          <Word>Word 2</Word>
          <Word>Word 3</Word>
          <Word>Word 4</Word>
          <Word>Word 1</Word>
          <Word>Word 2</Word>
          <Word>Word 3</Word>
          <Word>Word 4</Word>
          <Word>Word 1</Word>
          <Word>Word 2</Word>
          <Word>Word 3</Word>
          <Word>Word 4</Word>
          <Word>Word 1</Word>
          <Word>Word 2</Word>
          <Word>Word 3</Word>
          <Word>Word 4</Word>
        </WordsList>
      </WordsContainer>
    )

  }
}
