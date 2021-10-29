// Title Updating Function

function updateTitle() {

    updatePeriod = 900;

    if (Date.now() % updatePeriod <= updatePeriod / 2) {
        document.getElementById("main-title").innerHTML = "> Maxime Barniaudy&nbsp";
    } else {
        document.getElementById("main-title").innerHTML = "> Maxime Barniaudy_"
    }
}

inverted = false;

function invertColorTheme() {
    if (inverted) {
        document.getElementById("document").style.filter = "invert(0)";
        inverted = false;
    } else {
        document.getElementById("document").style.filter = "invert(1)";
        inverted = true;
    }
}


currentSection = "Main";

function selectSection(sectionName) {
    document.getElementById(currentSection).hidden = true;
    document.getElementById(sectionName).hidden = false;
    currentSection = sectionName;
}

setInterval(updateTitle, 50);