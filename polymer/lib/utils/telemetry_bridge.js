/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * @fileoverview This file is a backwards-compatibility shim. Before Polymer
 *     converted to ES Modules, it wrote its API out onto the global Polymer
 *     object. The *_bridge.js files (like this one) maintain compatibility
 *     with that API.
 */
import '../utils/boot_bridge.js';
import {instanceCount, incrementInstanceCount as _incrementInstanceCount, registrations as _registrations, register as _register, dumpRegistrations as _dumpRegistrations} from '@polymer/polymer/lib/utils/telemetry.js';

// This import then const trick is to be clear to the compiler that the
// imported symbols can't be mutated.

// instanceCount is a mutable binding
const incrementInstanceCount = _incrementInstanceCount;
const registrations = _registrations;
const register = _register;
const dumpRegistrations = _dumpRegistrations;

goog.declareModuleId('HtmlImportsNamespace.Polymer.Lib.Utils.Telemetry');

/** @const */
Polymer.telemetry = /** @type {?PolymerTelemetry} */ (
    {instanceCount, incrementInstanceCount, registrations, register, dumpRegistrations});
