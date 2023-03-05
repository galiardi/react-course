export const getImagen = async () => {
  try {
    const apiKey = "SGa0lnWMs0QJ5xlZq6bwSJKk7P4NDpMZ";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    return "No se encontro la imagen";
  }
};
