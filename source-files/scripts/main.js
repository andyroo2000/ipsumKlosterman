var textArray = ["laughably","stereotypical","and—just","in","case","you","somehow","missed","what","they","were—Anthony","Michael","Hall","pedantically","explains","it","all","in","the","closing","scene","St","Elmo’s","Fire","used","many","of","the","same","actors","but","it","evolved","their","personalities","by","five","years","and","made","them","more","ahem","philosophically","complex","Here","is","where","we","see","the","true","genesis","of","future","Real","World","ians","With","Judd","Nelson","we","have","the","respected","social","climber","doomed","to","fail","ethically;","with","Andrew","McCarthy","the","sensitive","self-absorbed","guy","who","works","hard","at","being","bitter","Rob","Lowe","is","the","self-destructive","guy","we’re","somehow","supposed","to","envy;","Emilio","Estevez","is","the","romantic","that","all","chumps","are","supposed","to","identify","with","mostly","because","he’s","obsessed","people","and","situations","from","Linklater’s","debut","film","Slacker","There","are","on-screen","conversations","in","Waking","Life","that","would","be","difficult","to","watch","in","a","live-action","picture","But","Waking","Life","doesn’t","feel","self-indulgent","or","affected","and","that’s","because","it’s","a","cartoon","willing","to","act","In","that","first","NYC","season","Norman","is","immediately","identified","as","bisexual","but","he’s","not","bisexual","enough;","he","only","gets","major","face","time","when","he’s","dating","future","TV","talk-show","host","Charles","Perez","Future","queer","cast","members","would","not","make","this","mistake;","for","people","like","AIDS","victim","Pedro","Zamora","and","Dan","from","RW","Miami","being","gay","was","pretty","much","their","only","personality","trait","Perhaps","more","than","anything","else","this","is","the","ultimate","accomplishment","of","The","Real","World","It","has","validated","the","merits","of","having","a","one-dimensional","personality","In","fact","it","has","made","that","kind","of","persona","desirable","thankful","that","I","was","born","Catholic","At","the","time","my","Catholicism","seemed","like","an","outrageous","bit","of","good","fortune","since","I","considered","every","other","religion","to","be","fake","I","considered","Lutherans","and","Methodists","akin","to","USFL","franchises","Over","time","my","opinions","on","such","things","have","evolved","But","quite","suddenly","I","once","again","find","myself","thankful","for","Catholicism","or","at","least","thankful","for","its","more","dogmatic","principles","I’m","hoping","all","those","nuns","were","right","I’m","angling","for","purgatory","and","I’m","angling","hard","unwilling","to","tell","harmless","lies","If","she","had","been","playing","with","her","Barbie","Dream","House","and","I","asked","her","why","Barbie","had","four","pairs","of","shoes","but","only","two","decent","outfits","Katie","would","have","undoubtedly","spent","the","next","half",
    "explaining","that","Barbie","purchased","the","extra","shoes","while","shopping","in","Hong","Kong","with","Britney","Spears","and","planned","to","wear","them","to","a","cocktail","party","in","Grandma’s","basement","When","playing","with","real-world","toys","there’s","no","limit","to","the","back","story","Katie","will","create","for","anything","animate","or","inanimate","That’s","how","little","kids","are","But","somehow","it’s","different","when","life","is","constructed","on","a","sixteen-inch","screen;","in","the","world","of","The","Sims","Katie","won’t","color","outside","the","lines","of","perception","the","rules","become","fixed","Zep","songs","are","Whole","Lotta","Love","Immigrant","Song","and","Stairway","to","Heaven","These","are","the","tracks","that","define","what","Zeppelin","was","about","beyond","their","tangible","iconography","as","a","loud","four-piece","rock","band","Houses","of","the","Holy","is","a","great","small","g","album","but","those","aforementioned","three","songs","are","why","Led","Zeppelin","is","Great","big","G","This","is","true","for","most","artists","So","that","being","the","case","it","seems","strange","to","advocate","Billy","Joel’s","Greatness","big","G","by","pointing","to","unheralded","songs","off","The","Nylon","Curtain","an","album","that","only","sold","one","million","copies","and","was","widely","seen","as","a","commercial","disappointment","Logically","I","should","be","talking","about","Zack","Morris","considered","a","higher","poetic","achievement","than","Meat","Loaf’s","Paradise","by","the","Dashboard","Light","or","Van","Halen’s","Runnin’","with","the","Devil","two","equally","popular","songs","from","the","same","period","that","expressed","roughly","similar","themes","while","earning","no","cred","whatsoever","So","the","real","question","becomes","Why","did","this","happen","Part","of","it","is","probably","based","in","fact;","I","suppose","Springsteen","I","did","like","Vanilla","Sky","And","what","I","liked","was","the","way","it","presented","the","idea","of","objectivity","vs","perception","which","is","ultimately","what","the","What","is","reality","quandary","comes","down","to","In","Vanilla","Sky","Cruise","plays","a","dashing","magazine","publisher","He","likes","to","casually","bang","Cameron","Diaz"];

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



