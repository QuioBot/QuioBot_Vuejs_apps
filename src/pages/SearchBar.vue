<template>
    <div class="home-defi-3">
        <Header5 />
        <Banner5 id="Home"/>   
        <FAQ id="RoadMap"/>
        <RoadMap7 id="Training"/>
        <Parner4 id="Technologies"/> 
        <Team5 /> 
        <FAQ7 id="FAQ"/>
        <Footer5 id="Contact"/>

    </div>
</template>

<script>
import Header5 from '../searchbar/components/Header/Header5'
import Banner5 from '../searchbar/components/Banner/Banner5'
import RoadMap7 from '../searchbar/components/RoadMap/RoadMap7'
import Parner4 from '../searchbar/components/Parner/Parner4'
import FAQ7 from '../searchbar/components/FAQ/FAQ7'
import FAQ from '../searchbar/components/FAQ/FAQ'
import Footer5 from '../searchbar/components/Footer/Footer5'
import Team5 from '../searchbar/components/Team/Team5'


export default {
    name: 'HomeNFT01',
    components: {
        Header5,
        Banner5,
        RoadMap7,
        Parner4,
        Team5,
        FAQ7,
        Footer5,
        FAQ,
    }
}
</script>