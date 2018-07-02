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
        <img src={props.images[0].url} className="img-fluid" alt="" />
      </div>
      <div className="col-8" dangerouslySetInnerHTML={{ __html: props.text }} />
    </ContentRow>
  </Self>
);

export default Section1;
