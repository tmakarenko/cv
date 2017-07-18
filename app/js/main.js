$('.cv').on('click',function (){
	open('cv');
});

$('.fb').on('click',function (){
	open('fb');
});

$('.github').on('click',function (){
	open('gh');
});

function open(target){
	var elems = [];

	elems['cv']={
			show:'.container',
			hide:'.github, .fb' 
		}

	elems['fb']={
			show:'.protfolio',
			hide:'.cv, .github' 
		}
	elems['gh']={
			show:'.contact',
			hide:'.cv, .fb' 
		}
	
	$(elems[target].hide).animate({opacity:0},1500,
		function(){
			$(elems[target].hide).css({
				display:'none',
				visibility:'hidden'
			});
		}
	)

	$(elems[target].show).css({
		display:'block',
		visibility:'visible'
	});
	
	$('.container').animate({
		opacity: 1
	}, 1500);

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
		'margin-left': "45%",
		 width: '150px',
		 height: '150px'
		},
		3500
	);

	
};
