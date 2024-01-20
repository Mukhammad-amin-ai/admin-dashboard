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
  }
  
  const colors = ["#E0E1E5"];
  
  const series: ChartData[] = [
    {
      data: [21, 22, 10, 28, 16, 21],
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
        columnWidth: "45%",
        distributed: false,
        borderRadius: 10,
      },
    },
    dataLabels: {
          enabled: false,
          distributed:false
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["Aug"],
        ["Sep"],
        ["Oct"],
        ["Nov"],
        ["Dec"],
        ["Jan"],
      ],
      labels: {
        style: {
          colors: colors,
          fontSize: "12px",
          hover: {
            backgroundColor: "#4478FF",
          },
        },
      },
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  