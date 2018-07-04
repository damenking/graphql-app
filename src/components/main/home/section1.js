import React from 'react';
import styled from 'styled-components';


const Self = styled.div`
  width: 100vw;
  height: 80vh;
  max-height: 80vw;
`;

const ContentRow = styled.div`
height: 100%
`;

const Section1 = props => (
  <Self className="container">
    <ContentRow className="row align-items-center">
      <div className="col-4">
        <img src={props.backgroundUrl} className="img-fluid" alt="" />
      </div>
      <div className="col-8">
        <h1>{props.header}</h1>
        <h2>{props.subheader}</h2>
        <p>{props.text}</p>
      </div>
      {/* <div className="col-8" dangerouslySetInnerHTML={{ __html: props.text }} /> */}
    </ContentRow>
  </Self>
);

export default Section1;
