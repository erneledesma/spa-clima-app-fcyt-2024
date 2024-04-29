
import getData from '../utils/getData';


const ClimaApp = async () => {

    const climaapp = await getData();
    console.log(climaapp);
    
    const view = `
    <div class="Characters">
        <article class="Character-card">
            <img src="" alt="">
            <h2>Ciudad a monitorear: <span>${climaapp.name}</span></h2>
        </article>

        <article class="Characters-card">
            <h3>Clima: <span>${climaapp.weather[0].description}</span></ </h3>
            <h3>Temperatura Max: <span>${climaapp.main.temp_max} Cº</span></</h3>
            <h3>Temperatura Min: <span>${climaapp.main.temp_min} Cº</span></</h3>
            <h3>Presion atmosferica: <span>${climaapp.main.pressure} HP</span></</h3>
            <h3>Humedad: <span>${climaapp.main.humidity} %</span></</h3>
            <h3>Velocidad del viento: <span>${climaapp.wind.speed} KM/H</span></</h3>
        </article>
</div> 
    `
    return view;
}

export default ClimaApp;