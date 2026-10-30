"use client";

import React from 'react'
import Page from './shape/Page'

const page: React.FC = () => {
  return (
    <div>
      Home is here
      <div className='h-screen w-screen'>
        <Page />
      </div>
    </div>
  )
}

export default page