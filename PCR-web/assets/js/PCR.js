window.onload = function () {
    $("#pastMedicalHistoryTxt, #pComments, #transportDiv, #nonTransportDiv, #hospitalDiv, #nonTransportCrimeDiv, #transportTypeDiv, #DNRDiv").hide();
    $("#locationTypeDiv, #governmentHospitalDiv, #privateHospitalDiv").hide();
    $("#mAirwayCommentDiv, #oxygenLPMDiv, #immoblazatiomDiv, #splintingDiv, #defibrillationDiv, #IVIODiv, #mOthersDiv, #timeDiv").hide();
    $(".PDOADiv, #refused").hide();
    $("#resuscitationDiv, #painDiv").hide();
    //Airway, Breathing, 
    $("#airwayNotClearDiv, #breathingNormalDiv, #breathingAbnormalDiv").hide();
    //circulation
    $("#circulationPulseDiv, #circulationSkinDiv").hide();
    //Burns
    $("#headBurnsDiv, #neckBurnsDiv, #abdomenBurnsDiv, #pelvicBurnsDiv, #chestBurnsDiv, #backBurnsDiv").hide();
    //Patient & Incident Info > Patient Management > Management> Air way
    $("#oralSizeDiv, #nasalSizeDiv, #ETTSizeDiv, #LMASizeDiv").hide();
    //Patient & Incident Info > Patient Management > Management> immobilization
    $("#immobilizationAdultDiv").hide();
    //
    $("#assistDeliveryDiv, #actualDeliveryDiv, #resuscitationManagementDiv, #obstetricCareDiv").hide();
    //Patient & Incident Info > Resuscitation Management > Indication Procedures > Tube Type
    $("#ETtubeSizeDiv, #COMBItubeSizeDiv, #LMAtubeSizeDiv").hide();
    $("#RTLFDiv").hide();
    //Total Burn Score
    $("#adultDiv, #peditricDiv").hide();
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
    // $('#pregnancy').editableSelect().on('select.editable-select', function(e, li) {
    //     //$('#afterSelect').html(li.val() + '. ' + li.text());
    //     if (li.val() == 1) {
    //         $("#pComments").show();
    //     } else {
    //         $("#pComments").hide();
    //     }
    // });
    
});
//Patient Assessment > Airway
$("#airway").on('change', function() {
    if(this.value == 2) {
        $("#airwayNotClearDiv").show('slow');
    } else {
        $("#airwayNotClearDiv").hide('slow');
    }
});
//Patient Assessment > Breathing
$("#breathing").on('change', function() {
    if(this.value == 1) {
        $("#breathingNormalDiv").show('slow');
        $("#breathingAbnormalDiv").hide('slow')
    } else if(this.value == 2) {
        $("#breathingNormalDiv").hide('slow');
        $("#breathingAbnormalDiv").show('slow')
    } else {
        $("#breathingNormalDiv, #breathingAbnormalDiv").hide('slow');
    }
});
//Patient Assessment > Circulation
$("#circulation").on('change', function() {
    if(this.value == 1) {
        $("#circulationPulseDiv").show('slow');
        $("#circulationSkinDiv").hide('slow')
    } else if(this.value == 2) {
        $("#circulationPulseDiv").hide('slow');
        $("#circulationSkinDiv").show('slow')
    } else {
        $("#circulationPulseDiv, #circulationSkinDiv").hide('slow');
    }
});
//Patient Assessment > head
$('#head').on('change', function() {
    if (this.value == 5) {
        $("#headBurnsDiv").show();
    } else {
        $("#headBurnsDiv").hide();
    }
});
//Patient Assessment > Neck
$('#neck').on('change', function() {
    if (this.value == 5) {
        $("#neckBurnsDiv").show();
    } else {
        $("#neckBurnsDiv").hide();
    }
});
//Patient Assessment > Abdomen
$('#abdomen').on('change', function() {
    if (this.value == 5) {
        $("#abdomenBurnsDiv").show();
    } else {
        $("#abdomenBurnsDiv").hide();
    }
});
//Patient Assessment > Pelvic
$('#pelvic').on('change', function() {
    if (this.value == 5) {
        $("#pelvicBurnsDiv").show();
    } else {
        $("#pelvicBurnsDiv").hide();
    }
});
//Patient Assessment > Chest
$('#chest').on('change', function() {
    if (this.value == 5) {
        $("#chestBurnsDiv").show();
    } else {
        $("#chestBurnsDiv").hide();
    }
});
//Patient Assessment > Back
$('#back').on('change', function() {
    if (this.value == 5) {
        $("#backBurnsDiv").show();
    } else {
        $("#backBurnsDiv").hide();
    }
});

