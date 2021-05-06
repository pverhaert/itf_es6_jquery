// Accordion [jQuery]
$('h3').click((e) => {
    const title = $(e.target).text().toLowerCase();
    $(`div[data-id=${title}]`).slideToggle();
});
