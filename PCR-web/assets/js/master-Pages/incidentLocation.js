//FAQ Button
// $(".smart-Wizard").hide();
// $("#regionNew").click(function() {
// 	$(".smart-Wizard").show();
// });
function regionFn() {
    if ($.trim($("#regionbtn").text()) == "Update") {
        regionEdit.remove().draw();
        $("#regionbtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save");
    }
    var region_object = {};

    var regionID = $("#regionID option:selected").text();
	var regionID_val = $("#regionID option:selected").val();

    var incidentLocationtxt = $("#incidentLocationtxt").val();

    var regionStatus = $("#regionStatus option:selected").text();
	var regionStatus_val = $("#regionStatus option:selected").val();

    region_object.DregionID = regionID;
    region_object.DregionID_val = regionID_val;

    region_object.incidentLocationtxt_En = incidentLocationtxt;

    region_object.Cstatus = regionStatus;
    region_object.Cstatus_val = regionStatus_val;

    var regionTable = $('#regionTable').DataTable();
    regionTable.row.add(region_object).draw();

    $("#regionID").val('');
    $("#incidentLocationtxt").val('');
    $("#regionStatus").val('');
}
//edit regionFn details
function regionEditFunction(data1) {
    //$(".smart-Wizard").show();
    var data = data1.data();
    $("#regionbtn").html("<i class='fal fa-check'></i>&nbsp; Update");
    $("#regionID").val(data.DregionID_val);
    $("#incidentLocationtxt").val(data.incidentLocationtxt_En);
    $("#regionStatus").val(data.Cstatus_val);
}
//View regionFn details
function regionViewFunction(data1) {
    var data = data1.data();
    $("#regionID").val(data.DregionID_val);
    $("#incidentLocationtxt").val(data.incidentLocationtxt_En);
    $("#regionStatus").val(data.Cstatus_val);
}
//Add FAQ
$(document).ready(function() {
    $('#regionTable tbody').on('click', '#regionViewBtn', function() {
        var regionTable = $('#regionTable').DataTable();
        var data = regionTable.row($(this).parents('tr'));
        $("#regionbtn").hide();
        $("#FAQClear").show();
        $('#incidentLocationtxt').attr('readonly', true);
        $("#regionStatus, #regionID").prop('disabled', true);
        regionViewFunction(data);
    });
    $('#regionTable tbody').on('click', '#regionEditBtn', function() {
        var table = $('#regionTable').DataTable();
        regionEdit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        regionEditFunction(data);
    });
    $('#regionTable tbody').on('click', '#regionDelBtn', function() {
        var table = $('#regionTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var region_cols = [
        { "mDataProp": "DregionID", sTitle: "Governorate ID", sType: "string" }, 
        { "mDataProp": "incidentLocationtxt_En", sTitle: "Incident Location", sType: "string" }, 
        { "mDataProp": "Cstatus", sTitle: "Status", sType: "string", sWidth: "10%", }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "10%", sType: "string", "defaultContent": 
            "<button type='button' id = 'regionViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'regionEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'regionDelBtn' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var regionTable = $('#regionTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": region_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [2]
		}],
		"order": [[0, 'asc']]
	});
	$('#regionSearch').keyup(function() {
		regionTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	regionTable.columns().iterator('column', function(ctx, idx) {
		$(regionTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="regionTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	regionTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#regionCancelid").click(function() {
    $("#regionbtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#incidentLocationtxt").val('');
    $('#incidentLocationtxt').removeAttr('readonly');
    $("#regionStatus, #regionID").prop('disabled', false);
    //$(".smart-Wizard").hide();
});