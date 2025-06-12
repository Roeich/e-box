$(document).ready(function() {
    // Accordion toggle
    $('.faq__accordion-button').on('click', function() {
        $(this).parent().toggleClass('active');
    });

    // Open modal
    $('[data-modal-target]').on('click', function() {
        const targetId = $(this).data('modal-target');
        $('#' + targetId).css('display', 'flex');
    });

    // Close modal
    $('[data-close]').on('click', function() {
        $(this).closest('.modal').css('display', 'none');
    });

    // Close modal on outside click
    $(window).on('click', function(e) {
        $('.modal').each(function() {
            if (e.target === this) {
                $(this).css('display', 'none');
            }
        });
    });

    // Handle check
    $('[data-check]').on('click', function() {
        const id = $(this).data('check');
        $('#' + id).prop('checked', true);
        orderPreviewItems();
    });

    // Handle uncheck
    $('[data-uncheck]').on('click', function() {
        const id = $(this).data('uncheck');
        $('#' + id).prop('checked', false);
        orderPreviewItems();
    });

    // 
    $(".form_select__input").on("change", function() {
        orderPreviewItems();
    })

    // order preview items
    function orderPreviewItems() {
        $(".order_preview__items .order_preview__item").remove();
        let inner_html = ``;
        $(".form_select").each((ind, elm) => {
            if ($(elm).find(".form_select__input").is(":checked")) {
                inner_html += `
                    <tr class="order_preview__item">
                        <td>1x</td>
                        <td>${$(elm).find(".form_select__title").html()}</td>
                        <td>
                `;
                if($(elm).find(".form_select__oldPrice").html()){
                    inner_html+=`
                            <span class="order_preivew__oldPrice">${$(elm).find(".form_select__oldPrice").html()}</span><br>
                            <b class="order_preview__price">${$(elm).find(".form_select__price").html()}</b>
                        </td>
                    </tr>
                    `;
                }else{
                    inner_html+=`
                            <b class="order_preview__price">${$(elm).find(".form_select__price").html()}</b>
                        </td>
                    </tr>
                    `;
                }
            }
        });
        $(".order_preview__items").append(inner_html);
        calculateTotalPrice();
    }
    function calculateTotalPrice(){
        let totalPrice=0;
        let unitName=$(".order_preview__totalPrice").text().split(" ")[1];
        $(".order_preview__items .order_preview__price").each((ind,elm)=>{
            const price=parseFloat($(elm).text());
            totalPrice+=price;
        });
        $(".order_preview__totalPrice").html(totalPrice+" "+unitName);
    }
    orderPreviewItems();

    // product modal slider

    $(".prdModal_slider").owlCarousel({
        items: 1,
        dots: true,
        nav: false
    })
});