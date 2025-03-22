 // Sample Bill Data (Simulating API Fetch)
const billData = [
    { id: 1, consumerNo: "123456", billDate: "2024-03-01", billingPeriod: "March", amount: 120.50, dueDate: "2024-03-25" },
    { id: 2, consumerNo: "789012", billDate: "2024-03-02", billingPeriod: "March", amount: 95.75, dueDate: "2024-03-26" },
    { id: 3, consumerNo: "345678", billDate: "2024-03-03", billingPeriod: "March", amount: 150.00, dueDate: "2024-03-27" }
];

const billTable = document.getElementById("bill-table");
const totalAmountSpan = document.getElementById("total-amount");
const proceedBtn = document.getElementById("proceed-btn");

// Load Bills into Table
function loadBills() {
    try {
        billTable.innerHTML = ""; // Clear Table
        let totalAmount = 0;

        billData.forEach((bill) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><input type="checkbox" class="bill-checkbox" data-amount="${bill.amount}" onchange="updateTotal()"></td>
                <td>${bill.consumerNo}</td>
                <td>${bill.billDate}</td>
                <td>${bill.billingPeriod}</td>
                <td>$${bill.amount.toFixed(2)}</td>
                <td>${bill.dueDate}</td>
            `;
            billTable.appendChild(row);
        });

    } catch (error) {
        document.getElementById("error-message").style.display = "block";
    }
}

// Update Total Amount
function updateTotal() {
    let total = 0;
    document.querySelectorAll(".bill-checkbox:checked").forEach((checkbox) => {
        total += parseFloat(checkbox.dataset.amount);
    });

    totalAmountSpan.textContent = total.toFixed(2);
    proceedBtn.disabled = total === 0;
}

// Proceed to Payment
function proceedToPayment() {
    alert("Proceeding to Payment...");
    window.location.href = "/pages/pay_bill.html"; // Redirect to Payment Page
}

// Go Back Function
function goBack() {
    window.history.back();
}

// export const totalAmount=totalAmountSpan;

// Load Bills on Page Load
window.onload = loadBills;


