function validateForm(form){
	var msg = "";
	var indexes = form.getChildrenIndexes("tb_aprovadores");
	
	if(indexes.length == 0) {
		msg += "<br>" + i18n.translate("msg.aprovador.linhaObrigatoria")
	} else {
		for(var i = 0; i < indexes.length; i++) {
			if(form.getValue("txt_nome_aprovador___" + indexes[i]) == null) {
				msg += "<br> - Linha "+ (i+1) + ": " + i18n.translate("nome.aprovador");
			}
		}
	}
	
	if(msg != "") {
		throw "Os Seguintes campos são obrigatórios: <br>" + msg;
	}
}