document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        es: {
            titulo_menu: "🏆 Torneo Rubik",
            inicio: "Inicio",
            reglas: "Reglas",
            bases: "Bases",
            reseñas: "Reseñas",
            campeones: "Campeones",
            titulo: "Torneo de Cubo Rubik 2025",
            descripcion: "¡Demuestra tu habilidad y compite con los mejores!",
            fechaLugar: "📅 15 de Junio 2025 - 📍 Puebla, México",
            categorias: "🏆 Categorías",
            categoriasDesc: "Compite en diferentes categorías según tu nivel de habilidad.",
            reglas: "Reglas",
            reglasDesc: "Consulta las reglas oficiales del torneo para estar preparado.",
            ubicacion: "📍 Ubicación",
            ubicacionDesc: "Explanada de la Facultad de Ciencias de la Computación, Ciudad Universitaria, BUAP.",
            queEs: "¿Qué es el Torneo Rubik?",
            queEsDesc1: "El <strong>Torneo de Cubo Rubik</strong> es un evento competitivo donde los participantes demuestran su velocidad y habilidad en la resolución del famoso cubo de Rubik. Con diferentes categorías y niveles de dificultad, este torneo reúne a entusiastas y expertos de todo el país.",
            queEsDesc2: "Los competidores deben resolver el cubo en el menor tiempo posible, siguiendo las reglas oficiales y enfrentando desafíos en modalidades como <strong>resolución a ciegas, con una sola mano</strong> y más. ¿Estás listo para demostrar tu talento?",
            btninformacion: "Más Información",
            cuentaRegresiva: "TORNEO RUBIK 2025 ESTÁ MÁS CERCA",
            dias: "DÍAS",
            horas: "HORAS",
            minutos: "MINUTOS",
            segundos: "SEGUNDOS",
            dondeSera: "¿Dónde Será?",
            dondeSeraDesc: "Explanada de la Facultad de Ciencias de la Computación,",
            dondeSeraDesc2: "Ciudad Universitaria, BUAP.",
            cuandoSera: "¿Cuándo Será?",
            cuandoSeraDesc: "15 de Junio del 2025.",
            eventoPresencial: "Evento Presencial",
            eventoPresencialDesc: "FEPRO 2024 ¡Codificando el Futuro! En su XVI edición se llevará a cabo de manera presencial.",
            titlefooter: "TORNEO RUBIK 2025",
            ubifooter: "📍 Puebla, México | Facultad de Ciencias de la Computación, BUAP",
            contacto: "Contacto: info@torneorubik.com",
            derechosbry: "&copy; 2025 Torneo Rubik - Todos los derechos reservados | Hecho por Brayan De Jesús Castillo.",
        
        /* ========================= */
        /* 🔹 TRADUCCIONES PARA REGLAS.HTML */
        /* ========================= */
            reglas_curso: "Reglas del Concurso",
            regla1: "El concursante entregará el cubo al juez.",
            regla2: "El juez entregará el cubo a un mezclador y este lo mezclará con 15 movimientos aleatorios. Durante este tiempo el concursante no podrá ver el cubo.",
            regla3: "Una vez mezclado, lo pondrá en la mesa y lo tapará con una caja.",
            regla4: "El juez destapará el cubo y el concursante tendrá 15 segundos para inspeccionarlo sin manipularlo. Pasado este tiempo, comenzará con el armado del cubo.",
            regla5: "Una vez terminado de armar el cubo, lo dejará sobre la mesa y el juez registrará el tiempo del reloj.",
            regla6: "Si el concursante no comienza el armado en los primeros 10 segundos, será descalificado.",
            regla7: "Si el armado del cubo excede los 3 minutos, se dará por terminado ese intento.",
            regla8: "Cada jugador armará el cubo tres veces consecutivas y se tomará el menor tiempo de armado.",
            regla9: "En caso de empate entre dos o más participantes, se dará otra oportunidad que será definida por el jurado.",
        
        /* ========================= */
        /* 🔹 TRADUCCIONES PARA BASES.HTML */
        /* ========================= */
        bases_titulo: "BASES",
        categorias_titulo: "CATEGORÍAS:",
        categorias_texto: "Podrán participar niños (a partir de los 5 años de edad), jóvenes y adultos.<br>* Límite de participantes: 20 por categoría.",
        requisitos_titulo: "REQUISITOS:",
        requisito1: "Realizar el registro en línea.",
        requisito2: "Realizar la aportación de recuperación y recoger el kit de participante (560.00).",
        requisito3: "Traer su propio cubo al torneo. El cubo deberá tener seis colores diferentes.",
        inscripcion_titulo: "MECÁNICA DE INSCRIPCIÓN:",
        inscripcion_texto: "Los participantes deberán registrarse en <a href='https://www.torneopueblarubik.com' target='_blank'>www.torneopueblarubik.com</a> y confirmar su inscripción, a partir de la publicación de esta convocatoria y hasta el próximo 15 de junio.",
        competencia_titulo: "MECANISMO DE LA COMPETENCIA:",
        competencia1: "El armado del cubo es individual. Son tres armados y se toma el tiempo más bajo.",
        competencia2: "El tiempo máximo para que el armado sea válido es de 3 minutos.",
        competencia3: "Los tres mejores tiempos serán los ganadores.",
        premiacion_titulo: "PREMIACIÓN:",
        premiacion1: "Primer lugar: Cubo Rubik exclusivo, diploma de primer lugar, camisa oficial del evento, dinero en efectivo y vale por un año de hamburguesas en McDonald’s.",
        premiacion2: "Segundo lugar: Cubo Rubik exclusivo, diploma de segundo lugar, camisa oficial del evento y dinero en efectivo.",
        premiacion3: "Tercer lugar: Cubo Rubik exclusivo y diploma de tercer lugar.",
            
        
        /* ========================= */
        /* 🔹 TRADUCCIONES PARA RESEÑAS.HTML */
        /* ========================= */

        reseñas: "Reseñas",
        reseñas_titulo: "RESEÑAS",
        reseñas_parrafo1: "Quienes han participado en nuestros torneos se encontraron con más de cien jóvenes de todo el Estado y Estados vecinos, resolviendo, a velocidades impensables, uno de los retos más populares del mundo para la mente humana: el cubo de Rubik y sus múltiples variaciones.",
        reseñas_parrafo2: "En total, el pasado Torneo de Cubo de Rubik contó con 115 participantes, entre los 8 y los 58 años de edad, quienes, a pesar de provenir de diferentes regiones, se integraron perfectamente durante los dos días del Torneo.",
        ganadores_titulo: "GANADORES",
        ganador1_nombre: "Feliks Zemdegs",
        ganador1_descripcion: "Feliks Zemdegs es un speedcuber australiano que ha ganado múltiples campeonatos mundiales y ha establecido numerosos récords mundiales en la resolución del cubo de Rubik.",
        ganador2_nombre: "Max Park",
        ganador2_descripcion: "Max Park es un speedcuber estadounidense conocido por sus impresionantes tiempos de resolución y por ser uno de los competidores más rápidos del mundo en varias categorías del cubo de Rubik.",
        ganador3_nombre: "Mats Valk",
        ganador3_descripcion: "Mats Valk es un speedcuber neerlandés que ha establecido varios récords mundiales y es conocido por su innovador método de resolución del cubo de Rubik.",

        },
        en: {
            titulo_menu: "🏆 Rubik Tournament",
            inicio: "Home",
            reglas: "Rules",
            bases: "Bases",
            reseñas: "Reviews",
            campeones: "Champions",
            titulo: "Rubik's Cube Tournament 2025",
            descripcion: "Show your skills and compete with the best!",
            fechaLugar: "📅 June 15, 2025 - 📍 Puebla, Mexico",
            categorias: "🏆 Categories",
            categoriasDesc: "Compete in different categories according to your skill level.",
            reglas: "Rules",
            reglasDesc: "Check the official tournament rules to be prepared.",
            ubicacion: "📍 Location",
            ubicacionDesc: "Esplanade of the Faculty of Computer Science, University City, BUAP.",
            queEs: "What is the Rubik's Tournament?",
            queEsDesc1: "The <strong>Rubik's Cube Tournament</strong> is a competitive event where participants demonstrate their speed and skill in solving the famous Rubik's cube. With different categories and levels of difficulty, this tournament brings together enthusiasts and experts from all over the country.",
            queEsDesc2: "Competitors must solve the cube in the shortest possible time, following the official rules and facing challenges in modalities such as <strong>blindfolded solving, one-handed solving</strong> and more. Are you ready to show your talent?",
            btninformacion: "More Information",
            cuentaRegresiva: "RUBIK'S TOURNAMENT 2025 IS GETTING CLOSER",
            dias: "DAYS",
            horas: "HOURS",
            minutos: "MINUTES",
            segundos: "SECONDS",
            dondeSera: "Where Will It Be?",
            dondeSeraDesc: "Esplanade of the Faculty of Computer Science,",
            dondeSeraDesc2: "University City, BUAP.",
            cuandoSera: "When Will It Be?",
            cuandoSeraDesc: "June 15, 2025.",
            eventoPresencial: "In-Person Event",
            eventoPresencialDesc: "FEPRO 2024 Coding the Future! In its XVI edition, it will be held in person.",
            titlefooter: "RUBIK'S TOURNAMENT 2025",
            ubifooter: "📍 Puebla, Mexico | Faculty of Computer Science, BUAP",
            contacto: "Contact: info@torneorubik.com",
            derechosbry: "&copy; Rubik Tournament 2025  - All reserved items | Hecho por Brayan De Jesús Castillo.",
        
            /* ========================= */
            /* 🔹 TRADUCCIONES PARA REGLAS.HTML */
            /* ========================= */
            reglas_curso: "Contest Rules",
            regla1: "The contestant will hand over the cube to the judge.",
            regla2: "The judge will give the cube to a scrambler, who will mix it with 15 random moves. During this time, the contestant cannot see the cube.",
            regla3: "Once mixed, it will be placed on the table and covered with a box.",
            regla4: "The judge will uncover the cube, and the contestant will have 15 seconds to inspect it without handling it. After this time, they will start solving the cube.",
            regla5: "Once finished solving the cube, they will leave it on the table, and the judge will record the time.",
            regla6: "If the contestant does not start solving within the first 10 seconds, they will be disqualified.",
            regla7: "If solving the cube exceeds 3 minutes, the attempt will be considered over.",
            regla8: "Each player will solve the cube three times in a row, and the shortest solving time will be taken.",
            regla9: "In case of a tie between two or more participants, an additional attempt will be defined by the jury.",
        
            /* ========================= */
            /* 🔹 TRADUCCIONES PARA BASES.HTML */
            /* ========================= */
            bases_titulo: "RULES",
            categorias_titulo: "CATEGORIES:",
            categorias_texto: "Children (from 5 years old), youth, and adults can participate.<br>* Participant limit: 20 per category.",
            requisitos_titulo: "REQUIREMENTS:",
            requisito1: "Register online.",
            requisito2: "Make the recovery contribution and pick up the participant kit (560.00).",
            requisito3: "Bring your own cube to the tournament. The cube must have six different colors.",
            inscripcion_titulo: "REGISTRATION MECHANICS:",
            inscripcion_texto: "Participants must register at <a href='https://www.torneopueblarubik.com' target='_blank'>www.torneopueblarubik.com</a> and confirm their registration, from the publication of this call until next June 15.",
            competencia_titulo: "COMPETITION MECHANISM:",
            competencia1: "The cube assembly is individual. There are three assemblies and the lowest time is taken.",
            competencia2: "The maximum time for the assembly to be valid is 3 minutes.",
            competencia3: "The three best times will be the winners.",
            premiacion_titulo: "AWARDS:",
            premiacion1: "First place: Exclusive Rubik's Cube, first place diploma, official event shirt, cash, and a voucher for a year of hamburgers at McDonald’s.",
            premiacion2: "Second place: Exclusive Rubik's Cube, second place diploma, official event shirt, and cash.",
            premiacion3: "Third place: Exclusive Rubik's Cube and third place diploma.",
            
            /* ========================= */
            /* 🔹 TRADUCCIONES PARA RESEÑAS.HTML */
            /* ========================= */

            reseñas: "Reviews",
            reseñas_titulo: "REVIEWS",
            reseñas_parrafo1: "Those who have participated in our tournaments met more than a hundred young people from all over the state and neighboring states, solving, at unimaginable speeds, one of the world's most popular challenges for the human mind: the Rubik's cube and its multiple variations.",
            reseñas_parrafo2: "In total, the last Rubik's Cube Tournament had 115 participants, between the ages of 8 and 58, who, despite coming from different regions, integrated perfectly during the two days of the Tournament.",
            ganadores_titulo: "WINNERS",
            ganador1_nombre: "Feliks Zemdegs",
            ganador1_descripcion: "Feliks Zemdegs is an Australian speedcuber who has won multiple world championships and set numerous world records in solving the Rubik's cube.",
            ganador2_nombre: "Max Park",
            ganador2_descripcion: "Max Park is an American speedcuber known for his impressive solving times and for being one of the fastest competitors in the world in various Rubik's cube categories.",
            ganador3_nombre: "Mats Valk",
            ganador3_descripcion: "Mats Valk is a Dutch speedcuber who has set several world records and is known for his innovative Rubik's cube solving method.",
            
        },
        fr: {
            titulo_menu: "🏆 Tournoi Rubik",
            inicio: "Accueil",
            reglas: "Règles",
            bases: "Bases",
            reseñas: "Avis",
            campeones: "Champions",
            titulo: "Tournoi de Rubik's Cube 2025",
            descripcion: "Montrez vos compétences et rivalisez avec les meilleurs!",
            fechaLugar: "📅 15 juin 2025 - 📍 Puebla, Mexique",
            categorias: "🏆 Catégories",
            categoriasDesc: "Compétition dans différentes catégories selon votre niveau de compétence.",
            reglas: "Règles",
            reglasDesc: "Consultez les règles officielles du tournoi pour être prêt.",
            ubicacion: "📍 Emplacement",
            ubicacionDesc: "Esplanade de la Faculté d'Informatique, Cité Universitaire, BUAP.",
            queEs: "Qu'est-ce que le Tournoi Rubik?",
            queEsDesc1: "Le <strong>Tournoi de Rubik's Cube</strong> est un événement compétitif où les participants démontrent leur vitesse et leur habileté à résoudre le célèbre cube de Rubik. Avec différentes catégories et niveaux de difficulté, ce tournoi réunit des passionnés et des experts de tout le pays.",
            queEsDesc2: "Les concurrents doivent résoudre le cube dans les plus brefs délais, en suivant les règles officielles et en affrontant des défis dans des modalités telles que <strong>résolution à l'aveugle, résolution à une main</strong> et plus encore. Êtes-vous prêt à montrer votre talent?",
            btninformacion: "Plus d'Informations",
            cuentaRegresiva: "LE TOURNOI RUBIK 2025 APPROCHE",
            dias: "JOURS",
            horas: "HEURES",
            minutos: "MINUTES",
            segundos: "SECONDES",
            dondeSera: "Où Cela Sera-t-il?",
            dondeSeraDesc: "Esplanade de la Faculté d'Informatique,",
            dondeSeraDesc2: "Cité Universitaire, BUAP.",
            cuandoSera: "Quand Cela Sera-t-il?",
            cuandoSeraDesc: "15 juin 2025.",
            eventoPresencial: "Événement en Personne",
            eventoPresencialDesc: "FEPRO 2024 Codage du Futur! Dans sa XVIe édition, il se tiendra en personne.",
            titlefooter: "TOURNOI RUBIK 2025",
            ubifooter: "📍 Puebla, Mexique | Faculté d'Informatique, BUAP",
            contacto: "Contact: info@torneorubik.com",
            derechosbry: "&copy; Tournoi Rubik 2025 - Tous les droits réservés | Hecho par Brayan De Jesús Castillo.",
        
            /* ========================= */
            /* 🔹 TRADUCCIONES PARA REGLAS.HTML */
            /* ========================= */
            reglas_curso: "Règles du Concours",
            regla1: "Le concurrent remettra le cube au juge.",
            regla2: "Le juge remettra le cube à un mélangeur, qui le mélangera avec 15 mouvements aléatoires. Pendant ce temps, le concurrent ne pourra pas voir le cube.",
            regla3: "Une fois mélangé, il sera placé sur la table et couvert avec une boîte.",
            regla4: "Le juge découvrira le cube et le concurrent aura 15 secondes pour l'inspecter sans le manipuler. Passé ce délai, il commencera à résoudre le cube.",
            regla5: "Une fois le cube résolu, il sera laissé sur la table et le juge enregistrera le temps.",
            regla6: "Si le concurrent ne commence pas à résoudre le cube dans les 10 premières secondes, il sera disqualifié.",
            regla7: "Si la résolution du cube dépasse 3 minutes, l'essai sera considéré comme terminé.",
            regla8: "Chaque joueur résoudra le cube trois fois consécutives et le temps de résolution le plus court sera pris en compte.",
            regla9: "En cas d'égalité entre deux ou plusieurs participants, une tentative supplémentaire sera définie par le jury.",
        
            /* ========================= */
            /* 🔹 TRADUCCIONES PARA BASES.HTML */
            /* ========================= */
            bases_titulo: "RÈGLES",
            categorias_titulo: "CATÉGORIES:",
            categorias_texto: "Les enfants (à partir de 5 ans), les jeunes et les adultes peuvent participer.<br>* Limite de participants : 20 par catégorie.",
            requisitos_titulo: "EXIGENCES:",
            requisito1: "S'inscrire en ligne.",
            requisito2: "Faire la contribution de récupération et récupérer le kit de participant (560.00).",
            requisito3: "Apportez votre propre cube au tournoi. Le cube doit avoir six couleurs différentes.",
            inscripcion_titulo: "MÉCANIQUE D'INSCRIPTION:",
            inscripcion_texto: "Les participants doivent s'inscrire sur <a href='https://www.torneopueblarubik.com' target='_blank'>www.torneopueblarubik.com</a> et confirmer leur inscription, à partir de la publication de cet appel et jusqu'au 15 juin prochain.",
            competencia_titulo: "MÉCANISME DE COMPÉTITION:",
            competencia1: "L'assemblage du cube est individuel. Il y a trois assemblages et le temps le plus bas est pris.",
            competencia2: "Le temps maximum pour que l'assemblage soit valide est de 3 minutes.",
            competencia3: "Les trois meilleurs temps seront les gagnants.",
            premiacion_titulo: "RÉCOMPENSES:",
            premiacion1: "Première place : Cube Rubik exclusif, diplôme de première place, chemise officielle de l'événement, argent en espèces et bon pour un an de hamburgers chez McDonald’s.",
            premiacion2: "Deuxième place : Cube Rubik exclusif, diplôme de deuxième place, chemise officielle de l'événement et argent en espèces.",
            premiacion3: "Troisième place : Cube Rubik exclusif et diplôme de troisième place.",
            
            /* ========================= */
            /* 🔹 TRADUCCIONES PARA RESEÑAS.HTML */
            /* ========================= */

            reseñas: "Avis",
            reseñas_titulo: "AVIS",
            reseñas_parrafo1: "Ceux qui ont participé à nos tournois ont rencontré plus d'une centaine de jeunes de tout l'État et des États voisins, résolvant, à des vitesses inimaginables, l'un des défis les plus populaires au monde pour l'esprit humain : le cube de Rubik et ses multiples variations.",
            reseñas_parrafo2: "Au total, le dernier tournoi de Rubik's Cube a compté 115 participants, âgés de 8 à 58 ans, qui, malgré leur provenance de différentes régions, se sont parfaitement intégrés pendant les deux jours du tournoi.",
            ganadores_titulo: "GAGNANTS",
            ganador1_nombre: "Feliks Zemdegs",
            ganador1_descripcion: "Feliks Zemdegs est un speedcuber australien qui a remporté plusieurs championnats du monde et établi de nombreux records du monde dans la résolution du cube de Rubik.",
            ganador2_nombre: "Max Park",
            ganador2_descripcion: "Max Park est un speedcuber américain connu pour ses temps de résolution impressionnants et pour être l'un des concurrents les plus rapides au monde dans diverses catégories de cubes de Rubik.",
            ganador3_nombre: "Mats Valk",
            ganador3_descripcion: "Mats Valk est un speedcuber néerlandais qui a établi plusieurs records du monde et est connu pour sa méthode innovante de résolution du cube de Rubik.",
            
        
        },
        de: {
            titulo_menu: "🏆 Rubik Turnier",
            inicio: "Startseite",
            reglas: "Regeln",
            bases: "Grundlagen",
            reseñas: "Bewertungen",
            campeones: "Champions",
            titulo: "Rubik's Cube Turnier 2025",
            descripcion: "Zeigen Sie Ihre Fähigkeiten und treten Sie gegen die Besten an!",
            fechaLugar: "📅 15. Juni 2025 - 📍 Puebla, Mexiko",
            categorias: "🏆 Kategorien",
            categoriasDesc: "Treten Sie in verschiedenen Kategorien entsprechend Ihrem Fähigkeitsniveau an.",
            reglas: "Regeln",
            reglasDesc: "Überprüfen Sie die offiziellen Turnierregeln, um vorbereitet zu sein.",
            ubicacion: "📍 Standort",
            ubicacionDesc: "Esplanade der Fakultät für Informatik, Universitätsstadt, BUAP.",
            queEs: "Was ist das Rubik-Turnier?",
            queEsDesc1: "Das <strong>Rubik's Cube Turnier</strong> ist ein Wettbewerb, bei dem die Teilnehmer ihre Geschwindigkeit und Geschicklichkeit beim Lösen des berühmten Rubik-Würfels demonstrieren. Mit verschiedenen Kategorien und Schwierigkeitsgraden bringt dieses Turnier Enthusiasten und Experten aus dem ganzen Land zusammen.",
            queEsDesc2: "Die Teilnehmer müssen den Würfel in kürzester Zeit lösen, die offiziellen Regeln befolgen und Herausforderungen in Modalitäten wie <strong>blinde Lösung, einhändige Lösung</strong> und mehr meistern. Sind Sie bereit, Ihr Talent zu zeigen?",
            btninformacion: "Mehr Informationen",
            cuentaRegresiva: "DAS RUBIK-TURNIER 2025 RÜCKT NÄHER",
            dias: "TAGE",
            horas: "STUNDEN",
            minutos: "MINUTEN",
            segundos: "SEKUNDEN",
            dondeSera: "Wo Wird Es Sein?",
            dondeSeraDesc: "Esplanade der Fakultät für Informatik,",
            dondeSeraDesc2: "Universitätsstadt, BUAP.",
            cuandoSera: "Wann Wird Es Sein?",
            cuandoSeraDesc: "15. Juni 2025.",
            eventoPresencial: "Präsenzveranstaltung",
            eventoPresencialDesc: "FEPRO 2024 Kodierung der Zukunft! In seiner XVI. Ausgabe wird es persönlich stattfinden.",
            titlefooter: "RUBIK TURNIER 2025",
            ubifooter: "📍 Puebla, Mexiko | Fakultät für Informatik, BUAP",
            contacto: "Kontakt: info@torneorubik.com",
            derechosbry: "&copy; Rubik Turnier 2025 – Alle reservierten Reservierungen | Hecho por Brayan De Jesús Castillo.",

            /* ========================= */
            /* 🔹 TRADUCCIONES PARA REGLAS.HTML */
            /* ========================= */
            reglas_curso: "Wettbewerbsregeln",
            regla1: "Der Teilnehmer übergibt den Würfel dem Schiedsrichter.",
            regla2: "Der Schiedsrichter gibt den Würfel an einen Mischer weiter, der ihn mit 15 zufälligen Bewegungen mischt. Während dieser Zeit darf der Teilnehmer den Würfel nicht sehen.",
            regla3: "Nachdem der Würfel gemischt wurde, wird er auf den Tisch gelegt und mit einer Box abgedeckt.",
            regla4: "Der Schiedsrichter deckt den Würfel auf, und der Teilnehmer hat 15 Sekunden Zeit, ihn zu inspizieren, ohne ihn zu berühren. Danach beginnt er mit der Lösung des Würfels.",
            regla5: "Sobald der Würfel gelöst ist, wird er auf den Tisch gelegt und der Schiedsrichter registriert die Zeit.",
            regla6: "Wenn der Teilnehmer nicht innerhalb der ersten 10 Sekunden mit dem Lösen beginnt, wird er disqualifiziert.",
            regla7: "Wenn das Lösen des Würfels länger als 3 Minuten dauert, wird der Versuch beendet.",
            regla8: "Jeder Spieler löst den Würfel dreimal hintereinander, und die kürzeste Lösungszeit wird gewertet.",
            regla9: "Bei einem Gleichstand zwischen zwei oder mehr Teilnehmern wird eine zusätzliche Gelegenheit durch die Jury bestimmt.",
        
            /* ========================= */
            /* 🔹 TRADUCCIONES PARA BASES.HTML */
            /* ========================= */
            bases_titulo: "REGELN",
            categorias_titulo: "KATEGORIEN:",
            categorias_texto: "Kinder (ab 5 Jahren), Jugendliche und Erwachsene können teilnehmen.<br>* Teilnehmerlimit: 20 pro Kategorie.",
            requisitos_titulo: "ANFORDERUNGEN:",
            requisito1: "Online registrieren.",
            requisito2: "Den Wiederherstellungsbeitrag leisten und das Teilnehmerkit abholen (560.00).",
            requisito3: "Bringen Sie Ihren eigenen Würfel zum Turnier mit. Der Würfel muss sechs verschiedene Farben haben.",
            inscripcion_titulo: "REGISTRIERUNGSMECHANIK:",
            inscripcion_texto: "Die Teilnehmer müssen sich auf <a href='https://www.torneopueblarubik.com' target='_blank'>www.torneopueblarubik.com</a> registrieren und ihre Anmeldung bestätigen, ab der Veröffentlichung dieses Aufrufs bis zum nächsten 15. Juni.",
            competencia_titulo: "WETTBEWERBSMECHANISMUS:",
            competencia1: "Das Zusammenbauen des Würfels ist individuell. Es gibt drei Zusammenbauten und die niedrigste Zeit wird genommen.",
            competencia2: "Die maximale Zeit, damit der Zusammenbau gültig ist, beträgt 3 Minuten.",
            competencia3: "Die drei besten Zeiten werden die Gewinner sein.",
            premiacion_titulo: "PREISE:",
            premiacion1: "Erster Platz: Exklusiver Rubik's Cube, Erster Platz Diplom, offizielles Event-Shirt, Bargeld und ein Gutschein für ein Jahr Hamburger bei McDonald’s.",
            premiacion2: "Zweiter Platz: Exklusiver Rubik's Cube, Zweiter Platz Diplom, offizielles Event-Shirt und Bargeld.",
            premiacion3: "Dritter Platz: Exklusiver Rubik's Cube und Dritter Platz Diplom.",
            
            /* ========================= */
            /* 🔹 TRADUCCIONES PARA RESEÑAS.HTML */
            /* ========================= */

            reseñas: "Bewertungen",
            reseñas_titulo: "BEWERTUNGEN",
            reseñas_parrafo1: "Diejenigen, die an unseren Turnieren teilgenommen haben, trafen auf über hundert junge Menschen aus dem ganzen Staat und den Nachbarstaaten, die mit unvorstellbaren Geschwindigkeiten eine der weltweit beliebtesten Herausforderungen für den menschlichen Geist lösten: den Rubik's Cube und seine zahlreichen Variationen.",
            reseñas_parrafo2: "Insgesamt nahmen am letzten Rubik's Cube Turnier 115 Teilnehmer im Alter von 8 bis 58 Jahren teil, die sich trotz ihrer Herkunft aus verschiedenen Regionen während der zwei Tage des Turniers perfekt integrierten.",
            ganadores_titulo: "GEWINNER",
            ganador1_nombre: "Feliks Zemdegs",
            ganador1_descripcion: "Feliks Zemdegs ist ein australischer Speedcuber, der mehrere Weltmeisterschaften gewonnen und zahlreiche Weltrekorde im Lösen des Rubik's Cube aufgestellt hat.",
            ganador2_nombre: "Max Park",
            ganador2_descripcion: "Max Park ist ein amerikanischer Speedcuber, der für seine beeindruckenden Lösungszeiten bekannt ist und einer der schnellsten Wettbewerber der Welt in verschiedenen Rubik's Cube Kategorien ist.",
            ganador3_nombre: "Mats Valk",
            ganador3_descripcion: "Mats Valk ist ein niederländischer Speedcuber, der mehrere Weltrekorde aufgestellt hat und für seine innovative Methode zur Lösung des Rubik's Cube bekannt ist.",
           
        

        }
    };

    const selectIdioma = document.getElementById('selectIdioma');
    selectIdioma.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        const translation = translations[selectedLanguage];

        for (const key in translation) {
            const element = document.getElementById(key);
            if (element) {
                element.innerHTML = translation[key];
            }
        }
    });
});


