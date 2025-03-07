<template>

    <main-layout>

        <section class="img-section">

            <div class="img-container">

                <img src="../assets/remgemLogo.png" alt="logo" class="img">

            </div>

        </section>

        <section class="form-section">

            <auth-form>

                <form-input 

                    :inputLabel = "'First Name'"
                    :inputId = "'firstName'"
                    :inputType = "'text'"
                    :isRequired = "true"
                    :inputPlaceholder = "'Enter your first name'"
                    v-model:inputValue = "user.firstName"

                />

            </auth-form>

        </section>

    </main-layout>

</template>

<script>



</script>