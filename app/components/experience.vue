<template>
  <section id="experience" class="flex flex-col items-center justify-center gap-8 text-sm md:items-start">
    <header class="flex w-full flex-row items-center gap-4 whitespace-nowrap">
      <h4 v-motion :initial="{ opacity: 0, y: -20 }" :visible-once="{ opacity: 1, y: 0 }" :duration="500">
        {{ $t("index.experience.title") }}
      </h4>
      <span class="divider" />
    </header>

    <div class="flex flex-col gap-16 md:gap-4">
      <div
        v-for="(exp, index) in EXPERIENCE_ITEMS" :key="index"
        v-motion :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }" :duration="500"
        :delay="200 * Number(index)" class="card flex flex-col gap-4"
      >
        <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div class="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <h5>
              {{ $t(exp.role) }}
            </h5>
            <span class="text-sm font-semibold text-secondary">{{ $t(exp.company) }}</span>
          </div>
          <span class="text-xs text-muted-foreground italic">
            {{ $t(exp.period) }}
          </span>
        </div>

        <p class="text-muted-foreground md:max-w-[90%] text-sm">
          {{ $t(exp.description) }}
        </p>

        <div class="flex flex-wrap justify-center gap-1 md:justify-start">
          <span v-for="(item, i) in exp.stack" :key="i" class="label">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
