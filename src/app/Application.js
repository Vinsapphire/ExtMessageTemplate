Ext.namespace( 'DelfitCRM' );


/**
 * Главное приложение
 *
 */
Ext.define( 'DelfitCRM.Application', {
	// Ext configs section
	// --------------------
	extend: 'Ext.ux.app.RoutedApplication',
	name: 'DelfitCRM',
	
	controllers: [
		'Application'
	],
	
	requires: [
		
		// require views
		'DelfitCRM.view.AppContentPanel',
		'DelfitCRM.view.AppMessagePanel',
		'DelfitCRM.view.AppNavigationPanel',
		
		'Ext.container.Viewport',
		'Ext.layout.container.Border',
		'Ext.MessageBox',
		'Ext.tip.QuickTipManager'
	],

	/**
	 * Инициализирует интерфейс главного приложения.
	 * Локализация должна быть загружена ДО этого.
	 */
	initInterface: function() {
		var appContentPanel = Ext.create( 'DelfitCRM.view.AppContentPanel' );
		var appNavigationPanel = Ext.create( 'DelfitCRM.view.AppNavigationPanel' );
		var appMessagePanel = Ext.create( 'DelfitCRM.view.AppMessagePanel' );
		
		
		// create main viewport
		var mainViewport = Ext.create( 'Ext.container.Viewport', {
			controller: this,
			
			id: 'mainViewport',
			
			layout: {
				type: 'border',
				
				panelCollapseAnimate: false
			},
			
			title: 'DelfitCRM',
			
			items: [ 
				appNavigationPanel,
				appMessagePanel,
				appContentPanel
			]
		});
		
		
		// Get a reference to main TabPanel.  This is where top-level controllers will render themselves.
		// eg: this.render("workspace", this.getArtistsIndexView());
		// Think of it as a "render target".
		var workspace = mainViewport.down( 'container[region=center]' );						
		this.addLayout( 'moduleWorkspace', workspace );
		
		
		// set init flag
		DelfitCRM.isInitialized = true;		
	},
	
	
	/**
	 * Установить заголовок окна
	 * 
	 * @param {String} title  текст заголовка окна 
	 */
	setTitle: function( title ) {
		var newWindowTitle = '';		
		
		// использовать заголовок окна из параметра
		if( typeof title != 'undefined' ) {
			newWindowTitle += title;
		}
		
		// использовать заголовок контроллера если параметр теста заголовка окна не определен
		if( typeof this.controller.title != 'undefined' && newWindowTitle == '' ) {
			newWindowTitle += this.controller.title;
		}
		
		// использовать название приложения
		newWindowTitle += ': ' + this.name;
		
		
		
		
		// установить заголовок окна
		document.title = newWindowTitle;
	},
	
	
	
	
	/**
	 * On application start
	 */
	launch: function() {
		// инициализировать интерфейс
		this.initInterface();	
	}	
});
