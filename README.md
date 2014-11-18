Usage:
Include these in header file:

	
	<script type="text/javascript" src="js/jquery.imgareaselect.js"></script>
	
	
	<link rel="stylesheet" type="text/css" href="css/imgareaselect-animated.css" />
	
	
	
	
	
	
	
include the directive:

.directive('imgAreaSelect', function() {
	return {
		restrict : 'EA',
		link : function(scope, element, attr) {

			$(element).imgAreaSelect({
				// aspectRatio: '1:1',
				handles : true,
				fadeSpeed : 200,
				onSelectChange : function(img, selection) {
					scope.$apply(function() {
						scope.preview(img, selection);
					});
				}
			});

		}
	};
})



controller:

.controller('imgAreaSelectController', function($scope, $stateParams, forms){

	$scope.preview = function(img, selection) {
		// console.log(selection);
		var photoWidth = img.width;

		var photoHeight = img.height;
		
	    if (!selection.width || !selection.height)
	        return;
	    
	    $scope.selection = selection;

	    var scaleX = 400 / selection.width;
	    var scaleY = 400 / selection.height;
	    
	    var ratio = Math.min(400 / selection.width, 400 / selection.height);
	    
	    $('#preview img').css({
	        width: photoWidth * ratio,
	        height: photoHeight * ratio,
	        marginLeft: -selection.x1 * ratio,
	        marginTop: -selection.y1 * ratio
	    });


		$('#preview').css({
	        width: ratio * selection.width ,
	        height: ratio * selection.height,
	    });
	    
	    
	    $('#photo').data('selection', selection);
	}
});