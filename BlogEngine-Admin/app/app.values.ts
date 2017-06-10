
interface IcurrentUser {
    userId: string;
}


((): void => {
    'use strict';

    var currentUser: IcurrentUser = {
        userId: ''
    };

    angular.module('app')
        .value('currentUser', currentUser);
})();