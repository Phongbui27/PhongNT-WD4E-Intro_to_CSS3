
function upDate(previewPic) {

    console.log("Mouse over event triggered");

    console.log(previewPic.alt);
    console.log(previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;

    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function unDo() {

    document.getElementById("image").style.backgroundImage =
        "url('')";

    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}
