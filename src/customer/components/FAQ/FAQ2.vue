<template>
    <section class="section-faq style-2">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-md-12">
                    <div class="faq__content">
                        <div class="block-text">
                            <h3 class="heading">{{title}}</h3>
                            <p>{{subtitle}}</p>
                        </div>
    
                        <div class="flat-tabs">
                            <Tab />
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-md-12">
                    <div class="faq__images">
                    <img src='~@/assets/images/layout/imgfaq.png' alt="Image" />
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>

import Tab from "../Tab/Tab2/Tab";
import "./styles.scss";


export default {
    name: 'Faq',
    data (){
        return {
            title: 'Have any Question? ',
            subtitle : '',
        }    
    },
    components: {
        Tab,
    }
}
</script>