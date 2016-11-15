import React, { PropTypes } from 'react';
import { emitter } from './';

export default class Receiver extends React.Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    onUpdate: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      children: null,
    };
    this.updateChildren = children => {
      this.setState({ children });
      if (this.props.onUpdate) {
        this.props.onUpdate(children);
      }
    };
  }

  componentDidMount() {
    emitter.on(`render:${this.props.link}`, this.updateChildren);
  }

  componentWillUnmount() {
    emitter.removeListener(`render:${this.props.link}`, this.updateChildren);
  }

  render() {
    let { children } = this.state;
    if (!children) {
      if (!this.props.children) {
        return null;
      }
      children = this.props.children;
    }

    const { style, className } = this.props;
    if (React.Children.count(children) === 1 && typeof children === 'object') {
      const onlyChild = React.Children.only(children);
      return React.cloneElement(
        onlyChild,
        { style: Object.assign({}, style, onlyChild.props.style), className }
      );
    }
    return React.createElement('span', { style, className }, children);
  }
}
