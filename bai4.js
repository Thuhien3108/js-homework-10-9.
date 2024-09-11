var id = 0;

function sell() {
    id++; // Tăng giá trị ID mỗi lần nhấn nút "sell"

    // Lấy giá trị từ các trường nhập liệu
    var productName = document.getElementById("pn").value;
    var quantity = document.getElementById("qty").value;
    var unitPrice = document.getElementById("up").value;
    var discount = document.getElementById("dc").value;

    // Tính toán tổng phụ (Subtotal)
    var subtotal = quantity * unitPrice * (1 - discount / 100);
    var formattedSubtotal = '$' + subtotal;

    // Tạo hàng mới trong bảng
    var table = document.getElementById("tb");
    var newRow = table.insertRow(-1); // Thêm hàng mới ở cuối bảng

    // Tạo các ô dữ liệu trong hàng mới
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    // Gán giá trị vào các ô
    cell1.innerHTML = id;
    cell2.innerHTML = productName;
    cell3.innerHTML = quantity;
    cell4.innerHTML = unitPrice;
    cell5.innerHTML = discount;
    cell6.innerHTML = formattedSubtotal;
}

function cancelForm() {
    // Xóa các giá trị trong các trường nhập liệu
    document.getElementById("pn").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("up").value = "";
    document.getElementById("dc").value = "";
}