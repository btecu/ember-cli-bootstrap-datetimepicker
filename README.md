# ember-cli-bootstrap-datetimepicker

Date and time picker addon based on bootstrap.
It uses [bootstrap-datetimepicker](https://github.com/Eonasdan/bootstrap-datetimepicker) and [moment.js](https://github.com/jasonmit/ember-cli-moment-shim).


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

Fired when the date is changed



### Available options

#### date

Default: `false`

Accepts: `date`, `moment`, `string`

```handlebars
{{bs-datetimepicker date=myDate}}
```

Sets the picker date/time



#### focusOnShow

Default: `true`

Accepts: `boolean`

```handlebars
{{bs-datetimepicker date=myDate focusOnShow=false}}
```

If `false`, the textbox will not be given focus when the picker is shown



#### format

Default: `false`

Accepts: `strint`

```handlebars
{{bs-datetimepicker date=myDate format='MM/DD/YYYY'}}
```

See [momentjs'](http://momentjs.com/docs/#/displaying/format/) docs for valid formats. Format also dictates what components are shown, e.g. `MM/dd/YYYY` will not display the time picker.



#### maxDate

Default: `false`

Accepts: `date`, `moment`, `string`

```handlebars
{{bs-datetimepicker date=myDate maxDate=myMaxDate}}
```

Prevents date/time selections after this date



#### minDate

Default: `false`

Accepts: `date`, `moment`, `string`

```handlebars
{{bs-datetimepicker date=myDate minDate=myMinDate}}
```

Prevents date/time selections before this date



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
Clicking the *Close* button will call `hide()`



#### showTodayButton

Default: `false`

Accepts: `boolean`

```handlebars
{{bs-datetimepicker date=myDate showTodayButton=true}}
```

Show the *Today* button in the icon toolbar.
Clicking the *Today* button will set the calendar view and set the date to `now`.



#### viewMode

Default: `days`

Accepts: 'years', 'months', 'days'

```handlebars
{{bs-datetimepicker date=myDate viewMode=false}}
```

The default view to display when the picker is shown.
*Note:* To limit the picker to selecting, for instance the year and month, use format: `MM/YYYY`



## License

[MIT License](https://github.com/btecu/ember-cli-bootstrap-datetimepicker/blob/master/LICENSE.md)
