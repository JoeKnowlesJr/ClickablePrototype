var categoryList = [
    "Santech",
    "Fundom",
    "Lexilax",
    "Topwarm",
    "Kontam",
    "X-ronit",
    "Techdex",
    "KayEco",
    "Spanhotcom",
    "Dontom",
    "Singron",
    "Unostrong",
    "Tampflex",
    "TampStatwarm",
    "Voyazap",
    "Quotedonair",
    "RedTinstring",
    "Plus-Touch",
    "LamRon",
    "Zimplus",
    "TransLex",
    "Quofix",
    "DoubleCof",
    "Tempfind",
    "GrooveTone",
    "TanEco",
    "ToughSontough",
    "NewSing",
    "Biotrax"
];

var itemsList = [
    "Voltplus",
    "Tanlux",
    "Coneace",
    "Zimcity",
    "Openace",
    "Kphase",
    "Supertax",
    "Domlax",
    "plexis",
    "Itdex",
    "Biotechno",
    "Scotlam",
    "Nimtrans",
    "Linetexon",
    "Contechnology",
    "Duofind",
    "Alphatone",
    "Trandax",
    "Dingex",
    "Phystrax",
    "Trustbase",
    "Donhex",
    "Kontechnology",
    "striptone",
    "Tranphase",
    "Plusplex",
    "LaTexon",
    "Tangreen",
    "Apnix",
    "Damstring",
    "Domity",
    "Rejoyplus",
    "Isair",
    "Roundin",
    "Lamlight",
    "Spanla",
    "Joblamfresh",
    "Lamdinbam",
    "Xtax",
    "Freshdonex",
    "Physla",
    "Quading",
    "Dentohome",
    "MedJob",
    "TrioCom",
    "Unojob",
    "Funtouch",
    "Tamjoyjob",
    "Quolax",
    "Danzap",
    "U-dubstring",
    "Betait",
    "Betatop",
    "Trestip",
    "Ventoity",
    "Dingdex",
    "TresLax"
];

function createCategoryList() {
    var listText = "<ul>";
    for (var i = 0; i < categoryList.length; i++) {
        listText += "<li><span class='category' role='button' onclick='onCategoryClick()'> " + categoryList[i] + "</span></li>";
        console.log(categoryList[i]);
    }
    return listText + "</ul>";
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomItems(){
    var totalItems = itemsList.length;
    var usedItems = [];
    var numWorkingItems = randomIntFromInterval(15, totalItems);
    for (var i = 0; i < numWorkingItems; i++) {
        var currentItem = itemsList[randomIntFromInterval(0, numWorkingItems)];
        while (usedItems.indexOf(currentItem) !== -1) {
            currentItem = itemsList[randomIntFromInterval(0, numWorkingItems)];
        }
        usedItems.push(currentItem);
    }
    return usedItems;
}

var ROW_W = 10;

function itemGrid(items) {
    var container = document.createElement("div");
    container.id = "items-container";
    container.className = "container";
    var numRows = Math.floor(items.length / ROW_W);
    if ((items.length % ROW_W !== 0)) {
        numRows++;
    }

    for (i = 0; i < numRows; i++) {
        var row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;

        for (k = 0; k < ROW_W; k++) {
            var item = document.createElement("div");
            item.className = "item-display";
            var itemText = items[(i * ROW_W) + k]
            item.innerText = itemText;
            row.appendChild(item);
        };

        container.appendChild(row);
    };

    return container;
};

function onCategoryClick(){
    var text = $(event.target).text();
    document.getElementById("category-title").innerText = text;
    var box = document.getElementById("items");
    var itemsToDisplay = getRandomItems();
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }
    box.appendChild(itemGrid(itemsToDisplay));
}

function onItemClick(){
    alert("Clicked item!");
}


$(document).ready(function () {
    document.getElementById("category-list").innerHTML = createCategoryList();
});