function aud_show_unshow(get) {
    if (get.className === "show") get.classList.replace("assets/svg/showpass.svg", "assets/svg/hidden.svg");
    else get.classList.replace("assets/svg/hidden.svg", "assets/svg/showpass.svg");

}