<script>
var right=0;function ans(no,asqt,correct,more){switch(asqt){case 1:
document.getElementById("b"+no).disabled=!0;
document.getElementById("c"+no).disabled=!0;
document.getElementById("d"+no).disabled=!0;break;case 2:
document.getElementById("a"+no).disabled=!0;
document.getElementById("c"+no).disabled=!0;
document.getElementById("d"+no).disabled=!0;case 3:
document.getElementById("a"+no).disabled=!0;
document.getElementById("b"+no).disabled=!0;
document.getElementById("d"+no).disabled=!0;break;case 4:
document.getElementById("a"+no).disabled=!0;
document.getElementById("b"+no).disabled=!0;
document.getElementById("c"+no).disabled=!0;break}if(asqt==correct){right+=1}if(correct==1){
    document.getElementById("aq"+no).style.backgroundColor="#00CCCC";
document.getElementById("bq"+no).style.backgroundColor="#FF3333";
document.getElementById("cq"+no).style.backgroundColor="#FF3333";
document.getElementById("dq"+no).style.backgroundColor="#FF3333"}if(correct==2){
    document.getElementById("bq"+no).style.backgroundColor="#00CCCC";
document.getElementById("aq"+no).style.backgroundColor="#FF3333";
document.getElementById("cq"+no).style.backgroundColor="#FF3333";
document.getElementById("dq"+no).style.backgroundColor="#FF3333"}if(correct==3){
    document.getElementById("cq"+no).style.backgroundColor="#00CCCC";
document.getElementById("bq"+no).style.backgroundColor="#FF3333";
document.getElementById("aq"+no).style.backgroundColor="#FF3333";
document.getElementById("dq"+no).style.backgroundColor="#FF3333"}if(correct==4){
    document.getElementById("dq"+no).style.backgroundColor="#00CCCC";
document.getElementById("bq"+no).style.backgroundColor="#FF3333";
document.getElementById("cq"+no).style.backgroundColor="#FF3333";
document.getElementById("aq"+no).style.backgroundColor="#FF3333"}
document.getElementById("cq"+no).style.color="white";
document.getElementById("bq"+no).style.color="white";
document.getElementById("aq"+no).style.color="white";
document.getElementById("dq"+no).style.color="white";
document.getElementById("rs"+no).style.fontSize="15px";
document.getElementById("rss"+no).innerHTML="<span style='color:#00CCCC'><b>Lời giải:</b></span>";
document.getElementById("overview").innerHTML="<span style='color:#FF0000'><b>Tổng số câu đúng:</b></span>  Đúng "+right}
</script>
