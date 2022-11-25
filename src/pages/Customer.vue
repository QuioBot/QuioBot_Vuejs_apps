<template>
    <div class="home-nft backgroup-body">
        <Header5 />
        <Banner2 id='Home'/>
        <About2 id='About'/>
        <RoadMap3 id='Training'/>
        <FAQ id='RoadMap'/>
        <Parner4 id="Technologies"/>
        <Team5 />
        <FAQ2 id='FAQ'/>
        <Footer5 id='Contact'/>

    </div>
</template>

<script>
import Header5 from '../customer/components/Header/Header5'
import Banner2 from '../customer/components/Banner/Banner2'
import About2 from '../customer/components/About/About2'
import RoadMap3 from '../customer/components/RoadMap/RoadMap3'
import FAQ2 from '../customer/components/FAQ/FAQ2'
import FAQ from '../customer/components/FAQ/FAQ'
import Parner4 from '../customer/components/Parner/Parner4'
import Footer5 from '../customer/components/Footer/Footer5'
import Team5 from '../platform/components/Team/Team5'

export default {
    name: 'HomeNFT01',
    components: {
        Header5,
        Banner2,
        About2,
        RoadMap3,
        FAQ2,
        FAQ,
        Parner4,
        Footer5,
        Team5,
    }
}
</script>