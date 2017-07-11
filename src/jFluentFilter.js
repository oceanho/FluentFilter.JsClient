/**
 * 
 */
var jFluentFilter = function() {

    var orderby = function(handler) {
        return this;
    }
    var orderbydescending = function() {
        return this;
    }
    var removeorderby = function() {}
    this.init = function() {
        return {
            orderBy: orderby,
            orderByDesc: orderbydescending,
            removeOrderBy: removeorderby
        }
    }
}

var filter = new jFluentFilter().init();
// filter.orderBy()