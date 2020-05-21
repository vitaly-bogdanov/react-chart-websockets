import { 
  REPLACE_CHART_DATA,
  LOAD_ALL_CHART_DATA
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
    case REPLACE_CHART_DATA:
      let chartItem = state.chartData.find((data: any) => data.name == action.payload.label);
      if (chartItem) {
        let chartIndex = state.chartData.indexOf(chartItem);

        // @ts-ignore
        let chartColor = chartItem.color;
        // @ts-ignore
        let chartId = chartItem.id;

        let newChartData = state.chartData;

        // @ts-ignore
        newChartData[chartIndex] = {id: chartId, name: action.payload.label, data: action.payload.data, color: chartColor};

        return {
          ...state,
          chartData: [
            ...state.chartData,
            newChartData
          ]
        }
      }
      return state;
    default:
      return state;
  }
}

export default chartDataReducer;