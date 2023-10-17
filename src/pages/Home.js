import React from 'react'
import CabList from '../components/CabList'
import Search from '../components/Search'

const Home = () => {
  return (
    <div className='min-h-[800px]' >
      <Search />
      <CabList />
    </div>
  )
}

export default Home
