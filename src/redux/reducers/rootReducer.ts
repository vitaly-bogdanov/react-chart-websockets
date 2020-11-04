import { combineReducers } from 'redux';
import TRootState from '../../config/abstractions/types/TRootState';


import chartDataReducer from './chartDataReducer';

export default combineReducers<TRootState>({
  chartData: chartDataReducer
});
