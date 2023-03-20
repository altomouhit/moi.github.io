window.onload = function () {
    $("#pastMedicalHistoryTxt, #pComments, #transportDiv, #nonTransportDiv, #hospitalDiv, #nonTransportCrimeDiv, #transportTypeDiv, #DNRDiv").hide();
    $("#mAirwayCommentDiv, #oxygenLPMDiv, #immoblazatiomDiv, #splintingDiv, #defibrillationDiv, #IVIODiv, #mOthersDiv, #timeDiv").hide();
    $("#PDOADiv, #refused").hide();
    $("#resuscitationDiv").hide();
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
    // $('#pastMedicalHistory').editableSelect().on('select.editable-select', function(e, li) {
    //     //$('#afterSelect').html(li.val() + '. ' + li.text());
    //     if (li.val() == 12) {
    //         $("#pastMedicalHistoryTxt").show();
    //     } else {
    //         $("#pastMedicalHistoryTxt").hide();
    //     }
    // });
    $('#pregnancy').editableSelect().on('select.editable-select', function(e, li) {
        //$('#afterSelect').html(li.val() + '. ' + li.text());
        if (li.val() == 1) {
            $("#pComments").show();
        } else {
            $("#pComments").hide();
        }
    });
    
});
$('#pastMedicalHistory').on('change', function() {
    //$('#afterSelect').html(li.val() + '. ' + li.text());
    if (this.value == 12) {
        $("#pastMedicalHistoryTxt").show();
    } else {
        $("#pastMedicalHistoryTxt").hide();
    }
});
$("#tansportCategory").on('change', function() {
    if (this.value == 1) {
        $("#transportDiv").show();
        $("#nonTransportDiv, #nonTransportCrimeDiv, #PDOADiv, #refused, #DNRDiv").hide();
    } else if (this.value == 2) {
        $("#transportDiv, #hospitalDiv, #transportTypeDiv").hide();
        $("#nonTransportDiv").show();
    } else {
        $("#transportDiv").hide();
        $("#nonTransportDiv").hide();
    }
});
$('#tansport').on('change', function() {
    if (this.value == 5) {
        $("#hospitalDiv").show();
        $("#transportTypeDiv").hide();
    } else if (this.value == 6) {
        $("#transportTypeDiv").show();
        $("#hospitalDiv").hide();
    } else {
        $("#hospitalDiv, #transportTypeDiv").hide();
    }
});
$('#nonTansport').on('change', function() {
    if (this.value == 8) {
        $("#nonTransportCrimeDiv").show();
        $("#PDOADiv, #refused, #DNRDiv").hide();
    } else if (this.value == 4) {
        $("#PDOADiv").show();
        $("#nonTransportCrimeDiv, #refused, #DNRDiv").hide();
    } else if (this.value == 7) {
        $("#refused").show();
        $("#nonTransportCrimeDiv, #PDOADiv, #DNRDiv").hide();
    } else if (this.value == 9) {
        $("#DNRDiv").show();
        $("#nonTransportCrimeDiv, #PDOADiv, #refused").hide();
    } else {
        $("#nonTransportCrimeDiv, #PDOADiv, #refused, #DNRDiv").hide();
    }
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
$("#splinting").on('change', function() {
    if(this.value == 3) {
        $("#splintingDiv").show();
    } else {
        $("#splintingDiv").hide();
    }
});
$("#defibrillation").on('change', function() {
    if(this.value == 5) {
        $("#defibrillationDiv").show();
        $("#defibrillationDoneByDiv").hide();
    } else {
        $("#defibrillationDiv").hide();
        $("#defibrillationDoneByDiv").show();
    }
});
$("#IVIO").on('change', function() {
    if(this.value == 1 || this.value == 3 || this.value == 5) {
        $("#IVIODoneByDiv").show();
        $("#IVIODiv, #timeDiv").hide();
    } else if(this.value == 2) {
        $("#timeDiv").show();
        $("#IVIODoneByDiv, #IVIODiv").hide();
    } else if(this.value == 4) {
        $("#IVIODiv").show();
        $("#IVIODoneByDiv, #timeDiv").hide();
    } else {
        $("#IVIODiv, #timeDiv").hide();
        $("#IVIODoneByDiv").show();
    }
});
$("#mOthers").on('change', function() {
    if(this.value == 9) {
        $("#mOthersDiv").show();
    } else {
        $("#mOthersDiv").hide();
    }
});
$("#resuscitationRequired").on('change', function() {
    if(this.value == 1) {
        $("#resuscitationRequiredModal").modal('show');
        $("#resuscitationDiv").show();
    } else {
        $("#resuscitationDiv").hide();
    }
});

$(document).ready(function() {
	$('#approvers').multiselect({
		enableFiltering: true,
		includeSelectAllOption: true,
		maxHeight: 400,
		dropUp: true,
		nonSelectedText: 'Please Select from the List',
	});
	$('.multiSelect').multiselect({
		enableFiltering: true,
		includeSelectAllOption: true,
		maxHeight: 400,
		dropUp: true,
		nonSelectedText: 'Please select',
	});
});