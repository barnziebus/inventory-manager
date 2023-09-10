export class DatabaseHandler {
    constructor() {
        // rememeber to clear history when amending database
        this.database = {
            "paints": [
                { name: "Abaddon Black",              type: "base",      hex: "#231F20", owned: 0, wishlist: false, price: 2.75, colorType: ["black", ]},
                { name: "Averland Sunset",            type: "base",      hex: "#FDB825", owned: 0, wishlist: false, price: 2.75, colorType: ["yellow",]},
                { name: "Balthasar Gold",             type: "base",      hex: "#A47552", owned: 0, wishlist: false, price: 2.75, colorType: ["gold",  ]},
                { name: "Bugmans Glow",               type: "base",      hex: "#834F44", owned: 0, wishlist: false, price: 2.75, colorType: ["beige", ]},
                { name: "Caledor Sky",                type: "base",      hex: "#396E9E", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Caliban Green",              type: "base",      hex: "#00401F", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Castellan Green",            type: "base",      hex: "#314821", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Celestra Grey",              type: "base",      hex: "#90A8A8", owned: 0, wishlist: false, price: 2.75, colorType: ["grey",  ]},
                { name: "Ceramite White",             type: "base",      hex: "#FFFFFF", owned: 0, wishlist: false, price: 2.75, colorType: ["white", ]},
                { name: "Daemonette Hide",            type: "base",      hex: "#696684", owned: 0, wishlist: false, price: 2.75, colorType: ["purple",]},
                { name: "Death Guard Green",          type: "base",      hex: "#848A66", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Deathwood Forest",           type: "base",      hex: "#5C6730", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Dryard Bark",                type: "base",      hex: "#33312D", owned: 0, wishlist: false, price: 2.75, colorType: ["black", ]},
                { name: "Incubi Darkness",            type: "base",      hex: "#0B474A", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Jokaero Otype",              type: "base",      hex: "#EE3823", owned: 0, wishlist: false, price: 2.75, colorType: ["red",   ]},
                { name: "Kantor Blue",                type: "base",      hex: "#002151", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Khorne Red",                 type: "base",      hex: "#6A0001", owned: 0, wishlist: false, price: 2.75, colorType: ["red",   ]},
                { name: "Leadbelcher",                type: "base",      hex: "#888D8F", owned: 0, wishlist: false, price: 2.75, colorType: ["silver",]},
                { name: "Macragge Blue",              type: "base",      hex: "#0D407F", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Mechanicus Standard Grey",   type: "base",      hex: "#3D4B4D", owned: 0, wishlist: false, price: 2.75, colorType: ["grey",  ]},
                { name: "Mephiston Red",              type: "base",      hex: "#9A1115", owned: 0, wishlist: false, price: 2.75, colorType: ["red",   ]},
                { name: "Mournfang Brown",            type: "base",      hex: "#640909", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Naggaroth Night",            type: "base",      hex: "#3D3354", owned: 0, wishlist: false, price: 2.75, colorType: ["purple",]},
                { name: "Rakarth Flesh",              type: "base",      hex: "#A29E91", owned: 0, wishlist: false, price: 2.75, colorType: ["beige", ]},
                { name: "Ratskin Flesh",              type: "base",      hex: "#AD6B4C", owned: 0, wishlist: false, price: 2.75, colorType: ["beige", ]},
                { name: "Retributor Armour",          type: "base",      hex: "#C39E81", owned: 0, wishlist: false, price: 2.75, colorType: ["bronze",]},
                { name: "Rinox Hide",                 type: "base",      hex: "#493435", owned: 0, wishlist: false, price: 2.75, colorType: ["Brown", ]},
                { name: "Screamer Pink",              type: "base",      hex: "#7C1645", owned: 0, wishlist: false, price: 2.75, colorType: ["pink",  ]},
                { name: "Screaming Bell",             type: "base",      hex: "#X16F45", owned: 0, wishlist: false, price: 2.75, colorType: ["Bronze",]},
                { name: "Steel Legion Drab",          type: "base",      hex: "#5E5134", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Stegadon Scale Green",       type: "base",      hex: "#074863", owned: 0, wishlist: false, price: 2.75, colorType: ["074863",]},
                { name: "The Fang Grey",              type: "base",      hex: "#436174", owned: 0, wishlist: false, price: 2.75, colorType: ["grey",  ]},
                { name: "Thosand Sons Blue",          type: "base",      hex: "#18ABCC", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Waaagh! Flesh",              type: "base",      hex: "#1F5429", owned: 1, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Warplock Bronze",            type: "base",      hex: "#927D7B", owned: 0, wishlist: false, price: 2.75, colorType: ["Bronze",]},
                { name: "Xv-88",                      type: "base",      hex: "#72491E", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Zandri Dust",                type: "base",      hex: "#9E915C", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Administratum Grey",         type: "layer",     hex: "#949B95", owned: 0, wishlist: false, price: 2.75, colorType: ["grey",  ]},
                { name: "Ahriman Blue",               type: "layer",     hex: "#1F8C9C", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Alaitox Blue",               type: "layer",     hex: "#295788", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Altdorf Gaurd Blue",         type: "layer",     hex: "#295788", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Auric Armour Gold",          type: "layer",     hex: "#E8BC6D", owned: 0, wishlist: false, price: 2.75, colorType: ["gold",  ]},
                { name: "Balor Brown",                type: "layer",     hex: "#8B5910", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Baneblade Brown",            type: "layer",     hex: "#937F6D", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Bestigor Flesh",             type: "layer",     hex: "#D38A57", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Brass Scorpion",             type: "layer",     hex: "#B7885F", owned: 0, wishlist: false, price: 2.75, colorType: ["bronze",]},
                { name: "Cadian Fleshtone",           type: "layer",     hex: "#B7885F", owned: 0, wishlist: false, price: 2.75, colorType: ["beige", ]},
                { name: "Calgar Blue",                type: "layer",     hex: "#4272B8", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Dark Reaper",                type: "layer",     hex: "#3B5150", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Dawnstone",                  type: "layer",     hex: "#70756E", owned: 0, wishlist: false, price: 2.75, colorType: ["grey",  ]},
                { name: "Deathclaw Brown",            type: "layer",     hex: "#B36853", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Doombull Brown",             type: "layer",     hex: "#5D0009", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Elysian Green",              type: "layer",     hex: "#748F39", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Emperors Children",          type: "layer",     hex: "#B94278", owned: 0, wishlist: false, price: 2.75, colorType: ["pink",  ]},
                { name: "Eshin Grey",                 type: "layer",     hex: "#4A4F52", owned: 0, wishlist: false, price: 2.75, colorType: ["grey",  ]},
                { name: "Evil Sunz Scarlet",          type: "layer",     hex: "#C2191F", owned: 0, wishlist: false, price: 2.75, colorType: ["red",   ]},
                { name: "Fenrisian Grey",             type: "layer",     hex: "#719BB7", owned: 0, wishlist: false, price: 2.75, colorType: ["grey",  ]},
                { name: "Fire Dragon Bright",         type: "layer",     hex: "#F58652", owned: 0, wishlist: false, price: 2.75, colorType: ["orange",]},
                { name: "Flash Gitz Yellow",          type: "layer",     hex: "#FFF200", owned: 0, wishlist: false, price: 2.75, colorType: ["yellow",]},
                { name: "Flayed One Flesh",           type: "layer",     hex: "#F0D9B8", owned: 0, wishlist: false, price: 2.75, colorType: ["beige", ]},
                { name: "Fulgurite Copper",           type: "layer",     hex: "#FCFCDE", owned: 0, wishlist: false, price: 2.75, colorType: ["bronze",]},
                { name: "Gehenna's Gold",             type: "layer",     hex: "#DBA674", owned: 0, wishlist: false, price: 2.75, colorType: ["gold",  ]},
                { name: "Genestealer Purple",         type: "layer",     hex: "#7761AB", owned: 0, wishlist: false, price: 2.75, colorType: ["purple",]},
                { name: "Gorthor Brown",              type: "layer",     hex: "#654741", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Hashut Copper",              type: "layer",     hex: "#B77647", owned: 0, wishlist: false, price: 2.75, colorType: ["bronze",]},
                { name: "Hoeth Blue",                 type: "layer",     hex: "#4C7FB4", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Ironbreaker",                type: "layer",     hex: "#A1A6A9", owned: 0, wishlist: false, price: 2.75, colorType: ["silver",]},
                { name: "Kabalite Green",             type: "layer",     hex: "#027C67", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Karak Stone",                type: "layer",     hex: "#BB9662", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Kislev Flesh",               type: "layer",     hex: "#D6A875", owned: 0, wishlist: false, price: 2.75, colorType: ["beige", ]},
                { name: "Liberator Gold",             type: "layer",     hex: "#D3B587", owned: 0, wishlist: false, price: 2.75, colorType: ["gold",  ]},
                { name: "Loren Forest",               type: "layer",     hex: "#50702D", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Lothern Blue",               type: "layer",     hex: "#34A2CF", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Moot Green",                 type: "layer",     hex: "#52B244", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Nurgling Green",             type: "layer",     hex: "#849C63", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Ogryn Camo",                 type: "layer",     hex: "#9DA94B", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Pallid Wych Flesh",          type: "layer",     hex: "#CDCEBE", owned: 0, wishlist: false, price: 2.75, colorType: ["grey",  ]},
                { name: "Pink Horror",                type: "layer",     hex: "#90305D", owned: 0, wishlist: false, price: 2.75, colorType: ["pink",  ]},
                { name: "Runefang Steel",             type: "layer",     hex: "#C3CACE", owned: 0, wishlist: false, price: 2.75, colorType: ["silver",]},
                { name: "Runelord Brass",             type: "layer",     hex: "#B6A89A", owned: 0, wishlist: false, price: 2.75, colorType: ["bronze",]},
                { name: "Russ Grey",                  type: "layer",     hex: "#547588", owned: 0, wishlist: false, price: 2.75, colorType: ["grey",  ]},
                { name: "Screaming Skull",            type: "layer",     hex: "#D2D4A2", owned: 0, wishlist: false, price: 2.75, colorType: ["beige", ]},
                { name: "Skarsnik Green",             type: "layer",     hex: "#5F9370", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Skavenblight Dinge",         type: "layer",     hex: "#47413B", owned: 0, wishlist: false, price: 2.75, colorType: ["grey",  ]},
                { name: "Skrag Brown",                type: "layer",     hex: "#90490F", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Skullcrusher Brass",         type: "layer",     hex: "#F1C78E", owned: 0, wishlist: false, price: 2.75, colorType: ["bronze",]},
                { name: "Slaanesh Grey",              type: "layer",     hex: "#8E8C97", owned: 0, wishlist: false, price: 2.75, colorType: ["grey",  ]},
                { name: "Sotek Green",                type: "layer",     hex: "#0B6974", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Squig Orange",               type: "layer",     hex: "#AA4F44", owned: 0, wishlist: false, price: 2.75, colorType: ["orange",]},
                { name: "Stormhost Silver",           type: "layer",     hex: "#BBC6C9", owned: 0, wishlist: false, price: 2.75, colorType: ["Silver",]},
                { name: "Stormvermin Fur",            type: "layer",     hex: "#736B65", owned: 0, wishlist: false, price: 2.75, colorType: ["Grey",  ]},
                { name: "Straken Green",              type: "layer",     hex: "#628126", owned: 0, wishlist: false, price: 2.75, colorType: ["Green", ]},
                { name: "Straken Green",              type: "layer",     hex: "#628126", owned: 0, wishlist: false, price: 2.75, colorType: ["Green", ]},
                { name: "Sybarite Green",             type: "layer",     hex: "#30A56C", owned: 0, wishlist: false, price: 2.75, colorType: ["Green", ]},
                { name: "Sycorax Bronze",             type: "layer",     hex: "#CBB394", owned: 0, wishlist: false, price: 2.75, colorType: ["bronze",]},
                { name: "Tallarn Sand",               type: "layer",     hex: "#A67610", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Tau Light Ochre",            type: "layer",     hex: "#BF6E1D", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Teclis Blue",                type: "layer",     hex: "#317EC1", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Temple Guard Blue",          type: "layer",     hex: "#339A8D", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Thunderhawk Blue",           type: "layer",     hex: "#417074", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Troll Slayer Orange",        type: "layer",     hex: "#F36D2D", owned: 0, wishlist: false, price: 2.75, colorType: ["Orange",]},
                { name: "Tuskgor Fur",                type: "layer",     hex: "#882525", owned: 0, wishlist: false, price: 2.75, colorType: ["red",   ]},
                { name: "Ulthuan Grey",               type: "layer",     hex: "#C7E0D9", owned: 0, wishlist: false, price: 2.75, colorType: ["grey",  ]},
                { name: "Ungor Flesh",                type: "layer",     hex: "#D6A766", owned: 0, wishlist: false, price: 2.75, colorType: ["beige", ]},
                { name: "Ushabti Bone",               type: "layer",     hex: "#BBBB7F", owned: 0, wishlist: false, price: 2.75, colorType: ["beige", ]},
                { name: "Warboss Green",              type: "layer",     hex: "#BBBB7F", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Warpfiend Grey",             type: "layer",     hex: "#6B6A74", owned: 0, wishlist: false, price: 2.75, colorType: ["grey",  ]},
                { name: "Warpstone Glow",             type: "layer",     hex: "#1E7331", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Wazdakka Red",               type: "layer",     hex: "#8C0A0C", owned: 0, wishlist: false, price: 2.75, colorType: ["red",   ]},
                { name: "White Scar",                 type: "layer",     hex: "#FFFFFF", owned: 0, wishlist: false, price: 2.75, colorType: ["white", ]},
                { name: "Wild Rider Red",             type: "layer",     hex: "#EA2F28", owned: 0, wishlist: false, price: 2.75, colorType: ["white", ]},
                { name: "Xereus Purple",              type: "layer",     hex: "#471F5F", owned: 0, wishlist: false, price: 2.75, colorType: ["purple",]},
                { name: "Yriel Yellow",               type: "layer",     hex: "#FFDA00", owned: 0, wishlist: false, price: 2.75, colorType: ["yellow",]},
                { name: "Zamesi Dessert",             type: "layer",     hex: "#DDA026", owned: 0, wishlist: false, price: 2.75, colorType: ["yellow",]},
                { name: "Agrax Earthshade",           type: "shade",     hex: "#5A573F", owned: 0, wishlist: false, price: 4.75, colorType: ["green", ]},
                { name: "Agrax Earthshade (Gloss)",   type: "shade",     hex: "#5A573F", owned: 0, wishlist: false, price: 4.75, colorType: ["green", ]},
                { name: "Athonian Camoshade",         type: "shade",     hex: "#6D8E44", owned: 0, wishlist: false, price: 4.75, colorType: ["green", ]},
                { name: "Biel-Tan Green",             type: "shade",     hex: "#1BA169", owned: 0, wishlist: false, price: 4.75, colorType: ["green", ]},
                { name: "Carroburg Crimson",          type: "shade",     hex: "#A82A70", owned: 0, wishlist: false, price: 4.75, colorType: ["pink",  ]},
                { name: "Xasabdira Yellow",           type: "shade",     hex: "#FECE5A", owned: 0, wishlist: false, price: 4.75, colorType: ["yellow",]},
                { name: "Coelia Greenshade",          type: "shade",     hex: "#0E7F78", owned: 0, wishlist: false, price: 4.75, colorType: ["green", ]},
                { name: "Drakenhof Nightshade",       type: "shade",     hex: "#125899", owned: 0, wishlist: false, price: 4.75, colorType: ["blue",  ]},
                { name: "Druchii Violet",             type: "shade",     hex: "#7A468C", owned: 0, wishlist: false, price: 4.75, colorType: ["purple",]},
                { name: "Fuegan Orange",              type: "shade",     hex: "#C77E4D", owned: 0, wishlist: false, price: 4.75, colorType: ["orange",]},
                { name: "Nuln Oil",                   type: "shade",     hex: "#14100E", owned: 0, wishlist: false, price: 4.75, colorType: ["black", ]},
                { name: "Nuln Oil (Gloss)",           type: "shade",     hex: "#14100E", owned: 0, wishlist: false, price: 4.75, colorType: ["black", ]},
                { name: "Reikland Fleshshade",        type: "shade",     hex: "#CA6C4D", owned: 0, wishlist: false, price: 4.75, colorType: ["beige", ]},
                { name: "Reikland Fleshshade (Gloss)",type: "shade",     hex: "#CA6C4D", owned: 0, wishlist: false, price: 4.75, colorType: ["beige", ]},
                { name: "Seraphim Sepia",             type: "shade",     hex: "#D7824B", owned: 0, wishlist: false, price: 4.75, colorType: ["orange",]},
                { name: "Astorath Red",               type: "dry",       hex: "#DD482B", owned: 0, wishlist: false, price: 2.75, colorType: ["red",   ]},
                { name: "Changeling Pink",            type: "dry",       hex: "#F4AFCD", owned: 0, wishlist: false, price: 2.75, colorType: ["pink",  ]},
                { name: "Chronus Blue",               type: "dry",       hex: "#72A8D1", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Dawnstone",                  type: "dry",       hex: "#919C9F", owned: 0, wishlist: false, price: 2.75, colorType: ["grey",  ]},
                { name: "Eldar Flesh",                type: "dry",       hex: "#ECC083", owned: 0, wishlist: false, price: 2.75, colorType: ["beige", ]},
                { name: "Etherium Blue",              type: "dry",       hex: "#A2BAD2", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Golden Griffon",             type: "dry",       hex: "#A99058", owned: 0, wishlist: false, price: 2.75, colorType: ["gold",  ]},
                { name: "Golgfag Brown",              type: "dry",       hex: "#C2804F", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Hellion Green",              type: "dry",       hex: "#84C3AA", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Hexos Palesun",              type: "dry",       hex: "#FFF200", owned: 0, wishlist: false, price: 2.75, colorType: ["yellow",]},
                { name: "Hoeth Blue",                 type: "dry",       hex: "#57A9D4", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Imrik Blue",                 type: "dry",       hex: "#67AED0", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Kindleflame",                type: "dry",       hex: "#F79E86", owned: 0, wishlist: false, price: 2.75, colorType: ["pink",  ]},
                { name: "Longbeard Grey",             type: "dry",       hex: "#CECEAF", owned: 0, wishlist: false, price: 2.75, colorType: ["grey",  ]},
                { name: "Lucius Lilac",               type: "dry",       hex: "#B69FCC", owned: 0, wishlist: false, price: 2.75, colorType: ["purple",]},
                { name: "Necron Compound",            type: "dry",       hex: "#828B8E", owned: 0, wishlist: false, price: 2.75, colorType: ["grey",  ]},
                { name: "Niblet Green",               type: "dry",       hex: "#7DC734", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Nurgling Green",             type: "dry",       hex: "#B8CC82", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Praxeti White",              type: "dry",       hex: "#FFFFFF", owned: 0, wishlist: false, price: 2.75, colorType: ["white", ]},
                { name: "Ryza Rust",                  type: "dry",       hex: "#EC631A", owned: 0, wishlist: false, price: 2.75, colorType: ["orange",]},
                { name: "Sigmarite",                  type: "dry",       hex: "#CAAD76", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Skink Blue",                 type: "dry",       hex: "#58C1CD", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Slaanesh Grey",              type: "dry",       hex: "#DBD5E6", owned: 0, wishlist: false, price: 2.75, colorType: ["grey",  ]},
                { name: "Stormfang",                  type: "dry",       hex: "#80A7C1", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Sylvaneth Bark",             type: "dry",       hex: "#AC8262", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Terminatus Stone",           type: "dry",       hex: "#BDB192", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Thunderhawk Blue",           type: "dry",       hex: "#509BA9", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Tyrant Skull",               type: "dry",       hex: "#CDC586", owned: 0, wishlist: false, price: 2.75, colorType: ["beige", ]},
                { name: "Underhive Ash",              type: "dry",       hex: "#C0BD81", owned: 0, wishlist: false, price: 2.75, colorType: ["beige", ]},
                { name: "Verminlord Hide",            type: "dry",       hex: "#A16954", owned: 0, wishlist: false, price: 2.75, colorType: ["brown", ]},
                { name: "Wrack White",                type: "dry",       hex: "#FCFBFA", owned: 0, wishlist: false, price: 2.75, colorType: ["white", ]},
                { name: "Baharroth Blue",             type: "edge",      hex: "#58C1CD", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Blue Horror",                type: "edge",      hex: "#A2BAD2", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Dechala Lilac",              type: "edge",      hex: "#B69FCC", owned: 0, wishlist: false, price: 2.75, colorType: ["purple",]},
                { name: "Dorn Yellow",                type: "edge",      hex: "#FFF200", owned: 0, wishlist: false, price: 2.75, colorType: ["yellow",]},
                { name: "Fulgrim Pink",               type: "edge",      hex: "#F4AFCD", owned: 0, wishlist: false, price: 2.75, colorType: ["pink",  ]},
                { name: "Gauss Blaster Green",        type: "edge",      hex: "#84C3AA", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Krieg Khaki",                type: "edge",      hex: "#C0BD81", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Lugganath Orange",           type: "edge",      hex: "#F79E86", owned: 0, wishlist: false, price: 2.75, colorType: ["orange",]},
                { name: "Bloodletter",                type: "glaze",     hex: "#F37355", owned: 0, wishlist: false, price: 2.75, colorType: ["orange",]},
                { name: "Guilliman Blue",             type: "glaze",     hex: "#2F9AD6", owned: 0, wishlist: false, price: 2.75, colorType: ["blue",  ]},
                { name: "Lamenters Yellow",           type: "glaze",     hex: "#FFF56B", owned: 0, wishlist: false, price: 2.75, colorType: ["yellow",]},
                { name: "Waywatcher Green",           type: "glaze",     hex: "#6DC066", owned: 0, wishlist: false, price: 2.75, colorType: ["green", ]},
                { name: "Agrellan Badland",           type: "texture",   hex: "#FFFFFF", owned: 0, wishlist: false, price: 4.75, colorType: ["N/A",   ]},
                { name: "Agrellan Earth",             type: "texture",   hex: "#FFFFFF", owned: 0, wishlist: false, price: 4.75, colorType: ["N/A",   ]},
                { name: "Armageddon Dust",            type: "texture",   hex: "#D3A907", owned: 0, wishlist: false, price: 4.75, colorType: ["yellow",]},
                { name: "Armageddon Dunes",           type: "texture",   hex: "#FFFFFF", owned: 0, wishlist: false, price: 4.75, colorType: ["N/A",   ]},
                { name: "Astrogranite",               type: "texture",   hex: "#757679", owned: 0, wishlist: false, price: 4.75, colorType: ["grey",  ]},
                { name: "Astrogranite Debris",        type: "texture",   hex: "#FFFFFF", owned: 0, wishlist: false, price: 4.75, colorType: ["N/A",   ]},
                { name: "Blackfire Earth",            type: "texture",   hex: "#A75820", owned: 0, wishlist: false, price: 4.75, colorType: ["brown", ]},
                { name: "Lustrian Undergrowth",       type: "texture",   hex: "#415A09", owned: 0, wishlist: false, price: 4.75, colorType: ["green", ]},
                { name: "Martian Ironcrust",          type: "texture",   hex: "#FFFFFF", owned: 0, wishlist: false, price: 4.75, colorType: ["N/A",   ]},
                { name: "Martian Ironearth",          type: "texture",   hex: "#FFFFFF", owned: 0, wishlist: false, price: 4.75, colorType: ["N/A",   ]},
                { name: "Mourn Mountain Snow",        type: "texture",   hex: "#E9EAEB", owned: 0, wishlist: false, price: 4.75, colorType: ["white", ]},
                { name: "Stirland Battlemire",        type: "texture",   hex: "#FFFFFF", owned: 0, wishlist: false, price: 4.75, colorType: ["N/A",   ]},
                { name: "Stirland Mud",               type: "texture",   hex: "#492B00", owned: 0, wishlist: false, price: 4.75, colorType: ["brown", ]},
                { name: "Valhallan Blizzard",         type: "texture",   hex: "#FFFFFF", owned: 0, wishlist: false, price: 4.75, colorType: ["N/A",   ]},
                { name: "'Ardcoat",                   type: "technical", hex: "#E2DEDF", owned: 0, wishlist: false, price: 4.75, colorType: ["white", ]},
                { name: "Agrellan Earth",             type: "technical", hex: "#9A816B", owned: 0, wishlist: false, price: 4.75, colorType: ["brown", ]},
                { name: "Blood for the Blood God",    type: "technical", hex: "#67080B", owned: 0, wishlist: false, price: 4.75, colorType: ["red",   ]},
                { name: "Imperial Primer",            type: "technical", hex: "#231F20", owned: 0, wishlist: false, price: 4.75, colorType: ["black", ]},
                { name: "Lahmian Medium",             type: "technical", hex: "#F5EDE2", owned: 0, wishlist: false, price: 4.75, colorType: ["white", ]},
                { name: "Liquid Green Stuff",         type: "technical", hex: "#3B7A5F", owned: 0, wishlist: false, price: 4.75, colorType: ["green", ]},
                { name: "Martian Ironearth",          type: "technical", hex: "#C15A4B", owned: 0, wishlist: false, price: 4.75, colorType: ["red",   ]},
                { name: "Nihilakh Oxide",             type: "technical", hex: "#6CB79E", owned: 0, wishlist: false, price: 4.75, colorType: ["green", ]},
                { name: "Nurgle's Rot",               type: "technical", hex: "#9B8F22", owned: 0, wishlist: false, price: 4.75, colorType: ["green", ]},
                { name: "Soulstone Blue",             type: "technical", hex: "#004EFA", owned: 0, wishlist: false, price: 4.75, colorType: ["blue",  ]},
                { name: "Spiritstone Red",            type: "technical", hex: "#FF4B24", owned: 0, wishlist: false, price: 4.75, colorType: ["red",   ]},
                { name: "Typhus Corrosion",           type: "technical", hex: "#463D2B", owned: 0, wishlist: false, price: 4.75, colorType: ["brown", ]},
                { name: "Waystone Green",             type: "technical", hex: "#00C000", owned: 0, wishlist: false, price: 4.75, colorType: ["white", ]},
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
                if (owned !== "") {
                    paint["owned"] = owned
                }
                if (wishlist !== "") {
                    paint["wishlist"] = wishlist
                }
                if (price !== "") {
                    paint["price"] = price
                }
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