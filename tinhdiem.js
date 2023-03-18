   <script type="text/javascript">
                                          function tinhxuoii() {
    var e = document.getElementById("diemtoan").value,
        t = document.getElementById("diemvan").value,
        n = document.getElementById("diemanh").value,
        i = document.getElementById("diemtohop1").value,
        d = document.getElementById("diemtohop2").value,
        m = document.getElementById("diemtohop3").value,
        l = document.getElementById("diemtb").value,
        g = document.getElementById("diemkk").value,
        o = document.getElementById("diemut").value;
    if (e <= 1 || t <= 1 || n <= 1 || i <= 1 || d <= 1 || m <= 1) document.getElementById("tinhxuoi").innerHTML = "Bạn đ\xe3 trượt tốt nghiệp do c\xf3 1 m\xf4n dưới hoặc bằng 1!";
    else {
        var B = (Number(i) + Number(d) + Number(m)) / 3,
            a = (.7 * ((Number(e) + Number(t) + Number(n) + B + Number(g)) / 4) + .3 * Number(l) + Number(o)).toFixed(2),
            h = (5 - a).toFixed(2);
        document.getElementById("tinhxuoi").innerHTML = "Điểm x\xe9t tốt nghiệp của bạn l\xe0: " + a, a < 5 ? document.getElementById("tinhxuoi2").innerHTML = "Bạn đ\xe3 trượt tốt nghiệp!<br/>Bạn cần \xedt nhất " + h + " điểm nữa để đỗ tốt nghiệp" : document.getElementById("tinhxuoi2").innerHTML = "Bạn đ\xe3 đỗ tốt nghiệp!"
    }
}
                                      </script>