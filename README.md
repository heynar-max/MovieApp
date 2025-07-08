Este es un nuevo proyecto [**React Native**](https://reactnative.dev) , iniciado utilizando [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Empezando

> **Nota**: asegúrese de haber completado la guía [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) antes de continuar.

## Paso 1: iniciar Proyecto

Primero, necesitarás ejecutar Metro , la herramienta de compilación de JavaScript para React Native.

Para iniciar el servidor de desarrollo Metro, ejecute el siguiente comando desde la raíz de su proyecto React Native:

```sh
# Using npm
npm start

yarn start
```
## Paso 2: crea y ejecuta tu aplicación

Con Metro en ejecución, abra una nueva ventana/panel de terminal desde la raíz de su proyecto React Native y use uno de los siguientes comandos para compilar y ejecutar su aplicación de Android o iOS:

## Paso 3: Dependencias y paquetes para la aplicación
-- [**React Navigation**](https://reactnavigation.org/) --
```sh
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
```
en la carpeta MainActivity.kt se copia estas lineas
```sh
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
    }
```
debe importar este paquete
```sh
import android.os.Bundle;
```

se instala el stack
```sh
npm install @react-navigation/stack
npm install react-native-gesture-handler
npm install @react-native-masked-view/masked-view
```


instalar axios
```sh
npm i axios;
```
