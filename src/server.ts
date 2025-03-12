import fastify from "fastify";
import cors from "@fastify/cors"

const server = fastify({logger:true})

server.register(cors, {origin:"*",} )

const formula1Teams = [
    { id: 1, nome: "Mercedes-AMG Petronas Formula One Team", base: "Brackley, Reino Unido" },
    { id: 2, nome: "Red Bull Racing", base: "Milton Keynes, Reino Unido" },
    { id: 3, nome: "Scuderia Ferrari", base: "Maranello, Itália" },
    { id: 4, nome: "McLaren F1 Team", base: "Woking, Reino Unido" },
    { id: 5, nome: "Aston Martin Aramco Cognizant Formula One Team", base: "Silverstone, Reino Unido" },
    { id: 6, nome: "Alpine F1 Team", base: "Enstone, Reino Unido" },
    { id: 7, nome: "Scuderia AlphaTauri", base: "Faenza, Itália" },
    { id: 8, nome: "Williams Racing", base: "Grove, Reino Unido" },
    { id: 9, nome: "Alfa Romeo Racing ORLEN", base: "Hinwil, Suíça" },
    { id: 10, nome: "Haas F1 Team", base: "Kannapolis, Estados Unidos" }
];

const formula1Drivers = [
    { id: 1, nome: "Lewis Hamilton", equipeId: 1, nacionalidade: "Britânico" },
    { id: 2, nome: "George Russell", equipeId: 1, nacionalidade: "Britânico" },
    { id: 3, nome: "Max Verstappen", equipeId: 2, nacionalidade: "Holandês" },
    { id: 4, nome: "Sergio Pérez", equipeId: 2, nacionalidade: "Mexicano" },
    { id: 5, nome: "Charles Leclerc", equipeId: 3, nacionalidade: "Monegasco" },
    { id: 6, nome: "Carlos Sainz Jr.", equipeId: 3, nacionalidade: "Espanhol" },
    { id: 7, nome: "Lando Norris", equipeId: 4, nacionalidade: "Britânico" },
    { id: 8, nome: "Oscar Piastri", equipeId: 4, nacionalidade: "Australiano" },
    { id: 9, nome: "Fernando Alonso", equipeId: 5, nacionalidade: "Espanhol" },
    { id: 10, nome: "Lance Stroll", equipeId: 5, nacionalidade: "Canadense" },
    { id: 11, nome: "Esteban Ocon", equipeId: 6, nacionalidade: "Francês" },
    { id: 12, nome: "Pierre Gasly", equipeId: 6, nacionalidade: "Francês" },
    { id: 13, nome: "Yuki Tsunoda", equipeId: 7, nacionalidade: "Japonês" },
    { id: 14, nome: "Daniel Ricciardo", equipeId: 7, nacionalidade: "Australiano" },
    { id: 15, nome: "Alexander Albon", equipeId: 8, nacionalidade: "Tailandês" },
    { id: 16, nome: "Logan Sargeant", equipeId: 8, nacionalidade: "Americano" },
    { id: 17, nome: "Valtteri Bottas", equipeId: 9, nacionalidade: "Finlandês" },
    { id: 18, nome: "Guanyu Zhou", equipeId: 9, nacionalidade: "Chinês" },
    { id: 19, nome: "Kevin Magnussen", equipeId: 10, nacionalidade: "Dinamarquês" },
    { id: 20, nome: "Nico Hülkenberg", equipeId: 10, nacionalidade: "Alemão" }
];

// Exemplo de como acessar os dados
console.log(formula1Teams);
server.get("/teams", async(request, response)=>{
    response.type("application/json").code(200);
    return {formula1Teams}

})

server.get("/racers", async(request, response)=>{
    response.type("application/json").code(200);
    return{formula1Drivers}
})

interface DriverParams{
    id: string
}

server.get<{Params: DriverParams}>("/racers/:id", async(request, response) =>{
    const id = parseInt(request.params.id);
    const driver = formula1Drivers.find((d)=> d.id === id);

    if(!driver){
        response.type("application/json").code(404);
        return {message: "Piloto não encontrado"}
    }else{
        response.type("application/json").code(200);
        return {driver}
    }

})

server.listen({port:3333}, ()=>{
    console.log("Server Init");
})