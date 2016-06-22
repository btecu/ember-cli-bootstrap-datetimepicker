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

Accepts: `string`

```handlebars
{{bs-datetimepicker date=myDate format='MM/DD/YYYY'}}
```

See [momentjs'](http://momentjs.com/docs/#/displaying/format/) docs for valid formats. Format also dictates what components are shown, e.g. `MM/dd/YYYY` will not display the time picker.


#### iconClasses, iconText

Defaults: `glyphicon glyphicon-calendar`, [none]

Accepts: `string`

```handlebars
{{bs-datetimepicker iconClasses='material-icons' iconText='face'}}
```

`iconClasses` is used to modify the icon button to the right of the datetime picker input.  If `iconText` is set, 
the button will have a text label in addition to the icon.

#### icon[Up, Down, Date, Time, Next, Previous, Today, Clear, Close]

Defaults: Bootstrap Provided Glyphicons

Accepts: `string`

```
{{bs-datetimepicker 
  iconUp="fa fa-chevron-up"
  iconDown="fa fa-cheveron-down"
  iconDate="fa fa-calendar"
  iconTime="fa fa-clock-o"
  iconNext="fa fa-angle-double-right"
  iconPrevious="fa fa-angle-double-left"
  iconToday="fa fa-dot-circle-o"
  iconClear="fa fa-trash"
  iconClose="fa fa-times"
}}
```
The individual icons used in the calendar can be modified by setting the different icon classes.  The example above
shows how the default Boostrap glyphicons can be replaced with equivalent Font Awesome icons.
  
#### locale

Default: `moment.locale()`

Accepts: `string`, `moment.local('locale')`

```handlebars
{{bs-datetimepicker date=myDate locale='de'}}
```

Use the specified locale for text rendering



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



#### useCurrent

Default: `false`

Accepts: `bolean`, 'year', 'month', 'day', 'hour', 'minute'

```handlebars
{{bs-datetimepicker date=myDate useCurrent='day'}}
```

If the date is not set, the first time the widget opens will set the date
to current moment (if `true`). Granularity can be specified as a `string`.



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
