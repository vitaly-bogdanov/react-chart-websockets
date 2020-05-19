import React, { FunctionComponent, useState, Fragment, ChangeEvent } from 'react';
import { Pie } from 'react-chartjs-2';
import InputChartData from '../inputChartData/InputChartData';

const PieChart: FunctionComponent = () => {
  let [chartData, setChartData] = useState([617594, 181045, 153060, 106519]);
  let [chartColor, setChartColor] = useState(['#fae500', '#CC342D', '#0C4B33', '#878fc2',]);
  let [chartLabel, setChartLabel] = useState(['JavaScript', 'Ruby', 'Python', 'PHP']);
  let data = {
    labels: chartLabel,
    datasets: [
      {
        label: 'Lang',
        data: chartData,
        backgroundColor: chartColor
      }
    ]
  };

  let changeDataHandler = (event: ChangeEvent<HTMLInputElement>, label: string) => {
    console.log(label);
    let valueIndex = chartLabel.indexOf(label);
    let newData = [...chartData];
    let value: number;
    if (event.target.value === '') {
      value = 0;
    } else {
      value = parseInt(event.target.value);
    }
    newData.splice(valueIndex, 1, value);
    setChartData(newData);
  }

  return (
    <Fragment>
      <Pie data={data}/>
      <ul>
        {
          chartData.map((value, index) => {
            let color = chartColor[index];
            let label = chartLabel[index];
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

export default PieChart;