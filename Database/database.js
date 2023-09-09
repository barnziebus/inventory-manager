export class DatabaseHandler {
    constructor() {
        this.database = {
            "paints": [
                { "name": "abaddon black",              "type": "base", "color type": "black",  "hex": "#231F20", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "averland sunset",            "type": "base", "color type": "yellow", "hex": "#FDB825", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "balthasar gold",             "type": "base", "color type": "gold",   "hex": "#A47552", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "bugmans glow",               "type": "base", "color type": "beige",  "hex": "#834F44", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "caledor sky",                "type": "base", "color type": "blue",   "hex": "#396E9E", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "caliban green",              "type": "base", "color type": "green",  "hex": "#00401F", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "castellan green",            "type": "base", "color type": "green",  "hex": "#314821", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "celestra grey",              "type": "base", "color type": "grey",   "hex": "#90A8A8", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "ceramite white",             "type": "base", "color type": "white",  "hex": "#FFFFFF", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "daemonette hide",            "type": "base", "color type": "purple", "hex": "#696684", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "death guard green",          "type": "base", "color type": "green",  "hex": "#848A66", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "deathwood forest",           "type": "base", "color type": "green",  "hex": "#5C6730", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "Dryard Bark",                "type": "base", "color type": "black",  "hex": "#33312D", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "incubi darkness",            "type": "base", "color type": "blue",   "hex": "#0B474A", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "jokaero otype",              "type": "base", "color type": "red",    "hex": "#EE3823", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "kantor blue",                "type": "base", "color type": "blue",   "hex": "#002151", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "khorne red",                 "type": "base", "color type": "red",    "hex": "#6A0001", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "leadbelcher",                "type": "base", "color type": "silver", "hex": "#888D8F", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "macragge blue",              "type": "base", "color type": "blue",   "hex": "#0D407F", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "mechanicus standard grey",   "type": "base", "color type": "grey",   "hex": "#3D4B4D", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "mephiston red",              "type": "base", "color type": "red",    "hex": "#9A1115", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "mournfang brown",            "type": "base", "color type": "brown",  "hex": "#640909", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "naggaroth night",            "type": "base", "color type": "purple", "hex": "#3D3354", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "rakarth flesh",              "type": "base", "color type": "beige",  "hex": "#A29E91", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "Ratskin Flesh",              "type": "base", "color type": "beige",  "hex": "#AD6B4C", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "Retributor Armour",          "type": "base", "color type": "bronze", "hex": "#C39E81", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "Rinox Hide",                 "type": "base", "color type": "Brown",  "hex": "#493435", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "screamer pink",              "type": "base", "color type": "pink",   "hex": "#7C1645", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "Screaming Bell",             "type": "base", "color type": "Bronze", "hex": "#X16F45", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "steel legion drab",          "type": "base", "color type": "brown",  "hex": "#5E5134", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "stegadon scale green",       "type": "base", "color type": "074863", "hex": "#074863", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "the fang grey",              "type": "base", "color type": "grey",   "hex": "#436174", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "thosand sons blue",          "type": "base", "color type": "blue",   "hex": "#18ABCC", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "Waaagh! Flesh",              "type": "base", "color type": "green",  "hex": "#1F5429", "owned": 1, "wishlist": false, "price": 2.75},
                { "name": "Warplock Bronze",            "type": "base", "color type": "Bronze", "hex": "#927D7B", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "XV-88",                      "type": "base", "color type": "brown",  "hex": "#72491E", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "zandri dust",                "type": "base", "color type": "brown",  "hex": "#9E915C", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "administratum grey",         "type": "layer", "color type": "grey",  "hex": "#949B95", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "ahriman blue",               "type": "layer", "color type": "blue",  "hex": "#1F8C9C", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "alaitox blue",               "type": "layer", "color type": "blue",  "hex": "#295788", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "altdorf gaurd blue",         "type": "layer", "color type": "blue",  "hex": "#295788", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "auric armour gold",          "type": "layer", "color type": "gold",  "hex": "#E8BC6D", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "balor brown",                "type": "layer", "color type": "brown", "hex": "#8B5910", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "baneblade brown",            "type": "layer", "color type": "brown", "hex": "#937F6D", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "bestigor flesh",             "type": "layer", "color type": "brown", "hex": "#D38A57", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "brass scorpion",             "type": "layer", "color type": "bronze","hex": "#B7885F", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "cadian fleshtone",           "type": "layer", "color type": "beige", "hex": "#B7885F", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "calgar blue",                "type": "layer", "color type": "blue",  "hex": "#4272B8", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "dark reaper",                "type": "layer", "color type": "green", "hex": "#3B5150", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "Dawnstone",                  "type": "layer", "color type": "grey",  "hex": "#70756E", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "deathclaw brown",            "type": "layer", "color type": "brown", "hex": "#B36853", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "doombull brown",             "type": "layer", "color type": "brown", "hex": "#5D0009", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "elysian green",              "type": "layer", "color type": "green", "hex": "#748F39", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "emperors children",          "type": "layer", "color type": "pink",  "hex": "#B94278", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "Eshin grey",                 "type": "layer", "color type": "grey",  "hex": "#4A4F52", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "evil sunz scarlet",          "type": "layer", "color type": "red",   "hex": "#C2191F", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "fenrisian grey",             "type": "layer", "color type": "grey",  "hex": "#719BB7", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "Fire dragon bright",         "type": "layer", "color type": "orange","hex": "#F58652", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "flash gitz yellow",          "type": "layer", "color type": "yellow","hex": "#FFF200", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "flayed one flesh",           "type": "layer", "color type": "beige", "hex": "#F0D9B8", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "fulgurite copper",           "type": "layer", "color type": "bronze","hex": "#FCFCDE", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "Gehenna's gold",             "type": "layer", "color type": "gold",  "hex": "#DBA674", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "genestealer purple",         "type": "layer", "color type": "purple","hex": "#7761AB", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "gorthor brown",              "type": "layer", "color type": "brown", "hex": "#654741", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "hashut copper",              "type": "layer", "color type": "bronze","hex": "#B77647", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "hoeth blue",                 "type": "layer", "color type": "blue",  "hex": "#4C7FB4", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "ironbreaker",                "type": "layer", "color type": "silver","hex": "#A1A6A9", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "kabalite green",             "type": "layer", "color type": "green", "hex": "#027C67", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "karak stone",                "type": "layer", "color type": "brown", "hex": "#BB9662", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "kislev flesh",               "type": "layer", "color type": "beige", "hex": "#D6A875", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "liberator gold",             "type": "layer", "color type": "gold",  "hex": "#D3B587", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "loren forest",               "type": "layer", "color type": "green", "hex": "#50702D", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "lothern blue",               "type": "layer", "color type": "blue",  "hex": "#34A2CF", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "moot green",                 "type": "layer", "color type": "green", "hex": "#52B244", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "nurgling green",             "type": "layer", "color type": "green", "hex": "#849C63", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "ogryn camo",                 "type": "layer", "color type": "green", "hex": "#9DA94B", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "pallid wych flesh",          "type": "layer", "color type": "grey",  "hex": "#CDCEBE", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "pink horror",                "type": "layer", "color type": "pink",  "hex": "#90305D", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "runefang steel",             "type": "layer", "color type": "silver","hex": "#C3CACE", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "runelord brass",             "type": "layer", "color type": "bronze","hex": "#B6A89A", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "russ grey",                  "type": "layer", "color type": "grey",  "hex": "#547588", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "screaming skull",            "type": "layer", "color type": "beige", "hex": "#D2D4A2", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "skarsnik green",             "type": "layer", "color type": "green", "hex": "#5F9370", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "skavenblight dinge",         "type": "layer", "color type": "grey",  "hex": "#47413B", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "skrag brown",                "type": "layer", "color type": "brown", "hex": "#90490F", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "skullcrusher brass",         "type": "layer", "color type": "bronze","hex": "#F1C78E", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "slaanesh grey",              "type": "layer", "color type": "grey",  "hex": "#8E8C97", "owned": 0, "wishlist": false, "price": 2.75},
                { "name": "sotek green",                "type": "layer", "color type": "green", "hex": "#0B6974", "owned": 0, "wishlist": false, "price": 2.75},
            ]
        }

        this.loadData()
    }

    saveData() {
        let JSONdata = JSON.stringify(this.database);
        localStorage.setItem("database", JSONdata);
    }

    loadData() {
        let JSONdata = localStorage.getItem("database");
        let savedData = JSON.parse(JSONdata);

        if (savedData) {
            this.database = savedData;
        } 
    }

    updateData(paintName, owned, wishlist, price) {
        for (let paint of this.database.paints) {
            if (paint.name === paintName) {
                paint["owned"] = owned
                paint["wishlist"] = wishlist
                paint["price"] = price
                console.log(paint)
            }
        }
    }
} 










// },
// "recipes": {
//   "example": {
//     "base": "example base paint",
//     "shade": "example shade",
//     "layer 1": "example layer 1",
//     "layer 2": "example layer 2",
//     "edge highlight": "example edge highlight"
//   }
// }

// {
//   "name": "",
//   "type": "",
//   "color type": "",
//   "hex": "",
//   "owned": "",
//   "wishlist": "",
//   "price": "",
// },