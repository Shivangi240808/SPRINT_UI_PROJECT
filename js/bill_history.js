// Sample Bill Data (For demonstration)
const bills = [
    { billDate: "2025-03-10", billingPeriod: "Feb 2025", dueDate: "2025-03-30", billAmount: 3000, paymentStatus: "Paid", paymentDate: "2025-03-20", modeOfPayment: "Credit Card", pdfLink: "bill1.pdf" },
    { billDate: "2025-02-10", billingPeriod: "Jan 2025", dueDate: "2025-02-28", billAmount: 2800, paymentStatus: "Unpaid", paymentDate: "", modeOfPayment: "", pdfLink: "bill2.pdf" },
    { billDate: "2025-01-10", billingPeriod: "Dec 2024", dueDate: "2025-01-31", billAmount: 3100, paymentStatus: "Paid", paymentDate: "2025-01-25", modeOfPayment: "UPI", pdfLink: "bill3.pdf" }
];

// Function to display bills
function displayBills(filteredBills = bills) {
    const tableBody = document.getElementById("billTableBody");
    tableBody.innerHTML = ""; // Clear previous entries

    if (filteredBills.length === 0) {
        document.getElementById("noDataMessage").style.display = "block";
        return;
    } else {
        document.getElementById("noDataMessage").style.display = "none";
    }

    filteredBills.forEach(bill => {
        const row = `<tr>
            <td>${bill.billDate}</td>
            <td>${bill.billingPeriod}</td>
            <td>${bill.dueDate}</td>
            <td>₹${bill.billAmount}</td>
            <td>${bill.paymentStatus}</td>
            <td>${bill.paymentDate || "-"}</td>
            <td>${bill.modeOfPayment || "-"}</td>
            <td><a href="${bill.pdfLink}" target="_blank" class="download-btn">Download</a></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Filter Bills Based on Date and Payment Status
function filterBills() {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const paymentFilter = document.getElementById("paymentFilter").value;

    let filtered = bills.filter(bill => 
        (!startDate || new Date(bill.billDate) >= new Date(startDate)) &&
        (!endDate || new Date(bill.billDate) <= new Date(endDate)) &&
        (paymentFilter === "all" || bill.paymentStatus.toLowerCase() === paymentFilter)
    );

    displayBills(filtered);
}

// Sort Bills
function sortBills() {
    const sortBy = document.getElementById("sortBy").value;
    bills.sort((a, b) => new Date(a[sortBy]) - new Date(b[sortBy]));
    displayBills();
}

// Initial Display of Bills
document.addEventListener("DOMContentLoaded", displayBills);
