const situacao = [document.querySelector(".problems"), document.querySelector(".acumulo")]


inserir_situacao()

function inserir_situacao() {
    let url = "admin.json";

    fetch(url)
        .then(res => res.json())
        .then(data => {


            let problems = `${data.problemas_saude}`;
            situacao[0].insertAdjacentHTML("beforeend", problems);

            let acumulo = `${data.casos_acumulo}`;
            situacao[1].insertAdjacentHTML("beforeend", acumulo);


        })
}