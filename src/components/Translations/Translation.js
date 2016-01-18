import React, { Component, PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';

import s from './Translations.scss';
import _ from 'underscore';

@withStyles(s)
export default class Domain extends Component {
  static propTypes = {
    string: PropTypes.string.isRequired,
    translation: PropTypes.string,
  };

  constructor() {
    super();
    _.bindAll(this, 'translationChanged');
  }

  componentWillMount() {
    this.setState({ translation: this.props.translation });
  }

  translationChanged(event) {
    this.setState({ translation: event.target.value });
  }

  render() {
    return (
      <div className={s['translation-wrapper']}>
        <div className={s.string}>
          {this.props.string}
        </div>
        <div className={s.translation}>
          <textarea onChange={this.translationChanged} value={this.state.translation}/>
        </div>
      </div>
    );
  }
}
