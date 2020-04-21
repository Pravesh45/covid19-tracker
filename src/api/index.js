import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    let modifiedUrl = url
    if (country !== "global") {
        modifiedUrl = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(modifiedUrl)
        return { confirmed, recovered, deaths, lastUpdate }
    }
    catch (error) {

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData
    }
    catch (e) {
        console.log("Couldn't fetch data")
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)

        const country = countries.map((item) => item.name)
        return country

    }
    catch (e) {
        console.log("Couldn't fetch the information...try again")
    }
}