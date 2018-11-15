<template>
    <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <new-quote @quoteAdded="NewQuote"></new-quote> 
    <quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quote-grid>
    <div class="row">
        <div class="col-sm-12 text-center">
            <div class="alert alert-info">Info: click on a quote to delete</div>
        </div>
    </div>
    
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue'
    import NewQuote from './components/NewQuote.vue'
    import appHeader from './components/Header.vue'


    export default {
        data: function() {
            return {
                quotes: [
                    'Just a Quote to see something'
                ],
                maxQuotes: 10
            }
        },
        methods: {
            NewQuote(quote) {
                if (this.quotes.length >= this.maxQuotes){
                    return alert('Can only add 10 quotes, delete previous quotes');
                // }else if(Object.keys(this.quotes).length === 0){
                //     return alert('The quote cannot be empty');
                }else if(this.quotes.length <= this.maxQuotes){
                    this.quotes.push(quote);
                }
            },
            deleteQuote(index){
                this.quotes.splice(index, 1);
            }
        },
        components: {
            QuoteGrid: QuoteGrid,
            NewQuote: NewQuote,
            appHeader: appHeader
        }
    }
</script>

<style>
</style>
