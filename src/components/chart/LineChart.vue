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
import { onMounted, ref } from "vue";
interface SeriesData {
  name: string;
  data: (number | null)[];
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
    hover: {
      size: number;
      sizeOffset: number;
      colors: string[];
    };
    strokeColors: string[];
    shape: string;
    colors: string[];
  };
  tooltip: {
    enabled: boolean;
    theme: string;
    // shared: boolean,
    // position: string,
    followCursor: boolean;
    placement: "top";
    tooltip: {
      x: {
        show: boolean;
      };
    };
  };
  dataLabels: {
    enabled: boolean;
    style: {
      colors: string[]; // Match series colors
    };
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
      data: [28, 20, 33, 36, 22, 32, 23, 34, 27, 25, 29, 37],
    },
    {
      name: "Cost",
      data: [22, 29, 13, 30, 32, 22, 33, 31, 39, 29, 19, 37],
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
    stroke: {
      width: [3, 3, 1],
      curve: "smooth",
      dashArray: [0, 7, 8],
    },
    title: {
      text: "",
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
      size: [6, 0],
      shape: "circle",
      colors: ["white", "white"], // Default color for both markers
      strokeColors: ["#92BAFB", "#92BAFB"], // Adjust strokeColors accordingly
      hover: {
        size: 6,
        sizeOffset: 3,
        colors: ["#F29E61", "#92BAFB"], // Hover colors for both markers
      },
    },

    tooltip: {
      enabled: true,
      // shared: false,
      theme: "light",
      tooltip: {
        x: {
          show: true,
        },
      },
      // position: 'top',
      followCursor: true,
      placement: "top",
    },
    dataLabels: {
      enabled: false,
      style: {
        colors: ["#92BAFB", "#F29E61"], // Match series colors
      },
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
        "Oct",
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

<style>
.apexcharts-tooltip {
  background: #192038 !important;
  color: white !important;
  background-size: 17px 9px; /* Set the size based on your SVG dimensions */
  background-position: center bottom; /* Adjust the position as needed */
  color: white !important;
  overflow: visible !important;
  /* transform: translate(50% , -150%); */
}
.apexcharts-tooltip::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='9' viewBox='0 0 17 9' fill='none'%3E%3Cpath d='M8.5 9L16.7272 0H0.272758L8.5 9Z' fill='%23192038'/%3E%3C/svg%3E");
  opacity: 1;
  background: transparent !important;
  transform: translateY(6px);
  fill: #192038;
  height: 50px;
  width: 50px;
  z-index: 99;
  right: 0;
  left: 41%;
  position: absolute;
  bottom: -40px !important;
  overflow: visible !important;
}

.apexcharts-xaxistooltip.apexcharts-xaxistooltip-bottom.apexcharts-theme-light {
  display: none;
}

.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
  background: #192038 !important;
  border: 0 !important;
  display: none;
}
.apexcharts-tooltip-text-y-label {
  fill: var(#92969f) !important;

  /* C1/Medium */
  font-family: Euclid-Regular, sans-serif !important;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
}
.apexcharts-tooltip-text-y-value {
  font-family: Euclid-Regular, sans-serif !important;
}
</style>
