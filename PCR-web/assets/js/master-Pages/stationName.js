//FAQ Button
// $(".smart-Wizard").hide();
// $("#stnNew").click(function() {
// 	$(".smart-Wizard").show();
// });
function stNameFn() {
    if ($.trim($("#stnbtn").text()) == "Update") {
        stnEdit.remove().draw();
        $("#stnbtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save");
    }
    var stn_object = {};

    var regionIDStn = $("#regionIDStn option:selected").text();
	var regionIDStn_Val = $("#regionIDStn option:selected").val();

    var incidentLocation = $("#incidentLocation option:selected").text();
	var incidentLocation_val = $("#incidentLocation option:selected").val();

    var stationNametxt = $("#stationNametxt").val();

    var stnStatus = $("#stnStatus option:selected").text();
	var stnStatus_val = $("#stnStatus option:selected").val();

    stn_object.DregionIDStn = regionIDStn;
    stn_object.DregionIDStn_Val = regionIDStn_Val;

    stn_object.DincidentLocation = incidentLocation;
    stn_object.DincidentLocation_val = incidentLocation_val;

    stn_object.stationNametxt_En = stationNametxt;

    stn_object.Cstatus = stnStatus;
    stn_object.Cstatus_val = stnStatus_val;

    var stNameTable = $('#stNameTable').DataTable();
    stNameTable.row.add(stn_object).draw();

    $("#regionIDStn").val('');
    $("#incidentLocation").val('');
    $("#stationNametxt").val('');
    $("#stnStatus").val('');
}
//edit stNameFn details
function stnEditFunction(data1) {
    //$(".smart-Wizard").show();
    var data = data1.data();
    $("#stnbtn").html("<i class='fal fa-check'></i>&nbsp; Update");
    $("#regionIDStn").val(data.DregionIDStn_Val);
    $("#incidentLocation").val(data.DincidentLocation_val);
    $("#stationNametxt").val(data.stationNametxt_En);
    $("#stnStatus").val(data.Cstatus_val);
}
//View stNameFn details
function stnViewFunction(data1) {
    var data = data1.data();
    $("#regionIDStn").val(data.DregionIDStn_Val);
    $("#incidentLocation").val(data.DincidentLocation_val);
    $("#stationNametxt").val(data.stationNametxt_En);
    $("#stnStatus").val(data.Cstatus_val);
}
//Add FAQ
$(document).ready(function() {
    $('#stNameTable tbody').on('click', '#viewDetails', function() {
        var stNameTable = $('#stNameTable').DataTable();
        var data = stNameTable.row($(this).parents('tr'));
        $("#stnbtn").hide();
        $("#FAQClear").show();
        $('#stationNametxt').attr('readonly', true);
        $("#stnStatus, #regionIDStn, #incidentLocation").prop('disabled', true);
        stnViewFunction(data);
    });
    $('#stNameTable tbody').on('click', '#editDetails', function() {
        var table = $('#stNameTable').DataTable();
        stnEdit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        stnEditFunction(data);
    });
    $('#stNameTable tbody').on('click', '#removeDetails', function() {
        var table = $('#stNameTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var stn_cols = [
        { "mDataProp": "DregionIDStn", sTitle: "Call Category", sType: "string" }, 
        { "mDataProp": "DincidentLocation", sTitle: "Call Sub Category", sType: "string" }, 
        { "mDataProp": "stationNametxt_En", sTitle: "Call Type", sType: "string" }, 
        { "mDataProp": "Cstatus", sTitle: "Status", sType: "string", sWidth: "10%", }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "10%", sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var stNameTable = $('#stNameTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": stn_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [2]
		}],
		"order": [[0, 'asc']]
	});
	$('#stnSearch').keyup(function() {
		stNameTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	stNameTable.columns().iterator('column', function(ctx, idx) {
		$(stNameTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="stNameTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	stNameTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#stnCancelid").click(function() {
    $("#stnbtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#stationNametxt").val('');
    $('#stationNametxt').removeAttr('readonly');
    $("#stnStatus, #regionIDStn, #incidentLocation").prop('disabled', false);
    //$(".smart-Wizard").hide();
});