function handleEnter(event) {
    if (event.key === "Enter") {
        Cal();
    }
}

function playSound() {
    document.getElementById("clickSound").play();
}

function Cal() {

    let amount = Number(document.getElementById("cash_amount").value)

    let coins = [1, 5, 10, 20, 50, 100, 500, 2000];
    let count = 0;
    let output = `
        <table>
            <tr>
                <th>Note</th>
                <th>Count</th>
                <th>Total</th>
            </tr>
    `;
    let totalNotes = 0;

    for (let i = coins.length - 1; i >= 0; i--) {
        if (coins[i] <= amount) {

            let notes = Math.floor(amount / coins[i]);
            if (notes > 0) {
                output += `
                    <tr>
                        <td>${coins[i]}</td>
                        <td>${notes}</td>
                        <td>${coins[i] * notes}</td>
                    </tr>
                `;
                totalNotes += notes;
                amount = amount % coins[i];
            }
        }
    }
    output += `
        <tr class="total-row">
            <td><b>Total Notes</b></td>
            <td><b>${totalNotes}</b></td>
            <td></td>
        </tr>
        </table>
    `;
    document.getElementById("result").innerHTML = output;

}

