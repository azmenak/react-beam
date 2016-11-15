import React, { PropTypes } from 'react';
import { emitter } from './';

export default class Transmitter extends React.Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
  }

  componentDidMount() {
    emitter.emit(`render:${this.props.link}`, this.props.children);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children !== this.props.children || nextProps.link !== this.props.link) {
      emitter.emit(`render:${nextProps.link}`, nextProps.children);
    }
  }

  componentWillUnmount() {
    emitter.emit(`render:${this.props.link}`, null);
  }

  render() {
    return null;
  }
}
