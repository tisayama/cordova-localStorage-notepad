$('#note').keyup(function() {
    var text = $('#note').val();
    window.localStorage.setItem('note', text);
});

var initText = window.localStorage.getItem('note');
$('#note').val(initText);