function deepFreeze(o) {
    Object.freeze(o);

    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o.hasOwnProperty(prop) && o[prop] !== null && (typeof(o[prop]) === "object" || typeof o[prop] === "function") && !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });

    return o;
}

function BaseStore(initialData) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var handlers = [];
    var nextHandlerId = 0;

    return {
        get data() {
            return initialData;
        },
        set data(t) {
            initialData = options.disableDeepFreeze ? t : deepFreeze(t);
            handlers.forEach(function (handler) {
                handler.handler(initialData);
            });
        },
        watch: function watch(cb) {
            var ID = nextHandlerId++;
            handlers.push({
                id: ID,
                handler: cb
            });
            return ID;
        },
        unwatch: function unwatch(id) {
            for (var i = 0; i < handlers.length; i++) {
                if (handlers[i].id === id) {
                    handlers.splice(i, 1);
                    break;
                }
            }
        }
    };
}

module.exports = BaseStore;
