import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import dynamic from 'next/dynamic'
const JitsiMeeting = dynamic(() => import('@jitsi/react-sdk').then(mod => mod.JitsiMeeting), { ssr: false });
import PujaStream from '../../../components/userhome/pujastream'

function Pujastreampage() {
  return (
    <>
    <Header />
    <div>
        <PujaStream />
    </div>
    <Footer />
    </>
  )
}

export default Pujastreampage