﻿(() : void => {
    'use strict';

    angular.module('app', ['app.core', 'app.layout', 'app.services', 'app.widgets', 'app.blocks',
                           'app.blogposts', 'app.dashboard', 'app.sitesettings', 'app.users', 'app.usersettings' ]);
})();