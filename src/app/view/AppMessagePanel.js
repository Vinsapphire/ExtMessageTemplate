(function(){
	
	var className = 'DelfitCRM.view.AppMessagePanel';
	
	var classConfig = {
		extend: 'Ext.panel.Panel',
		id: 'AppMessagePanel', 
		
		activeItem: 0,
		border: false,
		
		layout: 'card',
		region: 'east',
		collapsible: true,
		collapsed: true,
		width: 300,
		
		requires: [			
			'Ext.grid.plugin.CellEditing',
			'Ext.ux.CheckColumn',
			'Ext.ux.ComboFieldBox'
		],


		/**
		 * Инициализация компонента
		 *
		 */
		initComponent: function() {

			this.items = [
				{
					xtype: 'grid',
					name: 'messageGrid',
			
					tbar: [
					  { 
					  	xtype: 'button', 
					  	action: 'delete',
					  	text: 'Delete' 
					  },
					  {
					  	xtype: 'button',
					  	action: 'clear', 
					  	text: 'Clear' 
					  },
					  {
					  	xtype: 'combofieldbox',
					  	store: Ext.create('Ext.data.Store', {
							storeId:'simpsons',
							fields:['name'],
							data:{'items':[
								{ 'name': 'Etiam' },
								{ 'name': 'Vivamus amet' },
								{ 'name': 'Pellentesque'  },
								{ 'name': 'Phasellus'  },
								{ 'name': 'Inpretium.'  },
								{ 'name': 'Namecteturr.'  },
								{ 'name': 'Inie.'  },
								{ 'name': 'Aeneanictum.'  },
								{ 'name': 'PhasIn.'  }
							]},
							proxy: {
								type: 'memory',
								reader: {
									type: 'json',
									root: 'items'
								}
							}
						}),
						displayField: 'name',
						valueField: 'name',
						flex: 2,
						editable: false
					  }
					],
			
					columnLines: false,
			
					store: Ext.create('Ext.data.Store', {
						storeId:'simpsonsStore',
						fields:[ 
							{ name: 'checked' }, 
							{ name: 'type' }, 
							{ name: 'name' },
							{ name: 'header' },
							{ name: 'text', convert: function( value, record ){
									var text = [];
									text.push( record.data.name, record.data.header );
									return text;
								}
							}
						],
						data:{'items':[
							{ 'checked': false, 'header':'Order', 'name': 'Etiam at eros vel nisi viverra blandit vel in nunc. Aenean laoreet, erat id luctus dapibus, elit eros tristique dui, quis ultrices nibh augue.' },
							{ 'checked': false, 'header':'Order', 'name': 'Vivamus scelerisque luctus elit sit amet pretium. Praesent nec orci nibh, sed hendrerit turpis. Proin rutrum volutpat tempus. Cras a nisl diam, sit amet' },
							{ 'checked': false, 'header':'Order', 'name': 'Pellentesque non nisi enim, id tincidunt justo. Morbi sit amet luctus erat.'  },
							{ 'checked': false, 'header':'Responsible', 'name': 'Phasellus eget ullamcorper urna. Duis non orci tellus, sed lacinia ante. In.'  },
							{ 'checked': false, 'header':'Responsible', 'name': 'In venenatis luctus quam, vel fermentum augue pretium sit amet. Nunc pretium.'  },
							{ 'checked': false, 'header':'Responsible', 'name': 'Nam molestie pellentesque purus non convallis. Aenean et diam consectetur nunc ullamcorper.'  },
							{ 'checked': true, 'header':'Responsible', 'name': 'In interdum, libero vitae tincidunt dignissim, lacus lectus gravida augue, et molestie.'  },
							{ 'checked': true, 'header':'Responsible', 'name': 'Aenean vulputate commodo dolor at suscipit. Nullam nulla massa, porta vitae dictum.'  },
							{ 'checked': true, 'header':'Responsible', 'name': 'Phasellus eget ullamcorper urna. Duis non orci tellus, sed lacinia ante. In.'  }
						]},
						proxy: {
							type: 'memory',
							reader: {
								type: 'json',
								root: 'items'
							}
						}
					}),
					
					selModel: {
						mode: "MULTI"
					},
			
					columns: [
						{
							dataIndex: 'checked',
							width: 30,
							xtype: 'checkcolumn'
						},
						{ 
							text: 'Message',  
							dataIndex: 'text',
							flex: 1,
							
							renderer: function( value, metaData, record ) {
								var html = '';
								if ( record.data.checked == false ) {
									html += '<div style="border-bottom: 1px solid #000"><span style="color: #f00"><b>' + value[1] + '</b></span>' + ' (unreaded) ' + '</div>';
									html +='<div class="longTextGridCell"><b>';
									html += value[0];
									html += '</b></div>';
								}
								else {
									html += '<div style="border-bottom: 1px solid #000"><span style="color: #f00">' + value[1] + '</span></div>';
									html +='<div class="longTextGridCell">';
									html += value[0];
									html += '</div>';
								}
								
								return html;
							}
							
							
						}
					]
				}
			];
			
			this.callParent( arguments );
		}
	};
	
	
	Ext.define( className, classConfig );
})();
