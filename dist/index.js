'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transmitter = exports.Receiver = exports.emitter = undefined;

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _Receiver2 = require('./Receiver');

var _Receiver3 = _interopRequireDefault(_Receiver2);

var _Transmitter2 = require('./Transmitter');

var _Transmitter3 = _interopRequireDefault(_Transmitter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emitter = exports.emitter = new _events2.default();

exports.Receiver = _Receiver3.default;
exports.Transmitter = _Transmitter3.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsZ0NBQWtDOzs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFNLE9BQU8sV0FBUCxPQUFPLEdBQUcsc0JBQWtCLENBQUM7O1FBRW5DLFFBQVE7UUFDUixXQUFXIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudHMnO1xuXG5leHBvcnQgY29uc3QgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuZXhwb3J0IFJlY2VpdmVyIGZyb20gJy4vUmVjZWl2ZXInO1xuZXhwb3J0IFRyYW5zbWl0dGVyIGZyb20gJy4vVHJhbnNtaXR0ZXInO1xuIl19