$(function () {
    $("#cookies-dialog").dialog({
        autoOpen: true,
        buttons: {
            "שמירת אפשרויות": function () {
                $(this).dialog("close")
            }
        },
        hide: "puff",
        show: "slide",
        width: 600,
        classes: {
            'ui-dialog-titlebar-close': 'hidden',
        }
    })
});