
const fetchRecepies = async ()=> {
try {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const data = await response.json()

    console.log(data)
	return data
} catch (error) {
	console.error(error);
}

}
export default fetchRecepies