import axios from "axios"
const BASE_URL = 'http://localhost:5000'
import case1 from "../src/assets/Case1.png"
import case2 from "../src/assets/Case2.png"
import outbreak1 from "../src/assets/Outbreak1.png"
import outbreak2 from "../src/assets/Outbreak2.png"
import risk1 from "../src/assets/Risk1.png"
import risk2 from "../src/assets/Risk2.png"
import capacity1 from "../src/assets/Capacity1.png"
import capacity2 from "../src/assets/Capacity2.png"

/*export async function getAllGraphs() {
    let graphReturn = {}
    graphReturn.outbreak = await getOutbreak()
    graphReturn.case = await getCase()
    graphReturn.capacity = await getCapacity()
    graphReturn.risk = await getRisk()
    graphReturn.table = await getTable()
    return graphReturn
}*/

export async function getAllGraphs1() {
    let graphReturn = {}
    graphReturn.outbreak = await getOutbreak1()
    graphReturn.case = await getCase1()
    graphReturn.capacity = await getCapacity1()
    graphReturn.risk = await getRisk1()
    return graphReturn
}

export async function getAllGraphs2() {
    let graphReturn = {}
    graphReturn.outbreak = await getOutbreak2()
    graphReturn.case = await getCase2()
    graphReturn.capacity = await getCapacity2()
    graphReturn.risk = await getRisk2()
    return graphReturn
}

/*async function getOutbreak() {
    let data = await axios.get(`${BASE_URL}/outbreak`)
    return data.data
}*/

/*async function getCase() {
    let data = await axios.get(`${BASE_URL}/case`)
    return data.data
}

async function getCapacity() {
    let data = await axios.get(`${BASE_URL}/capacity`)
    return data.data
}

async function getRisk() {
    let data = await axios.get(`${BASE_URL}/risk`)
    return data.data
}

async function getTable() {
    let data = await axios.get(`${BASE_URL}/table`)
    return data.data
}*/

async function getOutbreak1() {
    return outbreak1
}

async function getCase1() {
    return case1
}

async function getCapacity1() {
    return capacity1
}

async function getRisk1() {
    return risk1
}

async function getOutbreak2() {
    return outbreak2
}

async function getCase2() {
    return case2
}

async function getCapacity2() {
    return capacity2
}

async function getRisk2() {
    return risk2
}

