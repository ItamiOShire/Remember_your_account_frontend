<template>

    <auth-form :name="'registrationForm'">

        <form-input 

            :inputLabel = "'First Name'"
            :inputId = "'firstName'"
            :inputType = "'text'"
            :isRequired = "true"
            :inputPlaceholder = "'Enter your first name'"
            v-model:inputValue = "user.firstName"

        />

        <form-input 

            :inputLabel = "'Email'"
            :inputId = "'email'"
            :inputType = "'email'"
            :isRequired = "true"
            :inputPlaceholder = "'Enter your email'"
            v-model:inputValue = "user.email"

        />
        <form-input 

            :inputLabel = "'Password'"
            :inputId = "'password'"
            :inputType = "'password'"
            :isRequired = "true"
            :inputPlaceholder = "'Enter your password'"
            v-model:inputValue = "user.password"

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
            v-model:inputValue = "user.birthDate"

        />

    </auth-form>

</template>

<script setup>



</script>