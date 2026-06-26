async function load(id, file) {
    const element = document.getElementById(id);

    if (!element) return;

    const response = await fetch(file);
    const html = await response.text();
    element.innerHTML = html;
}

load("header", "includes/header.html");
load("footer", "includes/footer.html");