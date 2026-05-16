/**
 * Envía un evento personalizado a Google Analytics 4 (GA4)
 * @param eventName Nombre del evento en snake_case (ej: click_add_package)
 * @param params Parámetros adicionales como precio, moneda o nombre del producto
 */
export const trackGA4Event = (
  eventName: string,
  params?: Record<string, any>,
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
    console.log(`[GA4 Tracked]: ${eventName}`, params);
  } else {
    console.warn(
      "[GA4]: La función gtag no está disponible en la ventana global.",
    );
  }
};
