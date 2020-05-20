import websocketConsumer from '../websocketConsumer';
import store from '../../redux/store';
import { 
  replaceChartData 
} from '../../redux/actions/actions';

let chartPiesChannel = () => {
  return websocketConsumer.subscriptions.create(
    {
      channel: 'ChartPiesChannel'
    }, 
    {
      received: (response): void => {
        store.dispatch(replaceChartData(response.data, response.name));
      }
    }
  );
}

export default chartPiesChannel();