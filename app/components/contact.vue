<template>
  <section id="contact" class="flex w-full flex-col items-center gap-8 text-center md:py-20">
    <header v-motion="MOTION_FADE_UP" class="flex flex-col items-center gap-4 text-center">
      <h2>
        {{ $t("index.contact.title") }}
      </h2>
      <p class="max-w-sm leading-5 text-muted-foreground">
        {{ $t("index.contact.subtitle") }}
      </p>
    </header>

    <div class="grid gap-8 md:grid-cols-3">
      <nuxt-link
        v-for="(link, index) in CONTACT_LINKS" :key="index"
        v-motion="MOTION_FADE_UP" :delay="80 + index * 80"
        :to="link.url" target="_blank"
        class="group flex flex-col items-center gap-4 md:flex-row"
      >
        <icon :name="link.icon ?? ''" size="40" class="text-primary duration-300 group-hover:scale-110" />

        <p class="flex flex-col items-center md:items-start">
          <span class="font-semibold">{{ link.label }}</span>
          <span class="text-sm text-muted-foreground group-hover:underline">{{ link.text }}</span>
        </p>
      </nuxt-link>
    </div>
  </section>
</template>
