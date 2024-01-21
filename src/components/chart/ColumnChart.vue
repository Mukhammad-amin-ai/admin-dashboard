<template>
  <div id="chart">
    <apexchart
      type="bar"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";

interface ChartData {
  data: number[][];
  name: string;
}

const colors = ["#92BAFB", "#4478FF"]; // Colors for Revenue and Margin

const series: ChartData[] = [
  {
    name: "",
    data: [
      [21, 30], // Aug
      [22, 12], // Sep
      [10, 6], // Oct
      [28, 14], // Nov
      [16, 8], // Dec
      [21, 10], // Jan
    ],
  },
];

const chartOptions = {
  chart: {
    height: 350,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  colors: colors,
  plotOptions: {
    bar: {
      columnWidth: "100%",
      distributed: true, // Set to true for separate columns
      borderRadius: 10,
    },
  },
  dataLabels: {
    enabled: false,
    distributed: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    show: true,
    categories: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    labels: {
      style: {
        colors: "#444",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    show: false,
    title: {
      text: "",
    },
  },
  tooltip: {
    enabled: true,
    y: {
      formatter: function (
        value: number,
        {
          seriesIndex,
          dataPointIndex,
        }: { seriesIndex: number; dataPointIndex: number }
      ) {
    
        const revenue = series[0].data[dataPointIndex][0];
        const margin = series[0].data[dataPointIndex][1];
        return `Revenue: ${revenue}<br/>Margin: ${margin}`;
      },
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
