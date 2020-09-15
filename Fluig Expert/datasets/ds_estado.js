function defineStructure() {

}
function onSync(lastSyncDate) {

}

/*
 * Fields: Colunas
 * Constraints: Filtros
 * sortFields: Ordenação dos campos*/
function createDataset(fields, constraints, sortFields) {
	
	var dataset = DatasetBuilder.newDataset();
	
	var codPais = null;
	
	if(constraints != null) {
		for(var i = 0; i < constraints.length; i++) {
			if(constraints[i].fieldName == "filtroPais") {
				codPais = constraints[i].initialValue;
			}
		}
	}
	
	//Adicionar as Colunas
	dataset.addColumn("Estado");
	dataset.addColumn("Sigla");
	
	if(codPais == "BR") {
		dataset.addRow(new Array("São Paulo", "BR"));
	} else if (codPais == "MX") {
		dataset.addRow(new Array("Veracruz", "MX"));
	} else if (codPais == "AR") {
		dataset.addRow(new Array("Buenos Aires", "AR"));
	} else if (codPais == "CL") {
		dataset.addRow(new Array("Santiago", "CL"));
	} else if (codPais == "UY") {
		dataset.addRow(new Array("Montevidéu", "UY"));
	}
	
	return dataset;

}function onMobileSync(user) {

}