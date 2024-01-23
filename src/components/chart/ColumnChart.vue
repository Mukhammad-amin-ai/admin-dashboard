<template>
  <div id="chart">
    <apexchart
      type="bar"
      height="350"
      :options="chartData.chartOptions"
      :series="chartData.series"
    ></apexchart>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
interface Props {
  revenues: { year: string; month: string; revenue: string | null }[];
  margins: { year: string; month: string; margin: string | null }[];
}
interface SeriesData {
  name: string;
  data: {
    x: string;
    y: string | null;
  }[];
}
const { revenues, margins } = defineProps<Props>();
interface ChartData {
  series: SeriesData[];
  chartOptions: ChartOptions;
}
interface ChartOptions {
  chart: {
    height: number;
    type: string;
    stacked: boolean;
    toolbar: {
      show: boolean;
    };
  };
  colors: string[];
  plotOptions: {
    bar: {
      columnWidth: string;
      horizontal: boolean;
      borderRadius: number;
      dataLabels: {
        position: string;
      };
    };
  };

  grid: {
    borderColor: string;
    row: {
      colors: string[];
      opacity: number;
    };
  };
  tooltip: {
    enabled: boolean;
  };
  dataLabels: {
    enabled: false;
    distributed: false;
  };
  xaxis: {
    show: true;
    categories: string[];
    labels: {
      style: {
        colors: string;
        fontSize: string;
        fontFamily: string;
      };
    };
  };
  yaxis: {
    show: false;
    title: {
      text: string;
    };
  };

  legend: {
    show: false;
  };
}
interface AveragePayoutCarrier {
  average_revenue: number;
  average_margin: number;
  increase_average_revenue: number;
  increase_average_cost: number;
  revenues: { year: string; month: string; revenue: string | null }[];
  margins: { year: string; month: string; margin: string | null }[];
}
const average_payout_carrier = ref<AveragePayoutCarrier>({
  average_revenue: 0,
  average_margin: 0,
  increase_average_revenue: 0,
  increase_average_cost: 0,
  revenues: [],
  margins: [],
});
const colors = ["#4478FF", "#92BAFB"]; // Colors for Revenue and Margin
const chartData = ref<ChartData>({
  series: [],
  chartOptions: {
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
        columnWidth: "75%", // Adjust the width as needed
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
      labels: {
        style: {
          colors: "#909090",
          fontSize: "12px",
          fontFamily: "Euclid-Regular",
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
  },
});

axios
  .get(process.env.VUE_APP_URL + "overall/average-payout-carrier")
  .then((res) => {
    average_payout_carrier.value = res.data;
    chartData.value = {
      series: [
        {
          name: "Revenue",
          data: average_payout_carrier.value.revenues.slice(-12).map((item) => ({
            x: item.month,
            y: item.revenue,
          })),
        },
        {
          name: "Margin",
          data: average_payout_carrier.value.margins.slice(-12).map((item) => ({
            x: item.month,
            y: item.margin,
          })),
        },
      ],
      chartOptions: {
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
            columnWidth: "75%", // Adjust the width as needed
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
          labels: {
            style: {
              colors: "#909090",
              fontSize: "12px",
              fontFamily: "Euclid-Regular",
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
      },
    };
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
</script>
<style>
.apexcharts-bar-area {
  border-radius: 10px !important;
  overflow: hidden !important;
}
</style>
