# Sistema de almacenamiento para productos alimenticios

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
 ***********
[Enlace del word](https://docs.google.com/document/d/1v8pFHU8PxnK6YCGrGhDgy2ZXCB6W798Fu4QG94msucs/edit?usp=sharing)

