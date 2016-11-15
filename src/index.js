import EventEmitter from 'events';
import Receiver from './Receiver';
import Transmitter from './Transmitter';

export const emitter = new EventEmitter();

export default {
  Receiver,
  Transmitter,
};
