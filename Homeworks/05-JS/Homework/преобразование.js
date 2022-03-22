// Выполнить преобразование типов


// К строке:
String(123)             "123"
String(-12.3)           "12.3"
String(null)            'null'          
String(undefined)       'undefined'   
String(true)            'true'  
String(false)           'false'
String(function () {})  'function () {}'
String({})              ''
String({ key: 42 })     '{key:42}'
String([])              ''
String([1, 2])          '1,2'

// К числу:
Number("123")           123  
Number("123.4")         123.4
Number("123,4")         123.4
Number("")              
Number(null)            
Number(undefined)       
Number(true)            
Number(false)           
Number(function () {})  
Number({})              
Number([])              
Number([1])             
Number([1, 2])          

// К логическому
Boolean("")             
Boolean("string")       
Boolean("false")        
Boolean(0)              
Boolean(42)             
Boolean(-42)            
Boolean(NaN)            
Boolean(null)           
Boolean(undefined)      
Boolean(function () {}) 
Boolean({})             
Boolean({ key: 42 })    
Boolean([])             
Boolean([1, 2])         
