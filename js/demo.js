var app = angular.module("app", ['ui.bootstrap']);
app.controller("ChartCtrl", function($scope) {

    /* Chart Type Demo*/
    var chart = c3.generate({
        //bindto: "#chart"
        data: {
            columns: [
                ["data1", 4, 8, 15, 16, 23, 42],
                ["data2", 42, 36, 25, 18, 45, 66]
            ]
        }
    });

    /* Gauge Chart Demo*/
    var chart2 = c3.generate({
        bindto: "#chart2",
        data: {
            columns: [
                ['data', 91.4]
            ],
            type: 'gauge'
        },
        color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'],
            threshold: {
                values: [30, 60, 90, 100]
            }
        },
        gauge: {
            width: 90
        },
        transition: {
            duration: 900
        }
    });









    /* Chart Functionality Demo */
    var chart3 = c3.generate({
        bindto: "#chart3",
        data: {

            // x: "x1",

            // xFormat: "%Y%m%d %H:%M",

            // xs: {
            //     "data1": "x1",
            //     "data2": "x2"
            // },

            // url: "/data/c3_test.csv",
            // mimeType: "json",

                columns: [
                // ["x1", 5, 15, 45, 135, 287, 642],
                // ["x2", 2, 74, 108, 253, 307, 908],
                // ["x1", '2014-01-06', '2013-02-10', '2013-03-28', '2013-6-10', '2013-10-15', '2014-01-06'],
                // ["x1", '20140606 01:34', '20130210 03:55', '20130328 9:10', '20130610 13:24', '20131015 17:58', '20140106 21:36'],
                ["data1", 4, 8, 15, 16, 23, 42],
                ["data2", 42, 36, NaN, 18, 45, 66]
            ],

            // rows: [
            //     ["data1", "data2"],
            //     [4, 42],
            //     [8, 36],
            //     [15, 25],
            //     [16, 18],
            //     [23, 45],
            //     [42, 66]
            // ],

            type: 'bar',

            // types: {
            // 	data1: "spline",
            // 	data2: "area-spline"
            // },

            // axes:{
            // 	data1: "y",
            // 	data2: "y2"
            // },

            groups: [
                ["data1", "data2"]
            ],

            // colors: {
            //     data1: "#f2b636",
            //     data2: "#eb713b",
            //     data3: "#3da3a2",
            // },

            onclick: function(d, e) {
                console.log(e);
            }
        },

        axis: {

            // rotated: true,

            x: {
                // type: "timeseries", //categories

                // categories: ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6"],

                label: {
                    text: "x Label",
                    position: "outer-left"
                },

                // tick: {
                //     rotate: 75,
                //     // count: 4,
                //     // fit: true,
                //     format: "%m-%d %H:%M"
                // },

                // height: 130
            },

            y: {
                label: {
                    text: "y-axis Label",
                    position: "outer-middle"
                },

                // max: 200,
                // min: -200,                
            },

            // y2:{
            // 	show: true
            // }
        },

        // grid: {
        //     x: {
        //         show: true,
        //         lines: [{
        //             value: 3,
        //             class: "grid3",
        //             text: "label 3"
        //         }]
        //     },
        //     y: {
        //         lines: [{
        //             value: 0
        //         }]
        //     }
        // },

        // regions: [{
        //     axis: 'x',
        //     start: 2,
        //     end: 4,
        //     class: 'regionX'
        // }, {
        //     axis: 'y',
        //     start: 40,
        //     class: 'regionY'
        // }, {
        //     axis: 'y2',
        //     end: 100,
        //     class: 'regionY2'
        // }],

        // subchart:{
        // 	show: true
        // },

        // zoom:{
        // 	enabled: true
        // },

        // legend: {
        //     // show: false,
        //     // position: "right",
        //     rotate: 75,
        // },

        // tooltip: {
        //     show: false,
        //     grouped: false,
        //     format: {
        //         title: function(index) {
        //             return "Number " + index;
        //         },
        //         value: function(value, ratio, id, index) {
        //             return value;
        //         },
        //         name: function(name) {
        //             return "Dataset-" + name;
        //         }
        //     }
        // },

        // size:{
        // 	height: 240,
        // 	width: 480
        // }

        // transition:{
        // 	duration: 3000
        // },

        // point: {
        //     show: false,
        // },

        // donut: {
        //     title: "Some Title"
        // },
    });









    $scope.topic = 'Test';
    $scope.$watch("topic", function(newTopic) {
        switch (newTopic) {
            case "Type":
                $scope.title = "C3 Chart Type";
                break;
            case "Gauge":
                $scope.title = "Gauge Chart Demo";
                break;
            case "Test":
                $scope.title = "Experiment";
                break;
            default:
                $scope.title = "C3.js Demo";
                break;
        }
    });

    $scope.toLine = function() {
        chart.transform('line');
    }

    $scope.toStep = function() {
        chart.transform('step');
    }

    $scope.toBar = function() {
        chart.transform('bar');
    }

    $scope.toPie = function() {
        chart.transform('pie');
    }

    $scope.toArea = function() {
        chart.transform('area');
    }

    $scope.toDonut = function() {
        chart.transform('donut');
    }

    $scope.toSpline = function() {
        chart.transform('spline');
    }

    $scope.toScatter = function() {
        chart.transform('scatter');
    }

    $scope.toGauge = function() {
        chart.transform('gauge');
    }

    $scope.animateGauge = function() {
        chart2.load({
            columns: [
                ['data', 10]
            ]
        });

        setTimeout(function() {
            chart2.load({
                columns: [
                    ['data', 50]
                ]
            });
        }, 1000);

        setTimeout(function() {
            chart2.load({
                columns: [
                    ['data', 70]
                ]
            });
        }, 2000);

        setTimeout(function() {
            chart2.load({
                columns: [
                    ['data', 0]
                ]
            });
        }, 3000);

        setTimeout(function() {
            chart2.load({
                columns: [
                    ['data', 100]
                ]
            });
        }, 4000);
    }
    $scope.loadData3 = function() {
        chart3.load({
            columns: [
                ["data3", 67, -43, 2, 89, -18, 92]
            ]
        });
    }
    $scope.unloadData3 = function() {
        chart3.unload({
            ids: ["data3"]
        });
    }
    $scope.flow = function() {
        chart3.flow({
            columns: [
                ['data1', 5, 2],
                ['data2', 10, 30]
            ],
            duration: 1500,
            done: function() {
                chart3.flow({
                    columns: [
                        ['data1', 20, 30, 10, 25],
                        ['data2', 10, 9, 4, 12]
                    ],
                    duration: 1500
                });
            },
        });
    }
});
