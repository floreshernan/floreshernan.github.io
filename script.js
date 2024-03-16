$(document).ready(function(){
    // Función para mostrar u ocultar menú responsive al hacer clic en el icono de hamburguesa
    $('.menu-icon').click(function(){
        $('.menu-items').slideToggle(); // Alternar la visibilidad del menú al hacer clic
    });

    // Función para volver arriba
    $(window).scroll(function(){
        if ($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    // Función para desplazarse suavemente hacia arriba al hacer clic en el botón de volver arriba
    $("#topBtn").click(function(){
        $('html, body').animate({scrollTop : 0}, 0);
    });
});
