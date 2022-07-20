import React, { useEffect, useState, useRef } from 'react'
import GroupItem from './GroupItem'
import GroupButton from './GroupButton'

function GroupItemList ({ data }) {
    const buttontext = "이 스터디 참가하기"
  return (
        <div className='GroupItemList'>
            {data.map((it) => (
                <GroupItem key={it.studyId} name={it.name} leader={it.leader} members={it.members} buttontext={buttontext}/>
            ))}
        </div>
  )
}

export default GroupItemList
