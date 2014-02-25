var textArray = ["There","are","two","ways","to","look","at","life","Actually","that&rsquo;s","not","accurate;","I","suppose","there","are","thousands","of","ways","to","look","at","life"];

var random = {
  number: function (range) {
    return Math.floor(Math.random() * range);
  },
  numberInRange: function(min, max) {
    return Math.random() * (max - min) + min;
  }
};

var helpers = {
  capitalize: function(word) {
    var result = word.split('');
    result[0] = result[0].toUpperCase();
    return result.join('');
  }
};

var lorem = {
  word: function() {
    var randomNumber = random.number(textArray.length);
    var result = '';
    result = textArray[randomNumber];
    return result;
  },
  words: function(num) {
    var result = [];
    for (var i = 0; i < num; i++) {
      result.push(lorem.word());
    }
    return result.join(' ');
  },
  sentence: function() {
    var randomNumber = random.numberInRange(7, 12);
    var result = [];
    var firstWord = helpers.capitalize(this.word());
    var middleWords = this.words(randomNumber);
    result.push(firstWord + ' ');
    result.push(middleWords);
    result.join(' ');
    result.push('.');
    return result.join('');
  },
  paragraph: function() {
    var randomNumber = random.numberInRange(3, 8);
    var result = [];
    for (var i = 0; i < randomNumber; i++) {
      result.push(this.sentence());
    }
    return result.join(' ');
  },
  paragraphs: function(num) {
    var result = [];
    for (var i = 0; i < num; i++) {
      result.push(this.paragraph());
    }
    return result.join('\n\n');
  }
};

// console.log(lorem.paragraphs(7));

var myApp = angular.module('loremKlosterman', []);

myApp.controller('Paragraphs', ['$scope', function ($scope) {
  $scope.$watch('number', function () {
    $scope.text = lorem.paragraphs($scope.number);
    console.log($scope.number);
    console.log(lorem.paragraphs(3));
  });
}]);

myApp.controller('test', function () {
  $scope.testText = "hello!";
});

myApp.filter('newLineToArray', function() {
  return function(text) {
    result = text.split('\n');
    return result;
  };
});



