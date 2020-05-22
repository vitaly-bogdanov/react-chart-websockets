import { 
  REPLACE_CHART_DATA,
  LOAD_ALL_CHART_DATA,
  WEBSOCKET_CHART_DATA 
} from './actionTypes';
import TReducerChartData from '../../config/abstractions/types/TReducerChartData';
import TReplaceChartData from '../../config/abstractions/types/TReplaceChartData';

export const loadAllChartData = (data: object[]): TReducerChartData => ({
  type: LOAD_ALL_CHART_DATA,
  payload: data
});

export const replaceChartData = (data: number, label: string): TReplaceChartData => ({
  type: REPLACE_CHART_DATA,
  payload: { label, data }
});

// @ts-ignore
export const websocketChartData = (data): any => ({
	type: WEBSOCKET_CHART_DATA,
	payload: data
});