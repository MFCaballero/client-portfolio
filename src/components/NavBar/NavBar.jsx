import React from 'react';
import './NavBar.css';
import moment from 'moment';
import { MdSignalWifi3Bar, MdBatteryStd } from 'react-icons/md';
import { IoVolumeMediumSharp } from 'react-icons/io5';

export default function NavBar() {

    return (
        <header className="navbar">
            <div>
            <h5 style={{marginLeft:10}}>Activities</h5>
            </div>
            <div className='navbarLine'>
            <h5 style={{marginRight:10}}>{moment(new Date()).format('MMM d')}</h5>
            <h5>{moment(new Date()).format('hh:mm')}</h5>
            </div>
            <div>
                <MdSignalWifi3Bar className='iconsRight'/>
                <IoVolumeMediumSharp className='iconsRight'/>
                <MdBatteryStd className='iconsRight'/>
            </div>
            
        </header>
    )
}