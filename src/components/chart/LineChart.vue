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
  markers: {
    size: number[];
    shape: string;
    colors: string;
    hover: {
      size: number;
      sizeOffset: number;
    };
    strokeColors: string;
  };
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
    colors: string;
    hover: {
      size: number;
      sizeOffset: number;
    };
    strokeColors: string;
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
      data: [28, 20, 33, 36, 22, 32, 23, 34, 27, 25, 29],
      markers: {
        size: [6],
        hover: {
          size: 6,
          sizeOffset: 3,
        },
        shape: "circle",
        colors: "white",
        strokeColors: "#92BAFB",
      },
    },
    {
      name: "Cost",
      data: [28, 29, 13, 30, 32, 22, 33, 31, 39, 29, 19],
      markers: {
        size: [0],
        hover: {
          size: 6,
          sizeOffset: 3,
        },
        shape: "circle",
        colors: "white",
        strokeColors: "#92BAFB",
      },
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
      width: [3, 3, 1],
      curve: "smooth",
      dashArray: [0, 7, 8],
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
      size: [6],
      hover: {
        size: 6,
        sizeOffset: 3,
      },
      shape: "circle",
      colors: "white",
      strokeColors: "#92BAFB",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Nov",
        "Dec",
      ],
      title: {
        text: "",
      },
    },
    yaxis: {
      title: {
        text: "",
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
