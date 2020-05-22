import {} from '../../../redux/actions/actionTypes';

type TReducerChartData = {
  type: string
  payload: object[] | { label: string, data: number }
}

export default TReducerChartData;