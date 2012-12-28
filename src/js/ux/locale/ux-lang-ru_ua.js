/**
 * Russian translation
 * By Alex Slobodiskiy (utf-8 encoding)
 * 22 October 2011
 */
Ext.onReady( function() {
	if( Ext.ux.grid ) {
		if( Ext.ux.grid.FiltersFeature ) {
			Ext.ux.grid.FiltersFeature.prototype.menuFilterText = 'Фильтры';
		}
		
		
		if( Ext.ux.grid.menu ) {
			if( Ext.ux.grid.menu.ListMenu ) {
				Ext.ux.grid.menu.ListMenu.prototype.loadingText = 'Загрузка...';
			}

			if( Ext.ux.grid.menu.RangeMenu ) {
				Ext.ux.grid.menu.RangeMenu.prototype.fieldLabels.gt = 'Больше';
				Ext.ux.grid.menu.RangeMenu.prototype.fieldLabels.lt = 'Меньше';
				Ext.ux.grid.menu.RangeMenu.prototype.fieldLabels.eq = 'Равно';

				Ext.ux.grid.menu.RangeMenu.prototype.menuItemCfgs.emptyText = 'Введите число...';
			}
		}
		
		
		if( Ext.ux.grid.filter ) {
			if( Ext.ux.grid.filter.BooleanFilter ) {
				Ext.ux.grid.filter.BooleanFilter.prototype.yesText = 'Да';
				Ext.ux.grid.filter.BooleanFilter.prototype.noText = 'Нет';
			}

			if( Ext.ux.grid.filter.DateFilter ) {
				Ext.ux.grid.filter.DateFilter.prototype.afterText = 'После';
				Ext.ux.grid.filter.DateFilter.prototype.beforeText = 'До';
				Ext.ux.grid.filter.DateFilter.prototype.onText = 'В';
			}
			
			if( Ext.ux.grid.filter.StringFilter ) {
				Ext.ux.grid.filter.StringFilter.prototype.emptyText = 'Введите текст фильтра...';
			}
		}
	}
});