let fileInput = document.getElementById("FileInputBut");
let uploadButton = document.getElementById("uploadButton");
let sharableLink = document.getElementById("sharableLink");
let likkkin = document.getElementById("praa_infr_link");

uploadButton.addEventListener("click", async () => {
    const file = fileInput.files[0];
    if (file) {
        try {
            const formData = new FormData();
            formData.append("file", file);

            uploadButton.disabled = true;
            uploadButton.textContent = "Sharing...";

            const response = await fetch("https://file.io/", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            console.log(data)
            if (data.success === true) {
                uploadButton.disabled = true;
                uploadButton.textContent = "File Upload Successfuly"
                sharableLink.textContent = data.link;
                uploadButton.classList.remove("submit_button");
                uploadButton.classList.add("buttonSuccess");
                sharableLink.setAttribute("href", data.link);
                likkkin.classList.remove("d-none");
            } else {
                sharableLink.innerHTML = "File shared was failed,Try again later";
            }
        } catch (error) {
        alert("Error Occured,Please try again . . . !")
        } finally {

        }
    } else {
        console.log("error in file uploading")
    }
})