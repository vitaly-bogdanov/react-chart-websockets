import { 
  REPLACE_CHART_DATA, 
  LOAD_ALL_CHART_DATA 
} from './actionTypes';
import TReducerChartData from '../../config/abstractions/types/TReducerChartData';

export const loadAllChartData = (data: object[]): TReducerChartData => ({
  type: LOAD_ALL_CHART_DATA,
  payload: data
});

export const replaceChartData = (data: number, label: string): TReducerChartData => ({
  type: REPLACE_CHART_DATA,
  payload: { [label]: data }
});