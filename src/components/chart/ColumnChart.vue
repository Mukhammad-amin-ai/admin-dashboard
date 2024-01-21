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

const colors = ["#4478FF", "#92BAFB"]; // Colors for Revenue and Margin

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
  colors: colors,
  plotOptions: {
    bar: {
      columnWidth: "32px",
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
