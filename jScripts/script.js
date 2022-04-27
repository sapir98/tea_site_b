$(function () {
    $("#cookies-dialog").dialog({
        autoOpen: true,
        buttons: {
            "אשר": function () {
                $(this).dialog("close")
            }
        },
        hide: "puff",
        show: "slide",
        width: 600
    })
});