<template>

  <div id="page-wrapper">

    <navigation-bar />

    <main id="main-content">

      <slot></slot>

    </main>

  </div>

</template>

<script>


</script>

<style>

  #page-wrapper {

    display: flex;
    background-color: var(--bgColor);

  }

  #main-content {

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    flex: 10 0 auto;
  }

  #navBar {

    flex: 0 0 100px;

  }


</style>