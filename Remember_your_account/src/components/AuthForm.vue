<template>

    <div class="auth-form-container">

        <form class="auth-form" :name="formName">

            <slot></slot>

        </form>

    </div>

</template>

<script setup>

    defineProps({

        formName: {
            type: String,
            required: true
        }

    });

</script>

<style>

    div.auth-form-container {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: var(--formBgColor);
        border-radius: var(--formBorderRadius); 

    }

</style>