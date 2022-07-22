import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

function FriendsProfile (props) {
  const { image, name, nickname, email } = props
  return (
        <div className='FriendsProfileBox'>
            <p>{image}</p>
            <p>{name}</p>
            <p>{nickname}</p>
            <p>{email}</p>
        </div>
  )
}

export default FriendsProfile
