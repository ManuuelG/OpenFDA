# App de búsqueda de medicamentos con la API OpenFDA

## Objetivo

El objetivo de este proyecto es desarrollar una aplicación web en React que permita a los usuarios buscar y visualizar detalles de medicamentos registrados en Estados Unidos utilizando el API de OpenFDA. Los principales requisitos incluyen la implementación de un campo de búsqueda, la presentación de resultados paginados, y la visualización detallada de cada medicamento seleccionado.

## Características

- **Búsqueda Interactiva**: Permite a los usuarios buscar medicamentos por nombre genérico utilizando un campo de búsqueda.
- **Visualización de Resultados**: Muestra los resultados de búsqueda en una lista paginada, utilizando Material-UI para una interfaz de usuario atractiva y responsive.

- **Detalles del Medicamento**: Al hacer clic en un medicamento de la lista, se muestra una página detallada con información específica del medicamento seleccionado.

## Estructura del Proyecto

El proyecto está estructurado en las siguientes carpetas y archivos principales:

- **components/**: Contiene componentes reutilizables como `CustomSearchBox`, `ProductCard`, `Pagination`, etc.
- **CustomHooks/**: Incluye hooks personalizados como `useMedications` y `useMedicationDetails` para la lógica de búsqueda y gestión de datos.

- **pages/**: Contiene las páginas principales de la aplicación, como `Catalog` para la lista de medicamentos y `DrugPageDetails` para los detalles de un medicamento específico.

- **router.jsx**: Gestiona la navegación entre las páginas utilizando React Router para asegurar una experiencia de usuario fluida.

## Tecnologías Utilizadas

- **React**: Framework utilizado para el desarrollo de la interfaz de usuario.
- **React Router**: Para la gestión de la navegación entre las diferentes vistas de la aplicación.

- **Material-UI**: Utilizado para los estilos y componentes visuales, asegurando un diseño responsive y moderno.
