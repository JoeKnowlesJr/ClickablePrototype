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

var itemWidth = 130;

function createCategoryList() {
    var listText = "<ul>";
    for (var i = 0; i < categoryList.length; i++) {
        listText +=
            "<li><span class='category' role='button' id='btn_" +
            i +
            "' onclick='onCategoryClick()'> " +
            categoryList[i] +
            "</span></li>";
        console.log(categoryList[i]);
    }
    return listText + "</ul>";
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomItems() {
    var totalItems = itemsList.length;
    var usedItems = [];
    var numWorkingItems = randomIntFromInterval(15, 50);
    for (var i = 0; i < numWorkingItems; i++) {
        var currentItem = itemsList[randomIntFromInterval(0, numWorkingItems)];
        while (usedItems.indexOf(currentItem) !== -1) {
            currentItem = itemsList[randomIntFromInterval(0, numWorkingItems)];
        }
        usedItems.push(currentItem);
    }
    return usedItems;
}

function createItemGrid(items) {
    // console.log(items);
    var containerWidth = document.getElementById("items").getBoundingClientRect().width;
    console.log(containerWidth);
    var ROW_W = Math.floor(containerWidth / itemWidth);
    console.log(ROW_W);
    var container = document.createElement("div");
    container.style.width = containerWidth;
    container.id = "items-container";
    container.className = "container";
    var numRows = Math.floor(items.length / ROW_W);

    if (items.length % ROW_W !== 0) {
        numRows++;
    }
    var processed = 0;
    var finished = false;
    for (i = 0; i < numRows; i++) {
        var row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;
        // row.style.width = "100%";

        for (k = 0; k < ROW_W; k++) {
            if (processed >= items.length) break;
            var item = document.createElement("div");
            item.className = "item-display";
            var itemText = items[i * ROW_W + k];
            item.innerText = itemText;
            item.onclick = onItemClick;
            row.appendChild(item);
            processed++;
        }

        container.appendChild(row);
    }

    return container;
}

function onCategoryClick() {
    var text = $(event.target).text();
    document.getElementById("category-title").innerText = text;
    var box = document.getElementById("items");
    var itemsToDisplay = getRandomItems();
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }
    box.appendChild(createItemGrid(itemsToDisplay));
}

function onItemClick() {
    var detailView = document.getElementById("item-detail");

    detailView.style.display = "inline-block";
}

$(document).ready(function () {
    document.getElementById("category-list").innerHTML = createCategoryList();
    document.getElementById("btn_0").click();
});
