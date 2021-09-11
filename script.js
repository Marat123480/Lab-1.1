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
function ChangeSlide(id){
    if(id == "pager-1"){
        document.getElementById("one").style.display = "flex";
        document.getElementById("pager-1").style.background = "black";
        document.getElementById("two").style.display = "none";
        document.getElementById("pager-2").style.background = "#2bcc91";
        document.getElementById("three").style.display = "none";
        document.getElementById("pager-3").style.background = "#2bcc91";
    }
    if(id == "pager-2"){
        document.getElementById("one").style.display = "none";
        document.getElementById("pager-1").style.background = "#2bcc91";
        document.getElementById("two").style.display = "flex";
        document.getElementById("pager-2").style.background = "black";
        document.getElementById("three").style.display = "none";
        document.getElementById("pager-3").style.background = "#2bcc91";
    }
    if(id == "pager-3"){
        document.getElementById("one").style.display = "none";
        document.getElementById("pager-1").style.background = "#2bcc91";
        document.getElementById("two").style.display = "none";
        document.getElementById("pager-2").style.background = "#2bcc91";
        document.getElementById("three").style.display = "flex";
        document.getElementById("pager-3").style.background = "black";
    }
}