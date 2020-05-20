import { AxiosResponse, AxiosError } from 'axios';
import { loadAllChartData } from '../actions/actions';
import { allChartDataApi } from '../../config/serverApi';
import { Dispatch, AnyAction, ActionCreator, Action } from 'redux';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';

const chartPiesThunk = (): any => (dispatch: Dispatch): void => {
	allChartDataApi((response: AxiosResponse) => {
    console.log(response);
    dispatch(loadAllChartData(response.data.langs));
  }, (error: AxiosError) => {
    console.dir(error);
    
  });
}

export default chartPiesThunk;