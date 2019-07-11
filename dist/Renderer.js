class Renderer{
   
    renderData(allCityData){
        const source=$("#city-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({allCityData:allCityData})
        $(".city-container").append(newHTML)
    }
}
