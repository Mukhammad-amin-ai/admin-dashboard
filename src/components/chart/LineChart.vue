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
import axios from "axios"
// interface Props {
  // revenues: { year: string; month: string; revenue: string | null }[];
  // costs: { year: string; month: string; cost: string | null }[];
// }

// const { revenues, costs } = defineProps<Props>();

import VueApexCharts from "vue3-apexcharts";
import { onMounted, ref , watch } from "vue";

interface SeriesData {
  name: string;
  data: {
    x: string;
    y: string | null;
  }[];
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
      colors: string[];
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



interface AverageCostBroker {
  average_revenue: number;
  average_cost: number;
  increase_average_revenue: number;
  increase_average_cost: number;
  revenues: { year: string; month: string; revenue: string | null }[];
  costs: { year: string; month: string; cost: string | null }[];
}

const average_cost_broker = ref<AverageCostBroker>({
  average_revenue: 0,
  average_cost: 0,
  increase_average_revenue: 0,
  increase_average_cost: 0,
  revenues: [],
  costs: [],
});

axios
  .get(process.env.VUE_APP_URL + "overall/average-cost-broker")
  .then((res) => {
    average_cost_broker.value = res.data;
    console.log(average_cost_broker.value, 'value have');
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  })
    console.log(average_cost_broker.value, 'value not');




const chartData: ChartData = {
  series: [
    {
      name: "Revenue",
      data: average_cost_broker.value.revenues.map((item) => ({ x: item.month, y: item.revenue })),
    },
    {
      name: "Cost",
      data: average_cost_broker.value.costs.map((item) => ({ x: item.month, y: item.cost })),
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
      colors: ["white", "white"],
      strokeColors: ["#92BAFB", "#92BAFB"],
      hover: {
        size: 6,
        sizeOffset: 3,
        colors: ["#F29E61", "#92BAFB"],
      },
    },

    tooltip: {
      enabled: true,
      theme: "light",
      tooltip: {
        x: {
          show: true,
        },
      },
      followCursor: true,
      placement: "top",
    },
    dataLabels: {
      enabled: false,
      style: {
        colors: ["#92BAFB", "#F29E61"],
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
  background-size: 17px 9px;
  background-position: center bottom;
  color: white !important;
  overflow: visible !important;
}

/* .apexcharts-tooltip::after {
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
} */

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
  font-family: Euclid-Regular, sans-serif !important;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}

.apexcharts-tooltip-text-y-value {
  font-family: Euclid-Regular, sans-serif !important;
}
</style>
