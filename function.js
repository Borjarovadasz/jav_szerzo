/**
 * Ez a függvény hozzá létre a headerünket aminek a bemeneti értéke egy array
 * és egy globális tr- változó.
 * @param {Array} arrayobj 
 * @param {HTMLTableRowElement} sor 
 */
function generateheader(arrayobj, sor) {
    for(let adat of arrayobj) {

        const th = document.createElement('th')
        th.innerHTML = adat.szoveg
    
        sor.appendChild(th)
    
        if(adat.szoveg == "Művei") {
            th.colSpan = 2
        }
    }
    
}
/**
 * Ez a függvény hozza létre a tablet. Bemeneti paramétere egy array amiben vannak az adatok
 * és egy globális htmlbody.
 * @param {Array} arrayobj 
 * @param {HTMLTableSectionElement} bodyelement 
 */
function rendertable(arrayobj, bodyelement) {
    for(let i = 0; i < arrayobj.length; i++ ) { //végigiterálok egy for ciklussal az array-en
        const mostanielement = arrayobj[i]  //az i-dik element a mostanielement lesz
        const sor = document.createElement('tr') // csinálok egy sort

        bodyelement.appendChild(sor) //a fő táblázathoz hozzácsatolom a sort

        const elsosor = document.createElement('td') //elsosor létrehozása
        elsosor.innerHTML = mostanielement.szerzonev //elsosor innerHTML-je a az array-ben a mostanielement (i)-nek a sor1.je
        sor.appendChild(elsosor) //hozzátesszük a sorhoz az elso oszlop elso elemjét 

        const masodiksor = document.createElement('td') //masodiksor létrehozása
        masodiksor.innerHTML = mostanielement.csapat //masodiksor innerHTML-je a az array-ben a mostanielement (i)-nek a sor2.je
        sor.appendChild(masodiksor) //hozzátesszük a sorhoz az elso oszlop masodik elemjét 

        const harmadiksor = document.createElement('td') //harmadiksor létrehozása
        harmadiksor.innerHTML = mostanielement.Művei1 //harmadiksor innerHTML-je a az array-ben a mostanielement (i)-nek a sor3.je
        sor.appendChild(harmadiksor) //hozzátesszük a sorhoz az elso oszlop harmadik elemjét 

        if (!mostanielement.Művei2) {
            harmadiksor.colSpan = 2 // ha nincs tudos2 akkor colspan 2
        }else {
            const negyediksor = document.createElement('td') //negyediksor létrehozása
            negyediksor.innerHTML = mostanielement.Művei2 //negyediksor innerHTML-je a az array-ben a mostanielement (i)-nek a sor4.je
              sor.appendChild(negyediksor) //hozzátesszük a sorhoz az elso oszlop negyedik elemjét 

        bodyelement.appendChild(sor)

    }
}
}
/**
 * Ez az checkalap függvény ami egy htmlelement bemeneti értéket néz és annak megtalálja
 * az adott parentelementjében ha van error class. És annak beállítjuk az innerhtml-jét az uzenetre.
 * @param {HTMLElement} ertek 
 * @param {string} uzenet 
 * @returns {jo}
 */
function checkalap(ertek, uzenet) { // checkalap függvény aminek a bemeneti paraméteri ertek és uzenet
    let jo = true
    if (!ertek.value ) { // ha az érték nek a tulajdonsága undefined vagy "" 
        const parentElement = ertek.parentElement; //akkor létrehozunk egy parentelement változot és eltároljuk a bejővő értéknek a parentelementjét
        const errormsg = parentElement.querySelector('.error'); //majd egy errormsg változóban a bejövő értéknek parentelementjében megkeressük az első error classal rendekező dolgot.
        if (errormsg) { //ha az errormsg van akkor 
            errormsg.innerHTML = uzenet; //legyen a megadott uzenetünk az
        }
        jo = false //legyen a jo értéke false 
    }
    return jo //visszaadjuk a jo-t

}

/**
 * Ez az elso rendes check. Ez bekér kettő htmlelementet és ha mind a kettőbe van valami
 * viszont a kis checkbox nincs pipálva akkor írjuk ki hogy ez nem jó.
 * @param {HTMLElement} ertek 
 * @param {HTMLElement} ertek2 
 * @param {boolean} checkbox 
 * @param {string} uzenet 
 * @returns {jo}
 */
