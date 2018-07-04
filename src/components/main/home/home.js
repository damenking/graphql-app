import React from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';

import Banner from './banner';
import Section1 from './section1';
import HomePageData from './home_page.gql';
import Section2 from './section2';
import Section3 from './section3';


const Self = styled.div`
`;

@graphql(HomePageData)
export default class Home extends React.PureComponent {
  render() {
    const { data } = this.props;
    const isLoading = !!data.loading;

    if (!isLoading) {
      console.log(data.homePage);
      const bannerTitle = data.homePage.title;
      const bannerSubtitle = data.homePage.subtitle;
      const bannerBackGroundUrl = data.homePage.bannerImage.url;
      const { section1Header } = data.homePage;
      const { section1Subheader } = data.homePage;
      const { section1Text } = data.homePage;
      const section1BackgroundUrl = data.homePage.section1Image.url;
      const section2Header = data.homePage.sectionHeader;
      const section2Subheader = data.homePage.sectionSubheader;
      const section2BackgroundUrl = data.homePage.sectionImage.url;

      return (
        <Self>
          <Banner
            title={bannerTitle}
            subtitle={bannerSubtitle}
            backgroundUrl={bannerBackGroundUrl} />
          <Section1
            header={section1Header}
            subheader={section1Subheader}
            text={section1Text}
            backgroundUrl={section1BackgroundUrl} />
          <Section2
            header={section2Header}
            subheader={section2Subheader}
            backgroundUrl={section2BackgroundUrl} />
          <Section3 />
        </Self>
      );
    }
    return null;
  }
}
