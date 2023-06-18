//FAQ Button
// $(".smart-Wizard").hide();
// $("#lookupDetailSubNew").click(function() {
// 	$(".smart-Wizard").show();
// });
function lookupDetailSubSubFn() {
    if ($.trim($("#lookupDetailSubSub_btn").text()) == "Update") {
        SubSubEdit.remove().draw();
        $("#lookupDetailSubSub_btn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save");
    }
    var lookupDetailSubSub_object = {};

    var lookUpSelSub = $("#lookUpSelSub option:selected").text();
	var lookUpSelSub_Val = $("#lookUpSelSub option:selected").val();

    var lookupDetailSubSet = $("#lookupDetailSubSet option:selected").text();
	var lookupDetailSubSet_val = $("#lookupDetailSubSet option:selected").val();

    var lookupDetailSubsel = $("#lookupDetailSubsel option:selected").text();
	var lookupDetailSubsel_val = $("#lookupDetailSubsel option:selected").val();

    var lookupDetailSubStxt = $("#lookupDetailSubStxt").val();

    var lookupDetailSubSubStatus = $("#lookupDetailSubSubStatus option:selected").text();
	var lookupDetailSubSubStatus_val = $("#lookupDetailSubSubStatus option:selected").val();

    lookupDetailSubSub_object.DlookUpSelSub = lookUpSelSub;
    lookupDetailSubSub_object.DlookUpSelSub_Val = lookUpSelSub_Val;

    lookupDetailSubSub_object.DlookupDetailSubSet = lookupDetailSubSet;
    lookupDetailSubSub_object.DlookupDetailSubSet_val = lookupDetailSubSet_val;

    lookupDetailSubSub_object.DlookupDetailSubsel = lookupDetailSubsel;
    lookupDetailSubSub_object.DlookupDetailSubsel_val = lookupDetailSubsel_val;

    lookupDetailSubSub_object.lookupDetailSubStxt_En = lookupDetailSubStxt;

    lookupDetailSubSub_object.Cstatus = lookupDetailSubSubStatus;
    lookupDetailSubSub_object.Cstatus_val = lookupDetailSubSubStatus_val;

    var lookupDetailSubSubTable = $('#lookupDetailSubSubTable').DataTable();
    lookupDetailSubSubTable.row.add(lookupDetailSubSub_object).draw();

    $("#lookUpSelSub").val('');
    $("#lookupDetailSubSet").val('');
    $("#lookupDetailSubsel").val('');
    $("#lookupDetailSubStxt").val('');
    $("#lookupDetailSubSubStatus").val('');
}
//edit lookupDetailSubSubFn details
function SubSubEditFunction(data1) {
    //$(".smart-Wizard").show();
    var data = data1.data();
    $("#lookupDetailSubSub_btn").html("<i class='fal fa-check'></i>&nbsp; Update");
    $("#lookUpSelSub").val(data.DlookUpSelSub_Val);
    $("#lookupDetailSubSet").val(data.DlookupDetailSubSet_val);
    $("#lookupDetailSubsel").val(data.DlookupDetailSubsel_val);
    $("#lookupDetailSubStxt").val(data.lookupDetailSubStxt_En);
    $("#lookupDetailSubSubStatus").val(data.Cstatus_val);
}
//View lookupDetailSubSubFn details
function SubSubViewFunction(data1) {
    var data = data1.data();
    $("#lookUpSelSub").val(data.DlookUpSelSub_Val);
    $("#lookupDetailSubSet").val(data.DlookupDetailSubSet_val);
    $("#lookupDetailSubsel").val(data.DlookupDetailSubsel_val);
    $("#lookupDetailSubStxt").val(data.lookupDetailSubStxt_En);
    $("#lookupDetailSubSubStatus").val(data.Cstatus_val);
}
//Add FAQ
$(document).ready(function() {
    $('#lookupDetailSubSubTable tbody').on('click', '#SubSubViewBtn', function() {
        var lookupDetailSubSubTable = $('#lookupDetailSubSubTable').DataTable();
        var data = lookupDetailSubSubTable.row($(this).parents('tr'));
        $("#lookupDetailSubSub_btn").hide();
        $("#FAQClear").show();
        $('#lookupDetailSubStxt').attr('readonly', true);
        $("#lookUpSelSub, #lookupDetailSubSet, #lookupDetailSubsel, #lookupDetailSubSubStatus").prop('disabled', true);
        SubSubViewFunction(data);
    });
    $('#lookupDetailSubSubTable tbody').on('click', '#SubSubEditBtn', function() {
        var table = $('#lookupDetailSubSubTable').DataTable();
        SubSubEdit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        SubSubEditFunction(data);
    });
    $('#lookupDetailSubSubTable tbody').on('click', '#SubSubDelBtn', function() {
        var table = $('#lookupDetailSubSubTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var SubSub_cols = [
        { "mDataProp": "DlookUpSelSub", sTitle: "Lookup", sType: "string" }, 
        { "mDataProp": "DlookupDetailSubSet", sTitle: "Lookup Detail", sType: "string" }, 
        { "mDataProp": "DlookupDetailSubsel", sTitle: "Lookup Detail Subcategory Description", sType: "string" }, 
        { "mDataProp": "lookupDetailSubStxt_En", sTitle: "Lookup Detail Sub Subcategory Description", sType: "string" }, 
        { "mDataProp": "Cstatus", sTitle: "Status", sType: "string", sWidth: "10%", }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "10%", sType: "string", "defaultContent": 
            "<button type='button' id = 'SubSubViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'SubSubEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" 
            //+"<button type='button' id = 'SubSubDelBtn' class='delete-icon'><i class='fal fa-trash'></i></button>" 
        }
    ];
    var lookupDetailSubSubTable = $('#lookupDetailSubSubTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": SubSub_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [2]
		}],
		"order": [[0, 'asc']]
	});
	$('#callTypeSearch').keyup(function() {
		lookupDetailSubSubTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	lookupDetailSubSubTable.columns().iterator('column', function(ctx, idx) {
		$(lookupDetailSubSubTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="lookupDetailSubSubTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	lookupDetailSubSubTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#lookupDetailSubCancelId").click(function() {
    $("#lookupDetailSubSub_btn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#lookupDetailSubStxt").val('');
    $('#lookupDetailSubStxt').removeAttr('readonly');
    $("#lookUpSelSub, #lookupDetailSubSet, #lookupDetailSubsel, #lookupDetailSubSubStatus").prop('disabled', false);
    //$(".smart-Wizard").hide();
});