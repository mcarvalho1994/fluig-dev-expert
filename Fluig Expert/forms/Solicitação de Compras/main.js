function adicionarLinha() {
	var index = wdkAddChild("tb_produtos");
	
	$("#txt_val_unit___" + index).mask("#00.000.000.000.000,00");
	$("#txt_quantidade___" + index).mask("#00.000.000.000.000,00");
	$("#txt_val_tot___" + index).mask("#00.000.000.000.000,00");
}

function excluirLinha(oElement) {
	fnWdkRemoveChild(oElement);
}

function setSelectedZoomItem(selectedItem) {     
	var obj = selectedItem.inputName;
	
	if(obj == "txt_pais_unidade") {
		var inputName = "txt_estado_unidade";
		var filterValues = "";
		
		var codPais = selectedItem.Sigla;
		
		filterValues += "filtroPais," + codPais;
		
		/*
		 * 1º Parametro: Campo que queremos filrar
		 * 2° Parametro: País -> Key, Value*/
		reloadZoomFilterValues(inputName, filterValues);
		
	}

}

function removedZoomItem(removedItem) {
	var obj = removedItem.inputName;
	
	if(obj == "txt_pais_unidade") {
		var inputName = "txt_estado_unidade";
		var filterValues = "";
		
		reloadZoomFilterValues(inputName, filterValues);
		
		window["txt_estado_unidade"].clear();
	}
}

function calcTotal(obj) {
	var inputName = obj.name;
	
	var index = 0;
	
	index = inputName.split("___")[1];
	
	var qtde = $("#txt_quantidade___" + index).val();
	var valUnit = $("#txt_val_unit___" + index).val();
	
	if(qtde.trim() != "" && valUnit.trim() != "") {
		var total = parseFloat(qtde) * parseFloat(valUnit);
		$("#txt_val_tot___" + index).val(total);
	}
}