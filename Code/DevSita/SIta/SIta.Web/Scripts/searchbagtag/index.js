﻿(function ($) {
    $(document).ready(function () {

        $(document).on("click", "#btn-search", function (e) {
            e.preventDefault();
            bindGrid();
        });
    });
    function bindGrid() {
        var flight = $('#txtFlight').val();
        var bag = $('#txtBag').val();
        if (flight === '' || bag === '') {
            alert('Please input flight code and bag tag code');
            return;
        }
        var param = {
            'flight': flight,
            'bagtag': bag
        };
        $.ajax({
            url: '/Default/Search/SearchGrid',
            type: 'post',
            dataType: 'html',
            para: param,
            success: function (data) {
                $("#data-grid").html("").html(data);
                $('[data-toggle="popover"]').popover(); 
            }
        });
    }
})(jQuery);

