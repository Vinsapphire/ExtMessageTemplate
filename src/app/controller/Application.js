/**
 * Контроллер приложения
 * 
 */
(function(){
	
	var className = 'DelfitCRM.controller.Application';
	
	var classConfig = {
		extend: 'Ext.app.Controller',
	

		requires: [
			'Ext.ux.Notification',
		],
		
		
		models: [

		],

		stores: [
			
		],

		views: [
			
		],


		refs: [
			{
				selector: 'viewport[id=mainViewport] panel[id=mainNavagation]',
				ref: 'mainNavagation'
			},
			{
				selector: 'viewport[id=mainViewport] panel[id=mainNavagation] button[name=currentUserInfo]',
				ref: 'currentUserInfoButton'
			},
			{
				selector: 'viewport[id=mainViewport] panel[id=mainNavagation] hidden[name=CurrentUserID]',
				ref: 'currentUserIDField'
			},
			{
				selector: 'viewport[id=mainViewport] panel[id="AppMessagePanel"] grid[name="messageGrid"]',
				ref: 'messageGrid'
			}
		],
		
		
		

		/**
		 * Инициализация действий контроллера
		 * 
		 */
		init: function() {
			this.control({
				'viewport[id=mainViewport] panel[id=mainNavagation]': {
					beforerender: this.onLoadTreeNavPanel
				},
				'viewport[id=mainViewport] panel[id="AppMessagePanel"]': {
					afterrender: this.actionIndex
				},
				
				'viewport[id=mainViewport] panel[id="AppMessagePanel"] button[action="delete"]': {
					click: this.deleteSelectedRecord
				},
				'viewport[id=mainViewport] panel[id="AppMessagePanel"] button[action="clear"]': {
					click: this.clearMessages
				},
			});
			
		},
		
		actionIndex: function() {
			var record = {
				'checked': false,
				'header': 'Message',
				'name': 'new message'
			};
			var grid = this.getMessageGrid();
			console.log(grid);
			
			setInterval(function(){
				grid.store.insert(0, record);
				
				grid.getView().refresh();
			}, 10000);
		},

		
		
		/**
		 * Загрузить информацию по текущему пользователю системы
		 * 
		 */
		onLoadTreeNavPanel: function() {
			// шаблон для отображения имени текущего пользователя
			var currentUserInfoButtonTpl = new Ext.XTemplate( 
				'<span class="current_user_login">{userLogin}</span>'
			);
			
			// шаблон для хинта информации по текущему пользователю
			var currentUserInfoTooltipTpl = new Ext.XTemplate( 
				'<span> ' + 'FullName'  + ': <span class="bold" >{userFullName}</span><br />',
				'<span> ' + 'RoleName' + ': <span class="bold" >{currentRoleName}</span><br />',
				'<tpl if="currentOrganizationName">',
					'<currentOrganizationName> ' + 'user', 'OrganizationName' + ': <span class="bold" >{currentOrganizationName}</span>',
				'</tpl>'
			);
		},
		
		deleteSelectedRecord: function() {
			var grid = this.getMessageGrid();
			var record = grid.getSelectionModel().getSelection()[0];
			grid.store.remove(record);
			grid.getView().refresh();
		},
		
		clearMessages: function() {
			var grid = this.getMessageGrid();
			items = grid.store.data.items;
			for( var record in grid.store.data.items ) {
				console.log(items[record].data.checked);
			}
		}
	};
	
	
	Ext.define( className, classConfig );
})();
