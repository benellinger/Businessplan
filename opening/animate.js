var animation = function(){

  var margin	= {top: 25, right: 35, bottom: 25, left: 35};

  var width = 1600 - margin.left - margin.right,
      height = 800 - margin.top - margin.bottom;

  d3.select('#chart').selectAll("svg").remove();

  var svg = d3.select('#chart') 
		.attr('height', height + margin.top + margin.bottom)
		.attr('width', width + margin.left + margin.right)
  
  var t = d3.transition()
		.duration(2000)

};