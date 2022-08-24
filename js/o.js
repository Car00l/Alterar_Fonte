$(document).ready(function(){

    $('p').hide()

    $('#ready').click(function(e){
        e.preventDefault()
        
        $('p').toggle(1000, function(){
            let status = $(this).attr('data-status')
            $('#ready').empty()
            if(status == 1){
                $('#ready').append('Esconder resumo')
            }else{
                $(''''')
            }
        })
    })
})