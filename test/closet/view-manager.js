'use strict';

module.exports = {
    engines: {
        html: {
            module: {
                compile: () => {

                    return () => undefined;
                }
            }
        }
    }
};
