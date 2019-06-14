# ember-cli-bootstrap-datetimepicker

Date and time picker addon based on bootstrap.
It uses [bootstrap-datetimepicker](https://github.com/Eonasdan/bootstrap-datetimepicker) and [moment.js](https://github.com/jasonmit/ember-cli-moment-shim).


## Requirements
* Node.js 8, 10 or 12
* Bootstrap 3
* Ember 3+


## Installation

```bash
ember install ember-cli-bootstrap-datetimepicker
```


## Demo
For demonstration see [bootstrap-datetimepicker](http://eonasdan.github.io/bootstrap-datetimepicker/)


## Usage

Basic example:

```handlebars
{{bs-datetimepicker date=myDate}}
```


### Available actions

#### change

Returns: `date`, `null`

Fired when the date is changed.



### Available options

#### allowInputToggle

Default: `false`

Accepts: `boolean`

```handlebars
{{bs-datetimepicker date=myDate allowInputToggle=true}}
```

If `true`, the picker will show on textbox focus and icon click when used in a button group.

#### calendarWeeks

Default: `false`

Accepts: `boolean`

```handlebars
{{bs-datetimepicker date=myDate calendarWeeks=true}}
```

Shows the week of the year to the left of first day of the week.



#### date

Default: `null`

Accepts: `date`, `moment`, `string`

```handlebars
{{bs-datetimepicker date=myDate}}
```

Sets the picker date/time.



#### daysOfWeekDisabled

Default: []

Accepts: `array` of [`number`]

```handlebars
{{bs-datetimepicker daysOfWeekDisabled=daysOfWeekDisabled}}
```

Disables selection of days in the array, e.g. sundays.



### disabled

Default: `false`

Accepts: `boolean`

```handlebars
{{bs-datetimepicker disabled=disabled}}
```

Disables the input element.



#### disabledDates / enabledDates

Default: `false`

Accepts: `array` of [`date`, `moment`, `string`]

```handlebars
{{bs-datetimepicker disabledDates=disabledDates}}
{{bs-datetimepicker enabledDates=enabledDates}}
```

Disables / enables selection of dates in the array, e.g. holidays.

When updating the value, the array should be of type `date`.



#### disabledHours / enabledHours

Default: `false`

Accepts: `array` of [`number`]

```handlebars
{{bs-datetimepicker date=myDate disabledHours=disabledHours}}
{{bs-datetimepicker date=myDate enabledHours=enabledHours}}
```

Disables / enables selection of hours in the array, affecting all days.



#### extraFormats

Default: `false`

Accepts: `array` of [`string`]

```handlebars
{{bs-datetimepicker date=myDate extraFormats=extraFormats}}
```

Allows for several input formats to be valid. Accepts an array of valid input
moment format options.



#### focusOnShow

Default: `true`

Accepts: `boolean`

```handlebars
{{bs-datetimepicker date=myDate focusOnShow=false}}
```

If `false`, the textbox will not be given focus when the picker is shown.



#### format

Default: `false`

Accepts: `string`

```handlebars
{{bs-datetimepicker date=myDate format='MM/DD/YYYY'}}
```

See [momentjs'](http://momentjs.com/docs/#/displaying/format/) docs for valid formats. Format also dictates what components are shown, e.g. `MM/dd/YYYY` will not display the time picker.



#### icons

Defaults: `component defaults`

```js
'ember-cli-bootstrap-datetimepicker': {
  icons: {
    next: 'chevron right',
    previous: 'chevron left'
  }
}
```

Replaces icon classes globally.
Supported icons include `clear`, `close`, `date`, `down`, `next`, `previous`, `time`, `today` and `up`.
If inner html has to be set (Material Icons), use `::after` pseudo selector.

*Note:* When using only the time picker, pass `isTime=true` so that the correct icon is displayed.



#### inline

Defaults: `component defaults`

```handlebars
{{bs-datetimepicker inline=true}}
```


#### locale

Default: `moment.locale()`

Accepts: `string`, `moment.local('locale')`

```handlebars
{{bs-datetimepicker date=myDate locale='de'}}
```

Use the specified locale for text rendering.

*Note:* When using localization, add `includeLocales` to `config/environment.js`.

**Cherry pick locales (optimal)**

```js
moment: {
  includeLocales: ['de', 'fr']
}
```

**Include all locales**

```js
moment: {
  includeLocales: true
}
```



#### maxDate

Default: `false`

Accepts: `date`, `moment`, `string`

```handlebars
{{bs-datetimepicker date=myDate maxDate=myMaxDate}}
```

Prevents date/time selections after this date.



#### minDate

Default: `false`

Accepts: `date`, `moment`, `string`

```handlebars
{{bs-datetimepicker date=myDate minDate=myMinDate}}
```

Prevents date/time selections before this date.



#### openOnFocus

Default: `false`

Accepts: `boolean`

```handlebars
{{bs-datetimepicker date=myDate openOnFocus=true}}
```

Opens the picker on input focus.



#### showClear

Default: `false`

Accepts: `boolean`

```handlebars
{{bs-datetimepicker date=myDate showClear=true}}
```

Show the *Clear* button in the icon toolbar.
Clicking the *Clear* button will set the calendar to `null`.



#### showClose

Default: `false`

Accepts: `boolean`

```handlebars
{{bs-datetimepicker date=myDate showClose=true}}
```

Show the *Close* button in the icon toolbar.
Clicking the *Close* button will call `hide()`.



#### showTodayButton

Default: `false`

Accepts: `boolean`

```handlebars
{{bs-datetimepicker date=myDate showTodayButton=true}}
```

Show the *Today* button in the icon toolbar.
Clicking the *Today* button will set the calendar view and set the date to `now`.



#### sideBySide

Default: `false`

Accepts: `boolean`

```handlebars
{{bs-datetimepicker date=myDate sideBySide=true}}
```

Show calendar and time side by side.


#### timeZone

Default: `''`

Accepts: `string`

```handlebars
{{bs-datetimepicker date=myDate timeZone='Europe/Berlin'}}
```

Set timezone.


#### useCurrent

Default: `false`

Accepts: `boolean`, 'year', 'month', 'day', 'hour', 'minute'

```handlebars
{{bs-datetimepicker date=myDate useCurrent='day'}}
```

If the date is not set, the first time the widget opens will set the date
to current moment (if `true`). Granularity can be specified as a `string`.



#### viewDate

Default: `false`

Accepts: `date`, `moment`, `string`

```handlebars
{{bs-datetimepicker date=myDate viewDate=customDate}}
```

Pre-set the date / time, allowing to change default time from 12:00 AM.



#### viewMode

Default: `days`

Accepts: 'years', 'months', 'days'

```handlebars
{{bs-datetimepicker date=myDate viewMode=false}}
```

The default view to display when the picker is shown.
*Note:* To limit the picker to selecting, for instance the year and month, use format: `MM/YYYY`.

#### widgetParent

Default: `null`

Accepts: string or jQuery object

```handlebars
{{bs-datetimepicker date=myDate widgetParent='#an-element-id'}}
```

On picker show, places the widget at the identifier (string) or jQuery object if the element has css position: 'relative'.

#### widgetPositioning

Default: `{ horizontal: 'auto', vertical: 'auto' }`

Accepts: `object` with one or all of the parameters above
(horizontal: 'auto', 'left', 'right' / vertical: 'auto', 'top', 'bottom')

```handlebars
{{bs-datetimepicker date=myDate widgetPositioning=widgetPositioning}}
```

Will position widget according to the parameters given in object.

#### showIcon

Default: `true`

Accepts: `boolean`

```handlebars
{{bs-datetimepicker date=myDate showIcon=false}}
```

Show calendar or time icon after input.


## License

[MIT License](https://github.com/btecu/ember-cli-bootstrap-datetimepicker/blob/master/LICENSE.md)
