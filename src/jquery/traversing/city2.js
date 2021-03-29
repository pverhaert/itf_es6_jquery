// add data-city to each li
$('#cityList li').each(function () {
    $(this).attr('data-city', $(this).text().toLowerCase().trim());
});

$('#filter').keyup(function () {
    const filter = $(this).val().toLowerCase();
    console.log('filter', filter);
    if (filter === '') {
        // filter is empty: show all cities
        $('#cityList li').show();
    } else {
        // filter is not empty
        $('#cityList li').hide();
        $(`#cityList li[data-city*=${filter}]`).show();
    }
    countCities();
});

// visible cities
function countCities() {
    const counter = $('#cityList li:visible').length;
    $('label[for=filter]').html(`<b>${counter}</b> cities visible`);
}

countCities();
