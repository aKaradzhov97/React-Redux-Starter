import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './home-screen.scss';

class HomeScreen extends Component {
  render = () => {
    const { t } = this.props;

    return (
      <section>
        <h1>{t('home_screen.title')}</h1>
        <Link to={'/about'}>{t('home_screen.go_about_link')}</Link>
      </section>
    );
  };
}

export default connect()(withTranslation()(HomeScreen));
