
 // OPERADORES PRINCIPALES
 let suma = 5 + 5
 suma

 let resta = 3 - 2
 resta

 let division = 3 / 0
 division

 let multiplicacion = 5 * 10
 multiplicacion

 let potencia = 3 ** 3
 potencia
 
 
 // OPERADORES POST Y PRE
 let x = 1
 x

 let y = ++x
 y
 x

 let z = x++
 z
 x

 let a = x--
 a
 x

 let b = --x
 b
 x
 
 
 //  OPERADORES VULEANOS
 !true
 !false

 !!true

 true === true
 true === false
 true !== false
 false !== false

 3 == '3'
 3 === 3

 5 > 3
 5 < 3
 3 >= 1
 2 <= 1
 'e' < 'd'


 // OPERADOR AND &&
 true && false && true && true
 0 && true
 1 && 'hello'


 // OPERADOR OR ||

 false || false || true || false
 const port = process.env.port || 3000
 port


 // SENTENCIA IF
 let operacion = 0 + 1;
 if (operacion > 7) {
  console.log('Es mayor a 7')
 } else if (operacion > 7 && operacion > 2) {
  console.log('Esta entre 7 y 2')
 } else {
   console.log('es menor de 2')
   }
   
   
  // SENTENCIA SWITCH
  let operacion = 0  
  
  switch(operacion) {
   case 0:
    console.log("El resultado es 7");
     break;
     default;
      console.log("El resultado no es ni 0 ni es 7")
      
      
    funtion saludar(nombre = "Carlos") {
    return `¡Hola ${nombre}!`
   }
   
   saludar()
   saludar("Paola")
   
   
   class Inventario {
    constructor(nombre) {
     this.nombre =nombre;
     this.articulos = [];
    }
    
    getBimbre() {
     return this.nmbre;
     }
     
     add(articulo, cantidad) {
        this.articulos[articulo] = cantidad;
        }
        cantidad(articulo) {
           return this.articulos[articulo]
       }
     }
     
     let libros = new Inventario('libros');
     libros.getNombre()
     libros.add("Aprendiendo JavaScript", 5);
     libros.cantidad('Aprendiendo JavaScript');

