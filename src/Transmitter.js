import React, { PropTypes } from 'react';
import { emitter } from './';

export default class Transmitter extends React.Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
  }

  componentDidMount() {
    emitter.emit(`render:${this.props.link}`);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children !== this.props.children) {
      emitter.emit(`render:${this.props.link}`);
    }
  }

  render() {
    return null;
  }
}
