# Étape 1 : build
FROM node:22 AS build
WORKDIR /app

# Arguments de build pour les variables d'environnement Next.js
ARG NEXT_PUBLIC_ENV

# Les rendre disponibles pendant le build
ENV NEXT_PUBLIC_ENV=$NEXT_PUBLIC_ENV

# Définir NODE_ENV pour la production
ENV NODE_ENV=production

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation de TOUTES les dépendances (dev incluses) pour le build
RUN npm install --legacy-peer-deps

# Copie du code source
COPY . .

# Build de l'application Next.js (génère dans /.next)
RUN npm run build

# Étape 2 : serveur léger pour servir l'application Next.js
FROM node:22 AS runner
WORKDIR /app

# Créer un utilisateur non-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copier les fichiers nécessaires depuis l'étape de build
COPY --from=build /app/public ./public

# Copier les fichiers de build Next.js
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

# Variables d'environnement pour la production
ENV NODE_ENV=production
ENV PORT=3003
ENV HOSTNAME="0.0.0.0"

USER nextjs

EXPOSE 3003

CMD ["node", "server.js"]