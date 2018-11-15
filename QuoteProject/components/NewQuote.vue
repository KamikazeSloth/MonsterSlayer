<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset3 form-group">
                <label>Quote</label>
                <textarea class="form-control" rows="3" v-model="quote">Write your quote here</textarea>
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset3 form-group">
                <br>
                <button @click.prevent="createNew">New quote</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import QuoteGridVue from './QuoteGrid.vue';

    export default {
        data: function() {
            return {
                quote: ''    
            };
        },
        methods: {
            createNew() {
                this.$emit('quoteAdded', this.quote);
                this.quote = '';
            }
        }
    }
</script>

<style>
    button {
    background-color: rgb(69, 158, 170); /* Green */
    border: none;
    color: rgba(255, 255, 255, 0.904);
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    }

    button {
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    }

    button:hover {
        background-color: rgba(83, 88, 86, 0.349); /* Green */
        color: rgb(253, 252, 252);
    }

    button:active {
    background-color: #3e8e41e0;
    box-shadow: 0 5px rgb(255, 255, 255);
    transform: translateY(10px);
}

</style>


