import React, { useEffect, useState, useRef } from 'react'
import GroupRecord from '../components/Record/GroupRecord'
import RecordGraph from '../components/Record/RecordGraph'
import UserRecord from '../components/Record/UserRecord'
import { Box } from '../components/Styled/Box'
import SideMenu from '../Layout/SideMenu'

const Record = ({ postList, onEdit }) => {
  return (
        <div>
          <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
            <Box
                width="50%"
                height="400px"
                color="black"
                bgColor="#2F2F2F"
            >
              <UserRecord></UserRecord>
            </Box>
            <Box
                width="50%"
                height="400px"
                color="black"
                bgColor="#2F2F2F">
                  <RecordGraph></RecordGraph>
            </Box>
          </div>
          <Box
            width="inherit"
            height="500px"
            bgColor="#2F2F2F">
            <GroupRecord></GroupRecord>
          </Box>
      </div>
  )
}

export default Record
