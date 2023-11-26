function saveFn() {
	if ($.trim($("#btnSave").text()) == "Update") {
		cateEdit.remove().draw();
		$("#btnSave").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save");
	}
	var MCI = {};
	//Add
    var categoryID = $.trim($("#categoryID").val());
    var categoryName = $.trim($("#categoryName").val());

    MCI.DcategoryID = categoryID;
    MCI.DcategoryName = categoryName;

	//Call function to save Data
	var tableCate = $('#tableCate').DataTable();
	tableCate.row.add(MCI).draw();

	$("#categoryID").val('');
	$("#categoryName").val('');
}
//edit editsaveFn details
function editsaveFn(data1) {
	//Set value in form
	var data = data1.data();
	$("#btnSave").html("<i class='fa-light fa-save fa-lg fa-fw'></i>&nbsp;Update");
    $("#categoryID").val(data.DcategoryID);
    $("#categoryName").val(data.DcategoryName);
}
//View viewsaveFn details
function viewsaveFn(data1) {
	//Set value in form
	var data = data1.data();
	$("#btnSave").html("<i class='far fa-eye'></i>&nbsp; View");
	$("#categoryID").val(data.DcategoryID);
    $("#categoryName").val(data.DcategoryName);
	$('#categoryID, #categoryName').attr('readonly', true);
}
$(document).ready(function () {
	$('#tableCate tbody').on('click', '#viewBtn', function () {
		var tableCate = $('#tableCate').DataTable();
		var data = tableCate.row($(this).parents('tr'));
		$("#btnSave").hide();
		viewsaveFn(data);
	});
	// $('#tableCate tbody').on('click', '#MCIEditBtn', function () {
	// 	var tableCate = $('#tableCate').DataTable();
	// 	var data = tableCate.row($(this).parents('tr'));
	// 	$("#btnSave").show();
	// 	editsaveFn(data);
	// });
	$('#tableCate tbody').on('click', '#editBtn', function () {
		var table = $('#tableCate').DataTable();
		cateEdit = table.row($(this).parents('tr'));
		var data = table.row($(this).parents('tr'));
		editsaveFn(data);
	});
	$('#tableCate tbody').on('click', '#delBtn', function () {
		var table = $('#tableCate').DataTable();
		table.row($(this).parents('tr')).remove().draw();
	});
	var tableCate = $('#tableCate').DataTable({
		processing: true,
		//serverSide: false,
		ajax: "js/json/cate.json",
		columns: [
           // { "data": "sNo", "orderable": false, "defaultContent":""}, 
		    { "data": "DcategoryID" }, 
		    { "data": "DcategoryName" }, 
		    { "data": "Actions", "orderable": false, "defaultContent": 
		        "<button type='button' id ='viewBtn' class='btn btn-primary'><i class='fal fa-eye'></i></button>&nbsp;" + 
		        "<button type='button' id ='editBtn' class='btn btn-warning'><i class='fal fa-edit'></i></button>&nbsp;" + 
		        "<button type='button' id ='delBtn'  class='btn btn-danger'><i class='fal fa-trash'></i></button>"
		}],
		"destroy": true,
        "dom": '<"top"f>rt<"bottom"ilp>',
        "oLanguage": {
            "sLengthMenu": "Items per page: _MENU_",
        },
		order: [[0, 'desc']]
	});
});
$("#btnClear").click(function () {
	$("#btnSave").html("<i class='fa-light fa-save fa-lg fa-fw'></i>&nbsp;Save").show();
	$("#categoryID, #categoryName").val('');
	$('#categoryID, #categoryName').removeAttr('readonly');
});