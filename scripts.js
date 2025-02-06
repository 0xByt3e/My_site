function toggleSubmenu(element) {
    if (element.classList.contains('active')) {
        element.classList.remove('active');
    } else {
        var allMenus = document.querySelectorAll('nav li');
        allMenus.forEach(function(menu) {
            menu.classList.remove('active');
        });
        element.classList.add('active');
    }
}

function toggleMode() {
    document.body.classList.toggle('light-mode');
    var button = document.querySelector('.toggle-button');
    button.classList.toggle('dark');
}

function toggleLanguage() {
    const currentLang = document.documentElement.lang;

    if (currentLang === "hu") {
        document.documentElement.lang = "en";
        updateText("en");
        document.getElementById("language-toggle").style.backgroundImage = "url('hun.png')";
    } else {
        document.documentElement.lang = "hu";
        updateText("hu");
        document.getElementById("language-toggle").style.backgroundImage = "url('eng.png')";
    }
}

function updateText(language) {
    const translations = {
        "hu": {
            "header_h1": "Ethical Hacking",
            "header_h2": "Powered by 0xByte",
            "section_h1": "Etikus hackerré válás útján.",
            "section_p": "<center style='color: #ffcc00;'>Az oldal fejlesztés alatt áll</center>",
            "menu_1": "Rólam",
            "menu_2": "Hacker Eszközök",
            "menu_3": "Tananyagok",
            "menu_4": "Programozási Nyelvek",
            "submenu_1": "Nmap",
            "submenu_2": "Gobuster",
            "submenu_3": "Metasploit",
            "submenu_4": "Hydra",
            "submenu_5": "Hashcat"
        },
        "en": {
            "header_h1": "Ethical Hacking",
            "header_h2": "Powered by 0xByte",
            "section_h1": "The Path to Becoming an Ethical Hacker",
            "section_p": "<center style='color: #ffcc00;'>This page is under development</center>",
            "menu_1": "About Me",
            "menu_2": "Hacker Tools",
            "menu_3": "Courses",
            "menu_4": "Programming Languages",
            "submenu_1": "Nmap",
            "submenu_2": "Gobuster",
            "submenu_3": "Metasploit",
            "submenu_4": "Hydra",
            "submenu_5": "Hashcat"
        }
    };

    // Frissítsük a fő szövegeket
    document.getElementById("header_h1").innerText = translations[language]["header_h1"];
    document.getElementById("header_h2").innerText = translations[language]["header_h2"];
    document.getElementById("section_h1").innerText = translations[language]["section_h1"];
    document.getElementById("section_p").innerHTML = translations[language]["section_p"];

    // Frissítsük a menüpontok szövegeit
    document.getElementById("menu_1").innerText = translations[language]["menu_1"];
    document.getElementById("menu_2").innerText = translations[language]["menu_2"];
    document.getElementById("menu_3").innerText = translations[language]["menu_3"];
    document.getElementById("menu_4").innerText = translations[language]["menu_4"];

    // Frissítsük az almenü szövegeit
    document.getElementById("submenu_1").innerText = translations[language]["submenu_1"];
    document.getElementById("submenu_2").innerText = translations[language]["submenu_2"];
    document.getElementById("submenu_3").innerText = translations[language]["submenu_3"];
    document.getElementById("submenu_4").innerText = translations[language]["submenu_4"];
    document.getElementById("submenu_5").innerText = translations[language]["submenu_5"];
}

(function() {
    const currentLang = document.documentElement.lang;
    if (currentLang === "en") {
        document.getElementById("language-toggle").style.backgroundImage = "url('hun.png')";
    } else {
        document.getElementById("language-toggle").style.backgroundImage = "url('eng.png')";
    }
})();

