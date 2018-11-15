<template>
    <div class="row">
        <div class="col-sm-12">
            <h3>Added Quotes</h3>
            <div class="progress">
	            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                    :style="{width: (quoteCount / maxQuotes) * 100 + '%'}">
                    {{ quoteCount }} / {{ maxQuotes }}
	            </div>
            </div>
	    </div>
    </div>	 
</template>

<script>
export default {
        props: ['quoteCount', 'maxQuotes']
    }
</script>

<style scoped>
    h3 {
        background-color: rgba(14, 64, 158, 0.582);
        padding: 10px;
        border-radius: 10px;
    }
</style>

