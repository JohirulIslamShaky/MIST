// Tutorial 21-30 start
$('.carousel').carousel({
    interval: 2000
});
$('[data-toggle="tooltip"]').tooltip();

function showToolTip() {
    $('#tooltipButton').tooltip('show');
};

function hideToolTip() {
    $('#tooltipButton').tooltip('hide');
};

function toggleToolTip() {
    $('#tooltipButton').tooltip('toggle');
};
$('[data-toggle="popover"]').popover();

function showPopover() {
    $('#autoWho').popover('show');
};

function hidePopover() {
    $('#autoWho').popover('hide');
};

function togglePopover() {
    $('#autoWho').popover('toggle');
};
// Tutorial 21-30 end
