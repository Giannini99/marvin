function meuNome(nome)  {
    var nick = nome.nome
    var pmai = nick.substring(0,1);
    var prm = pmai.toUpperCase();
    var fmin = nick.substring(1,nick.length);
    var frm = fmin.toLowerCase();
    return prm+frm
}
