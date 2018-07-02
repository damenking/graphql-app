import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 5rem;
  text-align: left;
`;

const Self = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100vw;
  background: url(${props => props.backgroundUrl}) no-repeat center center/cover;
`;

const TitleRow = styled.div`
height: 100%
`;

const SubTitle = styled.div`
  font-size: 3rem
`;

const Banner = props => (
  <Self backgroundUrl={props.backgroundUrl} className="container-fluid">
    <TitleRow className="row align-items-center">
      <div className="col-4 offset-6">
        <Title>
          {props.title}
        </Title>
        <SubTitle>
          {props.subtitle}
        </SubTitle>
      </div>
    </TitleRow>
  </Self>
);

export default Banner;

