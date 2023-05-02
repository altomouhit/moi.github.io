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
    $("#assistDeliveryDiv, #actualDeliveryDiv, #resuscitationManagementDiv, #obstetricCareDiv, #NGTSizeDiv").hide();
    //Patient & Incident Info > Resuscitation Management > Indication Procedures > Tube Type
    $("#ETtubeSizeDiv, #COMBItubeSizeDiv, #LMAtubeSizeDiv").hide();
    $("#RTLFDiv").hide();
    //Total Burn Score
    $("#adultDiv, #peditricDiv").hide();
    //Upper EXT > Upper EXT Left Burns
    $("#upperEXTLeftBurnsDiv, #upperEXTRightBurnsDiv,#lwEXTLeftBurnsDiv, #lwEXTRightBurnsDiv").hide();
    $("#downTimeDiv, #handoverDiv").hide();
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
        $("#airwayNotClearDiv").show();
    } else {
        $("#airwayNotClearDiv").hide();
    }
});
//Patient Assessment > Breathing
$("#breathing").on('change', function() {
    if(this.value == 1) {
        $("#breathingNormalDiv").show();
        $("#breathingAbnormalDiv").hide('slow')
    } else if(this.value == 2) {
        $("#breathingNormalDiv").hide();
        $("#breathingAbnormalDiv").show('slow')
    } else {
        $("#breathingNormalDiv, #breathingAbnormalDiv").hide();
    }
});
//Patient Assessment > Circulation
$("#circulation").on('change', function() {
    if(this.value == 1) {
        $("#circulationPulseDiv").show();
        $("#circulationSkinDiv").hide('slow')
    } else if(this.value == 2) {
        $("#circulationPulseDiv").hide();
        $("#circulationSkinDiv").show('slow')
    } else {
        $("#circulationPulseDiv, #circulationSkinDiv").hide();
    }
});
//Patient Assessment > head
// $('#head').on('change', function() {
//     if (this.value == 5 || this.value == 5 && this.value != "") {
//         $("#headBurnsDiv").show();
//     } else {
//         $("#headBurnsDiv").hide();
//     }
// }).trigger("change");

$(document).ready(function() {
    $('#head').multiselect({
        onChange: function(option, checked, select) {
            var value = $(option).text();
            //var team_id = $(option).attr('id');
            var selectedValue = $(option).val().split(",");
            console.log(value, selectedValue)
            if (selectedValue == 5) {
                $("#headBurnsDiv").show();
            } else {
                $("#headBurnsDiv").hide();
            }
            // var selected_values = $("#remove_team_block_" + team_id + " .team_list .multiselect-native-select .multiselect").attr("title");
            // if (selected_values == '' || selected_values == 'Select Team Member') {
            //     if ($("#remove_team_block_" + team_id + " .team_list .multiselect-native-select .multiselect .multiselect-selected-text").text() == '') {
            //         $("#remove_team_block_" + team_id + " .team_list .multiselect-native-select .multiselect .multiselect-selected-text").text(value);
            //     } else {
            //         $("#remove_team_block_" + team_id + " .team_list .multiselect-native-select .multiselect .multiselect-selected-text").text(value)
            //     }
            // }
            // if (selected_values != '' && selected_values != 'Select Team Member') {
            //     $("#remove_team_block_" + team_id + " .team_list .multiselect-native-select .multiselect .multiselect-selected-text").append("," + selected_values)
            // }
        },
        enableFiltering: true,
        includeSelectAllOption: true,
        maxHeight: 400,
        dropUp: true,
        nonSelectedText: 'Please select',
    });
});
//Patient Assessment > Neck
$('#neck').on('change', function() {
    if (this.value == 5 || this.value == 5 && this.value != "") {
        $("#neckBurnsDiv").show();
    } else {
        $("#neckBurnsDiv").hide();
    }
});
//Patient Assessment > Abdomen
$('#abdomen').on('change', function() {
    if (this.value == 5 || this.value == 5 && this.value != "") {
        $("#abdomenBurnsDiv").show();
    } else {
        $("#abdomenBurnsDiv").hide();
    }
});
//Patient Assessment > Pelvic
$('#pelvic').on('change', function() {
    if (this.value == 5 || this.value == 5 && this.value != "") {
        $("#pelvicBurnsDiv").show();
    } else {
        $("#pelvicBurnsDiv").hide();
    }
});
//Patient Assessment > Chest
$('#chest').on('change', function() {
    if (this.value == 5 || this.value == 5 && this.value != "") {
        $("#chestBurnsDiv").show();
    } else {
        $("#chestBurnsDiv").hide();
    }
});
//Patient Assessment > Back
$('#back').on('change', function() {
    if (this.value == 5 || this.value == 5 && this.value != "") {
        $("#backBurnsDiv").show();
    } else {
        $("#backBurnsDiv").hide();
    }
});

