import {Outlet} from 'react-router-dom';
import Header from '../component/Header';
import TopHeader from '../component/TopHeader';


function Layout() {
    return(
        <div>
            <TopHeader/>
            <div style={{display: 'flex', flexDirection:'row'}}>
            <Header/>
            <main>
                <Outlet/>
            </main>
            </div>
        </div>
    )
}

export default Layout;