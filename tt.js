function startTimer() {
    var my_timer = document.getElementById("my_timer");
    var time = my_timer.innerHTML;
    var arr = time.split(":");
    var h = arr[0];
    var m = arr[1];
    var s = arr[2];
    var res2 = document.getElementById("pp").innerHTML;
    if (s == 0) {
        if (m == 0) {
            if (h == 0) {
            document.getElementById("result").innerText = res2;
            return;
        }
        h--;
        m = 60;
        if (h < 10) h = "0" + h;
    }
    m--;
    if (m < 10) m = "0" + m;
    s = 59;
}
else s--;
if (s < 10) s = "0" + s;
document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
setTimeout(startTimer, 1000);
}

function tstjs(){
    var contain = document.getElementById('containier');
    containier.onclick = function tstjs(event){
    
        let numb = Math.floor(Math.random() * 130) + 1;
        var butid = document.getElementById(event.target.id);
        var t = document.getElementById("seek").innerHTML;
        var string = (butid.innerHTML);
        var i = 0;
        let pred = Math.floor(Math.random() * 10) + 1;;
        let res = document.getElementById("pp").innerHTML;
        res = Number(res);
        if (t == string) {
            res = res + 1; 
        }
        for (i = 1; i <= 12; i++) { 
            (document.getElementById('s'+ i).innerText = numb);
            (numb = Math.floor(Math.random() * 130) + 1);
        }
        document.getElementById('s'+ pred).innerText = numb;
        document.getElementById('seek').innerText = numb;
        t = numb; 
        document.getElementById("pp").innerText = res;
            
        
} 
}