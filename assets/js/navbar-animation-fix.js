// Quando clicar para abrir o menu o banner vai pra baixo
$('#collapse-navbar').on('show.bs.collapse', function() {
	$('.topCasaFina-banner').css('transform', 'translate(-50%, 10%');

});

// Quando clicar para fechar o menu o banner vai pra cima
$('#collapse-navbar').on('hide.bs.collapse', function() {
	$('.topCasaFina-banner').css('transform', 'translate(-50%, -50%');
});