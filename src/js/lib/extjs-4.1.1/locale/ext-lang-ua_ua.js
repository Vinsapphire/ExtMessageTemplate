/**
 * Ukrainian translations for ExtJS (UTF-8 encoding)
 *
 * Original translation by zlatko
 * 3 October 2007
 *
 * Updated by dev.ashevchuk@gmail.com
 * 01.09.2009
 */
Ext.onReady(function() {
    var cm = Ext.ClassManager,
        exists = Ext.Function.bind(cm.get, cm);

    if (Ext.Updater) {
        Ext.Updater.defaults.indicatorText = '<div class="loading-indicator">Завантаження...</div>';
    }

    Ext.define("Ext.locale.ukr.view.View", {
        override: "Ext.view.View",
        emptyText: "<Порожньо>"
    });

    Ext.define("Ext.locale.ukr.grid.Panel", {
        override: "Ext.grid.Panel",
        ddText: "{0} обраних рядків"
    });

    Ext.define("Ext.locale.ukr.TabPanelItem", {
        override: "Ext.TabPanelItem",
        closeText: "Закрити цю вкладку"
    });

    Ext.define("Ext.locale.ukr.form.field.Base", {
        override: "Ext.form.field.Base",
        invalidText: "Хибне значення"
    });

    // changing the msg text below will affect the LoadMask
    Ext.define("Ext.locale.ukr.view.AbstractView", {
        override: "Ext.view.AbstractView",
        msg: "Завантаження..."
    });

    if (Ext.Date) {
        Ext.Date.monthNames = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
		
		// custom translation
		Ext.Date.shortMonthNames = ["Січ", "Лют", "Бер", "Квіт", "Трав", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Груд"];
		
		// custom translation
		Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.shortMonthNames[month];
        };
		
		// custom translation
		Ext.Date.monthNumbers = {
            'Січ': 0,
            'Лют': 1,
            'Бер': 2,
            'Квіт': 3,
            'Трав': 4,
            'Чер': 5,
            'Лип': 6,
            'Сер': 7,
            'Вер': 8,
            'Жов': 9,
            'Лис': 10,
            'Груд': 11
        };

		// custom translation
        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };
		
        Ext.Date.dayNames = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота"];
		
		// custom translation
		Ext.Date.getShortDayName = function(day) {
            return Ext.Date.dayNames[day].substring(0, 3);
        };
    }

    if (Ext.MessageBox) {
        Ext.MessageBox.buttonText = {
            ok: "OK",
            cancel: "Відміна",
            yes: "Так",
            no: "Ні"
        };
    }

    if (exists('Ext.util.Format')) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u20b4',
            // Ukranian Hryvnia
            dateFormat: 'd.m.Y'
        });
    }

    Ext.define("Ext.locale.ukr.picker.Date", {
        override: "Ext.picker.Date",
        todayText: "Сьогодні",
        minText: "Ця дата меньша за мінімальну допустиму дату",
        maxText: "Ця дата більша за максимальну допустиму дату",
        disabledDaysText: "",
        disabledDatesText: "",
        monthNames: Ext.Date.monthNames,
        dayNames: Ext.Date.dayNames,
        nextText: 'Наступний місяць (Control+Вправо)',
        prevText: 'Попередній місяць (Control+Вліво)',
        monthYearText: 'Вибір місяця (Control+Вверх/Вниз для вибору року)',
        todayTip: "{0} (Пробіл)",
        format: "d.m.Y",
        startDay: 1
    });

    Ext.define("Ext.locale.ukr.picker.Month", {
        override: "Ext.picker.Month",
        okText: "&#160;OK&#160;",
        cancelText: "Відміна"
    });

    Ext.define("Ext.locale.ukr.toolbar.Paging", {
        override: "Ext.PagingToolbar",
        beforePageText: "Сторінка",
        afterPageText: "з {0}",
        firstText: "Перша сторінка",
        prevText: "Попередня сторінка",
        nextText: "Наступна сторінка",
        lastText: "Остання сторінка",
        refreshText: "Освіжити",
        displayMsg: "Відображення записів з {0} по {1}, всього {2}",
        emptyMsg: 'Дані для відображення відсутні'
    });

    Ext.define("Ext.locale.ukr.form.field.Text", {
        override: "Ext.form.field.Text",
        minLengthText: "Мінімальна довжина цього поля {0}",
        maxLengthText: "Максимальна довжина цього поля {0}",
        blankText: "Це поле є обов’язковим для заповнення",
        regexText: "",
        emptyText: null
    });

    Ext.define("Ext.locale.ukr.form.field.Number", {
        override: "Ext.form.field.Number",
        minText: "Значення у цьому полі не може бути меньше {0}",
        maxText: "Значення у цьому полі не може бути більше {0}",
        nanText: "{0} не є числом"
    });

    Ext.define("Ext.locale.ukr.form.field.Date", {
        override: "Ext.form.field.Date",
        disabledDaysText: "Не доступно",
        disabledDatesText: "Не доступно",
        minText: "Дата у цьому полі повинна бути більша {0}",
        maxText: "Дата у цьому полі повинна бути меньша {0}",
        invalidText: "{0} хибна дата - дата повинна бути вказана у форматі {1}",
        format: "d.m.Y",
		altFormats: "d.m.y|d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
    });

    Ext.define("Ext.locale.ukr.form.field.ComboBox", {
        override: "Ext.form.field.ComboBox",
        valueNotFoundText: undefined
    }, function() {
        Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
            loadingText: "Завантаження..."
        });
    });

    if (exists('Ext.form.field.VTypes')) {
        Ext.apply(Ext.form.field.VTypes, {
            emailText: 'Це поле повинно містити адресу електронної пошти у форматі "user@example.com"',
            urlText: 'Це поле повинно містити URL у форматі "http:/' + '/www.example.com"',
            alphaText: 'Це поле повинно містити виключно латинські літери та символ підкреслення "_"',
            alphanumText: 'Це поле повинно містити виключно латинські літери, цифри та символ підкреслення "_"'
        });
    }

    Ext.define("Ext.locale.ukr.form.field.HtmlEditor", {
        override: "Ext.form.field.HtmlEditor",
        createLinkText: 'Будь-ласка введіть адресу:'
    }, function() {
        Ext.apply(Ext.form.field.HtmlEditor.prototype, {
            buttonTips: {
                bold: {
                    title: 'Напівжирний (Ctrl+B)',
                    text: 'Зробити напівжирним виділений текст.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                italic: {
                    title: 'Курсив (Ctrl+I)',
                    text: 'Зробити курсивом виділений текст.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                underline: {
                    title: 'Підкреслений (Ctrl+U)',
                    text: 'Зробити підкресленим виділений текст.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                increasefontsize: {
                    title: 'Збільшити розмір',
                    text: 'Збільшити розмір шрифта.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                decreasefontsize: {
                    title: 'Зменьшити розмір',
                    text: 'Зменьшити розмір шрифта.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                backcolor: {
                    title: 'Заливка',
                    text: 'Змінити колір фону для виділеного тексту або абзацу.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                forecolor: {
                    title: 'Колір тексту',
                    text: 'Змінити колір виділеного тексту або абзацу.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                justifyleft: {
                    title: 'Вирівняти текст по лівому полю',
                    text: 'Вирівнювання тексту по лівому полю.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                justifycenter: {
                    title: 'Вирівняти текст по центру',
                    text: 'Вирівнювання тексту по центру.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                justifyright: {
                    title: 'Вирівняти текст по правому полю',
                    text: 'Вирівнювання тексту по правому полю.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                insertunorderedlist: {
                    title: 'Маркери',
                    text: 'Почати маркований список.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                insertorderedlist: {
                    title: 'Нумерація',
                    text: 'Почати нумернований список.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                createlink: {
                    title: 'Вставити гіперпосилання',
                    text: 'Створення посилання із виділеного тексту.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                sourceedit: {
                    title: 'Джерельний код',
                    text: 'Режим редагування джерельного коду.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                }
            }
        });
    });
	
	// custom translation
	Ext.define("Ext.locale.ru.form.Basic", {
        override: "Ext.form.Basic",
        waitTitle: "Зачекайте будь-ласка..."
    });

    Ext.define("Ext.locale.ukr.grid.header.Container", {
        override: "Ext.grid.header.Container",
        sortAscText: "Сортувати по зростанню",
        sortDescText: "Сортувати по спаданню",
        lockText: "Закріпити стовпець",
        unlockText: "Відкріпити стовпець",
        columnsText: "Стовпці"
    });
	
	// custom translation
    Ext.define("Ext.locale.ru.grid.feature.Grouping", {
        override: "Ext.grid.feature.Grouping",
        emptyGroupText: '(Порожньо)',
        groupByText: 'Групувати за цим полем',
        showGroupsText: 'Відображати по групам'
    });

    Ext.define("Ext.locale.ukr.grid.PropertyColumnModel", {
        override: "Ext.grid.PropertyColumnModel",
        nameText: "Назва",
        valueText: "Значення",
        dateFormat: "j.m.Y"
    });
	
	// custom translation
	Ext.define("Ext.locale.ru.grid.RowEditor", {
        override: "Ext.grid.RowEditor",
		saveBtnText   : "Зберегти",
		cancelBtnText  : "Відмінити"
	});

	// custom translation
    Ext.define("Ext.locale.ru.SplitLayoutRegion", {
        override: "Ext.SplitLayoutRegion",
        splitTip: "Тягніть для зміни розміру.",
        collapsibleSplitTip: "Тягніть для зміни розміру. Подвійне поклацування сховає панель."
    });

});
