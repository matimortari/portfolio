<template>
  <section id="stack" class="mx-auto flex max-w-5xl flex-col gap-8 text-center">
    <h3 v-motion :initial="{ opacity: 0, y: -20 }" :visible-once="{ opacity: 1, y: 0 }" :duration="500">
      {{ $t("index.stack.title") }}
    </h3>

    <div class="grid w-full grid-cols-2 gap-2 md:grid-cols-5">
      <nuxt-link
        v-for="(item, index) in STACK_ITEMS" :key="index"
        v-motion :initial="{ opacity: 0, scale: 0.8, rotateY: -90 }"
        :visible-once="{ opacity: 1, scale: 1, rotateY: 0 }" :delay="index * 80"
        :duration="500" :to="item.url"
        target="_blank" class="group card flex flex-col items-center gap-2 p-4! text-center"
      >
        <icon :name="item.icon" size="35" class="text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
        <span class="font-semibold">{{ item.name }}</span>
        <span class="text-xs text-muted-foreground">{{ $t(item.description) }}</span>
      </nuxt-link>
    </div>
  </section>
</template>
