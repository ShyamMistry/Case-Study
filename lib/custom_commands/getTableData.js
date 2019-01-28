function getTableData (table_class, column_index, row_index){
	var table = document.getElementsByClassName(table_class);
	if (table.length == 0) {
		return false;
	}
	table = table[0];
	var table_rows = []; 
	var table_header;
	var titles = [];
	var values = [];
	/*
	 * Fetch table head and table rows
	 */
	for (var i = 0; i < table.rows.length; i++) {
		if (i == 0) {
			for (var j = 0; j < table.rows[i].cells.length; j++) {	
				titles.push(table.rows[i].cells[j].textContent);
			}
		} else {
		var current_row = []
			table_rows.push(table.rows[i]);
			for (var j = 0; j < table.rows[i].cells.length; j++) {	
				current_row.push(table.rows[i].cells[j].textContent);
			}
			values.push(current_row);
		}
	}
	/*
	 * Rearrange values found in table
	 */
	values[0].map((column, index) => (
		values.map(row => row[index])
	));
	console.log(values);
	return values[row_index][column_index];
}
module.command = getTableData;