function check1(ertek,ertek2,checkbox, uzenet) { // check1 függvény aminek a bemeneti paraméteri ertek és uzenet
    let jo = true
    if (ertek.value && ertek2.value && checkbox == false) { // ha az érték nek a tulajdonsága undefined vagy "" 
        const parentElement = ertek2.parentElement; //akkor létrehozunk egy parentelement változot és eltároljuk a bejővő értéknek a parentelementjét
        const errormsg = parentElement.querySelector('.error'); //majd egy errormsg változóban a bejövő értéknek parentelementjében megkeressük az első error classal rendekező dolgot.
        if (errormsg) { //ha az errormsg van akkor 
            errormsg.innerHTML = uzenet; //legyen a megadott uzenetünk az
        }
        ertek.colSpan = 2 //legyen az érték colspanja 2
        ertek2.value = "" //és az érték2 értéke azaz a belseje üres string
        jo = false //legyen a jo értéke false 
    }
    return jo //visszaadjuk a jo-t

}


/**
 * Ez a check2 függvény. Ez egy htmlelement bemeneti érték és a checkbox és egy uzenet.
 * Megnézzük hogy ha az érték be nincs semmi viszont a checkbox be van nyomva akkor írjuk ki
 * hogy ez nem jó.
 * @param {HTMLElement} ertek 
 * @param {boolean} checkbox 
 * @param {string} uzenet 
 * @returns 
 */
function check2(ertek,checkbox, uzenet) { // check2 függvény aminek a bemeneti paraméteri ertek és uzenet
    let jo = true
    if (!ertek.value && checkbox == true) { // ha az érték nek a tulajdonsága undefined vagy "" 
        const parentElement = ertek.parentElement; //akkor létrehozunk egy parentelement változot és eltároljuk a bejővő értéknek a parentelementjét
        const errormsg = parentElement.querySelector('.error'); //majd egy errormsg változóban a bejövő értéknek parentelementjében megkeressük az első error classal rendekező dolgot.
        if (errormsg) { //ha az errormsg van akkor 
            errormsg.innerHTML = uzenet; //legyen a megadott uzenetünk az
        }
        jo = false //legyen a jo értéke false 
    }
    return jo //visszaadjuk a jo-t

}
/**
 * Ez a függvény generálja le nekünk a formot, Bemeneti érték egy array amiben a form
 * adatai vannak
 * @param {arrayform} arrayform 
 */
function formgen(arrayform) {
    const form = document.createElement('form') //csinálom egy form változó alatt egy formot
    form.id = 'form'
    
    for(let i = 0; i < arrayform.length; i++) { //végig iterálunk a form1 arrayünkön
        const div = document.createElement('div') //csinálunk egy div-et div névvel
        
        const label = document.createElement('label')
        label.htmlFor = arrayform[i].for //a label-nek a "fos"-os tulajdonság értéke az legyen mindig az adott ciklus i-nek az arrayben a "for"-hoz hozzákapcsolt érték.
        label.innerText = arrayform[i].label//a label-nek legyen az innerhtml-je az adott ciklis i-nek az arrayban a "label"-hez kapcsolt érték.

        const input = document.createElement('input') //csinálunk egy inputot
        
        input.id = arrayform[i].id //az input id-je legyen mindig az arrayban az id tulajdonság mögötti értékek valamelyik attól függ hol tartunk az iterácion. 
        input.name = arrayform[i].id//az input name-je legyen szintén ugyan az mint az id mert az ugyan az.
        input.type = 'text'  //az input typeja legyen text
        if(arrayform[i].label == "Szeretnél megadni második művet is?"){ //megnézzük hogy ha az arrayformon  belül az egyik labelnek az a neve hogy "Szeretnél megadni második művet is?"
            input.type = 'checkbox' //akkor az ott lévő input type az legyen checkbox
        }

        const br = document.createElement('br') // csinálunk egy br-t hogy ne legyn csúnya és ne legyen olyan közel egymáshoz minden

       div.appendChild(label) //a fődivunkhöz hozzátesszük a labelt amiben már van sok minden (for, innerhtml)
       div.appendChild(br) //a fődivunkhöz hozzátesszük a br-t hogy itt mér tényleg lássuk hogy szép lesz
       div.appendChild(input) //a fődivunkhöz az inputot amiben itt is már van (id,name,type)

        const errordivecske = document.createElement('div') //csináluk egy divet errordivecske névvel

        errordivecske.className = 'error'
        div.appendChild(errordivecske)
    
        form.appendChild(div)
    }
    const button = document.createElement('button') //csinálunk egy gombot
   button.innerHTML = "Hozzáadás" //a gombnak legyen az innerhtml-je a "Hozzáadás"
   document.body.appendChild(form) //a bodyhoz hozzátesszük a formot
   form.appendChild(button) //majd a gombot pedig a formhoz
}
