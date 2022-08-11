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
              cData[0].proc.electronicShop,
              cData[1].proc.electronicShop,
              cData[2].proc.electronicShop,
              cData[3].proc.electronicShop,
              cData[4].proc.electronicShop,
              cData[5].proc.electronicShop,
              cData[6].proc.electronicShop,
              cData[7].proc.electronicShop,
              cData[8].proc.electronicShop,
              cData[9].proc.electronicShop,
              cData[10].proc.electronicShop,
              cData[11].proc.electronicShop,
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
          name: "Elektron do'kon savdolari soni ",
          data: [],
        },
      ],
      options: {
        title: {
          text: "Elektron do'kon ",
          align: "left",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "#263238",
          },
        },
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
        width={700}
        height={320}
      />
    );
  }
}
export default Bar;
