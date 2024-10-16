import * as echarts from 'https://cdn.jsdelivr.net/npm/echarts@5.4.0/dist/echarts.esm.min.js';

document.addEventListener('DOMContentLoaded', () => {
    var chartDom = document.getElementById('skills');
    var myChart = echarts.init(chartDom);
    var option;
  
    option = {
        grid: {
            left: '17%',
            right: '-12%',
            top: '10%',
            bottom: '27%',
            },
        xAxis: {
            type: 'value',
            axisLabel: {
                show: false
            },
            splitLine: {
                show: true,
            },
            axisLine: {
                show: false,
            }
        },
        yAxis: {
            type: 'category',
            data: ['Python', 'Javascript', 'HTML', 'CSS', 'Illustrator'],
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
                        color: '#3690c0',
                        borderRadius: 4,
                    },
                },
                {
                    value: 3,
                    itemStyle: {
                        color: '#67a9cf',
                        borderRadius: 4,
                    },
                },
                {
                    value: 3,
                    itemStyle: {
                        color: '#67a9cf',
                        borderRadius: 4,
                    },
                },
                {
                    value: 3,
                    itemStyle: {
                        color: '#67a9cf',
                        borderRadius: 4,
                    },
                },
                {
                    value: 2,
                    itemStyle: {
                        color: '#a6bddb',
                        borderRadius: 4,
                    },
                },
                6
            ],
            type: 'bar',
            barWidth: '17px',
            label: {
                show: false,
                position: 'right',
                color: '#666',
                fontWeight: 'light',
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
                { value: 100, name: '100%', itemStyle: { borderRadius: 4, color: '#3690c0' } }
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
                { value: 65, name: '65%', itemStyle: { borderRadius: 4, color: '#67a9cf' } },
                { value: 35, name: '35%', itemStyle: { color: '#F8FAFC'} }
            ]
        }]
    };

    option3 && myChart3.setOption(option3);

    var chartDom4 = document.getElementById('gpa');
    var myChart4 = echarts.init(chartDom4);
    var option4;

    option4 = {
    title: {
        text: '3.84',
        color: '#d7301f'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Cumulative', 'Major'],
      },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1-1', '1-2', '2-1', '2-2', '3-1', '3-2']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Cumulative',
            type: 'line',
            color: '#d7301f',
            data: [3.38, 3.68, 4.2, 4.08, 3.66, 4.08]
        },
        {
            name: 'Major',
            type: 'line',
            color: '#737373',
            data: [4.5, 3.79, 4, 4, 3.2, 3.88]
        },
    ]
    };

    option4 && myChart4.setOption(option4);

  });

document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.createElement('div');
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '10px';
    tooltip.style.borderRadius = '8px';
    tooltip.style.pointerEvents = 'none';
    tooltip.style.visibility = 'hidden';
    tooltip.style.fontFamily = 'Arial, sans-serif';
    tooltip.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    document.body.appendChild(tooltip);

    const tooltips = {
        'taiwan': {
            title: 'Super Rookie Taiwan Delegation Program',
            description: 'Visiting COMPUTEX 2023'
        },
        'tedi': {
            title: 'TEdI Coding Academy',
            description: 'Python & Data Structure Instructor'
        },
        'todayart': {
            title: 'Today Art',
            description: 'Culture & Art Magazine Editor'
        },
        'japan': {
            title: 'IP-IT Field Training',
            description: 'Visiting Japan'
        },
        'vis': {
            title: 'Participating in IEEE VIS 2024',
            description: 'As a poster speaker at the LDAV symposium'
        },
        'trainer': {
            title: 'Coding Trainer',
            description: '‘Computer Programming and Practice’ Course helper'
        },
        'project': {
            title: 'Industry-Academic Cooperation Project',
            description: 'Research ‘A Customized Validator Recommender System for PoS Networks Using Similarity-Based Circular Visualization‘'
        }
    };

    document.querySelectorAll('rect').forEach(rect => {
        rect.addEventListener('mouseenter', (event) => {
            const { title, description } = tooltips[event.target.id] || { title: 'No Title', description: 'No details available.' };

            tooltip.innerHTML = `
                <div style="font-weight: bold; font-size: 14px; margin-bottom: 5px;">
                    ${title}
                </div>
                <div style="font-size: 12px; font-weight: 300;">
                    ${description}
                </div>
            `;
            tooltip.style.visibility = 'visible';
        });

        rect.addEventListener('mousemove', (event) => {
            tooltip.style.top = `${event.clientY + 10}px`;
            tooltip.style.left = `${event.clientX + 10}px`;
        });

        rect.addEventListener('mouseleave', () => {
            tooltip.style.visibility = 'hidden';
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.createElement('div');
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '10px';
    tooltip.style.borderRadius = '8px';
    tooltip.style.pointerEvents = 'none';
    tooltip.style.visibility = 'hidden';
    tooltip.style.fontFamily = 'Arial, sans-serif';
    tooltip.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    document.body.appendChild(tooltip);

    const tooltips = {
        'call': {
            title: 'Call',
            description: '+82 10-9901-8732'
        },
        'mail': {
            title: 'Send Email',
            description: 'woukl22@gmail.com'
        },
        'github': {
            title: 'Visit GitHub',
            description: 'github.com/woukl22'
        }
    };

    const buttons = document.querySelectorAll('[data-tooltip]');
    const menuButton = document.getElementById('menu-button');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', (event) => {
            const tooltipData = tooltips[event.target.id] || { title: 'No Title', description: 'No details available.' };

            tooltip.innerHTML = `
                <div style="font-weight: bold; font-size: 14px; margin-bottom: 5px;">
                    ${tooltipData.title}
                </div>
                <div style="font-size: 12px; font-weight: 300;">
                    ${tooltipData.description}
                </div>
            `;
            tooltip.style.visibility = 'visible';
        });

        button.addEventListener('mousemove', (event) => {
            tooltip.style.top = `${event.clientY + 10}px`;
            tooltip.style.left = `${event.clientX + 10}px`;
        });

        button.addEventListener('mouseleave', () => {
            tooltip.style.visibility = 'hidden';
        });
    });

    menuButton.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });
    
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
});
