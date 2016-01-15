import React, { Component, PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';

import s from './Translations.scss';

import DomainsOrTranslations from './DomainsOrTranslations';

@withStyles(s)
export default class Domain extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className={s['domain-wrapper']}>
        <span>{this.props.name}</span>
        <div>
          <DomainsOrTranslations data={this.props.data} />
        </div>
      </div>
    );
  }
}
