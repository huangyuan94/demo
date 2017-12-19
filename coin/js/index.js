function formatDateTime(inputTime) {    
    var date = new Date(inputTime || new Date());  
    var y = date.getFullYear();    
    var m = date.getMonth() + 1;    
    m = m < 10 ? ('0' + m) : m;    
    var d = date.getDate();    
    d = d < 10 ? ('0' + d) : d;    
    var h = date.getHours();  
    h = h < 10 ? ('0' + h) : h;  
    var minute = date.getMinutes();  
    var second = date.getSeconds();  
    minute = minute < 10 ? ('0' + minute) : minute;    
    second = second < 10 ? ('0' + second) : second;   
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;    
};

var EOS = localStorage.getItem("EOS") ? JSON.parse(localStorage.getItem("EOS")) : {};

$(function(){

 	// 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('EosMain'));

    var option = {
	    title: {
	        text: 'EOS'
		},
	    tooltip: {
	        trigger: 'axis',
	        formatter: function(param){
			return param[0].seriesName + " : " + param[0].data + "<br/>" + param[0].name;
		}
	    },
	    legend: {
	        data:['eos价格']
	    },
	    toolbox: {
	        show: true,
	        feature: {
	            dataZoom: {
	                yAxisIndex: 'none'
	            },
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis:  {
	        type: 'category',
	        boundaryGap: false,
	        data: EOS.time
	    },
	    yAxis: {
	        type: 'value',
	        // axisLabel: {
	        //     formatter: '{value} CNY'
	        // }
	    },
	    series: [
	        {
	            name:'¥',
	            type:'line',
	            data: EOS.value,
	            markPoint: {
	                data: [
	                    {type: 'max', name: '最大值'},
	                    {type: 'min', name: '最小值'}
	                ]
	            },
	            markLine: {
	                data: [
	                    {type: 'average', name: '平均值'}
	                ]
	            }
	        }
	    ]
	};


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    window.onresize = myChart.resize;

    $("#EosInput").on("keydown", function(e){
    	if(e.keyCode == "13"){  
			dataFormat($(this));
		}
    }).poshytip({
		className: 'tip-twitter',
		showOn: 'focus',
		alignTo: 'target',
		alignX: 'inner-left',
		// alignY: 'bottom',
		offsetX: 0,
		offsetY: 10,
		showTimeout: 100
	});

    function dataFormat(input){
    	var EOS = localStorage.getItem("EOS");
    	if(EOS){
    		EOS = JSON.parse(EOS) || {};
    	}else{
    		EOS = {
    			value: [],
    			time: [],
    			// inputNumber: 0,
    			// lastDate: formatDateTime().split(" ")[0]
    		}
    	}
    	var _length = EOS.time.length;
    	if(_length > 0 && (new Date() - new Date(EOS.time[_length - 1])) < 3600000){
    		console.log("小于一个小时！")
    		return false;
    	}
		var value = EOS.value;
		var time = EOS.time;
		value.push(input.val());
		input.val("");
		time.push(formatDateTime());
		option.series[0].data = value;
		option.xAxis.data = time;
		localStorage.setItem("EOS",JSON.stringify(EOS));
		myChart.setOption(option);
    }
})