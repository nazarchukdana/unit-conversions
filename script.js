function temperature(){
    var c = document.getElementById("c").value;
    var f = (c * 9/5) + 32;
    document.getElementById("f").value = f;
}
function weight(){
    var k = document.getElementById("k").value;
    var p = k * 2.2;
    document.getElementById("p").value = p;
}
function distance(){
    var k = document.getElementById("km").value;
    var m = k * 0.62137;
    document.getElementById("m").value = m;
}