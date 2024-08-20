var text1 = "Mi primer programa con ella fue el 2020 y por una fractura tuvimos que detenernos 😢, pero tiempo que estuve participando en los programas logre resultados muy significativos y gratos para el autoestima.";
var text2 = "Me encanto entrenar con la Vale, siempre preocupada de todo. Corrigiéndome los ejercicios, explica todo muy bien. Además siempre tiene tiene tiempo de responder las dudas! Yo no sabía nada de cómo entrenar y ella me enseñó. La recomiendo mucho ❤️🙌!";
var text3 = "Excelente entrenadora, la recomiendo al 100٪, te anima constantemente en los entrenamientos, se nota su compromiso con los alumnos.";

var sliderV = new Vue({
  el: '#testimony',
  data: {
    items: [
      { name: 'Persona 1', photo: "https://picsum.photos/150/150", message: text1 },
      { name: 'Persona 2', photo: "https://picsum.photos/150/150", message: text2 },
      { name: 'Persona 3', photo: "https://picsum.photos/150/150", message: text3 },
      { name: 'Persona 4', photo: "https://picsum.photos/150/150", message: text1 },
      { name: 'Persona 5', photo: "https://picsum.photos/150/150", message: text3 },
      { name: 'Persona 6', photo: "https://picsum.photos/150/150", message: text1 },
      { name: 'Persona 7', photo: "https://picsum.photos/150/150", message: text3 },
      { name: 'Persona 8', photo: "https://picsum.photos/150/150", message: text1 },
      { name: 'Persona 9', photo: "https://picsum.photos/150/150", message: text3 },
      { name: 'Persona 10', photo: "https://picsum.photos/150/150", message: text1 }
    ]
  }
})