<template>
  <section id="experience" class="flex flex-col gap-4">
    <h5 v-motion :initial="{ opacity: 0, y: -20 }" :visible="{ opacity: 1, y: 0 }" :duration="800">
      {{ t("index.experience.title") }}
    </h5>

    <div class="flex flex-col gap-4">
      <div
        v-for="(exp, index) in tm('index.experience.items')" :key="index"
        v-motion class="flex flex-col gap-2 rounded-xl border p-4"
        :initial="{ opacity: 0, y: 20 }" :visible="{ opacity: 1, y: 0 }"
        :duration="800" :delay="200 * Number(index)"
      >
        <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div class="flex flex-col md:flex-row md:items-center md:gap-4">
            <h6>
              {{ exp.role }}
            </h6>
            <span class="text-secondary text-sm">{{ exp.company }}</span>
          </div>
          <span class="text-muted-foreground text-xs italic">
            {{ exp.period }}
          </span>
        </div>

        <p class="text-muted-foreground text-sm">
          {{ (exp.description) }}
        </p>
        <div class="flex flex-wrap justify-center gap-1 md:justify-start">
          <span v-for="tag in exp.stack" :key="tag" class="label">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm } = useI18n()
</script>
