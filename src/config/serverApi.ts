import axios, { Method, AxiosResponse, AxiosError } from 'axios';
import serverApiPath from './server-api-path.json';
import baseUrlServerHelper from './helpers/baseUrlServerHelper';

export const allChartDataApi: Function = (responseCallback: Function, errorCallback?: Function): void => {
  axios({
    method: <Method>serverApiPath.charts.allChartData.method,
    url: <string>baseUrlServerHelper(serverApiPath.charts.allChartData.path)
  }).then((response: AxiosResponse) => {
    responseCallback(response);
  }).catch((error: AxiosError) => {
    errorCallback && errorCallback(error);
  });
}