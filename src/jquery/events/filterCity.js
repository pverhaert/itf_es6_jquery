// add the lowercase city name as 'data-city' attribute to each li
$('#cityList li').each(function () {
    $(this).attr('data-city', $(this).text().toLowerCase().trim());
});

$('#filter')
    .keyup(function () {
        // get the lowercase value from the text field #filter
        const filter = $(this).val().toLowerCase();
        console.clear();
        console.log('filter:', filter);
        if (filter === '') {
            // filter is empty: show all cities
            $('#cityList li').show();
        } else {
            // filter is not empty: first hide all cities
            $('#cityList li').hide();
            // show the cities for which the data-city attribute contains the filter value
            $(`#cityList li[data-city*=${filter}]`).show();
        }
        // count only the visible cities
        const counter = $('#cityList li:visible').length;
        $('label[for=filter]').html(`<b>${counter}</b> cities visible`);
    })
    .keyup(); // trigger the keyup event when (re)loading the page
