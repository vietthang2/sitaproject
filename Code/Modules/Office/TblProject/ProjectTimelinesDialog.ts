

namespace ECNET.Office {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.maximizable()
    @Serenity.Decorators.panel()
    
    export class ProjectTimelinesDialog extends Serenity.TemplatedDialog<any> {

        private areaChart: any;
        public projectId: number;
        static initializePage() {
            
        }

        protected onDialogOpen() {
            var projectId = this.projectId;
            
            super.onDialogOpen();
            
            
            $(function () {
                $.ajax({
                    url: '/Services/Office/TblProject/GetProjectTimelines',
                    type: 'post',
                    dataType: 'json',
                    data: { 'projectId': projectId },
                    success: function (response) {
                        $("#myTimeline").albeTimeline(response);


                    }
                });

            });
        }

        protected arrange() {
            super.arrange();
            this.dialogTitle = "Time line";
        }

        protected getTemplate() {
            // you could also put this in a ChartInDialog.Template.html file. it's here for simplicity.

            return "<div id='myTimeline'></div>";
        }

    }
}