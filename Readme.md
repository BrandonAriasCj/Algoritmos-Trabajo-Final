# Sistema de almacenamiento para productos alimenticios

## Integrantes:

- Carlos Asparrin Martin
- Arias Cjuno Brandon
- Sanchez Lazarte Wilton

## Funcionalidades:
- Agregar productos.
- Quitar productos.
- Buscar productos con sus ID.
- Editar productos.

## Estructuras de Datos:

### Listas enlazadas (Un nodo se enlaza a otro a través de un puntero)
- **Insertar y eliminar productos**.

### Pilas (El último en entrar es el primero en salir)
- Para manejar productos que se almacenan y retiran bajo la política **LIFO** (último en entrar, primero en salir).

### Colas (El primero en llegar es el primero en irse)
- Para productos que deben salir en orden **FIFO** (primero en entrar, primero en salir), ideal para productos frescos.

### Árboles (Niveles - Izquierda - Derecha)
- **Sistema de búsqueda de los productos usando IDs**.
- **Sistema de almacenamiento** para organizar productos por categorías o fecha de caducidad.

## Clasificación de productos alimenticios basado en árboles:

### Perecibles:
- **Frutos frescos**.
- **Verduras**.
    - **Colas**: Conviene que se saque lo que llegó más antes (FIFO).

### No perecibles:
- **Enlatados**.
- **Frutos secos**.
    - **Pilas**: Conviene más que se saque lo más accesible (LIFO).

## Recursividad (La función se llama a sí misma)
- La recursividad se aplica en:
  - La búsqueda en el árbol.
  - Eliminar una categoría de un árbol.
  - Recorrer un árbol en distintos órdenes (**preorden**, **inorden**, **postorden**).
  - La accesibilidad a las ramificaciones del árbol.


--> requerimientos objetivo de la semana :


 ARBOLES 
        -el arbol toma datos directamente de un archivo de texto  (EN CONTEXTO COMPLETADO)
        -los arboles deben captar los datos  de un archivo de texto  ordenarlo en perecibles y no perecibles .
        -los arboles ordenan de fecha de antiguo a nuevo.



        calculo de dias => fecha actual - fecha de vencimiento.

ejemplo   PERECEDERO (de antiguo a nuevo. ) :                       
      perecederos : manzanas cantidad(8 ) dias(7)  =>  planatnos (8 ) dias (9)  =>   sandias ...

                       1                        ,         2                        , 3


ejemplo   NO PERECEDERO (de antiguo a nuevo. ):
      celular :  nokia cantidad(3) dias(2010) = > samsung s2 cantidad(5)  año(2017) =>  huawei y500 cantidad(8)  año(2024)
                        1                       ,                2                 ,    3          



Pilas:
        -trabajar con no perecederos
        - murio la idea .

          HUAWEI        , SAMSUNG           ,NOKIA
          3               ,2                   , 1 

Posible uso:
Usar para filtrar los productos del tiempo de caducidad mayor al menor.


Colas:
        -Trabajar con no perecederos
        -Almacena los datos filtrados que deben venderse con prioridad de vencimiento, por que capta los que se van a vencer.
1
2
3


HTML Y NODE:
        - investigarr como interactuar con phyton , traslado de datos, inserción de datos y estrutura.





<<<<<<< HEAD:Guia de desarrollo.md
 ***********
=======

 
>>>>>>> e3746f2abada29f3638e3b83154236fe584b2d34:Readme.md
[Enlace del word](https://docs.google.com/document/d/1v8pFHU8PxnK6YCGrGhDgy2ZXCB6W798Fu4QG94msucs/edit?usp=sharing)

