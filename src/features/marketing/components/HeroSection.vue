<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="hero__bg" aria-hidden="true">
      <div class="hero__gradient" />
      <div class="hero__spotlight" />
      <div class="hero__block hero__block--1" />
      <div class="hero__block hero__block--2" />
      <div class="hero__block hero__block--3" />
    </div>

    <div class="hero__content">
      <div class="hero__badge">
        <svg
          class="hero__badge-icon"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
        </svg>
        <span>build your web</span>
        <span class="hero__badge-dot" aria-hidden="true" />
        <span class="hero__badge-muted">From ₦4,999/mo</span>
      </div>

      <h1 class="hero__title">
        Launch your business online
        <span class="hero__title-accent">in minutes</span>
      </h1>

      <p class="hero__description">
        Website, hosting, SSL, and dashboard — all in one subscription.
        <span class="hero__description-break">No developers. No hassle.</span>
      </p>

      <div class="hero__actions">
        <a href="#pricing" class="hero__btn hero__btn--primary">
          Get Started
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <a href="#features" class="hero__btn hero__btn--secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
            <path d="M10 8.5v7l5.5-3.5L10 8.5z" fill="currentColor" />
          </svg>
          See how it works
        </a>
      </div>

      <div class="hero__trust">
        <div class="hero__avatars" aria-hidden="true">
          <span class="hero__avatar" />
          <span class="hero__avatar" />
          <span class="hero__avatar" />
        </div>
        <p>Trusted by businesses across Nigeria</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 100svh;
  padding: calc(var(--header-height) + var(--space-10)) var(--space-6) var(--space-16);
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background: #030f1c;
}

.hero__gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--color-navy-deep) 0%, #030f1c 100%);
}

.hero__spotlight {
  position: absolute;
  top: -10%;
  left: 50%;
  width: min(900px, 120vw);
  height: 520px;
  background: radial-gradient(
    ellipse at center,
    rgb(24 95 165 / 0.55) 0%,
    rgb(55 138 221 / 0.18) 40%,
    transparent 72%
  );
  transform: translateX(-50%);
  pointer-events: none;
}

.hero__block {
  position: absolute;
  border-radius: var(--radius-lg);
  opacity: 0.08;
  filter: blur(1px);
}

.hero__block--1 {
  bottom: 8%;
  left: 5%;
  width: 4.5rem;
  height: 4.5rem;
  background: var(--color-primary);
  transform: rotate(-12deg);
}

.hero__block--2 {
  bottom: 14%;
  left: 9%;
  width: 3.5rem;
  height: 3.5rem;
  background: var(--color-secondary);
  transform: rotate(-12deg);
}

.hero__block--3 {
  bottom: 20%;
  left: 13%;
  width: 2.5rem;
  height: 2.5rem;
  background: var(--color-blue-light);
  transform: rotate(-12deg);
}

.hero__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 52rem;
  margin-top: var(--space-6);
  text-align: center;
  animation: hero-rise 0.7s ease-out both;
}

@keyframes hero-rise {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
  padding: var(--space-2) var(--space-4) var(--space-2) var(--space-3);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-blue-light);
  background: rgb(24 95 165 / 0.2);
  border: 1px solid rgb(55 138 221 / 0.35);
  border-radius: var(--radius-full);
  backdrop-filter: blur(8px);
}

.hero__badge-icon {
  flex-shrink: 0;
  color: var(--color-secondary);
}

.hero__badge-dot {
  width: 3px;
  height: 3px;
  background: rgb(255 255 255 / 0.35);
  border-radius: var(--radius-full);
}

.hero__badge-muted {
  color: rgb(255 255 255 / 0.5);
}

.hero__title {
  margin-bottom: var(--space-6);
  font-size: clamp(2.5rem, 6.5vw, 4.25rem);
  font-weight: var(--font-weight-bold);
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: var(--color-text-inverse);
}

.hero__title-accent {
  display: block;
  margin-top: 0.1em;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    var(--color-blue-light) 45%,
    var(--color-secondary) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__description {
  max-width: 32rem;
  margin-bottom: var(--space-10);
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.7;
  color: rgb(255 255 255 / 0.5);
}

.hero__description-break {
  display: block;
  margin-top: var(--space-1);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  justify-content: center;
  margin-bottom: var(--space-10);
}

.hero__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: 0.8rem 1.6rem;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  border-radius: var(--radius-full);
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.hero__btn--primary {
  color: var(--color-text-inverse);
  background: var(--color-secondary);
  box-shadow:
    0 0 0 1px rgb(55 138 221 / 0.5),
    0 8px 32px rgb(24 95 165 / 0.45);
}

.hero__btn--primary:hover {
  color: var(--color-text-inverse);
  background: var(--color-primary);
  transform: translateY(-2px);
  box-shadow:
    0 0 0 1px rgb(133 183 235 / 0.4),
    0 12px 40px rgb(24 95 165 / 0.55);
}

.hero__btn--secondary {
  color: rgb(255 255 255 / 0.85);
  background: rgb(255 255 255 / 0.04);
  border: 1px solid rgb(255 255 255 / 0.12);
  backdrop-filter: blur(8px);
}

.hero__btn--secondary:hover {
  color: var(--color-text-inverse);
  background: rgb(255 255 255 / 0.08);
  border-color: rgb(255 255 255 / 0.22);
  transform: translateY(-2px);
}

.hero__trust {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  align-items: center;
  justify-content: center;
}

.hero__trust p {
  font-size: var(--font-size-sm);
  color: rgb(255 255 255 / 0.4);
}

.hero__avatars {
  display: flex;
}

.hero__avatar {
  width: 1.75rem;
  height: 1.75rem;
  margin-left: -0.4rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-blue-light));
  border: 2px solid #030f1c;
  border-radius: var(--radius-full);
}

.hero__avatar:first-child {
  margin-left: 0;
}

@media (min-width: 768px) {
  .hero {
    padding-top: calc(var(--header-height) + var(--space-12));
  }

  .hero__content {
    margin-top: var(--space-10);
  }

  .hero__title-accent {
    display: inline;
    margin-top: 0;
    margin-left: 0.2em;
  }
}
</style>
