FROM docker.io/library/node:24-bookworm-slim AS builder

WORKDIR /opt/app-root/src
ENV CI=true

RUN npm install --global corepack@0.35.0 && corepack enable

# Install the locked dependencies before source changes invalidate the cache.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY tsconfig.json vite.config.mts ./
COPY src/ ./src/
RUN pnpm build

FROM scratch

LABEL org.opencontainers.image.title="Lima" \
      org.opencontainers.image.description="Lima extension for Podman Desktop" \
      org.opencontainers.image.vendor="podman-desktop" \
      org.opencontainers.image.licenses="Apache-2.0" \
      io.podman-desktop.api.version=">=1.29.1"

COPY --from=builder /opt/app-root/src/dist/ /extension/dist/
COPY package.json icon.png logo-dark.png logo-light.png LICENSE README.md /extension/
