import React from 'react';
import { CLIENT_PAGES_NAME } from '../../../../helpers/constants';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Help from './Pages/Help';
import Post from './Pages/Post';
class index extends React.Component {
  clientPageRender = ({ page, isScroll, slug, className, categorySlug }) => {
    switch (page.toLowerCase()) {
      case CLIENT_PAGES_NAME.HOME:
        return <Home isScroll={isScroll} />;
      case CLIENT_PAGES_NAME.BLOG:
        return <Blog />;
      case CLIENT_PAGES_NAME.CONTACT:
        return <Contact />;
      case CLIENT_PAGES_NAME.HELP:
        return <Help />;
      case CLIENT_PAGES_NAME.POST:
        return <Post className={className} slug={slug} />;
      case CLIENT_PAGES_NAME.CATEGORY:
        return <Blog categorySlug={categorySlug} />;
      default:
        return null;
    }
  };

  render() {
    return this.clientPageRender(this.props);
  }
}

export default index;
