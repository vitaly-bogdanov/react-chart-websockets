import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { ChartRoute } from '../../config/routes';
import PieChart from '../../components/pieChart/PieChartContainer';

class Chart extends Component {

  render() {
    return (
      <section>
        <Container maxWidth='sm'>
          <h1>{ChartRoute.name}</h1>
          <p><strong>Realtime Chart with websockets</strong></p>
          <PieChart />
        </Container>
      </section>
    );
  }
}

export default Chart;