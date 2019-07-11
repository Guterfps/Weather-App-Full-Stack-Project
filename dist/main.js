
const tempManager=new TempManager
const renderer=new Renderer
const loadPage= async function(){
 await  tempManager.getDataFromDB()
 renderer.renderData(tempManager.cityData)
 console.log(tempManager.cityData)
}

const handleSearch=async function (){
    $('.city-container').empty()
    const input=$("#city-input").val()
   await tempManager.getCityData(input)
    renderer.renderData(tempManager.cityData)
    console.log(tempManager.cityData)
}

$('body').on('click','#search',function(){
    handleSearch()

})

$('body').on('click','.save',function(){
    const name=$(this).siblings('h2').text()
    tempManager.saveCity(name)
    console.log(name)
})

$('body').on('click','.remove',function(){
    const name=$(this).siblings('h2').text()
    tempManager.removeCity(name)
    
})

loadPage()