import actionCable, { Cable } from 'actioncable';
import { domainServerApi, port } from '../config/constants';

const websocketConsumer: Cable = actionCable.createConsumer(`ws://${domainServerApi}:${port}/cable`);

export default websocketConsumer;