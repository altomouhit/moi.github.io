window.onload = function () {
    $("#pastMedicalHistoryTxt, #pComments, #transportDiv, #nonTransportDiv, #hospitalDiv, #nonTransportCrimeDiv").hide();
    $("#mAirwayCommentDiv, #oxygenLPMDiv, #immoblazatiomDiv, #splintingDiv, #defibrillationDiv, #IVIODiv, #mOthersDiv").hide();
    //$('.selector').editableSelect();
    $('.selector').editableSelect({
        // enable filter
        filter: true,
        // default, fade or slide
        effects: 'slide',
        // fast, slow or [0-9]+
        duration: 'fast',
        // "focus" or "manual"
        trigger: 'focus',
        // callback events
        //onCreate: function() {},
        //onShow: function() {},
        //onHide: function() {},
        //onSelect: function(element) {}
    });
}

$(document).ready(function() {
    $('#pastMedicalHistory').editableSelect().on('select.editable-select', function(e, li) {
        //$('#afterSelect').html(li.val() + '. ' + li.text());
        if (li.val() == 5) {
            $("#pastMedicalHistoryTxt").show();
        } else {
            $("#pastMedicalHistoryTxt").hide();
        }
    });
    $('#pregnancy').editableSelect().on('select.editable-select', function(e, li) {
        //$('#afterSelect').html(li.val() + '. ' + li.text());
        if (li.val() == 1) {
            $("#pComments").show();
        } else {
            $("#pComments").hide();
        }
    });
    $('#tansportCategory').editableSelect().on('select.editable-select', function(e, li) {
        //$('#afterSelect').html(li.val() + '. ' + li.text());
        if (li.val() == 1) {
            $("#transportDiv").show();
            $("#nonTransportDiv").hide();
        } else if (li.val() == 2) {
            $("#transportDiv").hide();
            $("#nonTransportDiv").show();
        } else {
            $("#transportDiv").hide();
            $("#nonTransportDiv").hide();
        }
    });
    $('#tansport').editableSelect().on('select.editable-select', function(e, li) {
        //$('#afterSelect').html(li.val() + '. ' + li.text());
        if (li.val() == 5) {
            $("#hospitalDiv").show();
        } else {
            $("#hospitalDiv").hide();
        }
    });
    $('#nonTansport').editableSelect().on('select.editable-select', function(e, li) {
        //$('#afterSelect').html(li.val() + '. ' + li.text());
        if (li.val() == 8) {
            $("#nonTransportCrimeDiv").show();
        } else {
            $("#nonTransportCrimeDiv").hide();
        }
    });
});

$("#mAirway").on('change', function() {
    if(this.value == 5) {
        $("#mAirwayCommentDiv, #mAirwayDoneByDiv").show();
    } else if(this.value == 6) {
        $("#mAirwayCommentDiv, #mAirwayDoneByDiv").hide();
    } else {
        $("#mAirwayCommentDiv").hide();
        $("#mAirwayDoneByDiv").show();
    }
});

$("#oxygenLPM").on('change', function() {
    if(this.value == 5) {
        $("#oxygenLPMDiv, #oxygenLPMDoneByDiv").show();
    } else if(this.value == 6) {
        $("#oxygenLPMDiv, #oxygenLPMDoneByDiv").hide();
    } else {
        $("#oxygenLPMDiv").hide();
        $("#oxygenLPMDoneByDiv").show();
    }
});
$("#immoblazatiom").on('change', function() {
    if(this.value == 5) {
        $("#immoblazatiomDiv, #immoblazatiomDoneByDiv").show();
    } else if(this.value == 6) {
        $("#immoblazatiomDiv, #immoblazatiomDoneByDiv").hide();
    } else {
        $("#immoblazatiomDiv").hide();
        $("#immoblazatiomDoneByDiv").show();
    }
});