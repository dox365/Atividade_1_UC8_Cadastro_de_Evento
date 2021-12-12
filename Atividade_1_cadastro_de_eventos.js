    DataAtual= new Date();

    Data= new Date(12/12/2021);

    if (Data < DataAtual){
        console.log("Data Inválida, insira data posterior ao dia de Hoje.");
} else {
        console.log("Data Válida, evento poderá ser cadastrado.");        
	};
let (IdadeDoParticipante  =18);
if (IdadeDoParticipante >=18)	{
   				 console.log("Participante cadastrado com sucesso.")
				} else {
   				 console.log("Evento proibido para menores de 18 anos.")
				}

let (ListaDeParticipantes = ["Danilo", "Patricia", "Zuleika"]);

if (ListaDeParticipantes.length < 100)	{
   					 console.log("Deseja cadastrar novo participante?")
					} else {
    					console.log("Não é possível cadastrar mais participantes")
					}

console.log("Os participantes são:",ListaDeParticipantes)