export const cx = (...parts) => parts.filter(Boolean).join(" ");

export const img = (name) => `/images/work/${name}.webp`;

// Strips **bold** markers for plain-text contexts (meta tags, etc.) where RichText can't render.
export const stripBold = (text) => text?.replace(/\*\*([^*]+)\*\*/g, "$1");
