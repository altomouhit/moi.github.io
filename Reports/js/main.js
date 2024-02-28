//Preloader
$(window).on('load', function() {
  $('.loader').fadeOut(); // fade out the loading animation
    $('.preloader').delay(350).fadeOut('slow'); // fade out the white DIV that covers the website.
    $('body').delay(350).css({
      'overflow': 'hide'
    });
});

$(document).ready(function() {
   // $('#ticker').tickerme();
  // Text-Resize - Start here
  var originalSize = $('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,legend,input,.form-control,.btn').css('font-size');
  // reset
  $("#lnkNormal").click(function() {
    $('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,input,legend,.form-control,.btn').css('font-size', originalSize);
  });
  //Increase
  $('#lnkIncrease').click(function() {
    curSize = parseInt($('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,legend,input,.form-control,.btn').css('font-size')) + 1;
    if (curSize <= 18)
      $('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,legend,input,.form-control,.btn').css('font-size', curSize);
  }); 
  //Decrease
  $('#lnkDecrease').click(function() {
    curSize = parseInt($('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,legend,input,.form-control,.btn').css('font-size')) - 1;
    if (curSize >= 9)
      $('div,ul li,a,h1,h2,h3,h4,h5,h6,p,span,input,legend,.form-control,.btn').css('font-size', curSize);
  });
});

//---------------------------
Highcharts.chart('container', {
	chart: {
		type: 'column'
	},
	title: {
		text: "As on date need to displayed"
	},
	xAxis: {
		categories: ['Major Building Permit', 'Minor Building Permit', 'Excavation Permit', 'General Services']
	},
	yAxis: [{
		min: 0,
		title: {
			text: null
		}
	}, {
		title: {
			text: null
		},
		opposite: true
	}],
	legend: {
		shadow: false
	},
	tooltip: {
		shared: true
	},
	plotOptions: {
		column: {
			grouping: false,
			shadow: false,
			borderWidth: 1
		}
	},
	credits: false,
	series: [{
		name: 'Income / Revenue Amount',
		color: 'rgba(61,217,74)',
		data: [2, 2.5, 4, 4],
		pointPadding: 0.3,
		pointPlacement: -0.2
	}, {
		name: 'Insurance Amount',
		color: 'rgba(149,116,234)',
		data: [2, 5, 2, 7],
		pointPadding: 0.4,
		pointPlacement: -0.2
	}]
});
/////////////////////////////////////////////////////////////
Highcharts.chart('containerHS', {
	chart: {
		type: 'column'
	},
	title: {
		text: "As on date need to displayed"
	},
	xAxis: {
		categories: ['Lease Contract', 'Municipal License', 'Health Card', 'Advertising License', 'Main Board']
	},
	yAxis: [{
		min: 0,
		title: {
			text: null
		}
	}, {
		title: {
			text: null
		},
		opposite: true
	}],
	legend: {
		shadow: false
	},
	tooltip: {
		shared: true
	},
	plotOptions: {
		column: {
			grouping: false,
			shadow: false,
			borderWidth: 1
		}
	},
	credits: false,
	series: [{
		name: 'Income / Revenue Amount',
		color: 'rgba(61,217,74)',
		data: [1, 3, 5, 9, 13],
		pointPadding: 0.3,
		pointPlacement: -0.2
	}]
});
/////////////////////////////////////////////////////////////
// Radialize the colors
Highcharts.setOptions({
  colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
    return {
      radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 0.7
      },
      stops: [
        [0, color],
        [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
      ]
    };
  })
});

// Highcharts.chart('pieChart_Location', {
// 	chart: {
// 		plotBackgroundColor: null,
// 		plotBorderWidth: 0,
// 		plotShadow: false,
// 		type: 'pie'
// 	},
// 	title: {
// 		text: ''
// 	},
// 	tooltip: {
// 		pointFormat: '{point.percentage:.1f}%'
// 	},
// 	plotOptions: {
// 		pie: {
// 			allowPointSelect: false,
// 			cursor: 'pointer',
// 			dataLabels: {
// 				enabled: true,
// 				format: '{point.name}: {point.percentage:.1f} %',
//         distance: -50
// 			},
// 			showInLegend: false
// 		}
// 	},
// 	credits: false,
// 	series: [{
//     data: [
//       { name: 'Al Rustaq', y: 700, sliced: true, selected: true },
//       { name: 'Barka', y: 600 },
//       { name: 'Nizwa', y: 500 },
//       { name: 'Sohar', y: 400 },
//       { name: 'Sumail', y: 300 }
//     ]
// 	}]
// });
//
// // Make monochrome colors
// var pieColors = (function () {
//   var colors = [],
//     base = Highcharts.getOptions().colors[0],
//     i;
//
//   for (i = 0; i < 10; i += 1) {
//     // Start out with a darkened base color (negative brighten), and end
//     // up with a much brighter color
//     colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
//   }
//   return colors;
// }());
//
// // Build the chart
// Highcharts.chart('pieChart_Location1', {
//   chart: {
//     plotBackgroundColor: null,
//     plotBorderWidth: null,
//     plotShadow: false,
//     type: 'pie'
//   },
//   title: {
//     text: null
//   },
//   tooltip: {
//     pointFormat: '{point.percentage:.1f}%'
//   },
//   plotOptions: {
//     pie: {
//       allowPointSelect: true,
//       cursor: 'pointer',
//       colors: pieColors,
//       dataLabels: {
//         enabled: true,
//         format: '{point.name}<br>{point.percentage:.1f} %',
//         distance: -50
//       }
//     }
//   },
//   credits: false,
//   series: [{
//     name: 'Share',
//     data: [
//       { name: 'Al Rustaq', y: 700, sliced: true, selected: true },
//       { name: 'Barka', y: 600 },
//       { name: 'Nizwa', y: 500 },
//       { name: 'Sohar', y: 400 },
//       { name: 'Sumail', y: 300 }
//     ]
//   }]
// });

// Create the chart
Highcharts.chart('pieChart_Location', {
  chart: {
    type: 'pie'
  },
  title: {
    text: null
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.name}<br>{point.percentage:.1f} %',
      },
      showInLegend: true
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:12px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name} : {point.percentage:.1f} % </span> of total<br/>'
  },
  credits: false,
  series: [ {
      name: "Request by Location",
      colorByPoint: true,
      keys: ['name', 'y', 'selected', 'sliced'],
      data: [
        ['Al Rustaq', 700, false, false],
        ['Barka', 600, false],
        ['Nizwa', 500, false],
        ['Sohar', 400, false],
        ['Sumail', 300, false]
      ]
    }
  ]
});
/////////////////////////////////////////////////////////////
Highcharts.chart('pieChart_Location_HS', {
  chart: {
    type: 'pie'
  },
  title: {
    text: null
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.name}<br>{point.percentage:.1f} %',
      },
      showInLegend: true
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:12px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name} : {point.percentage:.1f} % </span> of total<br/>'
  },
  credits: false,
  series: [ {
      name: "Request by Location",
      colorByPoint: true,
      keys: ['name', 'y', 'selected', 'sliced'],
      data: [
        ['Al Rustaq', 700, false, false],
        ['Barka', 600, false],
        ['Nizwa', 500, false],
        ['Sohar', 400, false],
        ['Sumail', 300, false]
      ]
    }
  ]
});
/////////////////////////////////////////////////////////////