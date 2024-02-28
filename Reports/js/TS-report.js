// Flat picker
$("[data-provider]").flatpickr({
    dateFormat: "d/m/Y",
    //mode: "range",
    //"locale": "ar"
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