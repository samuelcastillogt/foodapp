const base = "https://server-food.vercel.app/"
const useApi = async(filtro)=>{
    const url = filtro? base+ filtro : base
    const response= await fetch(url)
        const data = await response.json()
        return data
}
export {useApi}