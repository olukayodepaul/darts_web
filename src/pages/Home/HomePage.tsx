/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import { useState } from "react"


// Import all import so that they're available for users.
// We can't use export * from in Flow for some reason.
export default function HomePage(){

  const initial_state = 0
  const [state, stateChange] = useState(initial_state)

    const addition = () => {
      stateChange((stateChangeCallBack)=>stateChangeCallBack+1)
    }

    const subtraction = () =>{
      if (state <= 0) return 0
      stateChange((stateChangeCallBack)=>stateChangeCallBack-1)
    }
    
  return (
    <div>
          <h3>This is a button to test state {state} </h3>
          <button className='add' onClick={addition}>(+)</button>
          <button className='sub' onClick={subtraction}>(-)</button>
    </div>
  )
  
}


