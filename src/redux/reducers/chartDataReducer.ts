import TChartReducerState from '../../config/abstractions/types/TChartReducerState';
import TLangData from '../../config/abstractions/types/TLangData';

const initialState: TChartReducerState = {
  chartData: [],
  isDataLoaded: true
}

/* НЕВЕРОЯТНЫЕ КОСТЫЛИ, ПЕРЕПИСАТЬ */
const chartDataReducer = (state = initialState, action: any): TChartReducerState => {
  switch (action.type) {
    case 'LOAD_ALL_CHART_DATA':
      return {
        chartData: action.payload,
        isDataLoaded: true
      }
    case 'WEBSOCKET_CHART_DATA':
      let oldChartData = state.chartData.find((data: TLangData) => data.id === action.payload.id);
      // @ts-ignore
      let indexChartDataItem = state.chartData.indexOf(oldChartData);
      let newChartData = [...state.chartData];
      // @ts-ignore
      newChartData[indexChartDataItem] = action.payload;
      return {
        ...state,
        chartData: newChartData
      }
    case 'REPLACE_CHART_DATA':
      let chartItem: TLangData | undefined = state.chartData.find((data: TLangData) => data.name == action.payload.label);
      if (chartItem) {
        let chartIndex: number | undefined = state.chartData.indexOf(chartItem);
        // @ts-ignore
        chartItem.data = action.payload.data;
        let newChartData: TLangData[] = [
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