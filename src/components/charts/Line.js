import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Line extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        stroke: {
          curve: 'smooth',
        },
        fill: {
          type: "gradient",
          gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            opacityFrom: 1,
            opacityTo: 1,
            colorStops: [
              {
                offset: 40,
                color: "#0ACEF9",
                opacity: 1
              },
              {
                offset: 50,
                color: "#FFE663",
                opacity: 1
              },
              {
                offset: 60,
                color: "#F9440A",
                opacity: 1
              }
            ]
          }
        },
        markers: {
          size: 0,
        },
        xaxis: {
          categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
      },
      series: [
        {
          data: [30, 40, 25, 50, 49, 21, 70, 51],
        },
      ],
    };
  }

  render() {
    return (
      <div className='line'>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type='line'
          width='500'
        />
      </div>
    );
  }
}

export default Line;
