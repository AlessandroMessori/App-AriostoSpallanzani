var StaticData = function ($state, $rootScope) {

    this.adminLinks = [
        {
            "name": "Scrivi Avviso",
            "icon": "icon ion-ios-bell",
            "url": "sendMessage",
            "direct": function () {
                $state.go(this.url);
            }
        },
        {
            "name": "Scrivi Articolo del Giornalino",
            "url": "addArticle",
            "icon": "icon ion-ios-paper",
            "direct": function () {
                $state.go(this.url);
                $rootScope.contentType = "Giornalino";
            }
        },
        {
            "name": "Scrivi Articolo d'orientamento",
            "url": "addArticle",
            "icon": "icon ion-ios-navigate",
            "direct": function () {
                $state.go(this.url);
                $rootScope.contentType = "Orientamento";
            }
        },
        {
            "name": "Modera Commenti",
            "url": "moderation",
            "icon": "icon ion-ios-trash",
            "direct": function () {
                $state.go(this.url);
            }
        }
    ];

    this.links = [
        {
            "name": "Registro Elettronico",
            "url": "https://spallanzani-re-sito.registroelettronico.com/login/?next=/select-student/",
            "icon": "icon ion-ios-book-outline"
        },
        {
            "name": "Quaderno Elettronico",
            "url": "http://2.229.79.199/quaderno/index.php",
            "icon": "icon ion-ios-book"
        },
        {
            "name": "Sito Web Della Scuola",
            "url": "http://www.liceoariostospallanzani-re.gov.it/",
            "icon": "icon ion-ios-world"
        },
        {
            "name": "Accesso Web Mail",
            "url": "https://mail.google.com",
            "icon": "icon ion-ios-email"
        }
    ];

    this.conventions = [
        {
            name: "Re Di Pane",
            address: "via a caso 1",
            description: "Sconto del 5% su tutti i prodotti",
            img: "dist/Images/Conventions/con1.jpeg"
        },
        {
            name: "Hamburgheria",
            address: "via cicciona 10",
            description: "Sconto del 10% su tutti i prodotti",
            img: "dist/Images/Conventions/con2.jpeg"

        },
        {
            name: "Pizzeria",
            address: "via adjflkdfslkfd",
            description: "Sconto del 5% sulle pizze",
            img: "dist/Images/Conventions/con3.jpeg"
        },
        {
            name: "Bar Mazzini",
            address: "via  di fronte allo spalla",
            description: "La seconda Pasta è gratis",
            img: "dist/Images/Conventions/con4.jpeg"

        },
        {
            name: "Ligabue",
            address: "via rossi 5",
            description: "Sconto del 5% sulle torte",
            img: "dist/Images/Conventions/con5.jpeg"
        },
        {
            name: "Da Malindo",
            address: "via einstein 10",
            description: "Sconto del 5%",
            img: "dist/Images/Conventions/con6.jpeg"
        },
        {
            name: "Forno Panciroli",
            address: "via a caso 197",
            description: "Sconto del 5% sul Gnocco",
            img: "dist/Images/Conventions/con7.jpeg"
        },
        {
            name: "Gelateria",
            address: "via per Modena 6",
            description: "Granite Gratis per tutti",
            img: "dist/Images/Conventions/con8.jpeg"
        },
        {
            name: "Negozio a Caso",
            address: "via senza nome",
            description: "Sconto a caso",
            img: "dist/Images/Conventions/con9.jpeg"
        },
        {
            name: "Armandos",
            address: "via a caso 154",
            description: "Sconto del 5% su tutto",
            img: "dist/Images/Conventions/con10.jpeg"
        }
    ]

};

module.exports = StaticData;