const body = document.getElementsByTagName("body");

var theme = 1;
function themeSwitch(n){
    body[0].className = body[0].className.replace(theme == 0 ? "light" : "dark", theme == 0 ? "dark" : "light");
    theme = theme == 0 ? 1 : 0;
    return;
}

