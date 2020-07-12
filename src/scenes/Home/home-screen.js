import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import './home-screen.scss';

class HomeScreen extends Component {
  render = () => {
    const { t } = this.props;

    return (
      <article>
        <section>
          <h1>{t('home_screen.title')}</h1>
        </section>
      </article>
    );
  };
}

export default withTranslation()(HomeScreen);
