const items1 = document.getElementById('items1')
const items2 = document.getElementById('items2')
const items3 = document.getElementById('items3')
const select = document.getElementById('select')



items1.addEventListener('click', function () {
    items1.classList.add("itemstyle")
    items2.classList.remove("itemstyle")
    items3.classList.remove("itemstyle")
    itemsselect1()
    function itemsselect1() {
        document.getElementById("select").selectedIndex = "0";
    }

})
items2.addEventListener('click', function () {
    items2.classList.add("itemstyle")
    items1.classList.remove("itemstyle")
    items3.classList.remove("itemstyle")
    itemsselect2()
    function itemsselect2() {
        document.getElementById("select").selectedIndex = "1";
    }
})

items3.addEventListener('click', function () {
    items2.classList.remove("itemstyle")
    items1.classList.remove("itemstyle")
    items3.classList.add("itemstyle")
    itemsselect3()
    function itemsselect3() {
        document.getElementById("select").selectedIndex = "2";
    }
})
