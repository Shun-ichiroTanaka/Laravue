<template>
  <div>
    <h1 class="text-3xl text-black pb-6">Chart</h1>
    <div class="flex flex-wrap w-full">
      <area-chart
        class="shadow-lg w-full bg-white p-4 m-2 rounded-lg"
      ></area-chart>
      <pie-chart
        class="shadow-lg w-full bg-white p-4 m-2 rounded-lg"
      ></pie-chart>
      <bar-chart
        class="shadow-lg w-full bg-white p-4 m-2 rounded-lg"
      ></bar-chart>
      <radar-chart
        class="shadow-lg w-full bg-white p-4 m-2 rounded-lg"
      ></radar-chart>
      <line-chart
        class="shadow-lg w-full bg-white p-4 m-2 rounded-lg"
      ></line-chart>
    </div>
  </div>
</template>
<script>
  import AreaChart from "@/components/object/chart/AreaChart";
  import PieChart from "@/components/object/chart/PieChart";
  import BarChart from "@/components/object/chart/BarChart";
  import RadarChart from "@/components/object/chart/RadarChart";
  import LineChart from "@/components/object/chart/LineChart";

  export default {
    name: "Chart",

    // props: ["mode"],
    components: {
      AreaChart,
      PieChart,
      BarChart,
      RadarChart,
      LineChart,
    },
    data() {
      return {
        chartData: {
          Books: 24,
          Magazine: 30,
          Newspapers: 10,
        },
      };
    },
  };
</script>
