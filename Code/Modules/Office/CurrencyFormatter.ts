namespace ECNET.Office {

    @Serenity.Decorators.registerFormatter()
    export class CurrencyFormatter implements Slick.Formatter {

        @Serenity.Decorators.option()
        public cultureName: string;
        @Serenity.Decorators.option()
        public currencyName: string;

        format(ctx: Slick.FormatterContext) {

            //If the input is not a float - just bounce it back
            if (isNaN(parseFloat(ctx.value))) {
                return ctx.value;
            }

            //Use standard currency formatting; This can be modified for other styles (% etc).
           //If no parameters passed then fallback to en-US , USD formatting.
            this.cultureName = this.cultureName ? this.cultureName : 'en-US';
            this.currencyName = this.currencyName ? this.currencyName : 'USD';

            var formatter = new Intl.NumberFormat(this.cultureName, {
                style: 'currency',
                currency: this.currencyName,
                minimumFractionDigits: 0,
                
            });

            //use the above formatter to return the reformatted value
            var percentValue = formatter.format(Number(ctx.value));
            percentValue = this.currencyName == "VND" ? percentValue.replace("₫", "VNĐ") : percentValue;
            return "<span>" + percentValue + '</span>';
        }



    }
} 