import { Video } from '@/types'
import React from 'react'
import { NextPage } from 'next'

interface Iprops {
    text: string
}

const NoResults = ({text}: Iprops) => {
  return (
    <div>NoResults</div>
  )
}

export default NoResults