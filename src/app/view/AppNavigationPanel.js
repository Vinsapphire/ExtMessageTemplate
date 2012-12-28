/**
 * Отображение панели древовидной навигации главного приложения
 * 
 */
Ext.define( 'DelfitCRM.view.AppNavigationPanel', {
	extend: 'Ext.tree.Panel',
	
	id: 'mainNavagation',
	title: 'title',
	
	
	requires: [
		
		'Ext.data.NodeInterface',
		'Ext.data.NodeStore',
		'Ext.data.Tree',
		'Ext.data.TreeStore',
		'Ext.resizer.Splitter'
	],
	

	collapsible: true,
	minWidth: 200,
	region: 'west',
	split: true,
	width: 200,
	
	root: {
		expanded: true
	},
	rootVisible: false,
	
	tbar: [
		{
			xtype: 'hidden',
			name: 'CurrentUserID'
		},
		{
			xtype: 'button',
			name: 'currentUserInfo'
		},
		'->',
		{
			xtype: 'button',
			name: 'exitButton',
			text: 'Exit'
		}
	],
});
