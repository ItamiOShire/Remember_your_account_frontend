<template>

    <div class="card">

        <slot></slot>

    </div>

</template>

<script>



</script>

<style>

    .card {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: var(--cardWidth);
        height: var(--cardHeight);

        background-color: var(--cardColor);
        border-radius: var(--cardBorderRadius);

    }

    .card > * {

        margin: 10px;

    }

</style>