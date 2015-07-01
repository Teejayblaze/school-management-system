app.directive('loginButton', [function(){
	return {
		restrict: 'E',
		templateUrl: 'buttontemplate.html',
		replace: true,
	};
}]);

app.directive('validateEmail', [function(){
	return {
		restrict: 'A',
		link: function( scope, elem, attr, controller ){
			scope.$watch('loginform.email.$dirty', function( newval, oldval ){
				if ( newval ){
					
					//validate_email( elem, scope.email )
				}
			});
		}
	}
}]);



var validate_email = function( email_input , email )
{
	var grp 		= email_input.closest('div.group');
	var is_valid 	= true;

	if( ! email ){
		grp.next('span').text('Email address field is required.').fadeIn(1500);
		is_valid = false;
	} 
	else if ( ! /\S+@\S+\.\S/.test( email ) ){
		grp.next('span').text('Email address is invalid.').fadeIn('slow');
		is_valid = false;
	}

	if ( is_valid ) grp.next('span').text('').fadeOut('fast');
}

var validate_password = function( password_input ){

	var password 	= password_input.val();
	var grp 		= password_input.closest('div.group');

	var is_valid = true;

	if ( ! /\S+/.test( password ) ){
		grp.next('span').text('Password field is required.').fadeIn(1500);
		is_valid = false;
	}

	return is_valid;
}