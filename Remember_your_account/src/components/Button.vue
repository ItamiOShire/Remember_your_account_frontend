<template>

    <button type="button" class="default-button">

        <slot></slot>

    </button>

</template>

<script>



</script>

<style>

    .default-button {
            
            width: var(--buttonWidth);
            height: var(--buttonHeight);
    
            background-color: var(--buttonColor);
            color: var(--buttonTextColor);
    
            border: none;
            border-radius: var(--buttonBorderRadius);
    
            cursor: pointer;
    }

</style>