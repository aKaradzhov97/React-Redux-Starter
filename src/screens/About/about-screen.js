import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './about-screen.scss';

class AboutScreen extends Component {
  render = () => {
    const { t } = this.props;

    return (
      <section>
        <h1>{t('about_screen.title')}</h1>
        <Link to="/">{t('about_screen.go_home_link')}</Link>
      </section>
    );
  };
}

export default connect()(withTranslation()(AboutScreen));
