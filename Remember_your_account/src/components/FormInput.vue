<template>

    <label :for="inputId"> {{ inputLabel }} </label>
    <input :type="inputType" 
            class="default-input" 
            :id="inputId" 
            :required="isRequired" 
            :value="modelValue" 
            :placeholder="inputPlaceholder"
            @input="updateValue">

</template>

<script setup>

    defineProps({

        inputLabel: {
            type: String,
            required: true
        },

        inputId: {
            type: String,
            required: true
        },

        inputType: {
            type: String,
            required: true
        },

        isRequired: {
            type: Boolean,
            required: true
        },

        modelValue: {
            type: String,
            required: true
        },

        inputPlaceholder: {
            type: String,
            required: true
        }

    });

   const emit = defineEmits(["update:modelValue"]);

    const updateValue = (event) => {
    
         emit('update:modelValue', event.target.value);
    
    }

</script>

<style>

    .default-input {
        padding:10px;
        margin: 10px;
        border-radius: 20px;
        border:none;
        width:50%;
    }

</style>