import react from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './navigation';

function MainLayout(props) {
    return <div className='main-layout py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <Navigation />
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 my-5'>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>;
}
export default MainLayout