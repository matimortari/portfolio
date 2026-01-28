<template>
  <section
    id="stack" v-motion
    :initial="{ opacity: 0, y: 20 }" :visible-once="{ opacity: 1, y: 0 }"
    :duration="500" class="mx-auto flex max-w-5xl flex-col gap-8 text-center"
  >
    <h3>
      {{ $t("index.stack.title") }}
    </h3>

    <div class="grid w-full grid-cols-2 gap-2 md:grid-cols-5">
      <nuxt-link
        v-for="(item, index) in STACK_ITEMS" :key="index"
        :to="item.url" target="_blank"
        class="group card flex flex-col items-center gap-2 p-4! text-center"
      >
        <icon :name="item.icon" size="35" class="text-primary transition-transform duration-500 group-hover:scale-110" />
        <span class="font-semibold">{{ item.name }}</span>
        <span class="text-xs text-muted-foreground">{{ $t(item.description) }}</span>
      </nuxt-link>
    </div>
  </section>
</template>
