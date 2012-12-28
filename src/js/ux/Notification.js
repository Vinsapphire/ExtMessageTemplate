// create Ext user extensions namespace
Ext.namespace( 'Ext.ux' );


Ext.define( 'Ext.ux.Notification', {
	singleton : true,
	
	messageContent : '',
	
	createBox : function( t, s ) {
       return '<div class="msg"><h3>' + t + '</h3><p>' + s + '</p></div>';
    },
	
	msg : function( title, format ) {
		if( !this.messageContent ){
			this.messageContent = Ext.core.DomHelper.insertFirst( document.body, { id:'msg-div' }, true );
		}
		var s = Ext.String.format.apply( String, Array.prototype.slice.call( arguments, 1 ) );
		var m = Ext.core.DomHelper.append( this.messageContent, this.createBox( title, s ), true );
		m.hide();
		m.slideIn( 't' ).ghost( "t", { 
			delay: 1000, 
			remove: true
		});
	},
	
	init : function() {

	}
});
