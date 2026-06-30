<script setup lang="ts">
import AppLogo from '@/shared/components/AppLogo.vue'

const navLinks = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Features', href: '#features' },
  { label: 'FAQ', href: '#faq' },
]
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <RouterLink to="/" class="header__brand">
        <AppLogo variant="icon" :height="28" />
        <span class="header__wordmark">Web<span class="header__wordmark-accent">Blox</span></span>
      </RouterLink>

      <nav class="header__nav" aria-label="Main navigation">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="header__link">
          {{ link.label }}
        </a>
      </nav>

      <div class="header__actions">
        <button type="button" class="header__theme" aria-label="Toggle theme">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <a href="#pricing" class="header__cta">Get Started</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  height: var(--header-height);
  border-bottom: 1px solid rgb(255 255 255 / 0.06);
  background: rgb(4 44 83 / 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.header__inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  max-width: 80rem;
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--space-8);
}

.header__brand {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  justify-self: start;
}

.header__wordmark {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-inverse);
  letter-spacing: -0.03em;
}

.header__wordmark-accent {
  color: var(--color-blue-light);
}

.header__nav {
  display: none;
  align-items: center;
  gap: var(--space-8);
  justify-self: center;
}

.header__link {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-normal);
  color: rgb(255 255 255 / 0.55);
  transition: color 0.2s ease;
}

.header__link:hover {
  color: rgb(255 255 255 / 0.9);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  justify-self: end;
}

.header__theme {
  display: none;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  color: rgb(255 255 255 / 0.55);
  background: transparent;
  border: 1px solid rgb(255 255 255 / 0.12);
  border-radius: var(--radius-full);
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.header__theme:hover {
  color: rgb(255 255 255 / 0.9);
  background: rgb(255 255 255 / 0.05);
  border-color: rgb(255 255 255 / 0.2);
}

.header__cta {
  padding: var(--space-2) var(--space-5);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-inverse);
  background: transparent;
  border: 1px solid rgb(255 255 255 / 0.2);
  border-radius: var(--radius-full);
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.header__cta:hover {
  color: var(--color-text-inverse);
  background: rgb(255 255 255 / 0.06);
  border-color: rgb(255 255 255 / 0.35);
  transform: translateY(-1px);
}

@media (min-width: 768px) {
  .header__nav {
    display: flex;
  }

  .header__theme {
    display: flex;
  }
}

@media (min-width: 1024px) {
  .header__nav {
    gap: var(--space-10);
  }
}
</style>
