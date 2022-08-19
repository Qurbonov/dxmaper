import React, { Component } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
class Bar extends Component {
  componentDidMount() {
    axios.get(`http://localhost:8585/v1/atm/getProcMonthly`).then((res) => {
      const cData = res.data;
      // console.log(cData);

      this.setState({
        series: [
          {
            data: [
              cData[0].proc.directContracts,
              cData[1].proc.directContracts,
              cData[2].proc.directContracts,
              cData[3].proc.directContracts,
              cData[4].proc.directContracts,
              cData[5].proc.directContracts,
              cData[6].proc.directContracts,
              cData[7].proc.directContracts,
              cData[8].proc.directContracts,
              cData[9].proc.directContracts,
              cData[10].proc.directContracts,
              cData[11].proc.directContracts,
            ],
          },
        ],
      });
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Tog'ridan to'g'ri shartnomalar soni  ",
          data: [],
        },
      ],
      options: {
        dataLabels: {
          enabled: true,

          background: {
            enabled: true,
            foreColor: "#000",
            padding: 2,
            borderRadius: 0,
            borderWidth: 0,
            borderColor: "#93C572",
            opacity: 0,
          },
        },
        title: {
          text: "Tog'ridan to'g'ri shartnomalar ",
          align: "left",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: undefined,
            borderBottom: "1 solid red",
            
          },
        },
        colors: [
          function ({ value, seriesIndex, w }) {
            if (value < 50) {
              return "#FF0000";
            } else {
              return "#02DFDE";
            }
          },
        ],
        chart: {
          id: "apexchart-example",
        },
        xaxis: {
          categories: [
            "Yanvar",
            "Fevral",
            "Mart",
            "Aprel",
            "May",
            "Iyun",
            "Iyul",
            "Avgust",
            "Sentyabr",
            "Oktyabr",
            "Noyabr",
            "Dekabr",
          ],
        },
      },
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type='bar'
        height={320}
      />
    );
  }
}
export default Bar;
