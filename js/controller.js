//every file must contain this below. (getter syntax)
var app = angular.module('myModule');

app.controller('routeCtrl', function($scope){

var disArr = [];
var ary = [];
var cssAdd = ['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10'];

var pass1 = "The night wore his wolf suit and made mischief of one kind and another his mother called him ‘WILD THING!’ and Max said ‘I’LL EAT YOU UP!’ so he was sent to bed without eating anything. " +
"That very night in Max’s room a forest grew and grewand grew until his ceiling hung with vines and the walls became the world all around and an ocean tumbled by with a private boat for Max and he sailed " +
"off through night and day and in and out of weeks and almost over a year to where the wild things are. And when he came to the place where the wild things are they roared their terrible roars and gnashed their " +
"terrible teeth and rolled their terrible eyes and showed their terrible claws till Max said ‘BE STILL!’ and tamed with the magic trick of staring into all their yellow eyes without blinking once and they were " +
"frightened and called him the most wild thing of all and made him king of all wild things. ‘And now,’ cried Max, ‘let the wild rumpus start!’ ‘Now stop!’ Max said and sent the wild things off to bed without their supper. " +
"And Max the king of all wild things was lonely and wanted to be where someone loved him best of all. Then all around from far away across the world he smelled good things to eat so he gave up being king of where the wild things are. " +
"But the wild things cried, ‘Oh please don’t gowe’ll eat you up-we love you so!’ And Max said, ‘No!’ The wild things roared their terrible roars and gnashed their terrible teeth and rolled their terrible eyes " +
"and showed their terrible claws but Max stepped into his private boat and waved good-bye and sailed back over a year and in and out of weeks and through a day and into the night of his very own room where he found his supper waiting for him and it was still hot.";
var book1 = pass1.split(" ")

var pass2 = "An elephant makes a big poop. A mouse makes a tiny poop. A one-hump camel makes a one-hump poop. A two-hump camel makes a two-hump poop. Only kidding! Fish poop." +
"And so do birds. And bugs too. Different animals make different kinds of poop. Different shapes, different colors, even different smells. Which end is the snake's behind? What does whale poop look like?" +
"Some stop to poop. Others do it on the move. Some poop here and there. Others do it in a special place. Grown-ups poop. Children poop too. While some children poop on the potty, others poop in their diapers. Some animals poop and pay no attention. Others clean up after themselves." +
"These poop by the water. This one does it in the water. He wipes himself with paper, then flushes it down. All living things eat, so Everyone poops."
var book2 = pass2.split(" ");

var wildW = [book1, book2];

var xVal;


$scope.addSingle = function(e) {
  xVal = Number($scope.change.value);
  var x = (parseInt(Math.random() * (wildW[xVal].length - 3) + 0));
  disArr.push({word: wildW[xVal][x]});
  $scope.words = disArr;
};

$scope.addMulti = function(e) {
  xVal = Number($scope.change.value);
  ary = [];
  var x = (parseInt(Math.random() * (wildW[xVal].length - 3) + 0));
  var y = (parseInt(Math.random() * (11 - 3) + 3));
  for (var i = x; i < x + y; i++ ){
    ary.push(wildW[xVal][i]);
  };
  disArr.push({word: ary.join(' ')});
  $scope.words = disArr;
  console.log(disArr);

// console.log(1);

};

$scope.addDec = function(e) {
  xVal = Number($scope.change.value);
  var z = (parseInt(Math.random() * 10 - 1));
  var x = (parseInt(Math.random() * (wildW[xVal].length - 3) + 0));
  if ((wildW[xVal][x].toLowerCase()).substring(0,4) === 'poop'){
    console.log('poop');
    disArr.push({word: wildW[xVal][x], class: cssAdd[z] + ' poop'});
  } else {

    disArr.push({word: wildW[xVal][x], class: cssAdd[z]});
    console.log((wildW[xVal][x].toLowerCase()).substring(0,4));
  };
  $scope.words = disArr;
  // console.log(disArr);

};

$scope.decMulti = function(e) {
  xVal = Number($scope.change.value);
  ary = [];
  var x = (parseInt(Math.random() * (wildW[xVal].length - 3) + 0));
  var y = (parseInt(Math.random() * (11 - 3) + 3));
  var z = (parseInt(Math.random() * 10 - 1));
  for (var i = x; i < x + y; i++ ){
    ary.push(wildW[xVal][i]);
  };
  disArr.push({word: ary.join(' '), class: cssAdd[z]});
  $scope.words = disArr;
  console.log(disArr);

};

});
