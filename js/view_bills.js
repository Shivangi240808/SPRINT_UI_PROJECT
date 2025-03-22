const bills = [
    { consumerNo: '12345', billNumber: 'BILL001', paymentStatus: 'Unpaid', connectionType: 'Domestic', connectionStatus: 'Connected', mobile: '9876543210', billPeriod: 'Jan-Feb', billDate: '2024-01-10', dueDate: '2024-02-10', disconnectionDate: '-', dueAmount: 500 },
    { consumerNo: '67890', billNumber: 'BILL002', paymentStatus: 'Unpaid', connectionType: 'Commercial', connectionStatus: 'Connected', mobile: '9876543222', billPeriod: 'Jan-Feb', billDate: '2024-01-15', dueDate: '2024-02-15', disconnectionDate: '-', dueAmount: 750 },
    {consumerNo: '67894', billNumber: 'BILL006', paymentStatus: 'Unpaid', connectionType: 'Industrial', connectionStatus: 'Connected', mobile: '9876543226', billPeriod: 'Mar-Apr', billDate: '2024-03-12', dueDate: '2024-04-12', disconnectionDate: '-', dueAmount: 5000},  
{consumerNo: '67895', billNumber: 'BILL007', paymentStatus: 'Paid', connectionType: 'Commercial', connectionStatus: 'Connected', mobile: '9876543227', billPeriod: 'Apr-May', billDate: '2024-04-05', dueDate: '2024-05-05', disconnectionDate: '-', dueAmount: 1800}, 
{consumerNo: '67896', billNumber: 'BILL008', paymentStatus: 'Unpaid', connectionType: 'Residential', connectionStatus: 'Disconnected', mobile: '9876543228', billPeriod: 'May-Jun', billDate: '2024-05-08', dueDate: '2024-06-08', disconnectionDate: '2024-07-01', dueAmount: 700},  
{consumerNo: '67897', billNumber: 'BILL009', paymentStatus: 'Paid', connectionType: 'Industrial', connectionStatus: 'Connected', mobile: '9876543229', billPeriod: 'Jun-Jul', billDate: '2024-06-15', dueDate: '2024-07-15', disconnectionDate: '-', dueAmount: 4500}
];
const rowsPerPage = 6;
let currentPage = 1;
function loadBills() {
    const billTable = document.getElementById('billTable');
    bills.forEach((bill, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="checkbox" class="bill-checkbox" data-index="${index}" onchange="calculateTotal()"></td>
            
            <td>${bill.billNumber}</td>
            <td>${bill.paymentStatus}</td>
            <td>${bill.connectionType}</td>
            <td>${bill.connectionStatus}</td>
           
            <td>${bill.billDate}</td>
            <td>${bill.dueDate}</td>
            <td>${bill.dueAmount}</td>
            <td><input type="hidden" class="payable-amount" value="${bill.dueAmount}" data-index="${index}" onchange="calculateTotal()">
            ${bill.dueAmount}
            </td>
            
            <td><button class="pages-btn" id="view-pay">View/Pay</button</td>
        `;
        billTable.appendChild(row);
    });
}

function calculateTotal() {
    let total = 0;
    document.querySelectorAll('.bill-checkbox').forEach((checkbox, index) => {
        if (checkbox.checked) {
            const amount = document.querySelectorAll('.payable-amount')[index].value;
            total += parseFloat(amount);
        }
    });

    document.getElementById('totalAmount').innerText = total.toFixed(2);
}
function proceedToPay() {
    alert('Redirecting to Payment Page with total amount: ' + document.getElementById('totalAmount').innerText);
    window.location.href = 'payment.html';
}
window.onload = loadBills;
