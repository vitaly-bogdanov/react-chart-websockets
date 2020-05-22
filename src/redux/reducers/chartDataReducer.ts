import { 
  REPLACE_CHART_DATA,
  LOAD_ALL_CHART_DATA,
  WEBSOCKET_CHART_DATA
} from '../actions/actionTypes';
import TReplaceChartData from '../../config//abstractions/types/TReplaceChartData';
import TReducerChartData from '../../config/abstractions/types/TReducerChartData';

const initialState = {
  chartData: [],
  isDataLoaded: true
}

type TChartState = {
  chartData: object[],
  isDataLoaded: boolean
}



/* НЕВЕРОЯТНЫЕ КОСТЫЛИ, ПЕРЕПИСАТЬ */
const chartDataReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case LOAD_ALL_CHART_DATA:
      return {
        ...state,
        chartData: action.payload,
        isDataLoaded: true
      }
    case WEBSOCKET_CHART_DATA:
      let oldChartData = state.chartData.find((data: any) => data.id === action.payload.id);
      // @ts-ignore
      let indexChartDataItem = state.chartData.indexOf(oldChartData);
      let newChartData = [...state.chartData];
      // @ts-ignore
      newChartData[indexChartDataItem] = action.payload;
      return {
        ...state,
        chartData: newChartData
      }
    case REPLACE_CHART_DATA:
      let chartItem = state.chartData.find((data: any) => data.name == action.payload.label);
      if (chartItem) {
        let chartIndex = state.chartData.indexOf(chartItem);
        // @ts-ignore
        chartItem.data = action.payload.data;
        let newChartData = [
          // @ts-ignore
          ...state.chartData,
        ];
        newChartData[chartIndex] = chartItem;
        return {
          ...state,
          chartData: newChartData
        }
      }
      return state;
    default:
      return state;
  }
}

export default chartDataReducer;