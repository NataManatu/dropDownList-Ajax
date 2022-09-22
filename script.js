$.ajax({
    type: "POST",
    url: "test.php",
    data: {
        query: "get_continents",
    },
    success: function (response) {
        console.log(response)
        let jsonData = JSON.parse(response)

        $.each(jsonData, function (indexInArray, valueOfElement) {

            let htmlBlock = `
                <option class="optionSelect">` + valueOfElement["continent"] + `</option>
             `

            $("#continents").append(htmlBlock)
        });
    }
});

$(function () {
    $('#continents').change(function () {
        let thisContinent = $(this).val()

        $('.table_country').empty()
        $.ajax({
            type: "POST",
            url: "test.php",
            data: {
                query: "get_country",
                continent: thisContinent,
            },
            success: function (response) {

                let jsonData = JSON.parse(response)

                $.each(jsonData, function (indexInArray, valueOfElement) {

                    let htmlBlock = `
                     <p class="tb">` + valueOfElement["name"] + `</p>
                    `
                    $(".table_country").append(htmlBlock)
                });
            }
        });

    });
});

$("#population").on("input", function () {
    let thisPopulation = $(this).val()
    $('.table_country').empty()
    // alert(thisPopulation)
    $.ajax({
        type: "POST",
        url: "test.php",
        data: {
            query: "get_population",
            population: thisPopulation,
        },
        success: function (response) {

            let jsonData = JSON.parse(response)

            $.each(jsonData, function (indexInArray, valueOfElement) {

                let htmlBlock = `
                <p class="tb">` + valueOfElement["population"] + "-" + valueOfElement["name"] + `</p>
                `
                $(".table_country").append(htmlBlock)
                // alert(response)
            });

        }
    });

})