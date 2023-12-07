<template>
    <div class="login">
        <Register msg="register" />
    </div>
</template>
  
<script lang="ts">
// @ is an alias to /src
import Register from "../components/register/RegisterComponent.vue";

export default {
    name: "RegisterView",
    components: {
        Register,
    },
};
</script>
  