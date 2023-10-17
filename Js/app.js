var content = document.getElementById("content");
var sidebar = document.getElementById("sidebar");
var scrollable = document.getElementById("scrollable");

var hello_there = document.getElementById("hello-there");
var hello_there_sidebar = document.getElementById("hello-there-sidebar");
var sidebar_title = document.getElementById("sidebar-title");

var my_projects = document.getElementById("my-projects");
var my_projects_sidebar = document.getElementById("my-projects-sidebar");

var my_coding_skills = document.getElementById("my-coding-skills");
var my_coding_skills_sidebar = document.getElementById("my-coding-skills-sidebar");

var contact_me = document.getElementById("contact-me");
var contact_me_sidebar = document.getElementById("contact-me-sidebar");

document.body.style.margin = "0px";
content.style.backgroundColor = "rgb(21, 21, 20)";
document.body.style.overflow = "hidden";

sidebar.style.overflow = "auto";
scrollable.style.overflow = "auto";

scrollable.style.position = "absolute";
scrollable.style.display = "absolute";
sidebar.style.position = "absolute";
sidebar.style.display = "absolute";

sidebar.onselectstart = function (event){
    event.preventDefault();
}
sidebar.onselect = function (event){
    event.preventDefault();
}
sidebar.onselectend = function (event){
    event.preventDefault();
}
sidebar.onselectionchange = function (event){
    event.preventDefault();
}

hello_there_sidebar.onclick = function () {
    //Focus on hello_there
    hello_there.scrollIntoView();
}

my_projects_sidebar.onclick = function () {
    //Focus on my_projects
    my_projects.scrollIntoView();
}

my_coding_skills_sidebar.onclick = function () {
    //Focus on my_coding_skills
    my_coding_skills.scrollIntoView();
}

contact_me_sidebar.onclick = function () {
    //Focus on contact_me
    contact_me.scrollIntoView();
}

var link = document.getElementsByClassName("link");
var index = 0;
while (index < link.length) {
    link[index].style.color = "rgb(80, 255, 80)";
    link[index].style.fontFamily = "Arial";
    link[index].style.textDecoration = "underline";
    link[index].style.cursor = "pointer";
    (function(item){
        item.onmouseover = function () {
            item.style.color = "rgb(255, 80, 80)";
        }
        item.onmouseout = function () {
            item.style.color = "rgb(80, 255, 80)";
        }
    })(link[index]);
    index += 1;
}

var style = function () {
    content.style.height = (window.innerHeight + "px");
    content.style.width = (window.innerWidth + "px");
    sidebar.style.height = (window.innerHeight + "px");
    sidebar.style.width = ((window.innerWidth / 4) + "px");

    var link = document.getElementsByClassName("link");
    var sidebar_texts = document.getElementsByClassName("sidebar-text");
    var titles = document.getElementsByClassName("title");
    var texts = document.getElementsByClassName("text");
    var sidebar_titles = document.getElementsByClassName("sidebar-title");

    var sizeref;
    if (window.innerWidth > window.innerHeight) {
        sizeref = window.innerWidth;
    }
    else {
        sizeref = window.innerHeight;
    }

    sidebar.style.borderRight = (sizeref / 800) + "px solid rgb(70, 70, 70)";

    var index = 0;
    while (index < sidebar_titles.length) {
        sidebar_titles[index].style.fontSize = (sizeref / 35) + "px";
        sidebar_titles[index].style.color = "rgb(5, 160, 240)";
        sidebar_titles[index].style.fontFamily = "Arial";
        sidebar_titles[index].style.textAlign = "center";
        index += 1;
    }

    var index = 0;
    while (index < sidebar_texts.length) {
        sidebar_texts[index].style.fontSize = (sizeref / 48) + "px";
        sidebar_texts[index].style.color = "rgb(255, 255, 255)";
        sidebar_texts[index].style.fontFamily = "Arial";
        sidebar_texts[index].style.marginLeft = ((window.innerWidth / 100) + "px");
        sidebar_texts[index].style.cursor = "pointer";
        (function(item){
            item.onmouseover = function () {
                item.style.color = "rgb(5, 160, 240)";
            }
            item.onmouseout = function () {
                item.style.color = "rgb(255, 255, 255)";
            }
        })(sidebar_texts[index]);
        index += 1;
    }

    var index = 0;
    while (index < titles.length) {
        titles[index].style.fontSize = (sizeref / 30) + "px";
        titles[index].style.marginLeft = ((window.innerWidth / 100) + "px");
        titles[index].style.color = "rgb(255, 255, 255)";
        titles[index].style.fontFamily = "Arial";
        index += 1;
    }

    var index = 0;
    while (index < texts.length) {
        texts[index].style.fontSize = (sizeref / 48) + "px";
        texts[index].style.color = "rgb(255, 255, 255)";
        texts[index].style.fontFamily = "Arial";
        texts[index].style.marginLeft = ((window.innerWidth / 100) + "px");
        index += 1;
    }

    scrollable.style.height = (window.innerHeight + "px");
    scrollable.style.width = ((window.innerWidth - sidebar.offsetWidth) + "px");
    scrollable.style.marginLeft = (sidebar.offsetWidth + "px");

    var index = 0;
    while (index < link.length) {
        link[index].style.color = "rgb(80, 255, 80)";
        link[index].style.fontFamily = "Arial";
        link[index].style.textDecoration = "underline";
        link[index].style.cursor = "pointer";
        (function(item){
            item.onmouseover = function () {
                item.style.color = "rgb(255, 80, 80)";
            }
            item.onmouseout = function () {
                item.style.color = "rgb(80, 255, 80)";
            }
        })(link[index]);
        index += 1;
    }
}

style();

var oldHeight = window.innerHeight;
var oldWidth = window.innerWidth;

setInterval(function () {
    if ((!(oldHeight === window.innerHeight)) || (!(oldWidth === window.innerWidth))) {
        style();
        oldHeight = window.innerHeight;
        oldWidth = window.innerWidth;
    }
}, 25);