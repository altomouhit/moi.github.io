//FAQ Button
// $(".smart-Wizard").hide();
// $("#lookupDetailSubNew").click(function() {
// 	$(".smart-Wizard").show();
// });
function lookupDetailSubFn() {
    if ($.trim($("#lookupDetailSubbtn").text()) == "Update") {
        lookupDetailSubEdit.remove().draw();
        $("#lookupDetailSubbtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save");
    }
    var lookupDetailSub_object = {};

    var lookUpSel = $("#lookUpSel option:selected").text();
	var lookUpSel_Val = $("#lookUpSel option:selected").val();

    var lookupDetail = $("#lookupDetail option:selected").text();
	var lookupDetail_val = $("#lookupDetail option:selected").val();

    var lookupDetailSubtxt = $("#lookupDetailSubtxt").val();

    var lookupDetailSubStatus = $("#lookupDetailSubStatus option:selected").text();
	var lookupDetailSubStatus_val = $("#lookupDetailSubStatus option:selected").val();

    lookupDetailSub_object.DlookUpSel = lookUpSel;
    lookupDetailSub_object.DlookUpSel_Val = lookUpSel_Val;

    lookupDetailSub_object.DlookupDetail = lookupDetail;
    lookupDetailSub_object.DlookupDetail_val = lookupDetail_val;

    lookupDetailSub_object.lookupDetailSubtxt_En = lookupDetailSubtxt;

    lookupDetailSub_object.Cstatus = lookupDetailSubStatus;
    lookupDetailSub_object.Cstatus_val = lookupDetailSubStatus_val;

    var lookupDetailSubTable = $('#lookupDetailSubTable').DataTable();
    lookupDetailSubTable.row.add(lookupDetailSub_object).draw();

    $("#lookUpSel").val('');
    $("#lookupDetail").val('');
    $("#lookupDetailSubtxt").val('');
    $("#lookupDetailSubStatus").val('');
}
//edit lookupDetailSubFn details
function lookupDetailSubEditFunction(data1) {
    //$(".smart-Wizard").show();
    var data = data1.data();
    $("#lookupDetailSubbtn").html("<i class='fal fa-check'></i>&nbsp; Update");
    $("#lookUpSel").val(data.DlookUpSel_Val);
    $("#lookupDetail").val(data.DlookupDetail_val);
    $("#lookupDetailSubtxt").val(data.lookupDetailSubtxt_En);
    $("#lookupDetailSubStatus").val(data.Cstatus_val);
}
//View lookupDetailSubFn details
function lookupDetailSubEditFunction(data1) {
    var data = data1.data();
    $("#lookUpSel").val(data.DlookUpSel_Val);
    $("#lookupDetail").val(data.DlookupDetail_val);
    $("#lookupDetailSubtxt").val(data.lookupDetailSubtxt_En);
    $("#lookupDetailSubStatus").val(data.Cstatus_val);
}
//Add FAQ
$(document).ready(function() {
    $('#lookupDetailSubTable tbody').on('click', '#lookupDetailSubViewBtn', function() {
        var lookupDetailSubTable = $('#lookupDetailSubTable').DataTable();
        var data = lookupDetailSubTable.row($(this).parents('tr'));
        $("#lookupDetailSubbtn").hide();
        $("#FAQClear").show();
        $('#lookupDetailSubtxt').attr('readonly', true);
        $("#lookupDetailSubStatus, #lookUpSel, #lookupDetail").prop('disabled', true);
        lookupDetailSubEditFunction(data);
    });
    $('#lookupDetailSubTable tbody').on('click', '#lookupDetailSubEditBtn', function() {
        var table = $('#lookupDetailSubTable').DataTable();
        lookupDetailSubEdit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        lookupDetailSubEditFunction(data);
    });
    $('#lookupDetailSubTable tbody').on('click', '#lookupDetailSubDelBtn', function() {
        var table = $('#lookupDetailSubTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var lookupDetailSub_cols = [
        { "mDataProp": "DlookUpSel", sTitle: "Lookup", sType: "string" }, 
        { "mDataProp": "DlookupDetail", sTitle: "Lookup Detail", sType: "string" }, 
        { "mDataProp": "lookupDetailSubtxt_En", sTitle: "Lookup Detail Subcategory Description", sType: "string" }, 
        { "mDataProp": "Cstatus", sTitle: "Status", sType: "string", sWidth: "10%", }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "10%", sType: "string", "defaultContent": 
            "<button type='button' id = 'lookupDetailSubViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'lookupDetailSubEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" 
            //+ "<button type='button' id = 'lookupDetailSubDelBtn' class='delete-icon'><i class='fal fa-trash'></i></button>" 
        }
    ];
    var lookupDetailSubTable = $('#lookupDetailSubTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": lookupDetailSub_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [2]
		}],
		"order": [[0, 'asc']]
	});
	$('#lookupDetailSubSearch').keyup(function() {
		lookupDetailSubTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	lookupDetailSubTable.columns().iterator('column', function(ctx, idx) {
		$(lookupDetailSubTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="lookupDetailSubTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	lookupDetailSubTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#lookupDetailSubid").click(function() {
    $("#lookupDetailSubbtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#lookupDetailSubtxt").val('');
    $('#lookupDetailSubtxt').removeAttr('readonly');
    $("#lookupDetailSubStatus, #lookUpSel, #lookupDetail").prop('disabled', false);
    //$(".smart-Wizard").hide();
});