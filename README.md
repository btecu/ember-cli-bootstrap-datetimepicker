# ember-cli-bootstrap-datetimepicker

Date and time picker addon based on bootstrap.
It uses [bootstrap-datetimepicker](https://github.com/Eonasdan/bootstrap-datetimepicker) and [moment.js](https://github.com/jasonmit/ember-cli-moment-shim).


## Requirements
* Bootstrap 3
* Ember >= 1.13.0
* Ember CLI


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



#### disabledDates / enabledDates

Default: `false`

Accepts: `array` of [`date`, `moment`, `string`]

```handlebars
{{bs-datetimepicker disabledDates=disabledDates}}
{{bs-datetimepicker enabledDates=enabledDates}}
```

Disables / enables selection of dates in the array, e.g. holidays.



#### disabledHours / enabledHours

Default: `false`

Accepts: `array` of [`number`]

```handlebars
{{bs-datetimepicker date=myDate disabledHours=disabledHours}}
{{bs-datetimepicker date=myDate enabledHours=enabledHours}}
```

Disables / enables selection of hours in the array, affecting all days.



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



#### locale

Default: `moment.locale()`

Accepts: `string`, `moment.local('locale')`

```handlebars
{{bs-datetimepicker date=myDate locale='de'}}
```

Use the specified locale for text rendering.



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
*Note:* To limit the picker to selecting, for instance the year and month, use format: `MM/YYYY`



#### widgetPositioning

Default: `{ horizontal: 'auto', vertical: 'auto' }`

Accepts: `object` with one or all of the parameters above
(horizontal: 'auto', 'left', 'right' / vertical: 'auto', 'top', 'bottom')

```handlebars
{{bs-datetimepicker date=myDate widgetPositioning=widgetPositioning}}
```

Will position widget according to the parameters given in object.



## License

[MIT License](https://github.com/btecu/ember-cli-bootstrap-datetimepicker/blob/master/LICENSE.md)
