export async function svgToBlob(avatarRef: SVGSVGElement | null): Promise<Blob | null> {
    if (!avatarRef) return null;

    // Serialize the SVG element to a string
    const svgString = new XMLSerializer().serializeToString(avatarRef);
    // Create a Blob from the serialized SVG string
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });

    // Return the blob
    return blob;
}