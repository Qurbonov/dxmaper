import React, {Component} from "react";
import Chart from "react-apexcharts";
import axios from "axios";

class Bar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: "Tenderlar soni ",
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

                        opacity: 0.0,
                    },
                },
                title: {
                    text: "Tenderlar",
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
                colors: [
                    function ({value, seriesIndex, w}) {
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

    componentDidMount() {
        axios.get(process.env.REACT_APP_LOCAL_URL_GET_PROC_MONTHLY).then((res) => {
            const cData = res.data;
            console.log(cData);
            console.log(res.data);
            this.setState({
                series: [
                    {
                        data: [
                            cData[0].proc.tender,
                            cData[1].proc.tender,
                            cData[2].proc.tender,
                            cData[3].proc.tender,
                            cData[4].proc.tender,
                            cData[5].proc.tender,
                            cData[6].proc.tender,
                            cData[7].proc.tender,
                            cData[8].proc.tender,
                            cData[9].proc.tender,
                            cData[10].proc.tender,
                            cData[11].proc.tender,
                        ],
                    },
                ],
            });
        });
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
