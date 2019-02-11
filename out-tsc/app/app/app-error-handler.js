import { Observable } from "rxjs/Observable";
import { HttpErrorResponse } from "@angular/common/http";
import 'rxjs/observable/throw';
var ErrorHandler = (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handlerError = function (error) {
        var errorMessage;
        if (error instanceof HttpErrorResponse) {
            var body = error.error;
            errorMessage = error.url + " - " + (error.statusText || '') + " " + body + " ";
        }
        else {
            errorMessage = error.message ? error.message : error.toString();
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    };
    return ErrorHandler;
}());
export { ErrorHandler };
//# sourceMappingURL=app-error-handler.js.map