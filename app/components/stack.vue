<template>
  <section id="stack" class="flex flex-col items-center justify-center gap-4 text-sm md:items-start">
    <header class="flex w-full flex-col items-center gap-1 whitespace-nowrap md:items-start">
      <h4>
        {{ $t("index.stack.title") }}
      </h4>
      <p class="text-sm font-medium text-muted-foreground">
        {{ $t("index.stack.subtitle") }}
      </p>
    </header>

    <div class="grid w-full grid-cols-2 items-center justify-center gap-2 md:grid-cols-5">
      <div
        v-for="(item, index) in STACK_ITEMS" :key="index"
        v-motion :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }" :duration="500"
        :delay="200 * Number(index)" class="card group p-2.5!"
      >
        <nuxt-link :to="item.url" target="_blank" class="flex flex-row items-center gap-2 transition-all duration-500">
          <icon :name="item.icon" size="25" class="shrink-0 transition-all duration-500 group-hover:scale-125" />
          <span class="text-sm font-semibold">{{ (item.name) }}</span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
