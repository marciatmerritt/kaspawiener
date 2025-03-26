/**
 * Represents an image object with metadata.
 */
export interface Image {
  src?: string;
  fileName: string;
  provider: string;
  cdnUrl?: string;
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
 * @param {string} [image.src] - Optional predefined source URL.
 * @param {string} image.fileName - The filename of the image (used for local images).
 * @param {string} image.provider - Provider type indicating where the image is stored.
 * @param {string} [image.cdnUrl] - CDN URL for the image (used if provider is 'cdn').
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
