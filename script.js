// Divadlo - vypocti prijem z listku
document.body.innerHTML += "<h4>--- Priklad: Vypocti prijem divadla ----------------------------------- " + "</h4>"
const cenaListku = 12
const navstevnici = 174
const pocetPredstaveniMesicne = 15
const prijemDivadla = navstevnici * pocetPredstaveniMesicne * cenaListku
document.body.innerHTML += "<p> Prijem divadla za mesic: " + prijemDivadla + " Eur</p>" 

const studenti = navstevnici * 0.4
const cenaListkuStudent = cenaListku * 0.65
const prijemDivadlaSestudenty = (studenti * cenaListkuStudent * pocetPredstaveniMesicne) + ((navstevnici - studenti) * cenaListku *pocetPredstaveniMesicne)
document.body.innerHTML += "<p> Prijem divadla se studenty za mesic: " + prijemDivadlaSestudenty + " Eur</p>" 