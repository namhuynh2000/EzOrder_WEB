$('#detailOrderDialog').on('show.bs.modal', function (event) {
    button = $(event.relatedTarget); // Button that triggered the modal
    
    const orderId = button.data('id');
    $.getJSON (`api/orders/${orderId}`, function(result) {
        var productHtml = templateModal({result});
        document.querySelector("#detailOrderDialog .modal-body").innerHTML = productHtml;
        

    })
})