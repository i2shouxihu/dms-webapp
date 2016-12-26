/**
 * Created by Administrator on 2016/1/15.
 */
define([
    "views/receipt/receivingCode",
    "views/receipt/receivingCodeRequest",
    "views/receipt/returnOrder"
],function (receivingCode,receivingCodeRequest,returnOrder) {
    angular.module('DMS.receipt', [
        "permission"
    ]).config(["$stateProvider", function($stateProvider){
        $stateProvider
            .state('receivingCode', {
                url: '/receivingCode',
                templateUrl: 'views/receipt/receivingCode.html',
                data:{
                    permissions:{
                        only:["RECEIVING_CODE"],
                        redirectTo:"unauthorized"
                    }
                },
                controller: receivingCode
            })
            .state('receivingCodeRequest', {
                url: '/receivingCodeRequest',
                templateUrl: 'views/receipt/receivingCodeRequest.html',
                data:{
                    permissions:{
                        only:["RECEIVING_CODE_REQUEST"],
                        redirectTo:"unauthorized"
                    }
                },
                controller: receivingCodeRequest
            })
            .state('returnOrder', {
                url: '/returnOrder',
                templateUrl: 'views/receipt/returnOrder.html',
                data:{
                    permissions:{
                        only:["RETURN_AUDIT"],
                        redirectTo:"unauthorized"
                    }
                },
                controller: receivingCodeRequest
            })
    }]);
});