namespace Sita.Administration {
    declare namespace PermissionKeys {
        export const Security = "Administration:Security";
        export const Translation = "Administration:Translation";
        export const General = "Sita:General";

        namespace Bags {
            export const Delete = "Sita:dbo.tblBags:Delete";
            export const Modify = "Sita:dbo.tblBags:Modify";
            export const View = "Sita:dbo.tblBags:View";
        }

        namespace Flight {
            export const Delete = "Sita:dbo.tblFlight:Delete";
            export const Modify = "Sita:dbo.tblFlight:Modify";
            export const View = "Sita:dbo.tblFlight:View";
        }

        namespace BagsHistory {
            export const Delete = "Sita:dbo.tblBagsHistory:Delete";
            export const Modify = "Sita:dbo.tblBagsHistory:Modify";
            export const View = "Sita:dbo.tblBagsHistory:View";
        }

        namespace Field {
            export const Delete = "Sita:dbo.tblField:Delete";
            export const Modify = "Sita:dbo.tblField:Modify";
            export const View = "Sita:dbo.tblField:View";
        }

        namespace SyncData {
            export const Delete = "Sita:dbo.tblConfigSyncData:Delete";
            export const Modify = "Sita:dbo.tblConfigSyncData:Modify";
            export const View = "Sita:dbo.tblConfigSyncData:View";
        }

        namespace CutData {
            export const Delete = "Sita:dbo.TblScheduleCutBag:Delete";
            export const Modify = "Sita:dbo.TblScheduleCutBag:Modify";
            export const View = "Sita:dbo.TblScheduleCutBag:View";
        }
    }
}

