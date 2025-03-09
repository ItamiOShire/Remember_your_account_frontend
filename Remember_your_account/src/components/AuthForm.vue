<template>

    <div class="auth-form-container">

        <form @submit.prevent="submitForm" class="auth-form" :name="formName">

            <slot></slot>

        </form>

    </div>

</template>

<script setup>

    import { defineProps, defineEmits } from 'vue';

    const props = defineProps({

        formName: {
            type: String,
            required: true
        }

    });

    const emit = defineEmits(['submit']);

    const submitForm = () => {

        emit('submit');

    }

</script>

<style>

    form.auth-form {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;

        background-color: var(--formBgColor);
        border-radius: var(--formBorderRadius);
        width: var(--formWidth);

    }

</style>