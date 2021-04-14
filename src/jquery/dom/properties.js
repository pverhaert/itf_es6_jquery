const checkbox1 = $('#check1');
const checkbox2 = $('#check2');

$('pre:first-of-type').html(`
    checkbox1.attr('checked'): ${checkbox1.attr('checked')}
    checkbox1.attr('disabled'): ${checkbox1.attr('disabled')}
    checkbox1.prop('checked'): ${checkbox1.prop('checked')}
    checkbox1.prop('disabled'): ${checkbox1.prop('disabled')}
    checkbox1.val(): ${checkbox1.val()}
    
    checkbox2.attr('checked'): ${checkbox2.attr('checked')}
    checkbox2.attr('disabled'): ${checkbox2.attr('disabled')}
    checkbox2.prop('checked'): ${checkbox2.prop('checked')}
    checkbox2.prop('disabled'): ${checkbox2.prop('disabled')}
    checkbox2.val(): ${checkbox2.val()}
`);

// disable checkbox1
checkbox1.prop('disabled', true);
