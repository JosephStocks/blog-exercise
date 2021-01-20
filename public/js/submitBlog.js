const addCustomSelectPlaceholder = (cssSelector) => {
    const selectElement = document.querySelector(cssSelector);
    selectElement.addEventListener("change", (event) => {
        selectElement.classList.remove("text-gray-500");
        selectElement.classList.add("text-black");
    });
};

addCustomSelectPlaceholder("#author");
addCustomSelectPlaceholder("#publish");

let form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    // e.preventDefault();

    console.log(e);
    // let submitResponse = await fetch("/submitBlog", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //         id: closestSVG.id,
    //     }),
    // });

    // console.log(submitResponse);
});
