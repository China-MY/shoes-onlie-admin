<template>
  <div class="wrap">
    <AdminOverview class="item"></AdminOverview>
    <PieChart class="item"></PieChart>
    <BarChar class="item"></BarChar>
    <LineChart class="item"></LineChart>
  </div>
</template>

<script setup lang="ts">
import AdminOverview from './adminHome/AdminOverview.vue'
import PieChart from './adminHome/PieChart.vue'
import BarChar from './adminHome/BarChar.vue'
import LineChart from './adminHome/LineChart.vue'
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  box-shadow: var(--el-box-shadow-light);
  .item {
    width: 50%;
    height: calc((100vh - 100px) / 2);
    min-height:360px;
    padding: 20px;
    border: 1px solid #f5f5f5;
  }
}
</style>
