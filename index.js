class MazoDeCartas {
    constructor(preguntas) {
        this.preguntasOriginales = preguntas;
        this.total = preguntas.length;

        // Busca si hay una partida guardada en la memoria del navegador
        const guardado = localStorage.getItem('cartasRestantesPareja');

        if (guardado) {
            this.preguntasDisponibles = JSON.parse(guardado);
        } else {
            this.inicializarMazo();
        }
    }

    inicializarMazo() {
        this.preguntasDisponibles = this.preguntasOriginales.map((texto, index) => {
            return { texto: texto, numero: index + 1 };
        });
        this.guardarProgreso();
    }

    guardarProgreso() {
        // Guarda las cartas que quedan en la memoria local
        localStorage.setItem('cartasRestantesPareja', JSON.stringify(this.preguntasDisponibles));
    }

    sacarUna() {
        // Si se acabaron las cartas, avisa pero no reinicia automáticamente
        if (this.preguntasDisponibles.length === 0) {
            return { texto: "¡Ya no quedan más cartas! Si quieren volver a jugar, toquen el botón 'Reiniciar'.", numero: "-" };
        }

        const indiceAleatorio = Math.floor(Math.random() * this.preguntasDisponibles.length);
        const cartaSacada = this.preguntasDisponibles.splice(indiceAleatorio, 1)[0];

        // Actualizamos la memoria para que esta carta desaparezca "para siempre"
        this.guardarProgreso();

        return cartaSacada;
    }

    reiniciar() {
        this.inicializarMazo();
    }
}

