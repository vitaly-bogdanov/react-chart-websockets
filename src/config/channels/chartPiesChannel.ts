import websocketConsumer from '../websocketConsumer';
import store from '../../redux/store';
import { 
  websocketChartData
} from '../../redux/actions/actions';

let chartPiesChannel = () => {
  return websocketConsumer.subscriptions.create(
    {
      channel: 'ChartPiesChannel'
    },
    {
      connected: () => {
        console.log('ok');
      },
      received: (response): void => {
        console.log(response);
        store.dispatch(websocketChartData(response));
      }
    }
  );
}

export default chartPiesChannel();