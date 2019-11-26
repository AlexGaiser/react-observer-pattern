
import React, { useState, useEffect } from 'react'
import observableBase from '../observables/observable.hook'

export default function Dashboard() {
  const [dashBoardData, setDashBoardData] = useState(observableBase.data)
  useEffect(() => {

    observableBase.attach(setDashBoardData)
    return () => {
      observableBase.detach(setDashBoardData)
    };
  }, [])


  return (
    <div>
      <h4>Dashboard</h4>
      <p>{dashBoardData}</p>
    </div>
  )
}
