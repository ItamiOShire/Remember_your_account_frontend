<template>

    <label :for="inputId"> {{ inputLabel }} </label>
    <input :type="inputType" 
            class="default-input" 
            :id="inputId" 
            :required="isRequired" 
            :value="inputValue" 
            :placeholder="inputPlaceholder"
            @input="$emit('update:inputValue', $event.target.value)">

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

        inputValue: {
            type: String,
            required: true
        },

        inputPlaceholder: {
            type: String,
            required: true
        }

    });

    defineEmits(["update:inputValue"]);

</script>