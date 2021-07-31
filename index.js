var links = document.getElementsByClassName("aalink")

for (var i of links) {
    var string = i.getAttribute("onclick").split("'");
    var link = string[1];

    if (link !== undefined) {
        var newString = 'window.open("' + link + '", "_blank").focus(); return false;';
        i.removeAttribute("onclick");
        i.setAttribute("href", link);
        i.setAttribute("target", "_blank")
        i.setAttribute("rel", "noopener")
    }
}