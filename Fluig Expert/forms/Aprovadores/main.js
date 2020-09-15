$(document).ready(function() {
	$("label.obrigatorio").append("<span>*</span>")
});

function adicionarLinha() {
	wdkAddChild("tb_aprovadores");
}

function excluirLinha(oElement) {
	fnWdkRemoveChild(oElement);
}

function setSelectedZoomItem(selectedItem) {     
	var codUsuario = selectedItem.colleagueId;
	var inputName = selectedItem.inputName;
	
	var index = 0;
	
	index = inputName.split("___")[1];
	
	$("#txt_cod_aprovador___" + index).val(codUsuario);
}

function removedZoomItem(removedItem) {
	var inputName = removedItem.inputName;
	var index = 0;
	
index = inputName.split("___")[1];
	
	$("#txt_cod_aprovador___" + index).val("");
}