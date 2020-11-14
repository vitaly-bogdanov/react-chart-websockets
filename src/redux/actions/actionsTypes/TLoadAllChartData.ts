type TLoadAllChartData = {
  type: 'LOAD_ALL_CHART_DATA'
  payload: object[] | { label: string, data: number }
}

export default TLoadAllChartData;