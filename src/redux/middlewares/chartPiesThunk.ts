import { AxiosResponse, AxiosError } from 'axios';
import { loadAllChartData } from '../actions/actions';
import { allChartDataApi } from '../../config/serverApi';
import { Dispatch } from 'redux';

const chartPiesThunk = (): any => (dispatch: Dispatch): void => {
	allChartDataApi((response: AxiosResponse) => {
    dispatch(loadAllChartData(response.data.langs));
  }, (error: AxiosError) => {
    console.dir(error);
  });
}

export default chartPiesThunk;