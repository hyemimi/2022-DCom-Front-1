import React, { useEffect, useState, useRef } from 'react'
import GroupRecord from '../components/GroupRecord'
import RecordGraph from '../components/RecordGraph'
import UserRecord from '../components/UserRecord'
import SideMenu from '../Layout/SideMenu'

const Record = ({ postList, onEdit }) => {
  return (
        <>
        <div style={{display: 'flex', justifyContent: 'center', gap: '0.5em'}}>
          <UserRecord></UserRecord>
          <RecordGraph></RecordGraph>
        </div>
            <GroupRecord></GroupRecord>
            <div className="content">
                <h1> 분석 페이지입니다. </h1>
            </div>
        </>
  )
}

export default Record
