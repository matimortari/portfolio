<template>
  <div class="loading-container" :class="{ 'is-leaving': !show }" aria-hidden="true">
    <div class="relative size-16">
      <div class="spinner" />
      <div class="spinner-ring" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>

<style scoped>
.loading-container {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.4s ease, visibility 0.4s ease;
}

.loading-container.is-leaving {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.spinner {
  position: absolute;
  inset: 0;
  border: 3px solid var(--muted);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner-ring {
  position: absolute;
  inset: -8px;
  border: 2px solid transparent;
  border-top-color: var(--secondary);
  border-radius: 50%;
  animation: spin 1.5s linear infinite reverse;
  opacity: 0.5;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
