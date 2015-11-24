var myapp = angular.module('myapp', [])


myapp.controller('SlidesController', function($scope){
	$scope.id =0;
	$scope.removeid = 0;
	$scope.slide = [

	];

	console.log('this', $scope.slide)

	//bare min we would need to add slides. 


	$scope.addSlide = function(){
		$scope.id++;
		var total = $scope.id + $scope.removeid
		$scope.slide.push({id: total, title: $scope.title, content: $scope.content});

		console.log('this is a slide', $scope.id);
		$scope.title = '';
		$scope.content = '';

	};

	$scope.editSlide = function(id){
		var index = selectId(id);
		var item = $scope.slide[index]
		$scope.title = item.title;
		$scope.content = item.content;

	}

	$scope.updateSlide = function(){
		var index = selectId($scope.id)
		$scope.slide[index].title = $scope.title;
		$scope.slide[index].content = $scope.content;
	}

	$scope.deleteSlide = function(id){
		index = selectId(id);
		var store = $scope.slide[$scope.removeid]
		$scope.slide.splice(index,1);
		$scope.removeid++;
		$scope.id--;

	};

	function selectId(id) {
		for(var i=0; i< $scope.slide.length; i++){
				console.log('this was selected', i)
			if($scope.slide[i].id === id){
				return i;
			}
		}
	};
	/*
	now we need to talk about going all out and adding functionality to our app. remember in the long run we are going to want to 
	make this have the ability to upload pictures and all sorts of wonderful things
	and i promise if you give me a moment ill help you get there. 

	so lets think of some functions that we can add to our SlidesController. 
	addSlides, 
	automatically index slides
	edit a slide
	update the edit slide
	select a slide by id
	delete a slide

	*/



});