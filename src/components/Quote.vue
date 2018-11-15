<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel.body quote">
                <slot></slot>
            </div>
        </div>

    </div>
</template>

<script>
</script>

<style>
    .quote {
        font-family: 'Arizonia', cursive;
        font-size: 25px;
        color: #000000;
        padding: 20px
    }

    .quote {
        cursor: pointer;
    }

    .quote:hover {
        background-color: #26007e3f;
    }
</style>


