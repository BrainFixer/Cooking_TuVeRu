const parent = document.querySelector(".parent");

const child = parent.querySelectorAll(".class2");
if (child.length != 0) {
  console.log("Элемент(ы) с классом .class2 есть на странице");
}
else {
  console.log("Элемента(ов) с классом .class2 нет на странице");
}