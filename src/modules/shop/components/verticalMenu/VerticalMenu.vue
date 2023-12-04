<template>
  <div class="vertical-menu-container">
    <div class="d-flex justify-content-between m-3">
      <a href="index.html" class="app-brand-link">
        <span class="app-brand-logo demo">
          <img src="@/assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="Logo">
        </span>
      </a>
      <span class="app-brand-text demo menu-text fw-bold">menu</span>
      <a href="javascript:void(0);">
        <font-awesome-icon icon="fa-regular fa-circle-dot" size="1x" />
      </a>
    </div>
  </div>
</template>
<style>
.vertical-menu-container {
  position: fixed;
  z-index: 1003;
  display: flex;
  flex-direction: column;
  block-size: 100%;
  inline-size: 260px;
  inset-block-start: 0;
  inset-inline-start: 0;
  transition: inline-size .25s ease-in-out, box-shadow .25s ease-in-out;
  will-change: transform, inline-size;
  box-shadow: 0 2px 6px rgba(7, 43, 61, .14), 0 0 transparent, 0 0 transparent;
}</style>