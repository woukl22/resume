import * as echarts from 'https://cdn.jsdelivr.net/npm/echarts@5.4.0/dist/echarts.esm.min.js';

document.addEventListener('DOMContentLoaded', () => {
    var chartDom = document.getElementById('skills');
    var myChart = echarts.init(chartDom);
    var option;
  
    option = {
        grid: {
            left: '20%',
            right: '10%',
            top: '10%',
            },
        xAxis: {
            type: 'value',
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false,
            },
        },
        yAxis: {
            type: 'category',
            data: ['Python', 'Javascript', 'HTML', 'CSS', 'C'],
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        series: [{
            data: [
                {
                    value: 4,
                    itemStyle: {
                        color: '#FF6B6B',
                        borderRadius: 4,
                    },
                },
                {
                    value: 3,
                    itemStyle: {
                        color: '#4CAF50',
                        borderRadius: 4,
                    },
                },
                {
                    value: 3,
                    itemStyle: {
                        color: '#4CAF50',
                        borderRadius: 4,
                    },
                },
                {
                    value: 3,
                    itemStyle: {
                        color: '#4CAF50',
                        borderRadius: 4,
                    },
                },
                {
                    value: 2,
                    itemStyle: {
                        color: '#4CAF50',
                        borderRadius: 4,
                    },
                },
            ],
            type: 'bar',
            barWidth: '12px',
            label: {
                show: false,
                position: 'insideRight',
                color: '#fff',
                fontWeight: 'bold',
            },        
        }]
    };
  
    option && myChart.setOption(option);

    var chartDom2 = document.getElementById('kor');
    var myChart2 = echarts.init(chartDom2);
    var option2;

    option2 = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            show: false,
        },
        series: [{
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: true,
            label: {
                show: true,
                position: 'center',
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 100, name: '100%', itemStyle: { borderRadius: 4 } }
            ]
        }]
    };

    option2 && myChart2.setOption(option2);

    var chartDom3 = document.getElementById('eng');
    var myChart3 = echarts.init(chartDom3);
    var option3;

    option3 = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            show: false,
        },
        series: [{
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: true,
            label: {
                show: true,
                position: 'center',
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 60, name: '60%', itemStyle: { borderRadius: 4 } },
                { value: 40, name: '40%', itemStyle: { color: '#F8FAFC'} }
            ]
        }]
    };

    option3 && myChart3.setOption(option3);
  });