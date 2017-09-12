$(document).ready(function(){

	$(".read-less").hide();
	$(".details").hide();

	$(".read-more").click(readMore);
	$(".read-less").click(readLess);


	function readMore(){
		$(this).next().slideDown();
		$(this).hide();
		$(".read-less").show();
		event.preventDefault();
	};

	function readLess(){
		$(this).parent().slideUp();
		$(".read-more").show();
		event.preventDefault();
	}
});