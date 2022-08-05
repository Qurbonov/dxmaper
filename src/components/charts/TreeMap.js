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
                  auction: cData[0].proc_id_counts[0].proc_name,
                  auction_c: cData[0].proc_id_counts[0].count,
                  ed: cData[0].proc_id_counts[1].proc_name,
                  ed_c: cData[0].proc_id_counts[1].count,
                  tender: cData[0].proc_id_counts[2].proc_name,
                  tender_c: cData[0].proc_id_counts[2].count,
                  konkurs: cData[0].proc_id_counts[3].proc_name,
                  konkurs_c: cData[0].proc_id_counts[3].count,
                  tts: cData[0].proc_id_counts[4].proc_name,
                  tts_c: cData[0].proc_id_counts[4].count,
                },
                {
                  x: cData[1].region,
                  y: cData[1].count,
                  auction: cData[1].proc_id_counts[0].proc_name,
                  auction_c: cData[1].proc_id_counts[0].count,
                  ed: cData[1].proc_id_counts[1].proc_name,
                  ed_c: cData[1].proc_id_counts[1].count,
                  tender: cData[1].proc_id_counts[2].proc_name,
                  tender_c: cData[1].proc_id_counts[2].count,
                  konkurs: cData[1].proc_id_counts[3].proc_name,
                  konkurs_c: cData[1].proc_id_counts[3].count,
                  tts: cData[1].proc_id_counts[4].proc_name,
                  tts_c: cData[1].proc_id_counts[4].count,
                },
                {
                  x: cData[2].region,
                  y: cData[2].count,
                  auction: cData[2].proc_id_counts[0].proc_name,
                  auction_c: cData[2].proc_id_counts[0].count,
                  ed: cData[2].proc_id_counts[1].proc_name,
                  ed_c: cData[2].proc_id_counts[1].count,
                  tender: cData[2].proc_id_counts[2].proc_name,
                  tender_c: cData[2].proc_id_counts[2].count,
                  konkurs: cData[2].proc_id_counts[3].proc_name,
                  konkurs_c: cData[2].proc_id_counts[3].count,
                  tts: cData[2].proc_id_counts[4].proc_name,
                  tts_c: cData[2].proc_id_counts[4].count,
                },
                {
                  x: cData[3].region,
                  y: cData[3].count,
                  auction: cData[3].proc_id_counts[0].proc_name,
                  auction_c: cData[3].proc_id_counts[0].count,
                  ed: cData[3].proc_id_counts[1].proc_name,
                  ed_c: cData[3].proc_id_counts[1].count,
                  tender: cData[3].proc_id_counts[2].proc_name,
                  tender_c: cData[3].proc_id_counts[2].count,
                  konkurs: cData[3].proc_id_counts[3].proc_name,
                  konkurs_c: cData[3].proc_id_counts[3].count,
                  tts: cData[3].proc_id_counts[4].proc_name,
                  tts_c: cData[3].proc_id_counts[4].count,
                },
                {
                  x: cData[4].region,
                  y: cData[4].count,
                  auction: cData[4].proc_id_counts[0].proc_name,
                  auction_c: cData[4].proc_id_counts[0].count,
                  ed: cData[4].proc_id_counts[1].proc_name,
                  ed_c: cData[4].proc_id_counts[1].count,
                  tender: cData[4].proc_id_counts[2].proc_name,
                  tender_c: cData[4].proc_id_counts[2].count,
                  konkurs: cData[4].proc_id_counts[3].proc_name,
                  konkurs_c: cData[4].proc_id_counts[3].count,
                  tts: cData[4].proc_id_counts[4].proc_name,
                  tts_c: cData[4].proc_id_counts[4].count,
                },
                {
                  x: cData[5].region,
                  y: cData[5].count,
                  auction: cData[5].proc_id_counts[0].proc_name,
                  auction_c: cData[5].proc_id_counts[0].count,
                  ed: cData[5].proc_id_counts[1].proc_name,
                  ed_c: cData[5].proc_id_counts[1].count,
                  tender: cData[5].proc_id_counts[2].proc_name,
                  tender_c: cData[5].proc_id_counts[2].count,
                  konkurs: cData[5].proc_id_counts[3].proc_name,
                  konkurs_c: cData[5].proc_id_counts[3].count,
                  tts: cData[5].proc_id_counts[4].proc_name,
                  tts_c: cData[5].proc_id_counts[4].count,
                },
                {
                  x: cData[6].region,
                  y: cData[6].count,
                  auction: cData[6].proc_id_counts[0].proc_name,
                  auction_c: cData[6].proc_id_counts[0].count,
                  ed: cData[6].proc_id_counts[1].proc_name,
                  ed_c: cData[6].proc_id_counts[1].count,
                  tender: cData[6].proc_id_counts[2].proc_name,
                  tender_c: cData[6].proc_id_counts[2].count,
                  konkurs: cData[6].proc_id_counts[3].proc_name,
                  konkurs_c: cData[6].proc_id_counts[3].count,
                  tts: cData[6].proc_id_counts[4].proc_name,
                  tts_c: cData[6].proc_id_counts[4].count,
                },
                {
                  x: cData[7].region,
                  y: cData[7].count,
                  auction: cData[7].proc_id_counts[0].proc_name,
                  auction_c: cData[7].proc_id_counts[0].count,
                  ed: cData[7].proc_id_counts[1].proc_name,
                  ed_c: cData[7].proc_id_counts[1].count,
                  tender: cData[7].proc_id_counts[2].proc_name,
                  tender_c: cData[7].proc_id_counts[2].count,
                  konkurs: cData[7].proc_id_counts[3].proc_name,
                  konkurs_c: cData[7].proc_id_counts[3].count,
                  tts: cData[7].proc_id_counts[4].proc_name,
                  tts_c: cData[7].proc_id_counts[4].count,
                },
                {
                  x: cData[8].region,
                  y: cData[8].count,
                  auction: cData[8].proc_id_counts[0].proc_name,
                  auction_c: cData[8].proc_id_counts[0].count,
                  ed: cData[8].proc_id_counts[1].proc_name,
                  ed_c: cData[8].proc_id_counts[1].count,
                  tender: cData[8].proc_id_counts[2].proc_name,
                  tender_c: cData[8].proc_id_counts[2].count,
                  konkurs: cData[8].proc_id_counts[3].proc_name,
                  konkurs_c: cData[8].proc_id_counts[3].count,
                  tts: cData[8].proc_id_counts[4].proc_name,
                  tts_c: cData[8].proc_id_counts[4].count,
                },
                {
                  x: cData[9].region,
                  y: cData[9].count,
                  auction: cData[9].proc_id_counts[0].proc_name,
                  auction_c: cData[9].proc_id_counts[0].count,
                  ed: cData[9].proc_id_counts[1].proc_name,
                  ed_c: cData[9].proc_id_counts[1].count,
                  tender: cData[9].proc_id_counts[2].proc_name,
                  tender_c: cData[9].proc_id_counts[2].count,
                  konkurs: cData[9].proc_id_counts[3].proc_name,
                  konkurs_c: cData[9].proc_id_counts[3].count,
                  tts: cData[9].proc_id_counts[4].proc_name,
                  tts_c: cData[9].proc_id_counts[4].count,
                },
                {
                  x: cData[10].region,
                  y: cData[10].count,
                  auction: cData[10].proc_id_counts[0].proc_name,
                  auction_c: cData[10].proc_id_counts[0].count,
                  ed: cData[10].proc_id_counts[1].proc_name,
                  ed_c: cData[10].proc_id_counts[1].count,
                  tender: cData[10].proc_id_counts[2].proc_name,
                  tender_c: cData[10].proc_id_counts[2].count,
                  konkurs: cData[10].proc_id_counts[3].proc_name,
                  konkurs_c: cData[10].proc_id_counts[3].count,
                  tts: cData[10].proc_id_counts[4].proc_name,
                  tts_c: cData[10].proc_id_counts[4].count,
                },
                {
                  x: cData[11].region,
                  y: cData[11].count,
                  auction: cData[11].proc_id_counts[0].proc_name,
                  auction_c: cData[11].proc_id_counts[0].count,
                  ed: cData[11].proc_id_counts[1].proc_name,
                  ed_c: cData[11].proc_id_counts[1].count,
                  tender: cData[11].proc_id_counts[2].proc_name,
                  tender_c: cData[11].proc_id_counts[2].count,
                  konkurs: cData[11].proc_id_counts[3].proc_name,
                  konkurs_c: cData[11].proc_id_counts[3].count,
                  tts: cData[11].proc_id_counts[4].proc_name,
                  tts_c: cData[11].proc_id_counts[4].count,
                },
                {
                  x: cData[12].region,
                  y: cData[12].count,
                  auction: cData[12].proc_id_counts[0].proc_name,
                  auction_c: cData[12].proc_id_counts[0].count,
                  ed: cData[12].proc_id_counts[1].proc_name,
                  ed_c: cData[12].proc_id_counts[1].count,
                  tender: cData[12].proc_id_counts[2].proc_name,
                  tender_c: cData[12].proc_id_counts[2].count,
                  konkurs: cData[12].proc_id_counts[3].proc_name,
                  konkurs_c: cData[12].proc_id_counts[3].count,
                  tts: cData[12].proc_id_counts[4].proc_name,
                  tts_c: cData[12].proc_id_counts[4].count,
                },
                {
                  x: cData[13].region,
                  y: cData[13].count,
                  auction: cData[13].proc_id_counts[0].proc_name,
                  auction_c: cData[13].proc_id_counts[0].count,
                  ed: cData[13].proc_id_counts[1].proc_name,
                  ed_c: cData[13].proc_id_counts[1].count,
                  tender: cData[13].proc_id_counts[2].proc_name,
                  tender_c: cData[13].proc_id_counts[2].count,
                  konkurs: cData[13].proc_id_counts[3].proc_name,
                  konkurs_c: cData[13].proc_id_counts[3].count,
                  tts: cData[13].proc_id_counts[4].proc_name,
                  tts_c: cData[13].proc_id_counts[4].count,
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
              "<li  class='list-group-item'><b>Jami savdolar soni</b>: " +
              "<span class='badge bg-primary text-light rounded-pill'>" +
              data.y +
              " ta" +
              "</span>" +
              "</li>" +
              "<li class='list-group-item'><b>Auction</b>: " +
              "<span class='badge bg-success text-light rounded-pill'>" +
              data.auction_c +
              " ta" +
              "</span>" +
              "</li>" +
              "</li>" +
              "<li class='list-group-item'><b>Elektron do`kon</b>: " +
              "<span class='badge bg-success text-light rounded-pill'>" +
              data.ed_c +
              " ta" +
              "</span>" +
              "</li>" +
              "</li>" +
              "<li class='list-group-item'><b>Tender</b>: " +
              "<span class='badge bg-success text-light rounded-pill'>" +
              data.tender_c +
              " ta" +
              "</span>" +
              "</li>" +
              "</li>" +
              "<li class='list-group-item'><b>Konkurs</b>: " +
              "<span class='badge bg-success text-light rounded-pill'>" +
              data.konkurs_c +
              " ta" +
              "</span>" +
              "</li>" +
              "</li>" +
              "<li class='list-group-item'><b>To`g`ridan-to`g`ri shartnomalar</b>: " +
              "<span class='badge bg-success text-light rounded-pill'>" +
              data.tts_c +
              " ta" +
              "</span>" +
              "</li>" +
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
