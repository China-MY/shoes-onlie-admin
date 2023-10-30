<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script lang="ts" setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent } from 'echarts/components'
// import VChart, { THEME_KEY } from 'vue-echarts'
import VChart from 'vue-echarts'
// import { ref, provide } from 'vue'
import { ref } from 'vue'
import { getOrderApi } from '@/apis/chats'

use([CanvasRenderer, LineChart, TitleComponent, TooltipComponent, GridComponent])

// provide(THEME_KEY, 'dark')

interface DataItem {
  date: string
  num: number
}

const data = ref<DataItem[]>([])

const getOrder = async () => {
  const res = await getOrderApi()
  console.log(res)
  data.value = res.data
  option.value.xAxis.data = data.value.map((item) => item.date)
  option.value.series[0].data = data.value.map((item) => item.num)
}
getOrder()
const option = ref({
  title: {
    text: '订单报表',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
})
</script>

<style scoped>
/* .chart {
  height: 100vh;
} */
</style>
