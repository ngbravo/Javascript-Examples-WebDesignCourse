import React from "react"
import ReactDOM from "react-dom";
import Deck from "./components/Deck";

var CARD_REVERSE1 = [{contentText:"hola2"},{contentText:"chao2"},{contentText:"data666"}];
var CARD_FRONT1 = [{contentText:"hola"},{contentText:"chao"},{contentText:"data"}];

var CARD_REVERSE2 = [{contentText:"hola2-2"},{contentText:"chao2-2"},{contentText:"data666-2"}];
var CARD_FRONT2 = [{contentText:"hola-2"},{contentText:"chao-2"},{contentText:"data-2"}];

var CARDS = [
  {front:CARD_FRONT1, reverse:CARD_REVERSE1},
  {front:CARD_FRONT2, reverse:CARD_REVERSE2}];

ReactDOM.render(
  <Deck cards={CARDS}/>,
  document.getElementById("deck")
);
