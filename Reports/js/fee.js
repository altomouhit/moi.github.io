$(document).ready(function() {
	var FeeCollections = $('#Fee_Collections').DataTable({
		dom: 'Bfrtip',
		buttons: ['excel']
	});

	// Fee Status
	var FeeStatus = $('#Fee_Status').DataTable({
		dom: 'Bfrtip',
		buttons: ['excel']
	});
	var FeeStatus1 = $('#Fee_Status1').DataTable({
		dom: 'Bfrtip',
		buttons: ['excel']
	});
	// Request Status
	var ReqStatus = $('#Req_Status').DataTable({
		dom: 'Bfrtip',
		buttons: ['excel']
	});
	var Req_Status1 = $('#Req_Status1').DataTable({
		dom: 'Bfrtip',
		buttons: ['excel']
	});
	// Municipality Service
	var Muniserv = $('#Muni_serv').DataTable({
		dom: 'Bfrtip',
		buttons: ['excel']
	});
});