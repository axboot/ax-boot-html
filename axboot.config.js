(function () {
    if (axboot && axboot.def) {

        axboot.def["DEFAULT_TAB_LIST"] = [
            {menuId   : "00-dashboard",
                id    : "dashboard",
                progNm: '홈',
                menuNm: '홈',
                progPh: '/html/dashboard.html',
                url   : '/html/dashboard.html?progCd=dashboard',
                status: "on",
                fixed : true
            }
        ];

        axboot.def["API"] = {
            "users": "/api/v1/users",
            "commonCodes": "/api/v1/commonCodes",
            "programs": "/api/v1/programs",
            "menu": "/api/v2/menu",
            "manual": "/api/v1/manual",
            "errorLogs": "/api/v1/errorLogs",
            "files": "/api/v1/files",
            "samples": "/api/v1/samples",

            //test API
            "testAPI_users": "/html/json/userMgmt.json",
            "testAPI_commonCodes": "/html/json/commonCodeMgmt.json",
            "testAPI_commonCodes_menu": "/html/json/commonCodes_menu.json",
            "testAPI_commonCodes_users": "/html/json/commonCodes_users.json",
            "testAPI_programs": "/html/json/programMgmt.json",
            "testAPI_menu": "/html/json/menuMgmt.json",
            "testAPI_errorLogs": "/html/json/errorLogMgmt.json"
            /*
            "testAPI_manual": "/api/v1/manual",
            "testAPI_files": "/api/v1/files",
            "testAPI_samples": "/api/v1/samples"
            */
        };

        axboot.def["MODAL"] = {
            "ZIPCODE": {
                width: 500,
                height: 500,
                iframe: {
                    url: "/html/common/zipcode.html",
                    method:"GET"        //html 간 통신때문에 get 방식을 사용합니다.
                }
            },
            "SAMPLE-MODAL": {
                width: 500,
                height: 500,
                iframe: {
                    url: "/html/_samples/modal.html",
                    method:"GET"        //html 간 통신때문에 get 방식을 사용합니다.
                },
                header: false
            },
            "COMMON_CODE_MODAL": {
                width: 600,
                height: 400,
                iframe: {
                    url: "/html/system/system-config-common-code-modal.html",
                    method:"GET"        //html 간 통신때문에 get 방식을 사용합니다.
                },
                header: false
            }
        };
    }


    var preDefineUrls = {
        "manual_downloadForm": "/api/v1/manual/excel/downloadForm",
        "manual_viewer": "/jsp/system/system-help-manual-view.jsp"
    };
    axboot.getURL = function (url) {
        if (ax5.util.isArray(url)) {
            if (url[0] in preDefineUrls) {
                url[0] = preDefineUrls[url[0]];
            }
            return url.join('/');

        } else {
            return url;
        }
    }
})();