// Copyright:: Copyright (c) 2015-2016 Chef Software, Inc.
//
// The terms of the Evaluation Agreement (Bldr) between Chef Software Inc. and the party accessing
// this file ("Licensee") apply to Licensee's use of the Software until such time that the Software
// is made available under an open source license such as the Apache 2.0 License.

import "angular2/bundles/angular2-polyfills";
import {AppComponent} from "./AppComponent";
import {AppStore} from "./AppStore";
import {ROUTER_PROVIDERS} from "angular2/router";
import {bootstrap} from "angular2/platform/browser";

bootstrap(AppComponent, [
  AppStore,
  ROUTER_PROVIDERS,
]);