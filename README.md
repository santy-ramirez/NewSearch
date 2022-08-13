# New-app

## Screenshop 

![image](imgreadme/Untitled.webm)



## Link Demo 
[hacer click aqui para verlo](https://new-search-three.vercel.app/)

## Requisitos del Prroyecto:

Un cliente nos ha solicitado la construcción de un buscador de noticias. Para el cual se ![](Aspose.Words.2eebda38-333a-4c33-bc9a-520cc8de8ca1.002.jpeg)provee el siguiente mockup inicial:

![](c/Aspose.Words.2eebda38-333a-4c33-bc9a-520cc8de8ca1.003.jpeg)

Cuando el usuario realiza una búsqueda, se deben aplicar las siguientes validaciones sobre el input:

- No se debe realizar la búsqueda a menos que elusuario haya escrito almenos 3 caracteres
- El botón buscar se debe habilitar cuando el input cumpla con la condición anterior.
- [OPCIONAL], la búsqueda puede realizarse apretando la tecla enter del teclado.
- Se deberá presentar un spinner/loading para que el usuario sepa de que se está realizando un procesamiento.
- En caso de que ocurra algún fallo, se deberá presentar un mensaje adecuado, explicando el error al usuario.
- En caso de que no haya resultados, se deberá presentar un mensaje adecuado, que indique que no hay resultados para la búsqueda.
- La búsqueda sólo debe realizarse en noticias en español.

Una vez obtenida la respuesta del servicio, se deberá presentar una interfaz con los resultados obtenidos.

Por cada noticia obtenida, se debe presentar :

- El nombre de la plataforma de origen de la noticia
- El título de la noticia
- La imagen de portada de la noticia
- La fecha de publicación de la noticia en formato:dd-mm-aaaa - hh:mm hs. Ejemplo:***Publicado el: 28-06-2022 a las 03:00 hs***.(Para esto valerse de la librería Luxon Date: https://moment.github.io/luxon/#/?id=luxon).
- Cuando el usuario haga click sobre una noticia, la misma deberá de abrirse en una nueva pestaña.












