import React from 'react';
import styled from 'styled-components';


const Self = styled.div`
  width: 100vw;
  height: 90vh;
  max-height: 90vw;
  background: linear-gradient(rgba(109,164,211,.6), rgba(0,0,0,.3)), url(${props => props.backgroundUrl}) no-repeat center center/cover;
`;

const ContentRow = styled.div`
  height: 100%;
`;

const ContentCol = styled.div`
  background: white;
  padding 10vh 5vh 10vh 5vh;
`;

const Section2 = props => (
  <Self backgroundUrl={props.backgroundUrl} className="container-fluid">
    <ContentRow className="row align-items-center">
      <ContentCol className="col-4 offset-6">
        <h1>{props.header}</h1>
        <p>{props.subheader}</p>
      </ContentCol>
    </ContentRow>
  </Self>
);

export default Section2;
