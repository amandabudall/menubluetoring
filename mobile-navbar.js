class MobileNavbar {
    constructor(MobileMenu, navList, navLinks) {
        this.MobileMenu = document.querySelector(MobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind();
    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.MobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if(this.MobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const MobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
MobileNavbar.init();