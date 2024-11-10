const heighChart = 700;
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
                name: 'GSMART/AutoGest',
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
                id: 'SIG-DEV-2027',
                name: 'SIGIC',
            },
            {
                id: 'SIG-DEV-2025',
                name: 'SIGIC',
            },
            {
                id: 'GSM-DEV-2024',
                name: 'GSMART/AutoGest'
            },
            {
                id: 'GSM-DEV-2025',
                name: 'GSMART/AutoGest'
            },
            {
                id: 'GSM-INN-DEV-NEW-ARQ-2027',
                name: 'Nueva Arquitectura',
                color: '#8cff74',
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
                id: 'P.P-COM-DEV-2026',
                name: 'Portales Socio y Proveedor',
                color: '#FFDE21',
            },
            {
                id: 'P.P-COM-DEV-2027',
                name: 'Portales Socio y Proveedor',
                color: '#FFDE21',
            },
            {
                id: 'COM-DEV-2025',
                name: 'Nuevo Dep. COMERCIAL',
                color: '#FFDE21',
            },
            {
                id: 'GSM-COM-DEV-2026',
                name: 'GSMART/AUTOGEST',
                color: '#FFDE21',
            },
            {
                id: 'GSM-COM-DEV-2027',
                name: 'GSMART/AUTOGEST',
                color: '#FFDE21',
            },
            {
                id: 'GSM-INN-DEV-2026',
                name: 'GSMART - Nuevas funcionalidades',
                color: '#8cff74',
            },
            {
                id: 'GSM-INN-DEV-2027',
                name: 'GSMART - Nuevas funcionalidades',
                color: '#8cff74',
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
                id: 'INN-DEV-2025',
                column: 3,
                name: 'Dep. INNOVACIÓN',
                color: '#8cff74',
                offset: 0
            },
            {
                id: 'PROY-INN-DEV-2026',
                column: 4,
                name: 'Proyectos Innovación',
                color: '#8cff74',
                offset: 0
            },
            {
                id: 'PROY-INN-DEV-2027',
                name: 'Proyectos Innovación',
                color: '#8cff74',
            },
            {
                id: 'QA-DEV-2026',
                name: 'QA',
                column: 4,
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


            ['Desarrollos','GSM-DEV-2023',129038],
            ['Desarrollos','P.P-DEV-2023',16688],
            ['Desarrollos','GNM-DEV-2023',24300],
            ['Desarrollos','SIG-DEV-2023',95738],
            ['QA-DEV-2022','QA-DEV-2023',0],

            ['GSM-DEV-2023','GSM-DEV-2024',183484],
            ['GSM-DEV-2023','GSM-Dist-DEV-2024',76294],
            ['P.P-DEV-2023','P.P-DEV-2024',11746],
            ['GNM-DEV-2023','GNM-DEV-2024',73122],
            ['SIG-DEV-2023','SIG-DEV-2024',96879],
            ['BI-DEV-2023','BI-DEV-2024',37913],
            ['QA-DEV-2023','QA-DEV-2024',38325],

            ['GSM-DEV-2024','COM-DEV-2025',266993],
            ['GSM-Dist-DEV-2024','COM-DEV-2025',28415],
            ['P.P-DEV-2024','COM-DEV-2025',29541],
            ['GNM-DEV-2024','GNM-DEV-2025',81701],
            ['SIG-DEV-2024','SIG-DEV-2025',35176],
            ['QA-DEV-2024','QA-DEV-2025',65625],

            ['INN-DEV-2025','PROY-INN-DEV-2026',20625],
            //['INN-DEV-2025','GSM-INN-DEV-2026',118500],
            ['INN-DEV-2025','GSM-COM-DEV-2026',118500],            
            ['COM-DEV-2025','GSM-COM-DEV-2026',223125],
            ['COM-DEV-2025','P.P-COM-DEV-2026',112969],
            ['GNM-DEV-2025','GNM-DEV-2026',216000],
            ['SIG-DEV-2025','SIG-DEV-2026',37500],
            ['QA-DEV-2025','QA-DEV-2026',65625],

            ['GSM-COM-DEV-2026','GSM-INN-DEV-2027',101000],
            ['GSM-COM-DEV-2026','GSM-INN-DEV-NEW-ARQ-2027',41000],
            ['GSM-COM-DEV-2026','GSM-COM-DEV-2027',190630],
            ['P.P-COM-DEV-2026','P.P-COM-DEV-2027',112969],
            ['PROY-INN-DEV-2026','PROY-INN-DEV-2027',30625],
            ['GNM-DEV-2026','GNM-DEV-2027',150000],
            ['SIG-DEV-2026','SIG-DEV-2027',37500],
            ['QA-DEV-2026','QA-DEV-2027',65625],


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
        text:'Soporte y Mantenimiento',
        style: {
                    fontSize: '20px',
                    //fontWeight: 'bold',
                    textTransform: 'uppercase',
                    //color: 'green'
                    color: 'grey'
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
        //color verde// colors: ["#8cff74"], 
        colors: ["#898989"],
        keys: ['from', 'to', 'weight'],

        nodes: [

            {
                id: 'Soporte y Mantenimiento',
                column: 0,
                offset: 0
            },
            {
                id: 'GSM-SUP-2023',
                name: 'GSMART/AutoGest'
            },
            {
                id: 'GNM-SUP-2023',
                name: 'GNM',
            },
            {
                id: 'GNM-SUP-2024',
                name: 'GNM',
            },
            {
                id: 'GNM-SUP-2026',
                name: 'GNM',
            },
            {
                id: 'GNM-SUP-2027',
                name: 'GNM',
            },
            {
                id: 'GSM-SUP-2024',
                name: 'GSMART/AutoGest'
            },
            {
                id: 'GSM-SUP-2026',
                name: 'GSMART/AutoGest',
                color: '#FFDE21',
            },
            {
                id: 'GSM-SUP-2027',
                name: 'GSMART/AutoGest',
                color: '#FFDE21',
            },
            {
                id: 'GSM-SUP-2025',
                name: 'GSMART/AutoGest',
                color: '#FFDE21',
            },
            {
                id: 'GNM-SUP-2025',
                name: 'GNM'
            },
            {
                id: 'SIG-SUP-2024',
                column: 2,
                name: 'SIGIC',
                offset: 0
            },
            {
                 id: 'P.P-SUP-2024',
                column: 2,
                name: 'Portal Proveedor',
                offset: 0
            },
            {
                id: 'Infra-SUP-2024',
                column: 2,
                name: 'Estabilidad Servidores',
                offset: 0
            },
            {
                id: 'BI-SUP-2024',
                column: 2,
                name: 'Analítica & BI',
                offset: 0
            },
            {
                id: 'PROY-INN-SUP-2025',
                column: 3,
                name: 'Proyectos Innovación',
                color: '#8cff74',
                offset: 0
            },
            {
                id: 'PROY-INN-SUP-2026',
                name: 'Proyectos Innovación',
                color: '#8cff74',
            },
            {
                id: 'PROY-INN-SUP-2027',
                name: 'Proyectos Innovación',
                color: '#8cff74',
            },
            {
                id: 'SIG-SUP-2026',
                name: 'SIGIC'
            },
            {
                id: 'SIG-SUP-2025',
                name: 'SIGIC'
            },
            {
                id: 'SIG-SUP-2027',
                name: 'SIGIC'
            },
            {
                id: 'P.P-SUP-2026',
                name: 'Portales Socio y Proveedor',
                color: '#FFDE21',
            },
            {
                id: 'P.P-SUP-2027',
                name: 'Portales Socio y Proveedor',
                color: '#FFDE21',
            },
            {
                id: 'P.P-SUP-2025',
                name: 'Portales Socio y Proveedor',
                color: '#FFDE21',
            },
            {
                id: 'Infra-SUP-2026',
                name: 'Estabilidad Servidores'
            },
            {
                id: 'Infra-SUP-2025',
                name: 'Estabilidad Servidores'
            },
            {
                id: 'Infra-SUP-2027',
                name: 'Estabilidad Servidores'
            },
            {
                id: 'BI-SUP-2025',
                name: 'Analítica & BI'
            },
            {
                id: 'BI-SUP-2026',
                name: 'Analítica & BI'
            },
            {
                id: 'BI-SUP-2027',
                name: 'Analítica & BI'
            },
        ],
        data: [

            ['Soporte y Mantenimiento','GSM-SUP-2023',218588],
            ['Soporte y Mantenimiento','GNM-SUP-2023',101325],

            ['GSM-SUP-2023','GSM-SUP-2024',246263],
            ['GNM-SUP-2023','GNM-SUP-2024',123900],

            ['Infra-SUP-2024','Infra-SUP-2025',18000],
            ['BI-SUP-2024','BI-SUP-2025',65625],
            ['SIG-SUP-2024','SIG-SUP-2025',9000],
            ['GSM-SUP-2024','GSM-SUP-2025',196875],
            ['P.P-SUP-2024','P.P-SUP-2025',9000],
            ['GNM-SUP-2024','GNM-SUP-2025',123900],

            ['Infra-SUP-2025','Infra-SUP-2026',18000],
            ['BI-SUP-2025','BI-SUP-2026',65625],
            ['SIG-SUP-2025','SIG-SUP-2026',5625],
            ['PROY-INN-SUP-2025','PROY-INN-SUP-2026',15000],
            ['GSM-SUP-2025','GSM-SUP-2026',170625],
            ['P.P-SUP-2025','P.P-SUP-2026',28594],
            ['GNM-SUP-2025','GNM-SUP-2026',108750],

            ['Infra-SUP-2026','Infra-SUP-2027',18000],
            ['BI-SUP-2026','BI-SUP-2027',65625],
            ['SIG-SUP-2026','SIG-SUP-2027',5625],
            ['PROY-INN-SUP-2026','PROY-INN-SUP-2027',30000],
            ['GSM-SUP-2026','GSM-SUP-2027',180000],
            ['P.P-SUP-2026','P.P-SUP-2027',28594],
            ['GNM-SUP-2026','GNM-SUP-2027',108750],

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
