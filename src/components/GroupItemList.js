import React, { useEffect, useState, useRef } from 'react'
import GroupItem from './GroupItem'
import GroupButton from './GroupButton'

function GroupItemList ({ data }) {
    const buttontext = "이 스터디 참가하기"
  return (
        <div className='GroupItemList'>
            {data.map((it) => (
                <GroupItem key={it.id} name={it.name} users={it.users} buttontext={buttontext}/>
            ))}
        </div>
  )
}

export default GroupItemList
