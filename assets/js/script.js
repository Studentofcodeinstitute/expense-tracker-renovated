let row = 1;
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