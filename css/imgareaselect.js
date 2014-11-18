directive('imgAreaSelect', function() {
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