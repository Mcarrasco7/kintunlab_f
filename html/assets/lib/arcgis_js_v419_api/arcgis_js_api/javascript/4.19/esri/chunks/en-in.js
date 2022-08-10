// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.19/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers","./moment"],function(f,c,g){var b=c.createCommonjsModule(function(h,k){(function(d,a){"function"===typeof c.commonjsRequire?a(g.moment$1):a(d.moment)})(c.commonjsGlobal,function(d){return d.defineLocale("en-in",{months:"January February March April May June July August September October November December".split(" "),monthsShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
weekdaysShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "),weekdaysMin:"Su Mo Tu We Th Fr Sa".split(" "),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",
hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(a){var e=a%10;return a+(1===~~(a%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")},week:{dow:0,doy:6}})})});b=Object.freeze(Object.assign(Object.create(null),b,{"default":b}));f.enIn=b});