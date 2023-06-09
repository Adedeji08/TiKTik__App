import React from 'react'
import { footerList1, footerList2, footerList3 } from '../utils/constants'
import { NextPage } from 'next'


const List = ({ items, mt }: { items: string[], mt: Boolean }) => (
  <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'}`}>
    {items.map((item: string) => (
      <p key={item} className='text-gray-400 text-sm  hover:underline cursor-pointer' >
        {item}
      </p>
    ))}
  </div>
);

const Footer: NextPage = () => {
  return (
    <div  className='mt-6 hidden xl:block'>
        <List items={footerList1} mt-5={false} />
        <List items={footerList2} mt-5/>
        <List items={footerList3} mt-5/>
        <p className='text-gray-400 text-sm mt-5'>2023 TikTik</p>
    </div>
  )
}

export default Footer