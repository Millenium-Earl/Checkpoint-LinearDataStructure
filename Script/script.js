var Set1 = [3,1,7,9];
var Set2 = [2,4,1,9,3];

var Set3 = [12, 13, 6, 10];
var Set4 = [13, 10, 16, 15];

var SetObj = {
    3:2,
    1:2,
    7:1,
    9:2,
    2:1,
    4:1,

}

var SetObj2 = {
  12 : 1,
  13 : 2,
  6 : 1,
  10 : 2,
  16 : 1,
  15 : 1,

}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function SumDistinct() {
   

    var lister=[...Set1,...Set2]
    var liste = lister.filter(function(v,_,a) {
        return a.indexOf(v) === a.lastIndexOf(v);
    })
    

    
  var result = liste.reduce(reducer);
    console.log(result)
    document.getElementById("affiche").innerHTML = result;
  return result
}

function SumObj() {
    var somme = 0;
    for (var [key, value] of Object.entries(SetObj)) {
        var P = parseInt(key);
        if (value==1)
        somme = somme+P
        
      }
      document.getElementById("affiche2").innerHTML = somme;
      return somme
      
}


function SumOverlapping() {
    
       var mapp = Set3.filter(function(n) { return Set4.indexOf(n) !== -1;});
        var result = mapp.reduce(reducer);
        result = result*2;
        document.getElementById("affiche3").innerHTML = result;
        return result
    }


    function SumOverlapObj() {

      
        var somme = 0;
        for (var [key, value] of Object.entries(SetObj2)) {
            var P = parseInt(key);
            if (value==2)
            somme = somme+P
            
          }
          somme = somme *2;
          document.getElementById("affiche4").innerHTML = somme;
          return somme
          
    }
      
