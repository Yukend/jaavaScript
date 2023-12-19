function Func() {
    var body = document.getElementsByTagName("body");
    body[0].style.display = "flex";
    var args = document.getElementsByTagName("div");
    console.log(args);
    args[0].style.fontFamily = "Times New Roman";
    args[3].style.margin = "60px 20px 40px 20px";
    for (var i = 0; i < args.length - 1; i++) {
        args[i].style.color = "Blue";
        args[i].style.margin = "20px"; 
    }
}