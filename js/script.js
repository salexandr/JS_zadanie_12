$(function(){
	
	$('.carousel-list').slider({
		over: 'black'
	});
	
	var html = $('#shablon').html();
	var info = {
		titleH1: 'Сенча Александр Владимирович',
		img: 'img/my-photo.jpg',
		titleH3: 'Студент курса Go for IT',
		titleUl: 'Хочу учить фронтенд, потому что:',
		points: 'arr',
		tel: '+380954041267',
		fb: 'https://www.facebook.com/profile.php?id=100012484811911',
		feedback: 'Сделаю все, чтобы стать профессиональным frontend разработчиком.'
	}
	
	arr = [		    
    	{pointLi: 'Мне нравится создавать сайты'},
		{pointLi: 'Это творческое ремесло'},
	    {pointLi: 'В IT сфере много инноваций'}
	]
	
	var content = tmpl(html, info);
	
	$('body').append(content);
	
});
