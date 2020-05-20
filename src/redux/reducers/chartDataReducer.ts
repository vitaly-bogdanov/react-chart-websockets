import TReducerChartData from '../../config/abstractions/types/TReducerChartData';
import { 
  REPLACE_CHART_DATA,
  LOAD_ALL_CHART_DATA
} from '../actions/actionTypes';

const initialState = {
  chartData: {}
}

const chartDataReducer = (state = initialState, action: TReducerChartData): object => {
  switch (action.type) {
    case LOAD_ALL_CHART_DATA:
      return {
        ...action.payload
      }
    case REPLACE_CHART_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export default chartDataReducer;