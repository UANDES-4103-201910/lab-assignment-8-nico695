// Note: $(() => {}); is equivalent to $(document).ready(function(){})

function print() {
	$('.key').click(function(){
		console.log($(this).text())
		
	})
}

$(document).ready(function(){
	print();
	var writea = $('#ta');

	$('.key').click(function(){

		var keya = $(this).text();

		var b = document.getElementById('write').innerHTML += keya;
		
	})
	

  $('#1').click(function(){
    $('.key').toggle();
  });

});
