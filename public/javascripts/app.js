var app = angular.module('sportzorg', []);

app.directive('webshopItem', function(){
	return {
		restrict : 'E',
		scope : {
			name: '@',
			price: '@'
		},
		template : "<div class=\"card\">"
			+"<img class=\"card-img-top\" data-src=\"#\" alt=\"card image top\"/>"
			+"<div class=\"card-block\">"
				+"<h4 class=\"card-title\">{{name}}</h4>"
				+"<p class=\"card-text\">{{price}}</p>"
				+"<a href=\"#\" class=\"btn btn-primary\">In winkelmand</a>"
			+"</div>"
		+"</div>"
	};

	return directive;
});

app.controller('Webshop', function($scope, $http, $sce){
	$scope.results = [];
	//$http.get('http://localhost:3000/webshop/api/items')
	$http.get('https://fast-cove-9481.herokuapp.com/webshop/api/items')
	.then(function(response){
		var items = response.data;
		$scope.items = items.data;
	});
	$scope.VoegToeAanWinkelmand = function(user, item){
		//$http.post('http://localhost:3000/webshop/api/shoppingcart/post', { userId : user, itemId : item })
		$http.post('https://fast-cove-9481.herokuapp.com/webshop/api/shoppingcart/post', { userId : user, itemId : item })
		.then(function(){
			$scope.message = "Item werd toegevoegd aan de winkelmand!";
		});
		$scope.message = "Item werd toegevoegd aan de winkelmand!";
	};

	//$http.get('http://localhost:3000/webshop/api/shoppingcart/get', {params: { userId : $scope.user }})
	//$http.post('https://fast-cove-9481.herokuapp.com/webshop/api/shoppingcart/get', {params: { userId : user }})
	//.then(function(response){
	//	var shoppingCartItems = response.data;
	//	$scope.shoppingCartItems = shoppingCartItems.data;
	//});
});