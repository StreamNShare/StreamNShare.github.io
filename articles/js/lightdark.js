// Function that changes IDs classes, uses the lightdark.css file.

function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "body dark-mode" ? "body light-mode" : "body dark-mode";

    var header = document.getElementById("header");
    var headerClass = header.className;
    header.className = headerClass == "header dark-mode" ? "header light-mode" : "header dark-mode";

    var wrapper = document.getElementById("wrapper");
    var wrapperClass = wrapper.className;
    wrapper.className = wrapperClass == "wrapper flex dark-mode" ? "wrapper flex light-mode" : "wrapper flex dark-mode";

    var logo__title = document.getElementById("logo__title");
    var logo__titleClass = logo__title.className;
    logo__title.className = logo__titleClass == "logo__title dark-mode" ? "logo__title light-mode" : "logo__title dark-mode";
    

  }