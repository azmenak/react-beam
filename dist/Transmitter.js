'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Transmitter = (function (_React$Component) {
  _inherits(Transmitter, _React$Component);

  function Transmitter() {
    _classCallCheck(this, Transmitter);

    return _possibleConstructorReturn(this, (Transmitter.__proto__ || Object.getPrototypeOf(Transmitter)).apply(this, arguments));
  }

  _createClass(Transmitter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _.emitter.emit('render:' + this.props.link, this.props.children);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.children !== this.props.children || nextProps.link !== this.props.link) {
        _.emitter.emit('render:' + nextProps.link, nextProps.children);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _.emitter.emit('render:' + this.props.link, null);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Transmitter;
})(_react2.default.Component);

Transmitter.propTypes = {
  link: _react.PropTypes.string.isRequired
};
exports.default = Transmitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UcmFuc21pdHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDhCQUF5Qzs7OztBQUN6QyxzQkFBNkI7Ozs7Ozs7Ozs7SUFFUixXQUFXOzs7Ozs7Ozs7Ozt3Q0FLVjtBQUNsQixnQkFBUSxJQUFJLGFBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNoRTs7OzhDQUV5QixTQUFTLEVBQUU7QUFDbkMsVUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7QUFDcEYsa0JBQVEsSUFBSSxhQUFXLFNBQVMsQ0FBQyxJQUFJLEVBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO09BQzlEO0tBQ0Y7OzsyQ0FFc0I7QUFDckIsZ0JBQVEsSUFBSSxhQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFJLElBQUksQ0FBQyxDQUFDO0tBQ2pEOzs7NkJBRVE7QUFDUCxhQUFPLElBQUksQ0FBQztLQUNiOzs7O0dBckJzQyxnQkFBTSxTQUFTOztBQUFuQyxXQUFXLENBQ3ZCLFNBQVMsR0FBRztBQUNqQixNQUFJLEVBQUUsaUJBQVUsTUFBTSxDQUFDLFVBQVU7Q0FDbEM7a0JBSGtCLFdBQVciLCJmaWxlIjoiVHJhbnNtaXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZW1pdHRlciB9IGZyb20gJy4vJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNtaXR0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxpbms6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGVtaXR0ZXIuZW1pdChgcmVuZGVyOiR7dGhpcy5wcm9wcy5saW5rfWAsIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmNoaWxkcmVuICE9PSB0aGlzLnByb3BzLmNoaWxkcmVuIHx8IG5leHRQcm9wcy5saW5rICE9PSB0aGlzLnByb3BzLmxpbmspIHtcbiAgICAgIGVtaXR0ZXIuZW1pdChgcmVuZGVyOiR7bmV4dFByb3BzLmxpbmt9YCwgbmV4dFByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBlbWl0dGVyLmVtaXQoYHJlbmRlcjoke3RoaXMucHJvcHMubGlua31gLCBudWxsKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19