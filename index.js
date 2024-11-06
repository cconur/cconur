const heighChart = 600;
const labels = ['2022', '2023', '2024', '2025', '2026', '2027'];

Highcharts.chart('container', {
    chart: {
        height: heighChart,
        spacingBottom: 50,
        events: {
          render: function() {
            const positions = [30, this.chartWidth / (labels.length-1), 2 * this.chartWidth / (labels.length-1), 3 * this.chartWidth / (labels.length-1), 4 * this.chartWidth / (labels.length-1), this.chartWidth - 30];
    
            if (this.customLabels) {
              this.customLabels.forEach((customLabel, i) => {
                customLabel.attr({
                  x: positions[i],
                  y: 60
                });
              });
            } else {
              this.customLabels = [];
              labels.forEach((label, i) => {
                this.customLabels.push(
                  this.renderer.text(labels[i])
                  .attr({
                    x: positions[i],
                    y: 60,
                    align: 'center'
                  })
                  .css({
                    fontSize: '20px',
                    //fontWeight: 'bold',
                    color: 'black',
                  })
                  .add()
                );
              });
            }
          }
        }
    },
    title: {
        text: 'Evolución y Previsión de gastos Plataformas IT (SOFTECA)',
        tyle: {
                    fontSize: '25px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: 'black'
                }
    },
    subtitle: {
        text:'Desarrollos',
        style: {
                    fontSize: '20px',
                    //fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: '#39F'
                }
    },
    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight:,.0f}.'
        }
    },
    tooltip: {
        headerFormat: null,
        pointFormat:
      '{point.fromNode.name} \u2192 {point.toNode.name}: {point.weight:,.0f} €',
        nodeFormat: '{point.name}: {point.sum:,.0f} €'
    },
    series: [{
        nodeAlignment: 'bottom',
        colors: ["#39F"],
        keys: ['from', 'to', 'weight'],

        nodes: [
            {
                id: 'Desarrollos',
                column: 0,
                offset: 0
            },
            {
                id: 'GSM-DEV-2023',
                name: 'GSMART',
            },

            {
                id: 'GNM-DEV-2023',
                name: 'GNM',
            },
            {
                id: 'GNM-DEV-2024',
                name: 'GNM',
            },
            {
                id: 'GNM-DEV-2026',
                name: 'GNM',
            },
            {
                id: 'GNM-DEV-2027',
                name: 'GNM',
            },
            {
                id: 'GNM-DEV-2025',
                name: 'GNM',
            },
            {
                id: 'SIG-DEV-2023',
                name: 'SIGIC',
            },
            {
                id: 'SIG-DEV-2024',
                name: 'SIGIC',
            },
            {
                id: 'SIG-DEV-2026',
                name: 'SIGIC',
            },
            {
                id: 'SIG-DEV-2025',
                name: 'SIGIC',
            },
            {
                id: 'GSM-DEV-2024',
                name: 'GSMART'
            },
            {
                id: 'GSM-DEV-2025',
                name: 'GSMART'
            },
            {
                id: 'GSM-NEW-DEV-2026',
                name: 'Nueva Arquitectura'
            },
            {
                id: 'GSM-DEV-2026',
                name: 'GSMART'
            },
            {
                id: 'GSM-DEV-2027',
                name: 'GSMART'
            },
            {
                id: 'GSM-Dist-DEV-2024',
                name: 'GSMART Distribuidor'
            },
            {
                id: 'GSM-Dist-DEV-2025',
                name: 'GSMART Distribuidor'
            },
            {
                id: 'P.P-DEV-2023',
                name: 'Portal Proveedor'
            },
            {
                id: 'P.P-DEV-2024',
                name: 'Portal Proveedor'
            },
            {
                id: 'P.P-DEV-2025',
                name: 'Portal Proveedor'
            },
            {
                id: 'P.P-DEV-2026',
                name: 'Portal Proveedor'
            },
            {
                id: 'P.P-DEV-2027',
                name: 'Portal Proveedor'
            },
            {
                id: 'QA-DEV-2023',
                name: 'QA',
                column: 1,
                offset: 0
            },
            {
                id: 'BI-DEV-2023',
                name: 'Analítica & BI',
                column: 1,
                offset: 0
            },
            {
                id: 'DESP-TERR-2025',
                column: 3,
                name: 'Despliegue Terreno',
                color: '#FFDE21',
                offset: 0
            },
            {
                id: 'DESP-TERR-2026',
                column: 4,
                name: '+ 400 AutoGest & max ROI',
                color: '#FFDE21',
                offset: 0
            },
            {
                id: 'QA-DEV-2024',
                name: 'QA'
            },
            {
                id: 'QA-DEV-2025',
                name: 'QA'
            },
            {
                id: 'QA-DEV-2026',
                name: 'QA'
            },
            {
                id: 'QA-DEV-2027',
                name: 'QA'
            },
            {
                id: 'BI-DEV-2024',
                name: 'Analítica & BI'
            },

        ],
        data: [


            ['Desarrollos','GSM-DEV-2023',129037,5],
            ['Desarrollos','GNM-DEV-2023',24300],
            ['Desarrollos','SIG-DEV-2023',95737,5],
            ['Desarrollos','P.P-DEV-2023',16687,5],

            ['GSM-DEV-2023','GSM-DEV-2024',183484],
            ['GSM-DEV-2023','GSM-Dist-DEV-2024',76294],
            ['GNM-DEV-2023','GNM-DEV-2024',73122],
            ['SIG-DEV-2023','SIG-DEV-2024',96879],
            ['P.P-DEV-2023','P.P-DEV-2024',11746],
            ['QA-DEV-2023','QA-DEV-2024',38325],
            ['BI-DEV-2023','BI-DEV-2024',37913],

            ['GSM-DEV-2024','GSM-DEV-2025',266993],
            ['GSM-Dist-DEV-2024','GSM-Dist-DEV-2025',28415],
            ['GNM-DEV-2024','GNM-DEV-2025',81701],
            ['SIG-DEV-2024','SIG-DEV-2025',35176],
            ['P.P-DEV-2024','P.P-DEV-2025',29541],
            ['QA-DEV-2024','QA-DEV-2025',65625],

            ['GSM-DEV-2025','GSM-DEV-2026',126993],
            ['GNM-DEV-2025','GNM-DEV-2026',81701],
            ['P.P-DEV-2025','P.P-DEV-2026',9435],
            ['QA-DEV-2025','QA-DEV-2026',52500],

            ['DESP-TERR-2025','DESP-TERR-2026',200000],

            ['QA-DEV-2026','QA-DEV-2027',42000],
            ['GSM-DEV-2026','GSM-DEV-2027',190630],
            ['GSM-DEV-2026','GSM-NEW-DEV-2026',101000],
            ['GNM-DEV-2026','GNM-DEV-2027',81701],
            ['P.P-DEV-2026','P.P-DEV-2027',6591]


        ],
        type: 'sankey',
        name: 'Sankey demo series',

        // colors: ['#39F', '#8cff74'],
        dataLabels: {
                format: '{point.weight:,.0f} €',
                //format: '',
                style: {
                    fontSize: '15px',
                    fontWeight: 'bold',
                    color: 'black'
                },
            nodeFormat: '{point.name}',
        }
    }]

});





