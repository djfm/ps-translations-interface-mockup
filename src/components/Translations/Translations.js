/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './Translations.scss';
import withStyles from '../../decorators/withStyles';
import classnames from 'classnames';

const classes = (...names) => classnames(names.map(name => s[name]));

const title = 'Translations';

import translations from 'json!yaml!./translations.sample.yml';

@withStyles(s)
class TranslationsPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <h1>{title}</h1>
        <div className={classes('translations-actions')}>
          <button className={classes('btn', 'btn-success', 'btn-lg')}>{'Translate texts for customers'}</button>
          <p className={classes('buttons-spacer')}><span>or</span></p>
          <button className={classes('btn', 'btn-default')}>{'Translate texts for shop employees'}</button>
        </div>
      </div>
    );
  }

}

export default TranslationsPage;
