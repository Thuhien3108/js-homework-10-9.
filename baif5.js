var rowCount = 0; // Khởi tạo biến đếm hàng
var grandTotal = 0; // Khởi tạo tổng cộng

function add() {
    var productName = document.getElementById("pn").value;
    var quantity = parseFloat(document.getElementById("qty").value);
    var productPrice = parseFloat(document.getElementById("pp").value);



    // Tính tổng cho sản phẩm hiện tại
    var total = quantity * productPrice;
    var formattedTotal = '$' + total.toFixed(2);

    grandTotal += total; // Cập nhật tổng cộng
    var formattedGrandTotal = '$' + grandTotal.toFixed(2);


    var table = document.getElementById("tbl");
    var totalRowIndex = table.rows.length - 1; // Lấy chỉ số của hàng tổng cộng
    var newRow = table.insertRow(totalRowIndex); // Thêm hàng mới trước hàng tổng cộng
    // Tạo các ô mới và thêm dữ liệu vào chúng
    
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = ++rowCount; // Tăng và hiển thị số thứ tự
    cell2.innerHTML = productName;
    cell3.innerHTML = quantity;
    cell4.innerHTML = productPrice.toFixed(2); // Định dạng giá sản phẩm
    cell5.innerHTML = formattedTotal; // Hiển thị tổng cộng cho sản phẩm hiện tại

    // Cập nhật tổng số tiền hiển thị
    document.getElementById("totalAmount").innerText = formattedGrandTotal;
    // Xóa các ô nhập liệu
    document.getElementById("pn").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("pp").value = "";
}