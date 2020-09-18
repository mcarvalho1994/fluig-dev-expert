var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	if(WCMAPI.isEditMode == "false"){
    		this.carregarGraficoAsync();
    	} else {
    		this.carregarColorPicker();
    	}
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'salvar': ['click_salvarPreferenciasColorPicker']
        },
        global: {}
    },
    
    carregarGrafico : function() {
    	
    	var c1 = DatasetFactory.createConstraint("codUser", WCMAPI.userLogin, WCMAPI.userLogin, ConstraintType.MUST);
    	
    	var dataset = DatasetFactory.getDataset("ds_grafico", null, [c1], null);
    	
    	var colunas = [];
    	var dados = [];
    	
    	for(var i= 0;i< dataset.values.length; i++) {
    		colunas[i] = dataset.values[i]["Tipo"];
    		dados[i] = dataset.values[i]["Total_Tarefas"];
    	}
    	
    	
    	var chart = FLUIGC.chart('#grafico_' + this.instanceId);   	

    	var data = {
    		    labels: colunas,
    		    datasets: [
    		        {
    		            label: "My Second dataset",
    		            fillColor: "rgba(151,187,205,0.2)",
    		            strokeColor: "rgba(151,187,205,1)",
    		            pointColor: "rgba(151,187,205,1)",
    		            pointStrokeColor: "#fff",
    		            pointHighlightFill: "#fff",
    		            pointHighlightStroke: "rgba(151,187,205,1)",
    		            data: dados
    		        }
    		    ]
    		};
    	
    	var options = {
    			bezierCurve : false
    	};
    	
    	var lineChart = chart.line(data, options);
    },
 
    carregarGraficoAsync : function() {
    	
    	var _this = this;
    	
    	var loading = FLUIGC.loading('#MyWidget_' + _this.instanceId);
    	loading.show(); 	
    	
    	var callback = {
    			success : function(dataset) {
    				var colunas = [];
    		    	var dados = [];
    		    	
    		    	for(var i= 0;i< dataset.values.length; i++) {
    		    		colunas[i] = dataset.values[i]["Tipo"];
    		    		dados[i] = dataset.values[i]["Total_Tarefas"];
    		    	}
    		    	
    		    	
    		    	var chart = FLUIGC.chart('#grafico_' + _this.instanceId, {
    		    		id : 'grafico_linha',
    		    		width : '700',
    		    		height : '200'
    		    	});   	

    		    	var data = {
    		    		    labels: colunas,
    		    		    datasets: [
    		    		        {
    		    		            label: "My Second dataset",
    		    		            fillColor: "rgba(151,187,205,0.2)",
    		    		            strokeColor: "rgba(151,187,205,1)",
    		    		            pointColor: "rgba(151,187,205,1)",
    		    		            pointStrokeColor: "#fff",
    		    		            pointHighlightFill: "#fff",
    		    		            pointHighlightStroke: "rgba(151,187,205,1)",
    		    		            data: dados
    		    		        }
    		    		    ]
    		    		};
    		    	
    		    	var options = {
    		    			bezierCurve : false
    		    	};
    		    		    	
    		    	var lineChart = chart.line(data, options);
    		    	loading.hide();
    			},
    			error : function(jqXHR, textStatus, errorThrow) {
    				
    				FLUIGC.toast({
    					title : '',
    					message : 'Ops, ocorreu um ero inesperado! Tente novamente mais tarde!',
    					type : 'danger'
    				});
    				loading.hide();
    			}
    	}
    	
    	var c1 = DatasetFactory.createConstraint("codUser", WCMAPI.userLogin, WCMAPI.userLogin, ConstraintType.MUST);
    	
    	var dataset = DatasetFactory.getDataset("ds_grafico", null, [c1], null, callback);  	
    },
    
    carregarColorPicker : function() {
    	var settings = {
    		    changeDelay: 200,
    		    control: 'wheel',
    		    defaultValue: '#58595b',
    		    inline: false,
    		    letterCase: 'lowercase',
    		    opacity: true,
    		    position: 'bottom left',
    		    customColorNames: {
    		        'mycustomcolor': '#123456'
    		    }
    		} 
    		var myColorPicker = FLUIGC.colorpicker('#colorpicker_' + this.instanceId, settings);
    },
    
    salvarPreferenciasColorPicker : function() {
    	
    	var corSelecionada = $("#colorpicker_" + this.instanceId).val();

    	var preferences = {
    	    cor : corSelecionada
    	};
    	  
    	WCMSpaceAPI.PageService.UPDATEPREFERENCES({
    	    async: true,
    	    success: function (data) {
    	            FLUIGC.toast({
    	            	title : '',
    	            	message : 'Preferência salva com sucesso',
    	            	type : 'success'
    	            });
    	    },
    	    fail: function (xhr, message, errorData) {
    	    	FLUIGC.toast({
	            	title : '',
	            	message : 'Ops, ocorreu um erro!',
	            	type : 'danger'
	            });
    	    }
    	}, this.instanceId, preferences
    	);
    }

});

