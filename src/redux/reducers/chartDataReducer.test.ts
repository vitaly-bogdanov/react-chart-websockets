import chartDataReducer from './chartDataReducer';
import TChartReducerState from '../../config/abstractions/types/TChartReducerState';
import TLangData from '../../config/abstractions/types/TLangData';
import {
  loadAllChartData,
  websocketChartData,
  replaceChartData
} from '../actions/actions';

const initialState: TChartReducerState = {
  chartData: [],
  isDataLoaded: false
}

const chartData: TLangData[] = [
  {id: 1, name: 'ruby', data: 100, color: 'red'},
  {id: 2, name: 'python', data: 110, color: 'blue'},
  {id: 3, name: 'php', data: 500, color: 'white'},
  {id: 4, name: 'js', data: 300, color: 'black'}
];

const initialStateWithData: TChartReducerState = {
  chartData: [
    {id: 1, name: 'ruby', data: 100, color: 'red'},
    {id: 2, name: 'python', data: 110, color: 'blue'},
    {id: 3, name: 'php', data: 500, color: 'white'},
    {id: 4, name: 'js', data: 300, color: 'black'}
  ],
  isDataLoaded: true
}

it('should load all chart data', () => {
  let action = loadAllChartData(chartData);
  let newState = chartDataReducer(initialState, action);
  expect(newState.chartData.length).toBe(chartData.length);
  expect(newState.isDataLoaded).toBe(true);
});

it('should load one chart data from websocket', () => {
  let newLangData = { id: 1, name: 'ruby', data: 555, color: 'red' };
  let action = websocketChartData(newLangData);
  let newState = chartDataReducer(initialStateWithData, action);
  // изменилось ли значение data для записи с id 1
  expect(newState.chartData.find(langData => langData.data === newLangData.data)).toBe(newLangData);
});

it('should replace one chart data in input', () => {
  let newData = 300;
  let langName = 'python';
  let action = replaceChartData(newData, langName);
  let newState = chartDataReducer(initialStateWithData, action);
  let newLangData = newState.chartData.find(langData => langData.data === newData && langData.name === langName);
  expect(newLangData.name).toBe(langName);
  expect(newLangData.data).toBe(newData);
});
