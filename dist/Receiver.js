'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Receiver = (function (_React$Component) {
  _inherits(Receiver, _React$Component);

  function Receiver(props) {
    _classCallCheck(this, Receiver);

    var _this = _possibleConstructorReturn(this, (Receiver.__proto__ || Object.getPrototypeOf(Receiver)).call(this, props));

    _this.state = {
      children: null
    };
    _this.updateChildren = function (children) {
      _this.setState({ children: children });
      if (_this.props.onUpdate) {
        _this.props.onUpdate(children);
      }
    };
    return _this;
  }

  _createClass(Receiver, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _.emitter.on('render:' + this.props.link, this.updateChildren);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _.emitter.removeListener('render:' + this.props.link, this.updateChildren);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.state.children;

      if (!children) {
        if (!this.props.children) {
          return null;
        }
        children = this.props.children;
      }

      var _props = this.props,
          style = _props.style,
          className = _props.className;

      if (_react2.default.Children.count(children) === 1 && (typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object') {
        var onlyChild = _react2.default.Children.only(children);
        return _react2.default.cloneElement(onlyChild, { style: Object.assign({}, style, onlyChild.props.style), className: className });
      }
      return _react2.default.createElement('span', { style: style, className: className }, children);
    }
  }]);

  return Receiver;
})(_react2.default.Component);

Receiver.propTypes = {
  link: _react.PropTypes.string.isRequired,
  onUpdate: _react.PropTypes.func
};
exports.default = Receiver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZWNlaXZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDhCQUF5Qzs7OztBQUN6QyxzQkFBNkI7Ozs7Ozs7Ozs7OztJQUVSLFFBQVE7OztBQU0zQixvQkFBWSxLQUFLLEVBQUU7OztvSEFDWCxLQUFLOztBQUNYLFVBQUssS0FBSyxHQUFHO0FBQ1gsY0FBUSxFQUFFLElBQUk7S0FDZixDQUFDO0FBQ0YsVUFBSyxjQUFjLEdBQUcsVUFBQSxRQUFRLEVBQUk7QUFDaEMsWUFBSyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQVIsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUM1QixVQUFJLE1BQUssS0FBSyxDQUFDLFFBQVEsRUFBRTtBQUN2QixjQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7T0FDL0I7S0FDRixDQUFDOztHQUNIOzs7O3dDQUVtQjtBQUNsQixnQkFBUSxFQUFFLGFBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQzlEOzs7MkNBRXNCO0FBQ3JCLGdCQUFRLGNBQWMsYUFBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDMUU7Ozs2QkFFUTtVQUNELFFBQVEsR0FBSyxJQUFJLENBQUMsS0FBSyxDQUF2QixRQUFROztBQUNkLFVBQUksQ0FBQyxRQUFRLEVBQUU7QUFDYixZQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7QUFDeEIsaUJBQU8sSUFBSSxDQUFDO1NBQ2I7QUFDRCxnQkFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO09BQ2hDOzttQkFFNEIsSUFBSSxDQUFDLEtBQUs7VUFBL0IsS0FBSyxVQUFMLEtBQUs7VUFBRSxTQUFTLFVBQVQsU0FBUzs7QUFDeEIsVUFBSSxnQkFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFPLFFBQVEseUNBQVIsUUFBUSxPQUFLLFFBQVEsRUFBRTtBQUN4RSxZQUFNLFNBQVMsR0FBRyxnQkFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hELGVBQU8sZ0JBQU0sWUFBWSxDQUN2QixTQUFTLEVBQ1QsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFULFNBQVMsRUFBRSxDQUN0RSxDQUFDO09BQ0g7QUFDRCxhQUFPLGdCQUFNLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUwsS0FBSyxFQUFFLFNBQVMsRUFBVCxTQUFTLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNwRTs7OztHQTdDbUMsZ0JBQU0sU0FBUzs7QUFBaEMsUUFBUSxDQUNwQixTQUFTLEdBQUc7QUFDakIsTUFBSSxFQUFFLGlCQUFVLE1BQU0sQ0FBQyxVQUFVO0FBQ2pDLFVBQVEsRUFBRSxpQkFBVSxJQUFJO0NBQ3pCO2tCQUprQixRQUFRIiwiZmlsZSI6IlJlY2VpdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGVtaXR0ZXIgfSBmcm9tICcuLyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY2VpdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsaW5rOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb25VcGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIH07XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlbiA9IGNoaWxkcmVuID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGlsZHJlbiB9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uVXBkYXRlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25VcGRhdGUoY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBlbWl0dGVyLm9uKGByZW5kZXI6JHt0aGlzLnByb3BzLmxpbmt9YCwgdGhpcy51cGRhdGVDaGlsZHJlbik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKGByZW5kZXI6JHt0aGlzLnByb3BzLmxpbmt9YCwgdGhpcy51cGRhdGVDaGlsZHJlbik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKCFjaGlsZHJlbikge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgc3R5bGUsIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID09PSAxICYmIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IG9ubHlDaGlsZCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChcbiAgICAgICAgb25seUNoaWxkLFxuICAgICAgICB7IHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBzdHlsZSwgb25seUNoaWxkLnByb3BzLnN0eWxlKSwgY2xhc3NOYW1lIH1cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBzdHlsZSwgY2xhc3NOYW1lIH0sIGNoaWxkcmVuKTtcbiAgfVxufVxuIl19