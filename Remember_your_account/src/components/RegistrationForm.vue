<template>

    <auth-form :name="'registrationForm'" @submit="submitForm">

        <form-input 

            :inputLabel = "'First Name'"
            :inputId = "'firstName'"
            :inputType = "'text'"
            :isRequired = "true"
            :inputPlaceholder = "'Enter your first name'"
            v-model = "user.firstName"

        />

        <form-input 

            :inputLabel = "'Email'"
            :inputId = "'email'"
            :inputType = "'email'"
            :isRequired = "true"
            :inputPlaceholder = "'Enter your email'"
            v-model = "user.email"

        />
        <form-input 

            :inputLabel = "'Password'"
            :inputId = "'password'"
            :inputType = "'password'"
            :isRequired = "true"
            :inputPlaceholder = "'Enter your password'"
            v-model = "user.password"

        />

        <form-input 

            :inputLabel = "'Confirm password'"
            :inputId = "'passwordConfirm'"
            :inputType = "'password'"
            :isRequired = "true"
            :inputPlaceholder = "'Confirm your password'"

        />

        <form-input 

            :inputLabel = "'Birth date'"
            :inputId = "'birthDate'"
            :inputType = "'date'"
            :isRequired = "true"
            :inputPlaceholder = "'Enter your birth date'"
            v-model = "user.birthDate"

        />

        <!-- todo: change button to get 'type' as property-->
        <button type="submit" class="default-button">Register</button>

        <a href="" class="login-link">Already have an account? Log in.</a>

    </auth-form>

</template>

<script setup>

    import {reactive} from 'vue';

    const user = reactive({
        firstName: '',
        email: '',
        password: '',
        birthDate: ''
    });

    const submitForm = async () => {

        console.log(JSON.stringify(user));
        
    }

</script>

<style>

    .default-button {
        
        width: 50%;
        height:50px;

    }

</style>