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
    _.bindAll(this, 'translationChanged', 'saveTranslation', 'handleKey');
  }

  componentWillMount() {
    this.setState({ translation: this.props.translation, dirty: false });
  }

  translationChanged(event) {
    this.setState({ translation: event.target.value, dirty: true });
  }

  handleKey(event) {
    if (event.which === 83 /* s */) {
      if (event.getModifierState('Control')) {
        event.preventDefault();
        this.saveTranslation();
      }
    }
  }

  saveTranslation() {
    this.setState({ dirty: false });
  }

  renderSaveWidget() {
    if (this.state.dirty) {
      return <a onClick={this.saveTranslation}><i className="material-icons">save</i></a>;
    } else {
      return <i className="material-icons">done</i>;
    }
  }

  render() {
    return (
      <div className={s['translation-wrapper']}>
        <div className={s.string}>
          <span>{this.props.string}</span>
        </div>
        <div className={s.translation}>
          <div className={s.row}>
            <div className={s['col-xs-11']}>
              <textarea onChange={this.translationChanged} value={this.state.translation} onKeyDown={this.handleKey}/>
            </div>
            <div className={s['col-xs-1']}>
              {this.renderSaveWidget()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
