import React from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
class ApexChart extends React.Component {
  // state = {
  //   chartData: [],
  // };
  componentDidMount() {
    axios
      .get(`http://localhost:8585/v1/atm/getResultatStatisticsOnRegions`)
      .then((res) => {
        const cData = res.data;
        console.log(cData);
        this.setState({
          series: [
            {
              data: [
                {
                  x: cData[0].region,
                  y: cData[0].count,
                },
                {
                  x: cData[1].region,
                  y: cData[1].count,
                },
                {
                  x: cData[2].region,
                  y: cData[2].count,
                },
                {
                  x: cData[3].region,
                  y: cData[3].count,
                },
                {
                  x: cData[4].region,
                  y: cData[4].count,
                },
                {
                  x: cData[5].region,
                  y: cData[5].count,
                },
                {
                  x: cData[6].region,
                  y: cData[6].count,
                },
                {
                  x: cData[7].region,
                  y: cData[7].count,
                },
                {
                  x: cData[8].region,
                  y: cData[8].count,
                },
                {
                  x: cData[9].region,
                  y: cData[9].count,
                },
                {
                  x: cData[10].region,
                  y: cData[10].count,
                },
                {
                  x: cData[11].region,
                  y: cData[11].count,
                },
                {
                  x: cData[12].region,
                  y: cData[12].count,
                },
                {
                  x: cData[13].region,
                  y: cData[13].count,
                },
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
          data: [],
        },
      ],

      options: {
        legend: {
          show: false,
        },
        chart: {
          events: {
            dataPointSelection: (event, chartContext, config) => {
              console.log("dd");
            },
          },
          height: 350,
          type: "treemap",
        },
        title: {
          text: "Hududlar kesimidagi savdolar soni",
          align: "center",
        },
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            var data =
              w.globals.initialSeries[seriesIndex].data[dataPointIndex];

            return (
              "<ul class='list-group p-2'>" +
              "<li class='list-group-item'><b>Hudud</b>: " +
              "<span class='badge bg-info rounded-pill'>" +
              data.x +
              "</span>" +
              "</li>" +
              "<li  class='list-group-item'><b>Savdolar soni</b>: " +
              "<span class='badge bg-secondary text-light rounded-pill'>" +
              data.y +
              "</span>" +
              "</li>" +
              // "<li  class='list-group-item'><b>Product</b>: '" +
              // data.product +
              // "'</li>" +
              // "<li  class='list-group-item'><b>Info</b>: '" +
              // data.info +
              // "'</li>" +
              // "<li  class='list-group-item'><b>Site</b>: '" +
              // data.site +
              // "'</li>" +
              "</ul>"
            );
          },
        },
        colors: [
          "#3B93A5",
          "#F7B844",
          "#ADD8C7",
          "#EC3C65",
          "#CDD7B6",
          "#C1F666",
          "#D43F97",
          "#1E5D8C",
          "#421243",
          "#7F94B0",
          "#EF6537",
          "#C0ADDB",
          "#7dACCB",
          "#5dd888",
        ],
        plotOptions: {
          treemap: {
            distributed: true,
            enableShades: true,
          },
        },
      },
    };
  }

  render() {
    return (
      <div id='chart'>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type='bar'
          height={350}
        />
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type='treemap'
          height={350}
        />
      </div>
    );
  }
}
export default ApexChart;

// const domContainer = document.querySelector("#app");
// ReactDOM.render(React.createElement(ApexChart), domContainer);
