var iframe = document.getElementById("iframe");
document.body.style.margin = "0px";
document.body.style.overflow = "hidden";
var content = document.getElementById("content");
content.style.backgroundColor = "rgb(21, 21, 20)";
document.body.style.backgroundColor = "rgb(21, 21, 20)";

var style = function(){
    content.style.width = window.innerWidth + "px";
    content.style.height = window.innerHeight + "px";
    iframe.style.width = window.innerWidth + "px";
    iframe.style.height = window.innerHeight + "px";
    iframe.style.border = "0px";
    //If iframe is loaded
    var ready = false;
    if (iframe.contentWindow.document.readyState === "complete"){
        iframe.style.display = "block";
        clearInterval(styleloop);
        var loading = document.getElementById("loading");
        loading.remove();
        document.title = iframe.contentWindow.document.title;
        var oldHeight = window.innerHeight;
        var oldWidth = window.innerWidth;
        
        setInterval(function(){
            if ((!(oldHeight === window.innerHeight)) || (!(oldWidth === window.innerWidth))){
                reloadstyles();
                oldHeight = window.innerHeight;
                oldWidth = window.innerWidth;
            }
            if (!(document.title === iframe.contentWindow.document.title)){
                document.title = iframe.contentWindow.document.title;
            }
        }, 25)
        ready = true;
    }
    iframe.onload = function(){
        if (ready){
            return;
        }
        iframe.style.display = "block";
        clearInterval(styleloop);
        var loading = document.getElementById("loading");
        loading.remove();
        document.title = iframe.contentWindow.document.title;
        var oldHeight = window.innerHeight;
        var oldWidth = window.innerWidth;

        setInterval(function(){
            if ((!(oldHeight === window.innerHeight)) || (!(oldWidth === window.innerWidth))){
                reloadstyles();
                oldHeight = window.innerHeight;
                oldWidth = window.innerWidth;
            }
            if (!(document.title === iframe.contentWindow.document.title)){
                document.title = iframe.contentWindow.document.title;
            }
        }, 25)
    }
}
style();

var reloadstyles = function(){
    content.style.width = window.innerWidth + "px";
    content.style.height = window.innerHeight + "px";
    iframe.style.width = window.innerWidth + "px";
    iframe.style.height = window.innerHeight + "px";
    iframe.style.border = "0px";
}