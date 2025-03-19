/**
 * Represents an image object with metadata.
 */
export interface Image {
  id?: number;
  src?: string;
  fileName: string;
  alt: string;
  width?: number;
  height?: number;
  provider: string;
  cdnUrl?: string;
  link?: string;
}

/**
 * Retrieves the appropriate image source URL based on the provider type.
 *
 * - If `image.src` is provided, it takes priority.
 * - If the provider is `'local'`, it returns `/images/{fileName}`.
 * - If the provider is `'cdn'`, it returns `cdnUrl` if available.
 * - If the provider is invalid, defaults to `'local'`.
 * - Returns an empty string if `fileName` is missing.
 *
 * @param {Image} image - The image object to resolve.
 * @param {number} image.id - Unique identifier for the image.
 * @param {string} [image.src] - Optional predefined source URL.
 * @param {string} image.fileName - The filename of the image (used for local images).
 * @param {string} [image.alt] - Alternative text for accessibility.
 * @param {number} [image.width] - Image width in pixels (optional).
 * @param {number} [image.height] - Image height in pixels (optional).
 * @param {string} image.provider - Provider type indicating where the image is stored.
 * @param {string} [image.cdnUrl] - CDN URL for the image (used if provider is 'cdn').
 * @param {string} [image.link] - Optional external link associated with the image.
 * @returns {string} The resolved image source URL.
 */
export function getImageSrc(image: Image): string {
  if (image.src) return image.src;
  if (!image.fileName) return '';

  // Ensure provider is either 'cdn' or 'local', defaulting to 'local' if invalid
  const validProvider = image.provider === 'cdn' ? 'cdn' : 'local';

  return validProvider === 'local'
    ? `/images/${image.fileName}`
    : (image.cdnUrl ?? '');
}
