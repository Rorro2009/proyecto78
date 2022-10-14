var actualizar_imagen = ["master chief.jpg", "frederic.jpg", "kelly.jpg", "linda.jpg", "equipo azul.jpg", "halo the flood.jpg"];
var actualizar_texto = ["Jefe Maestro", "Frederic", "Kelly", "Linda", "Equipo Azul", "Halo The Flood"];
var image=0
var text=0
function Next() {
    document.getElementById("img").src = actualizar_imagen[image];
    image++;
      if(image == 6)
        {
          image=0;
        }
        document.getElementById("texto").innerHTML = actualizar_texto[text];
        text++;
        if(text == 6)
          {
            text=0;
          }
    }

