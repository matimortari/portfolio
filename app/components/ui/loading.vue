<template>
  <div v-if="isLoading" class="loading-container">
    <div class="flex flex-col items-center gap-4">
      <div class="relative size-16">
        <div class="spinner" />
        <div class="spinner-ring" />
      </div>

      <p class="animate-pulse font-medium text-muted-foreground">
        Loading
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const isLoading = ref(true)

onMounted(() => {
  const onLoad = () => {
    isLoading.value = false
  }

  if (document.readyState === "complete") {
    isLoading.value = false
  }
  else {
    window.addEventListener("load", onLoad)
    onBeforeUnmount(() => window.removeEventListener("load", onLoad))
  }

  setTimeout(() => {
    if (isLoading.value) {
      isLoading.value = false
    }
  }, 5000)
})
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
  animation: fadeOut 0.5s ease 0.3s forwards;
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

@keyframes fadeOut {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
