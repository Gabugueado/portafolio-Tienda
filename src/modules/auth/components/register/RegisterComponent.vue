<script lang="ts" src="./RegisterComponent.ts" />

<template>
  <div class="contenedor">
    <img src="@/assets/login-background.jpeg" class="vw-100 vh-100"/>
      <div class="card center">
        <div class="card-body">
          <div class="card-title justify-content-center d-flex">
            <img src="@/assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="Logo">
            Login
          </div>
          <h6 class="card-subtitle mb-3 text-muted">Register to Start!</h6>
          <div class="mb-3">
            <label for="emailInput" class="form-label">Email address</label>
            <input type="email" class="form-control" id="emailInput" placeholder="name@example.com">
          </div>
          <div class="mb-3">
            <label for="passwordInput" class="form-label">Password</label>
            <input type="password" class="form-control" id="passwordInput">
          </div>
          <div class="mb-3">
            <label for="passwordInput1" class="form-label">Password</label>
            <input type="password" class="form-control" id="passwordInput1">
          </div>
          <div class="d-flex justify-content-center">
            <button class="btn btn-primary">Ingresar</button>
          </div>
          <br>
          <div class="d-flex justify-content-center">
            <span>Already have an account?</span>
            <a href="/login" class="text-primary ms-5">Login</a>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
.contenedor {
  position: relative;
  display: inline-block;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card{
  --bs-card-bg: #ffffff80;
  backdrop-filter: blur(5px);
}
</style>
