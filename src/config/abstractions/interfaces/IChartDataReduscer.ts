interface IChartDataReduscer {
  type: string
  payload: {
    data: number | object[]
    label?: string
  }
}

export default IChartDataReduscer;