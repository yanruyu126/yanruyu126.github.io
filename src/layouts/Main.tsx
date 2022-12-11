import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navigation from '../components/templates/Navigation';
import ScrollToTop from '../components/templates/ScrollToTop';
import SideBar from '../components/cards/SideBar';

const Main = (props: any) => (
  <HelmetProvider>
    <ScrollToTop />
    <Helmet titleTemplate="%s | Ruyu Yan" defaultTitle="Ruyu Yan" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="main">
        {props.children}
      </div>
      {props.fullPage ? null : <SideBar />}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Ruyu Yan's personal website.",
};

export default Main;