// Array con preguntas extraídas e inspiradas en juegos de conexión íntima
const listaDePreguntas = [
    "¿Cuál es tu lugar preferido de tu casa? ¿por qué?",
    "¿Qué fantasía te gustaría bajar a la realidad?",
    "¿Qué actividad extrema te gustaría hacer?",
    "¿Cuáles son tus tres placeres culposos?",
    "¿Cuál era tu juego o juguete favorito de la infancia?",
    "¿Qué título le pondrías a una película sobre tu vida?",
    "¿Volver al pasado o ir al futuro? ¿por qué? Si pudieses crear un feriado, ¿por qué motivo seria?",
    "¿Con quién fue tu primer beso? ¿qué sentiste?",
    "Tres cosas que te gusta hacer y sentís que te salen mal.",
    "¿El último regalo que hiciste? ¿Y el último regalo que recibiste?",
    "Si fueses embajador, ¿qué lugar elegirías para irte a vivir? ¿a dónde no irías?",
    "¿En qué momento del día tenes tus mejores ideas?",
    "Si escribieras un libro, ¿de qué seria? ¿Cómo lo titularías?",
    "¿Qué es lo que más te gusta del barrio donde vivís?",
    "¿Qué tres deseos pedías cuando eras niño? ¿y ahora?",
    "Si fueses de otro género, ¿qué sería lo primero que harías?",
    "¿Un sueño recurrente?",
    "¿Una canción que te alegre?",
    "¿Que recuerdo tenés de tu primera cita?",
    "Compartí un miedo absurdo que tengas",
    "¿Quién de las personas presentes sería mejor comediantes?",
    "¿Un pensamiento recurrente?",
    "¿Tu libro preferido?",
    "¿Qué es lo primero que miras en una persona?",
    "¿Qué personaje de película o serie te gustaría ser?",
    "¿Un viaje pendiente?",
    "Si algo te gusta, ¿asumirías cualquier riesgo?",
    "Si fueses un objeto, ¿cuál te gustaría ser?",
    "Tres cosas que te hacen sentir feliz",
    "¿Te animarías a vivir una experiencia en el extranjero? ¿cual?",
    "¿Tuviste alguna experiencia paranormal? ¿cómo fue y con quién/es estabas?",
    "Si fueses un animal, ¿cuál serías? ¿por qué?",
    "¿Tu película preferida?",
    "Un talento inútil que te de orgullo es",
    "¿Crees en el amor a primera vista?",
    "¿Sobre qué tema considerás que tienes mucho conocimiento?",
    "Si fueses una persona famosa, ¿quién serias? ¿por qué?",
    "¿Qué cuento te relataban en la infancia?",
    "¿Cuál es el mejor lugar que conociste?",
    "¿Qué canción elegirías para cantar en un karaoke?",
    "Tres cosas que te den vergüenza ajena",
    "Si pudieras crear tu lugar en el mundo, ¿cómo sería?",
    "¿Una situación vergonzosa que recuerdes?",
    "¿Elegirías otra época para vivir? ¿cuál ¿por qué?",
    "¿En qué te gustaría haber sido bueno?",
    "¿Qué comida te recuerda a tu hogar?",

    "¿Algo ridículo por lo que te gustaría que te paguen?",
    "¿Te sentís libre de tomar tus propias decisiones?",
    "¿Te define la opinión de los demás?",
    "Nombra tres características que te definan",
    "¿De qué halago estás más orgulloso?",
    "¿Qué primera impresión crees que das?",
    "¿Qué actividades te divertían antes y ahora no?",
    "Si tuvieses que elegir una profesión, trabajo o carrera distinta, ¿cuál sería?",
    "Cuando eras chico, ¿cómo te imaginabas siendo adulto?",
    "¿Sos idealista o realista? ¿Cómo impacta en tu vida y en tus relaciones?",
    "¿Una situación que te incomode?",
    "¿Un momento simple que disfrutes?",
    "¿Reconoces tus defectos? ¿y tus virtudes? ¿cuáles son?",
    "¿Te enamoraste alguna vez? ¿ Quién fue la primera persona y qué te gusto de ella?",
    "¿Te gusta reflexionar solo o con otras personas? ¿Qué temas despiertan tu curiosidad últimamente?",
    "Quiero o tengo. ¿Cuál de las dos está más presente en tu cotidianidad?",
    "Si tuvieras que elegir una persona para que te acompañe en una experiencia espiritual, ¿quién sería? ¿por qué?",
    "¿Cuándo fue la última vez que hiciste algo por primera vez? ¿Qué fue?",
    "¿Qué actitudes no te gustan pero las toleras en una persona? ¿Cuál valoras?",
    "¿Que disfrutas de tu cotidianidad? ¿y qué no?",
    "¿Hay alguna actividad que te guste tanto que te haga perder la noción del tiempo?",
    "La razón o la emoción. ¿Cuál de las dos tiene más peso en vos? ¿te gusta que sea así o preferirías que fuera al revés?",
    "¿Qué actividades tendés a dejar para después?",
    "¿Qué amas y la mayoría de la gente no?",
    "Perdonar o pedir perdón. ¿Cuál te cuesta más?",
    "¿Qué destacas de las personas que te criaron?",
    "¿Con qué tipo de personalidad solés conectar?",
    "Esta semana me puse contento por ...",
    "¿Te asusta el futuro? ¿por qué?",
    "¿Cual fue tu primera impresión de la persona que tenes a tu izquierda?",
    "¿Tomás decisiones porque te sentís preparado o porque son las esperadas para tu edad?",
    "¿Qué aventura tenes pendiente por realizar?",
    "¿Qué buscas en una pareja?",
    "¿Tenes alguna fuente de motivación hoy en día? ¿Cual es o podría ser?",
    "¿Pensás más en el por qué o en el para qué de las cosas?",
    "¿Te permitís mostrarte vulnerable? ¿con quién?",
    "¿Una buena decisión?",
    "Si pudieses ser exitoso en lo que quieras, ¿en qué elegirías serlo?",
    "¿Qué destacas de tus amistades?",
    "¿Te dedicas tiempo a vos mismo? ¿qué haces en esos momentos?",
    "¿Solés culpar a otras personas por lo que te pasa? ¿en qué situaciones?",
    "¿Te considerás una persona prejuiciosa? ¿por qué?",

    "¿Una persona que te alivie en momentos tristes?",
    "¿Qué sensaciones tuviste en tu primer día de universidad/trabajo? Si no tuviste esas experiencias, ¿qué esperas de ellas?",
    "Cuando te sentis bien con vos mismo, ¿con quién te gustaría estar?",
    "Los domingos son... ¿deprimentes o disfrutables? ¿te gusta arrancar la semana?",
    "Nombra a alguien que te inspire",
    "¿Cómo reaccionas ante una actitud que te molesta?",
    "¿Qué momentos del día elegís para reflexionar?",
    "Crees que existe la amistad entre el hombre y la mujer?",
    "Cuando ayudas a alguien, ¿lo haces por vos o por la otra persona? ¿Crees que existen las acciones desinteresadas?",
    "Elegimos lo que somos o nos lo impone nuestro entorno?",
    "'Es mejor pedir perdón que permiso'. ¿Qué opinas sobre esta expresión?",
    "¿Qué mandatos o presiones crees que se imponen entre varones?",
    "Lo que una persona piensa ¿crees que la define? ¿en qué medida y por qué?",
    "¿La educación escolar nos prepara para afrontar la adultez?",
    "¿Crees que todos tenemos un propósito en esta vida? ¿Cuál sentís que es el tuyo?",
    "'Dime con quién andas y te diré quién eres' ¿Qué pensas?",
    "¿Consideras importante la educación sexual? ¿Quiénes deberían abordar este tema?",
    "La educación que recibí me enseñó a ...",
    "¿Crees que hay alguna razón por la que naciste en tu familia?",
    "¿Crees que las personas pueden cambiar?",
    "¿Qué es el amor propio?",
    "¿Qué creencias se les imponen a los niños y no estás de acuerdo?",
    "¿Qué es el éxito para vos? ¿Evaluas diferentes formas de sentirte exitoso?",
    "Si tuvieras que volver a elegir tu género ¿Cuál elegirías? ¿por qué?",
    "¿Cómo definís una relación tóxica?",
    "¿Crees que existe el momento indicado para empezar o terminar un proyecto*? ¿Cómo te das cuenta? (Por ejemplo, una relación, un trabajo, entre otros.)",
    "¿Vivir sin amor de amistad o sin amor de pareja?",
    "¿El fin justifica los medios?",
    "¿Cuándo crees que es importante tener noción sobre la sexualidad?",
    "Un buen resultado, aunque sin esfuerzo, ¿vale menos?",
    "¿Crees en las segundas oportunidades?",
    "¿Qué temas consideras tabú? ¿Por qué?",
    "¿Qué pensas sobre la monogamia?",
    "¿Casualidad o causalidad?",
    "¿Crees que llega un momento en el que nos sentimos realizados?",
    "El lenguaje, ¿cómplice o enemigo de la inclusión social?",
    "¿Todo lo que pensamos es porque lo deseamos? ¿Por qué?",
    "¿Qué diferencias crees que existen entre el amor y el enamoramiento?",
    "Una mujer toma la iniciativa en una relación heterosexual. ¿qué pensas?",
    "¿Crees que una persona adulta puede aprender de una joven? ¿En qué sentido?",

    "¿Existe la media naranja? ¿Crees que necesitamos algo o alguien externo para sentirnos completos?",
    "¿Crees que vamos camino a una sociedad sin estereotipos? ¿Consideras que es una señal de evolución?",
    "¿Crees que se puede hacer humor con todo? ¿Qué pensas?",
    "¿Crees que existe una razón por la que te rodeas de ciertas personas?",
    "¿Alguna vez dejaste de hacer algo por tu género?",
    "'Si no te cela, no te quiere' ¿Qué opinas sobre esta expresión?",
    "¿Qué pensas sobre la demostración afectiva en público?",
    "¿Qué es ser libre en una relación de pareja? ¿Qué diferencias encontrás con otros vínculos que mantenes?",
    "'Elegí un trabajo que te guste y no vas a tener que trabajar ni un día de tu vida' ¿qué pensas?",
    "¿Qué es la sexualidad para vos?",
    "'Detrás de un gran hombre, hay una gran mujer' ¿qué pensas?",
    "¿Qué pensas sobre la educación sin distinción de géneros?",
    "¿Qué cambiarias del mundo?",
    "¿Qué o quién influye en la forma en que pensas? ¿Por qué?",
    "¿Se puede estar bien con los demás sin estar bien con uno mismo?",
    "¿Cómo y por qué empezaste a tener conocimiento sobre la sexualidad? ¿te hubiese gustado que sea de otra forma?",
    "¿Como te ves en esta etapa?",
    "¿Cuál es tu mayor miedo?",
    "¿Qué etiquetas sentís que acarrear y no te identifica?",
    "¿Cuándo fue la última vez que dijiste 'Te quiero'? ¿A quién se lo dijiste?",
    "¿Sentis que te quedo algo pendiente con alguna persona? ¿Por qué no hiciste nada al respecto?",
    "¿Un recuerdo valioso de tu infancia?",
    "¿Alguna vez tuviste un acto valioso con alguien, del que no presumas mucho, pero te hace sentir orgulloso?",
    "¿Sos obsesivo? ¿En qué sentido?",
    "¿Una decisión difícil?",
    "¿Qué estás listo para soltar?",
    "Sólo yo sé que soy",
    "¿Una persona o una experiencia que te haya marcado?",
    "Destaca una virtud de alguna de las personas presentes.",
    "Si miras al pasado, ¿cómo ves al adolescente que fuiste?",
    "¿Cómo manejás los desencuentros en los vínculos? (Por ejemplo, amistades que dejas de frecuentar)",
    "¿Cuáles son tus próximos objetivos por cumplir?",
    "Si pudieses conocer los sentimientos más profundos de una persona, ¿a quién elegirías? ¿por qué?",
    "¿Qué te da culpa?",
    "¿Qué mandatos traes y padeces?",
    "¿Qué aprendiste de vos este último año?",
    "¿Cómo canalizas tu enojo? ¿y tu tristeza?",

    "¿Hay algún momento en que te sientas sólo estando acompañado?",
    "¿Alguna vez fingiste afecto por una persona? ¿por qué?",
    "¿Qué lugar ocupa el deseo en tu vida?",
    "Si pudieses volver al pasado y cambiar algo, ¿qué seria? ¿por qué?",
    "¿Qué creencia te gustaría desaprender?",
    "¿Cuál es el sueño más grande que tenés?",
    "¿Qué exigencias te pones? ¿Haces algo para suavizarlas?",
    "¿Cuándo fue la última vez que lloraste? ¿por qué?",
    "¿Qué cambiarias de tu crianza si tuvieras que educar a una persona?",
    "¿Qué rol cumplís en tu familia? ¿cómo te hace sentir?",
    "¿Tuviste amistades que no fueron sanas? ¿Cómo lo manejaste?",
    "Pensá en alguien que te gustaría abrazar. ¿Quién es?",
    "¿Cuál es el mejor consejo que te dieron? ¿Pudiste transmitirlo a alguien también?",
    "¿Qué pensabas el día de tu casamiento? Si no te casaste, ¿te gustaría?",
    "¿Dejaste de hacer cosas por miedo a fracasar? ¿cuáles?",
    "Describí tu relación con vos mismo.",
    "¿Te gustaría hacerle una pregunta a una de las personas presentes? Hacesela.",
    "¿Qué es la soledad para vos? ¿Te gusta estar solo? ¿por qué?",
    "¿Alguna vez escuchaste o leíste una conversación sin permiso? ¿por qué?",
    "¿Te mentís a vos mismo sobre algo? ¿por qué?",
    "Si pudieras volver al pasado, ¿qué te dirías?",
    "¿Que pensabas el día que nació tu primer hijo? Si no tenes, ¿te gustaría tener?",
    "¿Qué tan cómodo te sientes hablando sobre la sexualidad?",
    "¿Hay algún aspecto de tu personalidad que te cuesta aceptar? ¿buscas rechazarlo o integrarlo en tu vida?",
    "Siendo grande, ¿cómo te hubiese gustado ser de chico?",
    "¿Qué estás trabajando en tu interior y te gustaría compartir?",

    "¿Qué amás y la mayoría de la gente no?",
    "¿Sos idealista o realista?",
    "¿Como impacta en tu vida y en tus relaciones?",
    "¿Reconoces tus defectos? ¿Y tus virtudes? ¿Cuáles son?",
    "¿De qué halago estás más orgulloso/a?",
    "¿Una buena decisión?",
    "¿Qué actividades te divertían antes y ahora no?",
    "¿Soles culpar a otras personas por lo que te pasa? ¿En qué situaciones?",
    "¿Qué sensaciones tuviste en tu primer día de universidad/ trabajo? Si no tuviste esas experiencias, ¿qué esperás de ellas?",
    "¿Te gusta reflexionar solo/a o con otras personas?",
    "¿Qué temas despiertan tu curiosidad últimamente?",

    "¿Qué actividad tendés a dejar para después?",
    "¿Una persona que te alivie en momentos tristes?",
    "¿Te dedicas tiempo a vos mismo/a? ¿Qué haces en esos momentos?",
    "¿Qué momentos del día elegís para reflexionar?",
    "¿Hay alguna actividad que te guste tanto que te haga perder la noción del tiempo?",
    "¿Cuál fue tu primera impresión de la persona que tenes a tu izquierda?",
    "¿Te gusta arrancar la semana?",
    "¿Tenés alguna fuente de motivación hoy en día? ¿Cuál es o podría ser?",
    "¿Qué primera impresión crees que das?",

    "¿Qué destacas de las personas que te criaron?",
    "¿Qué destacas de tus amistades?",
    "¿Pensás más en el 'por qué' o en el 'para qué' de las cosas?",
    "¿Qué aventura tenés pendiente por realizar?",
    "Si pudieses ser exitoso/a en lo que quieras, ¿en qué elegirías serio?",
    "¿Te consideras una persona prejuiciosa? ¿Por qué?",
    "¿Cuándo fue la última vez que hiciste algo por primera vez? ¿Qué fue?",
    "¿Un momento simple que disfrutes?",
    "Nombra tres características que te definan.",

    "Si tuvieses que elegir una profesión o carrera distinta, ¿cuál sería?",
    "¿Con qué tipo de personalidad soles conectar?",
    "Si tuvieras que elegir una persona para que te acompañe en una experiencia espiritual, ¿quién sería? ¿Por qué?",
    "Cuando eras chico/a, ¿cómo te imaginabas siendo adulto/a?",
    "¿Te sentís libre de tomar tus propias decisiones?",
    "Quiero o tengo, ¿Cuál de las dos está más presente en tu cotidianidad?",
    "¿Tomás decisiones porque te sentís preparado/a o porque son las esperadas para tu edad?",
    "Nombra a alguien que te inspire.",
    "¿Te enamoraste alguna vez? ¿Quién fue la primera persona y qué te gustó de ella?",

    "¿Como reaccionas ante una actitud que te molesta?",
    "¿Qué actitudes no te gustan pero las toleras en una persona? ¿Y cuáles valoras?",
    "¿Una situación que te incomode?",
    "Cuando te sentís bien con vos mismo/a, ¿con quién te gusta estar?",
    "¿Te permitís mostrarte vulnerable? ¿Con quién?",
    "¿Te define la opinión de los/as demás?",
    "Perdonar o pedir perdón. ¿Cuál te cuesta más?",
    "¿Qué disfrutas de tu cotidianidad? ¿Y qué no?",
    "La razón o la emoción. ¿Cuál de las dos tiene más peso en vos? ¿Te gusta que sea así o preferirías que fuera al revés?",

    "Un talento inútil que te de orgullo es...",
    "¿Crees en el amor a primera vista?",
    "¿Qué fantasía te gustaría bajar a la realidad?",
    "Si fueses de otro género, ¿qué sería lo primero que harías?",
    "Si algo te gusta, ¿asumirías cualquier riesgo?",
    "¿Qué actividad extrema te gustaría hacer?",
    "¿Qué personaje de película o serie te gustaría ser? ¿Por qué?",
    "¿Volver al pasado o ir al futuro? ¿Por qué?",
    "¿Tuviste alguna experiencia paranormal? ¿Cómo fue y con quién/es estabas?",

    "¿Algo ridículo por lo que te gustaría que te paguen?",
    "¿Qué canción elegirías para cantar en un karaoke?",
    "¿Cuál es tu lugar preferido en tu casa? ¿Por qué?",
    "¿Elegirías otra época para vivir? ¿Cuál? ¿Por qué?",
    "¿El último regalo que hiciste?",
    "¿Y el último regalo que recibiste?",
    "¿Con quién fue tu primer beso? ¿Qué sentiste?",
    "¿Te animarías a vivir una experiencia en el extranjero? ¿Cuál?",
    "Tres cosas que te hacen sentir feliz.",
    "¿Una canción que te alegre?",

    "¿Tu película preferida?",
    "¿Un sueño recurrente?",
    "¿Tu libro preferido?",
    "¿Qué comida te recuerda a tu hogar?",
    "Tres cosas que te gusta hacer y sentís que te salen mal.",
    "¿Un pensamiento recurrente?",
    "Si pudieras crear tu lugar en el mundo, ¿cómo sería?",
    "¿En qué momento del día tenes tus mejores ideas?",
    "Si fueras un objeto, ¿cuál te gustaría ser?",

    "Si fueras un animal, ¿cuál serías? ¿Por qué?",
    "¿Cuál es el mejor lugar que conociste?",
    "¿Una situación vergonzosa que recuerdes?",
    "¿Qué recuerdo tenes de tu primera cita?",
    "Si fueses embajador/a, ¿qué lugar elegirías para irte a vivir? ¿A dónde no irías?",
    "¿Cuáles son tus tres placeres culposos?",
    "Compartí un miedo absurdo que tengas.",
    "¿Quién de las personas presentes sería mejor comediante?",
    "¿Un viaje pendiente?",

    "¿En qué te gustaría haber sido bueno/a?",
    "Si escribieras un libro, ¿de qué sería? ¿Cómo lo titularías?",
    "¿Qué cuento te relataban en la infancia?",
    "¿Qué título le pondrías a una película sobre tu vida?",
    "¿Qué es lo primero que miras en una persona?",
    "¿Sobre qué tema consideras que tenes mucho conocimiento?",
    "¿Qué tres deseos pedías cuando eras niño/a? ¿y ahora?",
    "¿Te asusta el futuro? ¿Por qué?",
    "Si fueses una persona famosa, ¿Quién serias? ¿Por qué?",
    "¿Tres cosas que te den vergüenza ajena?",
    "¿Qué es lo que más te gusta del barrio donde vivís?",
    "Si pudieses crear un feriado, ¿Por qué motivo seria?",

    "Cuando ayudas a alguien, ¿lo haces por vos o por la otra persona? ¿Crees que existen las acciones desinteresadas?",
    "¿Crees que todos/as tenemos un propósito en esta vida? ¿cuál sentís que es el tuyo?",
    "¿Qué pensas sobre la demostración afectiva en público?",
    "Si tuvieses que volver a elegir tu género, ¿cuál elegirías? ¿Por qué?",
    "¿Vivir sin amor de amistad o sin amor de pareja?",

    "¿Considerás importante la educación sexual? ¿Quiénes deberían abordar este tema?",
    "¿Qué cambiarías del mundo?",
    "¿Casualidad o causalidad?",
    "¿Qué pensas sobre la monogamia?",
    "Un buen resultado, aunque sin esfuerzo, ¿vale menos?",
    "¿Qué o quién influye en la forma en que pensás? ¿Por qué?",
    "¿La educación escolar nos prepara para afrontar la adultez?",
    "¿Qué mandatos o presiones crees que se imponen entre varones?",
    "¿Crees que hay alguna razón por la que naciste en tu familia?",

    "¿Elegimos lo que somos o nos lo impone nuestro entorno?",
    "¿Se puede estar bien con los demás sin estar bien con uno/a mismo/a?",
    "¿Crees que vamos camino a una sociedad sin estereotipos?",
    "¿Consideras que es una señal de evolución?",
    "¿Qué pensas sobre la educación sin distinción de géneros?",
    "¿Qué es la sexualidad para vos?",
    "¿Qué creencias se les imponen a los/as niños/as y no estás de acuerdo?",
    "¿Todo lo que pensamos es lo que deseamos? ¿Por qué?",
    "Lo que una persona piensa, ¿crees que la define? ¿En qué medida y por qué?",
    "¿Crees que una persona adulta puede aprender de una joven? ¿En qué sentido?",

    "¿Cómo definís una relación tóxica?",
    "El lenguaje, ¿cómplice o enemigo de la inclusión social?",
    "¿Qué es el 'amor propio'?",
    "¿Qué temas consideras tabú? ¿Por qué?",
    "¿Cuándo crees que es importante empezar a tener noción sobre la sexualidad?",
    "Una mujer toma la iniciativa en una relación heterosexual. ¿Qué pensas?",
    "¿Alguna vez dejaste de hacer algo por tu género?",
    "¿Crees que se puede hacer humor con todo? ¿Que pensas?",

    "Si miras al pasado, ¿cómo ves al/a la adolescente que fuiste?",
    "¿Qué mandatos traes y padeces?",
    "¿Qué estás trabajando en tu interior y te gustaría compartir?",
    "¿Sentís que te quedó algo pendiente con alguna persona?",
    "¿Por qué no hiciste nada al respecto?",
    "Destaca una virtud de alguna de las personas presentes.",
    "¿Cuál es el sueño más grande que tenes?",
    "¿Sos obsesivo/a? ¿En qué sentido?",
    "¿Qué creencia te gustaría desaprender?",
    "¿Tuviste amistades que no fueron sanas? ¿Cómo lo manejaste?",

    "¿Qué pensabas el día que nació tu primer/a hijo/a? Si no tenes hijos/as, ¿te gustaría tener?",
    "¿Un recuerdo valioso de tu infancia?",
    "¿Una persona o una experiencia que te haya marcado?",
    "¿Cómo te ves en esta etapa?",
    "¿Alguna vez tuviste un acto valioso con alguien, del que no presumas mucho, pero te hace sentir orgulloso/a?",
    "¿Dejaste de hacer cosas por miedo a fracasar? ¿Cuáles?",
    "¿Qué aprendiste de vos este último año?",
    "Si pudieses volver al pasado y cambiar algo, ¿qué sería? ¿Por qué?",
    "Describí tu relación con vos mismo/a.",

    "Si pudieras volver al pasado, ¿qué te dirías?",
    "¿Qué cambiarías de tu crianza si tuvieras que educar a una persona?",
    "¿Cuál es tu mayor miedo?",
    "¿Cuándo fue la última vez que dijiste 'Te quiero’? ¿A quién se lo dijiste?",
    "¿Qué etiqueta sentís que acarreas y no te identifica?",
    "¿Qué te da culpa?",
    "Siendo grande, ¿cómo te hubiese gustado ser de chico/a?",
    "¿Alguna vez escuchaste o leíste alguna conversación sin permiso? ¿Por qué?",
    "¿Qué pensabas el día de tu casamiento? Si no te casaste, ¿te gustaría?",

    "Te gustaría hacerle una pregunta a una de las personas presentes? Hacésela.",
    "¿Qué estás listo/a para soltar?",
    "¿Qué tan cómodo/a te sentís hablando sobre la sexualidad?",
    "¿Cómo manejas los desencuentros en los vínculos? Por ejemplo, amistades que dejas de frecuentar.",
    "¿Cuál es el mejor consejo que te dieron? ¿Pudiste transmitirlo a alguien también?",
    "¿Qué rol cumplís en tu familia? ¿Cómo te hace sentir?",
    "¿Qué exigencias te impones? ¿Haces algo para suavizarlas?",
    "Pensa en alguien que te gustaría abrazar. ¿Quién es?",
    "Si pudieses conocer los sentimientos más profundos de una persona, ¿a quién elegirías? ¿Por qué?",

    "¿Qué es la soledad para vos? ¿Te gusta estar solo/a? ¿Por qué?",
    "Solo yo sé que soy...",
    "¿Hay algún momento en el que te sientas solo/a estando acompañado/a?",
    "¿Alguna vez fingiste afecto por una persona? ¿Por qué?",
    "¿Una decisión difícil?",
    "¿Hay algún aspecto de tu personalidad que te cuesta aceptar? ¿Buscas rechazarlo o integrarlo en tu vida?",
    "¿Cuándo fue la última vez que lloraste? ¿Por qué?",
    "¿Cómo y por qué empezaste a tener conocimiento sobre la sexualidad?",
    "¿Te hubiese gustado que sea de otra forma?",
    "¿Cuáles son tus próximos objetivos por cumplir?",
    "¿Qué lugar ocupa el deseo en tu vida?",
    "¿Te mentís a vos mismo/a sobre algo? ¿Por qué?",
    "¿Cómo canalizas tu enojo? ¿Y tú tristeza?",
];

