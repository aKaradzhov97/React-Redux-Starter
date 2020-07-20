import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import './not-found.screen.scss';

class NotFoundScreen extends Component {
  render = () => {
    const { t } = this.props;

    return (
      <section>
        <h1>{t('not_found_screen.heading')}</h1>
        <p>{t('not_found_screen.paragraph')}</p>
      </section>
    );
  };
}

export default withTranslation()(NotFoundScreen);
