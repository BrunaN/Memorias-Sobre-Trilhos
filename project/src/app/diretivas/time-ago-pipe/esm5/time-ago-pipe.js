import { Pipe, NgZone, ChangeDetectorRef } from '@angular/core';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimeAgoPipe = /** @class */ (function () {
    /**
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     */
    function TimeAgoPipe(changeDetectorRef, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TimeAgoPipe.prototype.transform = function (value) {
        var _this = this;
        this.removeTimer();
        var /** @type {?} */ d = new Date(value);
        var /** @type {?} */ now = new Date();
        var /** @type {?} */ seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        var /** @type {?} */ timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(function () {
            if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                    _this.ngZone.run(function () { return _this.changeDetectorRef.markForCheck(); });
                }, timeToUpdate);
            }
            return null;
        });
        var /** @type {?} */ minutes = Math.round(Math.abs(seconds / 60));
        var /** @type {?} */ hours = Math.round(Math.abs(minutes / 60));
        var /** @type {?} */ days = Math.round(Math.abs(hours / 24));
        var /** @type {?} */ months = Math.round(Math.abs(days / 30.416));
        var /** @type {?} */ years = Math.round(Math.abs(days / 365));
        if (Number.isNaN(seconds)) {
            return '';
        }
        else if (seconds <= 45) {
            return 'há alguns segundos';
        }
        else if (seconds <= 90) {
            return 'há um minuto';
        }
        else if (minutes <= 45) {
            return minutes + ' minutos atrás';
        }
        else if (minutes <= 90) {
            return 'há uma hora';
        }
        else if (hours <= 22) {
            return hours + ' horas atrás';
        }
        else if (hours <= 36) {
            return 'há um dia';
        }
        else if (days <= 25) {
            return days + ' dias atrás';
        }
        else if (days <= 45) {
            return 'há um mês';
        }
        else if (days <= 345) {
            return months + ' meses atrás';
        }
        else if (days <= 545) {
            return 'Há um ano';
        }
        else {
            // (days > 545)
            return years + ' anos atrás';
        }
    };
    /**
     * @return {?}
     */
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this.removeTimer();
    };
    /**
     * @return {?}
     */
    TimeAgoPipe.prototype.removeTimer = function () {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    };
    /**
     * @param {?} seconds
     * @return {?}
     */
    TimeAgoPipe.prototype.getSecondsUntilUpdate = function (seconds) {
        var /** @type {?} */ min = 60;
        var /** @type {?} */ hr = min * 60;
        var /** @type {?} */ day = hr * 24;
        if (seconds < min) {
            // less than 1 min, update every 2 secs
            return 2;
        }
        else if (seconds < hr) {
            // less than an hour, update every 30 secs
            return 30;
        }
        else if (seconds < day) {
            // less then a day, update every 5 mins
            return 300;
        }
        else {
            // update every hour
            return 3600;
        }
    };
    return TimeAgoPipe;
}());
TimeAgoPipe.decorators = [
    { type: Pipe, args: [{
                name: 'timeAgo',
                pure: false
            },] },
];
/** @nocollapse */
TimeAgoPipe.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
    { type: NgZone, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { TimeAgoPipe };
//# sourceMappingURL=time-ago-pipe.js.map
