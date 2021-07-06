function BMI() {
    var tienvay = document.getElementById("tien_vay").value;
    var thoigianvay = document.getElementById("thoi_gian_vay").value;
    var laiSuat = document.getElementById("lai_Suat").value;

    var laiSuatPhanTram = laiSuat / 100
    var soTienGocConLai = tienvay;

    // vòng lặp, 
    for (var i = 0; i < thoigianvay; i++) {
        var SoTienGocPhaiTra = Math.round(tienvay / thoigianvay)
        var soTienGocConLai = soTienGocConLai - SoTienGocPhaiTra
        var SoTienLaiCanPhaiTra = Math.round(soTienGocConLai * laiSuatPhanTram / 12)
        var soTienPhaiTraHangThang = Math.round(SoTienLaiCanPhaiTra + SoTienGocPhaiTra)
        n = i + 1
        var thoigiantra = new Date();
        thoigiantra.setMonth(thoigiantra.getMonth() + n);



        document.write("Tháng " + n + "<br>Số gốc còn lại: " + soTienGocConLai + "<br>Số gốc phải trả: " + SoTienGocPhaiTra + "<br>Tiền lãi phải trả hàng tháng: " + SoTienLaiCanPhaiTra + "<br>Số tiền phải trả trong tháng nay: " + soTienPhaiTraHangThang + "<br>Thời hạn trả: " + thoigiantra.toLocaleString() + "<br>" + "<br>");
    }
}