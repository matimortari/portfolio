<template>
  <section id="contact" class="flex w-full flex-col items-center gap-8 text-center md:py-20">
    <header
      v-motion :initial="{ opacity: 0, y: -20 }"
      :visible-once="{ opacity: 1, y: 0 }" :duration="500"
      class="flex flex-col items-center gap-4 text-center"
    >
      <h2>
        {{ $t("index.contact.title") }}
      </h2>
      <p class="max-w-md leading-5 text-muted-foreground">
        {{ $t("index.contact.subtitle") }}
      </p>
    </header>

    <div
      v-motion :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0 }" :duration="500"
      class="grid gap-8 md:grid-cols-3"
    >
      <nuxt-link
        v-for="(link, index) in CONTACT_LINKS" :key="index"
        :to="link.url" target="_blank"
        class="group flex flex-row items-center gap-4"
      >
        <icon :name="link.icon ?? ''" size="50" class="text-primary duration-500 group-hover:scale-110" />
        <p class="flex flex-col items-start">
          <span class="font-semibold">{{ link.label }}</span>
          <span class="text-sm text-muted-foreground group-hover:underline">{{ link.text }}</span>
        </p>
      </nuxt-link>
    </div>
  </section>
</template>
