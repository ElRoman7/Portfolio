# 1️⃣ Imagen base con Node para build
FROM node:20-alpine AS build

# Directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el resto del código
COPY . .

# Build de producción de Angular
RUN npm run build -- --configuration production

# 2️⃣ Servir con NGINX
FROM nginx:alpine

# Copiar configuración de NGINX opcional
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar archivos compilados desde etapa de build
COPY --from=build /app/dist/portfolio /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80

# Comando por defecto para NGINX
CMD ["nginx", "-g", "daemon off;"]
