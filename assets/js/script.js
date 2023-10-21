let row = 1;
resetForm();
const deleteHTML = `<button onclick="onClick(this);">Delete</button>`;

function getCurrentLocalStorageValue() {
    let currentData = localStorage.getItem("data");
    try {
        currentData = JSON.parse(currentData) || [];
    } catch {
        currentData = [];
    }

    return currentData;
}

function addDataToLocalStorage(newRow) {
    const currentData = getCurrentLocalStorageValue();
    const newData = [...currentData, newRow];
    localStorage.setItem("data", JSON.stringify(newData));
}

function tableDetails(event) {


    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let type = document.getElementById('type').value;
    let amount = document.getElementById('amount').value;


    if (!name || !date || !type || !amount) {
        alert(`Please fill up all empty boxes`);
        return;
    }

    let tableElement = document.getElementById('expense-table');

    let rows = tableElement.insertRow(-1);

    let cell1 = rows.insertCell(0);
    let cell2 = rows.insertCell(1);
    let cell3 = rows.insertCell(2);
    let cell4 = rows.insertCell(3);
    let cell5 = rows.insertCell(4);

    cell1.textContent = name;
    cell2.textContent = date;
    cell3.textContent = type;
    cell4.textContent = amount;
    cell5.innerHTML = deleteHTML;

    addDataToLocalStorage({ name, date, type, amount });
    resetForm();
}

function resetForm() {
    document.getElementById('name').value = "";
    document.getElementById('date').value = "";
    document.getElementById('type').value = "";
    document.getElementById('amount').value = "";
}

function onClick(td) {

    if (confirm('Are You Sure')) {
        row = td.parentElement.parentElement;
        document.getElementById('expense-table').deleteRow(row.rowIndex);
        resetForm();

        let localStorageIndex = row.rowIndex - 1;
        let items = JSON.parse(localStorage.getItem("data"));

        items.splice(localStorageIndex, 1);

        localStorage.setItem("data", JSON.stringify(items));


    }

    return;
}