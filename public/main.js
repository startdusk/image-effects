const init = async () => {
  let rustApp = null;
  try {
    rustApp = await import("../pkg");
  } catch (error) {
    console.error(error);
  }
  console.log(rustApp);

  const input = document.getElementById("upload");

  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    const result = fileReader.result;
    let base64 = result.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
    let imgDataUrl = "";
    try {
      imgDataUrl = rustApp.grayscale(base64);
    } catch (error) {
      console.error(error);
      alert("image not a png file");
      return;
    }
    document.getElementById("new-img").setAttribute("src", imgDataUrl);
  };

  input.addEventListener("change", () => {
    fileReader.readAsDataURL(input?.files[0]);
  });
};

init();
