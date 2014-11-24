$(function() {
    /* data */
    var data = [{
        id: 0,
        value: 4
    }, {
        id: 1,
        value: 8
    }, {
        id: 2,
        value: 15
    }, {
        id: 3,
        value: 16
    }, {
        id: 4,
        value: 23
    }, {
        id: 5,
        value: 42
    }];

    /* How to create a line chart with D3.js */
    /* Setting up SVG */
    var margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 50
        },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    /* Setting up scale and axis */
    var y_scale = d3.scale.linear().domain([0, d3.max(data, function(d) {
        return d.value
    }) + 5]).range([height, 0]);
    var x_scale = d3.scale.linear().domain([0, d3.max(data, function(d) {
        return d.id
    })]).range([0, width]);
    var y_axis = d3.svg.axis().scale(y_scale).orient("left");
    var x_axis = d3.svg.axis().scale(x_scale).orient("bottom");

    /* Draw the svg */
    var svg = d3.select("#d3-chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("transform", "translate(" + margin.left + ", " + margin.top + ")")

    /* Draw the X and Y Axis */
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + margin.left + ", " + height + ")")
        .call(x_axis);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + margin.left + ", 0)")
        .call(y_axis);

    /* Draw the data in dots */
    var dots = svg.append("g")
        .attr("transform", "translate(" + margin.left + ", 0)")
        .selectAll("circle").data(data).enter().append("circle")
        .attr("cx", function(d) {
            return x_scale(d.id);
        })
        .attr("cy", function(d) {
            return y_scale(d.value);
        })
        .attr("r", 3)
        .style("fill", "steelblue");

    /* Draw the lines */
    var line = d3.svg.line()
        .x(function(d, i) {
            return x_scale(d.id);
        })
        .y(function(d, i) {
            return y_scale(d.value);
        })
        .interpolate("linear");

    var lineGraph = svg.append("g")
        .attr("transform", "translate(" + margin.left + ", 0)")
        .append("path")
        .attr("d", line(data))
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1)
        .attr("fill", "none");



























    /* How to create a line chart with C3.js */
    var c3_chart = c3.generate({
        data: {
            columns: [
                ["data1", 4, 8, 15, 16, 23, 42]
            ]
        }
    });
});
