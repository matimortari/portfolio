<template>
  <section id="experience" class="flex flex-col items-center justify-center gap-8 py-4 text-sm md:items-start">
    <header class="flex w-full flex-row items-center gap-4 whitespace-nowrap">
      <h4 v-motion :initial="{ opacity: 0, y: -20 }" :visible-once="{ opacity: 1, y: 0 }" :duration="1000">
        {{ t("index.experience.title") }}
      </h4>
      <hr class="w-full">
    </header>

    <div class="flex flex-col gap-16 md:gap-4">
      <div
        v-for="(exp, index) in experienceItems" :key="index"
        v-motion class="flex flex-col gap-4 md:rounded-xl md:border md:p-4"
        :initial="{ opacity: 0, y: 20 }" :visible="{ opacity: 1, y: 0 }"
        :duration="1000" :delay="100 * Number(index)"
      >
        <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div class="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <h5>
              {{ t(exp.role) }}
            </h5>
            <span class="text-secondary text-sm font-semibold">{{ t(exp.company) }}</span>
          </div>
          <span class="text-muted-foreground text-xs italic">
            {{ t(exp.period) }}
          </span>
        </div>

        <p class="text-muted-foreground text-xs md:max-w-[90%] md:text-sm">
          {{ t(exp.description) }}
        </p>

        <div class="flex flex-wrap justify-center gap-1 md:justify-start">
          <span v-for="item in exp.stack" :key="item" class="label">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
