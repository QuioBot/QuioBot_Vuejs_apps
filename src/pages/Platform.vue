<template>
    <div class="home-nft-v2 ">
        <Header5 />
        <Banner3 id="Home"/>
        <FAQ id="RoadMap"/>
        <About3 />
        <Parner4 id="Technologies"/>
        <RoadMap6 id="Training"/>
        <Team5 id="team"/>
        <FAQ3 id="FAQ"/>
        <Footer5 id="Contact"/>

    </div>
</template>

<script>
import Header5 from '../platform/components/Header/Header5'
import Banner3 from '../platform/components/Banner/Banner3'
import About3 from '../platform/components/About/About3'
import Parner4 from '../platform/components/Parner/Parner4'
import RoadMap6 from '../platform/components/RoadMap/RoadMap6'
import FAQ3 from '../platform/components/FAQ/FAQ3'
import Footer5 from '../platform/components/Footer/Footer5'
import FAQ from '../platform/components/FAQ/FAQ'
import Team5 from '../platform/components/Team/Team5'


export default {
    name: 'HomeNFT01',
    components: {
        Header5,
        Banner3,
        FAQ,
        About3,
        Parner4,
        RoadMap6,
        FAQ3,
        Footer5,
        Team5,
    }
}
</script>