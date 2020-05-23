import React, { FunctionComponent, Fragment, ChangeEvent } from 'react';
import { Pie } from 'react-chartjs-2';
import InputChartData from '../inputChartData/InputChartData';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { replaceChartData } from '../../redux/actions/actions';
import chartPiesChannel from '../../config/channels/chartPiesChannel';
import TLangData from '../../config/abstractions/types/TLangData';

const PieChart: FunctionComponent<{chartDataArr: TLangData[], isDataLoaded: boolean, replaceDataChart(data: number, name: string): void}> = (props) => {

  let chartDataChart: number[] = [];
  let chartColorChart: string[] = [];
  let chartNameChart: string[] = [];
  if (props.isDataLoaded) {
    props.chartDataArr.forEach((lang: TLangData) => {
      console.log(lang);
      chartDataChart.push(lang.data);
      chartColorChart.push(lang.color);
      chartNameChart.push(lang.name);
    });
  }
  
  let data = {
    labels: chartNameChart,
    datasets: [
      {
        label: 'Lang',
        data: chartDataChart,
        backgroundColor: chartColorChart
      }
    ]
  };

  let changeDataHandler = (event: ChangeEvent<HTMLInputElement>, label: string) => {
    let dataValue = event.target.value;
    let chartData: number = dataValue == '' ? 0 : parseInt(dataValue);
    props.replaceDataChart(chartData, label);
    // передать по вебсокетам на сервак
    chartPiesChannel.perform('update_chart_data', {label, data: chartData});
  }

  return (
    <Fragment>
      <Pie data={data}/>
      <ul>
        {
          chartDataChart.map((value, index) => {
            let color = chartColorChart[index];
            let label = chartNameChart[index];
            return (
              <li key={index}>
                <InputChartData
                  label={label} 
                  value={value} 
                  color={color}
                  changeData={changeDataHandler}
                />
              </li>
            );
          })
        }
      </ul>
    </Fragment>
  );
}

const mapStateToProps = (state: any) => ({
  chartDataArr: state.chartDataReducer.chartData,
  isDataLoaded: state.chartDataReducer.isDataLoaded
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  replaceDataChart: (data: number, name: string) => dispatch(replaceChartData(data, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(PieChart);