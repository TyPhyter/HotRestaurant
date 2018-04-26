$(document).ready(function(){
    $a = $('a');

    $a.on('click', function(){
        //make a GET request for the document in the hash
        $this = $(this);
        console.log($this.prop('hash'));
    });
});