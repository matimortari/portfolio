<template>
  <section id="experience" class="flex flex-col gap-4">
    <h5 v-motion :initial="{ opacity: 0, y: -20 }" :visible="{ opacity: 1, y: 0 }" :duration="800">
      {{ t("index.experience.title") }}
    </h5>

    <div class="flex flex-col gap-4">
      <div
        v-for="(exp, index) in experienceItems" :key="index"
        v-motion class="flex flex-col gap-2 rounded-xl border p-4"
        :initial="{ opacity: 0, y: 20 }" :visible="{ opacity: 1, y: 0 }"
        :duration="800" :delay="200 * Number(index)"
      >
        <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div class="flex flex-col md:flex-row md:items-center md:gap-4">
            <h6>
              {{ t(exp.role) }}
            </h6>
            <span class="text-secondary text-sm">{{ t(exp.company) }}</span>
          </div>
          <span class="text-muted-foreground text-xs italic">
            {{ t(exp.period) }}
          </span>
        </div>

        <p class="text-muted-foreground text-sm">
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
import { experienceItems } from "~/lib/constants"

const { t } = useI18n()
</script>