// ==========================
// 🔹 CUENTA REGRESIVA
// ==========================
function iniciarCuentaRegresiva() {
    const eventoFecha = new Date("2025-06-15T00:00:00").getTime();

    function actualizarTiempo() {
        const ahora = new Date().getTime();
        const diferencia = eventoFecha - ahora;

        let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = dias.toString().padStart(2, "0");
        document.getElementById("hours").innerText = horas.toString().padStart(2, "0");
        document.getElementById("minutes").innerText = minutos.toString().padStart(2, "0");
        document.getElementById("seconds").innerText = segundos.toString().padStart(2, "0");
    }

    actualizarTiempo();
    setInterval(actualizarTiempo, 1000);
}
document.addEventListener("DOMContentLoaded", iniciarCuentaRegresiva);

// ==========================
// 🔹 MODO OSCURO - BOTÓN FLOTANTE CON CAMBIO DE CUBOS
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    const btnModo = document.getElementById("modoOscuro");

    // Función para actualizar los colores de los cubos flotantes dinámicamente
    function actualizarColoresCubos() {
        const cubos = document.querySelectorAll(".cube");
        if (document.body.classList.contains("dark-mode")) {
            cubos.forEach(cubo => {
                cubo.style.background = "rgba(255, 255, 255, 0.7)"; // Blanco translúcido
            });
        } else {
            cubos.forEach(cubo => {
                cubo.style.background = "rgba(255, 255, 255, 1)"; // Blanco puro
            });
        }
    }


    // Verificar almacenamiento local para recordar preferencia
    if (localStorage.getItem("modoOscuro") === "true") {
        document.body.classList.add("dark-mode");
        btnModo.innerText = "☀️";
        actualizarColoresCubos(); // Cambiar colores al cargar la página
    }

    btnModo.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const esOscuro = document.body.classList.contains("dark-mode");
        localStorage.setItem("modoOscuro", esOscuro);
        btnModo.innerText = esOscuro ? "☀️" : "🌙";
        actualizarColoresCubos(); // Aplicar cambios de color dinámicamente
    });
});


