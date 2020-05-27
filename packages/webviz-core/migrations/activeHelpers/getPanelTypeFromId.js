// @flow
//
//  Copyright (c) 2019-present, Cruise LLC
//
//  This source code is licensed under the Apache License, Version 2.0,
//  found in the LICENSE file in the root directory of this source tree.
//  You may not use this file except in compliance with the License.
function getPanelTypeFromId(id: string): string {
  return id.split("!")[0];
}
export default getPanelTypeFromId;
