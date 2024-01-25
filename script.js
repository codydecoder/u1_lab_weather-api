
const apiKey = "5a2776fcaff047a29b1141458242501"
const button = document.querySelector("#submitButton")



button.addEventListener('click', async () => {
try{
    const input = document.querySelector("#textInput").value
    const cityName = document.querySelector("#cityName")
    const temp = document.querySelector("#temp")
    const conditions = document.querySelector("#conditions")
    let weatherIcon = document.querySelector("#weatherIcon")


    let response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${input}&aqi=no`)
    
    console.log(response)
    //console.log(`The current temp in ${input} is ${response.data.current.feelslike_f} degrees F`)
    console.log(input)
    console.log(response.data.current.condition.text)
    console.log(response.data.current.condition.icon)

    
    
    let capCity = response.data.location.name 
    let currentConditions = response.data.current.condition.text 
    let currentTemp = response.data.current.feelslike_f
    let weatherImage = response.data.current.condition.icon

    
    //DOM manip
    
    cityName.innerHTML = `<span class="prefixText">City: </span>${capCity}`
    temp.innerHTML = `<span class="prefixText">Temp(F): </span>${currentTemp} degrees`
    conditions.innerHTML = `<span class="prefixText">Conditions: </span>${currentConditions}`
    
    weatherIcon.innerHTML = `<img src="${weatherImage}">`

}
catch (error) {
    alert("Please enter a valid city name.")
}
})