// ==========================
// 🔹 SLIDER DE IMÁGENES (Bootstrap)
// ==========================
document.addEventListener("DOMContentLoaded", function () {
    new bootstrap.Carousel(document.querySelector("#carouselExampleIndicators"), {
        interval: 3000, // Cambia cada 3 segundos
        ride: "carousel"
    });
});


// ==========================
// 🔹 CUBOS INICIO
// ==========================

// Aplicar efecto de fade-in en elementos con clase 'fade-in'
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => {
        el.classList.add("appear");
    });
});

// Generar animación de cubos flotantes en el fondo
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("cube-animation");

    for (let i = 0; i < 30; i++) { // 30 cubos flotando
        let cube = document.createElement("div");
        cube.classList.add("cube");
        cube.style.left = `${Math.random() * 100}%`;
        cube.style.top = `${Math.random() * 100}%`;
        cube.style.animationDuration = `${Math.random() * 4 + 2}s`;
        container.appendChild(cube);
    }
});

// ==========================
// 🔹 ANIMACIÓN CARDS
// ==========================

document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Agrega la clase cuando es visible
            }
        });
    }, { threshold: 0.3 }); // Se activa cuando el 30% de la tarjeta es visible

    tarjetas.forEach(tarjeta => {
        observer.observe(tarjeta);
    });
});


