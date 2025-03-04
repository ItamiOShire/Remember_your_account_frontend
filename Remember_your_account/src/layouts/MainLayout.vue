<template>

  <div id="page-wrapper">

    <navigation-bar />

    <main id="main-content">

      <card>

        <p class="card-text-container">

          Don't have an account? <br>
          Register now!

        </p>

        <Button>Register</Button>

      </card>

      <card>

        <p class="card-text-container">

          Log in now and recall <br>
          your game accounts!

        </p>

        <Button>Log in</Button>

      </card>

    </main>

  </div>

</template>

<script>

  import NavigationBar from '../components/NavigationBar.vue';
  import Card from '../components/Card.vue';
  import Button from '../components/Button.vue';

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