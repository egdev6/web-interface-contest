$(document).ready(function(e){
	$(".link").mouseover(function(e){
		if($(window).width() >= 1024){
			var id = $(this).find('h1').text();
			console.log(id);
			$("#link-content").css({display:'block'});
			switch(id){
				case 'Website':
					$("#link-content").html("<p>Visita nuestra página web. Oferta de estudios, novedades, actividades...</p>");
				break;
				case 'Información':
					$("#link-content").html("<p>Infórmate sobre la oferta, requisitos y plazos de inscripción de nuestros ciclos.</p>");
				break;
				case 'Aula Virtual':
					$("#link-content").html("<p>Accede a nuestro aula virtual para estudiantes de semipresencial.</p>");
				break;
				case 'Moodle':
					$("#link-content").html("<p>Accede a nuestra plataforma Moodle para estudiantes de presencial.</p>");
				break;
			}
		}
	});

	$(".link").mouseout(function(e){
		$("#link-content").css({display:'none'});
	});
});