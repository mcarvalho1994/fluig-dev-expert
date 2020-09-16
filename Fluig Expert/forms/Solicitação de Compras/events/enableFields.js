function enableFields(form){
var ATIV_ATUAL = getValue("WKNumState");
	
	var ATIV_INICIO = 4
	var APROV_GESTOR = 5;
	var APROV_FINANC = 15;
	
	if(ATIV_ATUAL == APROV_GESTOR || ATIV_ATUAL == APROV_FINANC) {
		form.setEnabled("txt_telefone", false);
		form.setEnabled("txt_pais_unidade", false);
		form.setEnabled("txt_estado_unidade", false);
		form.setEnabled("txtarea_justificativa", false);
		form.setEnabled("tipoproduto", false);
	}
}