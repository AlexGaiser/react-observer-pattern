
import React, { useState, useEffect } from 'react'
import observableBase from '../observables/observable.base'

export default function Home() {

  const [homeCount, setHomeCount] = useState<number>(observableBase.data)
  useEffect(() => {

    observableBase.attach(setHomeCount)
    return () => {
      observableBase.detach(setHomeCount)
    };
  }, [])


  return (

    <div>
      <h4>Home</h4>
      <h1>{homeCount}</h1>
    </div>
  )
}
