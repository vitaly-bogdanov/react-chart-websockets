import TReducerChartData from '../../config/abstractions/types/TReducerChartData';
import TReplaceChartData from '../../config/abstractions/types/TReplaceChartData';
import TWebsocketChartData from '../../config/abstractions/types/TWebsocktChartData';
import TLangData from '../../config/abstractions/types/TLangData';

export const loadAllChartData = (data: object[]): TReducerChartData => ({
  type: 'LOAD_ALL_CHART_DATA',
  payload: data
});

export const replaceChartData = (data: number, label: string): TReplaceChartData => ({
  type: 'REPLACE_CHART_DATA',
  payload: { label, data }
});

export const websocketChartData = (data: TLangData ): TWebsocketChartData => ({
	type: 'WEBSOCKET_CHART_DATA',
	payload: data
});