import {Routes , Route} from 'react-router-dom'

import {Home} from '../Pages/Home'
import {New} from '../Pages/New'
import {Profile} from '../Pages/Profile'
import {Details} from '../Pages/Details'

export function AppRouter(){
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/new' element={<New />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/details' element={<Details />}/>
        </Routes>
    )
}