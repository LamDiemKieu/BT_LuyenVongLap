// BT1
function timSoN() {
    var soN = document.getElementById("soN").value * 1;
    var ketQua = 0;
    var n = 0;

    while (ketQua <= soN) {
        n++;
        ketQua += n;
    }
    document.getElementById("ketQua").innerHTML = "Số n cần tìm là: " + n + " và tổng để thỏa điều kiện là : " + ketQua;
}

// BT2
function tinhTong() {
    var x = document.getElementById("soX").value * 1;
    var k = document.getElementById("soK").value * 1;
    var tong = 0;

    if (k <= 0) {
        alert("Vui lòng nhập số > 0");
    } else {
        for (var i = 1; i <= k; i++) {
            tong += Math.pow(x, i);
        }
        document.getElementById("xuatKetQua").innerHTML = "Tổng các số là: " + tong;
    }
}

// BT3
function tinhGiaiThua() {
    var z = document.getElementById("soZ").value * 1;
    var giaiThua = 1;

    for (var i = 1; i <= z; i++) {
        giaiThua *= i;
    }
    document.getElementById("hienThiKetQua").innerHTML = "Giai thừa của số z là: " + giaiThua;
}

// BT4 
function in10TheDiv() {
    var theDiv = "";
    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            theDiv += "<div style='background-color: red; color: white; padding: 10px;'>Thẻ div vị trí chẳn</div>"
        } else {
            theDiv += "<div style='background-color: blue; color: white; padding: 10px;'>Thẻ div vị trí lẻ</div>"
        }
    }
    document.getElementById("in10theDiv").innerHTML = theDiv;
}

// BT5 
function timSoNguyenTo() {
    var m = document.getElementById("soM").value * 1;
    var soNguyenTo = "";
    if (m >= 2) {
        function checkSoNt(m) {
            for (var i = 2; i < m; i++) {
                if (m % i == 0) {
                    var checkSo = "koPhaiSoNt";
                    console.log(m + " không phải là số nguyên tố");
                    break;
                }
            }
            if (checkSo != "koPhaiSoNt") {
                soNguyenTo += "Số nguyên tố cần tìm là: " + m + "<br>";
                return;
            }
        }
        for (var x = 2; x <= m; x++) {
            checkSoNt(x);
            document.getElementById("tinhKetQua").innerHTML = soNguyenTo;
        }
        
    } else {
        alert("Vui lòng nhập số > 1");
    }
}