//Upper EXT > Upper EXT Left Burns
$('#upperEXTLeft').on('change', function() {
    if (this.value == 5 || this.value == 5 && this.value != "") {
        $("#upperEXTLeftBurnsDiv").show();
    } else {
        $("#upperEXTLeftBurnsDiv").hide();
    }
});
$('#upperEXTRight').on('change', function() {
    if (this.value == 5 || this.value == 5 && this.value != "") {
        $("#upperEXTRightBurnsDiv").show();
    } else {
        $("#upperEXTRightBurnsDiv").hide();
    }
});

//Lw EXT > Lw EXT Left Burns
$('#lwEXTLeft').on('change', function() {
    if (this.value == 5 || this.value == 5 && this.value != "") {
        $("#lwEXTLeftBurnsDiv").show();
    } else {
        $("#lwEXTLeftBurnsDiv").hide();
    }
});
$('#lwEXTRight').on('change', function() {
    if (this.value == 5 || this.value == 5 && this.value != "") {
        $("#lwEXTRightBurnsDiv").show();
    } else {
        $("#lwEXTRightBurnsDiv").hide();
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
    if (this.value == 12 || this.value == 12 && this.value != "") {
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
    if (this.value == 5 || this.value == 5 && this.value != "") {
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
        $("#oralSizeDiv").show();
        $("#ETTSizeDiv, #nasalSizeDiv, #mAirwayCommentDiv, #LMASizeDiv").hide();
    } else if(this.value == 2) {
        $("#nasalSizeDiv").show();
        $("#oralSizeDiv, #ETTSizeDiv, #mAirwayCommentDiv, #LMASizeDiv").hide();
    } else if(this.value == 4) {
        $("#ETTSizeDiv").show();
        $("#oralSizeDiv, #nasalSizeDiv, #mAirwayCommentDiv, #LMASizeDiv").hide();
    } else if(this.value == 5) {
        $("#mAirwayCommentDiv, #mAirwayDoneByDiv").show();
        $("#oralSizeDiv, #nasalSizeDiv, #ETTSizeDiv, #LMASizeDiv").hide();
    } else if(this.value == 6) {
        $("#LMASizeDiv").show();
        $("#oralSizeDiv, #nasalSizeDiv, #mAirwayCommentDiv, #ETTSizeDiv").hide();
    } else {
        $("#mAirwayDoneByDiv").show();
        $("#oralSizeDiv, #nasalSizeDiv, #ETTSizeDiv, #LMASizeDiv, #mAirwayCommentDiv").hide();
    }
});

$("#oxygenLPM").on('change', function() {
    if(this.value == 5) {
        $("#oxygenLPMDiv, #oxygenLPMDoneByDiv").show();
        $("#oxygenLPMAdultDiv").hide();
    } else {
        $("#oxygenLPMDiv").hide();
        $("#oxygenLPMDoneByDiv, #oxygenLPMAdultDiv").show();
    }
});
$("#immoblazatiom").on('change', function() {
    if(this.value == 1) {
        $("#immobilizationAdultDiv, #immoblazatiomDoneByDiv").show();
        $("#immoblazatiomDiv").hide();
    } else if(this.value == 5) {
        $("#immoblazatiomDiv, #immoblazatiomDoneByDiv").show();
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
        $("#mOthersDiv, #NGTSizeDiv").hide();
    } else if(this.value == 9) {
        $("#mOthersDiv").show();
        $("#assistDeliveryDiv, #actualDeliveryDiv, #resuscitationManagementDiv, #obstetricCareDiv, #NGTSizeDiv").hide();
    } else if(this.value == 7) {
        $("#NGTSizeDiv").show();
        $("#assistDeliveryDiv, #actualDeliveryDiv, #resuscitationManagementDiv, #obstetricCareDiv, #mOthersDiv").hide();
    } else {
        $("#mOthersDiv, #assistDeliveryDiv, #actualDeliveryDiv, #resuscitationManagementDiv, #obstetricCareDiv, #NGTSizeDiv").hide();
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
        $("#painDiv").show();
    } else {
        $("#painDiv").hide();
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
$("#preEMSArrival").on('change', function() {
    if(this.value == 1) {
        $("#downTimeDiv").show();
    } else {
        $("#downTimeDiv").hide();
    }
});
$("#belongingHandover").on('change', function() {
    if(this.value == 1) {
        $("#handoverDiv").show();
    } else {
        $("#handoverDiv").hide();
    }
});
$(".actualDelivery").change(function() {
    if ($("#resuscitationRadio").prop("checked") == true) {
        $("#resuscitationManagementDiv").show();
        $("#obstetricCareDiv").hide();
    } else if ($("#obstetricRadio").prop("checked") == true) {
        $("#resuscitationManagementDiv").hide();
        $("#obstetricCareDiv").show();
    } else {
        $("#resuscitationManagementDiv, #obstetricCareDiv").hide();
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