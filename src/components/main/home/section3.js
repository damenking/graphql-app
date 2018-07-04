import React from 'react';
import styled from 'styled-components';


const Self = styled.div`
  width: 100vw;
  height: 50vh;
  max-height: 50vw;
  background: #f9faff;
`;
const Container = styled.div`
  height: 100%;
`;
const ContentRow = styled.div`
  height: 100%;
`;
const ContentContainer = styled.div`
  margin: 5vh;
`;
const IconContainer = styled.div`
  height: 130px;
  width: 130px;
  background: white;
`;
const Icon = styled.span`
  font-size: 36px;
  color: rgb(245, 32, 75);
  font-weight: 600!important;
  margin: auto;
`;

const Section3 = () => (
  <Self className="container-fluid">
    <Container className="container">
      <ContentRow className="row align-items-center">
        <ContentContainer className="col d-flex flex-column text-center">
          <IconContainer className="d-flex align-items-center align-self-center justify-content-center">
            <Icon className="lnr lnr-screen" />
          </IconContainer>
          <div className="mt-4">
            <h5>Vector Illustration</h5>
            <p>Here is some more text</p>
          </div>
        </ContentContainer>
        <ContentContainer className="col d-flex flex-column text-center">
          <IconContainer className="d-flex align-items-center align-self-center justify-content-center">
            <Icon className="lnr lnr-picture" />
          </IconContainer>
          <div className="mt-4">
            <h5>Vector Illustration</h5>
            <p>Here is some more text</p>
          </div>
        </ContentContainer>
        <ContentContainer className="col d-flex flex-column text-center">
          <IconContainer className="d-flex align-items-center align-self-center justify-content-center">
            <Icon className="lnr lnr-laptop-phone" />
          </IconContainer>
          <div className="mt-4">
            <h5>Vector Illustration</h5>
            <p>Here is some more text</p>
          </div>
        </ContentContainer>
        <ContentContainer className="col d-flex flex-column text-center">
          <IconContainer className="d-flex align-items-center align-self-center justify-content-center">
            <Icon className="lnr lnr-gift" />
          </IconContainer>
          <div className="mt-4">
            <h5>Vector Illustration</h5>
            <p>Here is some more text</p>
          </div>
        </ContentContainer>
      </ContentRow>
    </Container>
  </Self>
);

export default Section3;

