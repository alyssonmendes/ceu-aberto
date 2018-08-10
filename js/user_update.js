const informacoes_climaticas = document.querySelector(".card-body.inf_clim")
const prob_chuva = document.querySelector(".card-body.probabilidade_chuva")
const condicao = document.querySelector(".card-body.condicao")
const situacao = [document.querySelector(".situacao1"), document.querySelector(".situacao2"), document.querySelector(".situacao3")]


inserir_IC()
inserir_PC()
inserir_cond()
inserir_situacao()

function inserir_situacao() {
    let url = "user.json";
    let i;

    fetch(url)
        .then(res => res.json())
        .then(data => {

            for (i = 0; i < 3; i++) {
                let situ = `<p>${data.sensor[i]}</p>`;
                situacao[i].insertAdjacentHTML("beforeend", situ);

            }


        })
}




function inserir_IC() {


    var requisicao = 'http://apiadvisor.climatempo.com.br/api/v1/weather/locale/7364/current?token=2fe1e0eea67e5c6a1f9096c61b29d808'

    fetch(requisicao)
        .then(res => res.json())
        .then(r1 => {

            let local_data = ''
            let mes = ''
            let dia = ''
            let time = new Date()

            if (time.getMonth() == 0) mes = 'Janeiro'
            else if (time.getMonth() == 1) mes = 'Fevereiro'
            else if (time.getMonth() == 2) mes = 'Março'
            else if (time.getMonth() == 3) mes = 'Abril'
            else if (time.getMonth() == 4) mes = 'Maio'
            else if (time.getMonth() == 5) mes = 'Junho'
            else if (time.getMonth() == 6) mes = 'Julho'
            else if (time.getMonth() == 7) mes = 'Agosto'
            else if (time.getMonth() == 8) mes = 'Setembro'
            else if (time.getMonth() == 9) mes = 'Outubro'
            else if (time.getMonth() == 10) mes = 'Novembro'
            else if (time.getMonth() == 11) mes = 'Dezembro'

            if (time.getDay() == 0) dia = 'Domingo'
            else if (time.getDay() == 1) dia = 'Segunda-feira'
            else if (time.getDay() == 2) dia = 'Terça-feira'
            else if (time.getDay() == 3) dia = 'Quarta-feira'
            else if (time.getDay() == 4) dia = 'Quinta-feira'
            else if (time.getDay() == 5) dia = 'Sexta-feira'
            else if (time.getDay() == 6) dia = 'Sábado'


            local_data = `<div class="row">
        <div class="col">
        <p>${dia}, ${time.getDate()} de ${mes} de ${time.getFullYear()}, ${r1.name} - ${r1.state}</p>
        </div>
        </div>
        <div class="row">
                <div class="col">
                    <p ><b>Temperatura</b></p>
                </div>
                <div class="col">
                    <p>${r1.data.temperature}°C</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p><b>Umidade Relativa do Ar:</b></p>
                </div>
                <div class="col">
                    <p>${r1.data.humidity}%</p>
                </div>
            </div>`

            informacoes_climaticas.insertAdjacentHTML("beforeend", local_data)


        })
}

function inserir_PC() {

    fetch('http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/7364/days/15?token=2fe1e0eea67e5c6a1f9096c61b29d808')
        .then(res => res.json())
        .then(r2 => {

            let PC = ''

            PC = `<div class="row">
        <div class="col">
            <p>
                <h3 class="counter">${r2.data[1].rain.probability}%</h3>
              </p>
        </div>
      </div>`

            prob_chuva.insertAdjacentHTML("beforeend", PC)


        })

}

function inserir_cond() {

    let cond = ''

    fetch('http://apiadvisor.climatempo.com.br/api/v1/weather/locale/7364/current?token=2fe1e0eea67e5c6a1f9096c61b29d808')
        .then(res => res.json())
        .then(r3 => {

            cond = `<div class="row">
        <div class="col cond">
            <p>${r3.data.condition}</p><!--API-->
        </div>
      </div>`

            condicao.insertAdjacentHTML("beforeend", cond)

        })

}