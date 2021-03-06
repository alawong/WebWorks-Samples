/*
* Copyright 2013 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var screenshot = require("./screenshotJNext").screenshot,
    _event = require("../../lib/event");

module.exports = {
    captureDisplay: function (success, fail, args, env) {
        try {
            success(screenshot.getInstance().captureDisplay()); 
        } catch (e) {
            fail(-1, e);
        }
    },

    captureDisplayWithPath: function (success, fail, args, env) {
        try {
            var stringArgs = "";
            for (key in args) {
                stringArgs += " " + JSON.parse(decodeURIComponent(args[key]));
            }
            success(screenshot.getInstance().captureDisplayWithPath(stringArgs)); 
        } catch (e) {
            fail(-1, e);
        }
    }
};

