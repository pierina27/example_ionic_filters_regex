angular.module('CustomFilterModule', [])
       .filter( 'titlecase', function() {
return function( input ) {
	console.log(input.replace(/\w\S*/g));
       return input.replace(/\w\S*/g, 
       		function(txt){
       			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
       		});
}
});