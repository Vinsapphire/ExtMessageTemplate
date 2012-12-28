// создать namespace главного приложения
Ext.namespace( 'DelfitCRM' );


Ext.Loader.setConfig({
	enabled : true,
	paths : {
		'DelfitCRM' : 'app',
		'Ext.ux' : 'js/ux'
	}
});



// загрузить зависимости
Ext.require( 'Ext.ux.app.RoutedApplication' );
Ext.require( 'Ext.ux.router.Router' );
Ext.require( 'DelfitCRM.Application' );




Ext.onReady( function() {

	Ext.Router = Ext.create( 'Ext.ux.router.Router', {} );

	// Alias dispatch/redirectTo for convenient use throughout app.
	Ext.dispatch = Ext.Function.bind( Ext.Router.dispatch, Ext.Router );
	Ext.redirectTo = Ext.Function.bind( Ext.Router.redirectTo, Ext.Router );

	Ext.Router.draw( function( map ) {
		map.connect( ':module' );
		map.connect( ':module/:controller' );
		map.connect( ':module/:controller/:action' );
		map.connect( ':module/:controller/:action/:id' );
		
		//map.connect( 'user/role/edit/:id/user/:user', { module: 'User', controller: 'Role', action: 'Edit'} );
	});
	
	
	
	
	// создать приложение
	Ext.create( 'DelfitCRM.Application' );
}); 
