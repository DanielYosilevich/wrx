import React from 'react'
import useGlobal from '../store/store'

const Home = () => {
    const [globalState] = useGlobal();

    return (
        <div className="central-wrapper">
           <div>HomePage!</div>
        </div>
    )
}

export default Home