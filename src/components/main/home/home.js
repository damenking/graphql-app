import React from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';

import Banner from './banner';
import Section1 from './section1';
import HomePageData from './home_page.gql';


const Self = styled.div`
  color:red;
`;

@graphql(HomePageData)
export default class Home extends React.PureComponent {
  render() {
    const { data } = this.props;
    const isLoading = !!data.loading;

    if (!isLoading) {
      console.log(data);
      const bannerTitle = data.HomePage.title;
      const bannerSubtitle = data.HomePage.subtitle;
      const bannerBackgroundUrl = data.HomePage.banner.url;
      const section1Text = data.HomePage.richtext;
      const section1Images = data.HomePage.images;
      return (
        <Self>
          <Banner
            title={bannerTitle}
            subtitle={bannerSubtitle}
            backgroundUrl={bannerBackgroundUrl} />
          <Section1
            text={section1Text}
            images={section1Images} />
        </Self>
      );
    }
    return null;
  }
}
