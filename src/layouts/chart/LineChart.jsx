import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    title: {
      text: 'Breach by Password/Encryption'
    },
    yAxis: {
        title: {
            text: 'Likelihood'
        }
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    },
    series: [
      {
        name:"Password",
        data: [1, 2, 1, 4, 3, 6]
      },
      {
        name:"Encryption",
        data: [2, 4, 3, 4, 7, 8]
      }
    ]
  };

const LineChart = () => {
    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default LineChart
