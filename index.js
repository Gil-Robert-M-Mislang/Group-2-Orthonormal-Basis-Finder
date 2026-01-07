const column_inputs = document.querySelectorAll(".column");
const span_texts = document.getElementsByClassName("number");
const sup_texts = document.getElementsByClassName("exponent");

column_inputs.forEach(input => {
  input.addEventListener("input", (event) => {
    const value = event.target.value;

    for (let span of span_texts) {
      span.textContent = value;
    }

    for (let sup of sup_texts) {
      sup.textContent = value;
    }
  });
});

function createTable() {
    const row = document.getElementsByClassName("row");
    const column = document.getElementsByClassName("column");

    containter.innerHTML = "";

    const table_Input = document.createElement("table");

    for (let i = 0; i < row.value; i++) {
        const newRow = document.createElement("tr");

        for (let j = 0; j < column.value; j++) {
            const newColumn = document.createElement("td");

            const input = document.createElement("input");
            input.type = "number";
            input.className = "matrixInput";

            newColumn.appendChild(input);
            newRow.appendChild(newColumn);
        }

        table_Input.appendChild(newRow);
    }
    containter.appendChild(table_Input);
}