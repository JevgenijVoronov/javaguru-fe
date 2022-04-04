// Выполнить преобразование типов


// К строке:
String(123)            //"123"
String(-12.3)        //"-12.3"
String(null)         //"null"
String(undefined)       //"undefiened"
String(true)          //"true"
String(false)        //"false"
String(function () {})  //function () {}
String({})             //[Object object]
String({ key: 42 })     //[Object object]
String([])              //""
String([1, 2])          //"1,2"

// К числу:
Number("123")           //123
Number("123.4")         //123.4
Number("123,4")         //Nan
Number("")              //0
Number(null)            //0
Number(undefined)       //Nan
Number(true)            //1
Number(false)           //0
Number(function () {})  //Nan
Number({})              //Nan
Number([])              //0
Number([1])             //1
Number([1, 2])          //1,2

// К логическому
Boolean("")             //false
Boolean("string")       //true
Boolean("false")        //true
Boolean(0)              //false
Boolean(42)             //true
Boolean(-42)            //true
Boolean(NaN)            //false
Boolean(null)           //false
Boolean(undefined)      //false
Boolean(function () {}) //false
Boolean({})             //true
Boolean({ key: 42 })    //true
Boolean([])             //true
Boolean([1, 2])     //true