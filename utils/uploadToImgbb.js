async function uploadToImgbb(file) {
  const formData = new FormData();

  formData.append("image", file.buffer.toString("base64"));
  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_KEY}`,
    {
      method: "POST",
      body: formData,
    }
  );
  if (!response.ok) {
    throw new Error("Failed to upload image");
  }
  const data = await response.json();

  return data;
}
export default uploadToImgbb;
