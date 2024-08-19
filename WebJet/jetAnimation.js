//смена городов местами
function switchInputValues() {
    var fromValue = document.getElementById('custom-inputFrom').value;
    var toValue = document.getElementById('custom-inputTo').value;

    document.getElementById('custom-inputFrom').value = toValue;
    document.getElementById('custom-inputTo').value = fromValue;
}

$(function() {
    $(".datepicker").datepicker({
        dateFormat: "dd M yy",
        onSelect: function(dateText) {
            $(this).next(".openCalendar").text(dateText);
        }
    });

    $(".openCalendar").click(function() {
        $(this).prev(".datepicker").datepicker("show");
    });
});

function BuyTickets() {
    var inputFrom = document.getElementById('custom-inputF').querySelector('input').value;
    var inputTo = document.getElementById('custom-inputT').querySelector('input').value;
    var departureDate = document.getElementById('DateDeparture').value;
    var returnDate = document.getElementById('DateReturn').value;

    if (!inputFrom) {
        var errorMessage = document.getElementById('custom-inputF').querySelector('.error-message');
        errorMessage.style.display = 'block';
        document.getElementById('custom-inputF').classList.add('error');
    } else {
        var errorMessage = document.getElementById('custom-inputF').querySelector('.error-message');
        errorMessage.style.display = 'none';
        document.getElementById('custom-inputF').classList.remove('error');
    }

    if (!inputTo) {
        var errorMessage = document.getElementById('custom-inputT').querySelector('.error-message');
        errorMessage.style.display = 'block';
        document.getElementById('custom-inputT').classList.add('error');
    } else {
        var errorMessage = document.getElementById('custom-inputT').querySelector('.error-message');
        errorMessage.style.display = 'none';
        document.getElementById('custom-inputT').classList.remove('error');
    }

    if (inputFrom && inputTo && departureDate && returnDate) {
        window.location.href = 'https://www.aviasales.ru/?marker=15468.ydof241343903649&yclid=13151834494555914239';
    }
}

