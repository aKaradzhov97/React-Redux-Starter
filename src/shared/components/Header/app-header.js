import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class AppHeader extends Component {
  render = () => {
    const { t } = this.props;
    return (
      <header>
        <h2>{t('header.title')}</h2>
      </header>
    );
  };
}

export default withTranslation('general')(AppHeader);
