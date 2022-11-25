<template>
    <div class="home-defi-4">
        <Header6 />
        <Banner8 id="Home"/>
        <FAQ id="RoadMap"/>
        <RoadMap8 id="Training"/>
        <Parner4 id="Technologies"/>
        <Team5 id="team"/>
        <FAQ8 id="FAQ"/>
        <Footer5 id="Contact"/>


    </div>
</template>

<script>
import Header6 from '../chatbot/components/Header/Header6'
import Banner8 from '../chatbot/components/Banner/Banner8'
import RoadMap8 from '../chatbot/components/RoadMap/RoadMap8'
import Parner4 from '../chatbot/components/Parner/Parner4'
import FAQ8 from '../chatbot/components/FAQ/FAQ8'
import Footer5 from '../chatbot/components/Footer/Footer5'
import FAQ from '../chatbot/components/FAQ/FAQ'
import Team5 from '../chatbot/components/Team/Team5'


export default {
    name: 'HomeNFT01',
    components: {
        Header6,
        Banner8,
        RoadMap8,
        FAQ,
        Parner4,
        FAQ8,
        Footer5,
        Team5,
    }
}
</script>