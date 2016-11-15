import React, { PropTypes } from 'react';
import { emitter } from './';

export default class ExternalWrapper extends React.Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      children: null,
    };
  }

  componentDidMount() {
    emitter.on(`render:${this.props.link}`, this.updateChildren);
  }

  componentWillUnmount() {
    emitter.removeListener(`render:${this.props.link}`, this.updateChildren);
  }

  updateChildren = children => {
    this.setState({ children });
  }

  render() {
    const { children } = this.state;
    if (React.Children.count(children) === 1 && typeof children === 'object') {
      return React.Children.only(children);
    }
    return React.createElement('div', null, children);
  }
}
