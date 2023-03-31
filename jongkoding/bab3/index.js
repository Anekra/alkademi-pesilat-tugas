const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id");
const getImage = () => {
  if (id == 1) return "image1.png";
  else if (id == 2) return "image2.png";
  else if (id == 3) return "image3.jpg";
  else return "image4.jpg";
};
const getText = () => {
  if (id == 1) return "Wisata ke Bali";
  else if (id == 2) return "Wisata ke Hutan";
  else if (id == 3) return "Wisata ke Bogor";
  else return "Wisata ke Jakarta";
};
const image = document.getElementById("detail-img");
image.setAttribute("src", getImage());
const text = document.getElementById("detail-text");
text.innerHTML = getText();
