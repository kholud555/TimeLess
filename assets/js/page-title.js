//Display Breadcrumb

function generateBreadcrumbs(pathname) {
    const pathNames = pathname.split("/").filter(path => path);
    const breadcrumbs = pathNames.map((item, i) => {
        const href = `/${pathNames.slice(0, i + 1).join("/")}`;
        const anchor = item.replace(/-/g, " ").replace(/\.[^/.]+$/, ""); // Remove file extension
        return { href, anchor };
    });
    breadcrumbs.unshift({ href: "/", anchor: "Home" });
    return breadcrumbs;
}

function displayBreadcrumbs() {
    const breadcrumbContainer = document.getElementById("breadcrumb");
    const currentPath = window.location.pathname;
    const breadcrumbs = generateBreadcrumbs(currentPath);

    breadcrumbContainer.innerHTML = breadcrumbs.map(crumb => 
        `<a href="${crumb.href}">${crumb.anchor}</a>`
    ).join(" / ");
}




//Display the Page title
function displayPageTitle() {
    const pageTitleElement = document.getElementById("page-title");
    const pageTitle = document.title;
    pageTitleElement.textContent = pageTitle;
}

// Call the function to display breadcrumbs & Page Title
displayBreadcrumbs();
displayPageTitle();