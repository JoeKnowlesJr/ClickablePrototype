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
    "Lam-Ron",
    "Zimplus",
    "TransLex",
    "Quofix",
    "DoubleCof",
    "Tempfind",
    "GrooveTone",
    "TanEco",
    "ToughSontough",
    "New-Sing",
    "Biotrax",
    "Tres-Lam",
    "Lotsing"
];



function createCategoryList() {
    var listText = "<ul>";
    for (var i = 0; i < categoryList.length; i++) {
        listText += "<li><span class='product'> " + categoryList[i] + "</span></li>";
        console.log(categoryList[i]);
    }
    return listText + "</ul>";
}


$(document).ready(function () {
    document.getElementById("category-list").innerHTML = createCategoryList();
});



