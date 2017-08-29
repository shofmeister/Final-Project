$(document).ready(function(){

	$(".read-less").hide();
	$(".details").hide();

	$(".read-more").click(readMore);


	function readMore(){
		$(this).next().slideDown();
		$(".read-more").hide();
		event.preventDefault();
	}
});