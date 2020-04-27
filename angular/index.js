var app = angular.module("myApp",["zhiling","fuwu","ui.router",'age']);
app.controller("myCtl",function ($scope,data,$rootScope) {
	$scope.name = "张三"
	$scope.data = data;
	$rootScope.data = data;
	$scope.max = 20;
	$scope.age = 24;
	$scope.items = [
		{id:'0',name:'首页',dataHref:'home'},
		{id:'1',name:'商品',dataHref:'shangpin'},
		{id:'2',name:'商家',dataHref:'shangjia'},
		{id:'3',name:'品牌',dataHref:'pinpai'}
	];
	$scope.activeNav = [];
	
	$scope.nav = function (item) {
		$scope.activeNav.push(item);
		data.nav = $scope.activeNav;
	}
})
app.controller("InnerCtl",function ($scope,$rootScope) {
	$scope.max = 20;
	console.log($rootScope)
})
app.controller("testCtl",function ($scope) {
	$scope.userName = "lisi"
})
app.controller('shangpinCtl',function ($scope,$stateParams) {
	$scope.id = $stateParams.id;
	console.log($stateParams)
})
app.controller('pinpaiCtl',function ($scope) {
	$scope.data = {
		pinpai:"三星"
	};
})
