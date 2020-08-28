declare var Morris: any;
declare var Chart: any;

namespace ECNET.Common {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.maximizable()
    export class DashboardChart extends Serenity.TemplatedWidget<any> {
        private areaChart: any;
        private barChartData: any;
        private dounutChartData: any;

        static initializeChart() {
            $(function () {
                $(function () {
                    $.ajax({
                        url: '/Dashboard/GetDataDashboardDonutChart',
                        type: 'get',
                        dataType: 'json',

                        success: function (response) {
                            this.dounutChartData = new Morris.Donut({
                                element: 'sales-chart',
                                resize: true, parseTime: false,
                                data: response,
                                //colors: ["#0080ff", "#00ff40", "#00a65a", "#03ffdd", "#ed3309", "#03ffdd"],
                                colors: ['#afd8f8', '#4da74d', '#edc240','#0b62a4',  '#7A92A3'  ],
                                font: "tohama",
                                hideHover: 'auto'
                                //xkey: 'Month',
                                //ykeys: response.StatusKeys, labels: response.StatusLabels, hideHover: 'auto'
                            });


                        }
                    });

                });
                $.ajax({
                    url: '/Dashboard/CountByBranch',
                    type: 'get',
                    dataType: 'json',
                    
                    success: function (response) {
                        this.areaChart = new Morris.Bar({
                            element: 'revenue-chart2',
                            resize: true, parseTime: false,
                            data: response.Values,
                            xkey: 'Month',
                            ykeys: response.StatusKeys, labels: response.StatusLabels, hideHover: 'auto',
                            linecolors: ['#7A92A3', '#0b62a4', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed']
                        });


                    }
                });
                
            });
            

            //chart4
            $(function () {
                $.ajax({
                    url: '/Dashboard/SumScheduleByBranch',
                    type: 'get',
                    dataType: 'json',

                    success: function (response) {
                        this.areaChart = new Morris.Line({
                            element: 'bar-chart',
                            resize: true, parseTime: false,
                            data: response.Values,
                            xkey: 'Month',
                            ykeys: response.StatusKeys,
                            labels: response.StatusLabels, hideHover: 'auto',
                            linecolors: ['#7A92A3', '#0b62a4', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed']
                            
                        });


                    }
                });

            });

        }
    }
}