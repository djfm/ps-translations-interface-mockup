import React, { Component, PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';

import s from './Translations.scss';

@withStyles(s)
export default class Domain extends Component {
  static propTypes = {
    string: PropTypes.string.isRequired,
    translation: PropTypes.string,
  };

  render() {
    return (
      <div className={s.row}>
        <div className={s['col-lg-6']}>
          {this.props.string}
        </div>
        <div className={s['col-lg-6']}>
          {this.props.translation}
        </div>
      </div>
    );
  }
}
