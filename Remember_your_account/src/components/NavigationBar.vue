<template>

    <nav id="navBar">

        <icon-menu-bars />

        <h2>REM GEM</h2>

        <icon-info />

    </nav>

</template>

<script>

    import IconInfo from './icons/IconInfo.vue';
    import IconMenuBars from './icons/IconMenuBars.vue';

</script>

<style>

    #navBar {

        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-image: linear-gradient(to left, var(--navbarGradientFirstColor), var(--navbarGradientSecondColor));

        height:100vh;
    }

    #navBar > h2 {

        writing-mode: vertical-rl;
        font-size: 3rem;
        text-orientation: upright;
        color: var(--navbarTextColor);

    }

    #navBar > svg {

        width: 50px;
        height: 50px;
        fill: black;

        margin: 10px;

    }

</style>