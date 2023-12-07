<template>
  <div class="login">
    <Login msg="login" />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "../components/login/LoginComponent.vue";

export default {
  name: "LoginView",
  components: {
    Login,
  },
};
</script>
