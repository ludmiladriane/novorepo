$(document).ready(function(){
    $(document).ready(function() {
        // Efeito de zoom para as imagens e legendas ao passar o mouse
        $(".col-md-4 img, .col-md-4 .caption p").hover(
            function() {
                $(this).css({
                    "transform": "scale(1.1)", 
                    "transition": "transform 0.3s" 
                });
            },
            function() {
                $(this).css("transform", "scale(1)"); 
            }
        );

        // Efeito de zoom no botão ao passar o mouse
        $("button").hover(
            function() {
                $(this).css({
                    "transform": "scale(1.2)", 
                    "transition": "transform 0.3s"
                });
            },
            function() {
                $(this).css("transform", "scale(1)"); 
            }
        );

        // Função para voltar ao topo da página
        $('#b2').click(function() {
            $('html, body').animate({
                scrollTop: $('#p3').offset().top
            }, 2000, "swing");
        });

        // Função para mostrar/ocultar o texto sobre o Marcos ao clicar
        $('#p3').click(function() {
            $('#texto').toggle(1000);
        });
    });
})