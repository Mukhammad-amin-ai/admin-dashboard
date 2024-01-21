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
  data: number[];
  name: string;
}

const colors = ["#92BAFB", "#4478FF"]; // Colors for Revenue and Margin

const series: ChartData[] = [
  {
    name: "Revenue",
    data: [21, 22, 10, 28, 16, 21],
  },
  {
    name: "Margin",
    data: [10, 12, 6, 14, 8, 10],
  },
];

const chartOptions = {
  chart: {
    stacked: true,
    height: 350,
    type: "bar",
    toolbar: {
      show: false,
    },
    
  },
  grid: {
      borderColor: "transparent",
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0,
      },
    },
  colors: colors,
  plotOptions: {
    bar: {
      columnWidth: "45%", // Adjust the width as needed
      horizontal: false, // Set to false for vertical bars
      borderRadius: 10,
      dataLabels: {
        position: "top",
      },
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
        colors: "#909090",
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
  },
};
</script>
<style>
.apexcharts-bar-area {
  border-radius: 10px !important;
  overflow: hidden !important;
}
</style>