$('#pregnancy').on('change', function() {
    if (this.value == 1) {
        $("#pComments").show();
    } else {
        $("#pComments").hide();
    }
});
$('#pastMedicalHistory').on('change', function() {
    //$('#afterSelect').html(li.val() + '. ' + li.text());
    if (this.value == 12) {
        $("#pastMedicalHistoryTxt").show();
    } else {
        $("#pastMedicalHistoryTxt").hide();
    }
});
$("#transportCategory").on('change', function() {
    if (this.value == 1) {
        $("#transportDiv").show();
        $("#nonTransportDiv, #nonTransportCrimeDiv, .PDOADiv, #refused, #DNRDiv").hide();
    } else if (this.value == 2) {
        $("#transportDiv, #hospitalDiv, #transportTypeDiv, #locationTypeDiv").hide();
        $("#governmentHospitalDiv, #privateHospitalDiv").hide();
        $("#nonTransportDiv").show();
    } else {
        $("#transportDiv").hide();
        $("#nonTransportDiv").hide();
        $("#transportDiv, #hospitalDiv, #transportTypeDiv, #locationTypeDiv").hide();
        $("#governmentHospitalDiv, #privateHospitalDiv").hide();
    }
});
$('#transport').on('change', function() {
    if (this.value == 5) {
        $("#hospitalDiv").show();
        $("#transportTypeDiv, #locationTypeDiv").hide();
    } else if (this.value == 6) {
        $("#transportTypeDiv").show();
        $("#hospitalDiv, #locationTypeDiv").hide();
        $("#governmentHospitalDiv, #privateHospitalDiv").hide();
    } else if (this.value == 7) {
        $("#locationTypeDiv").show();
        $("#hospitalDiv, #transportTypeDiv").hide();
        $("#governmentHospitalDiv, #privateHospitalDiv").hide();
    } else {
        $("#hospitalDiv, #transportTypeDiv, #locationTypeDiv").hide();
    }
});
$("#hospitalFacility").on('change', function() {
    if(this.value == 1) {
        $("#governmentHospitalDiv").show();
        $("#privateHospitalDiv").hide();
    } else if (this.value == 2) {
        $("#governmentHospitalDiv").hide();
        $("#privateHospitalDiv").show();
    } else {
        $("#governmentHospitalDiv, #privateHospitalDiv").hide();
    }
});
$('#nonTansport').on('change', function() {
    if (this.value == 8) {
        $("#nonTransportCrimeDiv").show();
        $(".PDOADiv, #refused, #DNRDiv").hide();
    } else if (this.value == 4) {
        $(".PDOADiv").show();
        $("#nonTransportCrimeDiv, #refused, #DNRDiv").hide();
    } else if (this.value == 7) {
        $("#refused").show();
        $("#nonTransportCrimeDiv, .PDOADiv, #DNRDiv").hide();
    } else if (this.value == 9) {
        $("#DNRDiv").show();
        $("#nonTransportCrimeDiv, .PDOADiv, #refused").hide();
    } else {
        $("#nonTransportCrimeDiv, .PDOADiv, #refused, #DNRDiv").hide();
    }
});
$("#mAirway").on('change', function() {
    if(this.value == 1) {
        $("#oralSizeDiv").show('slow');
        $("#ETTSizeDiv, #nasalSizeDiv, #mAirwayCommentDiv, #LMASizeDiv").hide('slow');
    } else if(this.value == 2) {
        $("#nasalSizeDiv").show('slow');
        $("#oralSizeDiv, #ETTSizeDiv, #mAirwayCommentDiv, #LMASizeDiv").hide('slow');
    } else if(this.value == 4) {
        $("#ETTSizeDiv").show('slow');
        $("#oralSizeDiv, #nasalSizeDiv, #mAirwayCommentDiv, #LMASizeDiv").hide('slow');
    } else if(this.value == 5) {
        $("#mAirwayCommentDiv, #mAirwayDoneByDiv").show('slow');
        $("#oralSizeDiv, #nasalSizeDiv, #ETTSizeDiv, #LMASizeDiv").hide('slow');
    } else {
        $("#mAirwayDoneByDiv").show('slow');
        $("#oralSizeDiv, #nasalSizeDiv, #ETTSizeDiv, #LMASizeDiv, #mAirwayCommentDiv").hide('slow');
    }
});

