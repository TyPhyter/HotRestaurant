$(document).ready(function(){
    $a = $('a');

    $a.on('click', function(){
        //make a GET request for the document in the hash
        $this = $(this);
        var page = '/' + $this.prop('hash').split('#').join('');
        console.log(page);
        //$.get(page)
    });

    
});