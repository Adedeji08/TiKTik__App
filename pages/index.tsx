import axios from 'axios'
import {Videos} from '../types'
import VideoCard from '@/components/VideoCard'
import NoResults from '@/components/NoResults'


interface Iprops {
  videos: Videos[]
}

export default function Home({videos}: Iprops) {
  console.log(videos)
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length ? (
        videos.map((video: Videos) => (
          <VideoCard post={video} key={video._id}/>
        ))
      ): (
        <NoResults text={'No Video'} />
      )}
    </div>
  )
}

export const getServerSideProps = async () => {
  const {data} = await axios.get(`http://localhost:3000/api/post/Index`)
  
  return {
    props: {
      videos: data
    }
  }
} 
