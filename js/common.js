$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	//$(".count_element").on("click", (function() {
	//	ga("send", "event", "goal", "goal");
	//	yaCounterXXXXXXXX.reachGoal("goal");
	//	return true;
	//}));

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
	$(".fancybox").click(function() {
		$(".fancybox").fancybox({
			maxWidth: 800,
			maxHeight: 600,
			fitToView: false,
			width: document.documentElement.clientWidth > 700 ? '80%' : '90%',
			height: document.documentElement.clientWidth > 700 ? '80%' : '50%',
			autoSize: false,
			closeClick: false,
			openEffect: 'fade',
			closeEffect: 'elastic',
			helpers: {
				title: {
					type: 'inside'
				}
			}
		});
	});

(function($){
   $(document).on('click', 'a[href^=#]', function () {
        $('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top - 117 }, 1000 );
        return false;
    });
})(jQuery);

});
	// Инициализация карты
	function initialize() {     
		var myLatlng = new google.maps.LatLng(51.154388, 71.441285);
		var myCenterMarker = new google.maps.LatLng(51.154310, 71.450293);
		var myOptions = {
			zoom: 15,
			center: myLatlng,
			disableDefaultUI: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

		var marker = new google.maps.Marker({
			position: myCenterMarker,
			map: map,
			icon: 'img/map_claster.png',
			title:"Catering service" 
		});

		// var marker = new google.maps.Marker({
		// 	position: myCenterMarker_2,
		// 	map: map,
		// 	icon: 'img/marker_2.png',
		// 	title:"Кирпичный завод" 
		// });
	}
	//Инициализация карты
	initialize();

	setInterval(function(){
		if(window.pageYOffset > 300){
			document.querySelector('#menu2').classList.remove('closed_menu');
			document.querySelector('#menu2').classList.add('opened_menu');
		}else{
			document.querySelector('#menu2').classList.add('closed_menu');
			document.querySelector('#menu2').classList.remove('opened_menu');
		}
	},200);

	var lang = [
	// Русский язык
		[
			// Заголовок
			'Позвоните нам',
			'Напишите нам',
			// Меню
			'Факты',
			'Услуги',
			'Кухня',
			'Отзывы',
			'Решения',
			'Контакты',
			//  Бокс с информацией
			'Организация и обслуживание выездных мероприятий в Астане',
			'На рынке Казахстана уже более 6 лет',
			'Организация мероприятий до 20 000 человек',
			'40 профессионалов управляющего состава',
			'Собственная фабрика кухонь',
			'Разнообразие блюд любой сложности',
			'Посмотрите видео',
			'узнайте почему мы лидеры в Астане',
			// Кнопка
			'Закажите мероприятие,',
			' дегустация в подарок ',
			// Наши услуги
			'Наши услуги',
			'Банкет на дому',
			'доставка от простых до заказных блюд прямо к праздничному столу в семьи, где чтят традиции домашних торжеств! Насладитесь всеми радостями застолья, не утомляясь готовкой.',

			'Кофе-брейк',
			'готовые решения для организации вкусных пауз на семинарах или мастер-классах. Широкий выбор закусок, сэндвичей, ароматной выпечки, а также напитков позволяет обслужить любое количество человек.',

			'Фуршет',
			'организация от официального делового вечера до изысканного события со сложными закусками, горячими блюдами и десертами на любой вкус настроит гостей на атмосферу, располагающую к свободному общению.',

			'Банкет',
			'проведение классического формата застолья в выбранном Вами месте с учетом всех пожеланий  по составлению особого меню,организации пространства зала, декорированию деталей, способных украсить только Ваш праздник.',

			'Гала-ужин',
			'изысканная форма имиджевого мероприятия, акцентом которого являются высокая кухня, индивидуальный сервис, аристократическая сервировка стола, подтверждающие особый статус события.',

			'VIP-обслуживание',
			'организация и проведение мероприятия закрытого формата по высоким стандартам для привилегированных гостей на природе или в условиях города.',

			'Аренда инвентаря',
			'предоставление мебели, посуды, текстиля, элементов декора, оборудования в большом количестве и широком ассортименте для Вашего события.',

			'Оформление мероприятий',
			'разработка комплексной индивидуальной концепции, предоставление пакетных предложений по оформлению мероприятия, а так же воплощение ее в жизнь.',

			'Организация шоу-программы',
			'создание неповторимого сценария Вашего торжества и удивительной атмосферы с учетом пожеланий, вкуса и предпочтений.',

			// Форма
			'Закажите мероприятие, дегустация в подарок',
			'Ваше имя',
			'Ваш телефон',
			'Отправить',

			// Фабрика кухонь
			'Фабрика кухонь',
			'Молекулярная кухня',
			'Кухни мира',
			'Авторская кухня',
			'Вегетарианская кухня',
			'Также вы можете выбрать любое блюдо',
			'по индивидуальному заказу',

			// Решения
			'Решения',
			'Гала-ужин для "Astana Invest Forum"',
			'Мероприятие на 350 персон с участием высокопоставленных гостей и иностранных экспертов.',

			'Фуршет в "Astana Opera"',
			'Мероприятие с участием иностранных гостей, меню которого составили закуски, десерты, а также дегустация вин.',

			'Фуршет на открытии развлекательного клуба',
			'Мероприятие на 300 персон, меню которого составили холодные и горячие закуски, десерты, а также заказное блюдо - запеченный целиком осетр.',

			'Частный банкет',
			'Мероприятие на 100 человек, меню которого составили 16 разработанных по индивидуальному заказу блюд, включая молекулярную кухню.',

			'Оформление торжественного мероприятия',
			'Согласно этикету и статусу события был подготовлен продуманный до мелочей декор, начиная от цвета и качества скатертей, заканчивая особо составленными букетами.',

			'Шоу-программа для ужина с иностранными гостями',
			'Предложение составили множество высокопрофессиональных артистов, выступающих по выверенному таймингу.',

			// Контакты
			'Астана, ул.Ташенова 1',
			'Время работы: с 10:00 до 20:00',
			'Остались вопросы? Закажите звонок',
			'Ваше имя',
			'Ваш телефон'
		],

	// Анлгийский язык
		[
			// Заголовок
			'Call us',
			'E-mail to',
			// Меню
			'Facts',
			'Services',
			'Cuisine',
			'Feedback',
			'Solutions',
			'Contacts',
			//  Бокс с информацией
			'Organization and services for outdoor events in Astana',
			'More than 6 years in Kazakhstan market',
			'Organization of events for more than 20 000 persons',
			'40 professional managerial employees',
			'Own Cuisine Factory',
			'Diversity of any complexity dishes',
			'Catering №1 in Astana',
			'We organize best events look',
			// Кнопка
			'Order an event,',
			'sampling as a gift',
			// Наши услуги
			'Services',
			'Banquet at home',
			'delivering any dishes, simple and complex, right to the festive table, for the families, who keep traditions of home celebrations! Enjoy all the fun of the celebration, without being bothered by cooking.',

			'Coffee-break',
			'off-the-shelf solutions for organizing tasty pauses at workshops or master classes. Great choice of appetizers, sandwiches, flavorful bakery and drinks allows serving any number of persons.',

			'Fourchette',
			'any event, from official business reception to exquisite event, with complex appetizers, hot dishes and desserts suited to every fancy will create an atmosphere of free conversation for your guests.',

			'Banquet',
			'arranging classical format of the festivity at any place of Your choice, taking into account all the wishes for special menu, space organization, decoration of details, which will brighten up your event.',

			'Gala-dinner',
			'exquisite form of image-making event, accented by haute-cuisine, individual service, aristocratic table setting, underlining special status of the event.',

			'VIP-servicing',
			'organizing and conducting closed events, with high standards, for privileged guests, outdoors or in the city.',

			'Renting accessories',
			'providing furniture, tableware, textile, decorative elements, equipment for Your event in large amounts and assortment.',

			'Event design',
			'developing complex individual concept, providing packages of proposals for decoration, and actual delivery.',

			'Setting up the show',
			'creating unique scenario and amazing atmosphere, considering Your wishes, taste and preferences.',

			// Форма
			'Order an event, sampling as a gift',
			'Name',
			'Phone number',
			'Submit',

			// Фабрика кухонь
			'Cuisine factory',
			'Molecular gastronomy',
			'World cuisines',
			'Original cuisine',
			'Vegetarian cuisine',
			'Also, You can order',
			'any made-to-measure dish',

			// Решения
			'Solutions',
			'Gala-dinner for "Astana Invest Forum"',
			'The event for 350 people with the participation of distinguished guests and foreign experts.',

			'Fourchette in the "Astana Opera"',
			'The event with the participation of foreign guests, the menu is made snacks, desserts, and wine tasting.',

			'Fourchette at the opening of the entertainment club',
			'The event for 300 people, the menu is made up of hot and cold appetizers, desserts, and a custom dish - whole baked sturgeon.',

			'Private banquet',
			'The event for 100 people, the menu is made up of 16 tailor-made courses, including molecular cuisine.',

			'Decoration of celebration',
			'According to etiquette and the status of the event it was prepared by the attention to detail the decor, from the color and quality tablecloths, ending special bouquets.',

			'Show for the dinner with foreign guests',
			'The offer is made up of highly professional set of artists performing on the exact timing.',

			// Контакты
			'1, Tashenov street, Astana',
			'Working hours: 10:00 - 20:00',
			'Any questions? Order a call',
			'Ваше имя',
			'Ваш телефон'
		]
	];

function change_lang(x, th) {
	//document.querySelector().textContent = lang[x][];
	document.querySelector('.menu-contact_number .light_din').textContent = lang[x][0];
	document.querySelector('#menu2 .menu-contact_number .light_din').textContent = lang[x][0];
	document.querySelector('.menu-contact_email .light_din').textContent = lang[x][1];
	document.querySelector('#menu2 .menu-contact_email .light_din').textContent = lang[x][1];
	document.querySelectorAll('#menu nav .nav-list')[0].textContent = lang[x][2];
	document.querySelectorAll('#menu2 nav .nav-list')[0].textContent = lang[x][2];
	document.querySelectorAll('#menu nav .nav-list')[1].textContent = lang[x][3];
	document.querySelectorAll('#menu2 nav .nav-list')[1].textContent = lang[x][3];
	document.querySelectorAll('#menu nav .nav-list')[2].textContent = lang[x][4];
	document.querySelectorAll('#menu2 nav .nav-list')[2].textContent = lang[x][4];
	document.querySelectorAll('#menu nav .nav-list')[3].textContent = lang[x][5];
	document.querySelectorAll('#menu2 nav .nav-list')[3].textContent = lang[x][5];
	document.querySelectorAll('#menu nav .nav-list')[4].textContent = lang[x][6];
	document.querySelectorAll('#menu2 nav .nav-list')[4].textContent = lang[x][6];
	document.querySelectorAll('#menu nav .nav-list')[5].textContent = lang[x][7];
	document.querySelectorAll('#menu2 nav .nav-list')[5].textContent = lang[x][7];
	document.querySelector('.main_page__text h3').textContent = lang[x][8];
	document.querySelectorAll('.main_page__text .list_item ul li')[0].textContent = lang[x][9];
	document.querySelectorAll('.main_page__text .list_item ul li')[1].textContent = lang[x][10];
	document.querySelectorAll('.main_page__text .list_item ul li')[2].textContent = lang[x][11];
	document.querySelectorAll('.main_page__text .list_item ul li')[3].textContent = lang[x][12];
	document.querySelectorAll('.main_page__text .list_item ul li')[4].textContent = lang[x][13];
	document.querySelectorAll('.main_page__text .video_play h3 span')[0].textContent = lang[x][14];
	document.querySelectorAll('.main_page__text .video_play h3 span')[1].textContent = lang[x][15];
	document.querySelectorAll('.main_page__text .button span')[0].textContent = lang[x][16];
	document.querySelectorAll('.main_page__text .button span')[1].textContent = lang[x][17];
	document.querySelector('#services h2').textContent = lang[x][18];
	document.querySelectorAll('#services .elem_serv h3')[0].textContent = lang[x][19];
	document.querySelectorAll('#services .elem_serv h4')[0].textContent = lang[x][19];
	document.querySelectorAll('#services .elem_serv p')[0].textContent = lang[x][20];

	document.querySelectorAll('#services .elem_serv h3')[1].textContent = lang[x][21];
	document.querySelectorAll('#services .elem_serv h4')[1].textContent = lang[x][21];
	document.querySelectorAll('#services .elem_serv p')[1].textContent = lang[x][22];

	document.querySelectorAll('#services .elem_serv h3')[2].textContent = lang[x][23];
	document.querySelectorAll('#services .elem_serv h4')[2].textContent = lang[x][23];
	document.querySelectorAll('#services .elem_serv p')[2].textContent = lang[x][24];
	
	document.querySelectorAll('#services .elem_serv h3')[3].textContent = lang[x][25];
	document.querySelectorAll('#services .elem_serv h4')[3].textContent = lang[x][25];
	document.querySelectorAll('#services .elem_serv p')[3].textContent = lang[x][26];
	
	document.querySelectorAll('#services .elem_serv h3')[4].textContent = lang[x][27];
	document.querySelectorAll('#services .elem_serv h4')[4].textContent = lang[x][27];
	document.querySelectorAll('#services .elem_serv p')[4].textContent = lang[x][28];
	
	document.querySelectorAll('#services .elem_serv h3')[5].textContent = lang[x][29];
	document.querySelectorAll('#services .elem_serv h4')[5].textContent = lang[x][29];
	document.querySelectorAll('#services .elem_serv p')[5].textContent = lang[x][30];
	
	document.querySelectorAll('#services .elem_serv h3')[6].textContent = lang[x][31];
	document.querySelectorAll('#services .elem_serv h4')[6].textContent = lang[x][31];
	document.querySelectorAll('#services .elem_serv p')[6].textContent = lang[x][32];
	
	document.querySelectorAll('#services .elem_serv h3')[7].textContent = lang[x][33];
	document.querySelectorAll('#services .elem_serv h4')[7].textContent = lang[x][33];
	document.querySelectorAll('#services .elem_serv p')[7].textContent = lang[x][34];
	
	document.querySelectorAll('#services .elem_serv h3')[8].textContent = lang[x][35];
	document.querySelectorAll('#services .elem_serv h4')[8].textContent = lang[x][35];
	document.querySelectorAll('#services .elem_serv p')[8].textContent = lang[x][36];

	document.querySelector('.header_form').textContent = lang[x][37];
	document.querySelector('#services form input[type="text"]').setAttribute('placeholder', lang[x][38]);
	document.querySelector('#services form input[type="tel"]').setAttribute('placeholder', lang[x][39]);
	document.querySelector('#services form button').textContent = lang[x][40];
	document.querySelector('#kitchen .content h2').textContent = lang[x][41];
	document.querySelectorAll('#kitchen .content .choice_kitch .choice_elem h6')[0].textContent = lang[x][42];
	document.querySelectorAll('#kitchen .content .choice_kitch .choice_elem h6')[1].textContent = lang[x][43];
	document.querySelectorAll('#kitchen .content .choice_kitch .choice_elem h6')[2].textContent = lang[x][44];
	document.querySelectorAll('#kitchen .content .choice_kitch .choice_elem h6')[3].textContent = lang[x][45];
	document.querySelectorAll('#kitchen .content h5 span')[0].textContent = lang[x][46];
	document.querySelectorAll('#kitchen .content h5 span')[1].textContent = lang[x][47];

	document.querySelector('#form h2').textContent = lang[x][37];
	document.querySelector('#form form input[type="text"]').setAttribute('placeholder', lang[x][38]);
	document.querySelector('#form form input[type="tel"]').setAttribute('placeholder', lang[x][39]);
	document.querySelector('#form form button').textContent = lang[x][40];

	document.querySelectorAll('#holidays .content h2')[0].textContent = lang[x][48];
	document.querySelectorAll('#holidays .content .holidays_elem .holidays_inner .head')[0].textContent = lang[x][49];
	document.querySelectorAll('#holidays .content .holidays_elem .holidays_inner p')[0].textContent = lang[x][50];

	document.querySelectorAll('#holidays .content .holidays_elem .holidays_inner .head')[1].textContent = lang[x][51];
	document.querySelectorAll('#holidays .content .holidays_elem .holidays_inner p')[1].textContent = lang[x][52];

	document.querySelectorAll('#holidays .content .holidays_elem .holidays_inner .head')[2].textContent = lang[x][53];
	document.querySelectorAll('#holidays .content .holidays_elem .holidays_inner p')[2].textContent = lang[x][54];

	document.querySelectorAll('#holidays .content .holidays_elem .holidays_inner .head')[3].textContent = lang[x][55];
	document.querySelectorAll('#holidays .content .holidays_elem .holidays_inner p')[3].textContent = lang[x][56];

	document.querySelectorAll('#holidays .content .holidays_elem .holidays_inner .head')[4].textContent = lang[x][57];
	document.querySelectorAll('#holidays .content .holidays_elem .holidays_inner p')[4].textContent = lang[x][58];

	document.querySelectorAll('#holidays .content .holidays_elem .holidays_inner .head')[5].textContent = lang[x][59];
	document.querySelectorAll('#holidays .content .holidays_elem .holidays_inner p')[5].textContent = lang[x][60];

	document.querySelectorAll('#maps .contact_map_text p span')[0].textContent = lang[x][61];
	document.querySelectorAll('#maps .contact_map_text p span')[1].textContent = lang[x][62];
	document.querySelector('#maps .content .contact_map .contact_map__header').textContent = lang[x][63];

	document.querySelectorAll('#maps form label span')[0].textContent = lang[x][38];
	document.querySelectorAll('#maps form label span')[1].textContent = lang[x][39];
	document.querySelector('#maps form button').textContent = lang[x][40];

	document.querySelector('.active_lang').removeAttribute('class');
	th.setAttribute('class', 'active_lang');
}

document.querySelectorAll('#menu nav .lang-list span')[0].addEventListener('click',function(){
	var self = this;
	change_lang(0, self);
});
document.querySelectorAll('#menu nav .lang-list span')[1].addEventListener('click',function(){
	var self = this;
	change_lang(1, self);
});