let population_min = 0;
let population_max = 999999999999;


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
                     <p ><span><b>` + valueOfElement["name"] + `</b></span>`+"-" + valueOfElement["population"]+" "+"(population)" + `</p>
                    `
                    $(".table_country").append(htmlBlock)
                });
            }
        });

    });


$("#population").on("input", function () {
    let thisPopulation = $(this).val()
    population_min = thisPopulation
    $('.table_country').empty()
    // alert(thisPopulation)
    $.ajax({
        type: "POST",
        url: "test.php",
        data: {
            query: "get_population",
            population_min: population_min,
            population_max: population_max,
        },
        success: function (response) {
            console.log(response)

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
$("#population_to").on("input", function () {
    let thisPopulationTo = $(this).val()
    population_max = thisPopulationTo
    $('.table_country').empty()
    // alert(thisPopulation)
    $.ajax({
        type: "POST",
        url: "test.php",
        data: {
            query: "get_population",
            population_min: population_min,
            population_max: population_max,
        },
        success: function (response) {
            console.log(response)
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