<template>
  <section id="experience" class="flex flex-col items-center justify-center gap-4 text-sm md:items-start">
    <header class="flex w-full flex-col items-center gap-1 whitespace-nowrap md:items-start">
      <h4>
        {{ $t("index.experience.title") }}
      </h4>
      <p class="text-sm font-medium text-muted-foreground">
        {{ $t("index.experience.subtitle") }}
      </p>
    </header>

    <div class="flex flex-col gap-8 md:gap-4">
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

        <p class="text-sm text-muted-foreground md:max-w-[90%]">
          {{ $t(exp.description) }}
        </p>
      </div>
    </div>
  </section>
</template>
