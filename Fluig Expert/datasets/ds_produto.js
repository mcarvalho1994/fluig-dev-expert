function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
var dataset = DatasetBuilder.newDataset();
	
	//Adicionar as Colunas
	dataset.addColumn("Id");
	dataset.addColumn("Nome");
	
	//Adicionar as Linhas
	
	dataset.addRow(new Array(1, "Ar Condicionado"));
	dataset.addRow(new Array(2, "Impressora"));
	dataset.addRow(new Array(3, "Monitor"));
	dataset.addRow(new Array(4, "Notebook"));
	dataset.addRow(new Array(5, "Mesa"));

	
	//retorna o Dataset
	return dataset;

}function onMobileSync(user) {

}