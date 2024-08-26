function insert_Row() {
    // Get the reference to the table with id 'sampleTable'
    const table = document.getElementById('sampleTable');
    
    // Insert a new row at the beginning of the table (index 0)
    const newRow = table.insertRow(0);
    
    // Insert a new cell in the new row at index 0
    const newCell1 = newRow.insertCell(0);
    // Set the text for the left cell
    newCell1.textContent = 'New Cell1';
    
    // Insert a new cell in the new row at index 1
    const newCell2 = newRow.insertCell(1);
    // Set the text for the right cell
    newCell2.textContent = 'New Cell2';
}
