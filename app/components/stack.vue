<template>
  <section id="stack" class="flex flex-col items-center justify-center gap-8 text-sm md:items-start">
    <header class="flex w-full flex-row items-center gap-4 whitespace-nowrap">
      <h4 v-motion :initial="{ opacity: 0, y: -20 }" :visible-once="{ opacity: 1, y: 0 }" :duration="500">
        {{ $t("index.stack.title") }}
      </h4>
      <span class="divider" />
    </header>

    <div class="grid w-full grid-cols-2 items-center justify-center gap-2 md:grid-cols-5">
      <div
        v-for="(item, index) in STACK_ITEMS" :key="index"
        v-motion class="card group p-2!"
        :title="$t(item.description)" :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }" :duration="500"
        :delay="200 * Number(index)"
      >
        <nuxt-link :to="item.url" target="_blank" class="flex flex-row items-center gap-2 transition-all duration-500">
          <icon :name="item.icon" size="30" class="shrink-0 transition-all duration-500 group-hover:scale-125" />
          <span class="text-sm font-semibold">{{ (item.name) }}</span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
