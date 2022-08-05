import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: [
          function({ value, seriesIndex, w }) {
            if (value < 50) {
              return '#FF0000'
            } else {
              return '#02DFDE'
            }
          }
        ],
        chart: {
          id: 'apexchart-example',
        },
        xaxis: {
          categories: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008],
        },
      },
      
      series: [
        {
          name: 'series-1',
          data: [32, 40, 35, 50, 49, 64, 70, 91, 125],
        },
      ],
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type='bar'
        width={500}
        height={320}
      />
    );
  }
}
export default Bar;
