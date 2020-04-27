angular.module("zhiling",[]).directive("fontColor",function () {
	return {
		restrict:"A",
		link:function ($scope,$element,$attrs) {
			angular.element($element).css("color","red");
		}
	}
})

angular.module("age",[]).directive("userAge",function () {
	return {
		restrict:"E",
		socpe:{
			age:'@'
		},
		template:'<span>{{age}}</span>',
		link:function($scope,$element,$attrs){
			
		},
		controller:function($scope,$element){
			
		},
		replace:true
	}
})