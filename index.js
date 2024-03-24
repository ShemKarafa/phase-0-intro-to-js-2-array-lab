const cats = ["Milo", "Otis","Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyAppendCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}
function appendCat(name) {
  return [...cats, name];
}
function prependCat(name) {
  return [name, ...cats];
}
function removeLastCat(name) {
  return cats.slice(0, -1);
}
function removeFirstcat(name) {
  return cats.slice(1);
}