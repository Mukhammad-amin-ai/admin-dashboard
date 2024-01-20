<template>
  <div id="chart">
    <apexchart
      type="line"
      height="350"
      :options="chartData.chartOptions"
      :series="chartData.series"
    ></apexchart>
  </div>
</template>

<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";

interface SeriesData {
  name: string;
  data: number[];
}

interface ChartOptions {
  chart: {
    height: number;
    type: string;
    dropShadow: {
      enabled: boolean;
      color: string;
      top: number;
      left: number;
      blur: number;
      opacity: number;
    };
    toolbar: {
      show: boolean;
    };
  };
  colors: string[];
  dataLabels: {
    enabled: boolean;
  };
  stroke: {
    width: number[];
    curve: string;
    dashArray: number[];
  };
  title: {
    text: string;
    align: string;
  };
  grid: {
    borderColor: string;
    row: {
      colors: string[];
      opacity: number;
    };
  };
  markers: {
    size: number[];
    shape: string;
  };
  xaxis: {
    categories: string[];
    title: {
      text: string;
    };
  };
  yaxis: {
    title: {
      text: string;
    };
    min: number;
    max: number;
  };
  legend: {
    position: string;
    horizontalAlign: string;
    floating: boolean;
    offsetY: number;
    offsetX: number;
  };
}

interface ChartData {
  series: SeriesData[];
  chartOptions: ChartOptions;
}

const chartData: ChartData = {
  series: [
    {
      name: "Revenue",
      data: [28, 29, 33, 36, 32, 32, 33],
    },
    {
      name: "Cost",
      data: [12, 11, 14, 18, 17, 13, 13],
    },
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.1,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#92BAFB", "#F29E61"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [9, 3, 1],
      curve: "straight",
      dashArray: [0, 5, 8],
    },
    title: {
      text: "Average High & Low Temperature",
      align: "left",
    },
    grid: {
      borderColor: "transparent",
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0,
      },
    },
    markers: {
      size: [4, 5, 1, 2],
      shape: "circle",
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep' , "Nov" , "Dec"],
      title: {
        text: "Month",
      },
    },
    yaxis: {
      title: {
        text: "Temperature",
      },
      min: 5,
      max: 40,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  },
};
</script>

<style scoped></style>
