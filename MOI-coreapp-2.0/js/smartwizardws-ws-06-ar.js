$(document).ready(function() {
  var AppType_BND;
  var stNumber = 0;
  var selectedList = $('ul#credit').find('li.active').data('interest');
  var tabslength = $('ul#credit li').length;
  //alert(tabslength);
  $(this).on('keyup keypress blur change ready load', function() {
    //BeneficiaryDetails Radio(Yes/No)
    AppType_BND = $('input[name=optradio6]:checked').val();
    if (AppType_BND == "No") {
      $("#benType").show();
    } else {
      $("#benType").hide();
    }
    
    //CAWS06
    if ($('#Typeuse').val() == '8' || $('#Typeuse').val() == '9') {
      $('#countid').hide();
      $('#areaid').show();
    } else {
      $('#countid').show();
      $('#areaid').hide();
    }

    //CAWS08
    //Request for Dams - BPWS08
    if ($('#Dam_name').val() == '801') {
      $('#DamConstructionhide').show();
      $('#typeserid').hide();
      $('#typedataid').hide();
      $('#Attachmentid').hide();
    } else if ($('#Dam_name').val() == '802') {
      $('#DamConstructionhide').hide();
      $('#typeserid').show();
      $('#typedataid').hide();
      $('#Attachmentid').hide();
    } else if ($('#Dam_name').val() == '803') {
      $('#DamConstructionhide').hide();
      $('#typeserid').hide();
      $('#typedataid').show();
      $('#Attachmentid').show();
    } else {
      $('#DamConstructionhide').hide();
      $('#typeserid').hide();
      $('#typedataid').hide();
      $('#Attachmentid').hide();
    }

    if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '811') {
      $('#Damlakeid').show();
      $('#Maintenanceid').hide();
      $('#Removeid').hide();
      $('#Pumpid').hide();
      $('#Plotid').hide();
      $('#Fenceid').hide();
      $('#Siltid').hide();
      $('#Cleanid').hide();
      $('#Crossingsid').hide();
      $('#Waterlevelid').hide();
      $('#Chainid').hide();
      $('#Crackid').hide();
      $('#Channelid').hide();
      $('#Piezometerid').hide();
      $('#Surfaceid').hide();
    } else if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '812') {
      $('#Damlakeid').hide();
      $('#Maintenanceid').show();
      $('#Removeid').hide();
      $('#Pumpid').hide();
      $('#Plotid').hide();
      $('#Fenceid').hide();
      $('#Siltid').hide();
      $('#Cleanid').hide();
      $('#Crossingsid').hide();
      $('#Waterlevelid').hide();
      $('#Chainid').hide();
      $('#Crackid').hide();
      $('#Channelid').hide();
      $('#Piezometerid').hide();
      $('#Surfaceid').hide();
    } else if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '813') {
      $('#Damlakeid').hide();
      $('#Maintenanceid').hide();
      $('#Removeid').show();
      $('#Pumpid').hide();
      $('#Plotid').hide();
      $('#Fenceid').hide();
      $('#Siltid').hide();
      $('#Cleanid').hide();
      $('#Crossingsid').hide();
      $('#Waterlevelid').hide();
      $('#Chainid').hide();
      $('#Crackid').hide();
      $('#Channelid').hide();
      $('#Piezometerid').hide();
      $('#Surfaceid').hide();
    } else if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '814') {
      $('#Damlakeid').hide();
      $('#Maintenanceid').hide();
      $('#Removeid').hide();
      $('#Pumpid').show();
      $('#Plotid').hide();
      $('#Fenceid').hide();
      $('#Siltid').hide();
      $('#Cleanid').hide();
      $('#Crossingsid').hide();
      $('#Waterlevelid').hide();
      $('#Chainid').hide();
      $('#Crackid').hide();
      $('#Channelid').hide();
      $('#Piezometerid').hide();
      $('#Surfaceid').hide();
    } else if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '815') {
      $('#Damlakeid').hide();
      $('#Maintenanceid').hide();
      $('#Removeid').hide();
      $('#Pumpid').hide();
      $('#Plotid').hide();
      $('#Fenceid').hide();
      $('#Siltid').hide();
      $('#Cleanid').hide();
      $('#Crossingsid').hide();
      $('#Waterlevelid').hide();
      $('#Chainid').hide();
      $('#Crackid').hide();
      $('#Channelid').hide();
      $('#Piezometerid').hide();
      $('#Surfaceid').hide();
    } else if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '816') {
      $('#Damlakeid').hide();
      $('#Maintenanceid').hide();
      $('#Removeid').hide();
      $('#Pumpid').hide();
      $('#Plotid').hide();
      $('#Fenceid').show();
      $('#Siltid').hide();
      $('#Cleanid').hide();
      $('#Crossingsid').hide();
      $('#Waterlevelid').hide();
      $('#Chainid').hide();
      $('#Crackid').hide();
      $('#Channelid').hide();
      $('#Piezometerid').hide();
      $('#Surfaceid').hide();
    } else if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '817') {
      $('#Damlakeid').hide();
      $('#Maintenanceid').hide();
      $('#Removeid').hide();
      $('#Pumpid').hide();
      $('#Plotid').hide();
      $('#Fenceid').hide();
      $('#Siltid').show();
      $('#Cleanid').hide();
      $('#Crossingsid').hide();
      $('#Waterlevelid').hide();
      $('#Chainid').hide();
      $('#Crackid').hide();
      $('#Channelid').hide();
      $('#Piezometerid').hide();
      $('#Surfaceid').hide();
    } else if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '818') {
      $('#Damlakeid').hide();
      $('#Maintenanceid').hide();
      $('#Removeid').hide();
      $('#Pumpid').hide();
      $('#Plotid').hide();
      $('#Fenceid').hide();
      $('#Siltid').hide();
      $('#Cleanid').show();
      $('#Crossingsid').hide();
      $('#Waterlevelid').hide();
      $('#Chainid').hide();
      $('#Crackid').hide();
      $('#Channelid').hide();
      $('#Piezometerid').hide();
      $('#Surfaceid').hide();
    } else if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '819') {
      $('#Damlakeid').hide();
      $('#Maintenanceid').hide();
      $('#Removeid').hide();
      $('#Pumpid').hide();
      $('#Plotid').show();
      $('#Fenceid').hide();
      $('#Siltid').hide();
      $('#Cleanid').hide();
      $('#Crossingsid').hide();
      $('#Waterlevelid').hide();
      $('#Chainid').hide();
      $('#Crackid').hide();
      $('#Channelid').hide();
      $('#Piezometerid').hide();
      $('#Surfaceid').hide();
    } else if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '820') {
      $('#Damlakeid').hide();
      $('#Maintenanceid').hide();
      $('#Removeid').hide();
      $('#Pumpid').hide();
      $('#Plotid').hide();
      $('#Fenceid').hide();
      $('#Siltid').hide();
      $('#Cleanid').hide();
      $('#Crossingsid').show();
      $('#Waterlevelid').hide();
      $('#Chainid').hide();
      $('#Crackid').hide();
      $('#Channelid').hide();
      $('#Piezometerid').hide();
      $('#Surfaceid').hide();
    } else if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '824') {
      $('#Damlakeid').hide();
      $('#Maintenanceid').hide();
      $('#Removeid').hide();
      $('#Pumpid').hide();
      $('#Plotid').hide();
      $('#Fenceid').hide();
      $('#Siltid').hide();
      $('#Cleanid').hide();
      $('#Crossingsid').hide();
      $('#Waterlevelid').hide();
      $('#Chainid').show();
      $('#Crackid').hide();
      $('#Channelid').hide();
      $('#Piezometerid').hide();
      $('#Surfaceid').hide();
    } else if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '821' || $('#Dam_name').val() == '802' && $('#Dam_Type').val() == '822' || $('#Dam_name').val() == '802' && $('#Dam_Type').val() == '823' || $('#Dam_name').val() == '802' && $('#Dam_Type').val() == '825') {
      $('#Damlakeid').hide();
      $('#Maintenanceid').hide();
      $('#Removeid').hide();
      $('#Pumpid').hide();
      $('#Plotid').hide();
      $('#Fenceid').hide();
      $('#Siltid').hide();
      $('#Cleanid').hide();
      $('#Crossingsid').hide();
      $('#Waterlevelid').show();
      $('#Chainid').hide();
      $('#Crackid').hide();
      $('#Channelid').hide();
      $('#Piezometerid').hide();
      $('#Surfaceid').hide();
    } else if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '826') {
      $('#Damlakeid').hide();
      $('#Maintenanceid').hide();
      $('#Removeid').hide();
      $('#Pumpid').hide();
      $('#Plotid').hide();
      $('#Fenceid').hide();
      $('#Siltid').hide();
      $('#Cleanid').hide();
      $('#Crossingsid').hide();
      $('#Waterlevelid').hide();
      $('#Chainid').hide();
      $('#Crackid').show();
      $('#Channelid').hide();
      $('#Piezometerid').hide();
      $('#Surfaceid').hide();
    } else if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '827') {
      $('#Damlakeid').hide();
      $('#Maintenanceid').hide();
      $('#Removeid').hide();
      $('#Pumpid').hide();
      $('#Plotid').hide();
      $('#Fenceid').hide();
      $('#Siltid').hide();
      $('#Cleanid').hide();
      $('#Crossingsid').hide();
      $('#Waterlevelid').hide();
      $('#Chainid').hide();
      $('#Crackid').hide();
      $('#Channelid').show();
      $('#Piezometerid').hide();
      $('#Surfaceid').hide();
    } else if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '828') {
      $('#Damlakeid').hide();
      $('#Maintenanceid').hide();
      $('#Removeid').hide();
      $('#Pumpid').hide();
      $('#Plotid').hide();
      $('#Fenceid').hide();
      $('#Siltid').hide();
      $('#Cleanid').hide();
      $('#Crossingsid').hide();
      $('#Waterlevelid').hide();
      $('#Chainid').hide();
      $('#Crackid').hide();
      $('#Channelid').hide();
      $('#Piezometerid').show();
      $('#Surfaceid').hide();
    } else if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '829') {
      $('#Damlakeid').hide();
      $('#Maintenanceid').hide();
      $('#Removeid').hide();
      $('#Pumpid').hide();
      $('#Plotid').hide();
      $('#Fenceid').hide();
      $('#Siltid').hide();
      $('#Cleanid').hide();
      $('#Crossingsid').hide();
      $('#Waterlevelid').hide();
      $('#Chainid').hide();
      $('#Crackid').hide();
      $('#Channelid').hide();
      $('#Piezometerid').hide();
      $('#Surfaceid').show();
    } else {
      $('#Damlakeid').hide();
      $('#Maintenanceid').hide();
      $('#Removeid').hide();
      $('#Pumpid').hide();
      $('#Plotid').hide();
      $('#Fenceid').hide();
      $('#Siltid').hide();
      $('#Cleanid').hide();
      $('#Crossingsid').hide();
      $('#Waterlevelid').hide();
      $('#Chainid').hide();
      $('#Crackid').hide();
      $('#Channelid').hide();
      $('#Piezometerid').hide();
      $('#Surfaceid').hide();
    }

    // CAWS18 
    if ($('#Dev_Proj').val() == '105') {
      $('#well1').hide();
      $('#well2').show();
      $('#techide').show();
    } else {
      $('#well1').show();
      $('#well2').hide();
      $('#techide').hide();
    }
  });
  // ..................................smartwizard code start here...........................................//
  // Step show event 
  $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
    //alert("You are on step "+stepNumber+" now");
    if (stepNumber == (tabslength - 1)) {
      $("#submitButton").show();
    }
    if (stepNumber != (tabslength - 1)) {
      $("#submitButton").hide();
    }
  });
  // Toolbar extra buttons
  var btnApprove = $('<button class="btn btn-ws" type="button" data-bs-toggle="modal" data-bs-target="#approveRequest" ><i class="fa fa-check" aria-hidden="true"></i> الموافقة على الطلب</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnReject = $('<button class="btn btn-ws" data-bs-toggle="modal" data-bs-target="#rejecttRequest" type="button"><i class="fa fa-times" aria-hidden="true"></i> رفض الطلب</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnNext = $('<button class="btn btn-ws" data-bs-toggle="modal" data-bs-target="#nextRequest" type="button"><i class="fa fa-chevron-left" aria-hidden="true"></i> أرسال للمستوى التالى </button>').on('click', function() {
    //alert('Finish Clicked');
  });
  
  var btnReturn = $('<button class="btn btn-ws" data-bs-toggle="modal" data-bs-target="#returnSite" type="button"><i class="fa fa-clock-o" aria-hidden="true"></i> عودة للمراجعة</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnsetsitevisit = $('<button class="btn btn-ws" data-bs-toggle="modal" data-bs-target="#ScheduleSiteVisit" type="button"><span class="fa fa-calendar"></span> جدولة زيارة الموقع</button>').on('click', function() {
    //alert('Finish Clicked');
  }) 
  var btnClarifications = $('<button data-bs-toggle="modal" data-bs-target="#requestClarifications" type="button" class="btn btn-ws"><span class="fa fa-pencil-square-o"></span> طلب توضيحات</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnReassign = $('<button class="btn btn-ws" data-bs-toggle="modal" data-bs-target="#reAssign" type="button"><i class="fa fa-exchange" aria-hidden="true"></i> إعادة تعيين</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnStudy = $('<button class="btn btn-ws" data-bs-toggle="modal" data-bs-target="#StudyMore" type="button"><i class="fa fa-list-ul" aria-hidden="true"></i> المزيد من الدراسة</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnAuthorized = $('<button class="btn btn-ws" data-bs-toggle="modal" data-bs-target="#Authorized" type="button"><i class="fa fa-check" aria-hidden="true"></i> مخول</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  
  
 // var btnSubmit = $('<button id="submitButton" onclick="submitpage()" style="display:none;" class="btn btn-ts"><span class="fa fa-arrow-circle-left"></span> تسليم </button>')
    // Smart Wizard
  $('#smartwizard').smartWizard({
    selected: 0,
    theme: 'default',
    transitionEffect: 'fade', // Effect on navigation, none/slide/fade
    showStepURLhash: false, // Show url hash based on step
    toolbarSettings: {
      toolbarPosition: 'bottom',
      toolbarExtraButtons: [btnApprove, btnReject, btnNext, btnReturn, btnsetsitevisit, btnClarifications, btnReassign, btnStudy, btnAuthorized]
    },
    lang: { // Language variables for button
      next: "التالى",
      previous: "السابق"
    }
  });
  // ..................................smartwizard code start here...........................................//
});
function sitevisitpage() {
  window.location.href = "site-visits-calendar-arabic.html";
}
/*.............. multiple Seletions on 28/01/2018 by Balaram ..............*/
(function($) {
    $(function() {
        $('#Comp_check').mselect();
    });
})(jQuery);
/*.............. multiple Seletions on 28/01/2018 by Balaram ..............*/
// function submitpage() {
  // window.location.href = "success.html";
// }