
<template>
    <section class="banner-top style-4">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="banner-top__content">
                        <h2 style="color:#B4E116 ;" class="title">{{title1}}</h2>
                        <h2 class="title">{{title2}}</h2>
                        <!-- <h2 style="color:#B4E116 ;" class="title">{{title3}}</h2> -->
                        <p class="desc">{{desc}}</p>
                        <div class="button">
                            <a class="btn-action style-searchbar" href="/home-defi-01"><span class="effect">Github Repository</span></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="banner-top__sale">
                        <Searchbar />
                        <!-- <div class="block-text">
                            <h3 class="heading">{{title2}}</h3>
                            <p class="fs-17">{{desc2}}</p>
                        </div>
                        <div class="sale-content">
                        <Countdown 
                            starttime="Jul 1, 2022 15:37:25" 
                            endtime="Dec 8, 2022 16:37:25" >
                        </Countdown>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
            
</template>

<script>
// import Countdown from '../Layouts/Countdown.vue';
import "./styles.scss";
import { dataBanner } from '../../fake-data/databanner';
import Searchbar from '../Searchbar/Searchbar.vue'

export default {
    name: "About",
     components: {
        // Countdown,
        Searchbar,
    },
    data (){
        return {
            dataBanner,
            title1 : 'QUIBOT Deep Learning',
            title2 : 'Medical SearchBar Suggestion',
            title3 : 'Deep Learning',
            desc : 'QuiBot Medical SearchBar is the function of search engines that displays keyword and product suggestions in real-time, based on what search query the user is typing into the search field.',
            desc2:''
        }    
    }
};
</script>
            
            