Highcharts.chart('container1', {

  chart: {
    height: heighChart,
    spacingBottom: 45,
    events: {
      render: function() {
        const positions = [30, this.chartWidth / (labels.length-1), 2 * this.chartWidth / (labels.length-1), 3 * this.chartWidth / (labels.length-1), 4 * this.chartWidth / (labels.length-1), this.chartWidth - 30];

        if (this.customLabels) {
          this.customLabels.forEach((customLabel, i) => {
            customLabel.attr({
              x: positions[i],
              y: this.chartHeight - 20
            });
          });
        } else {
          this.customLabels = [];
          labels.forEach((label, i) => {
            this.customLabels.push(
              this.renderer.text(labels[i])
              .attr({
                x: positions[i],
                y: this.chartHeight - 20,
                align: 'center'
              })
              .css({
                fontSize: '20px',
                //fontWeight: 'bold',
                color: 'black',
              })
              .add()
            );
          });
        }
      }
    }
  },

    title: {
        text: '',
    },
    subtitle: {
        text:'Evolutivos',
        style: {
                    fontSize: '20px',
                    //fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: 'green'
                }
    },
    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight:,.0f}.'
        }
    },
    tooltip: {
        headerFormat: null,
        pointFormat:
      '{point.fromNode.name} \u2192 {point.toNode.name}: {point.weight:,.0f} €',
        nodeFormat: '{point.name}: {point.sum:,.0f} €'
    },
    series: [{
        nodeAlignment: 'bottom',
        colors: ["#8cff74"],
        keys: ['from', 'to', 'weight'],

        nodes: [

            {
                id: 'Evolutivos',
                column: 0,
                offset: 0
            },
            {
                id: 'GSM-EVO-2023',
                name: 'GSMART',
            },
            {
                id: 'GNM-EVO-2023',
                name: 'GNM',
            },
            {
                id: 'GNM-EVO-2024',
                name: 'GNM',
            },
            {
                id: 'GNM-EVO-2026',
                name: 'GNM',
            },
            {
                id: 'GNM-EVO-2027',
                name: 'GNM',
            },
            {
                id: 'GSM-EVO-2024',
                name: 'GSMART',
            },
            {
                id: 'GSM-EVO-2026',
                name: 'GSMART',
            },
            {
                id: 'GSM-EVO-2027',
                name: 'GSMART',
            },
            {
                id: 'GSM-EVO-2025',
                name: 'GSMART'
            },
            {
                id: 'GNM-EVO-2025',
                name: 'GNM'
            },
            {
                id: 'SIG-EVO-2024',
                column: 2,
                name: 'SIGIC',
                offset: 0
            },
            {
                 id: 'P.P-EVO-2024',
                column: 2,
                name: 'Portal Proveedor',
                offset: 0
            },
            {
                id: 'Dev-EVO-2024',
                column: 2,
                name: 'Dev. Ops',
                offset: 0
            },
            {
                id: 'BI-EVO-2024',
                column: 2,
                name: 'Analítica & BI',
                offset: 0
            },
            {
                id: 'SIG-EVO-2026',
                name: 'SIGIC'
            },
            {
                id: 'SIG-EVO-2025',
                name: 'SIGIC'
            },
            {
                id: 'SIG-EVO-2027',
                name: 'SIGIC'
            },
            {
                id: 'P.P-EVO-2026',
                name: 'Portal Proveedor'
            },
            {
                id: 'P.P-EVO-2027',
                name: 'Portal Proveedor'
            },
            {
                id: 'P.P-EVO-2025',
                name: 'Portal Proveedor'
            },
            {
                id: 'Dev-EVO-2026',
                name: 'Dev. Ops.'
            },
            {
                id: 'Dev-EVO-2025',
                name: 'Dev. Ops.'
            },
            {
                id: 'Dev-EVO-2027',
                name: 'Dev. Ops.'
            },
            {
                id: 'BI-EVO-2025',
                name: 'Analítica & BI'
            },
            {
                id: 'BI-EVO-2026',
                name: 'Analítica & BI'
            },
            {
                id: 'BI-EVO-2027',
                name: 'Analítica & BI'
            },
        ],
        data: [



            ['Evolutivos','GSM-EVO-2023',218588],
            ['Evolutivos','GNM-EVO-2023',101325],

            ['GSM-EVO-2023','GSM-EVO-2024',246263],
            ['GNM-EVO-2023','GNM-EVO-2024',123900],


            ['Dev-EVO-2024','Dev-EVO-2025',18000],
            ['BI-EVO-2024','BI-EVO-2025',65625],
            ['GSM-EVO-2024','GSM-EVO-2025',196875],
            ['GNM-EVO-2024','GNM-EVO-2025',123900],
            ['SIG-EVO-2024','SIG-EVO-2025',9000],
            ['P.P-EVO-2024','P.P-EVO-2025',9000],


            ['Dev-EVO-2025','Dev-EVO-2026',18000],
            ['BI-EVO-2025','BI-EVO-2026',65625],
            ['GSM-EVO-2025','GSM-EVO-2026',136875],
            ['GNM-EVO-2025','GNM-EVO-2026',123900],
            ['SIG-EVO-2025','SIG-EVO-2026',9000],
            ['P.P-EVO-2025','P.P-EVO-2026',9000],


            ['Dev-EVO-2026','Dev-EVO-2027',18000],
            ['BI-EVO-2026','BI-EVO-2027',65625],
            ['GSM-EVO-2026','GSM-EVO-2027',136875],
            ['GNM-EVO-2026','GNM-EVO-2027',123900],
            ['SIG-EVO-2026','SIG-EVO-2027',9000],
            ['P.P-EVO-2026','P.P-EVO-2027',9000]



        ],
        type: 'sankey',
        name: 'Sankey demo series',

        // colors: ['#39F', '#8cff74'],
        dataLabels: {
                format: '{point.weight:,.0f} €',
                //format: '',
                style: {
                    fontSize: '15px',
                    fontWeight: 'bold',
                },
            nodeFormat: '{point.name}'
        }
    }]

});
