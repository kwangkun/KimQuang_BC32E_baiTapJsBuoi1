// Bài 1: Tính tiền lương nv
/*
    Input: số ngày công
    Process: số ngày công * 100.000
    Output: tổng tiền lương
*/
var nc = 12;
var luong = nc * 100000;

console.log('Tiền Lương: ' + luong);

// Bài 2: Tính giá trị trung bình
/*
    Input: cho 5 số thực a, b, c, d, e
    Process: (a + b + c + d + e) / 5
    Output: giá trị trung bình
*/
var a = 2;
var b = 19;
var c = 32;
var d = 21;
var e = 22;
var avg = (a + b + c + d + e) / 5;

console.log('Giá Trị Trung Bình = ' + avg);

// Bài 3: Quy đổi tiền từ USD sang VND
/*
    Input: nhập số tiền USD
    Proces: VND = USD * 23500
    Output: giá trị tiền VND sau khi quy đổi
*/
var usd = 4;
var vnd = usd * 23500;

console.log('VND = ' + vnd);

// Bài 4: Tính diện tích, chu vi hình chữ nhật
/*
    Input: nhập 2 tham số chiều dài (cd), chiều rộng (cr) của hình chữ nhật
    Process: chu vi (cV) = (cd + cr) * 2; diện tích (dT) = cd * cr 
    Output: kết quả chu vi và diện tích hình chữ nhật
*/
var cd = 12;
var cr = 5;
var cV = (cd + cr) * 2;
var dT = cd * cr;

console.log('Chu Vi = ' + cV)
console.log('Diện Tích = ' + dT)

// Bài 5: Tính tổng 2 ký số
/*
    Input: nhập 1 số có 2 chữ số (n)
    Process: 
        + (nChuc) trích xuất số hàng chục từ số đã cho: Math.floor(n / 10) 
        + (nDonVi) trích xuất số hàng đơn vị từ số đã cho: n % 10
    Output: tổng 2 ký số đã trích xuất (nSum)
*/
var n = 95;
var nChuc = Math.floor(n / 10);
var nDonVi = n % 10;
var nSum = nChuc + nDonVi;

console.log('Tổng 2 Ký Số = ' + nSum);