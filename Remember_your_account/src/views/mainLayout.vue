<template>
    <div id="wrapper">

        <nav id="navbar">
        {{ navbarMessage }}
        </nav>

        <div id="blank">


        </div>

        <main id="main">
        {{ mainMessage }}
        </main>

    </div>

</template>

<script>

  export default {
    data() {
      return {
        navbarMessage: 'owo to jest menu',

        mainMessage: 'wow tu bedzie caly kontent'
      }
    }
  }

</script>

<style>

#wrapper {
    display: flex;
    flex-direction: row;
    position:inherit;
    height: 100%;
  }

  #navbar {
    position:absolute;
    top:0;
    background-image: linear-gradient(to left, var(--navbarGradientFirstColor), var(--navbarGradientSecondColor));
    width:5%;
    height: 100%;
    transition: width 0.5s ease;
  }

  #navbar:hover {
    width:15%;
  }

  #blank {
    width:20%;
    background-color: var(--bgColor);
  }

  #main {
    width:80%;
    height: 100%;
    background-color: var(--bgColor);

  }

</style>