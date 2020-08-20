<template>
  <div>
    <h1 class="text-3xl pb-6">Chart</h1>
    <div class="flex flex-wrap w-full">
      <div class="w-full p-4 m-2">
        <h2 class="text-2xl">Area Chart</h2>
        <AreaChart></AreaChart>
      </div>
      <div class="w-full p-4 m-2">
        <h2 class="text-2xl">Pie Chart</h2>
        <PieChart></PieChart>
      </div>
      <div class="w-full p-4 m-2">
        <h2 class="text-2xl">Bar Chart</h2>
        <BarChart></BarChart>
      </div>
      <div class="w-full p-4 m-2">
        <h2 class="text-2xl">Radar Chart</h2>
        <RadarChart></RadarChart>
      </div>
      <div class="w-full p-4 m-2">
        <h2 class="text-2xl">Line Chart</h2>
        <LineChart></LineChart>
      </div>
    </div>
  </div>
</template>
<script>
import AreaChart from '@/components/laravue_example/object/chart/AreaChart';
import PieChart from '@/components/laravue_example/object/chart/PieChart';
import BarChart from '@/components/laravue_example/object/chart/BarChart';
import RadarChart from '@/components/laravue_example/object/chart/RadarChart';
import LineChart from '@/components/laravue_example/object/chart/LineChart';

export default {
  name: 'Chart',

  // props: ["mode"],
  components: {
    AreaChart,
    PieChart,
    BarChart,
    RadarChart,
    LineChart
  },
  data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10
      }
    };
  }
};
</script>
