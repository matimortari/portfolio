<template>
  <section id="hero" class="relative flex min-h-screen items-center justify-center overflow-hidden">
    <div class="hero-background" />
    <div class="corner-accent corner-tl" />
    <div class="corner-accent corner-br" />

    <div class="relative z-20 flex flex-col-reverse items-center justify-center gap-8 px-4 py-24 md:mx-auto md:flex-row md:gap-24">
      <header class="flex flex-1 flex-col gap-4 text-center md:text-start">
        <div class="flex flex-col gap-2">
          <h1
            v-motion :initial="{ opacity: 0, y: -30, rotateX: -90 }"
            :visible-once="{ opacity: 1, y: 0, rotateX: 0 }" :duration="800"
            :delay="300"
          >
            {{ $t("index.hero.title") }}
          </h1>
          <h2
            v-motion :initial="{ opacity: 0, x: -50, scale: 0.9 }"
            :visible-once="{ opacity: 1, x: 0, scale: 1 }" :duration="800"
            :delay="500" class="bg-linear-to-r from-muted-foreground to-primary bg-clip-text px-12 text-transparent md:px-0"
          >
            {{ $t("index.hero.subtitle") }}
          </h2>
        </div>

        <div
          v-motion :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0 }" :duration="600"
          :delay="700" class="flex flex-col items-center gap-4 md:items-start md:justify-start"
        >
          <div class="flex w-full max-w-[80%] flex-col items-center justify-center gap-2 md:flex-row md:items-start md:justify-start">
            <nuxt-link
              v-for="(resume, index) in HERO_RESUME_LINKS" :key="index"
              v-motion :initial="{ opacity: 0, scale: 0.8 }"
              :visible-once="{ opacity: 1, scale: 1 }" :duration="500"
              :delay="900 + index * 100" :to="resume.url"
              target="_blank" class="group btn w-full md:w-auto"
            >
              <span>{{ $t(resume.label) }}</span>
              <icon name="material-symbols:arrow-outward" size="25" class="shrink-0 duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </nuxt-link>
          </div>

          <div class="flex max-w-[80%] items-center gap-2 md:flex-row md:flex-wrap md:items-start md:justify-start">
            <nuxt-link
              v-for="(link, index) in HERO_CONTACT_LINKS" :key="index"
              v-motion :initial="{ opacity: 0, y: 20, scale: 0.5 }"
              :visible-once="{ opacity: 1, y: 0, scale: 1 }" :duration="400"
              :delay="1100 + index * 80" :to="link.url"
              target="_blank" class="group btn w-full justify-start md:w-auto"
            >
              <icon :name="link.icon ?? ''" size="25" class="shrink-0 duration-500 group-hover:scale-110" />
              <span class="hidden md:inline">{{ link.label }}</span>
            </nuxt-link>
          </div>
        </div>
      </header>

      <div
        v-motion :initial="{ opacity: 0, scale: 0.5, rotateY: 180 }"
        :visible-once="{ opacity: 1, scale: 1, rotateY: 0 }" :duration="1000"
        :delay="200" class="avatar-container"
      >
        <div class="avatar-border" />
        <div class="avatar-glow" />
        <img src="/assets/avataaar.png" alt="Avatar" class="relative size-full rounded-full object-cover">
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(ellipse at 20% 30%, rgba(76, 64, 131, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 70%, rgba(76, 64, 131, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(76, 64, 131, 0.05) 0%, transparent 60%);
}

.corner-accent {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid var(--primary);
  z-index: 2;
}
.corner-tl {
  top: 1rem;
  left: 1rem;
  border-right: none;
  border-bottom: none;
  animation: pulse-border 3s ease-in-out infinite;
}
.corner-br {
  bottom: 1rem;
  right: 1rem;
  border-left: none;
  border-top: none;
  animation: pulse-border 3s ease-in-out infinite 1.5s;
}

@keyframes pulse-border {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

.avatar-container {
  position: relative;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 1024px) {
  .avatar-container {
    width: 300px;
    height: 300px;
  }
}

.avatar-border {
  position: absolute;
  inset: -1px;
  border: 4px solid var(--primary);
  border-radius: 50%;
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  z-index: 1;
  animation: rotate-border 10s linear infinite;
}

.avatar-glow {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(76, 64, 131, 0.3) 0%, transparent 70%);
  z-index: 0;
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes rotate-border {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}
</style>