const juego = {
    mazo: new MazoDeCartas(listaDePreguntas),

    mostrarSiguienteCarta: function () {
        const textoElemento = document.getElementById('textoCarta');
        const contadorElemento = document.getElementById('contadorCarta');

        textoElemento.style.opacity = 0;
        contadorElemento.style.opacity = 0;

        setTimeout(() => {
            const cartaActual = this.mazo.sacarUna();
            textoElemento.innerText = cartaActual.texto;

            if (cartaActual.numero === "-") {
                contadorElemento.innerText = "";
            } else {
                contadorElemento.innerText = `${cartaActual.numero} / ${this.mazo.total}`;
            }

            textoElemento.style.opacity = 1;
            contadorElemento.style.opacity = 1;
        }, 200);
    },

    reiniciarMazo: function () {
        // Pequeña confirmación por si tocan el botón por error
        if (confirm("¿Seguro que quieren reiniciar? Volverán a aparecer todas las cartas que ya salieron.")) {
            this.mazo.reiniciar();

            const textoElemento = document.getElementById('textoCarta');
            const contadorElemento = document.getElementById('contadorCarta');

            textoElemento.style.opacity = 0;
            contadorElemento.style.opacity = 0;

            setTimeout(() => {
                textoElemento.innerText = "¡Mazo reiniciado! Hacé clic en 'Sacar Carta' para empezar de nuevo.";
                contadorElemento.innerText = "";

                textoElemento.style.opacity = 1;
                contadorElemento.style.opacity = 1;
            }, 200);
        }
    }
};