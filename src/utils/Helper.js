export const getContentById = (content, id) => {
    let defaultPage;

    content.sidebar.forEach(sidebar => {
        sidebar.pages.forEach(page => {
            if (page.id === id){
                defaultPage = page;
            }
        })
    })

    return defaultPage;
}