<template>
    <section class="section-faq style-4" id="faq">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="faq__main">
                        <div class="block-text">
                            <h2 class="heading">{{title}} </h2>
                            <p class="fs-20">{{desc}} </p>
                        </div>
                        <div class="faq__content">
                            <div class="flat-tabs">
                                <Tab />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import Tab from "../Tab/Tab6/Tab";
import "./styles.scss";


export default {
    name: 'Faq',
    data (){
        return {
            title: 'FAQs ',
            desc : '',
        }    
    },
    components: {
        Tab,
    }
}
</script>