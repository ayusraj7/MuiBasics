import React from 'react'
import { Stack,Box } from '@mui/material'
import {Timeline,TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,TimelineDot, TimelineOppositeContent} from '@mui/lab'
const MuiTimeline = () => {
    //for last item we don't need to show connector 
    //In timelineDot color,variant prop
    //position prop in timeline=alernate,left,right
    //TimeLineOppositeContent
  return (
    <Timeline position='alternate' >
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot color='secondary'/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                City A
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>
                10:00am
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='secondary' variant='outlined'/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                City B
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot color='secondary'/>
            </TimelineSeparator>
            <TimelineContent>
                City C
            </TimelineContent>
        </TimelineItem>
    </Timeline>
  )
}

export default MuiTimeline