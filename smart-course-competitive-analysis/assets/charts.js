(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  // --- Chart: Radar (三大平台能力雷达图) ---
  var chartRadar = echarts.init(document.getElementById('chart-radar'), null, { renderer: 'svg' });
  chartRadar.setOption({
    animation: false,
    tooltip: { trigger: 'item', appendToBody: true },
    legend: {
      data: ['超星泛雅', '智慧树', '学堂在线'],
      bottom: 0,
      textStyle: { color: ink, fontSize: 13 }
    },
    radar: {
      indicator: [
        { name: '知识图谱深度', max: 100 },
        { name: 'AI能力融合度', max: 100 },
        { name: 'AI工具丰富度', max: 100 },
        { name: '学科定制化', max: 100 },
        { name: '课程成果产出', max: 100 },
        { name: '品牌背书', max: 100 },
        { name: '运营服务', max: 100 },
        { name: '平台稳定性', max: 100 }
      ],
      shape: 'polygon',
      splitNumber: 4,
      axisName: { color: ink, fontSize: 12 },
      splitLine: { lineStyle: { color: rule } },
      splitArea: { show: false },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      name: '平台能力对比',
      type: 'radar',
      data: [
        {
          value: [75, 70, 95, 60, 70, 65, 85, 80],
          name: '超星泛雅',
          lineStyle: { color: '#e11d48', width: 2 },
          areaStyle: { color: 'rgba(225, 29, 72, 0.15)' },
          itemStyle: { color: '#e11d48' }
        },
        {
          value: [95, 95, 80, 95, 95, 85, 90, 90],
          name: '智慧树',
          lineStyle: { color: '#2563eb', width: 3 },
          areaStyle: { color: 'rgba(37, 99, 235, 0.2)' },
          itemStyle: { color: '#2563eb' }
        },
        {
          value: [50, 50, 45, 40, 70, 98, 60, 65],
          name: '学堂在线',
          lineStyle: { color: '#059669', width: 2 },
          areaStyle: { color: 'rgba(5, 150, 105, 0.15)' },
          itemStyle: { color: '#059669' }
        }
      ]
    }]
  });
  window.addEventListener('resize', function() { chartRadar.resize(); });

  // --- Chart: Scatter (竞争定位图) ---
  var chartScatter = echarts.init(document.getElementById('chart-scatter'), null, { renderer: 'svg' });
  chartScatter.setOption({
    animation: false,
    tooltip: {
      trigger: 'item',
      appendToBody: true,
      formatter: function(params) {
        return '<strong>' + params.data.name + '</strong><br/>功能深度: ' + params.data.value[0] + '<br/>品牌背书: ' + params.data.value[1];
      }
    },
    grid: { left: 60, right: 40, top: 40, bottom: 60 },
    xAxis: {
      name: '功能深度',
      nameLocation: 'middle',
      nameGap: 30,
      min: 30,
      max: 100,
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      axisLine: { lineStyle: { color: muted } },
      axisLabel: { color: muted }
    },
    yAxis: {
      name: '品牌背书',
      nameLocation: 'middle',
      nameGap: 40,
      min: 30,
      max: 100,
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      axisLine: { lineStyle: { color: muted } },
      axisLabel: { color: muted }
    },
    series: [{
      type: 'scatter',
      symbolSize: function(data) { return data[2]; },
      data: [
        { name: '超星泛雅', value: [72, 65, 55], itemStyle: { color: '#e11d48' } },
        { name: '智慧树', value: [92, 85, 65], itemStyle: { color: '#2563eb' } },
        { name: '学堂在线', value: [52, 98, 50], itemStyle: { color: '#059669' } }
      ],
      label: {
        show: true,
        formatter: '{b}',
        position: 'top',
        color: ink,
        fontSize: 13,
        fontWeight: 'bold'
      }
    }],
    graphic: [
      {
        type: 'text',
        left: '25%',
        top: '15%',
        style: { text: '低功能 + 高品牌', fill: muted, fontSize: 11 }
      },
      {
        type: 'text',
        left: '65%',
        top: '15%',
        style: { text: '高功能 + 高品牌', fill: muted, fontSize: 11 }
      },
      {
        type: 'text',
        left: '25%',
        top: '80%',
        style: { text: '低功能 + 低品牌', fill: muted, fontSize: 11 }
      },
      {
        type: 'text',
        left: '65%',
        top: '80%',
        style: { text: '高功能 + 低品牌', fill: muted, fontSize: 11 }
      }
    ]
  });
  window.addEventListener('resize', function() { chartScatter.resize(); });

  // --- Chart: Bar (核心能力评分对比) ---
  var chartBar = echarts.init(document.getElementById('chart-bar'), null, { renderer: 'svg' });
  chartBar.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      appendToBody: true
    },
    legend: {
      data: ['超星泛雅', '智慧树', '学堂在线'],
      top: 0,
      textStyle: { color: ink, fontSize: 13 }
    },
    grid: { left: 60, right: 20, top: 50, bottom: 40 },
    xAxis: {
      type: 'category',
      data: ['知识图谱', 'AI融合度', 'AI工具数', '学科定制', '课程成果', '品牌背书', '运营服务', '平台稳定性'],
      axisLabel: { color: muted, fontSize: 11, interval: 0, rotate: 20 },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'value',
      max: 100,
      axisLabel: { color: muted },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } }
    },
    series: [
      {
        name: '超星泛雅',
        type: 'bar',
        data: [75, 70, 95, 60, 70, 65, 85, 80],
        itemStyle: { color: '#e11d48', borderRadius: [4, 4, 0, 0] },
        barGap: '15%'
      },
      {
        name: '智慧树',
        type: 'bar',
        data: [95, 95, 80, 95, 95, 85, 90, 90],
        itemStyle: { color: '#2563eb', borderRadius: [4, 4, 0, 0] }
      },
      {
        name: '学堂在线',
        type: 'bar',
        data: [50, 50, 45, 40, 70, 98, 60, 65],
        itemStyle: { color: '#059669', borderRadius: [4, 4, 0, 0] }
      }
    ]
  });
  window.addEventListener('resize', function() { chartBar.resize(); });

})();
