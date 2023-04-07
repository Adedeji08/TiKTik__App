import { Video } from '@/types'
import { NextPage } from 'next'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {HiVolumeUp, HiVolumeOff} from 'react-icons/hi'
import {BsPlay, BsFillPlayFill, BsFillPauseFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go'

interface Iprops {
    post: Video
}
const VideoCard: NextPage<Iprops> = ({post}) => {
  return (
    <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
      <div>
        <div  className='flex gap-3 p-2 cursor-pointer font-semibold rounded '>
              <div  className='md:w-16 md:h-16 w-10 h-10'>
                <Link href='/'>
                    <>
                    <Image
                    width={62}
                    height={62}
                    className='rounded-full'
                    src={post?.image}
                    alt='Profile phoot'
                    Layout='responsive'
                    />
                    </>
                </Link>
              </div>
              <div>
              <Link href='/' >
                <div className='flex item-center gap-2'>
                   <p className='flext item-center gap-2 md:text-md font-bold text-primary'>
                    {post.postedBy.userName} {` `}
                        <GoVerified className='text-blue-400 text-md sm:inline md:inline' />
                   </p>
                   <p className='capitalize font-medium text-xs text-gray-500 hidden md:block'>{post.postedBy.userName}</p>
                   </div>
                </Link>
              </div>
        </div>
      </div>
      <div className='lg:ml-20 flex gap-4 relative'>
          <div className='rounded-3xl'>
            <Link href='/'>
                <video
                loop
                className='lg:w[600px] h-[300px]  md:h-[400] lg:h-[530px] w-[200px]
                rounded-2xl cursor-pointer bg-gray-100'
                 src={post.video?.asset.url}></video>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default VideoCard