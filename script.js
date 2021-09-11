function MouseOn(id) {

    $("#" + id).animate({
        borderRadius: "2vw"
    }, 1000);


}

function Back(id) {

    $("#" + id).animate({
        borderRadius: "1vw"
    }, 1000);


}
function ChangeSlide(id) {
    if (id == "pager-1") {
        document.getElementById("one").style.display = "flex";
        document.getElementById("pager-1").style.background = "black";
        document.getElementById("two").style.display = "none";
        document.getElementById("pager-2").style.background = "#2bcc91";
        document.getElementById("three").style.display = "none";
        document.getElementById("pager-3").style.background = "#2bcc91";
    }
    if (id == "pager-2") {
        document.getElementById("one").style.display = "none";
        document.getElementById("pager-1").style.background = "#2bcc91";
        document.getElementById("two").style.display = "flex";
        document.getElementById("pager-2").style.background = "black";
        document.getElementById("three").style.display = "none";
        document.getElementById("pager-3").style.background = "#2bcc91";
    }
    if (id == "pager-3") {
        document.getElementById("one").style.display = "none";
        document.getElementById("pager-1").style.background = "#2bcc91";
        document.getElementById("two").style.display = "none";
        document.getElementById("pager-2").style.background = "#2bcc91";
        document.getElementById("three").style.display = "flex";
        document.getElementById("pager-3").style.background = "black";
    }
}

function loadPage() {
    body = document.getElementById("body");
    head = document.getElementById("head");
    section = document.getElementById("main");
    footer = document.getElementById("foot");
    head.style.display = "none";
    section.style.display = "none";
    footer.style.display = "none";
    body.style.background = "url(images/loading.gif)";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "50%";
    body.style.backgroundPosition = "top";
    body.style.backgroundColor = "#FCFEFC";
    setTimeout(() => {
        head.style.display = "block";
        section.style.display = "block";
        footer.style.display = "flex";
        body.style.background = "white";
    }, 2000);
}