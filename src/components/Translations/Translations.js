/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import Link from '../Link';
import s from './Translations.scss';
import withStyles from '../../decorators/withStyles';
import classnames from 'classnames';

const classes = (...names) => classnames(names.map(name => s[name]));

const title = 'Translations';

import translations from 'json!yaml!./translations.sample.yml';
import { getDomainsForAudience } from './translationsUtils';

import DomainsOrTranslations from './DomainsOrTranslations';

@withStyles(s)
class TranslationsPage extends Component {

  static propTypes = {
    query: React.PropTypes.object.isRequired,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  renderCallToActions() {
    return (
      <div className={s.root}>
        <h1>{title}</h1>
        <div className={classes('translations-actions')}>
          <Link to="/translations" query={{ audience: 'customers' }} className={classes('btn', 'btn-primary', 'btn-lg')}>
            {'Translate texts for your customers'}
          </Link>
          <p className={classes('buttons-spacer')}><span>or</span></p>
          <Link to="/translations" query={{ audience: 'employees' }} className={classes('btn', 'btn-secondary')}>
            {'Translate texts for your shop employees'}
          </Link>
        </div>
      </div>
    );
  }

  renderTranslationInterface() {
    const domains = getDomainsForAudience(
      this.props.query.audience,
      translations
    );

    return <DomainsOrTranslations data={domains} />;
  }

  render() {
    if (this.props.query.audience) {
      return (
        <div>
          <Link to="/translations" className={classes('btn', 'btn-secondary', '_v_apart')}>
            {'Back to translations'}
          </Link>
          {this.renderTranslationInterface()}
        </div>
      );
    } else {
      return this.renderCallToActions();
    }
  }

}

export default TranslationsPage;
