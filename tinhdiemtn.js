<script type="text/javascript">
                                         function tinhxuoiigdtx() {
    var t = document.getElementById("diemtoangdtx").value,
        e = document.getElementById("diemvangdtx").value,
        n = document.getElementById("diemanhgdtx").value,
        i = document.getElementById("diemtbgdtx").value,
        d = document.getElementById("diemkkgdtx").value,
        g = document.getElementById("diemutgdtx").value;
    if (t <= 1 || e <= 1 || n <= 1) document.getElementById("tinhxuoigdtx").innerHTML = "Bạn đã trượt tốt nghiệp do dưới hoặc bằng 1!";
    else {
        var m = (((Number(t) + Number(e) + Number(n)) / 3 + Number(d) / 4) * .7 + .3 * Number(i) + Number(g)).toFixed(2),
            x = (5 - m).toFixed(2);
        document.getElementById("tinhxuoigdtx").innerHTML = "Điểm xét tốt nghiệp của bạn là: " + m, m < 5 ? document.getElementById("tinhxuoi2gdtx").innerHTML = "Bạn đ\xe3 trượt tốt nghiệp!<br/>Bạn cần \xedt nhất " + x + " điểm nữa để đỗ tốt nghiệp" : document.getElementById("tinhxuoi2gdtx").innerHTML = "Bạn đ\xe3 đỗ tốt nghiệp!"
    }
}
                                      </script>
                                      