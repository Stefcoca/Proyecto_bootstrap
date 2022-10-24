$(function(){
    $("[data-bs-toggle='tooltip']").tooltip();
    $("[data-bs-toggle='popover']").popover();
    $('.carousel').carousel({Interval:2000});
    });
    $('#contacto').on('show.bs.modal', function(event) {
        console.log ("Mostrando Modal");
        $('#contactobtn').prop('disabled',true);
    });
    $('#contacto').on('hide.bs.modal', function(event) {
        console.log ("Ocultando Modal");
    });
    $('#contacto').on('shown.bs.modal', function(event) {
        console.log ("Modal visible");
    });
    $('#contacto').on('hidden.bs.modal', function(event) {
        console.log ("Modal Oculto");
        $('#contactobtn').prop('disabled',false);
    })