$("#oxygenLPM").on('change', function() {
    if(this.value == 5) {
        $("#oxygenLPMDiv, #oxygenLPMDoneByDiv").show();
        $("#oxygenLPMAdultDiv").hide('slow');
    } else {
        $("#oxygenLPMDiv").hide();
        $("#oxygenLPMDoneByDiv, #oxygenLPMAdultDiv").show('slow');
    }
});
$("#immoblazatiom").on('change', function() {
    if(this.value == 1) {
        $("#immobilizationAdultDiv, #immoblazatiomDoneByDiv").show('slow');
        $("#immoblazatiomDiv").hide('slow');
    } else if(this.value == 5) {
        $("#immoblazatiomDiv, #immoblazatiomDoneByDiv").show('slow');
        $("#immobilizationAdultDiv").hide('slow')
    } else {
        $("#immoblazatiomDiv, #immobilizationAdultDiv").hide();
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
    if(this.value == 3) {
        $("#assistDeliveryDiv").show();
        $("#mOthersDiv").hide();
    } else if(this.value == 9) {
        $("#mOthersDiv").show();
        $("#assistDeliveryDiv, #actualDeliveryDiv, #resuscitationManagementDiv, #obstetricCareDiv").hide();
    } else {
        $("#mOthersDiv, #assistDeliveryDiv, #actualDeliveryDiv, #resuscitationManagementDiv, #obstetricCareDiv").hide();
    }
});
$("#assistDelivery").on('change', function() {
    if(this.value == 2) {
        $("#actualDeliveryDiv").show();
    } else {
        $("#actualDeliveryDiv, #resuscitationManagementDiv, #obstetricCareDiv").hide();
    }
});
$("#actualDelivery").on('change', function() {
    if(this.value == 6) {
        $("#resuscitationManagementDiv").show();
        $("#obstetricCareDiv").hide();
    } else if(this.value == 7) {
        $("#resuscitationManagementDiv").hide();
        $("#obstetricCareDiv").show();
    } else {
        $("#resuscitationManagementDiv, #obstetricCareDiv").hide();
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
$("#resuscitation").on('change', function() {
    if(this.value == 1) {
        $("#resuscitationRequiredModal").modal('show');
        $("#resuscitationDiv").show();
    } else {
        $("#resuscitationDiv").hide();
    }
});

$("#presentIllness").on('change', function() {
    if(this.value == 1) {
        $("#painDiv").show('slow');
    } else {
        $("#painDiv").hide('slow');
    }
});

//Patient & Incident Info > Resuscitation Management > Indication Procedures > Tube Type
$("#tubeType").on('change', function() {
    if(this.value == 1) {
        $("#ETtubeSizeDiv").show();
        $("#COMBItubeSizeDiv, #LMAtubeSizeDiv").hide();
    } else if(this.value == 2) {
        $("#COMBItubeSizeDiv").show();
        $("#ETtubeSizeDiv, #LMAtubeSizeDiv").hide();
    } else if(this.value == 3) {
        $("#LMAtubeSizeDiv").show();
        $("#ETtubeSizeDiv, #COMBItubeSizeDiv").hide();
    } else {
        $("#ETtubeSizeDiv, #COMBItubeSizeDiv, #LMAtubeSizeDiv").hide();
    }
});
$("#breathSound").on('change', function() {
    if(this.value == 1 || this.value == "") {
        $("#RTLFDiv").hide();
    } else {
        $("#RTLFDiv").show();
    }
});
$("#burnType").on('change', function() {
    if(this.value == 1) {
        $("#adultDiv").show();
        $("#peditricDiv").hide();
    } else if(this.value == 2) {
        $("#adultDiv").hide();
        $("#peditricDiv").show();
    } else {
        $("#adultDiv, #peditricDiv").hide();
    }
});

$(document).ready(function() {
	$('.multiSelect').multiselect({
		enableFiltering: true,
		includeSelectAllOption: true,
		maxHeight: 400,
		dropUp: true,
		nonSelectedText: 'Please select',
	});
});