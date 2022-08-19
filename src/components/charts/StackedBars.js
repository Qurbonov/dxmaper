import React from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
class ApexChart extends React.Component {
  componentDidMount() {
    axios
      .get(`http://localhost:8585/v1/atm/getChartInfos?year=2022`)
      .then((res) => {
        const cData = res.data;
        this.setState({
          series: [
            {
              name: "UZEX",
              data: [
                cData.tender_info[0].count,
                cData.konkurs_info[0].count,
                cData.digital_catalogue_info[0].count,
                cData.direct_contracts_info[0].count,
                cData.transaction_completed_info[0].count,
              ],
            },
            {
              name: "XT-XARID",
              data: [
                cData.tender_info[1].count,
                cData.konkurs_info[1].count,
                cData.digital_catalogue_info[1].count,
                cData.direct_contracts_info[1].count,
                cData.transaction_completed_info[1].count,
              ],
            },
            {
              name: "Cooperation",
              data: [
                cData.tender_info[2].count,
                cData.konkurs_info[2].count,
                cData.digital_catalogue_info[2].count,
                cData.direct_contracts_info[2].count,
                cData.transaction_completed_info[2].count,
              ],
            },
            {
              name: "Shaffof qurilish",
              data: [
                cData.tender_info[3].count,
                cData.konkurs_info[3].count,
                cData.digital_catalogue_info[3].count,
                cData.direct_contracts_info[3].count,
                cData.transaction_completed_info[3].count,
              ],
            },
          ],
        });
        // console.log("->", series);
      });
  }
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          // stackType: "100%",
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        stroke: {
          width: 0,
          colors: ["#f3e52d"],
        },
        title: {
          text: "ETPlar ishtiroki",
        },

        xaxis: {
          categories: [
            "Tender",
            "Konkurs",
            "Elektron katalog",
            "To'g'ridan to'g'ri shartnoma",
            "Auksion (Amalga oshirilgan savdo)",
          ],
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "ta";
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          // offsetX: 135,
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
      </div>
    );
  }
}
export default ApexChart;
