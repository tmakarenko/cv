$('.cv').on('click',function (){
	open('cv');
	/*$(this).on('click',function(){
		backButton('cv');
	})
	*/
});

var elems = [];

	elems['cv']={
			show:'.container',
			hide:'.github, .fb'
		}

	elems['fb']={
			show:'.portfolio',
			hide:'.cv, .github'
		}
	elems['gh']={
			show:'.contact',
			hide:'.cv, .fb'
		}


function open(target){



	$(elems[target].show).show();
	$('.main').animate({
			height: "100%",
			width: "99%",
			psoition: "inherit",
			top: "0",
			left: "0",
			margin: '10px'
		},
		3500
	);




	$('header').animate({
		width: "95%",
		height: "70px",
		'margin-left': "2.5%",
		'margin-top': "5%",
		},
		3500
	);

	$('.logo img').animate({
		 width: '150px',
		 height: '150px'
		},
		3500
	);

	$('.logo').animate({
		'margin-left': "43%",
		 width: '150px',
		 height: '150px'
		},
		3500
	);


};


function backButton(target){

	$('.main').animate({
			height: "150px",
			width: "250px",
			position: "relative",
			top: "200px",
			left: "40%",
			margin: '0'
		},
		1500
	);


	$('header').animate({
		width: "220px",
		height: "70px",
		'margin-left': "5%",
		'margin-top': "0"
		},
		1500
	);


	$('.logo img').animate({
		 width: '50px',
		 height: '50px'
		},
		1500
	);

	$('.logo').animate({
		'margin-left': "0",
		 width: '50px',
		 height: '50px'
		},
		1500
	);

	$('.container, .portfolio, .contact').animate({
		opacity: 0
	},1500,
		function(){
			$('.container, .portfolio, .contact').css({
				visibility:'hidden',
				display:'none'
			})
		}
	)


	function logoClick(){
		$('.container').show();

		$('.main').animate({
				height: "100%",
				width: "99%",
				psoition: "inherit",
				top: "0",
				left: "0",
				margin: '10px'
			},
			3500
		);




		$('header').animate({
			width: "95%",
			height: "70px",
			'margin-left': "2.5%",
			'margin-top': "5%",
			},
			3500
		);

		$('.logo img').animate({
			 width: '150px',
			 height: '150px'
			},
			3500
		);

		$('.logo').animate({
			'margin-left': "43%",
			 width: '150px',
			 height: '150px'
			},
			3500
		);


	};


	/*$('.cv, .fb, .gh').css({
				display:'block',
				visibility:'visible'
			});

	$('.cv, .fb, .gh').animate({opacity:1},1500)*/

}
