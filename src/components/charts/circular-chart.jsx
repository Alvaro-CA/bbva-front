import React from 'react'
import Chart from "react-apexcharts";

const options = {
    chart: {
        id: "donut",
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val + "%"
        },
    },
    plotOptions: {
        donut: {
            size: '65%'
        }
    }
}

const CircularChart = ({ type="donut", series, labels, makers, listPopup }) => {

  return (
    <>
        <Chart 
            options={options}
            type={type}
            width="500"
            series={series}
            labels={labels}
        />
    </>
  )
}

export default CircularChart;
