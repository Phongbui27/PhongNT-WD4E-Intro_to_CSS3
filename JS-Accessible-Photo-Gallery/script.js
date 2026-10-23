
function upDate(previewPic) {

    console.log("upDate triggered");

    console.log(previewPic.alt);
    console.log(previewPic.src);

    let display = document.getElementById("image");

    display.textContent = previewPic.alt;

    display.style.backgroundImage =
        "url('" + previewPic.src + "')";
}


function unDo() {

    console.log("unDo triggered");

    let display = document.getElementById("image");

    display.style.backgroundImage = "url('')";

    display.textContent =
        "Hover over or focus on an image below to display here.";
}


function addTabFocus() {

    console.log("Page loaded - adding tabindex");

    let images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {

        images[i].setAttribute("tabindex", "0");

    }

}
