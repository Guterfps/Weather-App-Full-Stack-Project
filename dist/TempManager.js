class  TempManager{
    constructor(){
        this.cityData=[]
    }
    async  getDataFromDB(){
    const data=await    $.get('/cities',function(res){
       return res
            
        })
        data.forEach(x =>this.cityData.push(x) )
    }
    async getCityData(cityName){
     const data=  await $.get(`/city/${cityName}`,function(res){
       return res
       
        })
        this.cityData.push(data)
    }
    saveCity(cityName){
      const city=  this.cityData.find(x=>x.name===cityName)
    $.post('/city',city,function(data, status){
      console.log(data,status)
      
    })
    }
    removeCity(cityName){
        $.ajax({
            url: `/city/${cityName}`,
            type: 'DELETE',
            success: function(result) {
                console.log(result)
            }
    })
}
}


