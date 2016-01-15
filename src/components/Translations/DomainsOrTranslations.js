import React, { Component, PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';

import s from './Translations.scss';

import Domain from './Domain';
import Translation from './Translation';

@withStyles(s)
export default class DomainsOrTranslations extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div>
        {this.props.data.map(item =>
          item.type === 'domain' ?
            <Domain key={item.name} {...item}/> :
            <Translation key={item.string} {...item}/>
        )}
      </div>
    );
  }
}
